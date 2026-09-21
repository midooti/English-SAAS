/**
 * content/tools.ts — Outils gratuits SEO.
 * Chaque outil est réellement utile sans paiement, a son contenu éducatif
 * propre, et se termine par un CTA naturel vers le diagnostic.
 */
import type { ToolEntry } from '@/content/types';

const diagnosticCta = {
  title: 'Voulez-vous améliorer votre score ?',
  text: 'Passez le diagnostic gratuit Prep-Anglais et obtenez un niveau estimé ainsi qu’un plan de départ personnalisé.',
  href: '/diagnostic',
  label: 'Passer le diagnostic gratuit',
};

export const tools: ToolEntry[] = [
  {
    slug: 'toefl-score-calculator',
    exam: 'toefl',
    app: 'score-calculator',
    title: 'Calculateur de score TOEFL — Estimez votre bande',
    description:
      'Convertissez vos performances par section TOEFL en un score estimé sur 0–9. Un outil gratuit pour préparer votre plan, pas un résultat officiel.',
    h1: 'Calculateur de score TOEFL',
    intro: 'Estimez votre bande TOEFL actuelle à partir de la précision de vos réponses par section. Saisissez le nombre de bonnes réponses à des questions d’entraînement et obtenez immédiatement un score estimé.',
    blocks: [
      { kind: 'h2', text: 'Comment fonctionne ce calculateur' },
      { kind: 'p', text: 'Prep-Anglais utilise une bande estimée de 0 à 9. Vous indiquez le nombre de questions correctes par section et le calculateur convertit votre précision en bande approximative.' },
      { kind: 'tip', text: 'Réservez cet outil à la planification. Seul le test officiel ETS peut certifier votre véritable score TOEFL.' },
    ],
    faq: [
      { q: 'S’agit-il du barème officiel du TOEFL ?', a: 'Non. Le barème réel du TOEFL est une méthode propriétaire ; il s’agit ici d’une estimation originale destinée à guider votre plan d’étude.' },
      { q: 'Quelle est une bonne bande TOEFL estimée ?', a: 'De nombreuses universités acceptent une bande estimée autour de 5.5–6.5, l’équivalent d’un bon score total.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toeic-score-calculator',
    exam: 'toeic',
    app: 'score-calculator',
    title: 'Calculateur de score TOEIC — Estimez votre niveau',
    description:
      'Estimez votre niveau TOEIC (équivalent 10–990) à partir de la précision de vos entraînements. Gratuit et immédiat.',
    h1: 'Calculateur de score TOEIC',
    intro: 'Estimez la position de votre niveau TOEIC sur l’échelle de 10 à 990 en saisissant votre précision sur des questions d’entraînement.',
    blocks: [
      { kind: 'h2', text: 'Comment l’échelle TOEIC se rattache aux bandes d’entraînement' },
      { kind: 'p', text: 'Le TOEIC réel convertit en interne vos réponses brutes en points. Ce calculateur vous offre une estimation transparente : la précision par section → une bande de 0 à 9, affichée avec son équivalent TOEIC approximatif.' },
      { kind: 'tip', text: 'Un score sans plan d’étude n’est qu’un chiffre. Utilisez l’estimation pour choisir un objectif et un calendrier.' },
    ],
    faq: [
      { q: 'Quel score TOEIC les employeurs attendent-ils ?', a: 'De nombreux postes recherchent 700 et plus (environ une bande estimée de 5.5), tandis que les fonctions internationales demandent souvent 850 et plus.' },
      { q: 'Puis-je me fier à un score TOEIC estimé ?', a: 'Considérez-le comme une direction, pas un certificat. Passez le test officiel pour obtenir un résultat certifié.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'ielts-score-calculator',
    exam: 'ielts',
    app: 'score-calculator',
    title: 'Calculateur de bande IELTS',
    description:
      'Saisissez vos bandes IELTS estimées par section pour découvrir votre bande globale — exactement selon l’arrondi de la moyenne.',
    h1: 'Calculateur de bande IELTS',
    intro: 'La bande globale IELTS est la moyenne des sections Listening, Reading, Writing et Speaking, arrondie à la demi-bande la plus proche. Saisissez vos bandes par section pour connaître la vôtre.',
    blocks: [
      { kind: 'h2', text: 'Comment la bande globale est calculée' },
      { kind: 'p', text: 'Additionnez les quatre bandes sectionnelles, divisez par quatre et arrondissez à la 0,5 la plus proche. Par exemple : (6.5 + 7.0 + 6.0 + 6.5) ÷ 4 = 6.5.' },
      { kind: 'p', text: 'Attention : la moyenne 6.75 s’arrondit vers le haut à 7.0, tandis que 6.25 s’arrondit vers le bas à 6.0. Une demi-bande change beaucoup de propositions universitaires.' },
      { kind: 'tip', text: 'Les universités exigent souvent des minimas par section, pas seulement une bande globale. Maintenez chaque section au niveau requis ou au-dessus.' },
    ],
    faq: [
      { q: 'Ce calculateur peut-il me donner mon vrai score IELTS ?', a: 'Non — seul un résultat IELTS certifié compte. Saisissez vos bandes d’entraînement actuelles pour voir votre estimation globale.' },
      { q: 'Et si une section tire ma bande vers le bas ?', a: 'Identifiez-la et rééquilibrez votre plan. Une section Writing fragile est le frein le plus courant à la bande globale.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'english-level-test',
    app: 'english-level-test',
    title: 'Test de niveau d’anglais gratuit',
    description:
      'Répondez à 10 questions originales et obtenez un niveau d’anglais estimé en quelques minutes. Sans inscription.',
    h1: 'Test de niveau d’anglais gratuit',
    intro: 'Un contrôle court et honnête de votre niveau d’anglais : 10 questions originales couvrant la lecture et le vocabulaire, suivies d’un score estimé.',
    blocks: [
      { kind: 'h2', text: 'Ce que mesure ce test' },
      { kind: 'p', text: 'La compréhension de lecture, le vocabulaire en contexte et la compréhension de type écoute, puisés dans l’anglais académique et professionnel.' },
      { kind: 'h2', text: 'Comment utiliser votre résultat' },
      { kind: 'ol', items: ['Passez le diagnostic complet pour une analyse section par section.', 'Partagez votre niveau estimé ou gardez-le pour vous.', 'Construisez un plan quotidien autour de vos compétences les plus fragiles.'] },
    ],
    faq: [
      { q: 'Ce test est-il officiel ?', a: 'Non. Il s’agit d’un contenu éducatif original qui fournit un niveau estimé à titre indicatif.' },
      { q: 'Dois-je m’inscrire ?', a: 'Non — le test se lance instantanément, sans compte.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toefl-study-plan-generator',
    exam: 'toefl',
    app: 'study-plan-generator',
    title: 'Générateur de plan d’étude TOEFL',
    description:
      'Générez un plan d’étude TOEFL personnalisé : date d’examen, semaines de préparation et minutes quotidiennes → focus hebdomadaire.',
    h1: 'Générateur de plan d’étude TOEFL',
    intro: 'Transformez « me réserver du temps pour préparer » en un véritable calendrier. Répondez à trois questions et recevez un plan hebdomadaire TOEFL que vous pouvez suivre.',
    blocks: [
      { kind: 'h2', text: 'Que contient un bon plan TOEFL' },
      { kind: 'ul', items: ['Un créneau quotidien fixe (20–45 minutes).', 'Un objectif de compétence par jour.', 'Un test blanc toutes les 2 semaines.', 'Un allègement pendant la dernière semaine.'] },
      { kind: 'h2', text: 'Pourquoi les plans générés fonctionnent' },
      { kind: 'p', text: 'Un plan écrit transforme l’intention en emploi du temps. Une fois le plan imprimé, la question « dois-je étudier aujourd’hui ? » est déjà tranchée.' },
    ],
    faq: [
      { q: 'Combien de semaines doit durer mon plan TOEFL ?', a: '4 à 8 semaines pour gagner solidement une demi à une bande. Le générateur s’adapte au délai dont vous disposez.' },
      { q: 'Et si je n’ai que 15 minutes par jour ?', a: 'Le plan le prévoit aussi — des séances régulières de 15 minutes valent mieux que des séances irrégulières de 2 heures.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'toeic-study-plan-generator',
    exam: 'toeic',
    app: 'study-plan-generator',
    title: 'Générateur de plan d’étude TOEIC',
    description:
      'Obtenez un plan d’étude TOEIC personnalisé avec un focus hebdomadaire sur l’écoute et la lecture, des jalons de tests blancs et une semaine d’allègement.',
    h1: 'Générateur de plan d’étude TOEIC',
    intro: 'Un plan TOEIC repose sur une pratique quotidienne de l’écoute et de la lecture. Répondez à trois questions et recevez un emploi du temps adapté à votre date.',
    blocks: [
      { kind: 'h2', text: 'La structure du plan TOEIC' },
      { kind: 'ul', items: ['Écoute 3 jours par semaine (parties 1–4).', 'Lecture 3 jours par semaine (parties 5–7).', 'Vocabulaire chaque jour en contexte.', 'Un test blanc toutes les 2 semaines.', 'Dernière semaine : révision légère uniquement.'] },
      { kind: 'h2', text: 'Adapter le plan à votre point faible' },
      { kind: 'p', text: 'Si la partie 2 (question-réponse) est votre point faible, le générateur place l’écoute au premier plan. Traiter d’abord le point faible est le chemin le plus rapide.' },
    ],
    faq: [
      { q: '30 jours suffisent-ils pour le TOEIC ?', a: 'Suffisants pour gagner environ une bande estimée, à l’écoute surtout — la section la plus rapidement entraînable.' },
      { q: 'Dois-je chronométrer mes entraînements ?', a: 'Oui. Chronométrez tous vos entraînements : c’est ce que l’on ressent réellement le jour du test blanc, et un rythme imprévu est le principal ennemi du score.' },
    ],
    cta: diagnosticCta,
  },
  {
    slug: 'english-vocabulary-test',
    app: 'english-vocabulary-test',
    title: 'Test de vocabulaire anglais gratuit',
    description:
      'Testez votre vocabulaire anglais avec 10 questions issues de notre banque de mots — vocabulaire académique, scientifique, professionnel et universitaire.',
    h1: 'Test de vocabulaire anglais gratuit',
    intro: 'Une mesure rapide et honnête de l’étendue de votre vocabulaire anglais. Dix questions originales couvrant le vocabulaire académique, scientifique, professionnel et universitaire.',
    blocks: [
      { kind: 'h2', text: 'Ce que couvre le test' },
      { kind: 'table', headers: ['Domaine', 'Exemple de mot'], rows: [
        ['Académique', 'hypothesis, methodology'],
        ['Scientifique', 'phenomenon, evidence'],
        ['Professionnel', 'revenue, negotiate'],
        ['Universitaire', 'seminar, plagiarism'],
      ] },
      { kind: 'h2', text: 'Ce que suggère votre score' },
      { kind: 'p', text: 'Huit à dix bonnes réponses indiquent un vocabulaire académique étendu. Six ou moins suggèrent de démarrer votre plan par des familles de mots thématiques hebdomadaires — pas par des listes.' },
    ],
    faq: [
      { q: 'Comment ce test de vocabulaire est-il noté ?', a: 'Les bonnes réponses sont comptées et reliées à une bande simple. C’est une estimation, pas un test certifié.' },
      { q: 'Puis-je m’entraîner sur ces mots ensuite ?', a: 'Oui — la section vocabulaire de Prep-Anglais utilise la même banque de mots avec des cartes mémoire et des révisions espacées.' },
    ],
    cta: diagnosticCta,
  },
];

export function getTool(slug: string): ToolEntry | undefined {
  return tools.find((t) => t.slug === slug);
}