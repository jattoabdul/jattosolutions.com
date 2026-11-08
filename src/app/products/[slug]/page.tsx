import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductStatus } from '@/components/products/ProductStatus';
import { ProductVisual } from '@/components/products/ProductVisual';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';
import { getProduct, products } from '@/data/products';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return {};

  const description = `${product.tagline} ${product.summary}`;

  return {
    title: product.name,
    description,
    openGraph: {
      title: `${product.name} by Jatto IT Solutions`,
      description,
      // Without a product view, the site-wide Open Graph image applies.
      ...(product.image && { images: [{ url: product.image.src, alt: product.image.alt }] }),
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <>
      <article>
        <header className="page-shell section-space pb-12 lg:pb-16">
          <Reveal>
            <Link
              href="/products"
              className="text-link text-muted inline-flex text-sm font-semibold"
            >
              <span aria-hidden className="mr-2">
                ←
              </span>
              All products
            </Link>
            <ProductStatus product={product} className="mt-10 flex" />
            <h1 className="page-title mt-6">{product.name}</h1>
            <p className="mt-7 max-w-4xl text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              {product.tagline}
            </p>
            <p className="text-muted mt-5 max-w-3xl text-lg leading-8">{product.summary}</p>
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary mt-9"
              >
                {product.externalLabel}{' '}
                <span aria-hidden className="ml-2">
                  ↗
                </span>
              </a>
            )}
          </Reveal>
        </header>

        <Reveal className="page-shell">
          <div
            className={`media-frame relative ${product.image ? 'aspect-[16/9]' : 'aspect-[2/1] sm:aspect-[3/1]'}`}
          >
            <ProductVisual product={product} priority sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
        </Reveal>

        <section className="page-shell section-space grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              What needs to get better
            </h2>
            <p className="text-muted mt-6 text-lg leading-8">{product.problem}</p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.06}>
            <h2 className="text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              How {product.name} approaches it
            </h2>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-8">{product.approach}</p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="bg-surface rounded-2xl p-6 font-medium tracking-[-0.02em]"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {product.gallery?.map((image) => (
          <Reveal key={image.src} className="page-shell pb-8 sm:pb-12">
            <div className="media-frame relative aspect-[16/9]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        ))}

        <section className="page-shell py-16 sm:py-24">
          <Reveal className="bg-surface grid gap-6 rounded-3xl p-7 sm:p-10 lg:grid-cols-12 lg:gap-8">
            <h2 className="text-2xl font-semibold tracking-[-0.045em] lg:col-span-4">
              Where {product.name} stands
            </h2>
            <div className="lg:col-span-8">
              <ProductStatus product={product} />
              <p className="mt-4 text-xl leading-8 tracking-[-0.025em]">{product.releaseNote}</p>
            </div>
          </Reveal>
        </section>
      </article>

      <ContactBand />
    </>
  );
}
