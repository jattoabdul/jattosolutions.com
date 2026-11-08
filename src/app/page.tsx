import Image from 'next/image';
import Link from 'next/link';
import { HeroCollage } from '@/components/home/HeroCollage';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductStatus } from '@/components/products/ProductStatus';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';
import { commercialProducts, openSourceProducts, products } from '@/data/products';

const principles = [
  {
    title: 'Find the real job',
    body: 'Start with the decision, handoff, or repeated task that software should improve.',
  },
  {
    title: 'Build the narrow path',
    body: 'Make the successful customer path obvious before adding breadth or automation.',
  },
  {
    title: 'Ship with evidence',
    body: 'Use real workflows, clear release states, and measured iteration to guide the product.',
  },
];

export default function Home() {
  const inferGo = openSourceProducts[0];

  return (
    <>
      <section className="overflow-hidden">
        {/* The hero renders without a scroll reveal so it is visible before hydration. */}
        <div className="page-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <div>
            <h1 className="display-title">Software for useful work.</h1>
            <p className="lede mt-8 max-w-lg">
              Jatto Solutions is an independent product studio in Toronto. We build focused products
              for commerce, communities, learning, and developer infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="button button-primary">
                Explore products
              </Link>
              <Link href="/contact" className="button button-secondary">
                Work with us
              </Link>
            </div>
          </div>
          <Reveal>
            <HeroCollage />
          </Reveal>
        </div>
        <div className="bg-surface">
          <ul
            aria-label="Product status"
            className="page-shell text-muted grid grid-cols-2 gap-x-4 gap-y-5 py-6 text-xs sm:grid-cols-3 lg:grid-cols-6"
          >
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-link flex min-h-10 flex-col justify-center"
                >
                  <span className="text-ink text-sm font-semibold">{product.name}</span>
                  <span className="mt-1">{product.statusLabel}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-shell section-space" id="products">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <h2 className="section-title lg:col-span-8">Each product starts with a clear job.</h2>
          <p className="lede self-end lg:col-span-4 lg:text-base">
            Each product shows its current stage, so you can see what is ready to use today.
          </p>
        </Reveal>

        <div className="mt-10">
          {commercialProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="page-shell section-space grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ProductStatus product={inferGo} />
            <h2 className="section-title mt-5">{inferGo.name}</h2>
            <p className="mt-5 text-xl font-medium tracking-[-0.035em]">
              Open source. {inferGo.tagline}
            </p>
            <p className="text-muted mt-5 max-w-lg leading-7">{inferGo.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={`/products/${inferGo.slug}`} className="button button-primary">
                Explore InferGo
              </Link>
              <a
                href={inferGo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-secondary"
              >
                GitHub{' '}
                <span aria-hidden className="ml-2">
                  ↗
                </span>
              </a>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-7">
            {inferGo.image && (
              <Link
                href={`/products/${inferGo.slug}`}
                className="media-frame block"
                aria-label="Read about InferGo"
              >
                <Image
                  src={inferGo.image.src}
                  alt={inferGo.image.alt}
                  width={inferGo.image.width}
                  height={inferGo.image.height}
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="block h-auto w-full"
                />
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <h2 className="section-title lg:col-span-7">
            Product thinking backed by hands-on engineering.
          </h2>
          <p className="lede self-end lg:col-span-5 lg:text-base">
            Jatto is a product company first. We also take on a small number of technical
            partnerships where product judgment and careful delivery matter.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {principles.map((principle) => (
            <Reveal key={principle.title} className="bg-surface rounded-3xl p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-[-0.045em]">{principle.title}</h3>
              <p className="text-muted mt-4 leading-7">{principle.body}</p>
            </Reveal>
          ))}
        </div>
        <Link href="/about" className="text-link mt-8 inline-flex text-sm font-semibold">
          About the studio{' '}
          <span aria-hidden className="ml-2">
            →
          </span>
        </Link>
      </section>

      <ContactBand />
    </>
  );
}
