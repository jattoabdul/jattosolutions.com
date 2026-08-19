import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductStatus } from '@/components/products/ProductStatus';
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

  return {
    title: product.name,
    description: product.summary,
    openGraph: {
      title: `${product.name} by Jatto IT Solutions`,
      description: product.summary,
      images: [{ url: product.image.src, alt: product.image.alt }],
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
            <Link href="/products" className="text-link eyebrow inline-flex">
              ← All products
            </Link>
            <ProductStatus product={product} className="mt-10 flex" />
            <h1 className="page-title mt-6">{product.name}</h1>
            <p className="text-muted mt-7 max-w-4xl text-2xl font-medium tracking-[-0.04em] sm:text-3xl">
              {product.tagline}
            </p>
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
          <div className="media-frame relative aspect-[16/9]">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>

        <section className="page-shell section-space grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">The job</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              What needs to get better
            </h2>
            <p className="text-muted mt-6 text-lg leading-8">{product.problem}</p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.06}>
            <p className="eyebrow">The approach</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
              A focused product path
            </h2>
            <p className="text-muted mt-6 max-w-2xl text-lg leading-8">{product.approach}</p>
            <div className="border-border bg-border mt-10 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
              {product.highlights.map((highlight, index) => (
                <div key={highlight} className="bg-surface p-6">
                  <span className="eyebrow">0{index + 1}</span>
                  <p className="mt-5 font-medium tracking-[-0.02em]">{highlight}</p>
                </div>
              ))}
            </div>
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

        <section className="page-shell py-20 sm:py-28">
          <Reveal className="border-border grid gap-8 border-y py-10 lg:grid-cols-12">
            <p className="eyebrow lg:col-span-3">Current stage</p>
            <div className="lg:col-span-7">
              <ProductStatus product={product} />
              <p className="mt-5 text-xl leading-8 tracking-[-0.025em]">{product.releaseNote}</p>
            </div>
          </Reveal>
        </section>
      </article>

      <ContactBand />
    </>
  );
}
