import { founder } from '@/data/studio';
import { PlaceholderTag } from '@/components/ui/PlaceholderTag';
import { Reveal } from '@/components/ui/Reveal';

export function FounderBlock() {
  return (
    <Reveal className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-14">
      {/* Initials tile until an approved photo is supplied. */}
      <div
        aria-hidden
        className="border-border bg-wash text-accent grid size-32 place-items-center rounded-3xl border text-4xl font-semibold tracking-[-0.06em] sm:size-40"
      >
        {founder.initials}
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
