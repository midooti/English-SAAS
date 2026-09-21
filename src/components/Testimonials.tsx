import { Quote, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * Témoignages de DÉMO : clairement identifiés comme contenu de démonstration
 * (aucune allégation d'utilisateurs réels).
 */

const testimonials = [
  {
    name: 'Amelia',
    exam: 'TOEFL',
    target: '5.5',
    quote: 'ScoreUp made my preparation much more structured. I knew exactly what to work on every day.',
  },
  {
    name: 'Rafael',
    exam: 'TOEIC',
    target: '750',
    quote: 'The daily plan and the vocabulary review kept me consistent for a whole month.',
  },
  {
    name: 'Yuki',
    exam: 'IELTS',
    target: '6.5',
    quote: 'The mock tests feel close to the real format. Tracking my weak skills changed everything.',
  },
  {
    name: 'Daniela',
    exam: 'Cambridge',
    target: 'B2',
    quote: 'Finally an app that tells me what to practice and why, without feeling like homework.',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="text-center">
        <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
          <Sparkles className="h-4 w-4" /> Loved by students
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
          Students stay consistent with ScoreUp
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-slate-500 dark:text-slate-400">
          Placeholder testimonials for demonstration purposes.
        </p>
        <Badge variant="accent" className="mt-3">Demo content</Badge>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <Card key={t.name} className="flex flex-col p-6">
            <Quote className="h-6 w-6 text-brand-300" />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              “{t.quote}”
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</p>
                <p className="text-xs text-slate-400">{t.exam} · target {t.target}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}