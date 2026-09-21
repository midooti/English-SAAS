'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Share2 } from 'lucide-react';
import Button from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

/**
 * Partage de cartes de score — aucune donnée privée.
 * Copie du texte dans le presse-papiers et téléchargement de la carte
 * Prep-Anglais via /api/og (variant share).
 */
export default function ShareControls({ text }: { text: string }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${text}\n— Prep-Anglais (entraînement gratuit)`);
      setCopied(true);
      trackEvent('share_created', { medium: 'copy' });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard indisponible */
    }
  }

  function downloadCard() {
    router.prefetch('/api/og?share=1');
    window.open(`/api/og?title=${encodeURIComponent(text)}&variant=share`, '_blank', 'noopener');
    trackEvent('share_created', { medium: 'card' });
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button variant="secondary" size="sm" onClick={copy}>
        <Share2 className="h-4 w-4" />
        {copied ? 'Copié !' : 'Copier le score'}
      </Button>
      <Button variant="ghost" size="sm" onClick={downloadCard}>
        Télécharger la carte
      </Button>
    </div>
  );
}