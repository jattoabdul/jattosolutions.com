import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/products', '/about', '/contact', '/privacy', '/terms'];

  return [
    ...pages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const),
      priority: path === '' ? 1 : path === '/products' ? 0.9 : 0.6,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
