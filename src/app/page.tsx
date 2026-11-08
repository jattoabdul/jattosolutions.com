import Link from 'next/link';
import { HeroCollage } from '@/components/home/HeroCollage';
import { ProductCard } from '@/components/products/ProductCard';
import { ProductStrip } from '@/components/products/ProductStrip';
import { ContactBand } from '@/components/site/ContactBand';
import { Engagements } from '@/components/studio/Engagements';
import { FeraSection } from '@/components/studio/FeraSection';
import { FounderBlock } from '@/components/studio/FounderBlock';
import { ProjectSteps } from '@/components/studio/ProjectSteps';
import { Reveal } from '@/components/ui/Reveal';
import { getProduct, type Product } from '@/data/products';
import { siteConfig } from '@/data/site';

/** Two or three products, each chosen for the client capability it proves. */
const selectedSlugs = ['pinnr', 'trustkarry', 'infergo'];
const selectedProducts = selectedSlugs
  .map((slug) => getProduct(slug))
  .filter((product): product is Product => Boolean(product));

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="border-border overflow-hidden border-b">
        <div className="page-shell grid items-center gap-10 py-16 lg:min-h-[calc(100svh-4.5rem-15rem)] lg:grid-cols-[1fr_1fr] lg:py-14">
          <Reveal>
            <p className="eyebrow">Product studio · Toronto</p>
            <h1 className="mt-7 max-w-[15ch] text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.065em] text-balance">
              A product studio that ships and operates its own software.
            </h1>
            <p className="lede mt-8 max-w-lg">
              Hire the team behind Discova, TrustKarry, Pinnr and InferGo for your next build.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={siteConfig.contact.href} className="button button-primary">
                {siteConfig.contact.label}
              </Link>
              <Link href="/products" className="button button-secondary">
                Explore products
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <HeroCollage />
          </Reveal>
        </div>

        {/* 2. Product strip: the direct path for product users */}
        <div id="products" className="scroll-mt-20">
          <ProductStrip />
        </div>
      </section>

      {/* 3. What we build for clients */}
      <section className="page-shell section-space" id="services">
        <Reveal className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">What we build for clients</p>
            <h2 className="section-title mt-6">Three kinds of work we take on.</h2>
          </div>
          <p className="lede self-end lg:col-span-5 lg:text-base">
            We take on a small number of client builds each year and bring the same standard we use
            on our own products.
          </p>
        </Reveal>
        <div className="mt-14">
          <Engagements />
        </div>
      </section>

      {/* 4. Client work */}
      <section className="border-border bg-surface border-y">
        <div className="page-shell section-space">
          <FeraSection />
        </div>
      </section>

      {/* 5. Founder */}
      <section className="page-shell section-space">
        <FounderBlock />
      </section>

      {/* 6. Selected products, each with the capability it proves */}
      <section className="border-border border-t">
        <div className="page-shell section-space">
          <Reveal className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="eyebrow">Proof in our own products</p>
              <h2 className="section-title mt-6">Five products, built and run by us.</h2>
            </div>
            <p className="lede self-end lg:col-span-4 lg:text-base">
              Each one shows a kind of work we can do for you.
            </p>
          </Reveal>
          <div className="mt-14">
            {selectedProducts.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                reverse={index % 2 === 1}
                showCapability
              />
            ))}
          </div>
          <Link href="/products" className="text-link inline-flex text-sm font-semibold">
            See all five products{' '}
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* 7. How a project starts */}
      <section className="border-border bg-surface border-t">
        <div className="page-shell section-space">
          <Reveal className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow">How a project starts</p>
              <h2 className="section-title mt-6">From first note to first release.</h2>
            </div>
            <p className="lede self-end lg:col-span-5 lg:text-base">
              You know the scope, timeline and price before any work begins.
            </p>
          </Reveal>
          <div className="mt-14">
            <ProjectSteps />
          </div>
          <Link href="/about" className="text-link mt-8 inline-flex text-sm font-semibold">
            Services and pricing{' '}
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* 8. Contact band */}
      <ContactBand />
    </>
  );
}
