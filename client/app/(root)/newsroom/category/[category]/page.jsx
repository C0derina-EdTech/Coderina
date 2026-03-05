// app/newsroom/category/[category]/page.jsx
import { notFound } from "next/navigation";
import { sanityClient as client } from "../../../../utils/sanityClient";
import { groq } from "next-sanity";
import CategoryPreview from "../../../../components/landingPages/blog/CategoryPreview";


export const revalidate = 60; // ISR

// ─── Query to get posts in a category ─────────────────
const categoryQuery = groq`
  *[_type == "blog" && $category in category[]->slug.current] | order(publishedAt desc){
    _id,
    title,
    slug,
    description,
    readTime,
    publishedAt,
    featuredImage,
    category[]->{_id, title, slug},
    author->{name, bio, image}
  }
`;

// ─── Query to get other posts (different categories) ─────
const otherPostsQuery = groq`
  *[_type == "blog" && !($category in category[]->slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    description,
    readTime,
    publishedAt,
    featuredImage,
    featuredVideo,
    category[]->{_id, title, slug},
    author->{name, bio, image}
  }
`;

// ─── Generate static params for SSG ─────────────────
export async function generateStaticParams() {
  const categories = await client.fetch(
    groq`*[_type == "category" && defined(slug.current)]{ "slug": slug.current }`,
  );
  return categories.map((cat) => ({ category: cat.slug }));
}

// ─── Metadata for SEO ───────────────────────────────
export async function generateMetadata({ params }) {
  const category = params.category; // params is already an object

  if (!category) return { title: "Newsroom" };

  const posts = await client.fetch(categoryQuery, { category });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.coderina.org";
  const url = `${baseUrl}/newsroom/category/${category}`;

  return {
    title: `${category} | Newsroom`,
    description: `Read the latest posts about ${category} in our Newsroom.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${category} | Newsroom`,
      description: `Read the latest posts about ${category} in our Newsroom.`,
      url,
      type: "website",
      images: posts[0]?.featuredImage
        ? [{ url: posts[0].featuredImage, width: 1200, height: 630 }]
        : [],
    },
  };
}

// ─── Page Component ────────────────────────────────
export default async function Page({ params }) {
  // unwrap params if it's a Promise
  const resolvedParams = await params;
  const category = resolvedParams.category;

  if (!category) return notFound();

  const posts = await client.fetch(categoryQuery, { category });
  const otherPosts = await client.fetch(otherPostsQuery, { category });


  if ((!posts || posts.length === 0) && (!otherPosts || otherPosts.length === 0))
    return notFound();

  return (
    <div className="bg-white">
    
        <CategoryPreview category={category} blogs={posts} otherBlogs={otherPosts} category={category}/>
      
    </div>
  );
}
