import Image from 'next/image';
import { siteConfig } from '@/data/site';

export function MenuBar() {
  return (
    <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-black/30 px-3 py-1 text-[11px] text-white/90 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <Image
          src="/logo/Jatto_Brandmark_White.png"
          alt=""
          width={14}
          height={14}
          className="opacity-90"
          priority
        />
        <span className="font-semibold">{siteConfig.shortName}</span>
        <span className="text-white/70">File</span>
        <span className="text-white/70">Edit</span>
        <span className="text-white/70">View</span>
        <span className="text-white/70">Window</span>
      </div>
      <div className="flex items-center gap-3 text-white/80">
        <span aria-hidden>⌘</span>
        <span aria-hidden>⌥</span>
        <span>Sat 2 May</span>
        <span>9:41 AM</span>
      </div>
    </div>
  );
}
