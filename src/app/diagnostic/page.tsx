import type { Metadata } from 'next';
import DiagnosticApp from '@/components/DiagnosticApp';
import { seoMetadata } from '@/lib/seo';

export const metadata: Metadata = seoMetadata({
  title: 'Free Diagnostic Test — Estimate Your English Level | ScoreUp',
  description:
    'Free English level diagnostic: answer ~10 original demo questions and get an estimated score for TOEFL or TOEIC in minutes.',
  path: '/diagnostic',
  overline: 'Free — no sign-up',
});

export default function DiagnosticPage() {
  return <DiagnosticApp />;
}