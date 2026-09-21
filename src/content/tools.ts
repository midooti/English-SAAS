/**
 * content/tools.ts — Outils gratuits SEO.
 * Chaque outil est réellement utile sans paiement, a son contenu éducatif
 * propre, et se termine par un CTA naturel vers le diagnostic.
 */
import type { ToolEntry } from '@/content/types';

const diagnosticCta = {
  title: 'Want to improve your score?',
  text: 'Take the free ScoreUp diagnostic and get an estimated level plus a personalized starting plan.',
  href: '/diagnostic',
  label: 'Take the free diagnostic',
};

export const tools: ToolEntry[] = [
  {
    slug: 'toefl-score-calculator',
    exam: 'toefl',
    app: 'score-calculator',
    title: 'TOEFL Score Calculator — Estimate Your Band',
    description:
      'Convert TOEFL section performance into an estimated 0–9 score. Free tool for planning, not an official result.',
    h1: 'TOEFL Score Calculator',
    intro: 'Estimate your current TOEFL band from your section accuracy. Enter right answers for practice questions and get an immediate estimated score.',
    blocks: [
      { kind: 'h2', text: 'How this calculator works' },
      { kind: 'p', text: 'ScoreUp uses a 0–9 estimated band. You enter the number of questions you answered correctly per section and the calculator converts accuracy into an approximate band' },
      { kind: 'tip', text: 'Use this for planning only. Only the official ETS test can certify your real TOEFL score.' },
    ],
    faq: [
      { q: 'Is this the official TOEFL scoring?', a: 'No. Real TOEFL scoring is proprietary; this is an original estimate to guide your study plan.' },
      { q: 'What is a good estimated TOEFL band?', a: 'Many universities are comfortable with an estimated band around 5.5–6.5, equivalent to a strong total score.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toeic-score-calculator',
    exam: 'toeic',
    app: 'score-calculator',
    title: 'TOEIC Score Calculator — Estimate Your Level',
    description:
      'Estimate your TOEIC level (10–990 equivalent) from practice accuracy. Free and instant.',
    h1: 'TOEIC Score Calculator',
    intro: 'Estimate where your TOEIC level sits on the 10–990 scale by entering your accuracy on practice questions.',
    blocks: [
      { kind: 'h2', text: 'How the TOEIC scale relates to practice bands' },
      { kind: 'p', text: 'The real TOEIC maps raw answers to its curve secretly. This calculator gives you a transparent estimate: section accuracy → a 0–9 band, shown alongside its approximate TOEIC equivalent.' },
      { kind: 'tip', text: 'A score without a study plan is only a number. Use the estimate to choose a target and a schedule.' },
    ],
    faq: [
      { q: 'What TOEIC score do employers want?', a: 'Many roles look for 700+ (roughly an estimated band 5.5), while international operations often ask 850+.' },
      { q: 'Can I trust an estimated TOEIC score?', a: 'Treat it as a direction, not a certificate. Take the official test for a certified result.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'ielts-score-calculator',
    exam: 'ielts',
    app: 'score-calculator',
    title: 'IELTS Band Score Calculator',
    description:
      'Enter your estimated IELTS section bands to see your overall band — exactly how the average is rounded.',
    h1: 'IELTS Band Score Calculator',
    intro: 'The IELTS overall band is the average of Listening, Reading, Writing and Speaking, rounded to the nearest half band. Enter your section bands to see yours.',
    blocks: [
      { kind: 'h2', text: 'How the overall band is computed' },
      { kind: 'p', text: 'Add the four section bands, divide by four, and round to the nearest 0.5. For example: (6.5 + 7.0 + 6.0 + 6.5) ÷ 4 = 6.5.' },
      { kind: 'p', text: 'Be careful: average 6.75 rounds UP to 7.0, while 6.25 rounds DOWN to 6.0. Half a band matters for many university offers.' },
      { kind: 'tip', text: 'Universities often require minimums per section, not just an overall band. Keep every section at or above the required level.' },
    ],
    faq: [
      { q: 'Can this calculator give my real IELTS score?', a: 'No — only a certified IELTS result counts. Enter your current practice bands to see your overall estimate.' },
      { q: 'What if one section drags my band down?', a: 'Identify it and rebalance your plan. A weak Writing section is the most common overall-band limiter.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'english-level-test',
    app: 'english-level-test',
    title: 'Free English Level Test',
    description:
      'Answer 10 original questions and get an estimated English level in minutes. No sign-up required.',
    h1: 'Free English Level Test',
    intro: 'A short, honest check of your English level: 10 original questions across reading and vocabulary, finished with an estimated score.',
    blocks: [
      { kind: 'h2', text: 'What this test measures' },
      { kind: 'p', text: 'Reading comprehension, vocabulary in context and listening-style understanding, drawn from academic and workplace English.' },
      { kind: 'h2', text: 'How to use your result' },
      { kind: 'ol', items: ['Take the full diagnostic for a section-by-section view.', 'Share your estimated level or keep it private.', 'Build a daily plan around your weakest skills.'] },
    ],
    faq: [
      { q: 'Is this test official?', a: 'No. It is original educational content and returns an estimated level for guidance.' },
      { q: 'Do I need to sign up?', a: 'No — the test runs instantly with no account.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toefl-study-plan-generator',
    exam: 'toefl',
    app: 'study-plan-generator',
    title: 'TOEFL Study Plan Generator',
    description:
      'Generate a personalized TOEFL study plan: exam date, weeks of preparation and daily minutes → weekly focus.',
    h1: 'TOEFL Study Plan Generator',
    intro: 'Turn “make time to prepare” into a real calendar. Answer three questions and get a weekly TOEFL plan you can follow.',
    blocks: [
      { kind: 'h2', text: 'What a good TOEFL plan contains' },
      { kind: 'ul', items: ['A daily fixed slot (20–45 minutes).', 'One skill focus per day.', 'A mock test every 2 weeks.', 'A taper in the final week.'] },
      { kind: 'h2', text: 'Why generator plans work' },
      { kind: 'p', text: 'A written plan converts intention into schedule. When the plan is printed, the “should I study today?” decision is already made.' },
    ],
    faq: [
      { q: 'How many weeks should my TOEFL plan be?', a: '4–8 weeks for a solid half-to-one band improvement. The generator adapts to whatever lead time you have.' },
      { q: 'What if I only have 15 minutes a day?', a: 'The plan supports that too — consistent 15-minute sessions outperform irregular 2-hour ones.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toeic-study-plan-generator',
    exam: 'toeic',
    app: 'study-plan-generator',
    title: 'TOEIC Study Plan Generator',
    description:
      'Get a personalized TOEIC study plan with weekly listening and reading focus, mock test milestones and a taper week.',
    h1: 'TOEIC Study Plan Generator',
    intro: 'A TOEIC plan runs on daily listening/reading practice. Answer three questions and get a schedule built for your date.',
    blocks: [
      { kind: 'h2', text: 'The TOEIC plan skeleton' },
      { kind: 'ul', items: ['Listening focus 3 days a week (Parts 1–4).', 'Reading focus 3 days a week (Parts 5–7).', 'Vocabulary every day in context.', 'A mock test every 2 weeks.', 'Final week: light review only.'] },
      { kind: 'h2', text: 'Adapt the plan to your part' },
      { kind: 'p', text: 'If Part 2 (question-response) is your weakest, the generator puts listening front and centre. Weakness-first ordering is the fastest route.' },
    ],
    faq: [
      { q: 'Is 30 days enough for TOEIC?', a: 'Enough for roughly one estimated band, especially in Listening — the fastest-trainable section.' },
      { q: 'Should I time my practice?', a: 'Yes. Timed practice everywhere: it is what mock-day feels like, and surprise pacing is the top score killer.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'english-vocabulary-test',
    app: 'english-vocabulary-test',
    title: 'Free English Vocabulary Test',
    description:
      'Test your English vocabulary with 10 questions built from our word bank — academic, science, business and university words.',
    h1: 'Free English Vocabulary Test',
    intro: 'A quick, honest measure of your English vocabulary range. Ten original questions across academic, science, business and university vocabulary.',
    blocks: [
      { kind: 'h2', text: 'What the test covers' },
      { kind: 'table', headers: ['Area', 'Sample word'], rows: [
        ['Academic', 'hypothesis, methodology'],
        ['Science', 'phenomenon, evidence'],
        ['Business', 'revenue, negotiate'],
        ['University', 'seminar, plagiarism'],
      ] },
      { kind: 'h2', text: 'What your score suggests' },
      { kind: 'p', text: 'Eight to ten correct suggests strong academic-range vocabulary. Six or fewer suggests your plan should start with weekly themed word families — not lists.' },
    ],
    faq: [
      { q: 'How is this vocabulary test scored?', a: 'Correct answers are counted and matched to a simple band. It is an estimate, not a certified test.' },
      { q: 'Can I practise these words afterwards?', a: 'Yes — the ScoreUp vocabulary section uses the same word bank with flashcards and spaced review.' },
    ],
    cta: diagnosticCta,
  },
];

export function getTool(slug: string): ToolEntry | undefined {
  return tools.find((t) => t.slug === slug);
}