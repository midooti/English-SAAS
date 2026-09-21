import type { Metadata } from 'next';
import Link from 'next/link';
import { BarChart3, BookOpen, CalendarClock, Target } from 'lucide-react';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import TestCard from '@/components/TestCard';
import Button from '@/components/ui/button';
import { exams } from '@/lib/exams';
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from '@/lib/config';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'ScoreUp — Prepare for TOEFL, TOEIC, IELTS & English Tests',
  description:
    'Prepare for TOEFL, TOEIC, IELTS and more with personalized exercises, mock tests, vocabulary and progress tracking. Get an estimated score, not an official one.',
  path: '/',
  overline: SITE_TAGLINE,
});

const steps = [
  {
    icon: Target,
    title: '1. Take a free diagnostic',
    text: 'Answer ~10 demo questions and get an estimated score in minutes — reading, listening and vocabulary.',
  },
  {
    icon: BookOpen,
    title: '2. Practice with a plan',
    text: 'Daily exercises for your exam and your weakest skills, with explanations and XP after every question.',
  },
  {
    icon: BarChart3,
    title: '3. Track your progress',
    text: 'Watch your estimated score climb with charts, streaks and skill-level breakdowns.',
  },
];

const faqs = [
  {
    q: 'Is the diagnostic test really free?',
    a: 'Yes. The diagnostic test is free with no card required. You get an estimated score used to build your study plan.',
  },
  {
    q: 'Are these official exam scores?',
    a: 'No. Everything is an estimated or practice score for guidance only. We are not affiliated with ETS, IDP, Cambridge or Duolingo.',
  },
  {
    q: 'How much time do I need daily?',
    a: 'About 20-30 minutes. The plan balances short practice sessions so consistency beats cramming.',
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
      slogan: SITE_TAGLINE,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Hero />

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            How ScoreUp works
          </h2>
          <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
            From free diagnostic to your target score — three simple steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 text-white">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Test selection */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-20 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              What are you preparing for?
            </h2>
            <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
              TOEFL and TOEIC are fully available. More exams are on the way.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exams.map((exam) => (
              <TestCard key={exam.key} exam={exam} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-brand-600 to-accent-600 p-8 text-white shadow-lift sm:p-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wide">
              <CalendarClock className="h-4 w-4" /> Freemium model
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Free to start. Premium when you&apos;re ready to reach your target.
            </h2>
            <p className="mt-4 text-white/80">
              Unlimited exercises, full mock tests, AI Coach and advanced analytics — no aggressive
              upselling, just a clear choice.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/pricing">
                <Button variant="secondary" size="lg" className="bg-white text-brand-700 hover:bg-white">
                  See pricing
                </Button>
              </Link>
              <Link href="/diagnostic">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border border-white/40 text-white hover:bg-white/10"
                >
                  Start free diagnostic
                </Button>
              </Link>
            </div>
          </div>
          <ul className="space-y-3 text-white/90">
            {[
              'Unlimited exercises & vocabulary',
              'Full mock tests with timer',
              'Personalized study plan',
              'AI Coach, writing & speaking feedback',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-brand-600">✓</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Frequently asked questions
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer items-center justify-between font-bold text-slate-900 dark:text-white">
                {faq.q}
                <span className="text-brand-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}