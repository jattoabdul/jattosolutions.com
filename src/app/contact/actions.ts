'use server';

import { headers } from 'next/headers';
import { readValues, validate, type ContactState } from '@/lib/contact';
import { rateLimit } from '@/lib/rate-limit';
import { sendContactEmail } from '@/lib/send-contact';

const HONEYPOT_FIELD = 'website';

async function clientIp() {
  const h = await headers();
  const forwarded = h.get('x-forwarded-for');
  return forwarded?.split(',')[0]?.trim() || h.get('x-real-ip') || 'unknown';
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = readValues(formData);

  // Bots fill every field. Pretend it worked so they do not learn to skip it.
  const honeypot = formData.get(HONEYPOT_FIELD);
  if (typeof honeypot === 'string' && honeypot.trim() !== '') {
    console.info('[contact] honeypot filled; dropped.');
    return { status: 'sent', name: values.name };
  }

  const errors = validate(values);
  if (Object.keys(errors).length > 0) {
    return { status: 'invalid', id: crypto.randomUUID(), values, errors };
  }

  const { allowed } = rateLimit(`contact:${await clientIp()}`, { limit: 5, windowMs: 15 * 60_000 });
  if (!allowed) {
    return { status: 'failed', id: crypto.randomUUID(), values, reason: 'rate-limited' };
  }

  const result = await sendContactEmail(values);
  if (!result.ok) {
    return { status: 'failed', id: crypto.randomUUID(), values, reason: 'unavailable' };
  }

  return { status: 'sent', name: values.name };
}
