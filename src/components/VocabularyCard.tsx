'use client';

import { useState } from 'react';
import { Bookmark, Check, Volume2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { VocabWord } from '@/lib/vocabulary';

/**
 * Carte de vocabulaire : flashcard front/back + "Add to review".
 * (Review = répétition espacée ; stockée localement en démo, Supabase en prod.)
 */
export default function VocabularyCard({ word }: { word: VocabWord }) {
  const [flipped, setFlipped] = useState(false);
  const [reviewed, setReviewed] = useState(false);

  function handleReview(e: React.MouseEvent) {
    e.stopPropagation();
    setReviewed(true);
    try {
      const list = JSON.parse(localStorage.getItem('scoreup_review') ?? '[]') as string[];
      if (!list.includes(word.id)) {
        localStorage.setItem('scoreup_review', JSON.stringify([...list, word.id]));
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
        <Badge variant="neutral">{word.category}</Badge>
        <Badge
          variant={word.difficulty === 'easy' ? 'success' : word.difficulty === 'medium' ? 'default' : 'accent'}
        >
          {word.difficulty}
        </Badge>
      </div>

      {!flipped ? (
        <div className="my-4">
          <p className="flex items-center gap-2 text-xl font-extrabold text-slate-900 dark:text-white">
            <Volume2 className="h-5 w-5 text-brand-400" aria-hidden="true" />
            {word.word}
          </p>
          <p className="mt-1 text-sm text-slate-400">Tap to see definition</p>
        </div>
      ) : (
        <div className="my-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{word.definition}</p>
          <p className="mt-2 text-sm italic text-slate-500 dark:text-slate-400">“{word.example}”</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {word.synonyms.map((s) => (
              <span
                key={s}
                className="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-300"
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
        {reviewed ? <Check className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
        {reviewed ? 'Added to review' : 'Add to review'}
      </Button>
    </Card>
  );
}