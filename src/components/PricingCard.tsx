import Link from 'next/link';
import { Check, Crown } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { formatPrice } from '@/lib/utils';
import PricingButton from '@/components/PricingButton';

export type Plan = {
  slug: 'premium_monthly' | 'premium_yearly';
  name: string;
  price: number;
  description: string;
  bestValue?: boolean;
  features: string[];
};

export default function PricingCard({ plan }: { plan: Plan }) {
  const highlight = plan.bestValue;
  return (
    <Card
      className={cn(
        'relative flex flex-col overflow-hidden p-7 transition hover:-translate-y-1',
        highlight &&
          'border-transparent bg-gradient-to-b from-brand-600 to-brand-700 text-white shadow-lift'
      )}
    >
      {highlight && (
        <Badge
          variant="accent"
          className="absolute right-5 top-5 bg-white text-brand-700"
        >
          Best value
        </Badge>
      )}

      <div className="flex items-center gap-2">
        {highlight && <Crown className="h-5 w-5 text-accent-300" />}
        <h3 className={cn('text-lg font-extrabold', highlight ? 'text-white' : 'text-slate-900 dark:text-white')}>
          {plan.name}
        </h3>
      </div>
      <p className={cn('mt-1 text-sm', highlight ? 'text-brand-100' : 'text-slate-500 dark:text-slate-400')}>
        {plan.description}
      </p>

      <p className="mt-6 flex items-baseline gap-1">
        <span
          className={cn(
            'text-5xl font-extrabold tracking-tight',
            highlight ? 'text-white' : 'text-slate-900 dark:text-white'
          )}
        >
          €{formatPrice(plan.price)}
        </span>
        <span className={cn('text-sm font-medium', highlight ? 'text-brand-100' : 'text-slate-400')}>
          / {plan.slug.includes('year') ? 'year' : 'month'}
        </span>
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check
              className={cn('mt-0.5 h-4 w-4 shrink-0', highlight ? 'text-accent-300' : 'text-brand-500')}
            />
            <span className={highlight ? 'text-brand-50' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <PricingButton
          plan={plan.slug}
          variant={highlight ? 'secondary' : 'primary'}
          label="Start Premium"
        />
      </div>
    </Card>
  );
}