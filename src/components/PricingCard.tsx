import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import PricingButton from '@/components/PricingButton';
import { type Plan, type Currency } from '@/lib/config';

/**
 * Carte d'abonnement (version éditoriale) : sobre, lisible, sans motifs
 * décoratifs ni accroches marketing.
 */
export default function PricingCard({
  plan,
  currency,
}: {
  plan: Plan;
  currency: Currency;
}) {
  const highlight = plan.slug === 'premium_yearly';
  const symbol = currency === 'EUR' ? '€' : currency === 'USD' ? '$' : currency;
  return (
    <Card
      className={cn(
        'relative flex flex-col p-8',
        highlight &&
          'border-brand-300 bg-brand-50/40 dark:border-brand-700 dark:bg-brand-900/20 shadow-lift'
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-serif text-2xl tracking-tight text-ink dark:text-white">{plan.name}</h2>
        {plan.bestValue && (
          <span className="micro-label-accent shrink-0">Recommandé</span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{plan.description}</p>

      <p className="mt-7 flex items-baseline gap-1">
        <span className="text-5xl font-semibold tracking-tight text-ink dark:text-white">
          {symbol}
          {formatPrice(plan.monthlyPrice)}
        </span>
        <span className="text-sm font-medium text-ink-faint dark:text-slate-500">
          {plan.billingPeriodLabel}
        </span>
      </p>

      <ul className="mt-7 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300"
              aria-hidden="true"
            />
            <span className="text-ink dark:text-slate-200">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PricingButton
          plan={plan.slug}
          label={plan.ctaLabel}
          variant={highlight ? 'primary' : 'secondary'}
        />
      </div>
    </Card>
  );
}