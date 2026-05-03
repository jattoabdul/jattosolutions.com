import { Product } from '@/data/products';
import { NotificationCard } from '@/components/products/NotificationCard';
import { cn } from '@/lib/cn';

type Props = {
  products: Product[];
  className?: string;
};

export function IPhoneFrame({ products, className }: Props) {
  return (
    <div
      className={cn(
        'relative mx-auto aspect-[9/19.5] w-full max-w-[340px] overflow-hidden rounded-[44px] border-[3px] border-black bg-black shadow-2xl',
        className,
      )}
    >
      {/* Inner screen */}
      <div className="wallpaper-dark relative h-full w-full overflow-hidden rounded-[40px]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-7 w-28 -translate-x-1/2 rounded-full bg-black" />

        {/* Lock screen header — time + date */}
        <div className="relative z-10 flex flex-col items-center pt-14">
          <p className="text-xs font-medium tracking-wider text-white/70">Saturday, May 2</p>
          <p className="mt-1 text-7xl font-light tracking-tighter text-white">9:41</p>
        </div>

        {/* Notification stack */}
        <div className="absolute inset-x-3 bottom-16 flex flex-col gap-2">
          {products.map((p) => (
            <NotificationCard key={p.slug} product={p} />
          ))}
        </div>

        {/* Home indicator */}
        <div
          className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-white/40"
          aria-hidden
        />
      </div>
    </div>
  );
}
