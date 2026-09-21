/**
 * seo/JsonLd.tsx — Injects JSON-LD structured data.
 * Next.js ne gère pas le JSON-LD via metadata, on le rend en React.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}