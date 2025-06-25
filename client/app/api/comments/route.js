import { NextResponse } from "next/server";
import { sanityClient } from "../../lib/sanityClient";

export async function POST(req) {
  try {
    const { postId, name, email, website, comment } = await req.json();

    if (!postId || !name || !email || !comment) {
      return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
    }

    const newComment = {
      _type: "object",
      name,
      email,
      website,
      comment,
      createdAt: new Date().toISOString(),
    };

    const updated = await sanityClient
      .patch(postId)
      .setIfMissing({ comments: [] })
      .append("comments", [newComment])
      .commit();

    return NextResponse.json({ success: true, message: "Comment added", data: updated }, { status: 200 });
  } catch (error) {
    console.error("Error submitting comment:", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
