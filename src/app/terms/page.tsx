import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms',
  description: 'Website terms for Jatto IT Solutions.',
};

export default function TermsPage() {
  return (
    <article className="page-shell section-space max-w-4xl">
      <p className="eyebrow">Legal</p>
      <h1 className="page-title mt-7">Website terms</h1>
      <p className="text-muted mt-6 text-sm">Last updated August 19, 2026</p>
      <div className="text-muted mt-14 space-y-10 text-base leading-8">
        <section>
          <h2 className="text-ink text-xl font-semibold">Informational use</h2>
          <p className="mt-3">
            This website describes Jatto IT Solutions and its portfolio. Product availability,
            features, and release timing may change as the products develop. A product&apos;s own
            terms apply when you use that product.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">Intellectual property</h2>
          <p className="mt-3">
            Website content, branding, and non-open-source materials belong to Jatto IT Solutions or
            the identified rights holder. Open-source projects are provided under the licence
            published in their repositories.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">External links</h2>
          <p className="mt-3">
            Links to product sites, source repositories, and third-party services are provided for
            convenience. Their own terms and privacy practices apply.
          </p>
        </section>
        <section>
          <h2 className="text-ink text-xl font-semibold">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{' '}
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
