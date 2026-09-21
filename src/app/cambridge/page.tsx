import type { Metadata } from 'next';
import ExamLanding from '@/components/ExamLanding';
import { SITE_URL } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Cambridge English Preparation',
  description:
    'Cambridge exams (KET, PET, FCE, CAE) preparation is coming soon. Start with ScoreUp’s free diagnostic and estimated scores now.',
  alternates: { canonical: `${SITE_URL}/cambridge` },
};

export default function CambridgePage() {
  return <ExamLanding examKey="cambridge" />;
}