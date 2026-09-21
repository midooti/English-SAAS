/**
 * lib/seo-registry.ts — Registre central des routes publiques indexables.
 * Source de vérité pour le sitemap, le dashboard SEO interne et les audits.
 */
import {
  toeflSections,
  toeflTopics,
  toeicSections,
  toeicTopics,
  ieltsSections,
} from '@/content/exams';
import { blogPosts } from '@/content/blog';
import { tools } from '@/content/tools';
import { practicePages } from '@/content/practice';

export type RegistryEntry = {
  path: string;
  title: string;
  description: string;
  category: 'home' | 'test' | 'practice' | 'vocabulary' | 'study-plan' | 'score' | 'blog' | 'tool' | 'exam-section';
  canonical: boolean;
};

/**
 * Liste exhaustive des pages indexables. Si une page est ajoutée hors de
 * cette liste, le sitemap et le dashboard la signalent automatiquement.
 */
export function buildRegistry(): RegistryEntry[] {
  const entries: RegistryEntry[] = [
    {
      path: '/',
      title: 'ScoreUp — Prepare for TOEFL, TOEIC, IELTS & English Tests',
      description: 'Personalized English test preparation with free diagnostics and estimated scores.',
      category: 'home',
      canonical: true,
    },
    { path: '/tests', title: 'English Tests', description: 'Compare English test preparation options.', category: 'test', canonical: true },
    { path: '/pricing', title: 'Pricing', description: 'ScoreUp pricing and plan comparison.', category: 'home', canonical: true },
    { path: '/diagnostic', title: 'Free Diagnostic Test', description: 'Free English level diagnostic.', category: 'tool', canonical: true },
    { path: '/tools', title: 'Free English Tools', description: 'Free English tools and calculators.', category: 'tool', canonical: true },
    { path: '/practice', title: 'Practice App', description: 'Daily English practice app.', category: 'practice', canonical: true },
    { path: '/vocabulary', title: 'Vocabulary App', description: 'English vocabulary flashcards and review.', category: 'vocabulary', canonical: true },
    { path: '/mock-tests', title: 'Mock Tests', description: 'Timed English mock tests.', category: 'test', canonical: true },
    { path: '/blog', title: 'Blog', description: 'English test preparation blog.', category: 'blog', canonical: true },
    { path: '/toefl', title: 'TOEFL Preparation Hub', description: 'TOEFL preparation guides and practice.', category: 'exam-section', canonical: true },
    { path: '/toeic', title: 'TOEIC Preparation Hub', description: 'TOEIC preparation guides and practice.', category: 'exam-section', canonical: true },
    { path: '/ielts', title: 'IELTS Preparation Hub', description: 'IELTS preparation guides and practice.', category: 'exam-section', canonical: true },
    { path: '/cambridge', title: 'Cambridge Preparation', description: 'Cambridge English test preparation.', category: 'exam-section', canonical: true },
    { path: '/duolingo-english-test', title: 'Duolingo English Test Preparation', description: 'Duolingo English Test preparation.', category: 'exam-section', canonical: true },
  ];

  const sectionIds = (slug: string, list: string) => list;
  void sectionIds;

  toeflSections.forEach((s) =>
    entries.push({
      path: `/toefl/${s.slug}`,
      title: s.title,
      description: s.description,
      canonical: true,
      category: categoryForSection(s.intent),
    })
  );
  toeflTopics.forEach((t) =>
    entries.push({
      path: `/toefl/${t.slug}`,
      title: t.title,
      description: t.description,
      canonical: true,
      category: categoryForSection(t.intent),
    })
  );
  toeicSections.forEach((s) =>
    entries.push({
      path: `/toeic/${s.slug}`,
      title: s.title,
      description: s.description,
      canonical: true,
      category: categoryForSection(s.intent),
    })
  );
  toeicTopics.forEach((t) =>
    entries.push({
      path: `/toeic/${t.slug}`,
      title: t.title,
      description: t.description,
      canonical: true,
      category: categoryForSection(t.intent),
    })
  );
  ieltsSections.forEach((s) =>
    entries.push({
      path: `/ielts/${s.slug}`,
      title: s.title,
      description: s.description,
      canonical: true,
      category: categoryForSection(s.intent),
    })
  );

  tools.forEach((tool) =>
    entries.push({
      path: `/tools/${tool.slug}`,
      title: tool.title,
      description: tool.description,
      canonical: true,
      category: 'tool',
    })
  );

  practicePages.forEach((p) =>
    entries.push({
      path: `/practice/${p.slug}`,
      title: p.title,
      description: p.description,
      canonical: true,
      category: 'practice',
    })
  );

  blogPosts.forEach((post) =>
    entries.push({
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      canonical: true,
      category: 'blog',
    })
  );

  return entries;
}

function categoryForSection(intent: string): RegistryEntry['category'] {
  switch (intent) {
    case 'practice':
      return 'practice';
    case 'score':
      return 'score';
    case 'planning':
      return 'study-plan';
    case 'vocabulary':
      return 'vocabulary';
    default:
      return 'exam-section';
  }
}