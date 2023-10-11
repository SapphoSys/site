import { base } from '@config';

export function GET() {
  return new Response(JSON.stringify({
    body: `
User-agent: *
Allow: /
Sitemap: https://${base.siteName}/sitemap-index.xml
    `.trim(),
  }));
}
