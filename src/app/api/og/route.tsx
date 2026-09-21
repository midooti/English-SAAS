import { ImageResponse } from 'next/og';
import { SITE_NAME, SITE_URL, SITE_TAGLINE } from '@/lib/config';

export const runtime = 'edge';

/**
 * Route handler GET — Images Open Graph dynamiques (1200×630).
 * variant=share : carte de partage avec bande From → To.
 */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const title = (url.searchParams.get('title') ?? SITE_TAGLINE).slice(0, 70);
  const overline = url.searchParams.get('overline') ?? 'Free English test preparation';
  const exam = url.searchParams.get('exam') ?? '';
  const variant = url.searchParams.get('variant') ?? 'default';
  const bandFrom = url.searchParams.get('bandFrom') ?? '';
  const bandTo = url.searchParams.get('bandTo') ?? '';

  const fontSize = title.length > 40 ? 56 : title.length > 26 ? 64 : 72;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          color: 'white',
          background: 'linear-gradient(120deg, #1d4ed8 0%, #7c3aed 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 80,
            width: '100%',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#c7d2fe' }}>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1e293b',
                fontWeight: 900,
                fontSize: 18,
              }}
            >
              S
            </div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'white' }}>{SITE_NAME}</div>
          </div>
          <div style={{ marginTop: 28, fontSize: 22, fontWeight: 700, color: '#c7d2fe' }}>{overline}</div>
          <div style={{ marginTop: 12, fontSize, fontWeight: 900, lineHeight: 1.1 }}>{title}</div>
          <div style={{ marginTop: 32, fontSize: 20, color: '#e0e7ff' }}>{exam || SITE_TAGLINE}</div>
          {variant === 'share' && (bandFrom || bandTo) && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 40 }}>
              {bandFrom && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 18, color: '#c7d2fe' }}>From</span>
                  <span style={{ fontSize: 84, fontWeight: 900 }}>{bandFrom}</span>
                </div>
              )}
              {bandTo && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: 18, color: '#c7d2fe' }}>To</span>
                  <span style={{ fontSize: 84, fontWeight: 900, color: '#fbbf24' }}>{bandTo}</span>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          style={{
            position: 'absolute',
            right: 40,
            bottom: 40,
            fontSize: 18,
            color: '#e0e7ff',
          }}
        >
          {SITE_URL}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}