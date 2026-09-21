import type { Metadata } from 'next';
import PracticeApp from '@/components/PracticeApp';
import { getCurrentUser } from '@/lib/auth';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Exercices d\u2019anglais quotidiens : TOEFL, TOEIC, IELTS | Prep-Anglais',
  description:
    'Entraînez-vous au TOEFL, TOEIC, IELTS, Cambridge English et Duolingo English Test avec des exercices originaux, corrigés et explications.',
  path: '/practice',
  overline: 'Entraînement',
});

export default async function PracticePage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <p className="micro-label">Entraînement</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
          Exercices quotidiens
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Choisissez votre examen, votre compétence et votre niveau de difficulté.
          La formule gratuite inclut un nombre limité de questions par jour.
        </p>
      </header>
      <PracticeApp premium={Boolean(user?.premium)} />
    </div>
  );
}