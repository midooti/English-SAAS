/**
 * mockTests.ts — Définition des mock tests de démo (interface complète).
 */

export type MockTest = {
  slug: string;
  title: string;
  exam: 'toefl' | 'toeic';
  number: number;
  durationMin: number;
  totalQuestions: number;
  difficulty: 'easy' | 'medium' | 'hard';
  premium: boolean;
  description: string;
};

export const mockTests: MockTest[] = [
  {
    slug: 'toefl-mock-1',
    title: 'TOEFL Mock Test #1',
    exam: 'toefl',
    number: 1,
    durationMin: 12,
    totalQuestions: 8,
    difficulty: 'easy',
    premium: false,
    description: 'Full-length practice with reading, listening and vocabulary sections. Free access.',
  },
  {
    slug: 'toefl-mock-2',
    title: 'TOEFL Mock Test #2',
    exam: 'toefl',
    number: 2,
    durationMin: 18,
    totalQuestions: 12,
    difficulty: 'hard',
    premium: true,
    description: 'Advanced TOEFL simulation with harder passages and inference questions.',
  },
  {
    slug: 'toeic-mock-1',
    title: 'TOEIC Mock Test #1',
    exam: 'toeic',
    number: 1,
    durationMin: 12,
    totalQuestions: 8,
    difficulty: 'medium',
    premium: false,
    description: 'Business-oriented reading and listening practice with realistic workplace contexts.',
  },
  {
    slug: 'toeic-mock-2',
    title: 'TOEIC Mock Test #2',
    exam: 'toeic',
    number: 2,
    durationMin: 18,
    totalQuestions: 12,
    difficulty: 'hard',
    premium: true,
    description: 'Upper-intermediate TOEIC simulation covering memos, emails and business talks.',
  },
];

export function getMockTest(slug: string): MockTest | undefined {
  return mockTests.find((t) => t.slug === slug);
}