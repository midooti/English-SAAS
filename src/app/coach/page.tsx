import type { Metadata } from 'next';
import CoachChat from '@/components/CoachChat';

export const metadata: Metadata = {
  title: 'AI Coach',
  description:
    'Chat with the ScoreUp AI Coach for study plans, error explanations and speaking exercises.',
};

export default function CoachPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          AI Coach
        </h1>
        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Your personal study assistant.
        </p>
      </header>
      <CoachChat />
    </div>
  );
}