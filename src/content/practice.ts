/**
 * content/practice.ts — Landing pages de pratique indexables.
 * Chaque page combine du contenu éducatif unique + un exercice embarqué
 * gratuit (3 questions, aucune limite, aucune donnée privée).
 */
import type { PracticePageData } from '@/content/types';

export const practicePages: PracticePageData[] = [
  {
    slug: 'toefl-reading',
    exam: 'toefl',
    skill: 'reading',
    h1: 'TOEFL Reading Practice',
    title: 'Free TOEFL Reading Practice — Try a Mini Test | ScoreUp',
    description:
      'Try free TOEFL Reading practice right here: 3 live questions, main idea, detail and vocabulary in context.',
    intro:
      'Three live TOEFL Reading questions, right on this page — free and instant, no account needed. Each one targets a question type from the real test.',
    blocks: [
      { kind: 'h2', text: 'How to use this mini test' },
      { kind: 'ol', items: ['Answer the 3 live questions below.', 'Read the explanation after each answer.', 'Use the mini score as a quick direction signal.'] },
      { kind: 'p', text: 'For a full picture, take the free diagnostic afterwards — it estimates your level across reading, listening and vocabulary.' },
    ],
    faq: [
      { q: 'Is this limited?', a: 'This sample is free and unlimited — a full practice library with daily limits lives inside the practice app.' },
      { q: 'Do these questions count toward my score?', a: 'No. Use them as practice; real progress tracking happens in your account.' },
    ],
  },
  {
    slug: 'toefl-vocabulary',
    exam: 'toefl',
    skill: 'vocabulary',
    h1: 'TOEFL Vocabulary Practice',
    title: 'Free TOEFL Vocabulary Practice — 3 Live Questions | ScoreUp',
    description:
      'Practise high-frequency TOEFL vocabulary with 3 live questions and instant explanations.',
    intro:
      'Test yourself on three academic TOEFL vocabulary questions right here. Each checks a different word family style.',
    blocks: [
      { kind: 'h2', text: 'What this sample covers' },
      { kind: 'ul', items: ['Academic word meaning.', 'Word in context.', 'Word family recognition.'] },
      { kind: 'p', text: 'Got all three right? Your academic vocabulary is solid. Missed some? The vocabulary app builds flashcards and spaced review from this same word bank.' },
    ],
    faq: [
      { q: 'Are these official TOEFL words?', a: 'No — they are original academic words from our own bank, chosen for the same frequency TOEFL uses.' },
      { q: 'How do I remember new words?', a: 'Learn in context, review on a schedule, and write one original sentence per word.' },
    ],
  },
  {
    slug: 'toeic-reading',
    exam: 'toeic',
    skill: 'reading',
    h1: 'TOEIC Reading Practice',
    title: 'Free TOEIC Reading Practice — 3 Live Questions | ScoreUp',
    description:
      'Try three free TOEIC Reading questions: incomplete sentences and business-style comprehension.',
    intro:
      'Three live TOEIC Reading questions covering grammar-in-context and business document comprehension.',
    blocks: [
      { kind: 'h2', text: 'The three question styles' },
      { kind: 'ol', items: ['A Part 5-style incomplete sentence.', 'A text-completion gap.', 'A short business reading scenario.'] },
      { kind: 'p', text: 'For the full TOEIC rhythm — Parts 5–7 at real timing — use the mock tests and the daily practice app.' },
    ],
    faq: [
      { q: 'Does TOEIC reading get harder over time?', a: 'Questions stay similar in difficulty; the pressure is time and volume (100 questions). Practise pace early.' },
      { q: 'What grammar appears most on TOEIC?', a: 'Agreement, tense, prepositions and comparatives. Our practice app trains exactly those.' },
    ],
  },
  {
    slug: 'toeic-listening',
    exam: 'toeic',
    skill: 'listening',
    h1: 'TOEIC Listening Practice',
    title: 'Free TOEIC Listening Practice — 3 Live Questions | ScoreUp',
    description:
      'Three free TOEIC-style Listening questions on workplace scenarios, with explanations.',
    intro:
      'Three live questions modelled on TOEIC workplace audio: who is talking, what is the request, what happens next.',
    blocks: [
      { kind: 'h2', text: 'What the sample trains' },
      { kind: 'ul', items: ['Speaker roles (who is talking and why).', 'Numbers as details (times, prices, dates).', 'Next-action inference.'] },
      { kind: 'p', text: 'TOEIC audio plays once in the real test. Build prediction habits with daily listening practice in the app.' },
    ],
    faq: [
      { q: 'Do I need native listening hours first?', a: 'A little daily workplace audio helps, but targeted prediction practice moves scores faster than passive exposure.' },
      { q: 'Is this real TOEIC audio?', a: 'No — it is original scripted practice in TOEIC-style workplace contexts.' },
    ],
  },
];

export function getPracticePage(slug: string): PracticePageData | undefined {
  return practicePages.find((p) => p.slug === slug);
}