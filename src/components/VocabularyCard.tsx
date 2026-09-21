'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { VocabWord, VocabCategory } from '@/lib/vocabulary';

const categoryLabels: Record<VocabCategory, string> = {
  Academic: 'Académique',
  Business: 'Professionnel',
  University: 'Université',
  Travel: 'Voyage',
  Technology: 'Technologie',
  Science: 'Sciences',
  'Daily English': 'Anglais courant',
};

const difficultyLabels: Record<VocabWord['difficulty'], string> = {
  easy: 'Facile',
  medium: 'Intermédiaire',
  hard: 'Difficile',
};

/**
 * Carte de vocabulaire : flashcard recto/verso + « Ajouter à la révision ».
 * (Révision = répétition espacée ; stockée localement en développement, Supabase en production.)
 */
export default function VocabularyCard({ word }: { word: VocabWord }) {
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(false);

  function handleReview(e: React.MouseEvent) {
    e.stopPropagation();
    setReviewed(true);
    try {
      const list = JSON.parse(localStorage.getItem('prep_review') ?? '[]') as string[];
      if (!list.includes(word.id)) {
        localStorage.setItem('prep_review', JSON.stringify([...list, word.id]));
      }
    } catch {
      /* ignore */
    }
  }

  return (
    <Card
      className="group flex min-h-[180px] cursor-pointer flex-col justify-between p-6 transition hover:-translate-y-1 hover:shadow-lift"
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flex items-start justify-between">
        <Badge variant="neutral">{categoryLabels[word.category]}</Badge>
        <Badge
          variant={word.difficulty === 'easy' ? 'success' : word.difficulty === 'medium' ? 'default' : 'accent'}
        >
          {difficultyLabels[word.difficulty]}
        </Badge>
      </div>

      {!flipped ? (
        <div className="my-4">
          <p className="font-serif text-xl tracking-tight text-ink dark:text-white">{word.word}</p>
          <p className="mt-1 text-sm text-ink-faint dark:text-slate-500">
            Cliquer pour voir la définition
          </p>
        </div>
      ) : (
        <div className="my-4">
          <p className="text-sm font-semibold text-ink dark:text-slate-100">{word.definition}</p>
          <p className="mt-2 text-sm italic text-ink-soft dark:text-slate-400">“{word.example}”</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {word.synonyms.map((s) => (
              <span
                key={s}
                className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-ink-soft dark:bg-slate-800 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <Button
        variant={reviewed ? 'secondary' : 'primary'}
        size="sm"
        onClick={handleReview}
        className={cn('w-full', reviewed && 'text-emerald-600')}
      >
        {reviewed ? 'Ajouté à la révision' : 'Ajouter à la révision'}
      </Button>
    </Card>
  );
}