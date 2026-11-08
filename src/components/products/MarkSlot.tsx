import type { Product } from '@/data/products';
import { cn } from '@/lib/cn';

/**
 * Plain stand-in for a product mark. The product-marks work replaces this with the real
 * ProductMark component; keep the same footprint (size-10, neutral tile).
 */
export function MarkSlot({ product, className }: { product: Product; className?: string }) {
  return (
    <span
      aria-hidden
      data-mark-slot={product.slug}
      className={cn(
        'border-border bg-canvas text-muted grid size-10 shrink-0 place-items-center rounded-xl border font-mono text-xs font-semibold',
        className,
      )}
    >
      {product.name.slice(0, 2)}
    </span>
  );
}
