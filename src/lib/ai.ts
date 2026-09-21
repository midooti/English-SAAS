/**
 * lib/ai.ts — Architecture du "AI Coach".
 *
 * - Sans OPENAI_API_KEY : réponses de DÉMO (moteur par mots-clés).
 * - Avec OPENAI_API_KEY : branchez réellement l'API (emplacement balisé TODO).
 */
export const aiConfigured = Boolean(process.env.OPENAI_API_KEY);

export type AIAnswer = {
  text: string;
  demo: boolean;
};

/** Suggestions affichées dans le chat. */
export const SUGGESTED_PROMPTS = [
  'Analysez ma compétence la plus faible',
  'Créez le plan d\u2019étude du jour',
  'Expliquez mes dernières erreurs',
  'Donnez-moi un exercice d\u2019expression orale TOEFL',
  'Donnez-moi du vocabulaire universitaire',
];

function keywordResponse(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('faible') || p.includes('comp\u00e9tence') || p.includes('weak') || p.includes('skill'))
    return 'Votre compétence la plus faible est l\u2019expression orale (4,0). Corrigeons cela : trois réponses courtes par jour, enregistrez-vous, et privilégiez la fluidité à la précision. J\u2019ai préparé 5 exercices d\u2019expression orale pour vous.';
  if (p.includes('plan') || p.includes('programme') || p.includes('schedule'))
    return 'Voici le plan du jour : lecture 10 min, écoute 8 min, vocabulaire 5 min, expression orale 5 min, rédaction 10 min. Total : 38 minutes — de quoi conserver votre série de 7 jours.';
  if (p.includes('erreur') || p.includes('fautes') || p.includes('mistake') || p.includes('error') || p.includes('wrong'))
    return 'Votre erreur la plus fréquente la semaine dernière concernait la concordance des temps à la rédaction (18 % des erreurs). Les entraînements n°2 et n°7 corrigent précisément ce point. Voulez-vous un échauffement de 5 questions ?';
  if (p.includes('expression orale') && p.includes('toefl') || (p.includes('speaking') && p.includes('toefl')))
    return 'Astuce TOEFL : utilisez les 15 secondes de préparation pour noter un mot-clé par idée. Structure : affirmation → raison → exemple. Essayez : « Préférez-vous étudier seul ou en groupe ? Pourquoi ? »';
  if (p.includes('vocabulaire') || p.includes('universitaire') || p.includes('vocabulary') || p.includes('university'))
    return 'Pack vocabulaire universitaire : academic, hypothesis, methodology, paradigm, coherent. Chacun dispose d\u2019une carte, d\u2019un exemple et d\u2019un synonyme prêts à réviser.';
  if (p.includes('ecoute') || p.includes('\u00e9coute') || p.includes('listening'))
    return 'L\u2019écoute est votre point fort (5,1). Gardez-la affûtée avec un discours de type TOEIC par jour et entraînez-vous à la prise de notes pour les cours magistraux TOEFL.';
  return 'Réponse : analyse en cours. Astuce : commencez par votre compétence la plus faible — 20 minutes d\u2019entraînement quotidien et une revue hebdomadaire de vos erreurs. Pour une réponse plus précise, utilisez l\u2019une des suggestions.'
}

/** Réponse du coach. Sans clé API, moteur local de démo. */
export async function getAIAnswer(prompt: string): Promise<AIAnswer> {
  if (!aiConfigured) {
    // Simulation d'une latence réaliste.
    await new Promise((r) => setTimeout(r, 900));
    return { text: keywordResponse(prompt), demo: true };
  }

  // ----- TODO Stripe/IA réel : appeler l'API de votre fournisseur -----
  // const res = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
  //   body: JSON.stringify({ model: 'gpt-4o-mini', messages: [{ role: 'user', content: prompt }] }),
  // });
  // return { text: (await res.json()).choices[0].message.content, demo: false };

  return { text: keywordResponse(prompt), demo: true };
}