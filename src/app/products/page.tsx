import type { Metadata } from 'next';
import { ProductCard } from '@/components/products/ProductCard';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Discova, TrustKarry, Pinnr, RuleNorth and InferGo: software products and open-source tools from Jatto Solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">Products and open source</p>
            <h1 className="page-title mt-7">Five products, each for a specific job.</h1>
            <p className="lede mt-8">
              For reading about technology, sending items between Canada and Nigeria, selling on
              Pinterest, checking international orders, and running models in Go.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell py-8 sm:py-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} reverse={index % 2 === 1} />
        ))}
      </section>

      <ContactBand />
    </>
  );
}
