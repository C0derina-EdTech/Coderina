import { NextResponse } from "next/server";
import { sanityClient } from "../../utils/sanityClient";


export async function GET() {
  try {
    const query = `
      *[_type=="blog"] | order(publishedAt desc) {
        _id,
        title,
        description,
        slug,
        publishedAt,
        readTime,
        views,
        category,
        tags,
        featuredImage,
        featuredVideo,
        gallery,
        "author": author->{
          name,
          role,
          image,
          bio
        }
      }
    `;

    const blogs = await sanityClient.fetch(query);

    console.log("✅ Blogs fetched from Sanity:", blogs.length);

    return NextResponse.json({
      success: true,
      count: blogs.length,
      data: blogs,
    });

  } catch (error) {
    console.error("❌ Blog API Error:", error);

    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}