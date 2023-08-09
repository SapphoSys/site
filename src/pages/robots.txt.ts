import { base } from '@config';

export function get() {
  return {
    body: `
User-agent: *
Allow: /
Sitemap: https://${base.siteName}/sitemap-index.xml
    `.trim(),
  };
}
