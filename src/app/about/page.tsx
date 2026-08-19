import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand } from '@/components/site/ContactBand';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = {
  title: 'Studio',
  description:
    'How Jatto IT Solutions builds focused products and works with a small number of technical partners.',
};

const principles = [
  {
    number: '01',
    title: 'Own the outcome',
    body: 'We connect product decisions to engineering decisions, then stay close enough to see what actually works.',
  },
  {
    number: '02',
    title: 'Keep the path legible',
    body: 'Clear states, plain language, and visible constraints make products easier to use and easier to trust.',
  },
  {
    number: '03',
    title: 'Use automation carefully',
    body: 'Automation should remove routine effort while preserving human review where a decision carries weight.',
  },
  {
    number: '04',
    title: 'Build for change',
    body: 'Small composable systems make it possible to learn, adjust, and grow without rewriting the product every season.',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">The studio</p>
            <h1 className="page-title mt-7">We build products, then stay for the hard parts.</h1>
            <p className="lede mt-8">
              Jatto IT Solutions is an independent Toronto product studio led by Abdulqahhar Jatto.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Position</p>
          <h2 className="section-title mt-6">A product company first.</h2>
        </Reveal>
        <Reveal className="text-muted space-y-6 text-lg leading-8 lg:col-span-7" delay={0.06}>
          <p>
            Our own portfolio is the centre of the studio. Discova, TrustKarry, Pinnr, RuleNorth,
            and InferGo each explore a specific workflow with a clear customer and release path.
          </p>
          <p>
            We also work with a small number of teams on product strategy, application engineering,
            integrations, and AI-enabled workflows. The best fit is a long-term partnership where
            product judgment matters as much as implementation.
          </p>
          <Link href="/products" className="text-link text-ink inline-flex text-sm font-semibold">
            See the portfolio{' '}
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </Reveal>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">Working principles</p>
            <h2 className="section-title mt-6">A practical standard for every build.</h2>
          </Reveal>
          <div className="border-border bg-border mt-16 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2">
            {principles.map((principle) => (
              <Reveal key={principle.number} className="bg-canvas p-7 sm:p-10">
                <span className="eyebrow">{principle.number}</span>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.045em]">
                  {principle.title}
                </h3>
                <p className="text-muted mt-4 max-w-lg leading-7">{principle.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
