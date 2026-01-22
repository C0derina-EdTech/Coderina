import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";

/* =====================
   CREATE APPLICATION
===================== */
export async function POST(req) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      phone,
      institution,
      course,
      siwesDuration,
      department,
      whyCoderina,
    } = body;

    // Required field validation
    if (
      !fullName ||
      !email ||
      !phone ||
      !institution ||
      !course ||
      !siwesDuration ||
      !department ||
      !whyCoderina
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    await sanityClient.create({
      _type: "siwesApplication",
      ...body,
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "SIWES application submitted successfully",
    });
  } catch (error) {
    console.error("SIWES POST error:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}

/* =====================
   FETCH ALL APPLICATIONS
===================== */
export async function GET() {
  try {
    const applications = await sanityClient.fetch(`
      *[_type == "siwesApplication"] | order(createdAt desc) {
        _id,
        fullName,
        email,
        phone,
        institution,
        course,
        department,
        status,
        createdAt
      }
    `);

    return NextResponse.json(applications);
  } catch (error) {
    console.error("SIWES GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
