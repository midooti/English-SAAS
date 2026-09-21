/**
 * content/types.ts — Modèle de contenu SEO.
 * Chaque page est écrite depuis des données structurées ; chaque bloc doit
 * être du contenu réel (jamais un texte vide généré pour classifier).
 */

export type SearchIntent =
  | 'informational'
  | 'practice'
  | 'problem-solving'
  | 'score'
  | 'planning'
  | 'vocabulary';

export type ContentBlock =
  | { kind: 'h2'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'p'; text: string }
  | { kind: 'ul'; items: string[] }
  | { kind: 'ol'; items: string[] }
  | { kind: 'tip'; text: string }
  | { kind: 'example'; label: string; text: string }
  | { kind: 'table'; headers: string[]; rows: string[][] };

export type SeoFaq = { q: string; a: string };

export type SeoPageData = {
  /** Slug dans /toefl/, /toeic/ ou /ielts/. Peut contenir "/" (topics). */
  slug: string;
  intent: SearchIntent;
  h1: string;
  title: string;
  description: string;
  intro: string;
  blocks: ContentBlock[];
  faq: SeoFaq[];
  /** Liens internes vers d'autres pages du site (avec URLs absolues de routes). */
  internalLinks: { label: string; href: string }[];
  /** Outils gratuits pertinents (cartes "Try a tool"). */
  tools?: { label: string; href: string }[];
  cta?: { title: string; text: string; href: string; label: string };
};

export type BlogCategory =
  | 'TOEFL'
  | 'TOEIC'
  | 'IELTS'
  | 'English Vocabulary'
  | 'English Grammar'
  | 'Study Tips'
  | 'University English';

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  author: { name: string };
  publishedAt: string;
  /** Mis à jour réellement ; à ne pas falsifier. */
  updatedAt?: string;
  readingTimeMin: number;
  excerpt: string;
  blocks: ContentBlock[];
  faq?: SeoFaq[];
  relatedSlugs: string[];
};

export type ToolSlug =
  | 'toefl-score-calculator'
  | 'toeic-score-calculator'
  | 'ielts-score-calculator'
  | 'english-level-test'
  | 'toefl-study-plan-generator'
  | 'toeic-study-plan-generator'
  | 'english-vocabulary-test';

export type ToolEntry = {
  slug: ToolSlug;
  exam?: 'toefl' | 'toeic' | 'ielts';
  app:
    | 'score-calculator'
    | 'english-level-test'
    | 'study-plan-generator'
    | 'english-vocabulary-test';
  title: string;
  description: string;
  h1: string;
  intro: string;
  blocks: ContentBlock[];
  faq: SeoFaq[];
  cta: { title: string; text: string; href: string; label: string };
};

export type PracticePageData = {
  slug: string;
  exam: 'toefl' | 'toeic';
  skill: 'reading' | 'listening' | 'vocabulary';
  h1: string;
  title: string;
  description: string;
  intro: string;
  blocks: ContentBlock[];
  faq: SeoFaq[];
};