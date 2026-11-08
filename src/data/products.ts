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
  /** Intrinsic pixel size, so frames take the image's own shape and never crop UI. */
  width: number;
  height: number;
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
  /** Who the product is for, written to its own users. Used on the strip, index and product page. */
  userLine: string;
  /** The client capability the product proves. Used only in the home "Selected products" section. */
  capability: string;
  /** The product's own next step for a user, matched to its status. */
  action: { label: string; href: string };
  url?: string;
};

export const products: Product[] = [
  {
    slug: 'discova',
    name: 'Discova',
    category: 'product',
    status: 'live',
    statusLabel: 'Live',
    tagline: 'Pick a topic and read one article, without the feed.',
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
      width: 1440,
      height: 1000,
      alt: 'Discova home page with technology topic filters and a button for opening a random article',
    },
    userLine: 'For developers and curious readers who want one good tech article at a time.',
    capability: 'A content product with curated sources and a focused reading view.',
    action: { label: 'Open Discova', href: 'https://discova.dev' },
    url: 'https://discova.dev',
  },
  {
    slug: 'trustkarry',
    name: 'TrustKarry',
    category: 'product',
    status: 'closed-beta',
    statusLabel: 'Closed beta',
    tagline: 'Send items with travelers you can check first.',
    summary:
      'A community marketplace connecting Canada-Nigeria travelers with people who need to send items.',
    problem:
      'Community handoffs already happen, but routes, requests, payment acknowledgements, and progress can be difficult to coordinate.',
    approach:
      'TrustKarry puts trip search, messaging, handoff records and status updates in one place for senders and travelers.',
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
      width: 1185,
      height: 520,
      alt: 'TrustKarry trip search showing a verified traveler route from Calgary to Ogun',
    },
    gallery: [
      {
        src: '/products/trustkarry-request-inbox.png',
        width: 1185,
        height: 780,
        alt: 'TrustKarry request inbox showing active handoff coordination and status actions',
      },
    ],
    userLine:
      'For people sending items between Canada and Nigeria, and the travelers who carry them.',
    capability: 'A two-sided marketplace with profiles, messaging and handoff records.',
    action: { label: 'Request TrustKarry access', href: 'https://trustkarry.com' },
    url: 'https://trustkarry.com',
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
      'Pinnr is waiting for Shopify App Store approval. Leave your email on pinnr.shop to hear when it opens.',
    image: {
      src: '/products/pinnr-dashboard.jpg',
      width: 1600,
      height: 900,
      alt: 'Pinnr embedded in Shopify Admin with product sync, publishing, scheduling, and Pinterest connection status',
    },
    gallery: [
      {
        src: '/products/pinnr-pin-editor.jpg',
        width: 1600,
        height: 900,
        alt: 'Pinnr pin editor with a selected Shopify product, brand template, title, and description fields',
      },
    ],
    userLine:
      'For Shopify merchants who want their products on Pinterest without designing every pin.',
    capability: 'A Shopify app built on the Shopify Admin API and the Pinterest API.',
    action: { label: 'Get notified for Pinnr', href: 'https://pinnr.shop' },
    url: 'https://pinnr.shop',
  },
  {
    slug: 'rulenorth',
    name: 'RuleNorth',
    category: 'product',
    status: 'in-development',
    statusLabel: 'In development',
    tagline: 'Screen international orders and keep the evidence.',
    summary:
      'A Shopify-first workflow being built to screen parties and destinations before international shipment release.',
    problem:
      'International orders can surface sanctions, restricted-party, and destination questions that need traceable human review.',
    approach:
      'RuleNorth gathers possible matches, their sources, reviewer notes and the final decision on each order, so the team can show why an order shipped or stopped.',
    highlights: [
      'A person makes every final decision',
      'Each decision keeps its sources',
      'Collects only the data a check needs',
      'Starts with Shopify, built to add other stores',
    ],
    releaseNote:
      'In development with synthetic data. RuleNorth supports operational review and does not provide legal advice.',
    image: {
      src: '/products/rulenorth-review.png',
      width: 1536,
      height: 1024,
      alt: 'Synthetic RuleNorth review workspace with an order queue, evidence sources, and human decision controls',
    },
    userLine: 'For commerce teams that need to check international orders before they ship.',
    capability: 'A review workflow where every decision keeps its evidence and an audit trail.',
    action: {
      label: 'Follow RuleNorth',
      href: 'mailto:hello@jattosolutions.com?subject=Follow%20RuleNorth',
    },
  },
  {
    slug: 'infergo',
    name: 'InferGo',
    category: 'open-source',
    status: 'public-alpha',
    statusLabel: 'Public alpha',
    tagline: 'Run model predictions inside your Go service.',
    summary:
      'Export a supported model once, load it in Go, and run predictions without Python in production.',
    problem:
      'Teams running small inference workloads in Go often add a separate Python runtime and service boundary.',
    approach:
      'InferGo is a small Go library that runs supported models on the CPU. Each supported model is tested to give the same results as the original.',
    highlights: [
      'Use it as a Go library',
      'Or run it as a small HTTP server',
      'Results checked against the original model',
      'Open source on GitHub',
    ],
    releaseNote: 'Public and currently in alpha under the Pergamon Labs organization.',
    image: {
      src: '/products/infergo-github.png',
      width: 1200,
      height: 600,
      alt: 'GitHub repository card for the public Pergamon Labs InferGo project',
    },
    userLine: 'For Go developers who want to run model predictions without a Python service.',
    capability: 'Go backend services and machine learning inference in production.',
    action: { label: 'InferGo on GitHub', href: 'https://github.com/pergamon-labs/infergo' },
    url: 'https://github.com/pergamon-labs/infergo',
  },
];

export const commercialProducts = products.filter((product) => product.category === 'product');

export const openSourceProducts = products.filter((product) => product.category === 'open-source');

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
