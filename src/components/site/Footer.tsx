import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:gap-4">
          <a href={`mailto:${siteConfig.email}`} className="text-fg-2 hover:text-fg">
            {siteConfig.email}
          </a>
          <span className="hidden text-fg-3 sm:inline" aria-hidden>
            ·
          </span>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-2 hover:text-fg"
            >
              X
            </a>
            <span className="text-fg-3" aria-hidden>
              ·
            </span>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-2 hover:text-fg"
            >
              LinkedIn
            </a>
            <span className="text-fg-3" aria-hidden>
              ·
            </span>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-2 hover:text-fg"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="flex flex-col-reverse items-start gap-3 text-xs text-fg-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={siteConfig.personalSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg-2"
          >
            Personal site → {siteConfig.personalSite.label}
          </a>
          <span>© {new Date().getFullYear()} {siteConfig.shortName}</span>
        </div>
      </div>
    </footer>
  );
}
