import type { Metadata } from 'next';
import { ContactForm } from '@/components/site/ContactForm';
import { Reveal } from '@/components/ui/Reveal';
import { siteConfig } from '@/data/site';
import { REPLY_TIME } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Start a project',
  description: 'Start a product or technical partnership conversation with Jatto Solutions.',
};

export default function ContactPage() {
  return (
    <section className="page-shell section-space min-h-[calc(100svh-4.5rem)]">
      <Reveal>
        <h1 className="page-title">Tell us what you are trying to make possible.</h1>
        <p className="lede mt-8">
          Share the product, workflow, or technical constraint you are working through. We will
          reply {REPLY_TIME} with a useful next step.
        </p>
      </Reveal>
      <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-8">
          <ContactForm email={siteConfig.email} />
        </div>
        <aside className="bg-surface self-start rounded-3xl p-7 lg:col-span-4">
          <h2 className="text-lg font-semibold tracking-[-0.03em]">What helps in a first note</h2>
          <ul className="text-muted mt-5 space-y-4 text-sm leading-6">
            <li>What you are building or improving</li>
            <li>Who needs it and what they do today</li>
            <li>Any timing or platform constraints</li>
            <li>Where you need product or engineering support</li>
          </ul>
          <div className="mt-8 text-sm">
            <p className="text-muted">Prefer email?</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-link mt-1 inline-block font-medium"
            >
              {siteConfig.email}
            </a>
          </div>
          <p className="text-muted mt-8 text-sm">
            Based in {siteConfig.location}. Working with teams across time zones.
          </p>
        </aside>
      </div>
    </section>
  );
}
