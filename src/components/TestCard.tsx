import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type ExamInfo } from '@/lib/exams';

/**
 * Carte « examen » riche (Présentation, compétences, format, durée,
 * ressources). Informative et dense — aucune icône décorative.
 */
export default function TestCard({ exam }: { exam: ExamInfo }) {
  return (
    <Card className="flex flex-col p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-serif text-2xl tracking-tight text-ink dark:text-white">{exam.name}</h3>
        {!exam.developed && <Badge variant="neutral">Bientôt</Badge>}
      </div>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="micro-label">Présentation</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
            {exam.presentation}
          </dd>
        </div>
        <div>
          <dt className="micro-label">Compétences évaluées</dt>
          <dd className="mt-1">
            <ul className="flex flex-wrap gap-1.5">
              {exam.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded border border-slate-200 px-2 py-0.5 text-xs font-medium text-ink-soft dark:border-slate-700 dark:text-slate-300"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <dt className="micro-label">Format</dt>
            <dd className="mt-1 text-sm leading-snug text-ink-soft dark:text-slate-400">{exam.format}</dd>
          </div>
          <div>
            <dt className="micro-label">Durée</dt>
            <dd className="mt-1 text-sm font-semibold text-ink dark:text-slate-200">{exam.duration}</dd>
          </div>
        </div>
        <div>
          <dt className="micro-label">Ressources disponibles</dt>
          <dd className="mt-1">
            <ul className="space-y-0.5">
              {exam.resources.map((r) => (
                <li key={r} className="text-sm text-ink-soft dark:text-slate-400">
                  {r}
                </li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
        {exam.developed ? (
          <Link
            href={`/${exam.slug}`}
            className="inline-flex w-full items-center justify-center rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Préparer {exam.name}
          </Link>
        ) : (
          <p className="text-center text-sm font-medium text-ink-faint dark:text-slate-500">
            Préparation disponible prochainement
          </p>
        )}
      </div>
    </Card>
  );
}