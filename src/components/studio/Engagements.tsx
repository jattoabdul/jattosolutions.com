import { engagements } from '@/data/studio';
import { Reveal } from '@/components/ui/Reveal';

export function Engagements() {
  return (
    <div className="border-border bg-border grid gap-px overflow-hidden rounded-3xl border lg:grid-cols-3">
      {engagements.map((engagement) => (
        <Reveal key={engagement.title} className="bg-canvas flex flex-col p-7 sm:p-9">
          <h3 className="text-2xl font-semibold tracking-[-0.045em] text-balance">
            {engagement.title}
          </h3>
          <p className="text-muted mt-4 leading-7">{engagement.body}</p>
          <dl className="border-border mt-8 space-y-5 border-t pt-6 text-sm leading-6">
            <div>
              <dt className="eyebrow">Suits</dt>
              <dd className="mt-2">{engagement.suits}</dd>
            </div>
            <div>
              <dt className="eyebrow">Typical first deliverable</dt>
              <dd className="mt-2">{engagement.firstDeliverable}</dd>
            </div>
          </dl>
        </Reveal>
      ))}
    </div>
  );
}
