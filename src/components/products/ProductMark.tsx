import Image from 'next/image';
import { cn } from '@/lib/cn';

/**
 * Product marks, copied as SVG from each product's own repo (see docs/decisions.md).
 * `dark` is the product's own variant for dark backgrounds; marks that work on both
 * (Discova's indigo tile) have none. Marks are never recoloured here.
 */
const marks: Record<string, { light: string; dark?: string }> = {
  discova: { light: '/marks/discova.svg' },
  trustkarry: { light: '/marks/trustkarry.svg', dark: '/marks/trustkarry-on-ink.svg' },
  pinnr: { light: '/marks/pinnr.svg', dark: '/marks/pinnr-on-ink.svg' },
  rulenorth: { light: '/marks/rulenorth.svg', dark: '/marks/rulenorth-on-ink.svg' },
  infergo: { light: '/marks/infergo.svg', dark: '/marks/infergo-on-ink.svg' },
};

const sizes = {
  sm: 'size-10 rounded-lg',
  md: 'size-14 rounded-xl',
  lg: 'size-20 rounded-2xl',
} as const;

const glyph = { sm: 24, md: 32, lg: 48 } as const;

type Props = {
  slug: string;
  size?: keyof typeof sizes;
  className?: string;
};

/** A product's mark on a neutral tile, at one of three fixed sizes. Decorative: the product name is always shown next to it. */
export function ProductMark({ slug, size = 'md', className }: Props) {
  const mark = marks[slug];
  if (!mark) return null;
  const px = glyph[size];

  return (
    <span
      aria-hidden
      className={cn(
        'border-border bg-surface flex shrink-0 items-center justify-center border',
        sizes[size],
        className,
      )}
    >
      <Image
        src={mark.light}
        alt=""
        width={px}
        height={px}
        unoptimized
        className={cn('object-contain', mark.dark && 'dark:hidden')}
        style={{ width: px, height: px }}
      />
      {mark.dark && (
        <Image
          src={mark.dark}
          alt=""
          width={px}
          height={px}
          unoptimized
          className="hidden object-contain dark:block"
          style={{ width: px, height: px }}
        />
      )}
    </span>
  );
}
