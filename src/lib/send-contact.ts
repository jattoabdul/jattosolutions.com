import 'server-only';
import { Resend } from 'resend';
import { siteConfig } from '@/data/site';
import { timingLabel, type ContactValues } from '@/lib/contact';

export type SendResult = { ok: true } | { ok: false; reason: 'not-configured' | 'provider-error' };

function composeText(values: ContactValues) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || '(not given)'}`,
    `Timing: ${timingLabel(values.timing)}`,
    '',
    'What they are building:',
    values.project,
    '',
    '—',
    'Sent from the Start a project form on jattosolutions.com. Reply to this email to answer them.',
  ].join('\n');
}

export async function sendContactEmail(values: ContactValues): Promise<SendResult> {
  const subject = `Start a project: ${values.name}${values.company ? ` (${values.company})` : ''}`;
  const text = composeText(values);

  // Local stub for checking the success state without a key. Ignored in production builds.
  if (process.env.CONTACT_EMAIL_MODE === 'log' && process.env.NODE_ENV !== 'production') {
    console.info('[contact] CONTACT_EMAIL_MODE=log, not sending:\n', {
      subject,
      replyTo: values.email,
      text,
    });
    return { ok: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !from) {
    console.warn(
      '[contact] RESEND_API_KEY or CONTACT_FROM_EMAIL is not set; showing the email fallback.',
    );
    return { ok: false, reason: 'not-configured' };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      replyTo: values.email,
      subject,
      text,
    });
    if (error) {
      console.error('[contact] Resend rejected the message:', error.name, error.message);
      return { ok: false, reason: 'provider-error' };
    }
    return { ok: true };
  } catch (error) {
    console.error('[contact] Resend request failed:', error);
    return { ok: false, reason: 'provider-error' };
  }
}
