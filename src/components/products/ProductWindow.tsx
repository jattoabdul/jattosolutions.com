import { Product } from '@/data/products';
import { cn } from '@/lib/cn';
import { StatusBadge } from './StatusBadge';

type Variant = 'active' | 'stack';

type Props = {
  product: Product;
  variant?: Variant;
  className?: string;
};

export function ProductWindow({ product, variant = 'active', className }: Props) {
  const isComingSoon = product.status === 'coming-soon';
  const isActive = variant === 'active';

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-border bg-bg-surface/95 shadow-2xl backdrop-blur-md',
        isComingSoon && 'opacity-75',
        !isActive && 'origin-left scale-90',
        className,
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border bg-bg-raised/80 px-3 py-2">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[var(--traffic-red)]" />
          <span className="size-3 rounded-full bg-[var(--traffic-yellow)]" />
          <span className="size-3 rounded-full bg-[var(--traffic-green)]" />
        </div>
        <span className="flex-1 text-center text-xs font-medium text-fg-2">
          {product.name.toLowerCase()}.app
        </span>
        <span className="w-12" aria-hidden />
      </div>

      {/* Content */}
      <div className={cn('px-5 py-5', isActive ? 'min-h-[220px]' : 'min-h-[100px] p-3')}>
        <div className="flex items-start justify-between gap-2">
          <h3
            className={cn(
              'font-serif font-medium tracking-tight',
              isActive ? 'text-2xl' : 'text-base',
            )}
          >
            {product.name}
          </h3>
          {product.status !== 'live' && <StatusBadge status={product.status} />}
        </div>
        <p className={cn('mt-2 text-fg-2', isActive ? 'text-base' : 'text-xs')}>
          {product.tagline}
        </p>

        {isActive && (
          <p className="mt-3 text-sm leading-relaxed text-fg-3">{product.description}</p>
        )}

        {isActive && (product.url || product.github) && !isComingSoon && (
          <div className="mt-5 flex gap-3">
            {product.url && (
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md bg-fg px-3 py-1.5 text-sm font-medium text-bg hover:opacity-90"
              >
                Visit →
              </a>
            )}
            {product.github && (
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-fg hover:bg-bg-raised"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
