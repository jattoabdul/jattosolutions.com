export type ProductStatus =
  | 'live'
  | 'closed-beta'
  | 'private-pilot'
  | 'in-development'
  | 'coming-soon'
  | 'public-alpha';

export type ProductCategory = 'product' | 'open-source';

export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  statusLabel: string;
  tagline: string;
  summary: string;
  problem: string;
  approach: string;
  highlights: string[];
  releaseNote: string;
  /** Omitted until a real product view exists; a typographic panel is shown instead. */
  image?: ProductImage;
  gallery?: ProductImage[];
  url?: string;
  externalLabel?: string;
};

export const products: Product[] = [
  {
    slug: 'discova',
    name: 'Discova',
    category: 'product',
    status: 'live',
    statusLabel: 'Live',
    tagline: 'A better way to follow curiosity.',
    summary:
      'Choose a topic or leave it random. Discova opens one technology article at a time from curated open sources.',
    problem:
      'Technology learning often starts with a question and gets buried under feeds, recommendations, and too many open tabs.',
    approach:
      'Discova keeps the choice small: pick a category, shuffle once, and read in a focused view without ads or a recommendation feed.',
    highlights: [
      'Curated technology topics',
      'No ads or recommendation feed',
      'Free to use',
      'Open-source reading material',
    ],
    releaseNote: 'Available now at discova.dev.',
    image: {
      src: '/products/discova.png',
      alt: 'Discova home page with technology topic filters and a button for opening a random article',
    },
    url: 'https://discova.dev',
    externalLabel: 'Open Discova',
  },
  {
    slug: 'trustkarry',
    name: 'TrustKarry',
    category: 'product',
    status: 'closed-beta',
    statusLabel: 'Closed beta',
    tagline: 'Clearer coordination for community handoffs.',
    summary:
      'A community marketplace connecting Canada-Nigeria travelers with people who need to send items.',
    problem:
      'Community handoffs already happen, but routes, requests, payment acknowledgements, and progress can be difficult to coordinate.',
    approach:
      'TrustKarry brings discovery, messaging, handoff records, and lifecycle updates into one shared flow for senders and travelers.',
    highlights: [
      'Traveler and sender paths',
      'Verified profile signals',
      'In-app messaging',
      'Manual dispute review',
    ],
    releaseNote:
      'Currently in closed beta. TrustKarry does not act as a carrier, escrow provider, or payment processor.',
    image: {
      src: '/products/trustkarry-find-trips.png',
      alt: 'TrustKarry trip search showing a verified traveler route from Calgary to Ogun',
    },
    gallery: [
      {
        src: '/products/trustkarry-request-inbox.png',
        alt: 'TrustKarry request inbox showing active handoff coordination and status actions',
      },
    ],
    url: 'https://trustkarry.com',
    externalLabel: 'Visit TrustKarry',
  },
  {
    slug: 'pinnr',
    name: 'Pinnr',
    category: 'product',
    status: 'private-pilot',
    statusLabel: 'Private pilot',
    tagline: 'A Pinterest studio for product brands.',
    summary:
      'Bring in your products, and Pinnr helps turn them into pins you can create, schedule, and publish from one place.',
    problem:
      'Pinterest works best with a steady flow of fresh pins. For a small product brand, designing and posting each one by hand takes time the team rarely has.',
    approach:
      'Pinnr starts from a product image and its link. You shape the pin with a brand template, choose the Pinterest board, then publish it straight away or schedule it.',
    highlights: [
      'Start from a product image and link',
      'Brand templates you can adjust',
      'Choose the Pinterest board',
      'Publish now or on a schedule',
    ],
    releaseNote:
      'Pinnr is in a private pilot. If you run a product brand and would like to hear when access widens, get in touch.',
    image: {
      // Same approved asset as jattoabdul.com/building (commit c52e5ca there).
      // No pinnr.shop link until that site carries the standalone positioning.
      src: '/products/pinnr-standalone.png',
      alt: 'Pinnr turning a chosen product into a designed pin that is ready to publish to Pinterest',
    },
  },
  {
    slug: 'rulenorth',
    name: 'RuleNorth',
    category: 'product',
    status: 'in-development',
    statusLabel: 'In development',
    tagline: 'Evidence-led shipment review for commerce teams.',
    summary:
      'A Shopify-first workflow for screening order names and destinations, with evidence and review decisions kept together.',
    problem:
      'International orders can surface sanctions, restricted-party, and destination questions that need traceable human review.',
    approach:
      'RuleNorth is designed to organize candidates, source evidence, reviewer actions, and decision records around each order.',
    highlights: [
      'Human review at consequential steps',
      'Evidence and decision provenance',
      'Privacy-conscious data handling',
      'Built for Shopify orders first',
    ],
    releaseNote:
      'In development. RuleNorth supports operational review and does not provide legal advice.',
    image: {
      // Captured from a build seeded with synthetic data; no real order or customer appears.
      src: '/products/rulenorth-review.png',
      alt: 'RuleNorth review workspace with an order queue, evidence sources, and human decision controls',
    },
  },
  {
    slug: 'deendemy',
    name: 'Deendemy',
    category: 'product',
    status: 'coming-soon',
    statusLabel: 'In development · Coming soon',
    tagline: 'Software for Muslim schools, academies, and community programmes.',
    summary:
      'Families, learners, classes, and attendance kept together, so teachers can spend more time teaching.',
    problem:
      'Family details, class lists, and attendance often live in separate spreadsheets, message threads, and paper registers. Keeping them in step takes time away from teaching.',
    approach:
      'Deendemy starts with people, families, and guardian relationships. Class rosters, attendance, and guardian follow-up are planned next, so each learner can be seen with their family and class in one place.',
    highlights: [
      'Families and guardians together',
      'Learner records',
      'Class rosters and attendance (planned)',
      'Guardian follow-up (planned)',
    ],
    releaseNote:
      'Deendemy is in development and is not available yet. Pricing and release timing have not been announced.',
  },
  {
    slug: 'infergo',
    name: 'InferGo',
    category: 'open-source',
    status: 'public-alpha',
    statusLabel: 'Public alpha',
    tagline: 'Go-native inference for backend services.',
    summary:
      'Export a supported model once, load it in Go, and run predictions without Python in production.',
    problem:
      'Teams running small inference workloads in Go often add a separate Python runtime and service boundary.',
    approach:
      'InferGo provides a narrow, CPU-first, pure-Go-by-default runtime with parity-backed support for documented model paths.',
    highlights: [
      'Library-first API',
      'Optional HTTP process',
      'Parity validation',
      'Public open source',
    ],
    releaseNote: 'Public and currently in alpha under the Pergamon Labs organization.',
    image: {
      src: '/products/infergo-github.png',
      alt: 'GitHub repository card for the public Pergamon Labs InferGo project',
    },
    url: 'https://github.com/pergamon-labs/infergo',
    externalLabel: 'View on GitHub',
  },
];

export const commercialProducts = products.filter((product) => product.category === 'product');

export const openSourceProducts = products.filter((product) => product.category === 'open-source');

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
