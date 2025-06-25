export function robots() {
    const content = `
  User-agent: *
   Disallow: /privacy-policy
  Allow: /
  
  Sitemap: ${process.env.NEXT_PUBLIC_BASE_URL}/sitemap
  `;
  
    return new Response(content, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  