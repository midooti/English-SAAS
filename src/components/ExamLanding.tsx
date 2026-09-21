import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/button';
import { exams } from '@/lib/exams';

/** Composant shared pour les pages SEO dédiées à chaque examen. */
export default function ExamLanding({ examKey }: { examKey: (typeof exams)[number]['key'] }) {
  const exam = exams.find((e) => e.key === examKey)!;

  const steps = [
    {
      title: '1. Diagnostic gratuit',
      text: `Un court diagnostic ${exam.name}, avec un score estimé dès les premières minutes.`,
    },
    {
      title: '2. S\u2019entraîner chaque jour',
      text: `Des exercices ${exam.name} adaptés à chaque compétence, avec explications et progression après chaque réponse.`,
    },
    {
      title: '3. Suivre sa progression',
      text: 'Visualisez vos progrès par compétence jusqu\u2019à atteindre votre objectif, mesuré en toute transparence.',
    },
  ];

  const faqs = exam.developed
    ? [
        {
          q: `S\u2019agit-il d\u2019un score officiel ${exam.name} ?`,
          a: 'Non. Prep-Anglais fournit des scores d\u2019entraînement estimés, à titre indicatif. Nous ne sommes affiliés à aucun organisme d\u2019examen officiel.',
        },
        {
          q: `Comment ma préparation ${exam.name} est-elle personnalisée ?`,
          a: 'Le diagnostic estime votre niveau actuel, puis le plan commence par vos compétences les plus faibles.',
        },
      ]
    : [
        {
          q: `Quand la préparation ${exam.name} sera-t-elle disponible ?`,
          a: `${exam.name} arrive bientôt. Les parcours TOEFL et TOEIC sont entièrement disponibles pendant que nous construisons les autres.`,
        },
        {
          q: 'Puis-je m\u2019entraîner en attendant ?',
          a: 'Oui. Les exercices TOEFL et TOEIC mobilisent les mêmes compétences de base et se transposent bien aux autres examens.',
        },
      ];

  const keyFacts = [
    { label: 'Durée de l\u2019examen', value: exam.duration },
    { label: 'Format', value: exam.format },
    { label: 'Échelle de score', value: exam.scale },
    { label: 'Compétences évaluées', value: exam.skills.join(' · ') },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Préparation ${exam.name} — Prep-Anglais`,
            description: exam.tagline,
            provider: { '@type': 'Organization', name: 'Prep-Anglais' },
            areaServed: 'Worldwide',
          }),
        }}
      />

      {/* 01 — Présentation éditoriale */}
      <section className="border-b border-slate-200 bg-paper dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="micro-label">Préparation {exam.name}</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl dark:text-white">
              Préparer {exam.name} avec méthode
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-slate-400">
              {exam.tagline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/diagnostic">
                <Button variant="primary" size="lg">
                  Évaluer mon niveau gratuitement <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/practice">
                <Button variant="secondary" size="lg">
                  S&apos;entraîner {exam.name}
                </Button>
              </Link>
            </div>

            {!exam.developed && (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-ink-soft dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                Préparation en cours — {exam.skills.join(' · ')}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* 02 — Fiche de l'examen (faits réels, aucun chiffre inventé) */}
      <section className="mx-auto max-w-5xl px-4 pb-6 sm:px-6">
        <dl className="grid gap-4 sm:grid-cols-2">
          {keyFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="micro-label">{fact.label}</dt>
              <dd className="mt-2 font-serif text-lg leading-snug tracking-tight text-ink dark:text-white">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 03 — La méthode */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="micro-label">La méthode</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
            Comment se préparer en trois étapes
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft dark:text-slate-400">
            Un chemin clair vers votre {exam.scale}.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="section-number">0{i + 1}</span>
              <h3 className="mt-3 font-serif text-xl tracking-tight text-ink dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 — Compétences évaluées */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center">
            <p className="micro-label">Compétences</p>
            <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
              Les compétences évaluées
            </h2>
          </div>
          <ul className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {exam.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-ink dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 — FAQ + CTA */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <p className="micro-label">Foire aux questions</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-ink sm:text-4xl dark:text-white">
            Questions fréquentes sur {exam.name}
          </h2>
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-ink dark:text-white">
                {f.q}
                <span className="ml-4 shrink-0 text-brand-500 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-brand-200 bg-brand-50/40 p-8 text-center shadow-soft dark:border-brand-800 dark:bg-slate-900">
          <h3 className="font-serif text-2xl tracking-tight text-ink dark:text-white">
            Atteindre son objectif {exam.name}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft dark:text-slate-400">
            Gratuit pour commencer. Aucune carte bancaire requise.
          </p>
          <div className="mt-6">
            <Link href="/diagnostic">
              <Button variant="primary" size="lg">
                Évaluer mon niveau gratuitement <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}