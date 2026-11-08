import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand } from '@/components/site/ContactBand';
import { Engagements } from '@/components/studio/Engagements';
import { FounderBlock } from '@/components/studio/FounderBlock';
import { ProjectSteps } from '@/components/studio/ProjectSteps';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/site';
import { fit, outcomes, pricing } from '@/data/studio';

export const metadata: Metadata = {
  title: 'Studio and services',
  description: `What ${siteConfig.name} builds for client teams, how pricing works, and who we are a good fit for.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">Studio and services</p>
            <h1 className="page-title mt-7">Hire the team that runs its own products.</h1>
            <p className="lede mt-8">
              {siteConfig.name} is a Toronto product studio. We build and run Discova, TrustKarry,
              Pinnr, RuleNorth and InferGo, and we take on a small number of client builds.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href={siteConfig.contact.href} className="button button-primary">
                {siteConfig.contact.label}
              </Link>
              <Link href="/products" className="button button-secondary">
                See our products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal>
          <p className="eyebrow">What we build for clients</p>
          <h2 className="section-title mt-6">Three kinds of work.</h2>
        </Reveal>
        <div className="mt-14">
          <Engagements />
        </div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="page-shell section-space grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">How pricing works</p>
            <h2 className="section-title mt-6">Two ways to work together.</h2>
            <p className="text-muted mt-6 leading-7">
              Every project starts with a written proposal. You see the scope, timeline and price
              before any work begins.
            </p>
          </Reveal>
          <div className="lg:col-span-7">
            <div className="border-border bg-border grid gap-px overflow-hidden rounded-3xl border">
              {pricing.map((option) => (
                <Reveal key={option.title} className="bg-canvas p-7 sm:p-9">
                  <h3 className="text-2xl font-semibold tracking-[-0.045em]">{option.title}</h3>
                  <p className="text-muted mt-4 leading-7">{option.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal>
          <p className="eyebrow">Who we work with</p>
          <h2 className="section-title mt-6">A good fit, and when we are not.</h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          {[
            { title: 'A good fit if', items: fit.good, mark: '✓' },
            { title: 'Probably not a fit if', items: fit.notGood, mark: '×' },
          ].map((group) => (
            <Reveal key={group.title}>
              <h3 className="border-border border-b pb-4 text-xl font-semibold tracking-[-0.04em]">
                {group.title}
              </h3>
              <ul className="mt-6 space-y-4 leading-7">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden className="text-quiet w-4 shrink-0">
                      {group.mark}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-border bg-surface border-y">
        <div className="page-shell section-space">
          <Reveal>
            <p className="eyebrow">What you can expect</p>
            <h2 className="section-title mt-6">What working with us is like.</h2>
          </Reveal>
          <div className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-3xl border md:grid-cols-2">
            {outcomes.map((outcome) => (
              <Reveal key={outcome.title} className="bg-canvas p-7 sm:p-10">
                <h3 className="text-2xl font-semibold tracking-[-0.045em] text-balance">
                  {outcome.title}
                </h3>
                <p className="text-muted mt-4 max-w-lg leading-7">{outcome.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell section-space">
        <Reveal>
          <p className="eyebrow">How a project starts</p>
          <h2 className="section-title mt-6">From first note to first release.</h2>
        </Reveal>
        <div className="mt-14">
          <ProjectSteps />
        </div>
      </section>

      <section className="border-border border-t">
        <div className="page-shell section-space">
          <FounderBlock />
        </div>
      </section>

      <ContactBand />
    </>
  );
}
