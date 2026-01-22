import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";

/* =====================
   CREATE SIWES APPLICATION
===================== */
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      // Personal Info
      fullName,
      email,
      phone,
      gender,
      address,
      state,
      country,

      // Academic Info
      institution,
      course,
      level,
      matricNumber,

      // Internship
      siwesDuration,
      startDate,
      endDate,
      department,

      // Skills & Motivation
      skills,
      experience,
      whyCoderina,

      // Documents (Sanity asset refs)
      cv,
      siwesLetter,
      studentId,
      headshot,
    } = body;

    /* ========= REQUIRED FIELD VALIDATION ========= */
    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !phone?.trim() ||
      !institution?.trim() ||
      !course?.trim() ||
      !siwesDuration?.trim() ||
      !department?.trim() ||
      !whyCoderina?.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    /* ========= EMAIL VALIDATION ========= */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    /* ========= PREVENT DUPLICATE APPLICATION ========= */
    const existing = await sanityClient.fetch(
      `*[_type == "siwesApplication" && email == $email][0]`,
      { email }
    );

    if (existing) {
      return NextResponse.json(
        { error: "Application already submitted with this email" },
        { status: 409 }
      );
    }

    /* ========= CREATE DOCUMENT ========= */
    await sanityClient.create({
      _type: "siwesApplication",

      // Personal
      fullName,
      email,
      phone,
      gender,
      address,
      state,
      country,

      // Academic
      institution,
      course,
      level,
      matricNumber,

      // Internship
      siwesDuration,
      startDate,
      endDate,
      department,

      // Skills & Motivation
      skills,
      experience,
      whyCoderina,

      // Documents (optional)
      cv: cv || undefined,
      siwesLetter: siwesLetter || undefined,
      studentId: studentId || undefined,
      headshot: headshot || undefined,

      // Metadata
      status: "pending",
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "SIWES application submitted successfully",
      },
      { status: 201 }
    );
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
        level,
        siwesDuration,
        department,
        status,
        createdAt,
        cv,
        siwesLetter,
        studentId,
        headshot
      }
    `);

    return NextResponse.json(applications, { status: 200 });
  } catch (error) {
    console.error("SIWES GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch applications" },
      { status: 500 }
    );
  }
}
