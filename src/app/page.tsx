import Image from 'next/image';
import Link from 'next/link';
import { HeroCollage } from '@/components/home/HeroCollage';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductStatus } from '@/components/products/ProductStatus';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';
import { commercialProducts, openSourceProducts } from '@/data/products';

export default function Home() {
  const inferGo = openSourceProducts[0];

  return (
    <>
      <section className="border-border overflow-hidden border-b">
        <div className="page-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-12">
          <Reveal>
            <p className="eyebrow">Independent product studio · Toronto</p>
            <h1 className="display-title mt-7">Software for useful work.</h1>
            <p className="lede mt-8 max-w-lg">
              We build focused products for commerce, communities, learning, and developer
              infrastructure.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/products" className="button button-primary">
                Explore products
              </Link>
              <Link href="/contact" className="button button-secondary">
                Work with us
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <HeroCollage />
          </Reveal>
        </div>
        <div className="border-border bg-surface border-t">
          <div className="page-shell text-muted grid grid-cols-2 gap-px py-5 text-xs sm:grid-cols-5">
            {commercialProducts.concat(openSourceProducts).map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="text-link border-border flex min-h-10 flex-col justify-center border-l px-4 first:border-l-0"
              >
                <span className="text-ink font-semibold">{product.name}</span>
                <span className="mt-1">{product.statusLabel}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space" id="products">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">The product portfolio</p>
            <h2 className="section-title mt-6">Five projects. Each built around a clear job.</h2>
          </div>
          <p className="lede self-end lg:col-span-4 lg:text-base">
            From product discovery to shipment review, each project starts with a workflow worth
            making clearer.
          </p>
        </Reveal>

        <div className="mt-14">
          {commercialProducts.map((product, index) => (
            <ProductCard key={product.slug} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="page-shell section-space grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Open source</p>
            <ProductStatus product={inferGo} className="mt-7" />
            <h2 className="section-title mt-5">{inferGo.name}</h2>
            <p className="mt-5 text-xl font-medium tracking-[-0.035em]">{inferGo.tagline}</p>
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
          <Reveal className="lg:col-span-7" delay={0.08}>
            <Link
              href={`/products/${inferGo.slug}`}
              className="media-frame relative block aspect-[2/1]"
              aria-label="Read about InferGo"
            >
              <Image
                src={inferGo.image.src}
                alt={inferGo.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">How the studio works</p>
            <h2 className="section-title mt-6">Product thinking backed by hands-on engineering.</h2>
          </div>
          <p className="lede self-end lg:col-span-5 lg:text-base">
            Jatto is a product company first. We also take on a small number of technical
            partnerships where product judgment and careful delivery matter.
          </p>
        </Reveal>
        <div className="border-border mt-16 grid border-y md:grid-cols-3">
          {[
            [
              '01',
              'Find the real job',
              'Start with the decision, handoff, or repeated task that software should improve.',
            ],
            [
              '02',
              'Build the narrow path',
              'Make the successful customer path obvious before adding breadth or automation.',
            ],
            [
              '03',
              'Ship with evidence',
              'Use real workflows, clear release states, and measured iteration to guide the product.',
            ],
          ].map(([number, title, body]) => (
            <Reveal
              key={number}
              className="border-border border-b px-1 py-8 last:border-b-0 md:border-b-0 md:border-l md:px-8 md:first:border-l-0"
            >
              <span className="eyebrow">{number}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.045em]">{title}</h3>
              <p className="text-muted mt-4 leading-7">{body}</p>
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
