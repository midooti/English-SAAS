'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type PlanSlug } from '@/lib/config';

/**
 * Bouton « Souscrire à Premium » :
 * - Stripe configuré      -> POST /api/checkout puis redirection Checkout.
 * - Stripe non configuré  -> message d'erreur franc (« service indisponible »),
 *                            jamais d'activation de démo fantôme.
 */
export default function PricingButton({
  plan,
  label = 'Souscrire à Premium',
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
          'Les paiements en ligne ne sont pas encore activés sur cette plateforme de test. Revenez plus tard.'
        );
        return;
      }

      setMessage(data.error ?? 'Impossible de lancer la souscription. Réessayez dans quelques instants.');
    } catch {
      setMessage('Impossible de lancer la souscription. Réessayez dans quelques instants.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={className}>
      <Button variant={variant} size="lg" className={cn('w-full')} onClick={checkout} disabled={busy}>
        {busy ? 'Redirection…' : label}
      </Button>

      {message && message.startsWith('Les paiements') && (
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-faint dark:text-slate-500">
          {message}
        </p>
      )}
      {message && !message.startsWith('Les paiements') && (
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft dark:text-slate-400">
          {message}
        </p>
      )}
    </div>
  );
}