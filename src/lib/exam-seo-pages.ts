/**
 * lib/exam-seo-pages.ts — Registre des pages SEO par examen.
 * Unifie sections + topics et permet la recherche par slug (~ URL segments).
 */
import {
  ieltsSections,
  toeflSections,
  toeflTopics,
  toeicSections,
  toeicTopics,
} from '@/content/exams';
import type { SeoPageData } from '@/content/types';

export type ExamPages = { sections: SeoPageData[]; topics: SeoPageData[] };

const registry: Record<string, ExamPages> = {
  toefl: { sections: toeflSections, topics: toeflTopics },
  toeic: { sections: toeicSections, topics: toeicTopics },
  ielts: { sections: ieltsSections, topics: [] },
};

export function getExamRegistry(examSlug: string): ExamPages | undefined {
  return registry[examSlug];
}

export function findExamPage(examSlug: string, slug: string): SeoPageData | undefined {
  const reg = registry[examSlug];
  if (!reg) return undefined;
  return [...reg.sections, ...reg.topics].find((p) => p.slug === slug);
}