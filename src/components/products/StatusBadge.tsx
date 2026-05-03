import { ProductStatus } from '@/data/products';
import { cn } from '@/lib/cn';

const labels: Record<ProductStatus, string> = {
  live: 'LIVE',
  beta: 'BETA',
  'coming-soon': 'COMING SOON',
};

const styles: Record<ProductStatus, string> = {
  live: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
  beta: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-400',
  'coming-soon': 'border-fg/15 bg-fg/5 text-fg-3',
};

type Props = {
  status: ProductStatus;
  className?: string;
};

export function StatusBadge({ status, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider',
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
