import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from '@/lib/config';

export const runtime = 'edge';

const INK = '#1d2936';
const MUTED = '#5b6472';
const FAINT = '#8a919c';
const ACCENT = '#2f5d8a';
const HAIRLINE = '#d9d5cb';
const PAPER = '#f7f5f0';

/**
 * Route handler GET — Images Open Graph dynamiques (1200×630).
 * Identité académique Prep-Anglais : papier, encre marine, serif.
 * variant=share : bande de progression « Actuel → Objectif ».
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const title = (url.searchParams.get('title') ?? SITE_TAGLINE).slice(0, 80);
  const overline = url.searchParams.get('overline') ?? 'Préparation aux examens d\u2019anglais';
  const exam =
    url.searchParams.get('exam') ??
    'TOEFL · TOEIC · IELTS · Cambridge English · Duolingo English Test';
  const variant = url.searchParams.get('variant') ?? 'default';
  const bandFrom = url.searchParams.get('bandFrom') ?? '';
  const bandTo = url.searchParams.get('bandTo') ?? '';

  const titleSize = title.length > 42 ? 54 : title.length > 26 ? 62 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          color: INK,
          background: PAPER,
          fontFamily: 'Georgia, "Times New Roman", serif',
          padding: 80,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 80,
            right: 80,
            height: 2,
            background: HAIRLINE,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: 80,
            right: 80,
            height: 2,
            background: HAIRLINE,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
            <span style={{ fontSize: 30, fontWeight: 500 }}>Prep</span>
            <span style={{ fontSize: 30, fontWeight: 700 }}>‑Anglais</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: MUTED,
                letterSpacing: 4,
                textTransform: 'uppercase',
              }}
            >
              {overline}
            </div>
            <div style={{ marginTop: 24, fontSize: titleSize, fontWeight: 700, lineHeight: 1.08 }}>
              {title}
            </div>
            <div style={{ marginTop: 28, width: 96, height: 2, background: ACCENT }} />
            <div style={{ marginTop: 26, fontSize: 22, color: MUTED }}>{exam}</div>

            {variant === 'share' && (bandFrom || bandTo) && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 40, marginTop: 36 }}>
                {bandFrom && (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 18, color: MUTED }}>Actuel</span>
                    <span style={{ fontSize: 72, fontWeight: 700, lineHeight: 1 }}>{bandFrom}</span>
                  </div>
                )}
                {bandTo && (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: 18, color: MUTED }}>Objectif</span>
                    <span style={{ fontSize: 72, fontWeight: 700, lineHeight: 1, color: ACCENT }}>
                      {bandTo}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: FAINT }}>
            <span>{SITE_NAME}</span>
            <span>{SITE_URL}</span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}