import { Product } from '@/data/products';
import { cn } from '@/lib/cn';

type Props = {
  products: Product[];
  className?: string;
};

export function OSSGrid({ products, className }: Props) {
  return (
    <div className={cn('grid gap-3 sm:grid-cols-2 lg:grid-cols-3', className)}>
      {products.map((p) => (
        <a
          key={p.slug}
          href={p.github ?? p.url ?? '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-border bg-bg-surface/50 p-4 transition-colors hover:border-border-mid hover:bg-bg-surface"
        >
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-mono text-sm font-medium text-fg">{p.name.toLowerCase()}</h3>
            <span className="text-xs text-fg-3 group-hover:text-fg-2" aria-hidden>
              ↗
            </span>
          </div>
          <p className="mt-2 text-sm text-fg-3">{p.tagline}</p>
        </a>
      ))}
    </div>
  );
}
