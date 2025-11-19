import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import process from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DOMAIN = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'; // Replace with your actual domain
const pagesDir = join(process.cwd(), 'app');
const outputPath = join(process.cwd(), 'public', 'sitemap.xml');

// Add your dynamic routes here
const dynamicRoutes = [
  '/blog/[slug]',
  '/courses/[id]',
  // Add more dynamic routes as needed
];

async function generateSitemap() {
  // Get all page files
  const pages = await glob('**/*.{js,jsx,ts,tsx,mdx}', {
    cwd: pagesDir,
    ignore: [
      '_*.{js,jsx,ts,tsx,mdx}',
      '**/_*.{js,jsx,ts,tsx,mdx}',
      '**/api/**',
      '**/admin/**',
      '**/404.{js,jsx,ts,tsx}',
      '**/500.{js,jsx,ts,tsx}',
    ],
  });

  // Convert file paths to URLs
  const pageUrls = pages
    .map((page) => {
      const route = page
        .replace(/(\/index)?\.(jsx?|tsx?|mdx)$/, '')
        .replace(/\[([^\]]+)\]/g, (_, param) => `:${param}`);
      return `/${route}`;
    })
    .filter((route) => !route.includes(':')); // Filter out dynamic routes for now

  // Add dynamic routes if they have a dedicated sitemap
  const allUrls = [...new Set([...pageUrls, ...dynamicRoutes])];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${allUrls
    .map(
      (url) => `
  <url>
    <loc>${DOMAIN}${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  // Write sitemap to file
  writeFileSync(outputPath, sitemap);
  console.log(`Sitemap generated at: ${outputPath}`);
}

generateSitemap().catch(console.error);
