import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Minus } from 'lucide-react';
import PricingCard from '@/components/PricingCard';
import Button from '@/components/ui/button';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'ScoreUp is free to start. Unlock unlimited exercises, mock tests and the AI Coach with Premium — €9.99/month or €59.99/year.',
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const plans = [
  {
    slug: 'premium_monthly' as const,
    name: 'Premium monthly',
    price: 9.99,
    description: 'For short-term goals and intensive prep.',
    bestValue: false,
    features: [
      'Unlimited practice questions',
      'Full mock tests',
      'AI Coach chat',
      'Advanced progress analytics',
      'Cancel anytime',
    ],
  },
  {
    slug: 'premium_yearly' as const,
    name: 'Premium yearly',
    price: 59.99,
    description: 'Best value for a full-year study plan.',
    bestValue: true,
    features: [
      'Everything in Monthly',
      '2 months free (€59.99/yr)',
      'Priority new exams access',
      'Personalized study plan',
    ],
  },
];

const features: { label: string; free: string | boolean; premium: string | boolean }[] = [
  { label: 'Daily free questions', free: '5 / day', premium: 'Unlimited' },
  { label: 'Free diagnostic test', free: true, premium: true },
  { label: 'Question explanations', free: true, premium: true },
  { label: 'Vocabulary & flashcards', free: true, premium: true },
  { label: 'Full mock tests', free: '1 free', premium: true },
  { label: 'AI Coach chat', free: false, premium: true },
  { label: 'Writing & speaking feedback', free: false, premium: true },
  { label: 'Advanced progress analytics', free: false, premium: true },
  { label: 'No ads', free: false, premium: true },
];

const cell = (v: string | boolean) =>
  v === true ? (
    <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Included" />
  ) : v === false ? (
    <Minus className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" aria-label="Not included" />
  ) : (
    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{v}</span>
  );

export default function PricingPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Simple, honest pricing
          </h1>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            Free to start, Premium when you&apos;re ready to reach your target. No aggressive
            upselling, ever.
          </p>
        </header>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <PricingCard key={plan.slug} plan={plan} />
          ))}
        </div>

        {/* Comparison table */}
        <section className="mt-20">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Compare plans
          </h2>
          <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl border border-slate-200 shadow-soft dark:border-slate-800">
            <table className="w-full bg-white text-left dark:bg-slate-900">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-sm font-bold dark:border-slate-800 dark:bg-slate-800">
                  <th className="px-6 py-4 text-slate-500 dark:text-slate-300">Feature</th>
                  <th className="px-4 py-4 text-center text-slate-500 dark:text-slate-300">Free</th>
                  <th className="px-4 py-4 text-center text-brand-600 dark:text-brand-400">Premium</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr
                    key={f.label}
                    className={
                      i % 2
                        ? 'border-t border-slate-100 dark:border-slate-800'
                        : 'border-t border-slate-100 bg-slate-50/50 dark:border-slate-800 dark:bg-slate-800/40'
                    }
                  >
                    <td className="px-6 py-3.5 text-sm font-medium text-slate-700 dark:text-slate-200">
                      {f.label}
                    </td>
                    <td className="px-4 py-3.5 text-center">{cell(f.free)}</td>
                    <td className="px-4 py-3.5 text-center">{cell(f.premium)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto mt-20 max-w-3xl">
          <h2 className="text-center text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Pricing FAQ
          </h2>
          <div className="mt-8 space-y-3">
            {[
              {
                q: 'Can I have Premium on several devices?',
                a: 'Yes — Premium is tied to your account, not a device.',
              },
              {
                q: 'What does “unlimited” mean exactly?',
                a: 'Unlimited practice questions, full mock tests and AI Coach conversations while your subscription is active.',
              },
              {
                q: 'Can I cancel?',
                a: 'Yes, anytime from the billing portal. No lock-in.',
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white">
                  {f.q}
                  <span className="text-brand-500 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-slate-400">
              Questions? Reach us over email.
            </p>
            <Link href="/signup" className="mt-3 inline-block">
              <Button variant="primary" size="lg">
                Start for free
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}