import Image from 'next/image';
import type { Product } from '@/data/products';

/**
 * Product screenshot, or a typographic panel for a product that has no real
 * product view yet. Never substitute a mock screenshot for an unreleased product.
 */
export function ProductVisual({
  product,
  sizes,
  priority = false,
}: {
  product: Product;
  sizes: string;
  priority?: boolean;
}) {
  if (!product.image) {
    return (
      <div className="bg-wash absolute inset-0 flex flex-col items-center justify-center gap-3 p-8 text-center">
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
      fill
      priority={priority}
      sizes={sizes}
      className="object-cover object-top"
    />
  );
}
