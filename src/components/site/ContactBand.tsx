import Link from 'next/link';
import { siteConfig } from '@/data/site';

export function ContactBand() {
  return (
    <section className="on-action border-border bg-action text-action-ink border-t">
      <div className="page-shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div>
          <p className="font-mono text-[0.69rem] tracking-[0.14em] uppercase opacity-85">
            Work with us
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Have a product to build or a workflow to fix?
          </h2>
        </div>
        <Link
          href={siteConfig.contact.href}
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-current px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          {siteConfig.contact.label}{' '}
          <span aria-hidden className="ml-2">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
