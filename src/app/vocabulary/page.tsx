import type { Metadata } from 'next';
import VocabApp from '@/components/VocabApp';
import { getCurrentUser } from '@/lib/auth';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Vocabulaire : cartes mémoire et quiz | Prep-Anglais',
  description:
    'Enrichissez votre vocabulaire d\u2019examen avec des cartes mémoire et des quiz quotidiens pour TOEFL, TOEIC et IELTS.',
  path: '/vocabulary',
  overline: 'Vocabulaire',
});

export default async function VocabularyPage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-8">
        <p className="micro-label">Vocabulaire</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
          Vocabulaire ciblé
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Apprenez des mots chaque jour, révisez-les et testez-vous avec de courts quiz.
        </p>
      </header>
      <VocabApp premium={Boolean(user?.premium)} />
    </div>
  );
}