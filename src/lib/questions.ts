/**
 * questions.ts — Banque de questions de DÉMONSTRATION (contenu original).
 *
 * Important (produit) : aucune question ETS/Cambridge/IDP copiée.
 * Les scores affichés sont des "estimated scores", jamais des scores officiels.
 */

export type Exam = 'toefl' | 'toeic' | 'ielts' | 'cambridge' | 'duolingo';
export type Skill = 'reading' | 'listening' | 'speaking' | 'writing' | 'vocabulary';
export type Difficulty = 'easy' | 'medium' | 'hard';
export type QuestionKind = 'mc' | 'speaking-prompt' | 'writing-prompt';

export type Question = {
  id: string;
  exam: Exam;
  skill: Skill;
  difficulty: Difficulty;
  kind: QuestionKind;
  /** Contexte court (mini-texte ou mini-script audio de démo). */
  context?: string;
  /** Architecture audio de démo : à remplacer par un vrai fichier audio. */
  audio?: boolean;
  prompt: string;
  options?: string[];
  correctIndex?: number;
  explanation?: string;
};

/* ------------------------------------------------------------------ */
/* La banque (questions originales de démo)                           */
/* ------------------------------------------------------------------ */

export const questions: Question[] = [
  // ============ TOEFL — READING (passage 1) ============
  {
    id: 't1',
    exam: 'toefl',
    skill: 'reading',
    difficulty: 'easy',
    kind: 'mc',
    context:
      'Reading passage: "Bees communicate the location of food sources using a series of movements known as the waggle dance."',
    prompt:
      'What is the main idea of the passage?',
    options: [
      'Bees prefer to forage at night',
      'Bees use movement to share locations',
      'Waggle dances have no purpose',
      'Bees only travel short distances',
    ],
    correctIndex: 1,
    explanation:
      'The opening sentence states that bees "communicate the location of food sources" with a waggle dance — the core idea.',
  },
  {
    id: 't2',
    exam: 'toefl',
    skill: 'reading',
    difficulty: 'medium',
    kind: 'mc',
    context:
      'Reading passage: "The waggle dance encodes direction and distance. A longer figure-eight run signals a farther source."',
    prompt:
      'According to the passage, a longer run in the waggle dance indicates what?',
    options: [
      'A richer supply of nectar',
      'A food source farther away',
      'A change in season',
      'More bees participating',
    ],
    correctIndex: 1,
    explanation:
      'The passage says a "longer figure-eight run signals a farther source" — distance, not quality.',
  },
  {
    id: 't3',
    exam: 'toefl',
    skill: 'reading',
    difficulty: 'hard',
    kind: 'mc',
    context:
      'Reading passage: "Urban growth patterns shifted as streetcar networks expanded, accelerating suburban development in the early 20th century."',
    prompt:
      'It can be inferred from the passage that the expansion of streetcars most likely —',
    options: [
      'slowed population growth in cities',
      'encouraged people to live farther from city centers',
      'increased the cost of housing downtown',
      'reduced the number of workers in cities',
    ],
    correctIndex: 1,
    explanation:
      'If networks "accelerated suburban development", people settled away from city centers — a supported inference.',
  },

  // ============ TOEFL — LISTENING (démo audio) ============
  {
    id: 't4',
    exam: 'toefl',
    skill: 'listening',
    difficulty: 'easy',
    kind: 'mc',
    audio: true,
    context:
      'Audio (demo placeholder): a short campus announcement about library hours during the holiday.',
    prompt:
      'What is the purpose of the announcement?',
    options: [
      'To announce new fines',
      'To inform students of holiday hours',
      'To discuss exam topics',
      'To advertise a workshop',
    ],
    correctIndex: 1,
    explanation:
      'In the announcement, the librarian explains the adjusted opening hours for the holiday week.',
  },
  {
    id: 't5',
    exam: 'toefl',
    skill: 'listening',
    difficulty: 'medium',
    kind: 'mc',
    audio: true,
    context:
      'Audio (demo placeholder): a biology lecture. "Photosynthesis converts light into chemical energy, primarily through chlorophyll."',
    prompt:
      'Which molecule is central to photosynthesis, according to the lecture?',
    options: ['Insulin', 'Chlorophyll', 'Collagen', 'Keratin'],
    correctIndex: 1,
    explanation:
      'Chlorophyll is named as the pigment that captures light energy.',
  },

  // ============ TOEFL — VOCABULARY ============
  {
    id: 't6',
    exam: 'toefl',
    skill: 'vocabulary',
    difficulty: 'easy',
    kind: 'mc',
    prompt: 'The study results were remarkably consistent. What does "remarkably" mean?',
    options: ['Barely', 'Surprisingly', 'Occasionally', 'Hardly'],
    correctIndex: 1,
    explanation: '"Remarkably" = in a way that is surprising or unusually noticeable.',
  },
  {
    id: 't7',
    exam: 'toefl',
    skill: 'vocabulary',
    difficulty: 'medium',
    kind: 'mc',
    prompt:
      'Choose the word closest in meaning to "rigorous":',
    options: ['Loose', 'Thorough', 'Random', 'Brief'],
    correctIndex: 1,
    explanation:
      '"Rigorous" describes a process that is strict, detailed and thorough.',
  },
  {
    id: 't8',
    exam: 'toefl',
    skill: 'vocabulary',
    difficulty: 'hard',
    kind: 'mc',
    prompt:
      'The evidence was described as compelling. Which word is closest in meaning?',
    options: ['Weak', 'Persuasive', 'Ambiguous', 'Irrelevant'],
    correctIndex: 1,
    explanation: '"Compelling" = convincing enough to make you believe or accept something.',
  },

  // ============ TOEIC — READING ============
  {
    id: 'e1',
    exam: 'toeic',
    skill: 'reading',
    difficulty: 'easy',
    kind: 'mc',
    context:
      'Email: "Please note that the annual team retreat has been moved to March 14 at the Lakeside Conference Center. Transportation is provided from the office at 8:30."',
    prompt:
      'What is the purpose of the email?',
    options: [
      'To announce a new date and location',
      'To cancel the retreat',
      'To request a refund',
      'To introduce a new manager',
    ],
    correctIndex: 0,
    explanation:
      'The message communicates both the new date (March 14) and the new venue (Lakeside Conference Center).',
  },
  {
    id: 'e2',
    exam: 'toeic',
    skill: 'reading',
    difficulty: 'medium',
    kind: 'mc',
    context:
      'Memo: "The procurement team reports that supplier delivery times have increased by 25 percent due to port congestion. We recommend placing large orders two weeks in advance."',
    prompt:
      'What problem does the memo identify?',
    options: [
      'A rise in supplier costs',
      'Slower deliveries',
      'An office closure',
      'A staffing shortage',
    ],
    correctIndex: 1,
    explanation:
      'Delivery times have increased by 25% because of port congestion — a delay problem.',
  },
  {
    id: 'e3',
    exam: 'toeic',
    skill: 'reading',
    difficulty: 'hard',
    kind: 'mc',
    context:
      'Notice: "Refunds are issued within five business days for items returned with the original packaging. Items opened are eligible for store credit only."',
    prompt:
      'What happens when an opened item is returned?',
    options: [
      'The customer receives a cash refund',
      'The customer gets store credit',
      'The item must be repackaged',
      'The return is automatically declined',
    ],
    correctIndex: 1,
    explanation:
      'Opened items are only eligible for store credit — not a cash refund.',
  },

  // ============ TOEIC — LISTENING (démo audio) ============
  {
    id: 'e4',
    exam: 'toeic',
    skill: 'listening',
    difficulty: 'easy',
    kind: 'mc',
    audio: true,
    context:
      'Audio (demo placeholder): "Welcome to TechX. Security will be alerted to any tailgating at access points."',
    prompt:
      'What are visitors told about?',
    options: [
      'Building security procedures',
      'Lunch arrangements',
      'Parking rules',
      'Meeting schedules',
    ],
    correctIndex: 0,
    explanation:
      'The notice concerns access points and alerts — security procedures.',
  },
  {
    id: 'e5',
    exam: 'toeic',
    skill: 'listening',
    difficulty: 'medium',
    kind: 'mc',
    audio: true,
    context: 'Audio (demo placeholder): a voicemail about a rescheduled presentation.',
    prompt: 'Why is the caller contacting the listener?',
    options: [
      'To confirm a catering order',
      'To move a presentation to another time',
      'To complain about service',
      'To request a meeting room',
    ],
    correctIndex: 1,
    explanation:
      'The voicemail explains the presentation has been moved to 10:00 tomorrow.',
  },

  // ============ TOEIC — VOCABULARY (business) ============
  {
    id: 'e6',
    exam: 'toeic',
    skill: 'vocabulary',
    difficulty: 'easy',
    kind: 'mc',
    prompt: 'The company plans to expand into new markets. What does "expand" mean?',
    options: ['Shrink', 'Grow', 'Close', 'Merge'],
    correctIndex: 1,
    explanation: '"Expand" = to become larger in size, scope or reach.',
  },
  {
    id: 'e7',
    exam: 'toeic',
    skill: 'vocabulary',
    difficulty: 'medium',
    kind: 'mc',
    prompt: 'Choose the synonym for "estimate":',
    options: ['Certainty', 'Approximation', 'Contract', 'Penalty'],
    correctIndex: 1,
    explanation: 'An "estimate" is a rough calculation — an approximation.',
  },
  {
    id: 'e8',
    exam: 'toeic',
    skill: 'vocabulary',
    difficulty: 'hard',
    kind: 'mc',
    prompt: 'The report was concise and well-organized. What is a synonym for "concise"?',
    options: ['Lengthy', 'Brief', 'Vague', 'Detailed'],
    correctIndex: 1,
    explanation: '"Concise" = giving a lot of information clearly in few words = brief.',
  },

  // ============ DIAGNOSTIC BONUS — main idea & inference ============
  {
    id: 'd1',
    exam: 'toefl',
    skill: 'reading',
    difficulty: 'easy',
    kind: 'mc',
    context:
      'Passage: "Naps of twenty minutes improve alertness without grogginess, while longer naps may leave you feeling worse."',
    prompt: 'Which statement best summarizes the passage?',
    options: [
      'All naps have the same effect',
      'Short naps help alertness without grogginess',
      'Long naps are always better',
      'Napping is harmful',
    ],
    correctIndex: 1,
    explanation:
      'The text contrasts short and long naps, praising twenty-minute naps for alertness without grogginess.',
  },
  {
    id: 'd2',
    exam: 'toeic',
    skill: 'reading',
    difficulty: 'medium',
    kind: 'mc',
    context:
      'Text: "The new software reduces manual data entry by half. Staff training sessions begin Monday."',
    prompt: 'What effect does the software have on data entry?',
    options: [
      'It eliminates all data entry',
      'It cuts the manual workload in half',
      'It creates more paperwork',
      'It delays the process',
    ],
    correctIndex: 1,
    explanation:
      '"Reduces ... by half" literally means the manual workload is halved.',
  },
  {
    id: 'd3',
    exam: 'toefl',
    skill: 'vocabulary',
    difficulty: 'easy',
    kind: 'mc',
    prompt: 'The lecture covered a broad range of topics. What does "broad" mean here?',
    options: ['Narrow', 'Wide', 'Deep', 'Simple'],
    correctIndex: 1,
    explanation: '"Broad range" = wide scope.',
  },
  {
    id: 'd4',
    exam: 'toeic',
    skill: 'vocabulary',
    difficulty: 'medium',
    kind: 'mc',
    prompt: 'Fill in the blank: "Our goal is to ____ customer satisfaction this quarter."',
    options: ['decrease', 'enhance', 'ignore', 'postpone'],
    correctIndex: 1,
    explanation: '"Enhance customer satisfaction" is the standard collocation.',
  },
  {
    id: 'd5',
    exam: 'toefl',
    skill: 'listening',
    difficulty: 'medium',
    kind: 'mc',
    audio: true,
    context:
      'Audio (demo placeholder): "Office hours are on Tuesdays from 2 to 4. Contact me by email for other times."',
    prompt: 'When can students visit without an appointment?',
    options: [
      'Every morning',
      'Tuesday afternoons',
      'Friday only',
      'Weekends',
    ],
    correctIndex: 1,
    explanation: 'Office hours "on Tuesdays from 2 to 4" = Tuesday afternoons.',
  },

  // ============ IELTS-style bonus (pour remplir les banques) ============
  {
    id: 'i1',
    exam: 'ielts',
    skill: 'reading',
    difficulty: 'medium',
    kind: 'mc',
    context:
      'Passage: "Studies on bilingual children show improved executive function, particularly in task-switching and attention control."',
    prompt: 'What did studies find about bilingual children?',
    options: [
      'They have weaker attention',
      'They perform better at switching tasks',
      'They struggle in school',
      'They speak slower',
    ],
    correctIndex: 1,
    explanation:
      'Improved task-switching and attention control are highlighted as advantages.',
  },
  {
    id: 'i2',
    exam: 'ielts',
    skill: 'vocabulary',
    difficulty: 'hard',
    kind: 'mc',
    prompt: 'The policy was widely endorsed. What does "endorsed" mean?',
    options: ['Rejected', 'Supported', 'Ignored', 'Rewritten'],
    correctIndex: 1,
    explanation: '"Endorsed" = publicly supported or approved.',
  },

  // ============ SPEAKING / WRITING prompts (practice) ============
  {
    id: 's1',
    exam: 'toefl',
    skill: 'speaking',
    difficulty: 'easy',
    kind: 'speaking-prompt',
    prompt: 'Describe a typical morning in your life. Use at least 3 sentences.',
    explanation:
      "Record yourself: structure = when, what, feeling. Aim for fluency over perfection.",
  },
  {
    id: 's2',
    exam: 'toefl',
    skill: 'speaking',
    difficulty: 'medium',
    kind: 'speaking-prompt',
    prompt: 'Some prefer studying alone, others in groups. Which do you prefer and why?',
    explanation:
      "Use the claim → reason → example structure within 45 seconds.",
  },
  {
    id: 'w1',
    exam: 'toefl',
    skill: 'writing',
    difficulty: 'medium',
    kind: 'writing-prompt',
    prompt:
      'Write 3–5 sentences: "Should university education be free for everyone? Defend your position."',
    explanation:
      'Write topic sentence + 2 supporting reasons + 1 example. Check for subject-verb agreement.',
  },
  {
    id: 'w2',
    exam: 'toeic',
    skill: 'writing',
    difficulty: 'easy',
    kind: 'writing-prompt',
    prompt:
      'You ordered office supplies that arrived damaged. Write a short email to the supplier asking for a replacement.',
    explanation:
      'Keep it polite and concrete: order reference, issue, expected resolution.',
  },

  // ============ CAMBRIDGE & DUOLINGO (bancs de développement) ============
  {
    id: 'c1',
    exam: 'cambridge',
    skill: 'reading',
    difficulty: 'medium',
    kind: 'mc',
    context: 'Sign: "Cycle path closed — use the pedestrian route through King Square until Friday."',
    prompt: 'Which route should cyclists use until Friday?',
    options: [
      'The main road',
      'The pedestrian route',
      'The cycle path',
      'The river path',
    ],
    correctIndex: 1,
    explanation: 'The sign directs cyclists to the alternative pedestrian route.',
  },
  {
    id: 'c2',
    exam: 'cambridge',
    skill: 'vocabulary',
    difficulty: 'easy',
    kind: 'mc',
    prompt: 'Fill in the blank: "The train was crowded, so we ____ a taxi instead."',
    options: ['took', 'take', 'taken', 'taking'],
    correctIndex: 0,
    explanation: 'Past simple "took" fits the past context (was crowded).',
  },
  {
    id: 'du1',
    exam: 'duolingo',
    skill: 'reading',
    difficulty: 'easy',
    kind: 'mc',
    prompt: 'Select the correct sentence:',
    options: [
      'She go to work by bus.',
      'She goes to work by bus.',
      'She going to work by bus.',
      'She gone to work by bus.',
    ],
    correctIndex: 1,
    explanation: 'Subject-verb agreement: third person singular needs "goes".',
  },
  {
    id: 'du2',
    exam: 'duolingo',
    skill: 'vocabulary',
    difficulty: 'medium',
    kind: 'mc',
    prompt: 'Choose the correct word: "The instructions were clear ____ complete."',
    options: ['and', 'but', 'or', 'so'],
    correctIndex: 0,
    explanation: '"and" joins two positive qualities: clear and complete.',
  },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                            */
/* ------------------------------------------------------------------ */

export const skills: Skill[] = [
  'reading',
  'listening',
  'speaking',
  'writing',
  'vocabulary',
];

export const skillLabels: Record<Skill, string> = {
  reading: 'Reading',
  listening: 'Listening',
  speaking: 'Speaking',
  writing: 'Writing',
  vocabulary: 'Vocabulary',
};

export const difficultyLabels: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

export function getQuestions(opts?: {
  exam?: Exam;
  skill?: Skill;
  difficulty?: Difficulty;
}): Question[] {
  return questions.filter((q) => {
    if (opts?.exam && q.exam !== opts.exam) return false;
    if (opts?.skill && q.skill !== opts.skill) return false;
    if (opts?.difficulty && q.difficulty !== opts.difficulty) return false;
    return true;
  });
}

/** Questions à choix multiples uniquement (diagnostic / mock). */
export function getMcQuestions(exam: Exam, skill?: Skill): Question[] {
  return getQuestions({ exam, skill }).filter((q) => q.kind === 'mc' && q.options);
}