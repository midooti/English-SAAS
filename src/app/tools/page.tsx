import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import CtaBanner from '@/components/seo/CtaBanner';
import Button from '@/components/ui/button';
import { seoMetadata } from '@/lib/seo';
import { tools } from '@/content/tools';

export const metadata: Metadata = seoMetadata({
  title: 'Outils gratuits — Calculateurs, tests et plans d\u2019étude | Prep-Anglais',
  description:
    'Des outils gratuits pour TOEFL, TOEIC et IELTS : calculateurs de score estimé, test de niveau rapide, générateurs de plan d\u2019étude et test de vocabulaire. Sans inscription.',
  path: '/tools',
  overline: 'Outils gratuits',
});

export default function ToolsIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Outils gratuits' }]} />

      <header className="max-w-3xl">
        <p className="micro-label">Outils gratuits</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl dark:text-white">
          Des outils qui transforment une estimation en plan
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
          Rapides, honnêtes et gratuits : estimez votre score, testez votre vocabulaire ou
          générez un plan d&apos;étude en une minute. Sans compte ni démarche superflue.
        </p>
      </header>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="group flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:border-brand-300 dark:border-slate-800 dark:bg-slate-900"
          >
            <h2 className="font-serif text-xl tracking-tight text-ink group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
              {tool.h1}
            </h2>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">
              {tool.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 dark:text-brand-300">
              Ouvrir l&apos;outil <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/diagnostic">
          <Button variant="primary" size="lg">
            Ou commencez par le diagnostic gratuit complet
          </Button>
        </Link>
      </div>

      <CtaBanner
        title="Les outils estiment. La pratique améliore."
        text="Transformez une simple estimation en un vrai plan : entraînement quotidien ciblé, tests blancs et suivi de progression."
        href="/pricing"
        label="Voir les formules"
      />
    </div>
  );
}