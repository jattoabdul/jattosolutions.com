import type { Product } from '@/data/products';
import { cn } from '@/lib/cn';

export function ProductStatus({ product, className }: { product: Product; className?: string }) {
  const active = product.status === 'live' || product.status === 'public-alpha';

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] uppercase',
        active ? 'text-success' : 'text-muted',
        className,
      )}
    >
      <span className="status-dot" aria-hidden />
      {product.statusLabel}
    </span>
  );
}
