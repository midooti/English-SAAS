'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import { setDemoPremium } from '@/lib/auth-client';
import { cn } from '@/lib/utils';

type PlanSlug = 'premium_monthly' | 'premium_yearly';

/**
 * Bouton "Start Premium" :
 * - Stripe configuré      -> POST /api/checkout puis redirection Checkout.
 * - Stripe non configuré  -> message clair + activation de DÉMO (jamais un faux succès).
 */
export default function PricingButton({
  plan,
  label = 'Start Premium',
  variant = 'primary',
  className,
}: {
  plan: PlanSlug;
  label?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [demo, setDemo] = useState(false);

  async function checkout() {
    setBusy(true);
    setMessage(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = (await res.json().catch(() => ({}))) as { url?: string; error?: string };

      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }

      if (res.status === 503) {
        setMessage(
          'Stripe is not configured yet (demo build). Use the demo toggle below to preview Premium.'
        );
        setDemo(true);
        return;
      }

      setMessage(data.error ?? 'Unable to start checkout. Please try again later.');
    } catch {
      setMessage('Unable to start checkout. Please try again later.');
    } finally {
      setBusy(false);
    }
  }

  function enableDemo() {
    setDemoPremium(true);
    setMessage('Premium preview enabled — reloading…');
    setTimeout(() => router.refresh(), 600);
  }

  return (
    <div className={className}>
      <Button
        variant={variant}
        size="lg"
        className={cn('w-full')}
        onClick={checkout}
        disabled={busy}
      >
        {busy ? 'Redirecting…' : label}
      </Button>

      {message && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white/80 p-3 text-center text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
          {message}
          {demo && (
            <button
              type="button"
              onClick={enableDemo}
              className="ml-2 font-bold text-brand-600 underline dark:text-brand-300"
            >
              Enable demo premium
            </button>
          )}
        </div>
      )}
    </div>
  );
}