/**
 * demo.ts — Données de démonstration (dashboard, progress, mock tests).
 * Remplacer par les vraies données Supabase en production.
 */

export const demoTarget = {
  exam: 'TOEFL',
  targetBand: 5.5,
  currentBand: 4.5,
  progressPercent: 68,
};

export const demoSkills = [
  { skill: 'Reading', band: 4.8, color: 'bg-brand-500' },
  { skill: 'Listening', band: 5.1, color: 'bg-accent-500' },
  { skill: 'Speaking', band: 4.0, color: 'bg-slate-400' },
  { skill: 'Writing', band: 4.5, color: 'bg-sky-500' },
] as const;

export const demoScoreHistory = [4.1, 4.3, 4.5, 4.6, 4.8];

export const demoTodayPlan = [
  { skill: 'Reading', minutes: 10, difficulty: 'Medium' as const, done: true },
  { skill: 'Listening', minutes: 8, difficulty: 'Easy' as const, done: false },
  { skill: 'Vocabulary', minutes: 5, difficulty: 'Easy' as const, done: false },
  { skill: 'Speaking', minutes: 5, difficulty: 'Hard' as const, done: false },
  { skill: 'Writing', minutes: 10, difficulty: 'Medium' as const, done: false },
];

export const demoStats = {
  overallBand: 4.8,
  accuracy: 82,
  questionsCompleted: 342,
  studyMinutes: 1260,
  currentStreak: 7,
};

export const demoWeakTopics = [
  { topic: 'Verb tenses', accuracy: 64 },
  { topic: 'IELTS-style inference', accuracy: 70 },
  { topic: 'TOEIC phrasal verbs', accuracy: 72 },
];

export const demoStrongTopics = [
  { topic: 'Listening main idea', accuracy: 91 },
  { topic: 'Vocabulary in context', accuracy: 88 },
  { topic: 'Reading details', accuracy: 86 },
];

export const demoLeaderboard = [
  { name: 'Sofia', score: 85 },
  { name: 'Liam', score: 82 },
  { name: 'Emma', score: 79 },
  { name: 'You', score: 76 },
  { name: 'Noah', score: 74 },
];