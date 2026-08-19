import { siteConfig } from '@/data/site';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-border bg-surface border-t">
      <div className="page-shell grid gap-12 py-12 md:grid-cols-[1.4fr_1fr] md:py-16">
        <div>
          <Link href="/" className="text-xl font-semibold tracking-[-0.04em]">
            {siteConfig.name}
          </Link>
          <p className="text-muted mt-3 max-w-md text-sm leading-6">
            Focused software products, open-source tools, and selective technical partnerships.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="text-link mt-5 inline-flex text-sm">
            {siteConfig.email}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <nav aria-label="Footer">
            <p className="eyebrow mb-4">Explore</p>
            <div className="flex flex-col items-start gap-3">
              <Link href="/products" className="text-link">
                Products
              </Link>
              <Link href="/about" className="text-link">
                Studio
              </Link>
              <Link href="/contact" className="text-link">
                Contact
              </Link>
            </div>
          </nav>
          <div>
            <p className="eyebrow mb-4">Elsewhere</p>
            <div className="flex flex-col items-start gap-3">
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                X
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-border border-t">
        <div className="page-shell text-muted flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <a
            href={siteConfig.personalSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Founder profile ↗ {siteConfig.personalSite.label}
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/privacy" className="text-link">
              Privacy
            </Link>
            <Link href="/terms" className="text-link">
              Terms
            </Link>
            <span>
              © {new Date().getFullYear()} {siteConfig.legalName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
