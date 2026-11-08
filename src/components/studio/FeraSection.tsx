import { fera } from '@/data/studio';
import { PlaceholderTag } from '@/components/ui/PlaceholderTag';
import { Reveal } from '@/components/ui/Reveal';

/** Short client-work section. The full case study (/work/fera) waits for content cleared with Fera. */
export function FeraSection() {
  return (
    <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-5">
        <p className="eyebrow">Client work</p>
        <h2 className="section-title mt-6">Engineering partner to {fera.name}.</h2>
        {fera.placeholder && <PlaceholderTag className="mt-6" />}
      </div>
      <div className="text-muted space-y-5 text-lg leading-8 lg:col-span-7 lg:self-end">
        <p>{fera.summary}</p>
        <p>{fera.role}</p>
        <p>{fera.work}</p>
      </div>
    </Reveal>
  );
}
