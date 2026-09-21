import type { Metadata } from 'next';
import { buildRegistry, type RegistryEntry } from '@/lib/seo-registry';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Audit SEO — Interne',
  description: 'Audit interne des routes indexables Prep-Anglais. Réservé à l\u2019équipe, non destiné au public.',
  path: '/internal/seo',
  noindex: true,
});

const categoryLabels: Record<RegistryEntry['category'], string> = {
  home: 'Accueil',
  test: 'Tests',
  practice: 'Entraînement',
  vocabulary: 'Vocabulaire',
  'study-plan': 'Plans d\u2019étude',
  score: 'Score',
  blog: 'Blog',
  tool: 'Outils',
  'exam-section': 'Guides d\u2019examen',
};

export default function SeoDashboard() {
  const entries = buildRegistry();
  const byCategory = entries.reduce<Record<string, RegistryEntry[]>>((acc, entry) => {
    acc[entry.category] = acc[entry.category] ?? [];
    acc[entry.category].push(entry);
    return acc;
  }, {});

  const total = entries.length;
  const canonicals = entries.filter((e) => e.canonical).length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800 dark:border-slate-800 dark:bg-slate-900 dark:text-amber-200">
        Tableau de bord interne — cette page est noindex et exclue du robots.txt. À ne pas exposer
        dans la navigation publique.
      </p>

      <h1 className="mt-6 font-serif text-3xl leading-tight tracking-tight text-ink dark:text-white">
        Registre des routes SEO
      </h1>
      <p className="mt-2 text-ink-soft dark:text-slate-400">
        {total} itinéraires indexés/partagés · {canonicals} avec canonical · {total - canonicals} sans.
        Ajoutez d&apos;abord les nouvelles pages ici — le sitemap et ce tableau de bord partagent cette liste.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {Object.entries(categoryLabels).map(([key, label]) => (
          <div
            key={key}
            className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="micro-label">{label}</p>
            <p className="mt-1 font-serif text-3xl tracking-tight text-ink dark:text-white">
              {(byCategory[key] ?? []).length}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
        <table className="w-full min-w-[640px] bg-white text-left text-sm dark:bg-slate-900">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400">
              <th className="px-4 py-3">Chemin</th>
              <th className="px-4 py-3">Catégorie</th>
              <th className="px-4 py-3">Canonical</th>
              <th className="px-4 py-3">Titre</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr
                key={entry.path}
                className="border-t border-slate-100 dark:border-slate-800"
              >
                <td className="px-4 py-3 font-mono text-xs text-brand-700 dark:text-brand-300">{entry.path}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-ink-soft dark:bg-slate-800 dark:text-slate-300">
                    {categoryLabels[entry.category]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  {entry.canonical ? (
                    <span className="text-emerald-600 dark:text-emerald-400">oui</span>
                  ) : (
                    <span className="text-red-500">manquant</span>
                  )}
                </td>
                <td className="max-w-sm truncate px-4 py-3 text-ink-soft dark:text-slate-300">
                  {entry.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}