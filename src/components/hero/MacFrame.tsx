import { Product } from '@/data/products';
import { ProductWindow } from '@/components/products/ProductWindow';
import { MenuBar } from '@/components/chrome/MenuBar';
import { Dock } from '@/components/chrome/Dock';
import { cn } from '@/lib/cn';

type Props = {
  products: Product[];
  className?: string;
};

export function MacFrame({ products, className }: Props) {
  const [active, ...rest] = products;

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
      <div className="relative h-full pt-7 pb-16">
        {/* Side stack — secondary windows */}
        {rest.length > 0 && (
          <aside className="absolute left-4 top-1/2 flex w-44 -translate-y-1/2 flex-col gap-3 sm:w-52">
            {rest.map((p) => (
              <ProductWindow key={p.slug} product={p} variant="stack" />
            ))}
          </aside>
        )}

        {/* Active window — center stage */}
        {active && (
          <div className="absolute right-6 top-1/2 w-[58%] max-w-[560px] -translate-y-1/2">
            <ProductWindow product={active} variant="active" />
          </div>
        )}
      </div>

      {/* Dock */}
      <Dock />
    </div>
  );
}
