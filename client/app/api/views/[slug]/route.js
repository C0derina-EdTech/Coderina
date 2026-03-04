
import { NextResponse } from "next/server";
import { sanityClient } from "../../../utils/sanityClient";

export async function POST(req, context) {
  try {
    // await the params object
    const params = await context.params;
    const slug = Array.isArray(params?.slug) ? params.slug[0] : params?.slug;

    if (!slug) {
      return NextResponse.json({ message: "Slug missing" }, { status: 400 });
    }

    // Fetch post by slug
    const post = await sanityClient.fetch(
      `*[_type == "blog" && slug.current == $slug][0]`,
      { slug },
    );

    if (!post?._id) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // Increment views
    const updatedPost = await sanityClient
      .patch(post._id)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();

    return NextResponse.json({
      success: true,
      views: updatedPost.views, // the latest count
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error updating views" },
      { status: 500 },
    );
  }
}
