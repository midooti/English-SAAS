import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import { exams } from '@/lib/exams';
import { PLANS, FREE_PLAN, CURRENCY, SITE_NAME, SITE_URL, SITE_TAGLINE } from '@/lib/config';
import { seoMetadata } from '@/lib/seo';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = seoMetadata({
  title: 'Prep-Anglais — Préparation aux examens d\u2019anglais : TOEFL, TOEIC, IELTS',
  description:
    'Préparez vos examens d\u2019anglais (TOEFL, TOEIC, IELTS, Cambridge, Duolingo English Test) avec une méthode structurée : diagnostic gratuit, exercices, vocabulaire et examens blancs. Scores estimés, jamais officiels.',
  path: '/',
  overline: SITE_TAGLINE,
});

const steps = [
  {
    num: '1',
    title: 'Évaluer',
    text: 'Un diagnostic gratuit (~20 minutes) pour estimer votre niveau en lecture, écoute et vocabulaire.',
  },
  {
    num: '2',
    title: 'Travailler',
    text: 'Un programme quotidien d\u2019exercices adapté à votre examen et à vos compétences les plus faibles.',
  },
  {
    num: '3',
    title: 'Progresser',
    text: 'Un suivi chiffré : score estimé, progression par compétence et examens blancs chronométrés.',
  },
];

const skills = [
  {
    num: '01',
    title: 'Compréhension écrite',
    text: 'Textes académiques et professionnels, question par question, avec corrigés détaillés.',
  },
  {
    num: '02',
    title: 'Compréhension orale',
    text: 'Enregistrements variés : cours, réunions, conversations, émissions. Attention aux détails et aux idées principales.',
  },
  {
    num: '03',
    title: 'Expression écrite',
    text: 'Prise de note structurée, essais guidés et affirmations argumentées.',
  },
  {
    num: '04',
    title: 'Expression orale',
    text: 'Réponses guidées aux questions types : opinion personnelle, description, synthèse.',
  },
  {
    num: '05',
    title: 'Vocabulaire ciblé',
    text: 'Listes thématiques (académique, professionnel) intégrées aux exercices et au suivi.',
  },
  {
    num: '06',
    title: 'Gestion du temps',
    text: 'Rythme de lecture, répartition du temps par section, examens blancs chronométrés.',
  },
];

const scenarios = [
  {
    title: 'Études à l\u2019étranger',
    text: 'TOEFL ou IELTS académique : entraînement sur les sections Reading, Listening et les épreuves d\u2019expression.',
  },
  {
    title: 'Vie professionnelle',
    text: 'TOEIC : priorité à la compréhension et au vocabulaire du monde de l\u2019entreprise.',
  },
  {
    title: 'Remise à niveau',
    text: 'Cambridge English : vocabulaire et grammaire progressifs, alignés sur les niveaux A2 à C1.',
  },
];

const faqs = [
  {
    q: 'Le test de niveau est-il vraiment gratuit ?',
    a: 'Oui. Le diagnostic gratuit ne demande aucune carte bancaire et fournit un score estimé utilisé pour bâtir votre programme.',
  },
  {
    q: 'Ces scores sont-ils des notes officielles ?',
    a: 'Non. Tous les scores de Prep-Anglais sont des estimations issues de nos exercices, à titre indicatif. Nous ne sommes affiliés à aucun organisme d\u2019examen.',
  },
  {
    q: 'Combien de temps faut-il travailler chaque jour ?',
    a: 'Environ 20 à 30 minutes. Le programme privilégie des séances courtes et régulières : la régularité gagne sur le bachotage.',
  },
  {
    q: 'Puis-je commencer sans savoir encore quel examen passer ?',
    a: 'Oui. Le diagnostic est indépendant de l\u2019examen choisi. Vous pourrez ensuite orienter vos exercices vers le test adapté à votre objectif.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description: SITE_TAGLINE,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

const currencySymbol = CURRENCY === 'EUR' ? '€' : CURRENCY === 'USD' ? '$' : CURRENCY;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 01 — Héros éditorial */}
      <section className="border-b border-slate-200 bg-paper dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
          <div className="max-w-3xl">
            <p className="micro-label">Préparation aux examens d&apos;anglais</p>
            <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-ink sm:text-6xl dark:text-white">
              Préparez vos examens d&apos;anglais avec méthode.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft dark:text-slate-400">
              Des diagnostics gratuits, des exercices guidés et des examens blancs pour construire
              une progression régulière — du test de niveau au jour J, avec des scores estimés,
              jamais officiels.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/diagnostic"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-700 px-6 text-base font-semibold text-white transition hover:bg-brand-800"
              >
                Évaluer mon niveau gratuitement
              </Link>
              <Link
                href="/tests"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-base font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                Découvrir les examens
              </Link>
            </div>
            <p className="mt-6 text-sm text-ink-faint dark:text-slate-500">
              TOEFL, TOEIC, IELTS, Cambridge English, Duolingo English Test.
            </p>
          </div>
        </div>
      </section>

      {/* 02 — La méthode en 3 étapes */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading num="01" overline="La méthode" title="Évaluer, travailler, progresser" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <span className="font-serif text-5xl font-semibold text-brand-100 dark:text-brand-800" aria-hidden="true">
                {step.num}
              </span>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-ink dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 03 — Examens couverts */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              num="02"
              overline="Examens"
              title="Une préparation pour chaque examen"
              text="Cinq examens majeurs, des fiches comparatives et des parcours adaptés à leur format."
            />
            <Link
              href="/tests"
              className="shrink-0 font-semibold text-brand-700 transition hover:text-brand-800 dark:text-brand-300"
            >
              Comparer les examens →
            </Link>
          </div>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-5 dark:border-slate-800 dark:bg-slate-800">
            {exams.map((exam) => (
              <li key={exam.key} className="flex flex-col bg-white p-6 dark:bg-slate-900">
                <h3 className="font-serif text-lg tracking-tight text-ink dark:text-white">{exam.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{exam.tagline}</p>
                <Link
                  href={`/${exam.slug}`}
                  className="mt-4 text-sm font-semibold text-brand-700 transition hover:text-brand-800 dark:text-brand-300"
                >
                  {exam.developed ? 'Se préparer' : 'Fiche détaillée'} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 — Aptitudes travaillées */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          num="03"
          overline="Programme"
          title="Six compétences, un entraînement régulier"
          text="Chaque compétence est travaillée selon le format exact de l\u2019examen visé, avec corrigés et explications."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.num} className="border-t border-brand-200 pt-4 dark:border-brand-800">
              <p className="text-xs font-semibold text-ink-faint dark:text-slate-500">{skill.num}</p>
              <h3 className="mt-1 font-serif text-xl tracking-tight text-ink dark:text-white">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{skill.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 05 — Vocabulaire et score estimé */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionHeading
            num="04"
            overline="Vocabulaire & estimation"
            title="Un vocabulaire systématique, un score estimé objectif"
            text="Chaque série d\u2019exercices réactualise votre score estimé par compétence et nourrit des cartes mémoire classées par thème — pour retrouver les mots dans le contexte où ils apparaissent réellement à l\u2019examen."
          />
          <ul className="space-y-3">
            {[
              'Cartes mémoire organisées par thème (académique, professionnel)',
              'Répétition espacée : les mots reviennent juste avant d\u2019être oubliés',
              'Score estimé réactualisé après chaque exercice',
              'Objectif de niveau explicite (B1, B2, C1) pour situer sa progression',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-ink dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-brand-600 dark:bg-brand-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 06 — Examens blancs */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <SectionHeading
            num="05"
            overline="Examens blancs"
            title="Se confronter au format réel, dans les conditions du jour J"
            text="Sections chronométrées, ordre et durée alignés sur l\u2019examen officiel, correction détaillée à la fin : un examen blanc est le meilleur révélateur de votre progression."
          />
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <p className="micro-label">Déroulé type d\u2019un examen blanc</p>
            <ol className="mt-5 space-y-4">
              {[
                { t: 'Compréhension écrite', d: 'Textes et questions chronométrés, comme à l\u2019examen.' },
                { t: 'Compréhension orale', d: 'Enregistrements joués une seule fois.' },
                { t: 'Expression', d: 'Réponses rédigées ou enregistrées selon le format.' },
                { t: 'Correction guidée', d: 'Score estimé et explications question par question.' },
              ].map((item, i) => (
                <li key={item.t} className="flex gap-4">
                  <span className="text-sm font-semibold text-brand-700 dark:text-brand-300">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-ink dark:text-white">{item.t}</h3>
                    <p className="text-sm text-ink-soft dark:text-slate-400">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/mock-tests"
              className="mt-7 inline-flex h-11 items-center justify-center rounded-lg bg-brand-700 px-5 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Découvrir les examens blancs
            </Link>
          </div>
        </div>
      </section>

      {/* 07 — Pour chaque objectif */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading num="06" overline="Objectifs" title="Une préparation pour chaque profil" align="center" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {scenarios.map((s) => (
              <article key={s.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <h3 className="font-serif text-xl tracking-tight text-ink dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — Tarification */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          num="07"
          overline="Tarifs"
          title="Gratuit pour commencer, Premium pour aller plus loin"
          text={FREE_PLAN.summary}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-serif text-xl tracking-tight text-ink dark:text-white">{FREE_PLAN.name}</h3>
            <p className="mt-4 text-4xl font-semibold tracking-tight text-ink dark:text-white">
              {currencySymbol}0<span className="text-sm font-medium text-ink-faint dark:text-slate-500"> / jamais</span>
            </p>
            <ul className="mt-6 space-y-2">
              {FREE_PLAN.features.map((f) => (
                <li key={f} className="text-sm text-ink-soft dark:text-slate-400">{f}</li>
              ))}
            </ul>
            <Link
              href="/signup"
              className="mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Créer un compte gratuit
            </Link>
          </div>
          {PLANS.map((plan) => (
            <div
              key={plan.slug}
              className={
                plan.slug === 'premium_yearly'
                  ? 'rounded-lg border border-brand-300 bg-brand-50/40 p-7 shadow-lift dark:border-brand-700 dark:bg-brand-900/20'
                  : 'rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900'
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl tracking-tight text-ink dark:text-white">{plan.name}</h3>
                {plan.bestValue && <span className="micro-label-accent">Recommandé</span>}
              </div>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink dark:text-white">
                  {currencySymbol}
                  {formatPrice(plan.monthlyPrice)}
                </span>
                <span className="text-sm font-medium text-ink-faint dark:text-slate-500">{plan.billingPeriodLabel}</span>
              </p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="text-sm text-ink-soft dark:text-slate-400">{f}</li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className={
                  plan.slug === 'premium_yearly'
                    ? 'mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg bg-brand-700 text-sm font-semibold text-white transition hover:bg-brand-800'
                    : 'mt-7 inline-flex h-11 w-full items-center justify-center rounded-lg border border-slate-300 bg-white text-sm font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'
                }
              >
                Voir la formule
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-faint dark:text-slate-500">
          Tous les tarifs en {CURRENCY === 'EUR' ? 'euros TTC' : 'dollars'}. Résiliable à tout moment depuis votre compte.
        </p>
      </section>

      {/* 09 — Prise en main */}
      <section className="border-y border-slate-200 bg-slate-50/60 py-16 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              num="08"
              overline="Prise en main"
              title="Commencer en trois minutes"
              text="Aucune carte bancaire pour débuter : un compte gratuit suffit."
            />
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { n: '1', t: 'Créez votre compte', d: 'Une adresse e-mail et un mot de passe, rien de plus.' },
              { n: '2', t: 'Passez le diagnostic', d: 'Une vingtaine de minutes, un score estimé immédiat.' },
              { n: '3', t: 'Suivez le programme', d: 'Des exercices quotidiens adaptés à votre niveau.' },
            ].map((s) => (
              <li key={s.n} className="rounded-lg border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
                <span className="font-serif text-5xl font-semibold text-brand-100 dark:text-brand-800" aria-hidden="true">
                  {s.n}
                </span>
                <h3 className="mt-4 font-serif text-xl tracking-tight text-ink dark:text-white">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{s.d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/signup"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-700 px-6 text-base font-semibold text-white transition hover:bg-brand-800"
            >
              Créer mon compte gratuitement
            </Link>
            <Link
              href="/diagnostic"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-base font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              Lancer le diagnostic
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — Questions fréquentes */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <SectionHeading num="09" overline="Foire aux questions" title="Questions fréquentes" align="center" />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-lg border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-ink dark:text-white">
                {faq.q}
                <span className="ml-4 shrink-0 text-brand-500 transition group-open:rotate-45" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 11 — Conclusion */}
      <section className="thin-sep mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="font-serif text-2xl leading-relaxed text-ink sm:text-3xl dark:text-white">
          « La régularité bat l\u2019intensité : un peu de travail chaque jour, c\u2019est déjà une
          méthode. »
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/diagnostic"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-700 px-6 text-base font-semibold text-white transition hover:bg-brand-800"
          >
            Évaluer mon niveau gratuitement
          </Link>
          <Link
            href="/tests"
            className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-base font-semibold text-ink transition hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          >
            Découvrir les examens
          </Link>
        </div>
      </section>
    </>
  );
}