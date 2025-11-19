import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";

// =======================
// GET → Fetch subscribers
// =======================
export async function GET() {
  try {
    const query = `*[_type == "subscriber"] | order(_createdAt desc){
      _id,
      name,
      email
    }`;

    const subscribers = await sanityClient.fetch(query);

    return NextResponse.json(subscribers, { status: 200 });
  } catch (error) {
    console.error("GET Subscribers Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}

// =======================
// POST → Add subscriber
// =======================
export async function POST(req) {
  try {
    const { name, email } = await req.json();

    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if email exists already
    const existing = await sanityClient.fetch(
      `*[_type == "subscriber" && email == $email][0]`,
      { email }
    );

    if (existing) {
      return NextResponse.json(
        { error: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Save to Sanity
    const newSubscriber = await sanityClient.create({
      _type: "subscriber",
      name: name || "",
      email,
    });

    return NextResponse.json(
      { success: true, subscriber: newSubscriber },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST Subscriber Error:", error);
    return NextResponse.json(
      { error: "Failed to add subscriber" },
      { status: 500 }
    );
  }
}
