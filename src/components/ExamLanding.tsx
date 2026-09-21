import Link from 'next/link';
import { ArrowRight, BarChart3, BookOpen, Target } from 'lucide-react';
import Button from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { exams } from '@/lib/exams';

/** Composant shared pour les pages SEO dédiées à chaque examen. */
export default function ExamLanding({ examKey }: { examKey: (typeof exams)[number]['key'] }) {
  const exam = exams.find((e) => e.key === examKey)!;

  const steps = [
    {
      icon: Target,
      title: '1. Free diagnostic',
      text: `Take a short ${exam.name} diagnostic and get an estimated score in minutes.`,
    },
    {
      icon: BookOpen,
      title: '2. Practice every day',
      text: `${exam.name} exercises for each skill, with explanations and XP after every answer.`,
    },
    {
      icon: BarChart3,
      title: '3. Watch the score climb',
      text: 'Track your progress with charts and skill-level breakdowns until you hit your target.',
    },
  ];

  const faqs = exam.developed
    ? [
        {
          q: `Is this an official ${exam.name} score?`,
          a: 'No. ScoreUp provides estimated practice scores for guidance. We are not affiliated with the official test providers.',
        },
        {
          q: `How is my ${exam.name} preparation personalized?`,
          a: 'The diagnostic estimates your current level, then the plan weights your weakest skills first.',
        },
      ]
    : [
        {
          q: `When will ${exam.name} preparation be available?`,
          a: `${exam.name} is coming soon. TOEFL and TOEIC are fully available now while we build the rest.`,
        },
        {
          q: 'Can I practice meanwhile?',
          a: 'Yes — the TOEFL and TOEIC exercises build the same core skills and transfer well.',
        },
      ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `ScoreUp ${exam.name} preparation`,
            description: exam.tagline,
            provider: { '@type': 'Organization', name: 'ScoreUp' },
            areaServed: 'Worldwide',
          }),
        }}
      />

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:py-28 lg:px-8">
        <Badge variant="accent" className="mx-auto">
          {exam.name} preparation
        </Badge>
        <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Prepare for the {exam.name}{' '}
          <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent">
            with confidence
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500 dark:text-slate-400">
          {exam.tagline}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/diagnostic">
            <Button variant="accent" size="lg">
              Start free diagnostic <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/practice">
            <Button variant="secondary" size="lg">
              Practice {exam.name}
            </Button>
          </Link>
        </div>

        {!exam.developed && (
          <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
            Coming soon — {exam.skills.join(' · ')}
          </p>
        )}
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-4xl px-4 pb-6">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Free diagnostic', value: '10 min' },
            { label: 'Question types', value: `${exam.skills.length}` },
            { label: 'Score type', value: 'Estimated' },
            { label: 'Practice daily', value: '20–30 min' },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {s.label}
              </dt>
              <dd className="mt-1 text-xl font-extrabold text-slate-900 dark:text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How it works
          </h2>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            A clear path to your {exam.scale}.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills covered
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
            {exam.skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="font-bold text-slate-900 dark:text-white">{skill}</span>
                <Badge variant="success">included</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          {exam.name} questions
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white">
                {f.q}
                <span className="text-brand-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-center text-white shadow-lift">
          <h3 className="text-2xl font-extrabold">Ready to reach your {exam.name} target?</h3>
          <p className="mt-2 text-white/80">Free to start. No credit card required.</p>
          <Link href="/diagnostic" className="mt-6 inline-block">
            <Button variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-white">
              Start free diagnostic
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}