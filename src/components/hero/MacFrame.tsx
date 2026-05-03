'use client';

import { useState } from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { Product } from '@/data/products';
import { ProductWindow } from '@/components/products/ProductWindow';
import { MenuBar } from '@/components/chrome/MenuBar';
import { Dock } from '@/components/chrome/Dock';
import { cn } from '@/lib/cn';
import { layoutSpring, stackHover, staggerContainer, staggerItem } from '@/lib/motion';

type Props = {
  products: Product[];
  className?: string;
};

export function MacFrame({ products, className }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(products[0]?.slug ?? '');
  const active = products.find((p) => p.slug === activeSlug) ?? products[0];
  const stack = products.filter((p) => p.slug !== active?.slug);

  return (
    <div
      className={cn(
        'relative mx-auto aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-2xl border border-border-mid shadow-2xl',
        className,
      )}
    >
      {/* Wallpaper */}
      <div className="absolute inset-0 wallpaper-dark" />

      {/* Menu bar */}
      <MenuBar />

      {/* Stage Manager content area */}
      <LayoutGroup>
        <motion.div
          className="relative h-full pt-7 pb-16"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Side stack — secondary windows */}
          {stack.length > 0 && (
            <aside className="absolute left-4 top-1/2 flex w-44 -translate-y-1/2 flex-col gap-3 sm:w-52">
              {stack.map((p) => (
                <motion.button
                  key={p.slug}
                  type="button"
                  layoutId={`product-${p.slug}`}
                  variants={staggerItem}
                  whileHover={stackHover}
                  whileTap={{ scale: 0.92 }}
                  transition={layoutSpring}
                  onClick={() => setActiveSlug(p.slug)}
                  className="block w-full text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
                  aria-label={`Bring ${p.name} to front`}
                >
                  <ProductWindow product={p} variant="stack" />
                </motion.button>
              ))}
            </aside>
          )}

          {/* Active window — center stage */}
          {active && (
            <div className="absolute right-6 top-1/2 w-[58%] max-w-[560px] -translate-y-1/2">
              <motion.div
                key={active.slug}
                layoutId={`product-${active.slug}`}
                variants={staggerItem}
                transition={layoutSpring}
              >
                <ProductWindow product={active} variant="active" />
              </motion.div>
            </div>
          )}
        </motion.div>
      </LayoutGroup>

      {/* Dock */}
      <Dock />
    </div>
  );
}
