'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import Button from '@/components/ui/button';
import { HAS_SUPABASE } from '@/lib/config';
import { createSupabaseBrowser } from '@/lib/supabase-client';
import { useUser } from '@/components/providers';

export default function AccountForm({
  initial,
}: {
  initial: { targetExam: string; targetScore: string; examDate: string };
}) {
  const { user } = useUser();
  const [targetExam, setTargetExam] = useState(initial.targetExam);
  const [targetScore, setTargetScore] = useState(initial.targetScore);
  const [examDate, setExamDate] = useState(initial.examDate);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const readOnly = !HAS_SUPABASE || !user;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (readOnly) return;
    setBusy(true);
    setError(null);
    try {
      const supabase = createSupabaseBrowser();
      const { error } = await supabase
        .from('profiles')
        .update({
          target_exam: targetExam || null,
          target_score: targetScore || null,
          exam_date: examDate || null,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user!.id);
      if (error) throw error;
      setSaved(true);
      setTimeout(() => setSaved(false), 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Impossible de sauvegarder.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
      <div>
        <label htmlFor="targetExam" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
          Examen visé
        </label>
        <select
          id="targetExam"
          value={targetExam}
          onChange={(e) => setTargetExam(e.target.value)}
          disabled={readOnly}
          className="h-11 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30 disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
        >
          <option value="">Non défini</option>
          <option value="toefl">TOEFL</option>
          <option value="toeic">TOEIC</option>
          <option value="ielts">IELTS</option>
          <option value="cambridge">Cambridge English</option>
          <option value="duolingo">Duolingo English Test</option>
        </select>
      </div>
      <div>
        <label htmlFor="targetScore" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
          Score cible
        </label>
        <Input
          id="targetScore"
          type="text"
          value={targetScore}
          onChange={(e) => setTargetScore(e.target.value)}
          placeholder="Ex. 6,5 / 100 / B2"
          disabled={readOnly}
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="examDate" className="mb-1.5 block text-sm font-semibold text-ink dark:text-slate-200">
          Date de l&apos;examen
        </label>
        <Input
          id="examDate"
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          disabled={readOnly}
        />
      </div>

      {!readOnly && (
        <div className="sm:col-span-2">
          <Button type="submit" disabled={busy}>
            {busy ? 'Enregistrement…' : 'Enregistrer mes objectifs'}
          </Button>
          {saved && (
            <span className="ml-3 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              Enregistré.
            </span>
          )}
          {error && <span className="ml-3 text-sm font-medium text-red-600 dark:text-red-400">{error}</span>}
        </div>
      )}
    </form>
  );
}