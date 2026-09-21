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
  'Analyze my weakest skill',
  "Create today's study plan",
  'Explain my latest mistakes',
  'Give me a TOEFL speaking exercise',
  'Give me vocabulary for university',
];

function keywordResponse(prompt: string): string {
  const p = prompt.toLowerCase();

  if (p.includes('weak') || p.includes('skill'))
    return "Your weakest skill is Speaking (4.0). Let's fix it: 3 short responses a day, record yourself, and focus on fluency over accuracy. I've queued 5 speaking exercises for you.";
  if (p.includes('plan') || p.includes('schedule'))
    return "Here's today's plan: Reading 10 min, Listening 8 min, Vocabulary 5 min, Speaking 5 min, Writing 10 min. Total: 38 minutes — enough to keep your 7-day streak alive.";
  if (p.includes('mistake') || p.includes('error') || p.includes('wrong'))
    return "Your most frequent mistake last week was verb tense agreement in Writing (18% of errors). Drill #2 and #7 fix exactly that. Want a 5-question warm-up?";
  if (p.includes('speaking') && p.includes('toefl'))
    return "TOEFL Speaking tip: use the 15s preparation window to write one keyword per idea. Structure: claim → reason → example. Try: 'Do you prefer studying alone or in groups? Why?'";
  if (p.includes('vocabulary') || p.includes('university'))
    return "University vocabulary pack: academic, hypothesis, methodology, paradigm, coherent. Each has a flashcard, example and synonym ready for review.";
  if (p.includes('listening'))
    return "Listening is your strong skill (5.1). Keep it sharp with one TOEIC-style talk per day, and practice note-taking for TOEFL lectures.";
  return 'Answer: Analyzing this for you. Tip: focus on your weakest skill first — practice 20 minutes daily and review your error history weekly. For a specific answer, add one of the suggested prompts.';
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