import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-shell flex min-h-[70svh] flex-col items-start justify-center py-20">
      <h1 className="page-title">Page not found.</h1>
      <p className="lede mt-7">
        The address may have changed, or the page may no longer exist. Every current product is
        listed on the products page.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Link href="/products" className="button button-primary">
          See all products
        </Link>
        <Link href="/" className="button button-secondary">
          Return home
        </Link>
      </div>
    </section>
  );
}
