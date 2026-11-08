import Link from 'next/link';
import type { Product } from '@/data/products';

/** The product's own status action: external link, mailto, or internal page. */
export function ProductAction({ product, className }: { product: Product; className?: string }) {
  const { label, href } = product.action;

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}{' '}
        <span aria-hidden className="ml-1.5">
          ↗
        </span>
      </a>
    );
  }

  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={className}>
        {label}{' '}
        <span aria-hidden className="ml-1.5">
          →
        </span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}{' '}
      <span aria-hidden className="ml-1.5">
        →
      </span>
    </Link>
  );
}
