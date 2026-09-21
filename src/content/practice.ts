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
    h1: 'Entraînement à la lecture TOEFL',
    title: 'Entraînement gratuit à la lecture TOEFL — Essayez un mini-test | Prep-Anglais',
    description:
      'Essayez gratuitement un entraînement de lecture TOEFL ici même : 3 questions en direct, idée principale, détail et vocabulaire en contexte.',
    intro:
      'Trois questions de lecture TOEFL en direct, ici sur cette page — gratuites et instantanées, sans compte nécessaire. Chacune vise un type de question du vrai test.',
    blocks: [
      { kind: 'h2', text: 'Comment utiliser ce mini-test' },
      { kind: 'ol', items: ['Répondez aux 3 questions en direct ci-dessous.', 'Lisez l’explication après chaque réponse.', 'Utilisez le mini-score comme un premier signal d’orientation.'] },
      { kind: 'p', text: 'Pour une vue complète, passez ensuite le diagnostic gratuit — il estime votre niveau en lecture, écoute et vocabulaire.' },
    ],
    faq: [
      { q: 'Cette version est-elle limitée ?', a: 'Cet échantillon est gratuit et illimité — une bibliothèque complète d’exercices avec des limites quotidiennes existe dans l’application d’entraînement.' },
      { q: 'Ces questions comptent-elles pour mon score ?', a: 'Non. Utilisez-les comme entraînement ; le suivi réel de vos progrès se fait dans votre compte.' },
    ],
  },
  {
    slug: 'toefl-vocabulary',
    exam: 'toefl',
    skill: 'vocabulary',
    h1: 'Entraînement au vocabulaire TOEFL',
    title: 'Entraînement gratuit au vocabulaire TOEFL — 3 questions en direct | Prep-Anglais',
    description:
      'Exercez-vous sur le vocabulaire TOEFL à haute fréquence avec 3 questions en direct et des explications immédiates.',
    intro:
      'Testez-vous ici sur trois questions de vocabulaire académique TOEFL. Chacune vérifie un style de famille de mots différent.',
    blocks: [
      { kind: 'h2', text: 'Ce que couvre cet échantillon' },
      { kind: 'ul', items: ['Le sens d’un mot académique.', 'Un mot en contexte.', 'La reconnaissance d’une famille de mots.'] },
      { kind: 'p', text: 'Trois bonnes réponses ? Votre vocabulaire académique est solide. Quelques erreurs ? L’application vocabulaire construit des cartes mémoire et des révisions espacées à partir de cette même banque de mots.' },
    ],
    faq: [
      { q: 'S’agit-il de mots officiels du TOEFL ?', a: 'Non — ce sont des mots académiques originaux de notre propre banque, choisis pour la même fréquence que celle qu’utilise le TOEFL.' },
      { q: 'Comment mémoriser de nouveaux mots ?', a: 'Apprenez-les en contexte, révisez-les selon un calendrier et rédigez une phrase originale pour chaque mot.' },
    ],
  },
  {
    slug: 'toeic-reading',
    exam: 'toeic',
    skill: 'reading',
    h1: 'Entraînement à la lecture TOEIC',
    title: 'Entraînement gratuit à la lecture TOEIC — 3 questions en direct | Prep-Anglais',
    description:
      'Essayez trois questions gratuites de lecture TOEIC : phrases à compléter et compréhension de documents professionnels.',
    intro:
      'Trois questions de lecture TOEIC en direct couvrant la grammaire en contexte et la compréhension de documents professionnels.',
    blocks: [
      { kind: 'h2', text: 'Les trois styles de questions' },
      { kind: 'ol', items: ['Une phrase à compléter de type partie 5.', 'Un texte à trous.', 'Un court scénario de lecture professionnelle.'] },
      { kind: 'p', text: 'Pour le rythme TOEIC complet — parties 5 à 7 dans les temps — utilisez les tests blancs et l’application d’entraînement quotidienne.' },
    ],
    faq: [
      { q: 'La lecture TOEIC devient-elle plus difficile avec le temps ?', a: 'Les questions restent d’une difficulté semblable ; ce qui pèse, c’est le temps et le volume (100 questions). Exercez-vous à la cadence dès le début.' },
      { q: 'Quelle grammaire apparaît le plus au TOEIC ?', a: 'Les accords, les temps, les prépositions et les comparatifs. Notre application s’entraîne précisément sur ceux-là.' },
    ],
  },
  {
    slug: 'toeic-listening',
    exam: 'toeic',
    skill: 'listening',
    h1: 'Entraînement à l’écoute TOEIC',
    title: 'Entraînement gratuit à l’écoute TOEIC — 3 questions en direct | Prep-Anglais',
    description:
      'Trois questions d’écoute gratuites dans le style TOEIC, sur des situations professionnelles, avec explications.',
    intro:
      'Trois questions en direct calquées sur les enregistrements professionnels du TOEIC : qui parle, quelle est la demande, que se passe-t-il ensuite.',
    blocks: [
      { kind: 'h2', text: 'Ce que travaille l’échantillon' },
      { kind: 'ul', items: ['Les rôles des locuteurs (qui parle et pourquoi).', 'Les nombres comme détails (heures, prix, dates).', 'L’inférence sur la suite des actions.'] },
      { kind: 'p', text: 'Dans le vrai test, l’audio du TOEIC n’est joué qu’une fois. Installez des habitudes d’anticipation grâce à l’entraînement quotidien à l’écoute dans l’application.' },
    ],
    faq: [
      { q: 'Faut-il d’abord accumuler des heures d’écoute native ?', a: 'Un peu d’écoute professionnelle quotidienne aide, mais un entraînement ciblé à l’anticipation fait progresser le score plus vite qu’une exposition passive.' },
      { q: 'S’agit-il de véritables enregistrements TOEIC ?', a: 'Non — ce sont des dialogues originaux de style TOEIC, dans des contextes professionnels.' },
    ],
  },
];

export function getPracticePage(slug: string): PracticePageData | undefined {
  return practicePages.find((p) => p.slug === slug);
}