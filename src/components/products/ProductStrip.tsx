import Link from 'next/link';
import { products } from '@/data/products';
import { ProductAction } from './ProductAction';
import { ProductMark } from './ProductMark';
import { ProductStatus } from './ProductStatus';

/** All five products directly under the hero: the way in for users, the proof for clients. */
export function ProductStrip() {
  return (
    <section aria-labelledby="product-strip-title" className="border-border bg-surface border-t">
      <div className="page-shell py-10 lg:py-12">
        <h2 id="product-strip-title" className="eyebrow">
          Our products
        </h2>
        <ul className="border-border bg-border mt-6 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <li key={product.slug} className="bg-surface flex flex-col p-5">
              <div className="flex items-center gap-3">
                <ProductMark slug={product.slug} size="sm" />
                <div>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-link block font-semibold tracking-[-0.02em]"
                  >
                    {product.name}
                  </Link>
                  <ProductStatus product={product} className="mt-1" />
                </div>
              </div>
              <p className="text-muted mt-4 flex-1 text-sm leading-6">{product.userLine}</p>
              <ProductAction
                product={product}
                className="text-link mt-4 inline-flex text-sm font-semibold"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
