import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Fades content in as it scrolls into view using a CSS scroll-driven animation.
 * Content is visible by default: no JavaScript, no hydration wait, and nothing
 * hidden for browsers without scroll timelines or visitors who prefer reduced motion.
 */
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('reveal', className)}>{children}</div>;
}
