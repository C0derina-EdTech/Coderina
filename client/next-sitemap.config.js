/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.coderina.org', // Change this to your production URL
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: true,
  exclude: [
    '/admin/*',
    '/api/*',
    '/server-sitemap.xml',
    '/500',
    '/404',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow all pages to be crawled
        disallow: [
          '/admin',
          '/api',
          '/_next',
          '/_error',
          '/404',
          '/500',
        ],
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`,
      // Add other sitemaps if you have them
    ],
  },
  // Add more configuration options here:
  // https://github.com/iamvishnusankar/next-sitemap#configuration-options
  outDir: 'public',
};

export default config;
