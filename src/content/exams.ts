/**
 * content/exams.ts — Pages SEO des sections d'examen (TOEFL, TOEIC, IELTS).
 *
 * Contenu original et pédagogique, écrit pour des humains. Chaque page a un
 * H1, une intro, des sections complètes, des exemples, FAQ, liens internes.
 * Topics (sous-pages /toefl/vocabulary/academic, ...) : contenu réel unique.
 */
import type { SeoPageData } from '@/content/types';

const toeflCta = {
  title: 'Start with a free TOEFL diagnostic',
  text: 'Answer ~10 original questions and get an estimated score in 10 minutes.',
  href: '/diagnostic',
  label: 'Free TOEFL diagnostic',
};

/* ------------------------------------------------------------------ */
/* TOEFL sections                                                      */
/* ------------------------------------------------------------------ */

export const toeflSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'TOEFL Preparation',
    title: 'TOEFL Preparation — How to Prepare in 2026 | ScoreUp',
    description:
      'A practical TOEFL preparation guide: understand the test format, build a study plan, and practice with original free questions.',
    intro:
      'TOEFL Preparation is the path from “I want to take the TOEFL” to “I am ready on test day”. This guide explains how the test works and gives you a concrete, week-by-week approach.',
    blocks: [
      { kind: 'h2', text: 'What is the TOEFL?' },
      {
        kind: 'p',
        text: 'The TOEFL iBT measures your ability to use and understand English at university level. It is accepted by more than 11,000 institutions worldwide and covers four skills: Reading, Listening, Speaking and Writing.',
      },
      { kind: 'h2', text: 'How the test is organized' },
      {
        kind: 'table',
        headers: ['Section', 'Content', 'Approximate time'],
        rows: [
          ['Reading', '3–4 academic passages, 10 questions each', '54–72 min'],
          ['Listening', 'Lectures and conversations', '41–57 min'],
          ['Speaking', '4 tasks, independent + integrated', '17 min'],
          ['Writing', '1 integrated task + 1 independent essay', '50 min'],
        ],
      },
      { kind: 'h2', text: 'How long does TOEFL preparation take?' },
      {
        kind: 'p',
        text: 'Most learners need 6–12 weeks with consistent daily practice. Our estimate: 30 minutes a day of focused work for 8 weeks typically moves an estimated score by 0.5–1.0 band. Consistency beats cramming.',
      },
      { kind: 'tip', text: 'Set your exam date first, then count backwards with 20–30 minutes of daily practice as the floor.' },
      { kind: 'h2', text: 'Where to start' },
      {
        kind: 'ol',
        items: [
          'Take a free diagnostic to estimate your current score.',
          'Identify your weakest skill (most people: Speaking).',
          'Practise daily with topic- and skill-specific exercises.',
          'Do a timed mock test every 2 weeks to measure progress.',
        ],
      },
      {
        kind: 'example',
        label: 'Example',
        text: 'If your estimated listening score is 4.0 and your target is 5.5, one weekly lesson should beListening practice with note-taking, plus 2 short talks a day.',
      },
    ],
    faq: [
      { q: 'Is the TOEFL the same as the IELTS?', a: 'No. TOEFL and IELTS test similar skills but with a different format. TOEFL is fully computer-based and mostly multiple choice; IELTS includes a face-to-face or computer speaking test and a mix of question types.' },
      { q: 'How many times can I take the TOEFL?', a: 'As many as you need; there is no limit, but you must register for each attempt. Many universities accept your best score.' },
      { q: 'Do I need a TOEFL teacher?', a: 'No. Structured self-study with the right resources and regular mock tests is enough for most learners.' },
      { q: 'How long does a free diagnostic take?', a: 'About 10 minutes on ScoreUp, and you get an estimated score immediately.' },
    ],
    internalLinks: [
      { label: 'TOEFL Reading', href: '/toefl/reading' },
      { label: 'TOEFL Listening', href: '/toefl/listening' },
      { label: 'TOEFL Speaking', href: '/toefl/speaking' },
      { label: 'TOEFL Writing', href: '/toefl/writing' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
      { label: 'TOEFL study plan', href: '/toefl/study-plan' },
      { label: 'TOEFL score explained', href: '/toefl/score' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
    ],
    tools: [{ label: 'TOEFL study plan generator', href: '/tools/toefl-study-plan-generator' }],
    cta: toeflCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'TOEFL Practice Test',
    title: 'TOEFL Practice Test — Free Estimated Score | ScoreUp',
    description:
      'Take a free TOEFL practice test with original questions, a timer and an estimated score. Practice Reading, Listening, Speaking and Writing.',
    intro:
      'A practice test is the single best way to know where you stand. This TOEFL practice page gives you free exercises for every section, with an estimated score at the end.',
    blocks: [
      { kind: 'h2', text: 'Why take a practice test early' },
      {
        kind: 'ul',
        items: [
          'It reveals your current estimated score before you invest weeks of study.',
          'It exposes your weakest skill, so your plan targets it first.',
          'It trains exam pacing and reduces test-day stress.',
        ],
      },
      { kind: 'h2', text: 'What to expect from a TOEFL practice test' },
      {
        kind: 'p',
        text: 'A realistic practice test follows the real section order and timing. The questions below are original ScoreUp content — they train the same skills as official items without copying them.',
      },
      { kind: 'tip', text: 'Do your first practice test without preparation. The point is to get a baseline, not a good score.' },
      { kind: 'h2', text: 'How to use practice tests' },
      {
        kind: 'ol',
        items: [
          'Take the diagnostic now (free, ~10 minutes).',
          'Repeat a timed mock test every 2 weeks.',
          'Review every mistake — write down why the correct answer is correct.',
          'Track your estimated score over time; aim for steady growth, not perfection.',
        ],
      },
      {
        kind: 'example',
        label: 'Practice question — Reading (main idea)',
        text: 'A university article on urban trees mentions benefits for air quality, shade and mental health. Question: what is the article mainly about? Correct: the benefits of trees in cities.',
      },
    ],
    faq: [
      { q: 'Is a practice test the same as the real TOEFL?', a: 'No. ScoreUp practice tests use original questions and give an estimated score for guidance only. Only official ETS tests are actual TOEFL tests.' },
      { q: 'How many practice tests should I take?', a: 'One every two weeks is a good rhythm. Between tests, practise the skills daily.' },
      { q: 'Is the ScoreUp practice test free?', a: 'Yes. The diagnostic and limited daily practice are completely free.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL Reading practice', href: '/toefl/reading' },
      { label: 'TOEFL Listening practice', href: '/toefl/listening' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
    ],
    tools: [{ label: 'English level test', href: '/tools/english-level-test' }],
    cta: toeflCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'TOEFL Reading Practice',
    title: 'TOEFL Reading Practice — Free Questions & Exercises | ScoreUp',
    description:
      'Free TOEFL Reading practice: question types, sample passages, tips and exercises. Improve comprehension, inference and vocabulary in context.',
    intro:
      'TOEFL Reading tests your ability to understand university-level passages. This page explains the question types, common traps, and gives you free practice.',
    blocks: [
      { kind: 'h2', text: 'What TOEFL Reading measures' },
      { kind: 'p', text: 'You read 3–4 academic passages and answer about 10 questions each. Passages come from textbooks: science, history, art, biology and more.' },
      { kind: 'h2', text: 'Common TOEFL Reading question types' },
      {
        kind: 'table',
        headers: ['Type', 'What you must do'],
        rows: [
          ['Main idea', 'Identify the overall point of the passage'],
          ['Detail', 'Find information stated explicitly'],
          ['Inference', 'Draw a conclusion that is implied, not stated'],
          ['Vocabulary in context', 'Choose the meaning of a word in the passage'],
          ['Purpose', 'Explain why the author includes a detail'],
          ['Sentence insertion', 'Place a sentence where it fits best'],
        ],
      },
      { kind: 'h2', text: 'How to practice TOEFL Reading' },
      {
        kind: 'ol',
        items: [
          'Read the first sentence of each paragraph to map the structure.',
          'Answer the main-idea question last — after seeing the details.',
          'For inference questions, only choose answers directly supported by the text.',
          'Time yourself: about 20 minutes per passage with 10 questions.',
        ],
      },
      {
        kind: 'example',
        label: 'Example — vocabulary in context',
        text: '“The glaciers receded, exposing broad valleys.” Receded most nearly means: (a) advanced (b) retreated (c) flooded (d) formed. Correct: (b) retreated.',
      },
      { kind: 'tip', text: 'Read academic English daily — science section of a newspaper or a Wikipedia featured article. It builds the exact vocabulary the test uses.' },
    ],
    faq: [
      { q: 'How many passages are in TOEFL Reading?', a: 'Usually 3 passages. If the test uses an experimental section, you may see a 4th that does not count.' },
      { q: 'Can I guess on TOEFL Reading?', a: 'Yes — there is no penalty for wrong answers, so never leave a question blank.' },
      { q: 'How do I improve TOEFL reading speed?', a: 'Practise skimming (first sentence per paragraph) and set a timer on every exercise. Speed follows habitual practice.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL Reading: main idea', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading: inference', href: '/toefl/reading/inference' },
      { label: 'TOEFL Reading: vocabulary in context', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'Free TOEFL Reading exercises', href: '/practice/toefl-reading' }],
    cta: toeflCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'TOEFL Listening Practice',
    title: 'TOEFL Listening Practice — Free Exercises | ScoreUp',
    description:
      'Practise TOEFL Listening with original exercises: lectures and conversations, note-taking tips and common traps for academic listening.',
    intro:
      'TOEFL Listening uses lectures and campus conversations to test real academic listening. Improve with the right note-taking system and daily practice.',
    blocks: [
      { kind: 'h2', text: 'What TOEFL Listening sounds like' },
      { kind: 'p', text: 'You hear a 4–6 minute lecture or a 2–3 minute conversation, then answer questions about main point, details, purpose and speaker attitude. You cannot re-listen, so notes matter.' },
      { kind: 'h2', text: 'An effective note-taking method' },
      {
        kind: 'ol',
        items: [
          'Write keywords only — never full sentences.',
          'Note the structure: introduction, example, contrast, conclusion.',
          'Mark transitions (“however”, “for example”, “in conclusion”).',
          'Write names and numbers exactly as you hear them.',
        ],
      },
      {
        kind: 'example',
        label: 'Example — speaker purpose',
        text: 'A professor says: “Let me give you a case where this theory failed.” The purpose is to illustrate a limitation of the theory, not to introduce a new theory.',
      },
      { kind: 'tip', text: 'Practise with 3-minute news clips: listen once without notes, once with notes, then summarise aloud in 30 seconds.' },
    ],
    faq: [
      { q: 'Can I take notes during TOEFL Listening?', a: 'Yes, notes are allowed and encouraged. You may write on scratch paper.' },
      { q: 'Why do I miss TOEFL listening questions?', a: 'Most often because of unfocused attention or notes that only capture the lecture’s topic, not its structure and examples.' },
      { q: 'How long is the TOEFL listening section?', a: '41–57 minutes depending on whether there is an experimental section.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEIC listening practice', href: '/toeic/listening' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'speaking',
    intent: 'problem-solving',
    h1: 'How to Improve TOEFL Speaking',
    title: 'How to Improve TOEFL Speaking — Tips & Practice | ScoreUp',
    description:
      'Improve TOEFL Speaking with preparation strategies, the 15-second planning trick, fluency drills and free practice tasks.',
    intro:
      'TOEFL Speaking is the section most learners fear — and the one that improves fastest with the right system. This page gives you that system.',
    blocks: [
      { kind: 'h2', text: 'The TOEFL Speaking format' },
      {
        kind: 'table',
        headers: ['Task', 'Type', 'Preparation / response'],
        rows: [
          ['Task 1', 'Independent — personal opinion', '15 s / 45 s'],
          ['Task 2', 'Integrated — campus announcement', '30 s / 60 s'],
          ['Task 3', 'Integrated — academic lecture', '30 s / 60 s'],
          ['Task 4', 'Integrated — lecture with example', '20 s / 60 s'],
        ],
      },
      { kind: 'h2', text: 'The 15-second planning trick' },
      {
        kind: 'p',
        text: 'Your preparation time is short, so do not write sentences. Write one keyword per idea. For Task 1, structure is claim → reason → example. For integrated tasks, note the announcement or concept + one example.',
      },
      { kind: 'h2', text: 'Improve speaking fluency fast' },
      {
        kind: 'ul',
        items: [
          'Record yourself answering for 45 seconds, then listen once.',
          'Repeat the same prompt aloud until your second attempt is noticeably clearer.',
          'Use filler-free sentences: practise “Pause, then continue” instead of “um”.',
          'Shadow native audio: repeat what you hear with a 1-second delay.',
        ],
      },
      {
        kind: 'example',
        label: 'Sample prompt',
        text: '“Do you prefer studying alone or in groups? Why?” Response skeleton: “I prefer studying alone because it lets me control my pace. For example, when I review vocabulary, silences helps me recall words faster than group discussion would.”',
      },
      { kind: 'tip', text: 'Accuracy matters less than clarity. A clear, slower answer scores better than a fast, unclear one.' },
    ],
    faq: [
      { q: 'How many TOEFL speaking tasks are there?', a: 'Four tasks: one independent and three integrated.' },
      { q: 'Is TOEFL speaking recorded or with an examiner?', a: 'It is recorded and scored by a mix of automated systems and human raters.' },
      { q: 'Do accents matter on TOEFL?', a: 'Only if they interfere with understanding. A clear non-native accent is fine.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL writing', href: '/toefl/writing' },
      { label: 'TOEFL listening', href: '/toefl/listening' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'writing',
    intent: 'problem-solving',
    h1: 'TOEFL Writing Practice',
    title: 'TOEFL Writing Practice — Tasks, Templates & Tips | ScoreUp',
    description:
      'Practise TOEFL Writing: the integrated essay and the independent essay, time management, structure and free practice tasks.',
    intro:
      'TOEFL Writing has two tasks. Both reward clear structure over fancy vocabulary. Here is exactly how to organise them and practise.',
    blocks: [
      { kind: 'h2', text: 'The two TOEFL writing tasks' },
      {
        kind: 'table',
        headers: ['Task', 'What you do', 'Time'],
        rows: [
          ['Integrated', 'Read a short passage, listen to a lecture, then summarise how they relate', '20 min'],
          ['Independent', 'Write an essay defending an opinion on a familiar topic', '30 min'],
        ],
      },
      { kind: 'h2', text: 'A structure that always works' },
      {
        kind: 'ul',
        items: [
          'Integrated: intro (what the lecture argues) → 3 points where the lecture contrasts the reading.',
          'Independent: intro with clear position → 2–3 body paragraphs, each with one reason + example → short conclusion.',
          'Use transitions: “In contrast”, “For example”, “As a result”.',
        ],
      },
      { kind: 'h2', text: 'Typing speed matters more than you think' },
      { kind: 'p', text: 'You type on a keyboard. Leave 3–4 minutes at the end to proofread: wrong verb forms and missing plural –s are the most common errors raters notice.' },
      {
        kind: 'example',
        label: 'Sample independent prompt',
        text: '“Some universities require a public speaking course. Do you agree or disagree?” Strong opener: “I agree, because public speaking builds a skill that every profession uses, and practising in class reduces the fear that blocks most students.”',
      },
      { kind: 'tip', text: 'Write 5 typed essays a week and keep the same template each time. Your brain will automate the structure during the real test.' },
    ],
    faq: [
      { q: 'How is TOEFL Writing scored?', a: 'Each task is scored 0–5 and the two scores are combined into a Writing section score. A computer and a human rater both evaluate.' },
      { q: 'Can I write more than 300 words on the independent task?', a: 'Yes, but quality beats length. 300–450 well-structured words is a comfortable range.' },
      { q: 'Do grammar mistakes ruin my score?', a: 'Not alone. Raters look at development and clarity first; consistent, minor errors cost little if the essay is clear.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL speaking', href: '/toefl/speaking' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'TOEFL Vocabulary',
    title: 'TOEFL Vocabulary — Lists, Tips & Free Practice | ScoreUp',
    description:
      'Build TOEFL vocabulary the right way: academic word families, learning methods, and free flashcards and quizzes.',
    intro:
      'TOEFL vocabulary is academic English. You do not need 10,000 words — you need the high-frequency academic words and the habit of learning them in context.',
    blocks: [
      { kind: 'h2', text: 'Which words matter for TOEFL' },
      {
        kind: 'p',
        text: 'The Academic Word List covers the vocabulary that appears across university subjects: analyze, significant, hypothesis, methodology, coherent. These words appear constantly in TOEFL reading and listening.',
      },
      { kind: 'h2', text: 'How to learn TOEFL vocabulary that sticks' },
      {
        kind: 'ol',
        items: [
          'Learn words in groups by theme: academic, science, business, university.',
          'Learn the word family: analyze, analysis, analytical — not a single word alone.',
          'Write one original sentence per word.' ,
          'Review with flashcards on a spaced schedule (today, tomorrow, in 3 days, in a week).',
        ],
      },
      { kind: 'h2', text: 'Free practice' },
      {
        kind: 'p',
        text: 'ScoreUp offers free TOEFL vocabulary flashcards and quizzes, plus practice pages for academic, science, business and university vocabulary.',
      },
      {
        kind: 'example',
        label: 'Example — word in context',
        text: '“The study’s findings are significant because they change how we treat the disease.” Significant here means important and consequential — not merely measurable.',
      },
      { kind: 'tip', text: 'Read one academic article a week and underline every word you could not use in your own writing. You will meet the exact vocabulary the test uses.' },
    ],
    faq: [
      { q: 'How many words do I need for TOEFL?', a: 'A strong foundation is roughly 3,500–5,000 active words, focused on the Academic Word List and academic reading vocabulary.' },
      { q: 'Are TOEFL words the same as everyday English?', a: 'Partly. Everyday words appear, but academic word families and multi-word verbs dominate the reading and listening sections.' },
      { q: 'Does ScoreUp have official TOEFL vocabulary?', a: 'No — our word lists and exercises are original content designed to train the same academic vocabulary.' },
    ],
    internalLinks: [
      { label: 'TOEFL Reading', href: '/toefl/reading' },
      { label: 'TOEFL vocabulary: academic', href: '/toefl/vocabulary/academic' },
      { label: 'TOEFL vocabulary: science', href: '/toefl/vocabulary/science' },
      { label: 'TOEFL vocabulary: business', href: '/toefl/vocabulary/business' },
      { label: 'TOEFL vocabulary: university', href: '/toefl/vocabulary/university' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'grammar',
    intent: 'informational',
    h1: 'TOEFL Grammar',
    title: 'TOEFL Grammar — The Rules That Really Matter | ScoreUp',
    description:
      'The TOEFL does not have a grammar section, but grammar shapes your Reading, Writing and Speaking scores. Focus on these 5 rules.',
    intro:
      'There is no separate TOEFL grammar section. Grammar still matters enormously — it supports comprehension in Reading, correctness in Writing, and clarity in Speaking.',
    blocks: [
      { kind: 'h2', text: 'The 5 grammar areas that matter most' },
      {
        kind: 'table',
        headers: ['Area', 'Why it matters'],
        rows: [
          ['Verb tenses', 'Errors in past vs. present change the factual meaning of your writing'],
          ['Subject–verb agreement', 'A visible, easy-to-fix signal of control'],
          ['Articles (a/an/the)', 'Frequent errors undermine an otherwise strong essay'],
          ['Prepositions', 'Fixed phrases and academic collocations'],
          ['Sentence structure', 'Avoiding fragments and run-ons keeps your ideas clear'],
        ],
      },
      { kind: 'h2', text: 'How to study grammar for TOEFL' },
      {
        kind: 'ol',
        items: [
          'Identify your recurring errors from written practice (past tense is the leader for most).',
          'Practise one rule a day in original sentences about your life.',
          'Proofread every essay aloud — errors are easier to hear than to see.',
        ],
      },
      {
        kind: 'example',
        label: 'Example — agreement',
        text: 'Wrong: “The results of the experiment was surprising.” Correct: “The results of the experiment were surprising.” The verb agrees with “results”, not “experiment”.',
      },
      { kind: 'tip', text: 'Fix your top 3 recurring grammar errors before learning any new grammar. That is the fastest visible score gain.' },
    ],
    faq: [
      { q: 'Is there a grammar section on the TOEFL?', a: 'No. Grammar is tested indirectly through Reading comprehension, Writing and Speaking.' },
      { q: 'What grammar do I need for the TOEFL essay?', a: 'Solid control of tenses, agreement, articles and clear sentence boundaries. Advanced structures like inversion are optional.' },
      { q: 'Do grammar errors affect my speaking score?', a: 'Only if they interfere with understanding. Speak clearly and simply rather than risk a complex structure you cannot control.' },
    ],
    internalLinks: [
      { label: 'TOEFL writing', href: '/toefl/writing' },
      { label: 'TOEFL speaking', href: '/toefl/speaking' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'TOEFL Score Explained',
    title: 'TOEFL Score Range & Meaning — 0 to 9 Explained | ScoreUp',
    description:
      'Understand TOEFL scores: the 0–9 scale used by ScoreUp estimates, how scoring works, and what your target score should be.',
    intro:
      'Understanding your TOEFL score is the first step to a realistic study plan. This page explains the scale and what each level means.',
    blocks: [
      { kind: 'h2', text: 'How TOEFL is scored' },
      {
        kind: 'p',
        text: 'The real TOEFL gives each section 0–30 and a total of 0–120, plus a 0–6 Speaking “escore” range. ScoreUp uses a 0–9 estimated band to make your level readable at a glance.',
      },
      { kind: 'h2', text: 'What your estimated band means' },
      {
        kind: 'table',
        headers: ['Band', 'Level'],
        rows: [
          ['3.0–3.9', 'Elementary — understands simple text and speech'],
          ['4.0–4.9', 'Lower intermediate — basic academic comprehension'],
          ['5.0–5.9', 'Intermediate — solid foundation for pre-sessional study'],
          ['6.0–6.5+', 'Upper intermediate+ — comfortable in an academic setting'],
        ],
      },
      { kind: 'h2', text: 'What target should you choose?' },
      { kind: 'p', text: 'Typical university requirements map to roughly a 5.5–6.5 estimated band. Check the specific requirement of your target institution, then set your plan accordingly.' },
      { kind: 'tip', text: 'Estimated scores are for planning only — only the official test can certify your TOEFL score.' },
    ],
    faq: [
      { q: 'Is the ScoreUp band an official TOEFL score?', a: 'No. ScoreUp returns estimated practice bands for guidance. We are not affiliated with ETS.' },
      { q: 'What is a good TOEFL score?', a: 'It depends on your goal. For many universities, a total around 80–100 out of 120, roughly a 5.5–6.5 band here, is typical.' },
      { q: 'Do TOEFL scores expire?', a: 'Yes, official TOEFL scores are valid for two years from the test date.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL study plan', href: '/toefl/study-plan' },
      { label: 'TOEIC score', href: '/toeic/score' },
      { label: 'IELTS score', href: '/ielts/score' },
    ],
    tools: [{ label: 'TOEFL score calculator', href: '/tools/toefl-score-calculator' }],
    cta: toeflCta,
  },
  {
    slug: 'study-plan',
    intent: 'planning',
    h1: 'TOEFL Study Plan',
    title: 'TOEFL Study Plan — 30 & 60 Day Templates | ScoreUp',
    description:
      'Build a realistic TOEFL study plan for 30 or 60 days: weekly focus, daily schedule and what to measure each week.',
    intro:
      'A TOEFL study plan turns vague goals into a daily habit. Use the template below to build a plan for where you are today.',
    blocks: [
      { kind: 'h2', text: 'The weekly rhythm' },
      {
        kind: 'table',
        headers: ['Day', 'Focus (30 min)'],
        rows: [
          ['Mon', 'Reading practice (timed passage)'],
          ['Tue', 'Listening practice (lecture + notes)'],
          ['Wed', 'Vocabulary (new words + review)'],
          ['Thu', 'Speaking (2 tasks, recorded)'],
          ['Fri', 'Writing (1 short essay)'],
          ['Sat', 'Mixed skills review'],
          ['Sun', 'Rest / light vocabulary review'],
        ],
      },
      { kind: 'h2', text: 'The 30-day plan' },
      {
        kind: 'ol',
        items: [
          'Week 1: diagnosis + establish the daily habit at 20 min.',
          'Week 2: focus on your weakest skill at 30 min/day.',
          'Week 3: add one timed mock test + weak-topic drills.',
          'Week 4: two timed mocks, review all errors, rest before test day.',
        ],
      },
      { kind: 'h2', text: 'The 60-day plan' },
      { kind: 'p', text: 'Follow the same rhythm but spend weeks 3–6 building depth: two mock tests in week 4, error-drill week 5, final mock week 7, and a light taper in week 8.' },
      {
        kind: 'example',
        label: 'Example goal',
        text: 'Target 5.5 with a current estimated 4.5: plan for 8 weeks, +1 band of Speaking and Reading focus, mock tests in weeks 4 and 8.',
      },
      { kind: 'tip', text: 'Measure a mock test at the START of a plan and every 2 weeks. If your estimated score is not moving, your plan needs changing — not your motivation.' },
    ],
    faq: [
      { q: 'How many hours a day should I study for TOEFL?', a: '20–30 focused minutes daily is the sweet spot. More on some days is fine, but consistency matters most.' },
      { q: 'Can I prepare for TOEFL in 2 weeks?', a: 'You can improve comfort and strategy, but a meaningful band increase needs 4–8 weeks. Start before you feel ready.' },
      { q: 'Should I take lessons and self-study?', a: 'Self-study with structured resources and mock tests is enough for most learners. A tutor is added insurance, not a requirement.' },
    ],
    internalLinks: [
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
      { label: 'TOEFL score', href: '/toefl/score' },
      { label: 'TOEIC study plan', href: '/toeic/study-plan' },
    ],
    tools: [{ label: 'TOEFL study plan generator', href: '/tools/toefl-study-plan-generator' }],
    cta: toeflCta,
  },
];

/* ------------------------------------------------------------------ */
/* TOEFL topics (sous-pages à contenu unique)                         */
/* ------------------------------------------------------------------ */

export const toeflTopics: SeoPageData[] = [
  {
    slug: 'reading/main-idea',
    intent: 'practice',
    h1: 'TOEFL Reading: Main Idea Questions',
    title: 'TOEFL Reading Main Idea — Strategy & Practice | ScoreUp',
    description:
      'Master TOEFL Reading main-idea questions: spot the overall point, avoid partial-answer traps and practise with original examples.',
    intro:
      'Main-idea questions ask for the overall point of a passage — not a detail, not an example. They look easy and trick most learners with tempting “half-right” answers.',
    blocks: [
      { kind: 'h2', text: 'What makes a correct main-idea answer' },
      { kind: 'p', text: 'The correct answer covers the whole passage in one sweep. Every detail in the passage should feel like support for it. Wrong answers tend to mention a section or an example in isolation.' },
      { kind: 'h2', text: 'The reading order that works' },
      {
        kind: 'ol',
        items: [
          'Read the first paragraph fully — it states the topic.',
          'Read the first sentence of every other paragraph.',
          'Answer main-idea questions last, after the details reframe the passage.',
        ],
      },
      {
        kind: 'example',
        label: 'Example',
        text: 'A passage describes how traffic noise affects bird communication, sleep and reproduction. The main idea is the broad overview: traffic noise disrupts birds in several ways. “Traffic noise changes bird songs” is correct only if the passage focuses on songs alone.',
      },
      { kind: 'tip', text: 'Beware answers that are true but narrow. The main idea always generalises over the whole passage.' },
    ],
    faq: [
      { q: 'Are main-idea questions at the end of the passage?', a: 'Not always. You may see one anywhere; read the question prompts carefully before the passage.' },
      { q: 'Should I read the passage before answering?', a: 'Yes — skim the structure first, then read more fully while answering each question.' },
    ],
    internalLinks: [
      { label: 'TOEFL Reading', href: '/toefl/reading' },
      { label: 'TOEFL Reading: inference', href: '/toefl/reading/inference' },
      { label: 'TOEFL Reading: vocabulary in context', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'reading/inference',
    intent: 'problem-solving',
    h1: 'TOEFL Reading: Inference Questions',
    title: 'TOEFL Reading Inference — Strategy & Practice | ScoreUp',
    description:
      'Solve TOEFL Reading inference questions with a simple rule: only answers fully supported by the text. Free practice examples inside.',
    intro:
      'Inference questions ask what is implied but not stated. The skill is distinguishing “the author clearly shows this” from “this could be true”.',
    blocks: [
      { kind: 'h2', text: 'The one rule that beats inference questions' },
      { kind: 'p', text: 'If you cannot point to a sentence that supports the answer, the answer is wrong. TOEFL inference answers are almost direct conclusions from the text — never free speculation.' },
      { kind: 'h2', text: 'Common traps' },
      {
        kind: 'ul',
        items: [
          'An answer that is a logical everyday fact, but not implied by this passage.',
          'An answer that overstates — using “always” or “never” where the passage says “often”.',
          'An answer that restates a detail instead of concluding from it.',
        ],
      },
      {
        kind: 'example',
        label: 'Example',
        text: 'Passage: “Many urban trees are planted in narrow pits, where their roots quickly become space-constrained.” Inference: trees planted in narrow pits likely require more maintenance or fail early. Not: urban trees are removed frequently everywhere.',
      },
      { kind: 'tip', text: 'For each inference option, ask: “Which sentence in the passage makes this true?” If none, eliminate it.' },
    ],
    faq: [
      { q: 'How many inference questions are there?', a: 'Usually a handful per test, roughly 10–20% of reading questions.' },
      { q: 'Is inference the hardest TOEFL reading type?', a: 'It is the most missed, mostly because learners over-think. Sticking to strict textual support fixes most mistakes.' },
    ],
    internalLinks: [
      { label: 'TOEFL Reading', href: '/toefl/reading' },
      { label: 'TOEFL Reading: main idea', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading: vocabulary in context', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'reading/vocabulary-in-context',
    intent: 'vocabulary',
    h1: 'TOEFL Reading: Vocabulary in Context',
    title: 'TOEFL Vocabulary in Context — Strategy & Practice | ScoreUp',
    description:
      'Answer TOEFL Reading vocabulary-in-context questions reliably: read before and after the word, avoid the obvious synonym trap.',
    intro:
      'Vocabulary-in-context questions ask you to choose the meaning of a word as it is used in the passage. The official “dictionary” meaning is often a distractor.',
    blocks: [
      { kind: 'h2', text: 'How these questions work' },
      { kind: 'p', text: 'The prompt highlights one word. The options are synonyms. Your job is the meaning that fits the surrounding sentence — not the most common meaning.' },
      { kind: 'h2', text: 'The reliable method' },
      {
        kind: 'ol',
        items: [
          'Read the sentence before and after the highlighted word.',
          'Replace the word with each option and keep the one that preserves the meaning.',
          'Confirm your choice fits the sentence grammatically as well.',
        ],
      },
      {
        kind: 'example',
        label: 'Example',
        text: '“The professor’s approach was unconventional: most colleagues used lectures, while she ran student-led labs.” Unconventional here means unusual or non-traditional — not inefficient.',
      },
      { kind: 'tip', text: 'When you learn a TOEFL word, learn the word family and at least one common context. That is exactly how this question tests it.' },
    ],
    faq: [
      { q: 'Do I need to know every TOEFL word?', a: 'No. These questions work even with partial knowledge because you can use context and elimination.' },
      { q: 'Can the answer be a rare meaning of the word?', a: 'Yes, and that is the classic trap. Always decide from context first.' },
    ],
    internalLinks: [
      { label: 'TOEFL Reading', href: '/toefl/reading' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL Reading: main idea', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading: inference', href: '/toefl/reading/inference' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/academic',
    intent: 'vocabulary',
    h1: 'Academic English Vocabulary',
    title: 'Academic English Vocabulary — 50 Core Words | ScoreUp',
    description:
      'Learn high-frequency academic vocabulary with definitions, examples and a free quiz. The words that appear across every TOEFL passage.',
    intro:
      'Academic vocabulary crosses every subject: the same 50 words appear in biology, history and economics passages. Master them and every TOEFL reading gets easier.',
    blocks: [
      { kind: 'h2', text: 'The core academic words' },
      {
        kind: 'table',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['analyze', 'examine in detail', 'Researchers analyze the data for patterns.'],
          ['significant', 'important', 'The difference was statistically significant.'],
          ['hypothesis', 'testable explanation', 'They tested the hypothesis under lab conditions.'],
          ['methodology', 'system of methods', 'The methodology asked 400 students.'],
          ['coherent', 'logically connected', 'The essay presented a coherent argument.'],
        ],
      },
      { kind: 'h2', text: 'How to study academic vocabulary' },
      {
        kind: 'ul',
        items: [
          'Learn word families: analysis, analytical, analyze.',
          'Write one original sentence per word in context.',
          'Review on a schedule: today, tomorrow, +3 days, +1 week.',
        ],
      },
      { kind: 'tip', text: 'Read one university-oriented article a week and collect every academic word you meet. That list is your personal TOEFL vocabulary.' },
    ],
    faq: [
      { q: 'What is the Academic Word List?', a: 'The Academic Word List (AWL) is a list of words that appear frequently across academic subjects. It is the backbone of TOEFL reading vocabulary.' },
      { q: 'Are academic words different from everyday words?', a: 'Yes — they carry formal, cross-subject meaning: assess, evident, concept, framework.' },
    ],
    internalLinks: [
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL vocabulary: science', href: '/toefl/vocabulary/science' },
      { label: 'TOEFL vocabulary: business', href: '/toefl/vocabulary/business' },
      { label: 'TOEFL vocabulary: university', href: '/toefl/vocabulary/university' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/science',
    intent: 'vocabulary',
    h1: 'Science Vocabulary for English Tests',
    title: 'Science Vocabulary for TOEFL — Terms & Examples | ScoreUp',
    description:
      'Learn the science vocabulary that appears in TOEFL reading and listening: experiments, evidence, cause and effect.',
    intro:
      'Science passages test vocabulary about experiments, evidence and causality. These are the exact words you will meet.',
    blocks: [
      { kind: 'h2', text: 'Core science vocabulary' },
      {
        kind: 'table',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['evidence', 'information that supports a claim', 'The fossils provide evidence of migration.'],
          ['phenomenon', 'observable event', 'This phenomenon occurs at high altitude.'],
          ['quantity', 'an amount', 'The quantity increased with temperature.'],
          ['evolve', 'develop gradually', 'Species evolved to survive drought.'],
          ['mechanism', 'process behind a result', 'Scientists revealed the mechanism of the reaction.'],
        ],
      },
      { kind: 'h2', text: 'From cause to effect' },
      {
        kind: 'p',
        text: 'Science texts are built on cause–effect chains. Practise rewriting links: “X causes Y”, “Y results from X”, “Y is attributed to X”. Recognising these verbs instantly helps on both reading and listening.',
      },
      { kind: 'tip', text: 'Watch a 5-minute science explainer weekly and note every word the narrator uses to connect causes and effects.' },
    ],
    faq: [
      { q: 'Do I need chemistry knowledge for TOEFL science passages?', a: 'No — you need the vocabulary of science, not the subject itself. The test explains concepts; your job is understanding the wording.' },
      { q: 'Where do science passages come from?', a: 'Introductory thesis textbooks on topics like biology, geology, astronomy and physics.' },
    ],
    internalLinks: [
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL vocabulary: academic', href: '/toefl/vocabulary/academic' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/business',
    intent: 'vocabulary',
    h1: 'Business English Vocabulary',
    title: 'Business Vocabulary for TOEIC & TOEFL — List | ScoreUp',
    description:
      'Learn essential business vocabulary for TOEIC and TOEFL: meetings, negotiations, documents and workplace English.',
    intro:
      'Business vocabulary drives the TOEIC and appears in TOEFL listening. Master the workplace core and both tests become clearer.',
    blocks: [
      { kind: 'h2', text: 'Essential business vocabulary' },
      {
        kind: 'table',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['quarterly', 'every three months', 'The quarterly report exceeded expectations.'],
          ['revenue', 'income from sales', 'Revenue grew by 12% last year.'],
          ['negotiate', 'discuss to reach an agreement', 'They negotiated a lower delivery fee.'],
          ['procurement', 'business purchasing', 'Procurement handles supplier contracts.'],
          ['outlook', 'future expectations', 'The outlook for hiring is positive.'],
        ],
      },
      { kind: 'h2', text: 'Where business words appear in tests' },
      {
        kind: 'ul',
        items: [
          'TOEIC listening: office conversations, phone messages, instructions.',
          'TOEIC reading: memos, emails, schedules, advertisements.',
          'TOEFL listening: campus announcements and conversations with staff.',
        ],
      },
      { kind: 'tip', text: 'Practise with real workplace audio: one business podcast episode a week builds the exact vocabulary TOEIC uses.' },
    ],
    faq: [
      { q: 'Is business vocabulary the same as TOEFL vocabulary?', a: 'Overlapping but different. TOEIC favours workplace English; TOEFL favours academic English. Learn both sets by context.' },
      { q: 'How can I learn business vocabulary fast?', a: 'Learn collocations, not isolated words: “grow revenue”, “negotiate terms”, “submit a report”.' },
    ],
    internalLinks: [
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEFL vocabulary: academic', href: '/toefl/vocabulary/academic' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/university',
    intent: 'vocabulary',
    h1: 'English Vocabulary for University',
    title: 'English Vocabulary for University — 30 Words | ScoreUp',
    description:
      'Build the English vocabulary you need at university: lectures, essays, campus life and academic communication.',
    intro:
      'University English is more than academic words — it is the language of lectures, essays, advising meetings and campus life. Master this set and the classroom stops being intimidating.',
    blocks: [
      { kind: 'h2', text: 'Vocabulary for lectures and essays' },
      {
        kind: 'table',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['plagiarism', 'using others’ work as your own', 'Plagiarism has serious consequences.'],
          ['reference', 'source cited in an essay', 'Add a reference for every claim.'],
          ['lecture', 'teaching talk', 'The lecture covered urban economics.'],
          ['seminar', 'small discussion class', 'We debate the reading in seminar.'],
          ['extension', 'extra time for a deadline', 'Ask for an extension before the due date.'],
        ],
      },
      { kind: 'h2', text: 'Survival phrases for campus' },
      {
        kind: 'ul',
        items: [
          '“Could you clarify that point?” — in lectures and meetings.',
          '“Where is the registrar’s office?” — for documents and enrollment.',
          '“I’d like to discuss my grade.” — in professor office hours.',
        ],
      },
      { kind: 'tip', text: 'Before your first semester, write 10 sentences using these words about your own subject. You will use them weekly.' },
    ],
    faq: [
      { q: 'Is university vocabulary the same as academic vocabulary?', a: 'Academic vocabulary is the scholarly core; university vocabulary adds campus-life language (registration, advising, accommodation).' },
      { q: 'Do universities test this vocabulary?', a: 'Language tests like TOEFL and IELTS measure exactly this level of academic readiness.' },
    ],
    internalLinks: [
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
      { label: 'TOEFL vocabulary: academic', href: '/toefl/vocabulary/academic' },
      { label: 'TOEFL preparation', href: '/toefl/preparation' },
      { label: 'IELTS vocabulary', href: '/ielts/vocabulary' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
];

/* ------------------------------------------------------------------ */
/* TOEIC sections + topics                                             */
/* ------------------------------------------------------------------ */

const toeicCta = {
  title: 'Start with a free TOEIC diagnostic',
  text: 'Estimate your reading and listening level in 10 minutes with original questions.',
  href: '/diagnostic',
  label: 'Free TOEIC diagnostic',
};

export const toeicSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'TOEIC Preparation',
    title: 'TOEIC Preparation — A Practical Guide | ScoreUp',
    description:
      'Prepare for the TOEIC Listening & Reading test: understand the format, set a target score and practise daily with free exercises.',
    intro:
      'The TOEIC Listening & Reading test measures workplace English. Preparation is mostly habit: daily listening and reading with a business focus.',
    blocks: [
      { kind: 'h2', text: 'What the TOEIC looks like' },
      {
        kind: 'table',
        headers: ['Section', 'Content', 'Time'],
        rows: [
          ['Listening', 'Photos, questions-responses, conversations, talks', '45 min'],
          ['Reading', 'Incomplete sentences, text completion, reading comprehension', '75 min'],
        ],
      },
      { kind: 'h2', text: 'How long does TOEIC preparation take?' },
      { kind: 'p', text: 'With 30 focused minutes a day, most learners see a measurable improvement in 6–10 weeks. Listening progress is especially quick because workplace audio is easy to practise daily.' },
      { kind: 'tip', text: 'Your TOEIC target depends on your goal: many employers ask for 700–750+ on the 10–990 scale.' },
      { kind: 'h2', text: 'First steps' },
      {
        kind: 'ol',
        items: [
          'Take a free diagnostic to estimate your level.',
          'Choose a target based on your employer or school.',
          'Practise daily with TOEIC-style business content.',
          'Take a timed mock test every 2 weeks.',
        ],
      },
    ],
    faq: [
      { q: 'Is TOEIC harder than TOEFL?', a: 'Different, not harder. TOEIC is narrower (workplace English) and tests only listening and reading at most test centers.' },
      { q: 'Do TOEIC scores expire?', a: 'There is no standard expiry, but many employers ask for a score within the last 2 years.' },
    ],
    internalLinks: [
      { label: 'TOEIC listening', href: '/toeic/listening' },
      { label: 'TOEIC reading', href: '/toeic/reading' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
      { label: 'TOEIC study plan', href: '/toeic/study-plan' },
      { label: 'TOEIC score', href: '/toeic/score' },
    ],
    tools: [{ label: 'TOEIC study plan generator', href: '/tools/toeic-study-plan-generator' }],
    cta: toeicCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'TOEIC Practice Test',
    title: 'TOEIC Practice Test — Free Estimated Score | ScoreUp',
    description:
      'Take a free TOEIC practice test with business-style listening and reading questions and an estimated score.',
    intro:
      'A TOEIC practice test gives you a baseline before you invest in preparation. Here is what to expect and how to use it.',
    blocks: [
      { kind: 'h2', text: 'Why take a TOEIC practice test first' },
      {
        kind: 'ul',
        items: [
          'It estimates your current level in one sitting.',
          'It reveals whether listening or reading is your weaker side.',
          'It trains the pacing of a real 120-minute test.',
        ],
      },
      { kind: 'h2', text: 'Mock test rhythm' },
      { kind: 'ol', items: ['Baseline mock first.', 'Re-test every 2 weeks.', 'Review every wrong answer in writing.', 'Re-test under real timing, no pauses.'] },
      { kind: 'tip', text: 'Never take a mock test “to see how it goes” without reviewing your errors afterwards. The review is where learning happens.' },
    ],
    faq: [
      { q: 'Is a ScoreUp TOEIC mock test official?', a: 'No. It uses original questions and returns an estimated practice score for guidance.' },
      { q: 'What is a good TOEIC score?', a: 'The scale is 10–990. Many employers look for 700+, with 850+ considered strong.' },
    ],
    internalLinks: [
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC reading practice', href: '/toeic/reading' },
      { label: 'TOEIC listening practice', href: '/toeic/listening' },
      { label: 'TOEFL practice test', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'English level test', href: '/tools/english-level-test' }],
    cta: toeicCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'TOEIC Listening Practice',
    title: 'TOEIC Listening Practice — Free Exercises | ScoreUp',
    description:
      'Practise TOEIC Listening: photos, questions-response, conversations and talks with strategies for each part.',
    intro:
      'TOEIC Listening has four parts, and each needs its own strategy. This page explains them and gives you free practice.',
    blocks: [
      { kind: 'h2', text: 'The four listening parts' },
      {
        kind: 'table',
        headers: ['Part', 'Content', 'Advice'],
        rows: [
          ['1 — Photographs', '4 pictures, one description', 'Focus on the action and state, not exact words'],
          ['2 — Question-Response', '3 possible replies', 'Skip grammar traps: listen for the question type'],
          ['3 — Conversations', 'Office dialogues, 3 Qs', 'Predict topics from the first two lines'],
          ['4 — Talks', 'Voice messages/announcements', 'Note who, what, when, why'],
        ],
      },
      { kind: 'h2', text: 'How to improve TOEIC listening' },
      {
        kind: 'ol',
        items: [
          'Practise with workplace audio daily: voicemails, schedules, instructions.',
          'Write down numbers (times, prices, dates) as you hear them.',
          'For Part 2, choose replies by question type (who/where/when/how).',
          'Do not replay — the real test plays audio once.',
        ],
      },
      { kind: 'tip', text: 'Part 2 is the most trainable: every practice improves your question-type habits within two weeks.' },
    ],
    faq: [
      { q: 'Is TOEIC listening spoken by American English only?', a: 'Mostly North American accents, with some British and Australian voices. Exposure to all three helps.' },
      { q: 'How can I practise TOEIC listening for free?', a: 'Business podcasts, voicemail-style audio practice and ScoreUp’s free listening exercises.' },
    ],
    internalLinks: [
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC reading', href: '/toeic/reading' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEIC listening: photo description', href: '/toeic/listening/photo-description' },
      { label: 'TOEFL listening', href: '/toefl/listening' },
    ],
    tools: [{ label: 'Free TOEIC Listening exercises', href: '/practice/toeic-listening' }],
    cta: toeicCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'TOEIC Reading Practice',
    title: 'TOEIC Reading Practice — Free Exercises | ScoreUp',
    description:
      'Practise TOEIC Reading: incomplete sentences, text completion and business reading comprehension with free exercises.',
    intro:
      'TOEIC Reading rewards vocabulary and structure in realistic business documents. Here is how to practise each part efficiently.',
    blocks: [
      { kind: 'h2', text: 'The three reading parts' },
      {
        kind: 'table',
        headers: ['Part', 'Content', 'Advice'],
        rows: [
          ['5 — Incomplete sentences', 'Choose the word that fits', 'Learn grammar + vocabulary in pairs'],
          ['6 — Text completion', 'Fill gaps in a short document', 'Read the sentences around the gap'],
          ['7 — Reading comprehension', 'Emails, ads, reports + questions', 'Skim first, then answer'],
        ],
      },
      { kind: 'h2', text: 'How to improve TOEIC reading' },
      {
        kind: 'ul',
        items: [
          'Learn common business collocations: “submit a request”, “meet a deadline”, “handle a complaint”.',
          'In Part 5, identify what the gap tests: grammar or vocabulary?',
          'In Part 7, read the questions before the long documents.',
          'Practise timing: about 75 minutes for 100 questions feels tight until you train it.',
        ],
      },
      { kind: 'tip', text: 'Part 7 is where time pressure bites. Learn to skim headers and dates, then confirm details when the question requires it.' },
    ],
    faq: [
      { q: 'What vocabulary do I need for TOEIC reading?', a: 'Workplace English: contracts, invoices, schedules, announcements — plus the prepositions and conjunctions that connect sentences.' },
      { q: 'How do I get faster at TOEIC reading?', a: 'Time-box every practice. Skimming routines (first/last lines) and reading questions first recover real minutes.' },
    ],
    internalLinks: [
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC listening', href: '/toeic/listening' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEIC reading: incomplete sentences', href: '/toeic/reading/incomplete-sentences' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
    ],
    tools: [{ label: 'Free TOEIC Reading exercises', href: '/practice/toeic-reading' }],
    cta: toeicCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'TOEIC Vocabulary',
    title: 'TOEIC Vocabulary — Workplace English List | ScoreUp',
    description:
      'Learn the workplace vocabulary TOEIC actually tests: business documents, meetings, schedules and professional phrases.',
    intro:
      'TOEIC vocabulary is workplace English. Learning it in context beats memorising word lists — and it is exactly what the test rewards.',
    blocks: [
      { kind: 'h2', text: 'Core TOEIC vocabulary' },
      {
        kind: 'table',
        headers: ['Word', 'Meaning', 'Example'],
        rows: [
          ['reschedule', 'move to a new time', 'We rescheduled the meeting to Friday.'],
          ['invoice', 'bill for payment', 'The invoice is due within 30 days.'],
          ['inventory', 'stock of goods', 'Inventory levels dropped sharply.'],
          ['convenient', 'easy to use/arrange', 'Is Thursday convenient for you?'],
          ['assistance', 'help', 'Call us for technical assistance.'],
        ],
      },
      { kind: 'h2', text: 'Where business words appear' },
      {
        kind: 'ul',
        items: [
          'Part 3–4 listening: meeting arrangements, travel bookings, facility announcements.',
          'Part 5–7 reading: memos, invoices, advertisements, policies.',
          'Prepositions and conjunctions connect these words: “due to”, “in regard to”, “as of”.',
        ],
      },
      { kind: 'h2', text: 'Learning method' },
      {
        kind: 'ol',
        items: [
          'Learn words in business contexts (meeting, invoice, travel, hiring).',
          'Write one original sentence per word.',
          'Review with spaced flashcards.',
          'Meet the same words again in listening practice.',
        ],
      },
      { kind: 'tip', text: 'Keep a small “office phrases” notebook: submit, approve, notify, confirm, provide. Half of TOEIC uses these five verbs in context.' },
    ],
    faq: [
      { q: 'How much vocabulary do I need for the TOEIC?', a: 'A working workplace vocabulary of roughly 4,000–5,000 words, centred on business contexts, covers most items.' },
      { q: 'Is TOEIC vocabulary the same as everyday English?', a: 'Mostly it is everyday English in business situations — schedules, payments, complaints — rather than unfamiliar technical terms.' },
    ],
    internalLinks: [
      { label: 'TOEIC reading', href: '/toeic/reading' },
      { label: 'TOEIC listening', href: '/toeic/listening' },
      { label: 'TOEFL vocabulary: business', href: '/toefl/vocabulary/business' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: toeicCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'TOEIC Score Explained',
    title: 'TOEIC Score Scale & Meaning — 10 to 990 | ScoreUp',
    description:
      'Understand TOEIC scores: the 10–990 scale, what employers expect, and how ScoreUp estimates your level with a 0–9 band.',
    intro:
      'TOEIC scores run from 10 to 990. Understanding the scale helps you set a defensible target for your employer or school.',
    blocks: [
      { kind: 'h2', text: 'How the TOEIC is scored' },
      { kind: 'p', text: 'The Listening and Reading sections are each scored separately (5–495), then added for a total out of 990. ScoreUp presents your level as an estimated 0–9 band for readability.' },
      { kind: 'h2', text: 'What employers often look for' },
      {
        kind: 'table',
        headers: ['Estimated band', 'TOEIC total (approx.)', 'Typical use'],
        rows: [
          ['4.0–4.9', '450–550', 'Basic operational English'],
          ['5.0–5.9', '600–740', 'Routine workplace communication'],
          ['6.0–6.5', '750–850', 'Phone calls, reports, meetings'],
          ['6.5+', '850–990', 'Advanced professional contexts'],
        ],
      },
      { kind: 'tip', text: 'Check the exact requirement of your employer or institution before choosing a target. The bands above are approximate guidance.' },
    ],
    faq: [
      { q: 'Is 700 a good TOEIC score?', a: 'For many employers, 700+ (roughly a 5.5 estimated band) meets entry-level and operational roles.' },
      { q: 'Do TOEIC scores expire?', a: 'Not officially, but many organizations accept scores only from the last 2 years.' },
    ],
    internalLinks: [
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC study plan', href: '/toeic/study-plan' },
      { label: 'TOEFL score', href: '/toefl/score' },
    ],
    tools: [{ label: 'TOEIC score calculator', href: '/tools/toeic-score-calculator' }],
    cta: toeicCta,
  },
  {
    slug: 'study-plan',
    intent: 'planning',
    h1: 'TOEIC Study Plan',
    title: 'TOEIC Study Plan — 30 Day Template | ScoreUp',
    description:
      'A realistic 30-day TOEIC study plan: daily listening and reading practice, weekly focus and mock test milestones.',
    intro:
      'A TOEIC study plan works when it is daily and short. Use this template and adapt it to your available hours.',
    blocks: [
      { kind: 'h2', text: 'Daily 30-minute template' },
      {
        kind: 'table',
        headers: ['Day', 'Focus'],
        rows: [
          ['Mon', 'Listening Part 2 (question-response)'],
          ['Tue', 'Reading Part 5 (grammar + vocabulary)'],
          ['Wed', 'Listening Part 3–4 (conversations/talks)'],
          ['Thu', 'Reading Part 7 (business documents)'],
          ['Fri', 'Vocabulary + review of the week'],
          ['Sat', 'Timed mixed practice'],
          ['Sun', 'Rest / light review'],
        ],
      },
      { kind: 'h2', text: 'The 30-day milestones' },
      {
        kind: 'ol',
        items: [
          'Day 1: baseline mock test.',
          'Week 2: weak-part focus; aim for 30 min daily.',
          'Week 3: timed mocks twice; review errors each time.',
          'Week 4: two full mocks, taper workload before test day.',
        ],
      },
      { kind: 'tip', text: 'Path-of-least-resistance advice: improve Part 2 first. It is the fastest trainable section on the entire test.' },
    ],
    faq: [
      { q: 'Can I prepare for the TOEIC in 30 days?', a: 'Yes — 30 days of consistent practice moves most learners about one estimated band, especially if Listening is your focus.' },
      { q: 'How can I maintain TOEIC vocabulary?', a: 'Review the same words in listening and reading contexts, and keep one notebook for business collocations.' },
    ],
    internalLinks: [
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEFL study plan', href: '/toefl/study-plan' },
    ],
    tools: [{ label: 'TOEIC study plan generator', href: '/tools/toeic-study-plan-generator' }],
    cta: toeicCta,
  },
];

export const toeicTopics: SeoPageData[] = [
  {
    slug: 'listening/photo-description',
    intent: 'practice',
    h1: 'TOEIC Part 1: Photographs',
    title: 'TOEIC Part 1 Photographs — Strategy & Practice | ScoreUp',
    description:
      'Master TOEIC Part 1 (Photographs): how to pick the matching description, avoid literal traps and practise for free.',
    intro:
      'TOEIC Part 1 shows four photographs and plays four descriptions. Three are wrong; one matches what you see. The traps are more predictable than you think.',
    blocks: [
      { kind: 'h2', text: 'How Part 1 works' },
      { kind: 'p', text: 'You see one picture and hear four statements (A–D). The correct one describes the action and state in the photo. Statements are short: “A man is unloading boxes”, “A truck is parked near the entrance”.' },
      { kind: 'h2', text: 'The predictable traps' },
      {
        kind: 'ul',
        items: [
          'Similar-sounding words: “unloading” vs “loading”, “customers” vs “costumers”.',
          'Wrong subject/object: “The woman is typing” when it is the man who types.',
          'Location errors: “in the warehouse” when the photo shows an office.',
        ],
      },
      { kind: 'h2', text: 'How to practise' },
      {
        kind: 'ol',
        items: [
          'Look at the picture before the audio starts — predict three likely verbs.',
          'Listen for the subject first (who is doing the action).',
          'Eliminate the obviously wrong ones immediately.',
        ],
      },
      { kind: 'tip', text: 'Train by describing everyday photos aloud in two seconds: “A car is stopped at the gate. Papers are on the table.” That is the whole skill.' },
    ],
    faq: [
      { q: 'How many photo questions are on the TOEIC?', a: 'Part 1 typically has 6–7 questions now, down from the older, longer version of the test.' },
      { q: 'Are Part 1 photos always work-related?', a: 'Mostly workplace scenes: offices, warehouses, factories, streets and restaurants.' },
    ],
    internalLinks: [
      { label: 'TOEIC listening', href: '/toeic/listening' },
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
    ],
    cta: toeicCta,
  },
  {
    slug: 'reading/incomplete-sentences',
    intent: 'practice',
    h1: 'TOEIC Part 5: Incomplete Sentences',
    title: 'TOEIC Part 5 Incomplete Sentences — Strategy | ScoreUp',
    description:
      'A reliable method for TOEIC Part 5: decide whether the gap tests grammar or vocabulary, then eliminate. Free practice included.',
    intro:
      'TOEIC Part 5 shows a sentence with a missing word and four options. The fastest method is deciding what the gap is testing before you look at the options.',
    blocks: [
      { kind: 'h2', text: 'How Part 5 works' },
      { kind: 'p', text: 'About 30 incomplete sentences mix grammar questions (verb form, word order, preposition) and vocabulary questions (word choice, collocation).' },
      { kind: 'h2', text: 'The two-step method' },
      {
        kind: 'ol',
        items: [
          'Read the full sentence and name the missing part: verb? noun? preposition? connector?',
          'If it is grammar, apply the rule (agreement, tense, modifier order).',
          'If it is vocabulary, pick the word that collocates: “meet a deadline”, “hold a seminar”.',
        ],
      },
      { kind: 'h2', text: 'High-frequency grammar points' },
      {
        kind: 'ul',
        items: [
          'Subject–verb agreement: “The list of tasks is short.”',
          'Verb tense in business contexts: “will deliver”, “has submitted”.',
          'Prepositions in fixed phrases: “in charge of”, “responsible for”.',
          'Comparatives: “more economical”, “the most efficient”.',
        ],
      },
      { kind: 'tip', text: 'When unsure between two vocabulary options, trust the one whose collocation you have heard before in business English.' },
    ],
    faq: [
      { q: 'How many Part 5 questions are there?', a: 'Around 30 questions, lasting roughly 8–10 minutes if you stay disciplined.' },
      { q: 'Is Part 5 harder than Part 7?', a: 'Different. Part 5 tests precise grammar and vocabulary knowledge; Part 7 tests speed and comprehension. Most learners lose more time on Part 7.' },
    ],
    internalLinks: [
      { label: 'TOEIC reading', href: '/toeic/reading' },
      { label: 'TOEIC vocabulary', href: '/toeic/vocabulary' },
      { label: 'TOEIC preparation', href: '/toeic/preparation' },
      { label: 'TOEIC practice test', href: '/toeic/practice-test' },
    ],
    cta: toeicCta,
  },
];

/* ------------------------------------------------------------------ */
/* IELTS sections                                                      */
/* ------------------------------------------------------------------ */

const ieltsCta = {
  title: 'Start with a free English diagnostic',
  text: 'Estimate your current band in 10 minutes, then build a plan to reach your IELTS target.',
  href: '/diagnostic',
  label: 'Free diagnostic',
};

export const ieltsSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'IELTS Preparation',
    title: 'IELTS Preparation — A Practical Guide | ScoreUp',
    description:
      'Prepare for IELTS Academic or General Training: understand the format, choose a target band and practise the core skills daily.',
    intro:
      'IELTS preparation is about matching your English to a band target on a well-defined test. This guide gives you a realistic path.',
    blocks: [
      { kind: 'h2', text: 'IELTS vs IELTS Academic' },
      { kind: 'p', text: 'Academic IELTS is for university. General Training is for work and migration. Reading and Writing differ between them; Listening and Speaking are the same.' },
      { kind: 'h2', text: 'The four bands on the report' },
      {
        kind: 'table',
        headers: ['Section', 'Time', 'Questions'],
        rows: [
          ['Listening', '30 min + 10 transfer', '40'],
          ['Reading', '60 min', '40'],
          ['Writing', '60 min (2 tasks)', '2 tasks'],
          ['Speaking', '11–14 min (3 parts)', '1:1 interview'],
        ],
      },
      { kind: 'h2', text: 'How long does IELTS preparation take?' },
      { kind: 'p', text: 'Moving one full band (for example 5.0 → 6.0) typically takes 10–12 weeks of consistent practice. Thirty focused minutes a day outperforms weekend cramming.' },
      { kind: 'tip', text: 'Set a realistic target. A half-band gain is already meaningful for many visa and university requirements.' },
    ],
    faq: [
      { q: 'Is IELTS easier than TOEFL?', a: 'Neither is objectively easier. IELTS involves a real speaking interview, while TOEFL is fully recorded; both are equally demanding in their own format.' },
      { q: 'How is IELTS band scored?', a: 'Each section is scored 0–9 in half bands, and your overall band is the average of the four section scores.' },
    ],
    internalLinks: [
      { label: 'IELTS reading', href: '/ielts/reading' },
      { label: 'IELTS listening', href: '/ielts/listening' },
      { label: 'IELTS speaking', href: '/ielts/speaking' },
      { label: 'IELTS writing', href: '/ielts/writing' },
      { label: 'IELTS vocabulary', href: '/ielts/vocabulary' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
      { label: 'IELTS score', href: '/ielts/score' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'IELTS Practice Test',
    title: 'IELTS Practice Test — Free Practice | ScoreUp',
    description:
      'Free IELTS practice: timed exercises for reading, listening and vocabulary with an estimated band score.',
    intro:
      'A practice test before you start studying gives you a defensible baseline. Here is how to use practice tests in IELTS preparation.',
    blocks: [
      { kind: 'h2', text: 'Why baseline first' },
      { kind: 'p', text: 'Your estimated score tells you where the first month of effort should go. A learner at 5.0 improves fastest by fixing basic vocabulary; a learner at 6.5 improves fastest with exam strategy.' },
      { kind: 'h2', text: 'Practice test rhythm for IELTS' },
      { kind: 'ol', items: ['Baseline mock test first', 'Mock test every 2–3 weeks', 'Re-do mistakes until they are automatic', 'Full test-day simulation before your exam'] },
      { kind: 'tip', text: 'IELTS penalises nothing for guessing, so never leave an unanswered question — answer something.' },
    ],
    faq: [
      { q: 'Are official IELTS mock tests free?', a: 'Official materials exist, but ScoreUp’s free practice gives you original exercises and estimated bands for guidance.' },
      { q: 'What is a good IELTS score?', a: 'University courses often ask 6.0–7.0; skilled migration and professional registration commonly ask 6.5–7.5.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS reading practice', href: '/ielts/reading' },
      { label: 'IELTS listening practice', href: '/ielts/listening' },
      { label: 'IELTS score', href: '/ielts/score' },
    ],
    tools: [{ label: 'English level test', href: '/tools/english-level-test' }],
    cta: ieltsCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'IELTS Reading Practice',
    title: 'IELTS Reading Practice — Types & Tips | ScoreUp',
    description:
      'Practise IELTS Reading: question types, skimming and scanning routines, and common traps for reading passages.',
    intro:
      'IELTS Reading gives you three long passages and 40 questions in 60 minutes. Strategy is as important as vocabulary.',
    blocks: [
      { kind: 'h2', text: 'The question families' },
      {
        kind: 'table',
        headers: ['Type', 'What you do'],
        rows: [
          ['Multiple choice', 'Choose the best option'],
          ['True / False / Not given', 'Decide what the text actually says'],
          ['Matching headings', 'Match paragraph to heading'],
          ['Sentence completion', 'Fill gaps with the right words'],
          ['Summary completion', 'Complete a summary of the text'],
        ],
      },
      { kind: 'h2', text: 'Skim, scan, then answer' },
      { kind: 'ol', items: ['Skim the passage in 2 minutes: title, headings, first lines.', 'Read the questions and identify keywords.', 'Scan for each keyword, then read the surrounding sentence carefully.'] },
      { kind: 'h2', text: 'True / False / Not given — the classic trap' },
      {
        kind: 'p',
        text: 'False means the text contradicts the statement. Not given means the text is silent — no matter how obvious the “common sense” answer seems. This distinction decides most lost marks.',
      },
      { kind: 'tip', text: '“Not given” answers are not about logic — they are about evidence. If the text clearly mentions it, T or F. Otherwise, NG.' },
    ],
    faq: [
      { q: 'Are IELTS reading passages hard?', a: 'They are academic and densely worded. Speed and keyword scanning are trainable, which matters more than exotic vocabulary.' },
      { q: 'Should I read the passage before questions?', a: 'No. Skim first, then go question by question, scanning for keywords.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS vocabulary', href: '/ielts/vocabulary' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
      { label: 'TOEFL reading', href: '/toefl/reading' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'IELTS Listening Practice',
    title: 'IELTS Listening Practice — Strategies | ScoreUp',
    description:
      'Improve IELTS Listening: predict answers from questions, handle numbers and names, and avoid missed transitions.',
    intro:
      'IELTS Listening plays each recording once. The skill that most improves scores is prediction: deciding what type of answer each gap expects before you hear the audio.',
    blocks: [
      { kind: 'h2', text: 'The four sections' },
      { kind: 'p', text: 'Section 1 is a casual conversation (form filling), Section 2 a monologue, Section 3 an academic discussion and Section 4 a lecture. Difficulty climbs steadily.' },
      { kind: 'h2', text: 'Prediction beats memory' },
      {
        kind: 'ul',
        items: [
          'Read the questions before each section starts.',
          'Predict the answer type: a number? a name? a time? a type of room?',
          'Watch word limits: “ONE WORD AND/OR A NUMBER”.',
        ],
      },
      { kind: 'h2', text: 'Handling numbers and names' },
      { kind: 'p', text: 'Practise spelling dictation and number dictation daily for five minutes. Most students lose 2–3 points just on misspelled names and digits heard once.' },
      { kind: 'tip', text: 'Move on immediately after each answer — an answer you missed is gone. Staying focused on the next gap is worth more than regretting the last.' },
    ],
    faq: [
      { q: 'How many times is IELTS audio played?', a: 'Once. That is why prediction and note-taking matter so much.' },
      { q: 'Do I lose points for grammar in listening gaps?', a: 'Yes — your written answer must fit the sentence. A verb that disagrees with its subject can cost the mark, even if you heard the word.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS reading', href: '/ielts/reading' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
      { label: 'TOEIC listening', href: '/toeic/listening' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'speaking',
    intent: 'problem-solving',
    h1: 'How to Improve IELTS Speaking',
    title: 'How to Improve IELTS Speaking — 3 Part Guide | ScoreUp',
    description:
      'Improve IELTS Speaking with part-by-part strategy: extend answers, paraphrase and build fluency with daily drills.',
    intro:
      'IELTS Speaking is a structured interview in three parts. Your band depends on fluency, vocabulary, grammar and pronunciation — in that order of weight for most candidates.',
    blocks: [
      { kind: 'h2', text: 'Speak like an examiner: the three parts' },
      {
        kind: 'table',
        headers: ['Part', 'Content', 'Key move'],
        rows: [
          ['1 — Intro', 'Answer questions about familiar topics', 'Extend with reason + example'],
          ['2 — Cue card', 'Speak for 2 minutes on a card', 'Use notes; structure story or compare'],
          ['3 — Discussion', 'Abstract questions on Part 2 theme', 'Give opinion + justify + contrast'],
        ],
      },
      { kind: 'h2', text: 'The extension formula' },
      { kind: 'p', text: 'Short answers cap your band. Use the formula: answer + reason + example. “I prefer mornings because I concentrate best then. For example, I write my hardest paragraphs before 10am.”' },
      { kind: 'h2', text: 'Fluency drills' },
      {
        kind: 'ul',
        items: [
          'Record 1-minute answers daily and transcribe two of them.',
          'Shadow native audio for pronunciation rhythm.',
          'Practise the 4Cs cue-card structure: Describe, Compare, Cause-consequence, Conclusion.',
        ],
      },
      { kind: 'tip', text: 'You do not need a native accent. Clear pronunciation at a natural pace wins more marks than a heavy accent-free second language with flat rhythm.' },
    ],
    faq: [
      { q: 'How long is the IELTS speaking test?', a: '11–14 minutes: Part 1 about 4–5 min, Part 2 about 4 min including preparation, Part 3 about 4–5 min.' },
      { q: 'Is IELTS speaking recorded?', a: 'Yes — with an examiner present in paper tests, or via video in computer-delivered IELTS. Your session is recorded for verification.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS writing', href: '/ielts/writing' },
      { label: 'IELTS vocabulary', href: '/ielts/vocabulary' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
      { label: 'TOEFL speaking', href: '/toefl/speaking' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'writing',
    intent: 'problem-solving',
    h1: 'IELTS Writing Practice',
    title: 'IELTS Writing Task 1 & 2 — Structure & Tips | ScoreUp',
    description:
      'Master IELTS Writing: Task 1 reporting and Task 2 essays with band-level structure, examples and daily practice.',
    intro:
      'IELTS Writing has two tasks in 60 minutes. Task 1 (20 min) reports data or describes a process; Task 2 (40 min) is a discursive essay. Structure is everything.',
    blocks: [
      { kind: 'h2', text: 'Task 1 — the report' },
      { kind: 'ol', items: ['Paraphrase the prompt in one sentence.', 'Give an overview in one sentence (the overall trend).', 'Describe the data in 2–3 paragraphs by groups.'] },
      { kind: 'h2', text: 'Task 2 — the essay' },
      {
        kind: 'table',
        headers: ['Paragraph', 'Content'],
        rows: [
          ['Intro', 'Paraphrase + clear position'],
          ['Body 1', 'Reason + example or data'],
          ['Body 2', 'Second reason or counterargument'],
          ['Conclusion', 'Restate position, no new ideas'],
        ],
      },
      { kind: 'h2', text: 'What distinguishes bands' },
      {
        kind: 'ul',
        items: [
          'Band 6: clear position, some cohesion errors.',
          'Band 7: coherent linking, topic vocabulary, minor errors only.',
          'Band 8+: precision, flexibility, rare errors.',
        ],
      },
      { kind: 'tip', text: 'Write at least one Task 2 essay per day for two weeks using one fixed template. Automation of structure frees your attention for content.' },
    ],
    faq: [
      { q: 'How many words must I write?', a: 'Task 1 requires at least 150 words, Task 2 at least 250. Going under the minimum visibly caps your score.' },
      { q: 'Are bullet points allowed in Task 1?', a: 'No — write connected paragraphs, not bullets.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS speaking', href: '/ielts/speaking' },
      { label: 'IELTS vocabulary', href: '/ielts/vocabulary' },
      { label: 'TOEFL writing', href: '/toefl/writing' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'IELTS Vocabulary',
    title: 'IELTS Vocabulary — Band-Specific Word Use | ScoreUp',
    description:
      'Learn how IELTS vocabulary is scored: using words with precision and collocation, plus academic word families to practise.',
    intro:
      'IELTS rewards vocabulary you use precisely in context — not long lists memorised in isolation. Here is what actually moves your band.',
    blocks: [
      { kind: 'h2', text: 'The “criterion” that matters' },
      { kind: 'p', text: 'In Speaking and Writing, one of the four criteria is Lexical Resource: the range—and accuracy—of your vocabulary. Rare, misused words hurt more than frequent, well-used ones.' },
      { kind: 'h2', text: 'Word families worth learning' },
      {
        kind: 'table',
        headers: ['Verb', 'Noun', 'Adjective'],
        rows: [
          ['assess', 'assessment', 'assessable'],
          ['benefit', 'benefit', 'beneficial'],
          ['fluctuate', 'fluctuation', 'fluctuating'],
          ['observe', 'observation', 'observable'],
        ],
      },
      { kind: 'h2', text: 'Collocations beat single words' },
      {
        kind: 'ul',
        items: [
          'Academic: “conduct research”, “draw a conclusion”, “yield results”.',
          'Opinion: “I firmly believe”, “from my perspective”, “it is widely argued”.',
          'Data: “a sharp increase”, “a steady decline”, “a minor fluctuation”.',
        ],
      },
      { kind: 'tip', text: 'Keep a band-7 notebook: every mistake you make while speaking is a chance to learn the correct collocation, not a lone word.' },
    ],
    faq: [
      { q: 'How many words do I need for IELTS band 7?', a: 'Precision matters more than raw count: about 4,000–6,000 active words with strong collocational control supports band 7.' },
      { q: 'Should I use idioms in IELTS speaking?', a: 'Only idioms you are 100% sure of. A natural collocation (“a steep drop”) scores more than a risky idiom.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS writing', href: '/ielts/writing' },
      { label: 'IELTS speaking', href: '/ielts/speaking' },
      { label: 'TOEFL vocabulary', href: '/toefl/vocabulary' },
    ],
    tools: [{ label: 'English vocabulary test', href: '/tools/english-vocabulary-test' }],
    cta: ieltsCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'IELTS Score & Band Explained',
    title: 'IELTS Band Score — 0 to 9 Explained | ScoreUp',
    description:
      'Understand IELTS band scores: how the overall band is calculated, what university and migration require, and how to set your target.',
    intro:
      'IELTS reports each section from 0 to 9 in half bands, and the overall band is the average of the four sections. This page maps targets to reality.',
    blocks: [
      { kind: 'h2', text: 'How the overall band is calculated' },
      { kind: 'p', text: 'The four section bands are averaged and rounded to the nearest half band. Example: 6.5 + 7.0 + 6.0 + 6.5 = 26.0 ÷ 4 = 6.5 overall.' },
      { kind: 'h2', text: 'Common requirements' },
      {
        kind: 'table',
        headers: ['Goal', 'Typical requirement'],
        rows: [
          ['Foundation courses', '5.0–5.5'],
          ['Bachelor’s degree', '6.0–6.5'],
          ['Master’s / PhD', '6.5–7.5'],
          ['Professional registration', '7.0–7.5 (often with section minimums)'],
        ],
      },
      { kind: 'tip', text: 'Many institutions set a minimum on each section too — not just the overall band. Check “no band below 6.0” clauses before setting a target.' },
    ],
    faq: [
      { q: 'What is a good IELTS score?', a: 'Above the requirement of your target institution or visa. “Good” is relative to your goal, not a global number.' },
      { q: 'Do IELTS scores expire?', a: 'Yes — scores are valid for 2 years, though some organisations accept older scores, especially for academics employed long-term.' },
    ],
    internalLinks: [
      { label: 'IELTS preparation', href: '/ielts/preparation' },
      { label: 'IELTS practice test', href: '/ielts/practice-test' },
      { label: 'TOEFL score', href: '/toefl/score' },
    ],
    tools: [{ label: 'IELTS score calculator', href: '/tools/ielts-score-calculator' }],
    cta: ieltsCta,
  },
];