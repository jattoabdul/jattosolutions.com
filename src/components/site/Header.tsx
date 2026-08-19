import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <header className="border-border bg-canvas/90 sticky top-0 z-40 border-b backdrop-blur-xl">
      <div className="page-shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="focus-ring flex items-center gap-3 rounded-xl"
          aria-label="Jatto IT Solutions home"
        >
          <span className="relative size-8 shrink-0">
            <Image
              src="/logo/Jatto_Brandmark_Full_Color.png"
              alt=""
              fill
              sizes="32px"
              className="object-contain dark:hidden"
              priority
            />
            <Image
              src="/logo/Jatto_Brandmark_White.png"
              alt=""
              fill
              sizes="32px"
              className="hidden object-contain dark:block"
              priority
            />
          </span>
          <span className="text-[0.94rem] font-semibold tracking-[-0.025em]">
            {siteConfig.name}
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Primary" className="text-muted flex items-center gap-6 text-sm">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-link">
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
          <Link href="/contact" className="button button-primary">
            Talk to us
          </Link>
        </div>

        <details className="group relative md:hidden">
          <summary className="focus-ring border-border bg-surface cursor-pointer list-none rounded-xl border px-3 py-2 font-mono text-[0.7rem] tracking-[0.12em] uppercase [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="border-border bg-surface absolute top-12 right-0 w-56 rounded-2xl border p-3 shadow-[0_18px_60px_rgba(10,16,35,0.14)]">
            <nav aria-label="Mobile" className="flex flex-col text-sm">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:bg-wash rounded-xl px-3 py-3"
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact" className="hover:bg-wash rounded-xl px-3 py-3">
                Contact
              </Link>
            </nav>
            <div className="border-border mt-2 border-t px-3 pt-3">
              <ThemeToggle />
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
