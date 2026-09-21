'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { type PlanSlug } from '@/lib/config';

/**
 * Bouton « Souscrire à Premium » :
 * - POST /api/checkout (Price ID résolu côté serveur selon le plan) ;
 * - redirection vers Stripe Checkout ;
 * - si l'utilisateur n'est pas connecté, redirection vers la connexion
 *   puis retour automatique vers la page de tarifs.
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
        setMessage('Redirection vers Stripe…');
        window.location.href = data.url;
        return;
      }

      if (res.status === 401) {
        router.push('/login?redirect=/pricing');
        return;
      }

      setMessage(
        data.error ?? 'Impossible de lancer la souscription. Réessayez dans quelques instants.'
      );
      setBusy(false);
    } catch {
      setMessage('Impossible de lancer la souscription. Réessayez dans quelques instants.');
      setBusy(false);
    }
  }

  return (
    <div className={className}>
      <Button variant={variant} size="lg" className={cn('w-full')} onClick={checkout} disabled={busy}>
        {busy ? 'Redirection vers Stripe…' : label}
      </Button>

      {message && (
        <p className="mt-3 text-center text-xs leading-relaxed text-ink-soft dark:text-slate-400">
          {message}
        </p>
      )}
    </div>
  );
}
