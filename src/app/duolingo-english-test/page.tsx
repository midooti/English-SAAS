import type { Metadata } from 'next';
import ExamLanding from '@/components/ExamLanding';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Duolingo English Test — Préparation et niveau estimé | Prep-Anglais',
  description:
    'Le Duolingo English Test se passe en ligne, à domicile. Découvrez son format et évaluez votre niveau avec le diagnostic gratuit Prep-Anglais, sans inscription.',
  path: '/duolingo-english-test',
  overline: 'Duolingo English Test',
});

export default function DuolingoPage() {
  return <ExamLanding examKey="duolingo" />;
}