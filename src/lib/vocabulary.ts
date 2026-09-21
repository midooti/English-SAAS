/**
 * vocabulary.ts — Banque de vocabulaire de démo (contenu original),
 * prête pour la répétition espacée (box / next_review_at) côté Supabase.
 */

export type VocabCategory =
  | 'Academic'
  | 'Business'
  | 'University'
  | 'Travel'
  | 'Technology'
  | 'Science'
  | 'Daily English';

export type VocabWord = {
  id: string;
  word: string;
  definition: string;
  example: string;
  synonyms: string[];
  category: VocabCategory;
  difficulty: 'easy' | 'medium' | 'hard';
};

export const vocabCategories: VocabCategory[] = [
  'Academic',
  'Business',
  'University',
  'Travel',
  'Technology',
  'Science',
  'Daily English',
];

export const vocabulary: VocabWord[] = [
  // Academic
  { id: 'v1', word: 'hypothesis', definition: 'A proposed explanation made on the basis of limited evidence.', example: 'The hypothesis was tested across three experiments.', synonyms: ['theory', 'supposition'], category: 'Academic', difficulty: 'medium' },
  { id: 'v2', word: 'methodology', definition: 'The system of methods used in a particular study or field.', example: 'The paper explains its methodology in detail.', synonyms: ['approach', 'procedure'], category: 'Academic', difficulty: 'hard' },
  { id: 'v3', word: 'paradigm', definition: 'A typical example or pattern of something; a model.', example: 'This discovery changed the paradigm in physics.', synonyms: ['model', 'framework'], category: 'Academic', difficulty: 'hard' },
  { id: 'v4', word: 'coherent', definition: 'Logical and consistent; easy to understand.', example: 'She gave a coherent summary of the lecture.', synonyms: ['logical', 'consistent'], category: 'Academic', difficulty: 'medium' },
  // Business
  { id: 'v5', word: 'revenue', definition: 'Income, especially of a company, from normal business activities.', example: 'Quarterly revenue grew by 12 percent.', synonyms: ['income', 'earnings'], category: 'Business', difficulty: 'easy' },
  { id: 'v6', word: 'negotiate', definition: 'To discuss something in order to reach an agreement.', example: 'They negotiated a better delivery schedule.', synonyms: ['bargain', 'discuss'], category: 'Business', difficulty: 'medium' },
  { id: 'v7', word: 'stakeholder', definition: 'A person or group with an interest in a project or company.', example: 'Stakeholders approved the new policy.', synonyms: ['partner', 'investor'], category: 'Business', difficulty: 'medium' },
  // University
  { id: 'v8', word: 'matriculate', definition: 'To begin studying at a university or college.', example: 'She will matriculate at Oxford in September.', synonyms: ['enroll', 'register'], category: 'University', difficulty: 'hard' },
  { id: 'v9', word: 'prerequisite', definition: 'A course or condition required before another can be taken.', example: 'Calculus is a prerequisite for physics.', synonyms: ['requirement', 'precondition'], category: 'University', difficulty: 'medium' },
  { id: 'v10', word: 'syllabus', definition: 'An outline of topics and expectations for a course.', example: 'The syllabus lists all deadlines for the term.', synonyms: ['curriculum', 'outline'], category: 'University', difficulty: 'easy' },
  // Travel
  { id: 'v11', word: 'itinerary', definition: 'A planned route or journey with dates and times.', example: 'Our itinerary includes two days in Kyoto.', synonyms: ['schedule', 'route'], category: 'Travel', difficulty: 'medium' },
  { id: 'v12', word: 'layover', definition: 'A short stop between connecting flights.', example: 'We had a five-hour layover in Amsterdam.', synonyms: ['stopover', 'wait'], category: 'Travel', difficulty: 'easy' },
  { id: 'v13', word: 'bureau', definition: 'An office, especially one providing a specific service.', example: 'The lost-luggage bureau is near gate A12.', synonyms: ['office', 'department'], category: 'Travel', difficulty: 'hard' },
  // Technology
  { id: 'v14', word: 'algorithm', definition: 'A step-by-step procedure for solving a problem.', example: 'The app uses an algorithm to plan your lessons.', synonyms: ['procedure', 'process'], category: 'Technology', difficulty: 'easy' },
  { id: 'v15', word: 'bandwidth', definition: 'The amount of data that can be transferred in a given time.', example: 'Video calls use a lot of bandwidth.', synonyms: ['capacity', 'throughput'], category: 'Technology', difficulty: 'easy' },
  { id: 'v16', word: 'scalable', definition: 'Able to grow without breaking or being redesigned.', example: 'Their cloud platform is highly scalable.', synonyms: ['expandable', 'elastic'], category: 'Technology', difficulty: 'medium' },
  // Science
  { id: 'v17', word: 'molecule', definition: 'A group of atoms bonded together.', example: 'Water is a molecule of two hydrogens and oxygen.', synonyms: ['particle', 'unit'], category: 'Science', difficulty: 'easy' },
  { id: 'v18', word: 'empirical', definition: 'Based on observation or experiment rather than theory.', example: 'The claim needs empirical support.', synonyms: ['observational', 'experimental'], category: 'Science', difficulty: 'hard' },
  { id: 'v19', word: 'mitigate', definition: 'To make something less severe or harmful.', example: 'Recycling helps mitigate waste.', synonyms: ['reduce', 'ease'], category: 'Science', difficulty: 'medium' },
  // Daily English
  { id: 'v20', word: 'grocery', definition: 'Food and everyday household items sold at a shop.', example: 'I need to pick up groceries after class.', synonyms: ['provisions', 'supplies'], category: 'Daily English', difficulty: 'easy' },
  { id: 'v21', word: 'argue', definition: 'To give reasons for or against something.', example: 'Researchers argue that sleep aids memory.', synonyms: ['claim', 'contend'], category: 'Daily English', difficulty: 'easy' },
  { id: 'v22', word: 'overcome', definition: 'To succeed in dealing with a problem or obstacle.', example: 'She overcame her fear of public speaking.', synonyms: ['defeat', 'conquer'], category: 'Daily English', difficulty: 'medium' },
  { id: 'v23', word: 'negotiate', definition: 'To find a way through or over an obstacle; to handle successfully.', example: 'He negotiated the crowded station easily.', synonyms: ['navigate', 'manage'], category: 'Daily English', difficulty: 'medium' },
];

export function getWordsByCategory(category: VocabCategory): VocabWord[] {
  return vocabulary.filter((w) => w.category === category);
}

/** Petit quiz (10 questions) à partir de la banque. */
export function buildQuiz(words: VocabWord[], count = 10): VocabWord[] {
  return words.slice(0, count);
}