// app/blog/[slug]/page.jsx
import PostsPage from "../../../components/landingPages/blog/PostsPage";
import { sanityClient } from "../../../components/lib/sanityClient"; // Ensure this is properly set up
import { groq } from "next-sanity";

const postQuery = groq`
  *[_type == "coderinablog" && slug.current == $slug][0] {
    title,
    slug,

    readTime,
    content,
    excerpt,
    image,
    links,
    comments,
    views,
    category,
    _createdAt
  }
`;
const allSlugsQuery = groq`
  *[_type == "coderinablog"]{
    "slug": slug.current
  }
`;

export async function generateStaticParams() {
  try {
    const data = await sanityClient.fetch(allSlugsQuery);

    // Ensure slug is a string
    return data
      ?.filter((post) => typeof post.slug === "string" && post.slug.length > 0)
      .map((post) => ({ slug: post.slug })) || [];
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
 const resolvedParams = await params; // ✅ unwrap the Promise
  const { slug } = resolvedParams;
  const siteUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const post = await sanityClient.fetch(postQuery, { slug });

    if (!post) throw new Error("Post not found");

    const imageUrl = post.image ? post.image.asset?.url : null;

    return {
      title: `${post.title} | My Blog`,
      description: post.excerpt || "Read this insightful blog post.",
      openGraph: {
        title: post.title,
        description: post.excerpt || "Read this insightful blog post.",
        url: `${siteUrl}/blog/${slug}`,
        type: "article",
        images: [
          {
            url: imageUrl || `${siteUrl}/default-image.png`,
            width: 800,
            height: 600,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || "Read this insightful blog post.",
        images: [imageUrl || `${siteUrl}/default-image.png`],
      },
    };
  } catch (err) {
    console.error("Metadata fetch error:", err);
    return {
      title: "Post not found",
      description: "This post could not be found.",
    };
  }
}

export default function Page({ params }) {
  return <PostsPage slug={params?.slug} />;
}
