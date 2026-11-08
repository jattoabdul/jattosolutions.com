import { cn } from '@/lib/cn';

/** Visible marker for copy that is waiting on the owner. Remove with the `placeholder` flag. */
export function PlaceholderTag({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'border-border-strong text-muted inline-flex items-center rounded-md border border-dashed px-2 py-1 font-mono text-[0.62rem] tracking-[0.12em] uppercase',
        className,
      )}
    >
      Placeholder
    </span>
  );
}
