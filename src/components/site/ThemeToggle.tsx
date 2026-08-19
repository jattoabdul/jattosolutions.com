'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/cn';

type Props = {
  className?: string;
};

export function ThemeToggle({ className }: Props) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <span
        className={cn('inline-flex h-9 w-[4.5rem] items-center justify-center', className)}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === 'dark';
  const next = isDark ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className={cn(
        'focus-ring border-border bg-surface text-muted hover:border-ink hover:text-ink inline-flex h-9 items-center justify-center rounded-[0.75rem] border px-3 font-mono text-[0.7rem] tracking-[0.12em] uppercase transition-colors',
        className,
      )}
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
