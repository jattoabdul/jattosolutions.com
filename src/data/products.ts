export type ProductStatus =
  | 'live'
  | 'closed-beta'
  | 'shopify-review'
  | 'in-development'
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
  image: ProductImage;
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
    status: 'shopify-review',
    statusLabel: 'Shopify review',
    tagline: 'Turn Shopify products into publishable Pinterest pins.',
    summary:
      'Pinnr helps Shopify merchants create branded pins from their catalog and publish them on a controlled schedule.',
    problem:
      'Small merchant teams need a repeatable Pinterest workflow without rebuilding creative for every product.',
    approach:
      'Pinnr syncs products, applies brand templates, creates reviewable pins, and publishes them through a merchant-controlled routine.',
    highlights: [
      'Shopify-native workflow',
      'Template-based creative',
      'Pinterest Business connection',
      'Reviewable scheduling',
    ],
    releaseNote:
      'The product is deployed in prelaunch mode while the Shopify App Store submission awaits approval.',
    image: {
      src: '/products/pinnr-dashboard.jpg',
      alt: 'Pinnr embedded in Shopify Admin with product sync, publishing, scheduling, and Pinterest connection status',
    },
    gallery: [
      {
        src: '/products/pinnr-pin-editor.jpg',
        alt: 'Pinnr pin editor with a selected Shopify product, brand template, title, and description fields',
      },
    ],
    url: 'https://pinnr.shop',
    externalLabel: 'Visit Pinnr',
  },
  {
    slug: 'rulenorth',
    name: 'RuleNorth',
    category: 'product',
    status: 'in-development',
    statusLabel: 'In development',
    tagline: 'Evidence-led shipment review for commerce teams.',
    summary:
      'A Shopify-first workflow being built to screen parties and destinations before international shipment release.',
    problem:
      'International orders can surface sanctions, restricted-party, and destination questions that need traceable human review.',
    approach:
      'RuleNorth is designed to organize candidates, source evidence, reviewer actions, and decision records around each order.',
    highlights: [
      'Human review at consequential steps',
      'Evidence and decision provenance',
      'Privacy-conscious data handling',
      'Platform-neutral screening core',
    ],
    releaseNote:
      'In development with synthetic data. RuleNorth supports operational review and does not provide legal advice.',
    image: {
      src: '/products/rulenorth-review.png',
      alt: 'Synthetic RuleNorth review workspace with an order queue, evidence sources, and human decision controls',
    },
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
