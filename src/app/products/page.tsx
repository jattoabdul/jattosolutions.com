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
      <section>
        <div className="page-shell section-space">
          <Reveal>
            <h1 className="page-title">Useful software, built with a point of view.</h1>
            <p className="lede mt-8">
              Six projects across technology reading, community handoffs, Pinterest publishing for
              product brands, order screening, Muslim schools, and developer infrastructure.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell pb-8 sm:pb-12">
        {products.map((product, index) => (
          <ProductCard key={product.slug} product={product} reverse={index % 2 === 1} />
        ))}
      </section>

      <ContactBand />
    </>
  );
}
