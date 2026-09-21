import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppProviders from '@/components/providers';
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL } from '@/lib/config';
import { ogImageUrl } from '@/lib/seo';
import { analyticsScript } from '@/lib/analytics';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ScoreUp — Prepare for TOEFL, TOEIC, IELTS & English Tests',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'TOEFL preparation',
    'TOEFL practice test',
    'TOEIC preparation',
    'IELTS preparation',
    'English level test',
    'score prediction',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: `${SITE_URL}/`,
    locale: 'en_US',
    title: 'ScoreUp — Prepare for TOEFL, TOEIC, IELTS & English Tests',
    description: SITE_TAGLINE,
    images: [
      { url: ogImageUrl({ title: SITE_TAGLINE, overline: SITE_NAME }), width: 1200, height: 630, alt: SITE_NAME },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScoreUp — Prepare for TOEFL, TOEIC, IELTS & English Tests',
    description: SITE_TAGLINE,
    images: [ogImageUrl({ title: SITE_TAGLINE, overline: SITE_NAME })],
  },
  robots: { index: true, follow: true },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#4f46e5',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} flex min-h-screen flex-col font-sans`}>
        {analyticsScript && (
          <Script id="scoreup-ga" strategy="afterInteractive" src={analyticsScript} />
        )}
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}