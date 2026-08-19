import type { Metadata } from 'next';
import { ProductCard } from '@/components/products/ProductCard';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore the software products and open-source tools being built by Jatto IT Solutions.',
};

export default function ProductsPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">Products and open source</p>
            <h1 className="page-title mt-7">Useful software, built with a point of view.</h1>
            <p className="lede mt-8">
              Five projects across learning, community coordination, merchant growth, shipment
              review, and developer infrastructure.
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
