/**
 * exams.ts — Catalogue des examens couverts par Prep-Anglais.
 * Contenu informatif propre au produit : aucun élément copié des
 * organismes officiels, aucune affiliation.
 */

export type ExamKey = 'toefl' | 'toeic' | 'ielts' | 'cambridge' | 'duolingo';

export type ExamInfo = {
  key: ExamKey;
  name: string;
  slug: string;
  tagline: string;
  presentation: string;
  skills: string[];
  format: string;
  duration: string;
  scale: string;
  resources: string[];
  developed: boolean;
};

export const exams: ExamInfo[] = [
  {
    key: 'toefl',
    name: 'TOEFL',
    slug: 'toefl',
    tagline: 'L\'anglais académique pour les universités du monde entier.',
    presentation:
      'Le Test of English as a Foreign Language (TOEFL) mesure la compréhension de l\'anglais académique, principalement pour l\'admission dans les universités nord-américaines et anglophones.',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
    format: 'Passé sur ordinateur, dans un centre agréé ou à domicile.',
    duration: '≈ 2 h 30',
    scale: 'Score estimé sur 120 (équivalent B1 à C1)',
    resources: ['Exercices rédigés', 'Examens blancs', 'Vocabulaire académique', 'Plans de préparation'],
    developed: true,
  },
  {
    key: 'toeic',
    name: 'TOEIC',
    slug: 'toeic',
    tagline: 'L\'anglais professionnel pour les entreprises et le monde du travail.',
    presentation:
      'Le Test of English for International Communication (TOEIC) évalue l\'anglais utilisé dans un contexte professionnel : réunions, e-mails, communication d\'entreprise.',
    skills: ['Reading', 'Listening'],
    format: 'Passé sur ordinateur ou en format papier, dans un centre agréé.',
    duration: '≈ 2 h',
    scale: 'Score estimé sur 990 (équivalent A2 à C1)',
    resources: ['Exercices rédigés', 'Examens blancs', 'Vocabulaire professionnel', 'Plans de préparation'],
    developed: true,
  },
  {
    key: 'ielts',
    name: 'IELTS',
    slug: 'ielts',
    tagline: 'Anglais académique et général, pour études et immigration.',
    presentation:
      'L\'International English Language Testing System (IELTS) existe en deux versions — académique et générale — et est reconnu par de nombreuses universités et organismes.',
    skills: ['Reading', 'Listening', 'Speaking', 'Writing'],
    format: 'Oral en face à face avec un examinateur ; les autres parties sur papier ou ordinateur.',
    duration: '≈ 2 h 45',
    scale: 'Note estimée de 0 à 9',
    resources: ['Exercices rédigés', 'Vocabulaire', 'Gammes d\'expression', 'Plans de préparation'],
    developed: false,
  },
  {
    key: 'cambridge',
    name: 'Cambridge English',
    slug: 'cambridge',
    tagline: 'Des niveaux structurés pour chaque étape : A2 Key à C2 Proficiency.',
    presentation:
      'Les certifications Cambridge English (Key, Preliminary, First, Advanced, Proficiency) évaluent un niveau précis et restent valables à vie.',
    skills: ['Reading', 'Writing', 'Speaking', 'Listening'],
    format: 'Épreuves papiers ou numériques dans un centre agréé.',
    duration: '≈ 2 h à 4 h selon le niveau',
    scale: 'Niveau estimé de A1 à C2',
    resources: ['Exercices rédigés', 'Vocabulaire par niveau', 'Gammes d\'expression'],
    developed: false,
  },
  {
    key: 'duolingo',
    name: 'Duolingo English Test',
    slug: 'duolingo-english-test',
    tagline: 'Un test en ligne, disponible à tout moment, reconnu par de nombreuses universités.',
    presentation:
      'Le Duolingo English Test est un test adaptatif passé en ligne depuis chez soi, avec un résultat rapide et acceptable par un nombre croissant d\'établissements.',
    skills: ['Literacy', 'Comprehension', 'Conversation', 'Production'],
    format: 'En ligne, à domicile, résultats sous 48 heures.',
    duration: '≈ 1 h',
    scale: 'Score estimé de 10 à 160',
    resources: ['Exercices rédigés', 'Vocabulaire', 'Gammes d\'expression'],
    developed: false,
  },
];

export function getExam(key: ExamKey): ExamInfo | undefined {
  return exams.find((e) => e.key === key);
}