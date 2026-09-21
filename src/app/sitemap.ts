import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { buildRegistry } from '@/lib/seo-registry';

/** Sitemap généré depuis le registre centré des routes indexables. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return buildRegistry().map((entry) => ({
    url: `${SITE_URL}${entry.path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: entry.path === '/' ? 1 : 0.7,
  }));
}