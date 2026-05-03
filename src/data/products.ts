export type ProductStatus = 'live' | 'beta' | 'coming-soon';
export type ProductCategory = 'paid' | 'oss';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  url?: string;
  github?: string;
};

// TODO: refine taglines + descriptions before launch.
export const products: Product[] = [
  {
    slug: 'discova',
    name: 'Discova',
    tagline: 'Discovery, by design.',
    description: 'A live product. Visit the site to learn more.',
    category: 'paid',
    status: 'live',
    url: 'https://discova.dev',
  },
  {
    slug: 'trustkarry',
    name: 'TrustKarry',
    tagline: 'Trusted handoffs, handled.',
    description: 'A platform for trusted handoffs between people. Currently in closed beta.',
    category: 'paid',
    status: 'beta',
    url: 'https://trustkarry.com',
  },
  {
    slug: 'project-four',
    name: 'Project Four',
    tagline: 'Something new, in the works.',
    description: 'A new product is being built. Coming soon.',
    category: 'paid',
    status: 'coming-soon',
  },
  {
    slug: 'infergo',
    name: 'Infergo',
    tagline: 'Inference, simplified.',
    description: 'An open source toolkit for shipping LLM features faster.',
    category: 'oss',
    status: 'live',
    github: 'https://github.com/pergamon-labs/infergo',
  },
];
