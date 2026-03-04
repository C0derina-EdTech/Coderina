import { notFound } from "next/navigation";
import { sanityClient as client } from "../../../utils/sanityClient";
import { groq } from "next-sanity";
import SlugContent from "../../../components/landingPages/blog/SlugContent";

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

// export async function generateMetadata({ params }) {
//   const { slug } = await params; // ✅ REQUIRED in Next 16

//   const post = await client.fetch(slugQuery, { slug });

//   if (!post) return {};

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
//   const url = `${baseUrl}/newsroom/${slug}`;

//   const imageUrl = post?.featuredImage || null;

//   return {
//     title: `${post.title} | Newsroom`,
//     description: post.description,
//     alternates: {
//       canonical: url,
//     },
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       url,
//       siteName: "Coderina",
//       type: "article",
//       publishedTime: post.publishedAt,
//       images: imageUrl
//         ? [
//             {
//               url: imageUrl,
//               width: 1200,
//               height: 630,
//             },
//           ]
//         : [],
//       videos: post?.featuredVideo
//         ? [
//             {
//               url: post.featuredVideo,
//               type: "video/mp4",
//             },
//           ]
//         : [],
//     },
//     twitter: {
//       card: imageUrl ? "summary_large_image" : "summary",
//       title: post.title,
//       description: post.description,
//       images: imageUrl ? [imageUrl] : [],
//     },
//   };
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await client.fetch(slugQuery, { slug });
  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.coderina.org";

  const url = `${baseUrl}/newsroom/${slug}`;

  // ✅ Ensure image is absolute
  let imageUrl = null;

  if (post?.featuredImage) {
    imageUrl = post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `${baseUrl}${post.featuredImage}`;
  }

  // ✅ Cloudinary auto sizing (forces 1200x630)
  if (imageUrl && imageUrl.includes("cloudinary")) {
    imageUrl = imageUrl.replace(
      "/upload/",
      "/upload/w_1200,h_630,c_fill,q_auto,f_auto/",
    );
  }

  // ✅ Fallback to video thumbnail if no image
  if (!imageUrl && post?.featuredVideo) {
    if (post.featuredVideo.includes("cloudinary")) {
      imageUrl = post.featuredVideo
        .replace("/upload/", "/upload/so_0,w_1200,h_630,c_fill,q_auto,f_auto/")
        .replace(".mp4", ".jpg");
    }
  }

  return {
    title: `${post.title} | Newsroom`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title: post.title,
      description: post.description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

// ─── Page Component ────────────────────────────────────

export default async function Page({ params }) {
  const { slug } = await params; // ✅ REQUIRED in Next 16

  const post = await client.fetch(slugQuery, { slug });

  if (!post) return notFound();

  const imageUrl = post?.featuredImage || null;

  return (
    <>
      {/* ─── Structured Data (JSON-LD) ───────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            author: {
              "@type": "Person",
              name: post.author?.name,
            },
            image: imageUrl || undefined,
            video: post?.featuredVideo
              ? {
                  "@type": "VideoObject",
                  contentUrl: post.featuredVideo,
                  name: post.title,
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
