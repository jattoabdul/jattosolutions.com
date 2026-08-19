import Link from 'next/link';

export function ContactBand() {
  return (
    <section className="border-border bg-accent text-accent-ink border-t">
      <div className="page-shell grid gap-8 py-16 md:grid-cols-[1fr_auto] md:items-end md:py-24">
        <div>
          <p className="font-mono text-[0.69rem] tracking-[0.14em] uppercase opacity-70">
            Start a conversation
          </p>
          <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Building something that needs a durable technical partner?
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-current px-5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
        >
          Talk to Jatto{' '}
          <span aria-hidden className="ml-2">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
