import { sanityClient } from "../lib/sanityClient"; // Update path based on your project
import { groq } from "next-sanity";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://coderina.org";

  //  Use GROQ to fetch slugs
  const query = groq`
  *[_type == "coderinablog"]{
    "slug": slug.current}`;
  const blogSlugs = await sanityClient.fetch(query);

  // Static routes
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/posts",
    "/category",
    "/privacy-policy",
    "/what",
    "/events",
    "/form",
    "/firstlego",
    "/couch",
    "/project-fair",
    "/programs",
    "/firstlegoleague",
    "/sign-in",
  ];

  const staticUrls = staticRoutes.map((route) => {
    return `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  // Category pages
  const categories = [
    "general",
    "tips",
    "tech",
    "championship",
    "travels",
    "case-study",
  ];
  const categoryUrls = categories.map((slug) => {
    return `
      <url>
        <loc>${baseUrl}/category/${slug}/page</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  // Blog post URLs from Sanity
  const blogUrls = blogSlugs.map((item) => {
    const slug = item?.slug?.current;
    return `
      <url>
        <loc>${baseUrl}/posts/${slug}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
    `;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticUrls.join("\n")}
    ${categoryUrls.join("\n")}
    ${blogUrls.join("\n")}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
