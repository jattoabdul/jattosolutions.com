import Image from 'next/image';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';
import { MacFrame } from '@/components/hero/MacFrame';
import { IPhoneFrame } from '@/components/hero/IPhoneFrame';
import { OSSGrid } from '@/components/oss/OSSGrid';
import { Footer } from '@/components/site/Footer';
import { ThemeToggle } from '@/components/site/ThemeToggle';

export default function Home() {
  const paidProducts = products.filter((p) => p.category === 'paid');
  const ossProducts = products.filter((p) => p.category === 'oss');

  return (
    <main id="main" className="flex min-h-screen flex-col">
      {/* Brand mast */}
      <header className="px-6 pb-6 pt-10 md:px-10 md:pb-8 md:pt-14">
        <div className="mx-auto flex max-w-5xl items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <Image
              src="/logo/Jatto_Brandmark_White.png"
              alt=""
              width={44}
              height={44}
              className="hidden dark:block"
              priority
            />
            <Image
              src="/logo/Jatto_Brandmark_Black.png"
              alt=""
              width={44}
              height={44}
              className="dark:hidden"
              priority
            />
            <div>
              <h1 className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
                {siteConfig.shortName}
                <span className="ml-2 text-base font-normal text-fg-3 md:text-lg">
                  — {siteConfig.name}
                </span>
              </h1>
              <p className="mt-2 max-w-xl text-base text-fg-2 md:text-lg">{siteConfig.tagline}</p>
            </div>
          </div>
          <ThemeToggle className="mt-1 shrink-0" />
        </div>
      </header>

      {/* Hero — device canvas */}
      <section className="px-4 pb-10 md:px-10 md:pb-14">
        <div className="mx-auto max-w-5xl">
          {/* Desktop: macOS Stage Manager */}
          <div className="hidden md:block">
            <MacFrame products={paidProducts} />
          </div>
          {/* Mobile: iPhone Lock Screen */}
          <div className="md:hidden">
            <IPhoneFrame products={paidProducts} />
          </div>
        </div>
      </section>

      {/* OSS grid */}
      {ossProducts.length > 0 && (
        <section className="px-6 pb-12 md:px-10">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-fg-3">
              Open Source
            </h2>
            <OSSGrid products={ossProducts} className="mt-4" />
          </div>
        </section>
      )}

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
