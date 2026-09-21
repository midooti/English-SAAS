/**
 * content/exams.ts — Pages SEO des sections d'examen (TOEFL, TOEIC, IELTS).
 *
 * Contenu original et pédagogique, écrit pour des humains. Chaque page a un
 * H1, une intro, des sections complètes, des exemples, FAQ, liens internes.
 * Topics (sous-pages /toefl/vocabulary/academic, ...) : contenu réel unique.
 */
import type { SeoPageData } from '@/content/types';

const toeflCta = {
  title: 'Commencez par un diagnostic TOEFL gratuit',
  text: 'Répondez à une dizaine de questions originales et obtenez un score estimé en 10 minutes.',
  href: '/diagnostic',
  label: 'Diagnostic TOEFL gratuit',
};

/* ------------------------------------------------------------------ */
/* TOEFL sections                                                      */
/* ------------------------------------------------------------------ */

export const toeflSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'Préparation au TOEFL',
    title: 'Préparation au TOEFL — comment se préparer en 2026 | Prep-Anglais',
    description:
      'Un guide pratique de préparation au TOEFL : comprendre le format du test, établir un plan d’étude et s’entraîner avec des questions originales gratuites.',
    intro:
      'Se préparer au TOEFL, c’est passer de « je veux passer le TOEFL » à « je suis prêt le jour de l’examen ». Ce guide explique le fonctionnement du test et propose une démarche concrète, semaine par semaine.',
    blocks: [
      { kind: 'h2', text: 'Qu’est-ce que le TOEFL ?' },
      {
        kind: 'p',
        text: 'Le TOEFL iBT évalue votre capacité à utiliser et à comprendre l’anglais au niveau universitaire. Il est accepté par plus de 11 000 établissements dans le monde et couvre quatre compétences : Reading, Listening, Speaking et Writing.',
      },
      { kind: 'h2', text: 'Comment le test est organisé' },
      {
        kind: 'table',
        headers: ['Section', 'Contenu', 'Durée approximative'],
        rows: [
          ['Reading', '3 à 4 passages académiques, 10 questions chacun', '54–72 min'],
          ['Listening', 'Cours magistraux et conversations', '41–57 min'],
          ['Speaking', '4 tâches, indépendante + intégrées', '17 min'],
          ['Writing', '1 tâche intégrée + 1 rédaction indépendante', '50 min'],
        ],
      },
      { kind: 'h2', text: 'Combien de temps faut-il pour se préparer au TOEFL ?' },
      {
        kind: 'p',
        text: 'La plupart des apprenants ont besoin de 6 à 12 semaines de pratique régulière et quotidienne. Notre estimation : 30 minutes par jour d’entraînement ciblé pendant 8 semaines font généralement progresser le score estimé de 0,5 à 1,0 bande. La régularité prime sur le bachotage.',
      },
      { kind: 'tip', text: 'Fixez d’abord la date de votre examen, puis comptez à rebours, avec 20 à 30 minutes de pratique quotidienne comme socle minimum.' },
      { kind: 'h2', text: 'Par où commencer' },
      {
        kind: 'ol',
        items: [
          'Faites un diagnostic gratuit pour estimer votre score actuel.',
          'Identifiez votre compétence la plus faible (pour la plupart, le Speaking).',
          'Entraînez-vous chaque jour avec des exercices ciblés par thème et par compétence.',
          'Passez un test blanc chronométré toutes les 2 semaines pour mesurer vos progrès.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple',
        text: 'Si votre score de Listening estimé est de 4,0 et votre objectif de 5,5, une séance hebdomadaire devrait être consacrée à la pratique du Listening avec prise de notes, complétée par 2 courts extraits audio par jour.',
      },
    ],
    faq: [
      { q: 'Le TOEFL est-il identique à l’IELTS ?', a: 'Non. Le TOEFL et l’IELTS évaluent des compétences similaires, mais selon un format différent. Le TOEFL est entièrement informatisé et repose le plus souvent sur des questions à choix multiple ; l’IELTS comprend un test d’expression orale en face à face ou sur ordinateur et un mélange de types de questions.' },
      { q: 'Combien de fois puis-je passer le TOEFL ?', a: 'Autant de fois que nécessaire, sans limite ; il faut simplement s’inscrire à chaque session. De nombreuses universités retiennent votre meilleur score.' },
      { q: 'Ai-je besoin d’un professeur pour le TOEFL ?', a: 'Non. Un travail personnel structuré, avec les bonnes ressources et des tests blancs réguliers, suffit pour la plupart des apprenants.' },
      { q: 'Combien de temps prend un diagnostic gratuit ?', a: 'Environ 10 minutes sur Prep-Anglais, avec un score estimé disponible immédiatement.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'La section Listening du TOEFL', href: '/toefl/listening' },
      { label: 'La section Speaking du TOEFL', href: '/toefl/speaking' },
      { label: 'La section Writing du TOEFL', href: '/toefl/writing' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
      { label: 'Plan d’étude TOEFL', href: '/toefl/study-plan' },
      { label: 'Score TOEFL expliqué', href: '/toefl/score' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
    ],
    tools: [{ label: 'Générateur de plan d’étude TOEFL', href: '/tools/toefl-study-plan-generator' }],
    cta: toeflCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'Test blanc TOEFL',
    title: 'Test blanc TOEFL — score estimé gratuit | Prep-Anglais',
    description:
      'Faites un test blanc TOEFL gratuit avec des questions originales, un minuteur et un score estimé. Entraînez-vous aux sections Reading, Listening, Speaking et Writing.',
    intro:
      'Un test blanc est le meilleur moyen de situer votre niveau. Cette page d’entraînement au TOEFL vous propose des exercices gratuits pour chaque section, avec un score estimé à la fin.',
    blocks: [
      { kind: 'h2', text: 'Pourquoi passer un test blanc dès le début' },
      {
        kind: 'ul',
        items: [
          'Il révèle votre score estimé actuel avant d’investir des semaines d’étude.',
          'Il met en évidence votre compétence la plus faible, pour que votre plan l’aborde en priorité.',
          'Il entraîne à la gestion du temps d’examen et réduit le stress le jour du test.',
        ],
      },
      { kind: 'h2', text: 'À quoi s’attendre avec un test blanc TOEFL' },
      {
        kind: 'p',
        text: 'Un test blanc réaliste suit l’ordre et le minutage réels des sections. Les questions ci-dessous sont un contenu original de Prep-Anglais : elles entraînent les mêmes compétences que les items officiels, sans les reproduire.',
      },
      { kind: 'tip', text: 'Passez votre premier test blanc sans préparation. L’objectif est d’obtenir un point de départ, pas un bon score.' },
      { kind: 'h2', text: 'Comment utiliser les tests blancs' },
      {
        kind: 'ol',
        items: [
          'Faites le diagnostic maintenant (gratuit, ~10 minutes).',
          'Repassez un test blanc chronométré toutes les 2 semaines.',
          'Revoyez chaque erreur : notez pourquoi la bonne réponse est la bonne.',
          'Suivez l’évolution de votre score estimé ; visez une progression régulière, pas la perfection.',
        ],
      },
      {
        kind: 'example',
        label: 'Question d’entraînement — Reading (idée principale)',
        text: 'Un article universitaire consacré aux arbres en ville évoque leurs bienfaits pour la qualité de l’air, l’ombre et la santé mentale. Question : de quoi l’article parle-t-il principalement ? Réponse : les bienfaits des arbres en ville.',
      },
    ],
    faq: [
      { q: 'Un test blanc est-il identique au vrai TOEFL ?', a: 'Non. Les tests blancs Prep-Anglais utilisent des questions originales et donnent un score estimé à titre indicatif. Seuls les tests officiels de l’ETS sont de véritables tests TOEFL.' },
      { q: 'Combien de tests blancs dois-je passer ?', a: 'Un toutes les deux semaines est un bon rythme. Entre deux tests, travaillez les compétences chaque jour.' },
      { q: 'Le test blanc Prep-Anglais est-il gratuit ?', a: 'Oui. Le diagnostic et une pratique quotidienne limitée sont entièrement gratuits.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'Exercices de Reading TOEFL', href: '/toefl/reading' },
      { label: 'Exercices de Listening TOEFL', href: '/toefl/listening' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
    ],
    tools: [{ label: 'Test de niveau d’anglais', href: '/tools/english-level-test' }],
    cta: toeflCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'Entraînement au Reading du TOEFL',
    title: 'Entraînement au Reading du TOEFL — questions et exercices gratuits | Prep-Anglais',
    description:
      'Entraînement gratuit au Reading du TOEFL : types de questions, extraits de passages, conseils et exercices. Améliorez votre compréhension, votre capacité d’inférence et votre vocabulaire en contexte.',
    intro:
      'Le Reading du TOEFL évalue votre capacité à comprendre des passages de niveau universitaire. Cette page présente les types de questions, les pièges courants, et vous propose un entraînement gratuit.',
    blocks: [
      { kind: 'h2', text: 'Ce que mesure le Reading du TOEFL' },
      { kind: 'p', text: 'Vous lisez 3 à 4 passages académiques et répondez à environ 10 questions pour chacun. Les passages proviennent de manuels : sciences, histoire, art, biologie et plus encore.' },
      { kind: 'h2', text: 'Les types de questions courants du Reading du TOEFL' },
      {
        kind: 'table',
        headers: ['Type', 'Ce que vous devez faire'],
        rows: [
          ['Idée principale', 'Identifier le propos général du passage'],
          ['Détail', 'Repérer une information formulée explicitement'],
          ['Inférence', 'Tirer une conclusion sous-entendue, non énoncée'],
          ['Vocabulaire en contexte', 'Choisir le sens d’un mot tel qu’il est employé dans le passage'],
          ['Objectif', 'Expliquer pourquoi l’auteur inclut un détail'],
          ['Insertion de phrase', 'Placer une phrase là où elle convient le mieux'],
        ],
      },
      { kind: 'h2', text: 'Comment s’entraîner au Reading du TOEFL' },
      {
        kind: 'ol',
        items: [
          'Lisez la première phrase de chaque paragraphe pour cartographier la structure.',
          'Répondez à la question d’idée principale en dernier, après avoir vu les détails.',
          'Pour les questions d’inférence, ne choisissez que des réponses directement appuyées par le texte.',
          'Chronométrez-vous : environ 20 minutes par passage de 10 questions.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple — vocabulaire en contexte',
        text: '« The glaciers receded, exposing broad valleys. » Receded signifie ici, au plus près : (a) advanced (b) retreated (c) flooded (d) formed. Bonne réponse : (b) retreated.',
      },
      { kind: 'tip', text: 'Lisez de l’anglais académique chaque jour — la rubrique scientifique d’un journal ou un article mis en avant sur Wikipédia. Cela construit exactement le vocabulaire qu’utilise le test.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de passages dans le Reading du TOEFL ?', a: 'En général 3 passages. Si le test comporte une section expérimentale, vous pouvez voir un 4ᵉ passage qui n’est pas comptabilisé.' },
      { q: 'Puis-je répondre au hasard dans le Reading du TOEFL ?', a: 'Oui : il n’y a aucune pénalité pour une réponse fausse, ne laissez donc jamais une question sans réponse.' },
      { q: 'Comment améliorer ma vitesse de lecture au TOEFL ?', a: 'Entraînez-vous à l’écrémage (première phrase de chaque paragraphe) et chronométrez chaque exercice. La vitesse suit la pratique régulière.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'TOEFL Reading : l’idée principale', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading : l’inférence', href: '/toefl/reading/inference' },
      { label: 'TOEFL Reading : le vocabulaire en contexte', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'Exercices gratuits de Reading TOEFL', href: '/practice/toefl-reading' }],
    cta: toeflCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'Entraînement au Listening du TOEFL',
    title: 'Entraînement au Listening du TOEFL — exercices gratuits | Prep-Anglais',
    description:
      'Entraînez-vous au Listening du TOEFL avec des exercices originaux : cours magistraux et conversations, conseils de prise de notes et pièges courants de la compréhension académique à l’oral.',
    intro:
      'Le Listening du TOEFL utilise des cours magistraux et des conversations de campus pour évaluer la compréhension académique à l’oral. Progressez avec un bon système de prise de notes et une pratique quotidienne.',
    blocks: [
      { kind: 'h2', text: 'À quoi ressemble le Listening du TOEFL' },
      { kind: 'p', text: 'Vous entendez un cours de 4 à 6 minutes ou une conversation de 2 à 3 minutes, puis vous répondez à des questions sur l’idée principale, les détails, l’objectif et l’attitude du locuteur. Vous ne pouvez pas réécouter : les notes comptent.' },
      { kind: 'h2', text: 'Une méthode efficace de prise de notes' },
      {
        kind: 'ol',
        items: [
          'Écrivez uniquement des mots-clés, jamais des phrases complètes.',
          'Notez la structure : introduction, exemple, contraste, conclusion.',
          'Marquez les transitions (« however », « for example », « in conclusion »).',
          'Retranscrivez les noms et les nombres exactement comme vous les entendez.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple — l’objectif du locuteur',
        text: 'Un professeur dit : « Let me give you a case where this theory failed. » L’objectif est d’illustrer une limite de la théorie, pas d’introduire une nouvelle théorie.',
      },
      { kind: 'tip', text: 'Entraînez-vous avec des reportages de 3 minutes : écoutez une fois sans notes, une fois avec notes, puis résumez à voix haute en 30 secondes.' },
    ],
    faq: [
      { q: 'Puis-je prendre des notes pendant le Listening du TOEFL ?', a: 'Oui, les notes sont autorisées et encouragées. Vous pouvez écrire sur le papier brouillon.' },
      { q: 'Pourquoi est-ce que je rate des questions de Listening au TOEFL ?', a: 'Le plus souvent par manque de concentration ou parce que les notes ne capturent que le sujet du cours, pas sa structure et ses exemples.' },
      { q: 'Combien de temps dure la section Listening du TOEFL ?', a: '41 à 57 minutes selon qu’il y a une section expérimentale ou non.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Exercices de Listening TOEIC', href: '/toeic/listening' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'speaking',
    intent: 'problem-solving',
    h1: 'Comment améliorer votre Speaking au TOEFL',
    title: 'Améliorer son Speaking au TOEFL — conseils et entraînement | Prep-Anglais',
    description:
      'Améliorez votre Speaking au TOEFL avec des stratégies de préparation, l’astuce des 15 secondes de préparation, des exercices d’aisance et des tâches d’entraînement gratuites.',
    intro:
      'Le Speaking est la section que la plupart des apprenants redoutent, et celle qui progresse le plus vite avec la bonne méthode. Cette page vous donne cette méthode.',
    blocks: [
      { kind: 'h2', text: 'Le format du Speaking du TOEFL' },
      {
        kind: 'table',
        headers: ['Tâche', 'Type', 'Préparation / réponse'],
        rows: [
          ['Tâche 1', 'Indépendante — opinion personnelle', '15 s / 45 s'],
          ['Tâche 2', 'Intégrée — annonce sur le campus', '30 s / 60 s'],
          ['Tâche 3', 'Intégrée — cours magistral académique', '30 s / 60 s'],
          ['Tâche 4', 'Intégrée — cours avec exemple', '20 s / 60 s'],
        ],
      },
      { kind: 'h2', text: 'L’astuce des 15 secondes de préparation' },
      {
        kind: 'p',
        text: 'Votre temps de préparation est court : n’écrivez pas de phrases. Écrivez un mot-clé par idée. Pour la tâche 1, la structure est : affirmation → raison → exemple. Pour les tâches intégrées, notez l’annonce ou le concept, plus un exemple.',
      },
      { kind: 'h2', text: 'Gagner rapidement en aisance à l’oral' },
      {
        kind: 'ul',
        items: [
          'Enregistrez-vous en répondant pendant 45 secondes, puis réécoutez une fois.',
          'Répétez à voix haute le même sujet jusqu’à ce que votre deuxième essai soit nettement plus clair.',
          'Évitez les mots de remplissage : entraînez-vous à « faire une pause, puis reprendre » au lieu de « euh ».',
          'Reproduisez des extraits audio natifs : répétez ce que vous entendez avec une seconde de décalage.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple de sujet',
        text: '« Do you prefer studying alone or in groups? Why? » Début de réponse : « I prefer studying alone because it lets me control my pace. For example, when I review vocabulary, silence helps me recall words faster than group discussion would. »',
      },
      { kind: 'tip', text: 'La précision importe moins que la clarté. Une réponse claire et plus lente obtient un meilleur score qu’une réponse rapide et confuse.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de tâches d’expression orale au TOEFL ?', a: 'Quatre tâches : une indépendante et trois intégrées.' },
      { q: 'Le Speaking du TOEFL est-il enregistré ou se passe-t-il avec un examinateur ?', a: 'Il est enregistré et noté par un mélange de systèmes automatisés et de correcteurs humains.' },
      { q: 'Les accents comptent-ils au TOEFL ?', a: 'Seulement s’ils gênent la compréhension. Un accent non natif clair est tout à fait acceptable.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'La section Writing du TOEFL', href: '/toefl/writing' },
      { label: 'La section Listening du TOEFL', href: '/toefl/listening' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'writing',
    intent: 'problem-solving',
    h1: 'Entraînement au Writing du TOEFL',
    title: 'Entraînement au Writing du TOEFL — tâches, modèles et conseils | Prep-Anglais',
    description:
      'Entraînez-vous au Writing du TOEFL : la dissertation intégrée et la dissertation indépendante, la gestion du temps, la structure et des tâches d’entraînement gratuites.',
    intro:
      'Le Writing du TOEFL comporte deux tâches. Toutes deux récompensent une structure claire plutôt qu’un vocabulaire recherché. Voici comment les organiser et vous entraîner.',
    blocks: [
      { kind: 'h2', text: 'Les deux tâches du Writing du TOEFL' },
      {
        kind: 'table',
        headers: ['Tâche', 'Ce que vous faites', 'Durée'],
        rows: [
          ['Intégrée', 'Lire un court passage, écouter un cours, puis résumer comment ils se complètent', '20 min'],
          ['Indépendante', 'Rédiger une dissertation défendant une opinion sur un sujet familier', '30 min'],
        ],
      },
      { kind: 'h2', text: 'Une structure qui fonctionne toujours' },
      {
        kind: 'ul',
        items: [
          'Intégrée : introduction (ce que soutient le cours) → 3 points où le cours s’oppose à la lecture.',
          'Indépendante : introduction avec position claire → 2 à 3 paragraphes de développement, chacun avec une raison + un exemple → courte conclusion.',
          'Utilisez des connecteurs : « In contrast », « For example », « As a result ».',
        ],
      },
      { kind: 'h2', text: 'La vitesse de frappe compte plus que vous ne le pensez' },
      { kind: 'p', text: 'Vous tapez sur un clavier. Gardez 3 à 4 minutes à la fin pour relire : les formes verbales erronées et les –s du pluriel manquants sont les erreurs les plus fréquentes que remarquent les correcteurs.' },
      {
        kind: 'example',
        label: 'Exemple de sujet indépendant',
        text: '« Some universities require a public speaking course. Do you agree or disagree? » Bon début de réponse : « I agree, because public speaking builds a skill that every profession uses, and practising in class reduces the fear that blocks most students. »',
      },
      { kind: 'tip', text: 'Rédigez 5 dissertations tapées par semaine en gardant le même modèle. Votre cerveau automatisera la structure le jour du vrai test.' },
    ],
    faq: [
      { q: 'Comment le Writing du TOEFL est-il noté ?', a: 'Chaque tâche est notée de 0 à 5 et les deux notes sont combinées en un score de section Writing. Un ordinateur et un correcteur humain évaluent tous deux.' },
      { q: 'Puis-je écrire plus de 300 mots pour la tâche indépendante ?', a: 'Oui, mais la qualité compte plus que la longueur. De 300 à 450 mots bien structurés, c’est une fourchette confortable.' },
      { q: 'Les fautes de grammaire ruinent-elles mon score ?', a: 'Pas à elles seules. Les correcteurs regardent d’abord le développement et la clarté ; des fautes mineures et récurrentes coûtent peu si la dissertation reste claire.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'La section Speaking du TOEFL', href: '/toefl/speaking' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'Vocabulaire TOEFL',
    title: 'Vocabulaire TOEFL — listes, conseils et entraînement gratuit | Prep-Anglais',
    description:
      'Développez votre vocabulaire TOEFL de la bonne manière : familles de mots académiques, méthodes d’apprentissage, et cartes mémoire et quiz gratuits.',
    intro:
      'Le vocabulaire du TOEFL, c’est l’anglais académique. Vous n’avez pas besoin de 10 000 mots : il vous faut les mots académiques à haute fréquence et l’habitude de les apprendre en contexte.',
    blocks: [
      { kind: 'h2', text: 'Quels mots comptent pour le TOEFL' },
      {
        kind: 'p',
        text: 'La liste de mots académiques couvre le vocabulaire que l’on retrouve dans les disciplines universitaires : analyze, significant, hypothesis, methodology, coherent. Ces mots apparaissent constamment dans les sections Reading et Listening du TOEFL.',
      },
      { kind: 'h2', text: 'Comment apprendre un vocabulaire TOEFL durable' },
      {
        kind: 'ol',
        items: [
          'Apprenez les mots par groupes thématiques : académique, sciences, affaires, université.',
          'Apprenez la famille de mots : analyze, analysis, analytical — pas un mot isolé.',
          'Rédigez une phrase originale par mot.',
          'Révisez avec des cartes mémoire selon un rythme espacé (aujourd’hui, demain, dans 3 jours, dans une semaine).',
        ],
      },
      { kind: 'h2', text: 'Entraînement gratuit' },
      {
        kind: 'p',
        text: 'Prep-Anglais propose des cartes mémoire et des quiz de vocabulaire TOEFL gratuits, ainsi que des pages d’entraînement pour le vocabulaire académique, scientifique, professionnel et universitaire.',
      },
      {
        kind: 'example',
        label: 'Exemple — un mot en contexte',
        text: '« The study’s findings are significant because they change how we treat the disease. » Significant signifie ici important et lourd de conséquences, et non simplement mesurable.',
      },
      { kind: 'tip', text: 'Lisez un article académique par semaine et soulignez chaque mot que vous ne pourriez pas réemployer dans votre propre écrit. Vous rencontrerez exactement le vocabulaire utilisé par le test.' },
    ],
    faq: [
      { q: 'Combien de mots faut-il pour le TOEFL ?', a: 'Une base solide représente environ 3 500 à 5 000 mots actifs, centrés sur la liste de mots académiques et le vocabulaire de lecture académique.' },
      { q: 'Les mots du TOEFL sont-ils les mêmes que l’anglais courant ?', a: 'En partie. Les mots courants apparaissent, mais les familles de mots académiques et les verbes à particule dominent les sections de lecture et d’écoute.' },
      { q: 'Prep-Anglais propose-t-il du vocabulaire officiel du TOEFL ?', a: 'Non : nos listes et nos exercices sont un contenu original conçu pour travailler le même vocabulaire académique.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'Vocabulaire TOEFL : académique', href: '/toefl/vocabulary/academic' },
      { label: 'Vocabulaire TOEFL : sciences', href: '/toefl/vocabulary/science' },
      { label: 'Vocabulaire TOEFL : affaires', href: '/toefl/vocabulary/business' },
      { label: 'Vocabulaire TOEFL : université', href: '/toefl/vocabulary/university' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'grammar',
    intent: 'informational',
    h1: 'Grammaire du TOEFL',
    title: 'Grammaire du TOEFL — les règles qui comptent vraiment | Prep-Anglais',
    description:
      'Le TOEFL n’a pas de section de grammaire, mais la grammaire influe sur vos scores de Reading, de Writing et de Speaking. Concentrez-vous sur ces 5 règles.',
    intro:
      'Il n’existe pas de section de grammaire distincte au TOEFL. La grammaire compte néanmoins énormément : elle soutient la compréhension en Reading, la correction en Writing et la clarté en Speaking.',
    blocks: [
      { kind: 'h2', text: 'Les 5 domaines de grammaire les plus importants' },
      {
        kind: 'table',
        headers: ['Domaine', 'Pourquoi c’est important'],
        rows: [
          ['Les temps du verbe', 'Les confusions passé/présent changent le sens factuel de votre écrit'],
          ['L’accord sujet-verbe', 'Un signal visible de maîtrise, facile à corriger'],
          ['Les articles (a/an/the)', 'Des erreurs fréquentes fragilisent une dissertation par ailleurs solide'],
          ['Les prépositions', 'Tournures figées et collocations académiques'],
          ['La structure de la phrase', 'Éviter les phrases incomplètes et à rallonge garde vos idées claires'],
        ],
      },
      { kind: 'h2', text: 'Comment étudier la grammaire pour le TOEFL' },
      {
        kind: 'ol',
        items: [
          'Identifiez vos erreurs récurrentes à partir de vos exercices écrits (le passé est le plus courant pour la plupart).',
          'Travaillez une règle par jour dans des phrases originales sur votre vie.',
          'Relisez chaque dissertation à voix haute : les erreurs s’entendent plus facilement qu’elles ne se voient.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple — l’accord',
        text: 'Incorrect : « The results of the experiment was surprising. » Correct : « The results of the experiment were surprising. » Le verbe s’accorde avec « results », pas avec « experiment ».',
      },
      { kind: 'tip', text: 'Corrigez vos 3 erreurs de grammaire les plus récurrentes avant d’apprendre de la nouvelle grammaire. C’est le gain de score visible le plus rapide.' },
    ],
    faq: [
      { q: 'Y a-t-il une section de grammaire au TOEFL ?', a: 'Non. La grammaire est évaluée indirectement à travers la compréhension (Reading), le Writing et le Speaking.' },
      { q: 'Quelle grammaire faut-il pour la dissertation du TOEFL ?', a: 'Une maîtrise solide des temps, des accords, des articles et des frontières de phrases claires. Les structures avancées comme l’inversion sont facultatives.' },
      { q: 'Les fautes de grammaire affectent-elles mon score d’expression orale ?', a: 'Seulement si elles gênent la compréhension. Parlez clairement et simplement plutôt que de risquer une structure complexe que vous ne maîtrisez pas.' },
    ],
    internalLinks: [
      { label: 'La section Writing du TOEFL', href: '/toefl/writing' },
      { label: 'La section Speaking du TOEFL', href: '/toefl/speaking' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'Score TOEFL expliqué',
    title: 'Score TOEFL : échelle et signification — de 0 à 9 | Prep-Anglais',
    description:
      'Comprenez les scores du TOEFL : l’échelle de 0 à 9 utilisée par les estimations Prep-Anglais, comment fonctionne la notation et quel devrait être votre score cible.',
    intro:
      'Comprendre votre score TOEFL est la première étape d’un plan d’étude réaliste. Cette page explique l’échelle et ce que signifie chaque niveau.',
    blocks: [
      { kind: 'h2', text: 'Comment le TOEFL est noté' },
      {
        kind: 'p',
        text: 'Le TOEFL officiel attribue à chaque section un score de 0 à 30 et un total de 0 à 120, complété par une fourchette de 0 à 6 pour le Speaking. Prep-Anglais utilise une bande estimée de 0 à 9 pour rendre votre niveau lisible en un coup d’œil.',
      },
      { kind: 'h2', text: 'Ce que signifie votre bande estimée' },
      {
        kind: 'table',
        headers: ['Bande', 'Niveau'],
        rows: [
          ['3.0–3.9', 'Élémentaire — comprend les textes et discours simples'],
          ['4.0–4.9', 'Intermédiaire faible — compréhension académique de base'],
          ['5.0–5.9', 'Intermédiaire — socle solide pour un cursus préparatoire'],
          ['6.0–6.5+', 'Intermédiaire avancé+ — à l’aise dans un environnement académique'],
        ],
      },
      { kind: 'h2', text: 'Quel objectif choisir ?' },
      { kind: 'p', text: 'Les exigences universitaires habituelles correspondent environ à une bande estimée de 5,5 à 6,5. Vérifiez l’exigence précise de votre établissement cible, puis construisez votre plan en conséquence.' },
      { kind: 'tip', text: 'Les scores estimés ne servent qu’à planifier : seul le test officiel peut certifier votre score TOEFL.' },
    ],
    faq: [
      { q: 'La bande Prep-Anglais est-elle un score TOEFL officiel ?', a: 'Non. Prep-Anglais fournit des bandes d’entraînement estimées à titre indicatif. Nous ne sommes pas affiliés à l’ETS.' },
      { q: 'Qu’est-ce qu’un bon score au TOEFL ?', a: 'Cela dépend de votre objectif. Pour de nombreuses universités, un total d’environ 80 à 100 sur 120, soit à peu près une bande de 5,5 à 6,5 ici, est courant.' },
      { q: 'Les scores TOEFL expirent-ils ?', a: 'Oui, les scores TOEFL officiels sont valables deux ans à compter de la date du test.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'Plan d’étude TOEFL', href: '/toefl/study-plan' },
      { label: 'Score TOEIC', href: '/toeic/score' },
      { label: 'Score IELTS', href: '/ielts/score' },
    ],
    tools: [{ label: 'Calculateur de score TOEFL', href: '/tools/toefl-score-calculator' }],
    cta: toeflCta,
  },
  {
    slug: 'study-plan',
    intent: 'planning',
    h1: 'Plan d’étude TOEFL',
    title: 'Plan d’étude TOEFL — modèles 30 et 60 jours | Prep-Anglais',
    description:
      'Construisez un plan d’étude TOEFL réaliste sur 30 ou 60 jours : priorités hebdomadaires, programme quotidien et indicateurs à mesurer chaque semaine.',
    intro:
      'Un plan d’étude TOEFL transforme des objectifs vagues en habitude quotidienne. Utilisez le modèle ci-dessous pour bâtir un plan adapté à votre niveau actuel.',
    blocks: [
      { kind: 'h2', text: 'Le rythme hebdomadaire' },
      {
        kind: 'table',
        headers: ['Jour', 'Objectif (30 min)'],
        rows: [
          ['Lun', 'Pratique du Reading (passage chronométré)'],
          ['Mar', 'Pratique du Listening (cours + prise de notes)'],
          ['Mer', 'Vocabulaire (nouveaux mots + révision)'],
          ['Jeu', 'Speaking (2 tâches enregistrées)'],
          ['Ven', 'Writing (1 courte rédaction)'],
          ['Sam', 'Révision des compétences combinées'],
          ['Dim', 'Repos / légère révision du vocabulaire'],
        ],
      },
      { kind: 'h2', text: 'Le plan sur 30 jours' },
      {
        kind: 'ol',
        items: [
          'Semaine 1 : diagnostic + mise en place de l’habitude quotidienne à 20 minutes.',
          'Semaine 2 : concentration sur votre compétence la plus faible, à raison de 30 minutes par jour.',
          'Semaine 3 : ajout d’un test blanc chronométré + exercices ciblés sur les points faibles.',
          'Semaine 4 : deux tests blancs chronométrés, révision de toutes les erreurs, repos avant le jour du test.',
        ],
      },
      { kind: 'h2', text: 'Le plan sur 60 jours' },
      { kind: 'p', text: 'Suivez le même rythme, mais consacrez les semaines 3 à 6 à approfondir : deux tests blancs la semaine 4, des exercices sur les erreurs la semaine 5, un dernier test blanc la semaine 7 et un allègement progressif la semaine 8.' },
      {
        kind: 'example',
        label: 'Exemple d’objectif',
        text: 'Objectif 5,5 avec une estimation actuelle de 4,5 : prévoyez 8 semaines, un gain d’une bande axé sur le Speaking et le Reading, et des tests blancs aux semaines 4 et 8.',
      },
      { kind: 'tip', text: 'Faites mesurer un test blanc au DÉBUT du plan puis toutes les 2 semaines. Si votre score estimé ne progresse pas, c’est le plan qu’il faut modifier, pas votre motivation.' },
    ],
    faq: [
      { q: 'Combien d’heures par jour dois-je étudier pour le TOEFL ?', a: '20 à 30 minutes concentrées par jour est l’équilibre idéal. Faire plus certains jours est acceptable, mais la régularité prime.' },
      { q: 'Puis-je me préparer au TOEFL en 2 semaines ?', a: 'Vous pouvez gagner en aisance et en stratégie, mais une progression significative de la bande demande 4 à 8 semaines. Commencez avant de vous sentir prêt.' },
      { q: 'Faut-il prendre des cours et travailler seul ?', a: 'Un travail personnel avec des ressources structurées et des tests blancs suffit pour la plupart des apprenants. Un tuteur est une assurance supplémentaire, pas une obligation.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
      { label: 'Score TOEFL', href: '/toefl/score' },
      { label: 'Plan d’étude TOEIC', href: '/toeic/study-plan' },
    ],
    tools: [{ label: 'Générateur de plan d’étude TOEFL', href: '/tools/toefl-study-plan-generator' }],
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
    h1: 'TOEFL Reading : questions sur l’idée principale',
    title: 'TOEFL Reading : l’idée principale — stratégie et pratique | Prep-Anglais',
    description:
      'Maîtrisez les questions d’idée principale du TOEFL Reading : repérer le propos général, éviter les pièges des réponses partielles et vous entraîner avec des exemples originaux.',
    intro:
      'Les questions sur l’idée principale cherchent le propos général d’un passage, pas un détail ni un exemple. Elles paraissent faciles, mais piègent la plupart des apprenants avec des réponses alléchantes « à moitié justes ».',
    blocks: [
      { kind: 'h2', text: 'Ce qui fait une bonne réponse d’idée principale' },
      { kind: 'p', text: 'La bonne réponse couvre l’ensemble du passage d’un seul tenant. Chaque détail du texte devrait apparaître comme un appui de cette réponse. Les mauvaises réponses évoquent une section ou un exemple isolé.' },
      { kind: 'h2', text: 'L’ordre de lecture qui fonctionne' },
      {
        kind: 'ol',
        items: [
          'Lisez entièrement le premier paragraphe : il expose le sujet.',
          'Lisez la première phrase de chacun des autres paragraphes.',
          'Répondez aux questions d’idée principale en dernier, une fois que les détails ont recentré le passage.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple',
        text: 'Un passage décrit l’effet du bruit de la circulation sur la communication, le sommeil et la reproduction des oiseaux. L’idée principale est la vue d’ensemble : le bruit de la circulation perturbe les oiseaux de plusieurs façons. « Traffic noise changes bird songs » n’est correct que si le passage se concentre exclusivement sur les chants.',
      },
      { kind: 'tip', text: 'Méfiez-vous des réponses vraies mais étroites. L’idée principale se généralise toujours à l’ensemble du passage.' },
    ],
    faq: [
      { q: 'Les questions d’idée principale se trouvent-elles à la fin du passage ?', a: 'Pas toujours. Vous pouvez en rencontrer à tout endroit ; lisez attentivement les consignes des questions avant le passage.' },
      { q: 'Faut-il lire le passage avant de répondre ?', a: 'Oui : repérez d’abord la structure, puis lisez plus en détail tout en répondant à chaque question.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'TOEFL Reading : l’inférence', href: '/toefl/reading/inference' },
      { label: 'TOEFL Reading : le vocabulaire en contexte', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'reading/inference',
    intent: 'problem-solving',
    h1: 'TOEFL Reading : questions d’inférence',
    title: 'TOEFL Reading : l’inférence — stratégie et pratique | Prep-Anglais',
    description:
      'Réussissez les questions d’inférence du TOEFL Reading à l’aide d’une règle simple : seules les réponses entièrement appuyées par le texte sont correctes. Exemples d’entraînement gratuits à l’intérieur.',
    intro:
      'Les questions d’inférence portent sur ce qui est sous-entendu mais non dit. La compétence consiste à distinguer « l’auteur le montre clairement » de « cela pourrait être vrai ».',
    blocks: [
      { kind: 'h2', text: 'La règle qui vient à bout des questions d’inférence' },
      { kind: 'p', text: 'Si vous ne pouvez pas pointer une phrase qui appuie la réponse, la réponse est fausse. Au TOEFL, les réponses d’inférence sont des conclusions presque directes du texte, jamais des spéculations libres.' },
      { kind: 'h2', text: 'Les pièges courants' },
      {
        kind: 'ul',
        items: [
          'Une réponse qui est un fait quotidien logique, mais que ce passage n’implique pas.',
          'Une réponse outrancière : « toujours » ou « jamais » là où le passage dit « souvent ».',
          'Une réponse qui reformule un détail au lieu d’en tirer une conclusion.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple',
        text: 'Passage : « Many urban trees are planted in narrow pits, where their roots quickly become space-constrained. » Inférence : les arbres plantés dans des fosses étroites nécessitent probablement plus d’entretien ou dépérissent tôt. Et non : les arbres urbains sont retirés fréquemment partout.',
      },
      { kind: 'tip', text: 'Pour chaque option d’inférence, demandez-vous : « Quelle phrase du passage rend cette option vraie ? » S’il n’y en a pas, éliminez-la.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de questions d’inférence ?', a: 'Généralement quelques-unes par test, environ 10 à 20 % des questions de lecture.' },
      { q: 'L’inférence est-elle le type de question de lecture TOEFL le plus difficile ?', a: 'C’est le plus raté, surtout parce que les apprenants surinterprètent. S’en tenir à l’appui strict du texte corrige la plupart des erreurs.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'TOEFL Reading : l’idée principale', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading : le vocabulaire en contexte', href: '/toefl/reading/vocabulary-in-context' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'reading/vocabulary-in-context',
    intent: 'vocabulary',
    h1: 'TOEFL Reading : le vocabulaire en contexte',
    title: 'TOEFL : vocabulaire en contexte — stratégie et pratique | Prep-Anglais',
    description:
      'Répondez avec fiabilité aux questions de vocabulaire en contexte du TOEFL Reading : lisez avant et après le mot, évitez le piège du synonyme évident.',
    intro:
      'Les questions de vocabulaire en contexte vous demandent de choisir le sens d’un mot tel qu’il est employé dans le passage. Le sens « de dictionnaire » est souvent un distracteur.',
    blocks: [
      { kind: 'h2', text: 'Comment fonctionnent ces questions' },
      { kind: 'p', text: 'La question met en évidence un mot. Les options sont des synonymes. Votre tâche est de choisir le sens qui convient à la phrase environnante, pas le sens le plus courant.' },
      { kind: 'h2', text: 'La méthode fiable' },
      {
        kind: 'ol',
        items: [
          'Lisez la phrase avant et après le mot mis en évidence.',
          'Remplacez le mot par chaque option et retenez celle qui préserve le sens.',
          'Vérifiez aussi que votre choix convient grammaticalement à la phrase.',
        ],
      },
      {
        kind: 'example',
        label: 'Exemple',
        text: '« The professor’s approach was unconventional: most colleagues used lectures, while she ran student-led labs. » Unconventional signifie ici inhabituel ou non conventionnel, et non inefficace.',
      },
      { kind: 'tip', text: 'Quand vous apprenez un mot de TOEFL, apprenez la famille de mots et au moins un contexte courant. C’est exactement ainsi que cette question le teste.' },
    ],
    faq: [
      { q: 'Dois-je connaître tous les mots du TOEFL ?', a: 'Non. Ces questions fonctionnent même avec une connaissance partielle, car vous pouvez utiliser le contexte et l’élimination.' },
      { q: 'La réponse peut-elle être un sens rare du mot ?', a: 'Oui, et c’est le piège classique. Fondez toujours votre choix sur le contexte d’abord.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'TOEFL Reading : l’idée principale', href: '/toefl/reading/main-idea' },
      { label: 'TOEFL Reading : l’inférence', href: '/toefl/reading/inference' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/academic',
    intent: 'vocabulary',
    h1: 'Vocabulaire académique en anglais',
    title: 'Vocabulaire académique en anglais — 50 mots essentiels | Prep-Anglais',
    description:
      'Apprenez le vocabulaire académique à haute fréquence avec définitions, exemples et un quiz gratuit. Les mots qui traversent tous les passages du TOEFL.',
    intro:
      'Le vocabulaire académique traverse toutes les disciplines : les mêmes 50 mots apparaissent dans les passages de biologie, d’histoire et d’économie. Maîtrisez-les et chaque lecture du TOEFL devient plus facile.',
    blocks: [
      { kind: 'h2', text: 'Les mots académiques essentiels' },
      {
        kind: 'table',
        headers: ['Mot', 'Sens', 'Exemple'],
        rows: [
          ['analyze', 'examiner en détail', 'Researchers analyze the data for patterns.'],
          ['significant', 'important', 'The difference was statistically significant.'],
          ['hypothesis', 'explication testable', 'They tested the hypothesis under lab conditions.'],
          ['methodology', 'système de méthodes', 'The methodology asked 400 students.'],
          ['coherent', 'logiquement structuré', 'The essay presented a coherent argument.'],
        ],
      },
      { kind: 'h2', text: 'Comment étudier le vocabulaire académique' },
      {
        kind: 'ul',
        items: [
          'Apprenez les familles de mots : analysis, analytical, analyze.',
          'Rédigez une phrase originale par mot, en contexte.',
          'Révisez selon un planning : aujourd’hui, demain, +3 jours, +1 semaine.',
        ],
      },
      { kind: 'tip', text: 'Lisez un article universitaire par semaine et collectez chaque mot académique rencontré. Cette liste constitue votre vocabulaire TOEFL personnel.' },
    ],
    faq: [
      { q: 'Qu’est-ce que la liste de mots académiques (Academic Word List) ?', a: 'La liste de mots académiques (AWL) regroupe les mots qui apparaissent fréquemment dans les disciplines universitaires. C’est la colonne vertébrale du vocabulaire de lecture du TOEFL.' },
      { q: 'Les mots académiques diffèrent-ils des mots courants ?', a: 'Oui : ils portent un sens formel et transversal ; par exemple assess, evident, concept, framework.' },
    ],
    internalLinks: [
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Vocabulaire TOEFL : sciences', href: '/toefl/vocabulary/science' },
      { label: 'Vocabulaire TOEFL : affaires', href: '/toefl/vocabulary/business' },
      { label: 'Vocabulaire TOEFL : université', href: '/toefl/vocabulary/university' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/science',
    intent: 'vocabulary',
    h1: 'Vocabulaire scientifique pour les tests d’anglais',
    title: 'Vocabulaire scientifique pour le TOEFL — termes et exemples | Prep-Anglais',
    description:
      'Apprenez le vocabulaire scientifique qui apparaît dans les sections Reading et Listening du TOEFL : expériences, preuves, causes et conséquences.',
    intro:
      'Les passages scientifiques testent le vocabulaire des expériences, des preuves et de la causalité. Ce sont exactement les mots que vous rencontrerez.',
    blocks: [
      { kind: 'h2', text: 'Le vocabulaire scientifique essentiel' },
      {
        kind: 'table',
        headers: ['Mot', 'Sens', 'Exemple'],
        rows: [
          ['evidence', 'information qui étaye une affirmation', 'The fossils provide evidence of migration.'],
          ['phenomenon', 'événement observable', 'This phenomenon occurs at high altitude.'],
          ['quantity', 'une quantité', 'The quantity increased with temperature.'],
          ['evolve', 'se développer progressivement', 'Species evolved to survive drought.'],
          ['mechanism', 'processus à l’origine d’un résultat', 'Scientists revealed the mechanism of the reaction.'],
        ],
      },
      { kind: 'h2', text: 'De la cause à l’effet' },
      {
        kind: 'p',
        text: 'Les textes scientifiques reposent sur des enchaînements de cause à effet. Entraînez-vous à reformuler ces liens : « X causes Y », « Y results from X », « Y is attributed to X ». Reconnaître instantanément ces verbes aide autant à la lecture qu’à l’écoute.',
      },
      { kind: 'tip', text: 'Regardez chaque semaine une vidéo scientifique de 5 minutes et notez chaque mot que le narrateur utilise pour relier causes et effets.' },
    ],
    faq: [
      { q: 'Ai-je besoin de connaissances en chimie pour les passages scientifiques du TOEFL ?', a: 'Non : il faut le vocabulaire de la science, pas la discipline elle-même. Le test explique les notions ; votre tâche est de comprendre la formulation.' },
      { q: 'D’où proviennent les passages scientifiques ?', a: 'De manuels introductifs de premier cycle dans des disciplines comme la biologie, la géologie, l’astronomie et la physique.' },
    ],
    internalLinks: [
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Vocabulaire TOEFL : académique', href: '/toefl/vocabulary/academic' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/business',
    intent: 'vocabulary',
    h1: 'Vocabulaire de l’anglais des affaires',
    title: 'Vocabulaire des affaires pour le TOEIC et le TOEFL — liste | Prep-Anglais',
    description:
      'Apprenez le vocabulaire professionnel indispensable pour le TOEIC et le TOEFL : réunions, négociations, documents et anglais professionnel.',
    intro:
      'Le vocabulaire des affaires est au cœur du TOEIC et apparaît dans le Listening du TOEFL. Maîtrisez l’essentiel du monde professionnel et les deux tests deviennent plus clairs.',
    blocks: [
      { kind: 'h2', text: 'Le vocabulaire professionnel essentiel' },
      {
        kind: 'table',
        headers: ['Mot', 'Sens', 'Exemple'],
        rows: [
          ['quarterly', 'tous les trois mois', 'The quarterly report exceeded expectations.'],
          ['revenue', 'revenus issus des ventes', 'Revenue grew by 12% last year.'],
          ['negotiate', 'discuter pour parvenir à un accord', 'They negotiated a lower delivery fee.'],
          ['procurement', 'achat professionnel', 'Procurement handles supplier contracts.'],
          ['outlook', 'perspectives à venir', 'The outlook for hiring is positive.'],
        ],
      },
      { kind: 'h2', text: 'Où les mots professionnels apparaissent dans les tests' },
      {
        kind: 'ul',
        items: [
          'Listening TOEIC : conversations de bureau, messages téléphoniques, consignes.',
          'Reading TOEIC : notes de service, courriels, plannings, annonces publicitaires.',
          'Listening TOEFL : annonces sur le campus et conversations avec le personnel.',
        ],
      },
      { kind: 'tip', text: 'Entraînez-vous avec de l’audio professionnel réel : un épisode de podcast d’affaires par semaine construit exactement le vocabulaire qu’utilise le TOEIC.' },
    ],
    faq: [
      { q: 'Le vocabulaire professionnel est-il identique au vocabulaire du TOEFL ?', a: 'Proche mais différent. Le TOEIC privilégie l’anglais professionnel ; le TOEFL privilégie l’anglais académique. Apprenez les deux ensembles par le contexte.' },
      { q: 'Comment apprendre rapidement le vocabulaire professionnel ?', a: 'Apprenez les collocations, pas des mots isolés : « grow revenue », « negotiate terms », « submit a report ».' },
    ],
    internalLinks: [
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'Vocabulaire TOEFL : académique', href: '/toefl/vocabulary/academic' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
  {
    slug: 'vocabulary/university',
    intent: 'vocabulary',
    h1: 'Le vocabulaire anglais pour l’université',
    title: 'Le vocabulaire anglais pour l’université — 30 mots | Prep-Anglais',
    description:
      'Construisez le vocabulaire anglais dont vous avez besoin à l’université : cours magistraux, dissertations, vie de campus et communication académique.',
    intro:
      'L’anglais universitaire dépasse les mots académiques : c’est la langue des cours, des dissertations, des rendez-vous de tutorat et de la vie de campus. Maîtrisez cet ensemble et la salle de cours cesse d’intimider.',
    blocks: [
      { kind: 'h2', text: 'Le vocabulaire des cours et des dissertations' },
      {
        kind: 'table',
        headers: ['Mot', 'Sens', 'Exemple'],
        rows: [
          ['plagiarism', 's’approprier le travail d’autrui', 'Plagiarism has serious consequences.'],
          ['reference', 'source citée dans une dissertation', 'Add a reference for every claim.'],
          ['lecture', 'cours magistral', 'The lecture covered urban economics.'],
          ['seminar', 'petit cours en séminaire', 'We debate the reading in seminar.'],
          ['extension', 'délai supplémentaire', 'Ask for an extension before the due date.'],
        ],
      },
      { kind: 'h2', text: 'Les phrases essentielles sur le campus' },
      {
        kind: 'ul',
        items: [
          '« Could you clarify that point? » — en cours et en réunion.',
          '« Where is the registrar’s office? » — pour les documents et l’inscription.',
          '« I’d like to discuss my grade. » — pendant les permanences des professeurs.',
        ],
      },
      { kind: 'tip', text: 'Avant votre premier semestre, écrivez 10 phrases utilisant ces mots à propos de votre propre matière. Vous les emploierez chaque semaine.' },
    ],
    faq: [
      { q: 'Le vocabulaire universitaire est-il identique au vocabulaire académique ?', a: 'Le vocabulaire académique est le noyau savant ; le vocabulaire universitaire ajoute la langue de la vie de campus (inscription, tutorat, logement).' },
      { q: 'Les universités testent-elles ce vocabulaire ?', a: 'Les tests de langue comme le TOEFL et l’IELTS mesurent précisément ce niveau de préparation académique.' },
    ],
    internalLinks: [
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
      { label: 'Vocabulaire TOEFL : académique', href: '/toefl/vocabulary/academic' },
      { label: 'Préparation au TOEFL', href: '/toefl/preparation' },
      { label: 'Vocabulaire IELTS', href: '/ielts/vocabulary' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeflCta,
  },
];

/* ------------------------------------------------------------------ */
/* TOEIC sections + topics                                             */
/* ------------------------------------------------------------------ */

const toeicCta = {
  title: 'Commencez par un diagnostic TOEIC gratuit',
  text: 'Estimez votre niveau en lecture et en écoute en 10 minutes avec des questions originales.',
  href: '/diagnostic',
  label: 'Diagnostic TOEIC gratuit',
};

export const toeicSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'Préparation au TOEIC',
    title: 'Préparation au TOEIC — guide pratique | Prep-Anglais',
    description:
      'Préparez le test Listening & Reading du TOEIC : comprenez le format, fixez un score cible et entraînez-vous chaque jour avec des exercices gratuits.',
    intro:
      'Le test Listening & Reading du TOEIC mesure l’anglais professionnel. La préparation est surtout une question d’habitude : écoute et lecture quotidiennes avec une orientation professionnelle.',
    blocks: [
      { kind: 'h2', text: 'À quoi ressemble le TOEIC' },
      {
        kind: 'table',
        headers: ['Section', 'Contenu', 'Durée'],
        rows: [
          ['Listening', 'Photos, paires question-réponse, conversations, monologues', '45 min'],
          ['Reading', 'Phrases incomplètes, complétion de texte, compréhension de lecture', '75 min'],
        ],
      },
      { kind: 'h2', text: 'Combien de temps dure la préparation au TOEIC ?' },
      { kind: 'p', text: 'Avec 30 minutes concentrées par jour, la plupart des apprenants constatent une progression mesurable en 6 à 10 semaines. Le Listening progresse particulièrement vite, car l’audio professionnel se travaille facilement au quotidien.' },
      { kind: 'tip', text: 'Votre objectif TOEIC dépend de votre projet : de nombreux employeurs demandent 700–750 ou plus sur l’échelle de 10 à 990.' },
      { kind: 'h2', text: 'Les premières étapes' },
      {
        kind: 'ol',
        items: [
          'Faites un diagnostic gratuit pour estimer votre niveau.',
          'Choisissez un objectif en fonction de votre employeur ou de votre établissement.',
          'Entraînez-vous chaque jour avec un contenu professionnel dans l’esprit du TOEIC.',
          'Passez un test blanc chronométré toutes les 2 semaines.',
        ],
      },
    ],
    faq: [
      { q: 'Le TOEIC est-il plus difficile que le TOEFL ?', a: 'Différent, pas plus difficile. Le TOEIC est plus ciblé (anglais professionnel) et n’évalue, dans la plupart des centres, que l’écoute et la lecture.' },
      { q: 'Les scores TOEIC expirent-ils ?', a: 'Il n’existe pas de durée officielle, mais de nombreux employeurs demandent un score datant de moins de 2 ans.' },
    ],
    internalLinks: [
      { label: 'La section Listening du TOEIC', href: '/toeic/listening' },
      { label: 'La section Reading du TOEIC', href: '/toeic/reading' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
      { label: 'Plan d’étude TOEIC', href: '/toeic/study-plan' },
      { label: 'Score TOEIC', href: '/toeic/score' },
    ],
    tools: [{ label: 'Générateur de plan d’étude TOEIC', href: '/tools/toeic-study-plan-generator' }],
    cta: toeicCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'Test blanc TOEIC',
    title: 'Test blanc TOEIC — score estimé gratuit | Prep-Anglais',
    description:
      'Faites un test blanc TOEIC gratuit avec des questions de listening et de reading dans l’esprit professionnel, et un score estimé.',
    intro:
      'Un test blanc TOEIC vous donne un point de départ avant d’investir dans la préparation. Voici à quoi vous attendre et comment l’utiliser.',
    blocks: [
      { kind: 'h2', text: 'Pourquoi passer d’abord un test blanc TOEIC' },
      {
        kind: 'ul',
        items: [
          'Il estime votre niveau actuel en une seule séance.',
          'Il révèle si c’est l’écoute ou la lecture qui est votre point faible.',
          'Il entraîne au rythme d’un vrai test de 120 minutes.',
        ],
      },
      { kind: 'h2', text: 'Le rythme des tests blancs' },
      { kind: 'ol', items: ['Un test blanc de référence d’abord.', 'Un nouveau test toutes les 2 semaines.', 'Revoyez chaque mauvaise réponse par écrit.', 'Repassez le test dans des conditions réelles, sans pause.'] },
      { kind: 'tip', text: 'Ne passez jamais un test blanc « pour voir » sans revoir ensuite vos erreurs. C’est dans la révision que se fait l’apprentissage.' },
    ],
    faq: [
      { q: 'Le test blanc TOEIC de Prep-Anglais est-il officiel ?', a: 'Non. Il utilise des questions originales et fournit un score d’entraînement estimé à titre indicatif.' },
      { q: 'Qu’est-ce qu’un bon score au TOEIC ?', a: 'L’échelle va de 10 à 990. De nombreux employeurs recherchent 700 et plus, 850 et plus étant considéré comme un bon niveau.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'Exercices de Reading TOEIC', href: '/toeic/reading' },
      { label: 'Exercices de Listening TOEIC', href: '/toeic/listening' },
      { label: 'Test blanc TOEFL', href: '/toefl/practice-test' },
    ],
    tools: [{ label: 'Test de niveau d’anglais', href: '/tools/english-level-test' }],
    cta: toeicCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'Entraînement au Listening du TOEIC',
    title: 'Entraînement au Listening du TOEIC — exercices gratuits | Prep-Anglais',
    description:
      'Entraînez-vous au Listening du TOEIC : photos, paires question-réponse, conversations et monologues, avec une stratégie pour chaque partie.',
    intro:
      'Le Listening du TOEIC comprend quatre parties, chacune exigeant sa propre stratégie. Cette page les présente et vous offre un entraînement gratuit.',
    blocks: [
      { kind: 'h2', text: 'Les quatre parties du Listening' },
      {
        kind: 'table',
        headers: ['Partie', 'Contenu', 'Conseil'],
        rows: [
          ['1 — Photographies', '4 images, une description', 'Concentrez-vous sur l’action et l’état, pas sur les mots exacts'],
          ['2 — Paires question-réponse', '3 réponses possibles', 'Évitez les pièges de grammaire : repérez le type de question'],
          ['3 — Conversations', 'Dialogues de bureau, 3 questions', 'Prévoyez le sujet dès les deux premières lignes'],
          ['4 — Monologues', 'Messages vocaux / annonces', 'Notez qui, quoi, quand, pourquoi'],
        ],
      },
      { kind: 'h2', text: 'Comment améliorer votre écoute au TOEIC' },
      {
        kind: 'ol',
        items: [
          'Entraînez-vous chaque jour avec de l’audio professionnel : messageries vocales, plannings, consignes.',
          'Notez les nombres (heures, prix, dates) tels que vous les entendez.',
          'Pour la partie 2, choisissez la réponse selon le type de question (qui/où/quand/comment).',
          'Ne réécoutez pas : le vrai test ne diffuse l’audio qu’une seule fois.',
        ],
      },
      { kind: 'tip', text: 'La partie 2 est la plus entraînable : chaque séance améliore vos réflexes de type de question en deux semaines.' },
    ],
    faq: [
      { q: 'Le Listening du TOEIC est-il uniquement en anglais américain ?', a: 'Il s’agit surtout d’accents nord-américains, avec quelques voix britanniques et australiennes. S’exposer aux trois aide.' },
      { q: 'Comment m’entraîner au Listening du TOEIC gratuitement ?', a: 'Avec des podcasts professionnels, des exercices audio dans le style des messageries vocales et les exercices gratuits de Prep-Anglais.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'La section Reading du TOEIC', href: '/toeic/reading' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'TOEIC Listening : la description de photo', href: '/toeic/listening/photo-description' },
      { label: 'La section Listening du TOEFL', href: '/toefl/listening' },
    ],
    tools: [{ label: 'Exercices gratuits de Listening TOEIC', href: '/practice/toeic-listening' }],
    cta: toeicCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'Entraînement au Reading du TOEIC',
    title: 'Entraînement au Reading du TOEIC — exercices gratuits | Prep-Anglais',
    description:
      'Entraînez-vous au Reading du TOEIC : phrases incomplètes, complétion de texte et compréhension de documents professionnels, avec des exercices gratuits.',
    intro:
      'Le Reading du TOEIC récompense le vocabulaire et la maîtrise de la structure dans des documents professionnels réalistes. Voici comment travailler efficacement chaque partie.',
    blocks: [
      { kind: 'h2', text: 'Les trois parties du Reading' },
      {
        kind: 'table',
        headers: ['Partie', 'Contenu', 'Conseil'],
        rows: [
          ['5 — Phrases incomplètes', 'Choisissez le mot qui convient', 'Apprenez grammaire et vocabulaire par paires'],
          ['6 — Complétion de texte', 'Comblez les espaces d’un document court', 'Lisez les phrases autour de l’espace'],
          ['7 — Compréhension de lecture', 'Courriels, annonces, rapports + questions', 'Lisez en diagonale d’abord, puis répondez'],
        ],
      },
      { kind: 'h2', text: 'Comment améliorer votre lecture au TOEIC' },
      {
        kind: 'ul',
        items: [
          'Apprenez les collocations professionnelles courantes : « submit a request », « meet a deadline », « handle a complaint ».',
          'Dans la partie 5, identifiez ce que teste l’espace : la grammaire ou le vocabulaire ?',
          'Dans la partie 7, lisez les questions avant les documents longs.',
          'Entraînez-vous au temps : environ 75 minutes pour 100 questions paraît serré tant qu’on ne s’y est pas entraîné.',
        ],
      },
      { kind: 'tip', text: 'C’est dans la partie 7 que la pression du temps se fait sentir. Apprenez à repérer en diagonale les titres et les dates, puis confirmez les détails lorsque la question l’exige.' },
    ],
    faq: [
      { q: 'Quel vocabulaire faut-il pour le Reading du TOEIC ?', a: 'L’anglais professionnel : contrats, factures, plannings, annonces — ainsi que les prépositions et conjonctions qui relient les phrases.' },
      { q: 'Comment gagner en rapidité au Reading du TOEIC ?', a: 'Chronométrez chaque séance. Les techniques de lecture en diagonale (premières et dernières lignes) et la lecture des questions en premier font gagner de vraies minutes.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'La section Listening du TOEIC', href: '/toeic/listening' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'TOEIC Reading : les phrases incomplètes', href: '/toeic/reading/incomplete-sentences' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
    ],
    tools: [{ label: 'Exercices gratuits de Reading TOEIC', href: '/practice/toeic-reading' }],
    cta: toeicCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'Vocabulaire TOEIC',
    title: 'Vocabulaire TOEIC — l’anglais professionnel en liste | Prep-Anglais',
    description:
      'Apprenez le vocabulaire professionnel réellement testé par le TOEIC : documents d’affaires, réunions, plannings et tournures professionnelles.',
    intro:
      'Le vocabulaire du TOEIC est l’anglais professionnel. L’apprendre en contexte vaut mieux que de mémoriser des listes de mots, et c’est exactement ce que le test récompense.',
    blocks: [
      { kind: 'h2', text: 'Le vocabulaire essentiel du TOEIC' },
      {
        kind: 'table',
        headers: ['Mot', 'Sens', 'Exemple'],
        rows: [
          ['reschedule', 'reporter à un autre moment', 'We rescheduled the meeting to Friday.'],
          ['invoice', 'facture à régler', 'The invoice is due within 30 days.'],
          ['inventory', 'stock de marchandises', 'Inventory levels dropped sharply.'],
          ['convenient', 'pratique à utiliser / à organiser', 'Is Thursday convenient for you?'],
          ['assistance', 'aide, assistance', 'Call us for technical assistance.'],
        ],
      },
      { kind: 'h2', text: 'Où apparaissent les mots professionnels' },
      {
        kind: 'ul',
        items: [
          'Écoute, parties 3–4 : organisation de réunions, réservations de voyage, annonces d’installations.',
          'Lecture, parties 5–7 : notes de service, factures, publicités, politiques.',
          'Les prépositions et conjonctions relient ces mots : « due to », « in regard to », « as of ».',
        ],
      },
      { kind: 'h2', text: 'Méthode d’apprentissage' },
      {
        kind: 'ol',
        items: [
          'Apprenez les mots dans des contextes professionnels (réunion, facture, déplacement, recrutement).',
          'Rédigez une phrase originale par mot.',
          'Révisez avec des cartes mémoire espacées.',
          'Retrouvez les mêmes mots dans vos séances d’écoute.',
        ],
      },
      { kind: 'tip', text: 'Tenez un petit carnet de « phrases de bureau » : submit, approve, notify, confirm, provide. La moitié du TOEIC utilise ces cinq verbes en contexte.' },
    ],
    faq: [
      { q: 'De quel volume de vocabulaire ai-je besoin pour le TOEIC ?', a: 'Un vocabulaire professionnel actif d’environ 4 000 à 5 000 mots, centré sur les contextes d’affaires, couvre la plupart des items.' },
      { q: 'Le vocabulaire du TOEIC est-il identique à l’anglais courant ?', a: 'C’est le plus souvent de l’anglais courant en situation professionnelle — plannings, paiements, réclamations — plutôt que des termes techniques inconnus.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEIC', href: '/toeic/reading' },
      { label: 'La section Listening du TOEIC', href: '/toeic/listening' },
      { label: 'Vocabulaire TOEFL : affaires', href: '/toefl/vocabulary/business' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: toeicCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'Score TOEIC expliqué',
    title: 'Score TOEIC : échelle et signification — de 10 à 990 | Prep-Anglais',
    description:
      'Comprenez les scores du TOEIC : l’échelle de 10 à 990, ce que les employeurs attendent et comment Prep-Anglais estime votre niveau avec une bande de 0 à 9.',
    intro:
      'Les scores du TOEIC vont de 10 à 990. Comprendre l’échelle vous aide à fixer un objectif défendable auprès de votre employeur ou de votre établissement.',
    blocks: [
      { kind: 'h2', text: 'Comment le TOEIC est noté' },
      { kind: 'p', text: 'Les sections Listening et Reading sont notées séparément (5 à 495 chacune), puis additionnées pour un total sur 990. Prep-Anglais présente votre niveau sous forme de bande estimée de 0 à 9 pour davantage de lisibilité.' },
      { kind: 'h2', text: 'Ce que recherchent souvent les employeurs' },
      {
        kind: 'table',
        headers: ['Bande estimée', 'Total TOEIC (approx.)', 'Usage courant'],
        rows: [
          ['4.0–4.9', '450–550', 'Anglais opérationnel de base'],
          ['5.0–5.9', '600–740', 'Communication professionnelle courante'],
          ['6.0–6.5', '750–850', 'Appels téléphoniques, rapports, réunions'],
          ['6.5+', '850–990', 'Contextes professionnels avancés'],
        ],
      },
      { kind: 'tip', text: 'Vérifiez l’exigence précise de votre employeur ou de votre établissement avant de choisir un objectif. Les bandes ci-dessus sont des repères approximatifs.' },
    ],
    faq: [
      { q: 'Un score de 700 au TOEIC est-il bon ?', a: 'Pour de nombreux employeurs, 700 et plus (soit environ une bande estimée de 5,5) correspond aux postes d’entrée et opérationnels.' },
      { q: 'Les scores TOEIC expirent-ils ?', a: 'Pas officiellement, mais de nombreuses organisations n’acceptent que des scores datant de moins de 2 ans.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'Plan d’étude TOEIC', href: '/toeic/study-plan' },
      { label: 'Score TOEFL', href: '/toefl/score' },
    ],
    tools: [{ label: 'Calculateur de score TOEIC', href: '/tools/toeic-score-calculator' }],
    cta: toeicCta,
  },
  {
    slug: 'study-plan',
    intent: 'planning',
    h1: 'Plan d’étude TOEIC',
    title: 'Plan d’étude TOEIC — modèle sur 30 jours | Prep-Anglais',
    description:
      'Un plan d’étude TOEIC réaliste sur 30 jours : pratique quotidienne de l’écoute et de la lecture, priorités hebdomadaires et jalons de tests blancs.',
    intro:
      'Un plan d’étude TOEIC fonctionne quand il est quotidien et court. Utilisez ce modèle et adaptez-le à vos heures disponibles.',
    blocks: [
      { kind: 'h2', text: 'Le modèle quotidien de 30 minutes' },
      {
        kind: 'table',
        headers: ['Jour', 'Objectif'],
        rows: [
          ['Lun', 'Listening, partie 2 (question-réponse)'],
          ['Mar', 'Reading, partie 5 (grammaire + vocabulaire)'],
          ['Mer', 'Listening, parties 3–4 (conversations / monologues)'],
          ['Jeu', 'Reading, partie 7 (documents professionnels)'],
          ['Ven', 'Vocabulaire + révision de la semaine'],
          ['Sam', 'Pratique mixte chronométrée'],
          ['Dim', 'Repos / révision légère'],
        ],
      },
      { kind: 'h2', text: 'Les jalons des 30 jours' },
      {
        kind: 'ol',
        items: [
          'Jour 1 : test blanc de référence.',
          'Semaine 2 : ciblez vos parties faibles ; visez 30 minutes par jour.',
          'Semaine 3 : deux tests blancs chronométrés ; révisez les erreurs à chaque fois.',
          'Semaine 4 : deux tests blancs complets, puis allègement avant le jour du test.',
        ],
      },
      { kind: 'tip', text: 'Conseil du moindre effort : améliorez d’abord la partie 2. C’est la section la plus vite entraînable de tout le test.' },
    ],
    faq: [
      { q: 'Peut-on se préparer au TOEIC en 30 jours ?', a: 'Oui : 30 jours de pratique régulière font progresser la plupart des apprenants d’environ une bande estimée, surtout si vous concentrez le travail sur le Listening.' },
      { q: 'Comment entretenir son vocabulaire TOEIC ?', a: 'Revoyez les mêmes mots dans des contextes d’écoute et de lecture, et gardez un carnet pour les collocations professionnelles.' },
    ],
    internalLinks: [
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'Plan d’étude TOEFL', href: '/toefl/study-plan' },
    ],
    tools: [{ label: 'Générateur de plan d’étude TOEIC', href: '/tools/toeic-study-plan-generator' }],
    cta: toeicCta,
  },
];

export const toeicTopics: SeoPageData[] = [
  {
    slug: 'listening/photo-description',
    intent: 'practice',
    h1: 'TOEIC Partie 1 : photographies',
    title: 'TOEIC Partie 1 Photographies — stratégie et pratique | Prep-Anglais',
    description:
      'Maîtrisez la partie 1 du TOEIC (Photographies) : choisir la bonne description, éviter les pièges littéraux et vous entraîner gratuitement.',
    intro:
      'La partie 1 du TOEIC affiche quatre photographies et joue quatre descriptions. Trois sont fausses ; une correspond à ce que vous voyez. Les pièges sont plus prévisibles que vous ne le croyez.',
    blocks: [
      { kind: 'h2', text: 'Comment fonctionne la partie 1' },
      { kind: 'p', text: 'Vous voyez une image et entendez quatre phrases (A–D). La bonne décrit l’action et l’état de la photo. Les phrases sont courtes : « A man is unloading boxes », « A truck is parked near the entrance ».' },
      { kind: 'h2', text: 'Les pièges prévisibles' },
      {
        kind: 'ul',
        items: [
          'Des mots qui se ressemblent : « unloading » vs « loading », « customers » vs « costumers ».',
          'Sujet ou objet inversés : « The woman is typing » alors que c’est l’homme qui tape.',
          'Erreurs de lieu : « in the warehouse » alors que la photo montre un bureau.',
        ],
      },
      { kind: 'h2', text: 'Comment s’entraîner' },
      {
        kind: 'ol',
        items: [
          'Regardez l’image avant que l’audio ne commence : prévoyez trois verbes probables.',
          'Repérez d’abord le sujet (qui accomplit l’action).',
          'Éliminez immédiatement les réponses manifestement fausses.',
        ],
      },
      { kind: 'tip', text: 'Entraînez-vous à décrire des photos de la vie courante à voix haute en deux secondes : « A car is stopped at the gate. Papers are on the table. » C’est toute la compétence.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de questions de photos au TOEIC ?', a: 'La partie 1 compte désormais 6 à 7 questions, contre davantage dans l’ancienne version plus longue du test.' },
      { q: 'Les photos de la partie 1 sont-elles toujours liées au travail ?', a: 'Le plus souvent des scènes professionnelles : bureaux, entrepôts, usines, rues et restaurants.' },
    ],
    internalLinks: [
      { label: 'La section Listening du TOEIC', href: '/toeic/listening' },
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
    ],
    cta: toeicCta,
  },
  {
    slug: 'reading/incomplete-sentences',
    intent: 'practice',
    h1: 'TOEIC Partie 5 : phrases incomplètes',
    title: 'TOEIC Partie 5 Phrases incomplètes — stratégie | Prep-Anglais',
    description:
      'Une méthode fiable pour la partie 5 du TOEIC : déterminer si l’espace teste la grammaire ou le vocabulaire, puis éliminer. Entraînement gratuit inclus.',
    intro:
      'La partie 5 du TOEIC présente une phrase avec un mot manquant et quatre options. La méthode la plus rapide consiste à déterminer ce que teste l’espace avant d’examiner les options.',
    blocks: [
      { kind: 'h2', text: 'Comment fonctionne la partie 5' },
      { kind: 'p', text: 'Environ 30 phrases incomplètes mélangent des questions de grammaire (forme verbale, ordre des mots, préposition) et de vocabulaire (choix du mot, collocation).' },
      { kind: 'h2', text: 'La méthode en deux étapes' },
      {
        kind: 'ol',
        items: [
          'Lisez la phrase complète et nommez la partie manquante : verbe ? nom ? préposition ? connecteur ?',
          'S’il s’agit de grammaire, appliquez la règle (accord, temps, ordre des modificateurs).',
          'S’il s’agit de vocabulaire, choisissez le mot qui se combine : « meet a deadline », « hold a seminar ».',
        ],
      },
      { kind: 'h2', text: 'Les points de grammaire les plus fréquents' },
      {
        kind: 'ul',
        items: [
          'Accord sujet-verbe : « The list of tasks is short. »',
          'Temps verbaux en contexte professionnel : « will deliver », « has submitted ».',
          'Prépositions dans les tournures figées : « in charge of », « responsible for ».',
          'Comparatifs : « more economical », « the most efficient ».',
        ],
      },
      { kind: 'tip', text: 'En cas d’hésitation entre deux options de vocabulaire, accordez votre confiance à celle dont vous avez déjà entendu la collocation en anglais professionnel.' },
    ],
    faq: [
      { q: 'Combien y a-t-il de questions dans la partie 5 ?', a: 'Environ 30 questions, soit à peu près 8 à 10 minutes si vous restez discipliné.' },
      { q: 'La partie 5 est-elle plus difficile que la partie 7 ?', a: 'Différentes. La partie 5 teste des connaissances précises de grammaire et de vocabulaire ; la partie 7 teste la rapidité et la compréhension. La plupart des apprenants perdent plus de temps sur la partie 7.' },
    ],
    internalLinks: [
      { label: 'La section Reading du TOEIC', href: '/toeic/reading' },
      { label: 'Vocabulaire TOEIC', href: '/toeic/vocabulary' },
      { label: 'Préparation au TOEIC', href: '/toeic/preparation' },
      { label: 'Test blanc TOEIC', href: '/toeic/practice-test' },
    ],
    cta: toeicCta,
  },
];

/* ------------------------------------------------------------------ */
/* IELTS sections                                                      */
/* ------------------------------------------------------------------ */

const ieltsCta = {
  title: 'Commencez par un diagnostic d’anglais gratuit',
  text: 'Estimez votre bande actuelle en 10 minutes, puis construisez un plan pour atteindre votre objectif IELTS.',
  href: '/diagnostic',
  label: 'Diagnostic gratuit',
};

export const ieltsSections: SeoPageData[] = [
  {
    slug: 'preparation',
    intent: 'informational',
    h1: 'Préparation à l’IELTS',
    title: 'Préparation à l’IELTS — guide pratique | Prep-Anglais',
    description:
      'Préparez l’IELTS Academic ou General Training : comprenez le format, choisissez une bande cible et travaillez les compétences essentielles chaque jour.',
    intro:
      'Se préparer à l’IELTS, c’est aligner votre anglais sur une bande cible pour un test bien défini. Ce guide vous propose un parcours réaliste.',
    blocks: [
      { kind: 'h2', text: 'IELTS Academic ou General Training ?' },
      { kind: 'p', text: 'L’IELTS Academic s’adresse aux études universitaires. Le General Training est destiné au travail et à l’immigration. Les sections Reading et Writing diffèrent entre les deux ; Listening et Speaking sont identiques.' },
      { kind: 'h2', text: 'Les quatre notes du relevé de résultats' },
      {
        kind: 'table',
        headers: ['Section', 'Durée', 'Questions'],
        rows: [
          ['Listening', '30 min + 10 de report', '40'],
          ['Reading', '60 min', '40'],
          ['Writing', '60 min (2 tâches)', '2 tâches'],
          ['Speaking', '11–14 min (3 parties)', 'entretien individuel'],
        ],
      },
      { kind: 'h2', text: 'Combien de temps dure la préparation à l’IELTS ?' },
      { kind: 'p', text: 'Gagner une bande complète (par exemple 5,0 → 6,0) demande en général 10 à 12 semaines de pratique régulière. Trente minutes concentrées par jour valent mieux qu’un bachotage du week-end.' },
      { kind: 'tip', text: 'Fixez un objectif réaliste. Un gain d’une demi-bande est déjà significatif pour de nombreuses exigences de visa et d’université.' },
    ],
    faq: [
      { q: 'L’IELTS est-il plus facile que le TOEFL ?', a: 'Aucun des deux n’est objectivement plus facile. L’IELTS comporte un véritable entretien oral, tandis que le TOEFL est entièrement enregistré ; les deux sont également exigeants dans leur format respectif.' },
      { q: 'Comment la bande IELTS est-elle calculée ?', a: 'Chaque section est notée de 0 à 9 par demi-bandes, et votre bande globale est la moyenne des quatre notes de section.' },
    ],
    internalLinks: [
      { label: 'La section Reading de l’IELTS', href: '/ielts/reading' },
      { label: 'La section Listening de l’IELTS', href: '/ielts/listening' },
      { label: 'La section Speaking de l’IELTS', href: '/ielts/speaking' },
      { label: 'La section Writing de l’IELTS', href: '/ielts/writing' },
      { label: 'Vocabulaire IELTS', href: '/ielts/vocabulary' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
      { label: 'Score IELTS', href: '/ielts/score' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'practice-test',
    intent: 'practice',
    h1: 'Test blanc IELTS',
    title: 'Test blanc IELTS — entraînement gratuit | Prep-Anglais',
    description:
      'Entraînement gratuit à l’IELTS : exercices chronométrés de lecture, d’écoute et de vocabulaire, avec un score en bandes estimé.',
    intro:
      'Passer un test blanc avant de commencer à étudier vous donne un point de départ solide. Voici comment utiliser les tests blancs dans votre préparation à l’IELTS.',
    blocks: [
      { kind: 'h2', text: 'Pourquoi établir d’abord un point de départ' },
      { kind: 'p', text: 'Votre score estimé indique où concentrer le premier mois d’efforts. Un apprenant à 5,0 progresse plus vite en consolidant le vocabulaire de base ; un apprenant à 6,5 progresse plus vite avec des stratégies d’examen.' },
      { kind: 'h2', text: 'Le rythme des tests blancs pour l’IELTS' },
      { kind: 'ol', items: ['Un test blanc de référence d’abord', 'Un test blanc toutes les 2 à 3 semaines', 'Reprenez les erreurs jusqu’à ce qu’elles soient corrigées automatiquement', 'Une simulation complète du jour du test avant l’examen'] },
      { kind: 'tip', text: 'L’IELTS ne pénalise pas les réponses au hasard, alors ne laissez jamais une question sans réponse : répondez toujours quelque chose.' },
    ],
    faq: [
      { q: 'Les tests blancs officiels de l’IELTS sont-ils gratuits ?', a: 'Des supports officiels existent, mais l’entraînement gratuit de Prep-Anglais vous fournit des exercices originaux et des bandes estimées à titre indicatif.' },
      { q: 'Qu’est-ce qu’un bon score IELTS ?', a: 'Les cursus universitaires demandent souvent 6,0 à 7,0 ; l’immigration qualifiée et l’inscription professionnelle demandent couramment 6,5 à 7,5.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'Exercices de Reading IELTS', href: '/ielts/reading' },
      { label: 'Exercices de Listening IELTS', href: '/ielts/listening' },
      { label: 'Score IELTS', href: '/ielts/score' },
    ],
    tools: [{ label: 'Test de niveau d’anglais', href: '/tools/english-level-test' }],
    cta: ieltsCta,
  },
  {
    slug: 'reading',
    intent: 'practice',
    h1: 'Entraînement au Reading de l’IELTS',
    title: 'Entraînement au Reading de l’IELTS — types de questions et conseils | Prep-Anglais',
    description:
      'Entraînez-vous au Reading de l’IELTS : types de questions, techniques d’écrémage et de balayage, et pièges courants des passages.',
    intro:
      'Le Reading de l’IELTS vous donne trois passages longs et 40 questions en 60 minutes. La stratégie y compte autant que le vocabulaire.',
    blocks: [
      { kind: 'h2', text: 'Les familles de questions' },
      {
        kind: 'table',
        headers: ['Type', 'Ce que vous faites'],
        rows: [
          ['Questions à choix multiple', 'Choisir la meilleure option'],
          ['Vrai / Faux / Non mentionné', 'Déterminer ce que dit réellement le texte'],
          ['Association de titres', 'Relier chaque paragraphe à son titre'],
          ['Complétion de phrases', 'Combler les espaces avec les bons mots'],
          ['Complétion de résumé', 'Compléter un résumé du texte'],
        ],
      },
      { kind: 'h2', text: 'Écrémage, balayage, puis réponses' },
      { kind: 'ol', items: ['Écrémage du passage en 2 minutes : titre, titres de section, premières lignes.', 'Lisez les questions et identifiez les mots-clés.', 'Balayez le texte pour chaque mot-clé, puis lisez attentivement la phrase environnante.'] },
      { kind: 'h2', text: 'Vrai / Faux / Non mentionné — le piège classique' },
      {
        kind: 'p',
        text: 'Faux signifie que le texte contredit l’affirmation. Non mentionné signifie que le texte reste muet, si évidente que paraisse la réponse de « bon sens ». Cette distinction décide de la plupart des points perdus.',
      },
      { kind: 'tip', text: 'Les réponses « Non mentionné » relèvent des preuves, pas de la logique. Si le texte le mentionne clairement, c’est Vrai ou Faux. Sinon, Non mentionné.' },
    ],
    faq: [
      { q: 'Les passages de lecture de l’IELTS sont-ils difficiles ?', a: 'Ils sont académiques et denses. La rapidité et le balayage des mots-clés s’entraînent, et cela compte plus qu’un vocabulaire exotique.' },
      { q: 'Faut-il lire le passage avant les questions ?', a: 'Non. Écrémez d’abord, puis avancez question par question en balayant les mots-clés.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'Vocabulaire IELTS', href: '/ielts/vocabulary' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
      { label: 'La section Reading du TOEFL', href: '/toefl/reading' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'listening',
    intent: 'practice',
    h1: 'Entraînement au Listening de l’IELTS',
    title: 'Entraînement au Listening de l’IELTS — stratégies | Prep-Anglais',
    description:
      'Améliorez votre écoute à l’IELTS : prédire les réponses d’après les questions, gérer les nombres et les noms, et éviter les transitions manquées.',
    intro:
      'Le Listening de l’IELTS ne diffuse chaque enregistrement qu’une seule fois. La compétence qui améliore le plus les scores est la prédiction : déterminer, avant d’entendre l’audio, quel type de réponse attend chaque espace.',
    blocks: [
      { kind: 'h2', text: 'Les quatre parties' },
      { kind: 'p', text: 'La partie 1 est une conversation courante (remplissage de formulaire), la partie 2 un monologue, la partie 3 une discussion académique et la partie 4 un cours magistral. La difficulté augmente régulièrement.' },
      { kind: 'h2', text: 'La prédiction vaut mieux que la mémoire' },
      {
        kind: 'ul',
        items: [
          'Lisez les questions avant le début de chaque partie.',
          'Prévoyez le type de réponse : un nombre ? un nom ? une heure ? un type de pièce ?',
          'Respectez les limites de mots : « ONE WORD AND/OR A NUMBER ».',
        ],
      },
      { kind: 'h2', text: 'Gérer les nombres et les noms' },
      { kind: 'p', text: 'Entraînez-vous chaque jour à la dictée d’orthographe et à la dictée de nombres pendant cinq minutes. La plupart des étudiants perdent 2 à 3 points à cause de noms mal orthographiés et de chiffres entendus une seule fois.' },
      { kind: 'tip', text: 'Passez immédiatement à la suite après chaque réponse : une réponse manquée est perdue. Rester concentré sur l’espace suivant vaut mieux que de regretter le précédent.' },
    ],
    faq: [
      { q: 'Combien de fois l’audio de l’IELTS est-il diffusé ?', a: 'Une seule fois. C’est pourquoi la prédiction et la prise de notes comptent autant.' },
      { q: 'Perd-on des points pour la grammaire dans les espaces à l’écoute ?', a: 'Oui : votre réponse écrite doit s’intégrer à la phrase. Un verbe qui ne s’accorde pas avec son sujet peut coûter le point, même si vous avez entendu le mot.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'La section Reading de l’IELTS', href: '/ielts/reading' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
      { label: 'La section Listening du TOEIC', href: '/toeic/listening' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'speaking',
    intent: 'problem-solving',
    h1: 'Comment améliorer son Speaking à l’IELTS',
    title: 'Améliorer son Speaking à l’IELTS — guide des 3 parties | Prep-Anglais',
    description:
      'Améliorez votre Speaking à l’IELTS avec une stratégie partie par partie : développer les réponses, paraphraser et gagner en aisance grâce à des exercices quotidiens.',
    intro:
      'Le Speaking de l’IELTS est un entretien structuré en trois parties. Votre bande dépend de l’aisance, du vocabulaire, de la grammaire et de la prononciation — dans cet ordre de poids pour la plupart des candidats.',
    blocks: [
      { kind: 'h2', text: 'Penser comme un examinateur : les trois parties' },
      {
        kind: 'table',
        headers: ['Partie', 'Contenu', 'Mouvement clé'],
        rows: [
          ['1 — Introduction', 'Répondre à des questions sur des sujets familiers', 'Développer avec une raison + un exemple'],
          ['2 — Carte de sujet', 'Parler 2 minutes à partir d’une carte', 'Utiliser des notes ; structurer le récit ou comparer'],
          ['3 — Discussion', 'Questions abstraites sur le thème de la partie 2', 'Donner son opinion + justifier + nuancer'],
        ],
      },
      { kind: 'h2', text: 'La formule de développement' },
      { kind: 'p', text: 'Les réponses courtes plafonnent votre bande. Utilisez la formule : réponse + raison + exemple. « I prefer mornings because I concentrate best then. For example, I write my hardest paragraphs before 10am. »' },
      { kind: 'h2', text: 'Exercices d’aisance' },
      {
        kind: 'ul',
        items: [
          'Enregistrez chaque jour des réponses d’une minute et transcrivez-en deux.',
          'Reproduisez des extraits audio natifs pour le rythme de la prononciation.',
          'Entraînez-vous à la structure de carte 4C : Describe, Compare, Cause-consequence, Conclusion.',
        ],
      },
      { kind: 'tip', text: 'Vous n’avez pas besoin d’un accent natif. Une prononciation claire, à un rythme naturel, rapporte plus de points qu’une langue seconde sans accent mais au débit monotone.' },
    ],
    faq: [
      { q: 'Combien de temps dure le test d’expression orale de l’IELTS ?', a: '11 à 14 minutes : partie 1 environ 4 à 5 min, partie 2 environ 4 min préparation comprise, partie 3 environ 4 à 5 min.' },
      { q: 'L’expression orale de l’IELTS est-elle enregistrée ?', a: 'Oui : en présence d’un examinateur dans la version papier, ou par vidéo dans l’IELTS sur ordinateur. Votre session est enregistrée à des fins de vérification.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'La section Writing de l’IELTS', href: '/ielts/writing' },
      { label: 'Vocabulaire IELTS', href: '/ielts/vocabulary' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
      { label: 'La section Speaking du TOEFL', href: '/toefl/speaking' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'writing',
    intent: 'problem-solving',
    h1: 'Entraînement au Writing de l’IELTS',
    title: 'IELTS Writing, tâches 1 et 2 — structure et conseils | Prep-Anglais',
    description:
      'Maîtrisez le Writing de l’IELTS : le compte rendu de la tâche 1 et la dissertation de la tâche 2, avec une structure par bande, des exemples et un entraînement quotidien.',
    intro:
      'Le Writing de l’IELTS comprend deux tâches en 60 minutes. La tâche 1 (20 min) exige de rendre compte de données ou de décrire un processus ; la tâche 2 (40 min) est une dissertation argumentée. La structure fait tout.',
    blocks: [
      { kind: 'h2', text: 'Tâche 1 — le compte rendu' },
      { kind: 'ol', items: ['Paraphrasez le sujet en une phrase.', 'Donnez une vue d’ensemble en une phrase (la tendance générale).', 'Décrivez les données en 2 à 3 paragraphes, par groupes.'] },
      { kind: 'h2', text: 'Tâche 2 — la dissertation' },
      {
        kind: 'table',
        headers: ['Paragraphe', 'Contenu'],
        rows: [
          ['Introduction', 'Paraphrase + position claire'],
          ['Développement 1', 'Raison + exemple ou données'],
          ['Développement 2', 'Seconde raison ou contre-argument'],
          ['Conclusion', 'Reprendre la position, sans idée nouvelle'],
        ],
      },
      { kind: 'h2', text: 'Ce qui distingue les bandes' },
      {
        kind: 'ul',
        items: [
          'Bande 6 : position claire, quelques erreurs de cohésion.',
          'Bande 7 : enchaînements cohérents, vocabulaire thématique, seulement des erreurs mineures.',
          'Bande 8 et plus : précision, souplesse, erreurs rares.',
        ],
      },
      { kind: 'tip', text: 'Rédigez au moins une dissertation de tâche 2 par jour pendant deux semaines, en gardant un modèle fixe. L’automatisation de la structure libère votre attention pour le contenu.' },
    ],
    faq: [
      { q: 'Combien de mots dois-je écrire ?', a: 'La tâche 1 demande au moins 150 mots, la tâche 2 au moins 250. Passer sous le minimum plafonne visiblement votre score.' },
      { q: 'Les puces sont-elles autorisées dans la tâche 1 ?', a: 'Non : écrivez des paragraphes reliés, pas des puces.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'La section Speaking de l’IELTS', href: '/ielts/speaking' },
      { label: 'Vocabulaire IELTS', href: '/ielts/vocabulary' },
      { label: 'La section Writing du TOEFL', href: '/toefl/writing' },
    ],
    cta: ieltsCta,
  },
  {
    slug: 'vocabulary',
    intent: 'vocabulary',
    h1: 'Vocabulaire IELTS',
    title: 'Vocabulaire IELTS — l’usage des mots par bande | Prep-Anglais',
    description:
      'Découvrez comment le vocabulaire est évalué à l’IELTS : l’emploi précis des mots et des collocations, plus des familles de mots académiques à travailler.',
    intro:
      'L’IELTS récompense un vocabulaire employé avec précision en contexte, et non de longues listes mémorisées isolément. Voici ce qui fait réellement évoluer votre bande.',
    blocks: [
      { kind: 'h2', text: 'Le « critère » qui compte' },
      { kind: 'p', text: 'Dans le Speaking et le Writing, l’un des quatre critères est la Ressource lexicale : l’étendue — et l’exactitude — de votre vocabulaire. Des mots rares mais mal employés nuisent davantage que des mots fréquents bien utilisés.' },
      { kind: 'h2', text: 'Des familles de mots à travailler' },
      {
        kind: 'table',
        headers: ['Verbe', 'Nom', 'Adjectif'],
        rows: [
          ['assess', 'assessment', 'assessable'],
          ['benefit', 'benefit', 'beneficial'],
          ['fluctuate', 'fluctuation', 'fluctuating'],
          ['observe', 'observation', 'observable'],
        ],
      },
      { kind: 'h2', text: 'Les collocations valent mieux que les mots isolés' },
      {
        kind: 'ul',
        items: [
          'Académique : « conduct research », « draw a conclusion », « yield results ».',
          'Opinion : « I firmly believe », « from my perspective », « it is widely argued ».',
          'Données : « a sharp increase », « a steady decline », « a minor fluctuation ».',
        ],
      },
      { kind: 'tip', text: 'Tenez un carnet « bande 7 » : chacune de vos erreurs à l’oral est une occasion d’apprendre la bonne collocation, et non un mot isolé.' },
    ],
    faq: [
      { q: 'Combien de mots faut-il pour la bande 7 de l’IELTS ?', a: 'La précision compte plus que le nombre brut : environ 4 000 à 6 000 mots actifs avec une solide maîtrise des collocations soutient la bande 7.' },
      { q: 'Faut-il utiliser des expressions idiomatiques dans le Speaking de l’IELTS ?', a: 'Seulement celles dont vous êtes sûr à 100 %. Une collocation naturelle (« a steep drop ») rapporte plus qu’une expression idiomatique risquée.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'La section Writing de l’IELTS', href: '/ielts/writing' },
      { label: 'La section Speaking de l’IELTS', href: '/ielts/speaking' },
      { label: 'Vocabulaire TOEFL', href: '/toefl/vocabulary' },
    ],
    tools: [{ label: 'Test de vocabulaire anglais', href: '/tools/english-vocabulary-test' }],
    cta: ieltsCta,
  },
  {
    slug: 'score',
    intent: 'score',
    h1: 'Score et bande IELTS expliqués',
    title: 'IELTS : bande de score de 0 à 9 expliquée | Prep-Anglais',
    description:
      'Comprenez les bandes de score de l’IELTS : comment la bande globale est calculée, ce que demandent les universités et l’immigration, et comment fixer votre objectif.',
    intro:
      'L’IELTS note chaque section de 0 à 9 par demi-bandes, et la bande globale est la moyenne des quatre sections. Cette page relie les objectifs à la réalité.',
    blocks: [
      { kind: 'h2', text: 'Comment la bande globale est calculée' },
      { kind: 'p', text: 'Les quatre notes de section sont moyennées et arrondies à la demi-bande la plus proche. Exemple : 6,5 + 7,0 + 6,0 + 6,5 = 26,0 ÷ 4 = 6,5 au total.' },
      { kind: 'h2', text: 'Les exigences courantes' },
      {
        kind: 'table',
        headers: ['Objectif', 'Exigence type'],
        rows: [
          ['Cursus de mise à niveau', '5.0–5.5'],
          ['Licence', '6.0–6.5'],
          ['Master / Doctorat', '6.5–7.5'],
          ['Inscription professionnelle', '7.0–7.5 (souvent avec des minima par section)'],
        ],
      },
      { kind: 'tip', text: 'De nombreux établissements imposent aussi un minimum sur chaque section, pas seulement une bande globale. Vérifiez les clauses de type « no band below 6.0 » avant de fixer un objectif.' },
    ],
    faq: [
      { q: 'Qu’est-ce qu’un bon score IELTS ?', a: 'Un score supérieur à l’exigence de votre établissement ou de votre visa cible. « Bon » se définit par rapport à votre objectif, pas par un chiffre universel.' },
      { q: 'Les scores IELTS expirent-ils ?', a: 'Oui : les scores sont valables 2 ans, même si certaines organisations acceptent des scores plus anciens, notamment pour des universitaires employés depuis longtemps.' },
    ],
    internalLinks: [
      { label: 'Préparation à l’IELTS', href: '/ielts/preparation' },
      { label: 'Test blanc IELTS', href: '/ielts/practice-test' },
      { label: 'Score TOEFL', href: '/toefl/score' },
    ],
    tools: [{ label: 'Calculateur de score IELTS', href: '/tools/ielts-score-calculator' }],
    cta: ieltsCta,
  },
];