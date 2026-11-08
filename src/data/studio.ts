/**
 * Studio content shared by the home page and the Studio (/about) page.
 *
 * Anything with `placeholder: true` is waiting on the owner and renders with a visible
 * "Placeholder" tag. Replace the copy and remove the flag once approved.
 */

export type Engagement = {
  title: string;
  body: string;
  suits: string;
  firstDeliverable: string;
};

export const engagements: Engagement[] = [
  {
    title: 'A new product, from first version to launch',
    body: 'We plan, design and build the first release, then help you run it with real users.',
    suits: 'Founders and teams with a clear customer problem and no product yet.',
    firstDeliverable: 'A working first release your first users can sign in to.',
  },
  {
    title: 'Shopify and commerce integrations',
    body: 'Shopify apps, store integrations and the back-office tools that sit around them.',
    suits:
      'Commerce teams whose store needs to talk to other systems, or merchants who need a custom app.',
    firstDeliverable: 'One integration running against your store, with logs your team can read.',
  },
  {
    title: 'AI-enabled internal workflows',
    body: 'Tools that take routine work off your team and keep a person in charge of the decisions that matter.',
    suits: 'Operations teams doing the same review or data task by hand every day.',
    firstDeliverable: 'One workflow automated end to end, with a review step where it counts.',
  },
];

export const projectSteps = [
  {
    title: 'Send a short note',
    body: 'Tell us what you want to build and when you need it. A few lines is enough.',
  },
  {
    title: 'Scoping call',
    body: 'A 30 minute call to understand the problem, the people involved and what success looks like.',
  },
  {
    title: 'Written proposal',
    body: 'You get the scope, a timeline, the price and what we need from you, in writing.',
  },
  {
    title: 'First release',
    body: 'We ship a first working version early, then build on it with you week by week.',
  },
];

export const pricing = [
  {
    title: 'Fixed scope',
    body: 'For a defined piece of work such as a first release or an integration. One agreed price for an agreed scope and timeline.',
  },
  {
    title: 'Monthly retainer',
    body: 'For ongoing product work after launch. A set amount of time each month, planned with you and reviewed at the end of each month.',
  },
];

export const fit = {
  good: [
    'You have a real customer problem and someone who can make product decisions.',
    'You want one small senior team that designs, builds and runs the software.',
    'You run on Shopify, or your team does routine review or data work by hand.',
  ],
  notGood: [
    'You need a large team on day one, or people billed by the hour to join your team.',
    'You need a marketing website or brand work with no product behind it.',
    'The scope and deadline are fixed before anyone has looked at the problem.',
  ],
};

/** What a client can expect. Replaces the old method-shorthand principles. */
export const outcomes = [
  {
    title: 'You see working software early',
    body: 'The first release reaches real users in weeks, not months, so decisions rest on what people actually do.',
  },
  {
    title: 'You always know where things stand',
    body: 'Plain written updates, a shared plan and no surprises on scope or cost.',
  },
  {
    title: 'Your team stays in charge of the big decisions',
    body: 'Automation handles the routine work. A person signs off wherever a mistake would be costly.',
  },
  {
    title: 'The software keeps working after launch',
    body: 'We build it to be run and changed, and we run our own products the same way.',
  },
];

export const fera = {
  placeholder: true,
  name: 'Fera.ai',
  url: 'https://fera.ai',
  summary: 'Placeholder: one line on what Fera does, as Fera describes it.',
  role: 'Placeholder: our role, how long, and whether the work is ongoing.',
  work: 'Placeholder: what we built or improved, and the main stack. Awaiting facts cleared with Fera.',
};

export const founder = {
  placeholder: true,
  name: 'Abdulqahhar Jatto',
  initials: 'AJ',
  role: 'Founder. Placeholder: title and years of experience.',
  highlights: [
    'Placeholder: first concrete thing built or led.',
    'Placeholder: second concrete thing built or led.',
    'Placeholder: third concrete thing built or led.',
  ],
  url: 'https://jattoabdul.com',
  urlLabel: 'jattoabdul.com',
};
