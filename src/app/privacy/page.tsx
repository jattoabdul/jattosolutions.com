import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'Privacy information for the Jatto IT Solutions company website.',
};

export default function PrivacyPage() {
  return (
    <article className="page-shell section-space max-w-4xl">
      <p className="eyebrow">Legal</p>
      <h1 className="page-title mt-7">Privacy</h1>
      <p className="text-muted mt-6 text-sm">Last updated August 19, 2026</p>
      <div className="text-muted mt-14 space-y-10 text-base leading-8">
        <section>
          <h2 className="text-ink text-xl font-semibold">This company website</h2>
          <p className="mt-3">
            This notice covers jattosolutions.com. Individual Jatto products may have their own
            privacy notices describing the information needed for their specific workflows.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">Information you send</h2>
          <p className="mt-3">
            If you contact us by email, we receive the address, message, and any information you
            choose to include. We use it to respond, evaluate a potential working relationship, and
            maintain relevant business records.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">Website operations</h2>
          <p className="mt-3">
            Hosting and security providers may process basic technical information such as request
            logs, browser details, and IP addresses to deliver and protect the website. We do not
            sell personal information.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">Questions</h2>
          <p className="mt-3">
            For questions or requests concerning this website, email{' '}
            <a
              className="text-link text-ink underline underline-offset-4"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
