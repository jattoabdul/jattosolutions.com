// Shared by the server action and the client form, so both validate the same way.

export const TIMING_OPTIONS = [
  { value: 'now', label: 'As soon as possible' },
  { value: '1-3-months', label: 'In the next 1 to 3 months' },
  { value: '3-6-months', label: 'In 3 to 6 months' },
  { value: 'exploring', label: 'Just exploring for now' },
] as const;

export type ContactField = 'name' | 'email' | 'company' | 'project' | 'timing';

export type ContactValues = Record<ContactField, string>;

export type ContactErrors = Partial<Record<ContactField, string>>;

export type ContactState =
  | { status: 'idle' }
  | { status: 'invalid'; id: string; values: ContactValues; errors: ContactErrors }
  | { status: 'sent'; name: string }
  | {
      status: 'failed';
      id: string;
      values: ContactValues;
      reason: 'unavailable' | 'rate-limited';
    };

export const REPLY_TIME = 'within two business days';

export const LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  project: 4000,
} as const;

// Deliberately loose: one @, a dot in the domain, no spaces. The reply is the real check.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function readValues(formData: FormData): ContactValues {
  const get = (key: string) => {
    const value = formData.get(key);
    return typeof value === 'string' ? value.trim() : '';
  };
  return {
    name: get('name'),
    email: get('email'),
    company: get('company'),
    project: get('project'),
    timing: get('timing'),
  };
}

export function validateField(field: ContactField, value: string): string | undefined {
  switch (field) {
    case 'name':
      if (!value) return 'Enter your name.';
      if (value.length > LIMITS.name) return `Keep your name under ${LIMITS.name} characters.`;
      return;
    case 'email':
      if (!value) return 'Enter your email so we can reply.';
      if (value.length > LIMITS.email || !EMAIL_PATTERN.test(value))
        return 'Enter an email address like name@company.com.';
      return;
    case 'company':
      if (value.length > LIMITS.company)
        return `Keep the company name under ${LIMITS.company} characters.`;
      return;
    case 'project':
      if (!value) return 'Tell us a little about what you are building.';
      if (value.length < 10) return 'Add a sentence or two so we can reply usefully.';
      if (value.length > LIMITS.project)
        return `Keep this under ${LIMITS.project} characters; we can go deeper on a call.`;
      return;
    case 'timing':
      if (!TIMING_OPTIONS.some((option) => option.value === value)) return 'Choose a timing.';
      return;
  }
}

export function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  for (const field of Object.keys(values) as ContactField[]) {
    const error = validateField(field, values[field]);
    if (error) errors[field] = error;
  }
  return errors;
}

export function timingLabel(value: string): string {
  return TIMING_OPTIONS.find((option) => option.value === value)?.label ?? value;
}
