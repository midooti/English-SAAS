import type { Metadata } from 'next';
import ExamLanding from '@/components/ExamLanding';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Duolingo English Test Preparation',
  description:
    'Duolingo English Test preparation is coming soon. Build literacy, comprehension and conversation skills with ScoreUp’s free practice today.',
  alternates: { canonical: `${SITE_URL}/duolingo-english-test` },
};

export default function DuolingoPage() {
  return <ExamLanding examKey="duolingo" />;
}