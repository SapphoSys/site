import type { APIRoute } from 'astro';
import { base } from '$config';

const robots = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', `https://${base.siteName}`).href}
`.trim();

export const GET: APIRoute = () => new Response(robots, { headers: { 'Content-Type': 'text/plain' } });
