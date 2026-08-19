import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[70svh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="page-title mt-7">This page is not part of the portfolio.</h1>
      <p className="lede mt-7">The address may have changed, or the page may no longer exist.</p>
      <Link href="/" className="button button-primary mt-9">
        Return home
      </Link>
    </section>
  );
}
