import { siteConfig } from '@/data/site';
import { cn } from '@/lib/cn';

type DockItemProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
};

function DockItem({ href, label, children, className }: DockItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={cn(
        'flex size-10 items-center justify-center rounded-xl bg-white/15 text-white transition-transform hover:scale-110',
        className,
      )}
    >
      {children}
    </a>
  );
}

export function Dock() {
  return (
    <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2 backdrop-blur-md">
        <DockItem href={siteConfig.social.x} label="X / Twitter">
          <span className="text-base font-bold">𝕏</span>
        </DockItem>
        <DockItem href={siteConfig.social.linkedin} label="LinkedIn">
          <span className="text-xs font-bold tracking-tighter">in</span>
        </DockItem>
        <DockItem href={siteConfig.social.github} label="GitHub">
          <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </DockItem>
        <DockItem href={`mailto:${siteConfig.email}`} label="Email">
          <span className="text-base">@</span>
        </DockItem>
        <div className="mx-1 h-8 w-px bg-white/20" aria-hidden />
        <DockItem href={siteConfig.personalSite.url} label="Personal site">
          <span className="text-sm font-bold">J.</span>
        </DockItem>
      </div>
    </div>
  );
}
