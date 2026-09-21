import type { Metadata } from 'next';
import TestCard from '@/components/TestCard';
import { exams } from '@/lib/exams';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Tests d\u2019anglais : TOEFL, TOEIC, IELTS, Cambridge, Duolingo | Prep-Anglais',
  description:
    'Comparez les examens d\u2019anglais (TOEFL, TOEIC, IELTS, Cambridge English, Duolingo English Test) : format, compétences évaluées, durée et ressources de préparation Prep-Anglais.',
  path: '/tests',
  overline: 'Tests d\u2019anglais',
});

export default function TestsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Choisir son examen</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          Les examens d&apos;anglais, comparés en détail
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Format, compétences évaluées, durée et ressources de préparation : une vue claire pour
          choisir l&apos;examen qui correspond à votre objectif.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exams.map((exam) => (
          <TestCard key={exam.key} exam={exam} />
        ))}
      </div>

      <section className="thin-sep mx-auto mt-16 max-w-3xl">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
          Comment choisir son examen ?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
          Tout dépend de votre objectif : étudier dans une université anglophone (TOEFL ou IELTS
          académique), rejoindre une entreprise internationale (TOEIC), obtenir une certification
          durable (Cambridge English) ou passer un test en ligne à domicile (Duolingo English
          Test).
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl">
        <div className="thin-sep" />
        <h2 className="mt-6 font-serif text-2xl tracking-tight text-ink dark:text-white">
          Préparation pour chacun de ces examens
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
          Les parcours TOEFL et TOEIC sont disponibles dès aujourd&apos;hui : sections guidées,
          exercices, vocabulaire et examens blancs. Les parcours IELTS, Cambridge English et
          Duolingo English Test sont en préparation et seront progressivement disponibles.
        </p>
      </section>
    </div>
  );
}