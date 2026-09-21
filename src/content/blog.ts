/**
 * content/blog.ts — Moteur de contenu éditorial.
 *
 * Chaque article a : auteur, dates de publication/mise à jour réelles,
 * temps de lecture, contenu original avec exemples et FAQ, liens vers des
 * articles liés et un CTA produit naturel. Aucune fraîcheur falsifiée.
 */
import type { BlogPost } from '@/content/types';

export const blogCategories = [
  'TOEFL',
  'TOEIC',
  'IELTS',
  'English Vocabulary',
  'English Grammar',
  'Study Tips',
  'University English',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-improve-toefl-speaking-in-30-days',
    title: 'How to Improve TOEFL Speaking in 30 Days',
    description:
      'A 30-day TOEFL Speaking plan: daily fluency drills, the 15-second planning trick and the exact structure for every task.',
    category: 'TOEFL',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-03-12',
    updatedAt: '2026-08-20',
    readingTimeMin: 6,
    excerpt:
      'TOEFL Speaking is the section that moves fastest if you practise deliberately. Here is a day-by-day plan built on the 15-second planning trick.',
    blocks: [
      { kind: 'p', text: 'Most learners rank Speaking as their weakest TOEFL section. The good news: it responds faster to practice than any other skill, because the technique is learnable in days even when fluency takes weeks.' },
      { kind: 'h2', text: 'Week 1 — Learn the format and the formula' },
      { kind: 'p', text: 'The test has four tasks. Task 1 is an opinion; Tasks 2–4 are integrated (you read or listen, then respond). Every task rewards the same skeleton: claim → reason → example.' },
      { kind: 'example', label: 'Formula in action', text: '“I prefer studying alone because it lets me control my pace. For example, when I review vocabulary, brief silences help me recall words faster than group conversation would.”' },
      { kind: 'h2', text: 'Week 2 — Daily 15-second planning drills' },
      { kind: 'ol', items: ['Pick any prompt.', 'Take 15 seconds to write one keyword per idea — never full sentences.', 'Speak your response in 45 seconds and record it.', 'Listen once; note where you hesitated.'] },
      { kind: 'h2', text: 'Week 3 — Fillers to silence' },
      { kind: 'p', text: 'Count your “um” and “like” fillers. Replace each filler with a deliberate pause. Pausing sounds confident; filler sounds unsure. If you must pause, pause silently.' },
      { kind: 'h2', text: 'Week 4 — Full mock with feedback' },
      { kind: 'p', text: 'Do a full timed Speaking section and listen to your recording twice: once for content, once for delivery. Your goal is not perfection — it is that every answer is clear, structured and within time.' },
      { kind: 'tip', text: 'Clarity beats speed. A slower, well-structured answer scores higher than a fast, rambling one.' },
    ],
    faq: [
      { q: 'Can I improve TOEFL Speaking in a month?', a: 'Yes — most learners noticeably improve their fluency and delivery in 30 days. Band-level gains are realistic when the 15-second planning habit is drilled daily.' },
      { q: 'Should I record myself?', a: 'Always. A recording is the only honest mirror: you hear hesitations and structure errors that feel invisible while speaking.' },
    ],
    relatedSlugs: ['toefl-vocabulary-strategies-that-actually-work', 'make-a-daily-study-plan-you-can-keep'],
  },
  {
    slug: 'toefl-vocabulary-strategies-that-actually-work',
    title: 'TOEFL Vocabulary Strategies That Actually Work',
    description:
      'Stop memorising word lists. Learn TOEFL vocabulary in word families, in context and on a spaced schedule.',
    category: 'TOEFL',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-05-02',
    readingTimeMin: 5,
    excerpt:
      'Word lists alone fail. This post explains the three habits that make TOEFL vocabulary stick: families, context and spacing.',
    blocks: [
      { kind: 'p', text: 'The temptation is to learn a list of 100 “TOEFL words”. It does not last. Vocabulary sticks when you learn families, in context, scheduled across days.' },
      { kind: 'h2', text: 'Learn word families, not singles' },
      { kind: 'example', label: 'A family worth owning', text: 'analyze (v), analysis (n), analytical (adj). One known member illuminates two more in the same reading passage.' },
      { kind: 'h2', text: 'Learn in context' },
      { kind: 'p', text: 'A word heard in a lecture and reused in an essay is yours; a word read on a list is rented. Write one original sentence per word about your own life or field.' },
      { kind: 'h2', text: 'Space your reviews' },
      { kind: 'ul', items: ['Today: learn 10 words.', 'Tomorrow: recall them from memory.', '+3 days: review again.', '+1 week: write an essay paragraph using all 10.'] },
      { kind: 'tip', text: 'ScoreUp vocabulary practice already works this way — words in context, flashcards, and a quiz that re-tests old words.' },
    ],
    faq: [
      { q: 'How many words do I need for TOEFL Reading?', a: 'Comfort with the Academic Word List plus frequent academic reading vocabulary gives you the reach you need — roughly the 3,500–5,000 level in practice.' },
      { q: 'Do I need to know every word in a passage?', a: 'No. TOEFL is designed so the main ideas survive a few unknown words. Learn to read past them.' },
    ],
    relatedSlugs: ['learn-english-vocabulary-fast-and-remember-it', 'how-to-improve-toefl-speaking-in-30-days'],
  },
  {
    slug: 'toeic-listening-score-higher-parts-3-and-4',
    title: 'TOEIC Listening: Score Higher on Parts 3 & 4',
    description:
      'Conversations and talks are where TOEIC listening points go missing. Learn prediction, note-taking and the three-question rhythm.',
    category: 'TOEIC',
    author: { name: 'Khalid Benali' },
    publishedAt: '2026-06-14',
    readingTimeMin: 6,
    excerpt:
      'Parts 3 and 4 decide your listening score. This guide turns their three-question rhythm into a predictable, trainable routine.',
    blocks: [
      { kind: 'p', text: 'Part 3 (conversations) and Part 4 (talks) each play an audio clip followed by three questions. The audio plays once. Your score depends on how you spend the preparation seconds.' },
      { kind: 'h2', text: 'Use the prep time to predict' },
      { kind: 'p', text: 'Before each clip, three questions are already on screen. Read them and predict: who is speaking, where, and what the speaker most likely wants. The audio then confirms or corrects your picture.' },
      { kind: 'h2', text: 'Note only what questions need' },
      { kind: 'ul', items: ['People and roles (“the manager”, “the receptionist”).', 'Numbers: times, prices, dates.', 'Actions: “reschedule”, “confirm”, “complain”.'] },
      { kind: 'h2', text: 'The three-question rhythm' },
      { kind: 'ol', items: ['Question 1 usually targets who/what/where — answer from the opening.', 'Question 2 usually targets details — numbers and reasons.', 'Question 3 usually asks for inference or next action.'] },
      { kind: 'example', label: 'Realistic trap', text: 'A voicemail says “the meeting was moved to 2pm”. The question asks the original meeting time — 10am — which appeared only at the start. Notes prevent this miss.' },
    ],
    faq: [
      { q: 'How many questions are in Parts 3 and 4?', a: 'Part 3 has about 39 questions (13 conversations) and Part 4 about 30 (10 talks). Together they dominate the Listening section.' },
      { q: 'Can I write notes during TOEIC listening?', a: 'Yes — scratch paper is allowed and smart use of it is exactly what prediction-based practice builds.' },
    ],
    relatedSlugs: ['toeic-reading-fast-comprehension-techniques', 'english-grammar-basics-for-test-takers'],
  },
  {
    slug: 'ielts-writing-task-2-band-7-structure',
    title: 'IELTS Writing Task 2: The Band-7 Structure',
    description:
      'A repeatable four-paragraph structure for IELTS Writing Task 2 that answers the prompt, develops examples and stays coherent.',
    category: 'IELTS',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-04-21',
    readingTimeMin: 7,
    excerpt:
      'Band 7 writing is mostly structure. This post gives you the paragraph skeleton, the example formula and the mistakes that keep essays at band 6.',
    blocks: [
      { kind: 'p', text: 'Examiners score four criteria: Task Response, Coherence, Vocabulary, Grammar. Structure improves all four at once — which is why a fixed paragraph shape is the most reliable band-raising tool.' },
      { kind: 'h2', text: 'The four-paragraph skeleton' },
      { kind: 'table', headers: ['Paragraph', 'Purpose', 'Words'], rows: [
        ['Intro', 'Paraphrase + position', '40–50'],
        ['Body 1', 'Reason + developed example', '90–110'],
        ['Body 2', 'Second reason or concession', '90–110'],
        ['Conclusion', 'Restate position', '30–40'],
      ] },
      { kind: 'h2', text: 'The example formula' },
      { kind: 'example', label: 'Developed example beats a name-drop', text: 'Weak: “For example, many companies hire graduates.” Strong: “For example, a recent graduate I know was hired after one internship because it demonstrated the teamwork employers value — a concrete sign of readiness.”' },
      { kind: 'h2', text: 'Four mistakes that cap you at band 6' },
      { kind: 'ul', items: ['Paraphrasing the prompt instead of taking a position in the intro.', 'Examples that name a country or company without explanation.', 'Memorised introductions that do not match the prompt.', 'Skipping the conclusion when time runs low.'] },
      { kind: 'tip', text: 'Write Task 2 by hand or keyboard with a 40-minute timer daily. The structure becomes automatic only through repetition.' },
    ],
    faq: [
      { q: 'What if the prompt asks two questions?', a: 'Answer both explicitly — one body paragraph each, plus a line in the conclusion acknowledging both.' },
      { q: 'Can I use the same example in Task 1 and 2?', a: 'No. Task 1 is a data report; examples belong only in Task 2 essays.' },
    ],
    relatedSlugs: ['english-grammar-basics-for-test-takers', 'toeic-reading-fast-comprehension-techniques'],
  },
  {
    slug: 'learn-english-vocabulary-fast-and-remember-it',
    title: 'How to Learn English Vocabulary Fast (and Remember It)',
    description:
      'The science-backed way to learn vocabulary fast: context, spacing and active recall. With a 20-minute daily routine.',
    category: 'English Vocabulary',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-07-08',
    readingTimeMin: 5,
    excerpt:
      'Cramming works for a quiz, not a test. Context, spacing and active recall are the three levers that make words permanent.',
    blocks: [
      { kind: 'p', text: 'Research on memory is consistent: we remember what we actively retrieve, reviewed at expanding intervals. Vocabulary learning is not an exception, it is the clearest example.' },
      { kind: 'h2', text: 'Active recall beats re-reading' },
      { kind: 'p', text: 'Cover the definition and try to say it from the word alone. The effort of recalling is the act that writes the memory. Re-reading feels productive and is nearly useless.' },
      { kind: 'h2', text: 'Spacing beats massing' },
      { kind: 'ul', items: ['Day 1: learn 10 words.', 'Day 2: recall from memory.', 'Day 4: recall again.', 'Day 8: write sentences with all 10.'] },
      { kind: 'h2', text: 'Context beats lists' },
      { kind: 'example', label: 'Two ways to meet a word', text: 'List: “significant = important.” Context: “The results were significant, so the study changed hospital policy.” The second version is unforgettable because it contains a consequence.' },
      { kind: 'tip', text: 'ScoreUp’s vocabulary system already does this: flashcards flip to test recall, reviews are spaced, and every word appears with an example.' },
    ],
    faq: [
      { q: 'How many words can I learn in a day?', a: '10–15 new words with solid recall is realistic. Above that, review — not new words — is usually the bottleneck.' },
      { q: 'Do I need a flashcard app?', a: 'No. Paper cards, a notes app or ScoreUp’s vocab practice all work — the method matters more than the tool.' },
    ],
    relatedSlugs: ['toefl-vocabulary-strategies-that-actually-work', 'make-a-daily-study-plan-you-can-keep'],
  },
  {
    slug: 'english-grammar-basics-for-test-takers',
    title: '5 Grammar Rules Every English Test Taker Should Master',
    description:
      'Verb tenses, agreement, articles, prepositions and sentence structure — the five rules that show up in every English test.',
    category: 'English Grammar',
    author: { name: 'Khalid Benali' },
    publishedAt: '2026-05-27',
    readingTimeMin: 5,
    excerpt:
      'No English test has a “grammar section”, yet grammar shapes every score. These five rules carry the most weight across TOEFL, TOEIC and IELTS.',
    blocks: [
      { kind: 'p', text: 'Every major English test evaluates grammar indirectly: through comprehension, editing and written/spoken accuracy. Fixing these five rules moves every score.' },
      { kind: 'h2', text: '1. Verb tenses carry the meaning' },
      { kind: 'example', label: 'Tense changes fact', text: '“The company has closed the branch” (result matters now) vs “The company closed the branch” (event in the past). Both are correct — but only one answers the test question.' },
      { kind: 'h2', text: '2. Subject–verb agreement' },
      { kind: 'p', text: 'The verb agrees with the subject, not the noun nearest it. “The list of tasks is short” — is agrees with list.' },
      { kind: 'h2', text: '3. Articles are visible control' },
      { kind: 'p', text: 'a/an for new mentions, the for known ones, zero article for general plural. Native raters notice article control immediately.' },
      { kind: 'h2', text: '4. Prepositions live in phrases' },
      { kind: 'p', text: 'Learn them as fixed units: responsible for, in charge of, apply to, depend on. TOEIC Part 5 tests exactly these.' },
      { kind: 'h2', text: '5. Sentence boundaries' },
      { kind: 'p', text: 'Fragments and run-ons are the clearest signals of low control. Read your writing aloud — your ear catches what your eye misses.' },
      { kind: 'tip', text: 'Pick your single most common error and drill it for one week. One fixed rule a week beats five half-learned rules.' },
    ],
    faq: [
      { q: 'Do I need to knowformal grammar terms?', a: 'No. You need control in use, which comes from seeing the rules in context, not naming them.' },
      { q: 'Is grammar more important than vocabulary?', a: 'For writing and speaking scores, grammar and vocabulary weigh similarly. For reading, vocabulary wins. Practise both.' },
    ],
    relatedSlugs: ['learn-english-vocabulary-fast-and-remember-it', 'ielts-writing-task-2-band-7-structure'],
  },
  {
    slug: 'make-a-daily-study-plan-you-can-keep',
    title: 'How to Build a Daily Study Plan You Can Actually Keep',
    description:
      'Daily plans fail for predictable reasons. Build one with fixed time, one focus and a measurable score — and keep it for two months.',
    category: 'Study Tips',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-02-09',
    updatedAt: '2026-09-01',
    readingTimeMin: 6,
    excerpt:
      'The best study tool is the one that survives your second week. This post covers the fixed-time rule, single-focus sessions and why a mock test is the real metric.',
    blocks: [
      { kind: 'p', text: 'Most study plans die on day 6, not because studying is hard but because the plan was built for an ideal version of you. Build one for the real you instead.' },
      { kind: 'h2', text: 'The fixed-time rule' },
      { kind: 'p', text: 'Pick the same 20–30 minutes every day — the slot you already protect (before work, after dinner). Trigger-based habits (“after my coffee”) survive better than goal-based ones (“when I have time”).' },
      { kind: 'h2', text: 'One focus per session' },
      { kind: 'p', text: 'A session that mixes reading, vocabulary and speaking teaches you to switch tasks, not to learn. Give each day one focus: Monday reading, Tuesday listening, and so on.' },
      { kind: 'h2', text: 'Measure with mocks, not mood' },
      { kind: 'ol', items: ['Take a free diagnostic today for your baseline.', 'Schedule a mock test every 2 weeks in your calendar.', 'Write one line after each mock: what moved, what did not.', 'Change the plan when the number stops moving — do not just add hours.'] },
      { kind: 'example', label: 'A real-person Monday plan', text: '07:10 after coffee: 12-minute timed reading passage + error review, then done. Total honest effort: 20 minutes.' },
      { kind: 'tip', text: 'Missing one day is data, not failure. Two missed days in a row means the plan time is wrong — change the slot, not your motivation.' },
    ],
    faq: [
      { q: 'How many hours a day should I study?', a: '20–30 focused minutes daily beats 3 weekend hours. Consistency compounds; intensity burns out.' },
      { q: 'When should I schedule my mock test?', a: 'Every two weeks, on a day with low stress. The baseline diagnostic counts as mock #1.' },
    ],
    relatedSlugs: ['how-to-improve-toefl-speaking-in-30-days', 'learn-english-vocabulary-fast-and-remember-it'],
  },
  {
    slug: 'english-level-for-university-abroad',
    title: 'What English Level Do You Need for University Abroad?',
    description:
      'Which English test, what score, and how to reach it: a realistic map from CEFR and test scores to a university seat abroad.',
    category: 'University English',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-08-06',
    readingTimeMin: 7,
    excerpt:
      'University entry is about matching a requirement: which test your university accepts, what score means success, and how long reaching it takes.',
    blocks: [
      { kind: 'h2', text: 'Match your test to your destination' },
      { kind: 'table', headers: ['Region', 'Common tests'], rows: [
        ['US / Canada', 'TOEFL, IELTS Academic, Duolingo English Test'],
        ['UK / Australia', 'IELTS Academic, TOEFL'],
        ['France / EU', 'IELTS, TOEFL, TOEIC (programs), Cambridge'],
        ['Global online', 'Duolingo English Test (fast, adaptive)'],
      ] },
      { kind: 'h2', text: 'Typical requirements in test terms' },
      { kind: 'ul', items: ['TOEFL: 80–100 of 120 at most universities.', 'IELTS Academic: 6.0–7.0 overall, often with section minimums.', 'Duolingo English Test: 100–120 at typical programs.', 'ScoreUp estimated band: roughly 5.5–6.5 for undergraduate entry.'] },
      { kind: 'h2', text: 'How long does it take to get there?' },
      { kind: 'p', text: 'One full band of real progress takes about 10–12 weeks of daily practice. Plan backwards from your application deadline and book your exam at least 6 weeks before the deadline.' },
      { kind: 'h2', text: 'What to do in week 1' },
      { kind: 'ol', items: ['Confirm which test your first-choice university accepts.', 'Take the free ScoreUp diagnostic to estimate your current level.', 'Set a target in that test’s real scale.', 'Build the daily 30-minute plan and book mock tests at 2-week intervals.'] },
      { kind: 'tip', text: 'Applicants with conditional offers often need only a half-band improvement — a realistic target that a 6–8 week plan can reach.' },
    ],
    faq: [
      { q: 'Do I need the same score for every program?', a: 'No. Engineering and science programs often require less English than law, journalism or teaching. Check each program page.' },
      { q: 'Can I submit a ScoreUp estimated score?', a: 'No — universities require the official test. ScoreUp helps you estimate and train for it.' },
    ],
    relatedSlugs: ['make-a-daily-study-plan-you-can-keep', 'ielts-writing-task-2-band-7-structure'],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const post = getBlogPost(slug);
  if (!post) return blogPosts.slice(0, count);
  const related = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));
  const fallback = blogPosts.filter((p) => p.slug !== slug && !related.includes(p));
  return [...related, ...fallback].slice(0, count);
}