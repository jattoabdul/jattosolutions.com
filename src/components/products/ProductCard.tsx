import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { cn } from '@/lib/cn';
import { Reveal } from '@/components/ui/Reveal';
import { ProductStatus } from './ProductStatus';

export function ProductCard({ product, reverse = false }: { product: Product; reverse?: boolean }) {
  return (
    <Reveal>
      <article className="border-border grid items-center gap-8 border-t py-10 lg:grid-cols-12 lg:gap-12 lg:py-16">
        <Link
          href={`/products/${product.slug}`}
          className={cn(
            'media-frame group relative aspect-[16/10] lg:col-span-7',
            reverse && 'lg:order-2',
          )}
          aria-label={`Read about ${product.name}`}
        >
          <Image
            src={product.image.src}
            alt={product.image.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-top"
          />
        </Link>
        <div className={cn('lg:col-span-5', reverse && 'lg:order-1')}>
          <ProductStatus product={product} />
          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
            <Link href={`/products/${product.slug}`} className="text-link">
              {product.name}
            </Link>
          </h3>
          <p className="mt-4 text-xl font-medium tracking-[-0.035em]">{product.tagline}</p>
          <p className="text-muted mt-5 max-w-lg leading-7">{product.summary}</p>
          <Link
            href={`/products/${product.slug}`}
            className="text-link mt-7 inline-flex text-sm font-semibold"
          >
            View product{' '}
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
