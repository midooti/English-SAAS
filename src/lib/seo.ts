/**
 * lib/seo.ts — Helpers SEO partagés.
 *
 * - Factory de métadonnées cohérentes (title unique, description, canonical,
 *   Open Graph + Twitter, robots index/noindex).
 * - URL réutilisable pour les images OG dynamiques (/api/og).
 * - Constructeurs JSON-LD (Organization, WebSite, BreadcrumbList, Article,
 *   FAQPage, Course) — utilisés uniquement quand ils décrivent vraiment la page.
 */
import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from '@/lib/config';

export type SeoInput = {
  /** Titre complet et unique (absolu, sans template). */
  title: string;
  /** Meta description unique. */
  description: string;
  /** Chemin public (ex: /toefl/reading). */
  path: string;
  /** Petit libellé au-dessus du titre OG (ex: "Free TOEFL practice"). */
  overline?: string;
  /** True pour noindex, nofollow (pages privées / outils internes). */
  noindex?: boolean;
  /** Robots personnalisé : "index,follow" | "noindex,nofollow". */
  robots?: 'index,follow' | 'noindex,nofollow';
};

/** URL absolue d'une route publique. */
export function absolutePath(path: string): string {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Image OG dynamique et réutilisable pour toute la plateforme.
 * Ex: /api/og?title=TOEFL%20Reading%20Practice&overline=Free%20exercises&exam=TOEFL
 */
export function ogImageUrl(opts: {
  title: string;
  overline?: string;
  exam?: string;
  variant?: 'default' | 'share';
  bandFrom?: string;
  bandTo?: string;
}): string {
  const params = new URLSearchParams();
  params.set('title', opts.title);
  if (opts.overline) params.set('overline', opts.overline);
  if (opts.exam) params.set('exam', opts.exam);
  if (opts.variant && opts.variant !== 'default') params.set('variant', opts.variant);
  if (opts.bandFrom) params.set('bandFrom', opts.bandFrom);
  if (opts.bandTo) params.set('bandTo', opts.bandTo);
  return `${SITE_URL}/api/og?${params.toString()}`;
}

/**
 * Fabrique des Metadata Next.js cohérentes pour toutes les pages publiques.
 * Applique : canonical absolu, OpenGraph (+ image dynamique), Twitter card,
 * robots (index par défaut, noindex si demandé).
 */
export function seoMetadata(input: SeoInput): Metadata {
  const indexed = input.robots ?? (input.noindex ? 'noindex,nofollow' : 'index,follow');
  return {
    title: { absolute: input.title },
    description: input.description,
    alternates: { canonical: absolutePath(input.path) },
    openGraph: {
      type: 'website',
      url: absolutePath(input.path),
      siteName: SITE_NAME,
      locale: 'en_US',
      title: input.title,
      description: input.description,
      images: [
        {
          url: ogImageUrl({
            title: input.title,
            overline: input.overline ?? 'ScoreUp',
            exam: input.overline,
          }),
          width: 1200,
          height: 630,
          alt: input.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [
        ogImageUrl({ title: input.title, overline: input.overline ?? 'ScoreUp', exam: input.overline }),
      ],
    },
    robots: {
      index: indexed.includes('index'),
      follow: indexed.includes('follow'),
    },
  };
}

/** JSON-LD — Organization + WebSite pour les pages publiques. */
export function orgWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        slogan: SITE_TAGLINE,
        logo: ogImageUrl({ title: SITE_NAME, overline: 'ScoreUp' }),
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };
}

export type Crumb = { label: string; href?: string };

/** JSON-LD — BreadcrumbList. */
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absolutePath(item.href) } : {}),
    })),
  };
}

/** JSON-LD — FAQPage (uniquement si les FAQ décrivent réellement le contenu). */
export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export type ArticleMeta = {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; url?: string };
  imageUrl: string;
  category: string;
  headline: string;
};

/** JSON-LD — Article (posts de blog). */
export function articleJsonLd(article: ArticleMeta) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author.name,
      ...(article.author.url ? { url: article.author.url } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absolutePath(article.path),
    },
  };
}

/** JSON-LD — Course (utile pour des pages de préparation structurée). */
export function courseJsonLd(opts: { name: string; description: string; path: string; provider?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    provider: {
      '@type': 'Organization',
      name: opts.provider ?? SITE_NAME,
      url: SITE_URL,
    },
    url: absolutePath(opts.path),
  };
}