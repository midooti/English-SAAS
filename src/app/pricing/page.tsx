import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import PricingCard from '@/components/PricingCard';
import { seoMetadata } from '@/lib/seo';
import { PLANS, FREE_PLAN, CURRENCY } from '@/lib/config';

export const metadata: Metadata = seoMetadata({
  title: 'Tarifs : formule gratuite et abonnement Premium | Prep-Anglais',
  description:
    'Prep-Anglais est gratuit pour commencer : diagnostics, exercices et vocabulaire. Passez à Premium pour des exercices illimités et des examens blancs complets.',
  path: '/pricing',
  overline: 'Tarifs',
});

const FEATURES: { label: string; free: string | boolean; premium: string | boolean }[] = [
  { label: 'Questions quotidiennes gratuites', free: '5 / jour', premium: 'Illimité' },
  { label: 'Test de niveau gratuit', free: true, premium: true },
  { label: 'Corrigés et explications', free: true, premium: true },
  { label: 'Vocabulaire et cartes mémoire', free: true, premium: true },
  { label: 'Examens blancs chronométrés', free: '1 gratuit', premium: 'Illimités' },
  { label: 'Certifications et scores estimés', free: true, premium: true },
  { label: 'Progression détaillée par compétence', free: false, premium: true },
  { label: 'Suivi illimité de vos résultats', free: false, premium: true },
];

const FAQ = [
  {
    q: 'Puis-je utiliser Premium sur plusieurs appareils ?',
    a: 'Oui — l\'abonnement est rattaché à votre compte, pas à un appareil.',
  },
  {
    q: 'Comment fonctionne la résiliation ?',
    a: 'Vous pouvez annuler à tout moment depuis votre compte, sans engagement. L\'accès Premium reste actif jusqu\'à la fin de la période déjà payée.',
  },
  {
    q: 'Les scores affichés sont-ils officiels ?',
    a: 'Non. Les scores estimés de Prep-Anglais sont des indications de niveau issues de nos exercices. Ils ne remplacent jamais un passage officiel de l\'examen.',
  },
];

function cell(v: string | boolean) {
  if (v === true) return <Check className="mx-auto h-5 w-5 text-brand-600" aria-label="Inclus" />;
  if (v === false) return <Minus className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" aria-label="Non inclus" />;
  return <span className="text-sm font-semibold text-ink dark:text-slate-200">{v}</span>;
}

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <header className="mx-auto max-w-2xl text-center">
        <p className="micro-label">Tarifs</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          Une formule claire pour chaque étape
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Gratuit pour commencer, Premium quand vous visez un résultat précis. Sans engagement,
          résiliable à tout moment.
        </p>
      </header>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {PLANS.map((plan) => (
          <PricingCard key={plan.slug} plan={plan} currency={CURRENCY} />
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-ink-faint dark:text-slate-500">
        {FREE_PLAN.summary}
      </p>

      <section className="mt-20">
        <h2 className="text-center font-serif text-3xl tracking-tight text-ink dark:text-white">
          Comparer les formules
        </h2>
        <div className="mx-auto mt-8 max-w-3xl overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full min-w-[520px] text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-sm font-semibold dark:border-slate-800 dark:bg-slate-800/60">
                <th scope="col" className="px-6 py-4 text-ink-soft dark:text-slate-300">Fonctionnalité</th>
                <th scope="col" className="px-4 py-4 text-center text-ink-soft dark:text-slate-300">Gratuit</th>
                <th scope="col" className="px-4 py-4 text-center text-ink dark:text-slate-100">Premium</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f, i) => (
                <tr
                  key={f.label}
                  className={
                    i % 2
                      ? 'border-t border-slate-100 dark:border-slate-800'
                      : 'border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/30'
                  }
                >
                  <th scope="row" className="px-6 py-3.5 text-sm font-medium text-ink dark:text-slate-200">
                    {f.label}
                  </th>
                  <td className="px-4 py-3.5 text-center">{cell(f.free)}</td>
                  <td className="px-4 py-3.5 text-center">{cell(f.premium)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl">
        <h2 className="text-center font-serif text-3xl tracking-tight text-ink dark:text-white">
          Questions fréquentes
        </h2>
        <div className="mt-8 space-y-3">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-ink dark:text-white">
                {f.q}
                <span className="ml-4 shrink-0 text-brand-500 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-ink-faint dark:text-slate-500">
            Une question ? Parcourez nos guides ou écrivez-nous.
          </p>
          <Link
            href="/signup"
            className="mt-3 inline-flex items-center justify-center rounded-lg bg-brand-700 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-800"
          >
            Commencer gratuitement
          </Link>
        </div>
      </section>
    </div>
  );
}