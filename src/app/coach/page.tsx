import type { Metadata } from 'next';
import CoachChat from '@/components/CoachChat';
import { requireUser } from '@/lib/auth';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Assistant de préparation | Prep-Anglais',
  description:
    'Posez vos questions \u00E0 l\u2019assistant de pr\u00E9paration Prep-Anglais : plans d\u2019\u00E9tude, explications d\u2019erreurs et exercices d\u2019expression orale.',
  path: '/coach',
  overline: 'Assistant de pr\u00E9paration',
  noindex: true,
});

export default async function CoachPage() {
  await requireUser();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <p className="micro-label">Assistant de préparation</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
          Votre assistant de préparation
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Plans d&apos;étude, corrigés et entraînement : posez vos questions en
          français ou en anglais.
        </p>
      </header>
      <CoachChat />
    </div>
  );
}