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
      title: 'Prep-Anglais — Préparation aux examens d\u2019anglais',
      description: 'Préparation structurée aux examens d\u2019anglais : TOEFL, TOEIC, IELTS, Cambridge English et Duolingo English Test.',
      category: 'home',
      canonical: true,
    },
    { path: '/tests', title: 'Tests d\u2019anglais : comparatif TOEFL, TOEIC, IELTS', description: 'Comparez les principaux examens d\u2019anglais.', category: 'test', canonical: true },
    { path: '/pricing', title: 'Tarifs | Prep-Anglais', description: 'Formule gratuite et abonnement Premium.', category: 'home', canonical: true },
    { path: '/diagnostic', title: 'Test de niveau gratuit | Prep-Anglais', description: 'Évaluez gratuitement votre niveau d\u2019anglais.', category: 'tool', canonical: true },
    { path: '/tools', title: 'Outils gratuits | Prep-Anglais', description: 'Outils et calculateurs gratuits pour l\u2019anglais.', category: 'tool', canonical: true },
    { path: '/practice', title: 'Exercices | Prep-Anglais', description: 'Exercices quotidiens d\u2019anglais.', category: 'practice', canonical: true },
    { path: '/vocabulary', title: 'Vocabulaire | Prep-Anglais', description: 'Apprentissage du vocabulaire avec cartes mémoire.', category: 'vocabulary', canonical: true },
    { path: '/mock-tests', title: 'Examens blancs | Prep-Anglais', description: 'Examens blancs chronométrés.', category: 'test', canonical: true },
    { path: '/blog', title: 'Blog | Prep-Anglais', description: 'Méthodologie, grammaire et conseils pour vos examens d\u2019anglais.', category: 'blog', canonical: true },
    { path: '/toefl', title: 'Préparation TOEFL | Prep-Anglais', description: 'Guides et exercices de préparation au TOEFL.', category: 'exam-section', canonical: true },
    { path: '/toeic', title: 'Préparation TOEIC | Prep-Anglais', description: 'Guides et exercices de préparation au TOEIC.', category: 'exam-section', canonical: true },
    { path: '/ielts', title: 'Préparation IELTS | Prep-Anglais', description: 'Guides et exercices de préparation à l\u2019IELTS.', category: 'exam-section', canonical: true },
    { path: '/cambridge', title: 'Préparation Cambridge English | Prep-Anglais', description: 'Guides de préparation aux certifications Cambridge English.', category: 'exam-section', canonical: true },
    { path: '/duolingo-english-test', title: 'Préparation Duolingo English Test | Prep-Anglais', description: 'Guides de préparation au Duolingo English Test.', category: 'exam-section', canonical: true },
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