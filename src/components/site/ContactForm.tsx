'use client';

import {
  useActionState,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FocusEvent,
  type FormEvent,
} from 'react';
import { submitContact } from '@/app/contact/actions';
import {
  LIMITS,
  REPLY_TIME,
  TIMING_OPTIONS,
  readValues,
  timingLabel,
  validate,
  validateField,
  type ContactErrors,
  type ContactField,
  type ContactState,
  type ContactValues,
} from '@/lib/contact';

const FIELD_ORDER: ContactField[] = ['name', 'email', 'company', 'timing', 'project'];

const initialState: ContactState = { status: 'idle' };

const noopSubscribe = () => () => {};

export function ContactForm({ email }: { email: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  // Client-side errors belong to the server response they were made against; a new
  // response discards them.
  const [client, setClient] = useState<{ for: ContactState; errors: ContactErrors } | null>(null);
  const clientErrors = client && client.for === state ? client.errors : null;
  const setClientErrors = (update: (current: ContactErrors | null) => ContactErrors) =>
    setClient((current) => ({
      for: state,
      errors: update(current && current.for === state ? current.errors : null),
    }));
  // Without JavaScript the browser's own constraint checks run and the server re-validates.
  // Once hydrated, swap the browser bubbles for the inline messages below.
  const enhanced = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Move focus to whatever a server response changed.
  useEffect(() => {
    if (state.status === 'invalid') {
      focusFirstInvalid(formRef.current, state.errors);
    } else if (state.status === 'sent' || state.status === 'failed') {
      statusRef.current?.focus();
    }
  }, [state]);

  const values: Partial<ContactValues> =
    state.status === 'invalid' || state.status === 'failed' ? state.values : {};
  const errors: ContactErrors = clientErrors ?? (state.status === 'invalid' ? state.errors : {});

  if (state.status === 'sent') {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="contact-panel contact-panel-success focus-ring"
      >
        <p className="eyebrow">Message sent</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Thanks{state.name ? `, ${state.name.split(' ')[0]}` : ''}. Your note is with us.
        </h2>
        <p className="text-muted mt-4 max-w-prose leading-7">
          We reply {REPLY_TIME}, from {email}. If you do not see it, check your spam folder or write
          to us directly.
        </p>
      </div>
    );
  }

  function updateError(field: ContactField, value: string) {
    setClientErrors((current) => {
      const next = { ...(current ?? errors) };
      const message = validateField(field, value.trim());
      if (message) next[field] = message;
      else delete next[field];
      return next;
    });
  }

  function handleBlur(event: FocusEvent<HTMLFormElement>) {
    const target = event.target as unknown as HTMLInputElement;
    const field = target.name as ContactField;
    if (!FIELD_ORDER.includes(field)) return;
    // Do not nag about an empty field the visitor has only tabbed through.
    if (target.value.trim() === '' && !errors[field]) return;
    updateError(field, target.value);
  }

  function handleInput(event: FormEvent<HTMLFormElement>) {
    const target = event.target as unknown as HTMLInputElement;
    const field = target.name as ContactField;
    // Clear a message as soon as the fix lands; only re-check fields already in error.
    if (FIELD_ORDER.includes(field) && errors[field]) updateError(field, target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const found = validate(readValues(new FormData(event.currentTarget)));
    if (Object.keys(found).length > 0) {
      event.preventDefault();
      setClientErrors(() => found);
      focusFirstInvalid(event.currentTarget, found);
    }
  }

  const fieldProps = (field: ContactField) => ({
    id: `contact-${field}`,
    name: field,
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <div>
      {state.status === 'failed' ? (
        <FailurePanel
          ref={statusRef}
          email={email}
          reason={state.reason}
          values={state.values}
          enhanced={enhanced}
        />
      ) : null}

      {/* Remount per response so every control, the select included, restores the values sent. */}
      <form
        key={'id' in state ? state.id : 'initial'}
        ref={formRef}
        action={formAction}
        onSubmit={handleSubmit}
        onBlur={handleBlur}
        onInput={handleInput}
        aria-busy={pending}
        noValidate={enhanced}
        className="contact-form"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Name" field="name" error={errors.name}>
            <input
              {...fieldProps('name')}
              type="text"
              autoComplete="name"
              required
              maxLength={LIMITS.name}
              defaultValue={values.name}
              className="field-control"
            />
          </Field>
          <Field label="Email" field="email" error={errors.email}>
            <input
              {...fieldProps('email')}
              type="email"
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              required
              maxLength={LIMITS.email}
              defaultValue={values.email}
              className="field-control"
            />
          </Field>
          <Field label="Company" field="company" hint="Optional" error={errors.company}>
            <input
              {...fieldProps('company')}
              type="text"
              autoComplete="organization"
              maxLength={LIMITS.company}
              defaultValue={values.company}
              className="field-control"
            />
          </Field>
          <Field label="Timing" field="timing" error={errors.timing}>
            <select
              {...fieldProps('timing')}
              required
              defaultValue={values.timing ?? ''}
              className="field-control field-select"
            >
              <option value="" disabled>
                Choose one
              </option>
              {TIMING_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <div className="mt-6">
          <Field
            label="What you are building"
            field="project"
            hint="Who it is for, what they do today, and where you need help."
            error={errors.project}
          >
            <textarea
              {...fieldProps('project')}
              required
              minLength={10}
              maxLength={LIMITS.project}
              rows={6}
              defaultValue={values.project}
              className="field-control field-textarea"
            />
          </Field>
        </div>

        {/* Honeypot: hidden from people and assistive tech, tempting to form-filling bots. */}
        <div className="contact-trap" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <button type="submit" className="button button-primary min-w-40" disabled={pending}>
            {pending ? (
              <>
                <span className="contact-spinner" aria-hidden="true" />
                Sending…
              </>
            ) : state.status === 'failed' ? (
              'Try sending again'
            ) : (
              'Send message'
            )}
          </button>
          <p className="text-muted text-sm">We reply {REPLY_TIME}.</p>
        </div>
        <p className="sr-only" aria-live="polite">
          {pending ? 'Sending your message.' : ''}
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  field,
  hint,
  error,
  children,
}: {
  label: string;
  field: ContactField;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="field">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={`contact-${field}`} className="field-label">
          {label}
        </label>
        {hint && field === 'company' ? <span className="text-quiet text-xs">{hint}</span> : null}
      </div>
      {hint && field !== 'company' ? <p className="text-muted mt-1 text-sm">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`contact-${field}-error`} className="field-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function FailurePanel({
  ref,
  email,
  reason,
  values,
  enhanced,
}: {
  ref: React.Ref<HTMLDivElement>;
  email: string;
  reason: 'unavailable' | 'rate-limited';
  values: ContactValues;
  enhanced: boolean;
}) {
  const [copy, setCopy] = useState<'idle' | 'copied' | 'selected'>('idle');
  const addressRef = useRef<HTMLParagraphElement>(null);

  const subject = `Start a project: ${values.name}${values.company ? ` (${values.company})` : ''}`;
  const body = [
    values.project,
    '',
    `Timing: ${timingLabel(values.timing)}`,
    values.company ? `Company: ${values.company}` : '',
    '',
    values.name,
  ]
    .filter((line, index, lines) => line !== '' || lines[index - 1] !== '')
    .join('\n');
  const mailto = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopy('copied');
    } catch {
      // Clipboard refused (permissions, older browser): select the address so a keyboard copy works.
      const node = addressRef.current;
      const selection = window.getSelection();
      if (node && selection) {
        const range = document.createRange();
        range.selectNodeContents(node);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setCopy('selected');
    }
    window.setTimeout(() => setCopy('idle'), 3000);
  }

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="alert"
      className="contact-panel contact-panel-error focus-ring mb-10"
    >
      <p className="eyebrow field-error-text">Not sent</p>
      <h2 className="mt-4 text-xl font-semibold tracking-tight">
        {reason === 'rate-limited'
          ? 'That is a few messages in a short time.'
          : 'We could not send your message from here.'}
      </h2>
      <p className="text-muted mt-3 max-w-prose leading-7">
        {reason === 'rate-limited'
          ? 'Wait a few minutes and try again, or email us directly. Your message is still below.'
          : 'The problem is on our side. Email us instead; the button below opens your email app with your message already filled in.'}
      </p>
      <p ref={addressRef} className="mt-5 font-mono text-sm select-all">
        {email}
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a href={mailto} className="button button-primary">
          Email your message
        </a>
        {enhanced ? (
          <button type="button" onClick={copyEmail} className="button button-secondary">
            {copy === 'copied'
              ? 'Copied'
              : copy === 'selected'
                ? 'Address selected'
                : 'Copy email address'}
          </button>
        ) : null}
        <span className="sr-only" aria-live="polite">
          {copy === 'copied'
            ? 'Email address copied.'
            : copy === 'selected'
              ? 'Email address selected. Copy it with your keyboard.'
              : ''}
        </span>
      </div>
    </div>
  );
}

function focusFirstInvalid(form: HTMLFormElement | null, errors: ContactErrors) {
  const first = FIELD_ORDER.find((field) => errors[field]);
  if (!form || !first) return;
  const element = form.elements.namedItem(first);
  if (element instanceof HTMLElement) element.focus();
}
