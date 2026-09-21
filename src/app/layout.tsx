import type { Metadata, Viewport } from 'next';
import { Inter, Lora } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppProviders from '@/components/providers';
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL, GA_ID, GSC_VERIFICATION } from '@/lib/config';
import { ogImageUrl } from '@/lib/seo';
import { analyticsScript, gtagInitInline } from '@/lib/analytics';
import { orgWebSiteJsonLd } from '@/lib/seo';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const lora = Lora({ subsets: ['latin'], variable: '--font-serif', style: ['normal', 'italic'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Prep-Anglais — Préparation aux examens d\'anglais (TOEFL, TOEIC, IELTS)',
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'préparation TOEFL',
    'préparation TOEIC',
    'préparation IELTS',
    'test TOEFL gratuit',
    'test TOEIC gratuit',
    'examen anglais',
    'test de niveau anglais',
    'vocabulaire TOEFL',
    'vocabulaire TOEIC',
    'exercices TOEFL',
    'exercices TOEIC',
    'examen blanc TOEFL',
    'examen blanc TOEIC',
    'Cambridge English',
    'Duolingo English Test',
  ],
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: `${SITE_URL}/`,
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    title: 'Prep-Anglais — Préparation aux examens d\'anglais',
    description: SITE_DESCRIPTION,
    images: [
      { url: ogImageUrl({ title: SITE_TAGLINE, overline: SITE_NAME }), width: 1200, height: 630, alt: 'Prep-Anglais — Préparation aux examens d\'anglais' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prep-Anglais — Préparation aux examens d\'anglais',
    description: SITE_DESCRIPTION,
    images: [ogImageUrl({ title: SITE_TAGLINE, overline: SITE_NAME })],
  },
  creator: SITE_NAME,
  robots: { index: true, follow: true },
  verification: GSC_VERIFICATION
    ? { google: GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1d2936',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} flex min-h-screen flex-col font-sans`}>
        {analyticsScript && (
          <>
            <Script
              id="prep-anglais-ga-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: gtagInitInline() }}
            />
            <Script id="prep-anglais-ga" strategy="afterInteractive" src={analyticsScript} />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgWebSiteJsonLd()) }}
        />
        <AppProviders>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}