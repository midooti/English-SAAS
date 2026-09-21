import type { Metadata } from 'next';
import ExamLanding from '@/components/ExamLanding';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Cambridge English — Niveaux A2 Key à C2 Proficiency | Prep-Anglais',
  description:
    'Les certifications Cambridge English (Key, Preliminary, First, Advanced, Proficiency) : préparez votre niveau avec le diagnostic gratuit Prep-Anglais et des scores estimés.',
  path: '/cambridge',
  overline: 'Cambridge English',
});

export default function CambridgePage() {
  return <ExamLanding examKey="cambridge" />;
}