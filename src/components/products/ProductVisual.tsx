import Image from 'next/image';
import type { Product } from '@/data/products';
import { cn } from '@/lib/cn';

/**
 * Product screenshot at its own shape, or a typographic panel for a product that
 * has no real product view yet. Never substitute a mock screenshot for an
 * unreleased product.
 */
export function ProductVisual({
  product,
  sizes,
  preload = false,
  placeholderClassName = 'aspect-[16/10]',
}: {
  product: Product;
  sizes: string;
  preload?: boolean;
  /** Shape of the "coming soon" panel; screenshots keep their intrinsic size. */
  placeholderClassName?: string;
}) {
  if (!product.image) {
    return (
      <div
        className={cn(
          'bg-wash flex flex-col items-center justify-center gap-3 p-8 text-center',
          placeholderClassName,
        )}
      >
        <span className="text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">
          {product.name}
        </span>
        <span className="text-muted text-base font-medium sm:text-lg">Coming soon</span>
      </div>
    );
  }

  return (
    <Image
      src={product.image.src}
      alt={product.image.alt}
      width={product.image.width}
      height={product.image.height}
      preload={preload}
      sizes={sizes}
      className="block h-auto w-full"
    />
  );
}
