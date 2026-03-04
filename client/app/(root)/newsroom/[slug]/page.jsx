import { notFound } from "next/navigation";
import { sanityClient as client } from "../../../utils/sanityClient";
import { groq } from "next-sanity";
import SlugContent from "../../../components/landingPages/blog/SlugContent";
import { urlFor } from "../../../components/lib/imageUrl";

export const revalidate = 60; // ISR - revalidate every 60 seconds

// ─── Query ─────────────────────────────────────────────

const slugQuery = groq`
  *[_type == "blog" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    description,
    readTime,
    publishedAt,
    content,
    featuredImage,
    featuredVideo,
    gallery,
    category[]->{
    _id,
    title,
    slug
  },
  tags[]->{
    _id,
    title,
    slug
  },
    views,
    "author": author->{name, bio, image},
    "category": category[]->{
    _id,
    title,
    slug
  },
  }
`;
// ─── Static Params (SSG for scale) ─────────────────────

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blog" && defined(slug.current)][]{
      "slug": slug.current
    }`,
  );

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

// ─── Metadata (Next 16 compatible) ─────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params; // ✅ REQUIRED in Next 16

  const post = await client.fetch(slugQuery, { slug });

  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const url = `${baseUrl}/newsroom/${slug}`;

  const imageUrl = post?.featuredImage || null;

  return {
    title: `${post.title || "News"} | Newsroom`,
    description: post.description || "",
    alternates: { canonical: url },
    openGraph: {
      title: post.title || "Newsroom",
      description: post.description || "",
      url,
      siteName: "Coderina",
      type: "article",
      publishedTime: post.publishedAt || undefined,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630 }] : [],
      videos:
        !imageUrl && post.featuredVideo
          ? [{ url: post.featuredVideo, type: "video/mp4" }]
          : [],
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: post.title || "",
      description: post.description || "",
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// ─── Page Component ────────────────────────────────────

export default async function Page({ params }) {
  const { slug } = await params; // ✅ REQUIRED in Next 16

  const post = await client.fetch(slugQuery, { slug });

  if (!post) return notFound();

  return (
    <>
      {/* ─── Structured Data (JSON-LD) ───────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title || "",
            description: post.description || "",
            datePublished: post.publishedAt || undefined,
            author: {
              "@type": "Person",
              name: post.author?.name || "",
            },
            image: post.featuredImage || undefined,
            video:
              !post.featuredImage && post.featuredVideo
                ? {
                    "@type": "VideoObject",
                    contentUrl: post.featuredVideo,
                    name: post.title || "",
                  }
                : undefined,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${process.env.NEXT_PUBLIC_BASE_URL}/newsroom/${slug}`,
            },
          }),
        }}
      />

      {/* ─── Content Component ───────────────── */}
      <SlugContent post={post} />
    </>
  );
}
