/**
 * exams.ts — Catalogue des examens couverts par ScoreUp.
 */

export type ExamKey = 'toefl' | 'toeic' | 'ielts' | 'cambridge' | 'duolingo';

export type ExamInfo = {
  key: ExamKey;
  name: string;
  slug: string;
  tagline: string;
  skills: string[];
  developed: boolean;
  scale: string;
};

export const exams: ExamInfo[] = [
  {
    key: 'toefl',
    name: 'TOEFL',
    slug: 'toefl',
    tagline: 'Academic English for universities in the US, Canada and beyond.',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
    developed: true,
    scale: 'Estimated score 0–9',
  },
  {
    key: 'toeic',
    name: 'TOEIC',
    slug: 'toeic',
    tagline: 'Professional English for business and the workplace.',
    skills: ['Reading', 'Listening'],
    developed: true,
    scale: 'Estimated score 0–9',
  },
  {
    key: 'ielts',
    name: 'IELTS',
    slug: 'ielts',
    tagline: 'Academic and General English for study and migration.',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
    developed: false,
    scale: 'Estimated band 0–9',
  },
  {
    key: 'cambridge',
    name: 'Cambridge',
    slug: 'cambridge',
    tagline: 'KET, PET, FCE, CAE — structured levels for every stage.',
    skills: ['Reading', 'Writing', 'Speaking', 'Listening'],
    developed: false,
    scale: 'Estimated level A2–C1',
  },
  {
    key: 'duolingo',
    name: 'Duolingo English Test',
    slug: 'duolingo-english-test',
    tagline: 'Fast, online, adaptive — accepted by many universities.',
    skills: ['Literacy', 'Comprehension', 'Conversation', 'Production'],
    developed: false,
    scale: 'Estimated score 10–160',
  },
];

export function getExam(key: ExamKey): ExamInfo | undefined {
  return exams.find((e) => e.key === key);
}