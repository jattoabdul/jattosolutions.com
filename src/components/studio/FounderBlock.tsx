import Image from 'next/image';
import { founder } from '@/data/studio';
import { PlaceholderTag } from '@/components/ui/PlaceholderTag';
import { Reveal } from '@/components/ui/Reveal';

export function FounderBlock() {
  return (
    <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">
      <div className="border-border bg-wash size-40 overflow-hidden rounded-3xl border sm:size-48">
        <Image
          src={founder.photo.src}
          alt={`Portrait of ${founder.name}`}
          width={founder.photo.width}
          height={founder.photo.height}
          sizes="192px"
          className="block size-full origin-[50%_30%] scale-[1.45] object-cover"
        />
      </div>
      <div>
        <p className="eyebrow">Who leads the work</p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
          {founder.name}
        </h2>
        <p className="text-muted mt-4 text-lg leading-8">{founder.role}</p>
        {founder.placeholder && <PlaceholderTag className="mt-4" />}
        <ul className="mt-6 space-y-3 leading-7">
          {founder.highlights.map((item) => (
            <li key={item} className="flex gap-3">
              <span aria-hidden className="text-quiet">
                ·
              </span>
              {item}
            </li>
          ))}
        </ul>
        <a
          href={founder.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link mt-7 inline-flex text-sm font-semibold"
        >
          More at {founder.urlLabel}{' '}
          <span aria-hidden className="ml-2">
            ↗
          </span>
        </a>
      </div>
    </Reveal>
  );
}
