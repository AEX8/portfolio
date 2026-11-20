// Builds /sitemap.xml from the pages in this folder, so new pages are listed automatically
import type { APIRoute } from 'astro';

// Every .astro page except the 404
const pages = Object.keys(import.meta.glob('./*.astro'))
  .map((file) => file.replace('./', '').replace('.astro', ''))
  .filter((name) => name !== '404');

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://gayath.dev');
  // Same form as the canonical links: "/" for home, "/projects/" for the rest
  const urls = pages
    .map((name) => new URL(name === 'index' ? '/' : `/${name}/`, base).href)
    .sort((a, b) => a.length - b.length || a.localeCompare(b));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((loc) => `  <url><loc>${loc}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
