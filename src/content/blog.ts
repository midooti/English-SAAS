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
    title: 'Comment améliorer son Speaking TOEFL en 30 jours',
    description:
      'Un plan de 30 jours pour le Speaking TOEFL : exercices quotidiens de fluidité, l’astuce des 15 secondes de planification et la structure exacte de chaque tâche.',
    category: 'TOEFL',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-03-12',
    updatedAt: '2026-08-20',
    readingTimeMin: 6,
    excerpt:
      'Le Speaking est la section du TOEFL qui progresse le plus vite quand on s’entraîne de façon méthodique. Voici un plan jour par jour bâti sur l’astuce des 15 secondes de planification.',
    blocks: [
      { kind: 'p', text: 'La plupart des candidats classent le Speaking parmi leurs points faibles au TOEFL. La bonne nouvelle : c’est la compétence qui réagit le plus vite à l’entraînement, car la méthode s’acquiert en quelques jours, même si la fluidité demande des semaines.' },
      { kind: 'h2', text: 'Semaine 1 — Comprendre le format et la formule' },
      { kind: 'p', text: 'L’épreuve comprend quatre tâches. La tâche 1 exprime un avis personnel ; les tâches 2 à 4 sont intégratives (on lit ou on écoute, puis on répond). Toute tâche récompense le même squelette : affirmation → raison → exemple.' },
      { kind: 'example', label: 'La formule en action', text: '« Je préfère étudier seul, car cela me permet de gérer mon rythme. Par exemple, lorsque je revois du vocabulaire, les pauses brèves m’aident à retrouver les mots plus vite qu’en conversation de groupe. »' },
      { kind: 'h2', text: 'Semaine 2 — Exercices quotidiens de planification en 15 secondes' },
      { kind: 'ol', items: ['Choisissez un sujet au hasard.', 'Prenez 15 secondes pour noter un mot-clé par idée — jamais de phrases complètes.', 'Prononcez votre réponse en 45 secondes et enregistrez-vous.', 'Écoutez une fois et notez les endroits où vous avez hésité.'] },
      { kind: 'h2', text: 'Semaine 3 — Remplacer les tics de langage par le silence' },
      { kind: 'p', text: 'Comptez vos « euh » et vos « heu ». Remplacez chaque tic par une pause volontaire. La pause donne une impression de confiance ; le tic, une impression d’incertitude. Si vous devez marquer un temps d’arrêt, faites-le en silence.' },
      { kind: 'h2', text: 'Semaine 4 — Test blanc complet avec retour' },
      { kind: 'p', text: 'Passez une section Speaking complète en conditions réelles et écoutez votre enregistrement deux fois : une fois pour le contenu, une fois pour la forme. L’objectif n’est pas la perfection ; c’est que chaque réponse soit claire, structurée et dans le temps imparti.' },
      { kind: 'tip', text: 'La clarté prime sur la vitesse. Une réponse plus lente et bien structurée obtient un meilleur score qu’une réponse rapide et décousue.' },
    ],
    faq: [
      { q: 'Puis-je améliorer mon Speaking TOEFL en un mois ?', a: 'Oui — la plupart des candidats améliorent nettement leur fluidité et leur prestation en 30 jours. Des gains de l’ordre d’une bande sont réalistes lorsque l’habitude de planification en 15 secondes est travaillée chaque jour.' },
      { q: 'Dois-je m’enregistrer ?', a: 'Toujours. L’enregistrement est le seul miroir honnête : on y entend les hésitations et les erreurs de construction qui semblent invisibles pendant la prise de parole.' },
    ],
    relatedSlugs: ['toefl-vocabulary-strategies-that-actually-work', 'make-a-daily-study-plan-you-can-keep'],
  },
  {
    slug: 'toefl-vocabulary-strategies-that-actually-work',
    title: 'Stratégies de vocabulaire TOEFL qui fonctionnent vraiment',
    description:
      'Arrêtez de mémoriser des listes de mots. Apprenez le vocabulaire TOEFL par familles de mots, en contexte et selon un calendrier espacé.',
    category: 'TOEFL',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-05-02',
    readingTimeMin: 5,
    excerpt:
      'Les listes de mots, à elles seules, ne suffisent pas. Cet article présente les trois habitudes qui font tenir le vocabulaire TOEFL : les familles, le contexte et l’espacement.',
    blocks: [
      { kind: 'p', text: 'La tentation est d’apprendre une liste de 100 « mots du TOEFL ». Cela ne tient pas. Le vocabulaire s’acquiert durablement quand on l’apprend par familles, en contexte, sur plusieurs jours.' },
      { kind: 'h2', text: 'Apprendre des familles de mots, pas des mots isolés' },
      { kind: 'example', label: 'Une famille qui vaut la peine', text: 'analyze (verbe), analysis (nom), analytical (adjectif). Connaître un membre permet de retrouver les deux autres dans un même passage de lecture.' },
      { kind: 'h2', text: 'Apprendre en contexte' },
      { kind: 'p', text: 'Un mot entendu dans un cours magistral et réutilisé dans une rédaction vous appartient ; un mot lu sur une liste est simplement loué. Rédigez une phrase originale par mot, en lien avec votre vie ou votre domaine.' },
      { kind: 'h2', text: 'Espacer vos révisions' },
      { kind: 'ul', items: ['Aujourd’hui : apprenez 10 mots.', 'Demain : retrouvez-les de mémoire.', '+3 jours : révisez à nouveau.', '+1 semaine : rédigez un paragraphe d’essai en utilisant les 10 mots.'] },
      { kind: 'tip', text: 'Les exercices de vocabulaire de Prep-Anglais fonctionnent déjà ainsi : mots en contexte, cartes mémoire et un quiz qui réinterroge les mots déjà étudiés.' },
    ],
    faq: [
      { q: 'Combien de mots faut-il pour la section Reading du TOEFL ?', a: 'Une bonne maîtrise de l’Academic Word List, complétée par des lectures académiques fréquentes, vous donne l’étendue nécessaire — en pratique, autour du niveau de 3 500 à 5 000 mots.' },
      { q: 'Dois-je connaître tous les mots d’un passage ?', a: 'Non. Le TOEFL est conçu pour que les idées principales survivent à quelques mots inconnus. Apprenez à lire au-delà.' },
    ],
    relatedSlugs: ['learn-english-vocabulary-fast-and-remember-it', 'how-to-improve-toefl-speaking-in-30-days'],
  },
  {
    slug: 'toeic-listening-score-higher-parts-3-and-4',
    title: 'TOEIC Listening : réussir les parties 3 et 4',
    description:
      'Les conversations et les exposés sont les endroits où l’on perd des points à l’écoute du TOEIC. Apprenez la prédiction, la prise de notes et le rythme des trois questions.',
    category: 'TOEIC',
    author: { name: 'Khalid Benali' },
    publishedAt: '2026-06-14',
    readingTimeMin: 6,
    excerpt:
      'Les parties 3 et 4 décident de votre score d’écoute. Ce guide transforme leur rythme de trois questions en routine prévisible et entraînable.',
    blocks: [
      { kind: 'p', text: 'La partie 3 (conversations) et la partie 4 (exposés) diffusent chacune un enregistrement audio suivi de trois questions. L’audio n’est joué qu’une fois. Votre score dépend de la façon dont vous utilisez les secondes de préparation.' },
      { kind: 'h2', text: 'Utiliser la préparation pour anticiper' },
      { kind: 'p', text: 'Avant chaque extrait, trois questions sont déjà à l’écran. Lisez-les et anticipez : qui parle, où, et ce que le locuteur souhaite très probablement obtenir. L’audio confirme ensuite — ou corrige — votre attente.' },
      { kind: 'h2', text: 'Ne noter que ce que les questions exigent' },
      { kind: 'ul', items: ['Les personnes et leurs rôles (« le responsable », « la réceptionniste »).', 'Les nombres : heures, prix, dates.', 'Les actions : « reporter », « confirmer », « se plaindre ».'] },
      { kind: 'h2', text: 'Le rythme des trois questions' },
      { kind: 'ol', items: ['La question 1 porte généralement sur qui/quoi/où — répondez à partir du début de l’échange.', 'La question 2 porte généralement sur les détails — nombres et raisons.', 'La question 3 demande le plus souvent une inférence ou la suite des actions.'] },
      { kind: 'example', label: 'Un piège réaliste', text: 'Un message vocal annonce « la réunion a été déplacée à 14 heures ». La question porte sur l’horaire initial — 10 heures — qui n’apparaît qu’au début. La prise de notes évite cette erreur.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de questions dans les parties 3 et 4 ?', a: 'La partie 3 compte environ 39 questions (13 conversations) et la partie 4 environ 30 (10 exposés). Ensemble, elles dominent la section d’écoute.' },
      { q: 'Puis-je prendre des notes pendant l’écoute du TOEIC ?', a: 'Oui — le papier brouillon est autorisé, et bien l’utiliser est précisément ce que l’entraînement à la prédiction permet.' },
    ],
    relatedSlugs: ['toeic-reading-fast-comprehension-techniques', 'english-grammar-basics-for-test-takers'],
  },
  {
    slug: 'ielts-writing-task-2-band-7-structure',
    title: 'IELTS Writing Task 2 : la structure pour viser la bande 7',
    description:
      'Une structure réutilisable en quatre paragraphes pour l’IELTS Writing Task 2, qui répond au sujet, développe des exemples et reste cohérente.',
    category: 'IELTS',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-04-21',
    readingTimeMin: 7,
    excerpt:
      'Un bon score en rédaction tient surtout à la structure. Cet article vous donne le plan des paragraphes, la formule de l’exemple et les erreurs qui maintiennent les essais à la bande 6.',
    blocks: [
      { kind: 'p', text: 'Les examinateurs évaluent quatre critères : la réponse au sujet, la cohérence, le vocabulaire, la grammaire. La structure améliore les quatre à la fois — c’est pourquoi un plan fixe est l’outil le plus fiable pour gagner des points.' },
      { kind: 'h2', text: 'Le plan en quatre paragraphes' },
      { kind: 'table', headers: ['Paragraphe', 'Objectif', 'Mots'], rows: [
        ['Introduction', 'Reformulation + position', '40–50'],
        ['Paragraphe 1', 'Raison + exemple développé', '90–110'],
        ['Paragraphe 2', 'Seconde raison ou concession', '90–110'],
        ['Conclusion', 'Rappel de la position', '30–40'],
      ] },
      { kind: 'h2', text: 'La formule de l’exemple' },
      { kind: 'example', label: 'Un exemple développé vaut mieux qu’une simple citation', text: 'Faible : « Par exemple, de nombreuses entreprises embauchent des diplômés. » Solide : « Par exemple, un jeune diplômé que je connais a été embauché après un stage, car ce stage démontrait le travail d’équipe que les employeurs valorisent — un signe concret de compétence. »' },
      { kind: 'h2', text: 'Quatre erreurs qui vous plafonnent à la bande 6' },
      { kind: 'ul', items: ['Reformuler le sujet au lieu de prendre position dans l’introduction.', 'Citer un pays ou une entreprise sans explication.', 'Utiliser des introductions apprises par cœur qui ne correspondent pas au sujet.', 'Sauter la conclusion quand le temps manque.'] },
      { kind: 'tip', text: 'Rédigez la Task 2 à la main ou au clavier avec un chronomètre de 40 minutes, chaque jour. La structure ne devient automatique qu’à force de répétition.' },
    ],
    faq: [
      { q: 'Et si le sujet pose deux questions ?', a: 'Répondez explicitement aux deux — un paragraphe de développement pour chacune, plus une phrase de conclusion qui les évoque toutes deux.' },
      { q: 'Puis-je utiliser le même exemple dans la Task 1 et la Task 2 ?', a: 'Non. La Task 1 est un compte-rendu de données ; les exemples n’ont leur place que dans la Task 2.' },
    ],
    relatedSlugs: ['english-grammar-basics-for-test-takers', 'toeic-reading-fast-comprehension-techniques'],
  },
  {
    slug: 'learn-english-vocabulary-fast-and-remember-it',
    title: 'Apprendre le vocabulaire anglais vite (et s’en souvenir)',
    description:
      'La méthode fondée sur la science pour apprendre le vocabulaire rapidement : contexte, espacement et rappel actif. Avec une routine quotidienne de 20 minutes.',
    category: 'English Vocabulary',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-07-08',
    readingTimeMin: 5,
    excerpt:
      'Le bachotage fonctionne pour un quiz, pas pour un examen. Contexte, espacement et rappel actif sont les trois leviers qui rendent les mots permanents.',
    blocks: [
      { kind: 'p', text: 'Les recherches sur la mémoire sont unanimes : on retient ce que l’on rappelle activement, revu à des intervalles croissants. L’apprentissage du vocabulaire ne fait pas exception — c’en est au contraire l’exemple le plus net.' },
      { kind: 'h2', text: 'Le rappel actif vaut mieux que la relecture' },
      { kind: 'p', text: 'Cachez la définition et essayez de la retrouver à partir du seul mot. L’effort du rappel est précisément l’acte qui grave la mémoire. La relecture donne une impression de productivité et reste presque inutile.' },
      { kind: 'h2', text: 'L’espacement vaut mieux que l’accumulation' },
      { kind: 'ul', items: ['Jour 1 : apprenez 10 mots.', 'Jour 2 : retrouvez-les de mémoire.', 'Jour 4 : retrouvez-les à nouveau.', 'Jour 8 : rédigez des phrases avec les 10 mots.'] },
      { kind: 'h2', text: 'Le contexte vaut mieux que les listes' },
      { kind: 'example', label: 'Deux façons de rencontrer un mot', text: 'Liste : « significant = important. » Contexte : « Les résultats ont été significatifs, si bien que l’étude a modifié la politique de l’hôpital. » La seconde version est inoubliable, car elle contient une conséquence.' },
      { kind: 'tip', text: 'Le système de vocabulaire de Prep-Anglais fait déjà cela : les cartes mémoire testent le rappel, les révisions sont espacées et chaque mot apparaît avec un exemple.' },
    ],
    faq: [
      { q: 'Combien de mots puis-je apprendre par jour ?', a: '10 à 15 nouveaux mots avec un bon rappel est réaliste. Au-delà, c’est la révision — et non de nouveaux mots — qui devient généralement le goulot d’étranglement.' },
      { q: 'Ai-je besoin d’une application de cartes mémoire ?', a: 'Non. Des cartes papier, une application de notes ou les exercices de vocabulaire de Prep-Anglais fonctionnent tous — la méthode compte plus que l’outil.' },
    ],
    relatedSlugs: ['toefl-vocabulary-strategies-that-actually-work', 'make-a-daily-study-plan-you-can-keep'],
  },
  {
    slug: 'english-grammar-basics-for-test-takers',
    title: '5 règles de grammaire que chaque candidat à un test d’anglais doit maîtriser',
    description:
      'Les temps verbaux, les accords, les articles, les prépositions et la structure de la phrase — les cinq règles présentes dans tous les tests d’anglais.',
    category: 'English Grammar',
    author: { name: 'Khalid Benali' },
    publishedAt: '2026-05-27',
    readingTimeMin: 5,
    excerpt:
      'Aucun test d’anglais n’a de « section grammaire », et pourtant la grammaire influence chaque score. Ces cinq règles pèsent le plus lourd, au TOEFL comme au TOEIC et à l’IELTS.',
    blocks: [
      { kind: 'p', text: 'Tout grand test d’anglais évalue la grammaire indirectement : par la compréhension, la correction d’erreurs et la précision à l’écrit comme à l’oral. Corriger ces cinq règles fait progresser chaque score.' },
      { kind: 'h2', text: '1. Les temps verbaux portent le sens' },
      { kind: 'example', label: 'Le temps change le fait', text: '« La société a fermé la succursale » (le résultat compte aujourd’hui) contre « La société a fermé la succursale l’an dernier » (simple fait du passé). Les deux tournures sont correctes — mais une seule répond à la question du test.' },
      { kind: 'h2', text: '2. L’accord sujet-verbe' },
      { kind: 'p', text: 'Le verbe s’accorde avec le sujet, pas avec le nom le plus proche. Dans « The list of tasks is short », is s’accorde avec list.' },
      { kind: 'h2', text: '3. Les articles, un contrôle immédiatement visible' },
      { kind: 'p', text: 'a/an pour une première mention, the pour ce que l’on connaît déjà, article zéro pour les pluriels généraux. Les correcteurs natifs repèrent immédiatement un mauvais usage des articles.' },
      { kind: 'h2', text: '4. Les prépositions vivent dans des expressions figées' },
      { kind: 'p', text: 'Apprenez-les comme des unités fixes : responsible for, in charge of, apply to, depend on. La partie 5 du TOEIC teste exactement cela.' },
      { kind: 'h2', text: '5. Les limites de la phrase' },
      { kind: 'p', text: 'Les phrases incomplètes et les phrases à rallonge sont les signaux les plus nets d’une maîtrise fragile. Lisez vos écrits à voix haute — l’oreille perçoit ce que l’œil laisse passer.' },
      { kind: 'tip', text: 'Choisissez votre erreur la plus fréquente et travaillez-la pendant une semaine. Une règle maîtrisée par semaine vaut mieux que cinq règles à moitié apprises.' },
    ],
    faq: [
      { q: 'Dois-je connaître les termes de grammaire formels ?', a: 'Non. Il faut une maîtrise à l’usage, qui vient de la rencontre des règles en contexte, et non de leur simple énoncé.' },
      { q: 'La grammaire est-elle plus importante que le vocabulaire ?', a: 'Pour les scores d’écriture et d’oral, grammaire et vocabulaire pèsent à peu près à égalité. Pour la lecture, le vocabulaire l’emporte. Entraînez-vous aux deux.' },
    ],
    relatedSlugs: ['learn-english-vocabulary-fast-and-remember-it', 'ielts-writing-task-2-band-7-structure'],
  },
  {
    slug: 'make-a-daily-study-plan-you-can-keep',
    title: 'Construire un plan d’étude quotidien que vous tiendrez vraiment',
    description:
      'Les plans quotidiens échouent pour des raisons prévisibles. Construisez-en un avec un créneau fixe, un seul objectif et un score mesurable — et tenez-le deux mois.',
    category: 'Study Tips',
    author: { name: 'Marta Silva' },
    publishedAt: '2026-02-09',
    updatedAt: '2026-09-01',
    readingTimeMin: 6,
    excerpt:
      'Le meilleur outil d’étude est celui qui survit à votre deuxième semaine. Cet article présente la règle du créneau fixe, les séances à objectif unique et pourquoi un test blanc est le véritable indicateur.',
    blocks: [
      { kind: 'p', text: 'La plupart des plans d’étude meurent au sixième jour, non parce qu’étudier est difficile, mais parce que le plan avait été conçu pour une version idéale de vous. Construisez-en un pour le vrai vous, plutôt.' },
      { kind: 'h2', text: 'La règle du créneau fixe' },
      { kind: 'p', text: 'Choisissez les mêmes 20 à 30 minutes chaque jour — le moment que vous protégez déjà (avant le travail, après le dîner). Les habitudes déclenchées par un signal (« après mon café ») survivent mieux que celles fondées sur une disponibilité (« quand j’ai le temps »).' },
      { kind: 'h2', text: 'Un seul objectif par séance' },
      { kind: 'p', text: 'Une séance qui mélange lecture, vocabulaire et expression orale vous apprend à changer de tâche, pas à apprendre. Donnez à chaque jour un objectif : lundi la lecture, mardi l’écoute, et ainsi de suite.' },
      { kind: 'h2', text: 'Mesurer avec des tests blancs, pas avec l’humeur' },
      { kind: 'ol', items: ['Passez aujourd’hui un test de diagnostic gratuit pour établir votre niveau de départ.', 'Programmez un test blanc toutes les 2 semaines dans votre agenda.', 'Après chaque test blanc, écrivez une ligne : ce qui a progressé, ce qui n’a pas bougé.', 'Modifiez le plan quand le chiffre cesse de bouger — ne vous contentez pas d’ajouter des heures.'] },
      { kind: 'example', label: 'Un plan du lundi, version réaliste', text: '07 h 10, après le café : un passage de lecture chronométré de 12 minutes + la correction des erreurs, puis fin. Effort réel total : 20 minutes.' },
      { kind: 'tip', text: 'Rater un jour est une donnée, pas un échec. Deux jours manqués d’affilée signifient que le créneau est mal choisi — changez l’horaire, pas votre motivation.' },
    ],
    faq: [
      { q: 'Combien d’heures par jour dois-je étudier ?', a: '20 à 30 minutes concentrées par jour valent mieux que trois heures le week-end. La régularité se cumule ; l’intensité épuise.' },
      { q: 'Quand dois-je programmer mon test blanc ?', a: 'Toutes les deux semaines, un jour à faible stress. Le diagnostic de départ compte comme test blanc n° 1.' },
    ],
    relatedSlugs: ['how-to-improve-toefl-speaking-in-30-days', 'learn-english-vocabulary-fast-and-remember-it'],
  },
  {
    slug: 'english-level-for-university-abroad',
    title: 'Quel niveau d’anglais faut-il pour étudier à l’étranger ?',
    description:
      'Quel test d’anglais, quel score et comment y parvenir : une carte réaliste reliant CECRL, scores des tests et place à l’université à l’étranger.',
    category: 'University English',
    author: { name: 'Lena Popova' },
    publishedAt: '2026-08-06',
    readingTimeMin: 7,
    excerpt:
      'L’entrée à l’université consiste à satisfaire une exigence : le test accepté par votre université, le score qui fait la différence et le temps nécessaire pour l’atteindre.',
    blocks: [
      { kind: 'h2', text: 'Choisir le test en fonction de votre destination' },
      { kind: 'table', headers: ['Région', 'Tests courants'], rows: [
        ['États-Unis / Canada', 'TOEFL, IELTS Academic, Duolingo English Test'],
        ['Royaume-Uni / Australie', 'IELTS Academic, TOEFL'],
        ['France / Union européenne', 'IELTS, TOEFL, TOEIC (programmes), Cambridge'],
        ['International (en ligne)', 'Duolingo English Test (rapide, adaptatif)'],
      ] },
      { kind: 'h2', text: 'Les exigences types pour chaque test' },
      { kind: 'ul', items: ['TOEFL : 80–100 sur 120 dans la plupart des universités.', 'IELTS Academic : 6.0–7.0 au global, souvent avec des minimas par section.', 'Duolingo English Test : 100–120 dans les programmes habituels.', 'Score estimé Prep-Anglais : environ 5.5–6.5 pour l’entrée en licence.'] },
      { kind: 'h2', text: 'Combien de temps pour y arriver ?' },
      { kind: 'p', text: 'Une bande complète de progrès réel demande environ 10 à 12 semaines de pratique quotidienne. Planifiez à rebours depuis la date limite de candidature et réservez votre examen au moins 6 semaines avant cette date.' },
      { kind: 'h2', text: 'Que faire dès la première semaine' },
      { kind: 'ol', items: ['Confirmez quel test votre université de premier choix accepte.', 'Passez le diagnostic gratuit Prep-Anglais pour estimer votre niveau actuel.', 'Fixez un objectif dans l’échelle réelle du test choisi.', 'Construisez le plan quotidien de 30 minutes et programmez des tests blancs toutes les 2 semaines.'] },
      { kind: 'tip', text: 'Les candidats titulaires d’une offre conditionnelle n’ont souvent besoin que d’une demi-bande d’amélioration — un objectif réaliste qu’un plan de 6 à 8 semaines peut atteindre.' },
    ],
    faq: [
      { q: 'Faut-il le même score pour tous les programmes ?', a: 'Non. Les programmes d’ingénierie et de sciences exigent souvent moins d’anglais que le droit, le journalisme ou l’enseignement. Vérifiez la page de chaque programme.' },
      { q: 'Puis-je soumettre un score estimé Prep-Anglais ?', a: 'Non — les universités exigent le test officiel. Prep-Anglais vous aide à estimer votre niveau et à vous y préparer.' },
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