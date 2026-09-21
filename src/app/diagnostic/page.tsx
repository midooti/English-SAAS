import type { Metadata } from 'next';
import DiagnosticApp from '@/components/DiagnosticApp';
import { getCurrentUser } from '@/lib/auth';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Test de niveau d\u2019anglais gratuit | Prep-Anglais',
  description:
    'Test de niveau d\u2019anglais gratuit : une dizaine de questions originales pour estimer votre niveau TOEFL ou TOEIC en quelques minutes, avec corrigés.',
  path: '/diagnostic',
  overline: 'Test de niveau',
});

export default async function DiagnosticPage() {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <header className="mb-8">
        <p className="micro-label">Test de niveau</p>
        <h1 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
          Estimez votre niveau d&apos;anglais
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Une dizaine de questions pour situer votre niveau en lecture, écoute et
          vocabulaire. Le résultat est un score estimé, à titre indicatif.
        </p>
      </header>
      <DiagnosticApp premium={Boolean(user?.premium)} />
    </div>
  );
}