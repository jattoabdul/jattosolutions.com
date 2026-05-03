import { Product } from '@/data/products';
import { cn } from '@/lib/cn';

type Props = {
  product: Product;
  className?: string;
};

const statusLabel = (status: Product['status']) => {
  if (status === 'beta') return 'BETA';
  if (status === 'coming-soon') return 'SOON';
  return 'now';
};

export function NotificationCard({ product, className }: Props) {
  const isComingSoon = product.status === 'coming-soon';

  const card = (
    <div
      className={cn(
        'rounded-2xl bg-white/15 p-3 backdrop-blur-md transition-transform',
        product.url && !isComingSoon && 'hover:scale-[1.02]',
        isComingSoon && 'opacity-75',
        className,
      )}
    >
      <div className="flex items-start gap-2.5">
        <div
          className="flex size-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold text-white"
          style={{ background: 'var(--accent)' }}
        >
          {product.name[0]}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90">
              {product.name}
            </span>
            <span className="shrink-0 text-[10px] text-white/60">{statusLabel(product.status)}</span>
          </div>
          <p className="mt-0.5 text-sm font-medium text-white">{product.tagline}</p>
        </div>
      </div>
    </div>
  );

  if (product.url && !isComingSoon) {
    return (
      <a
        href={product.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`${product.name} — ${product.tagline}`}
      >
        {card}
      </a>
    );
  }
  return card;
}
