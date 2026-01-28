
import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";
import cloudinary from "../../components/lib/cloudinary";
import formidable from "formidable";
import fs from "fs";
import { Readable } from "stream";

export const dynamic = "force-dynamic";

async function uploadToCloudinary(file, fullName, docType) {
  if (!file || typeof file === "string") return null;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const applicantFolder = fullName.toLowerCase().replace(/\s+/g, "_");

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: `coderina/siwes/${applicantFolder}`,
        public_id: docType,
        resource_type: "auto",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
    );

    stream.end(buffer);
  });
}


export async function POST(req) {
  try {
     const formData = await req.formData();

    // Fields
    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const gender = formData.get("gender");
    const address = formData.get("address");
    const state = formData.get("state");
    const country = formData.get("country");
    const institution = formData.get("institution");
    const course = formData.get("course");
    const level = formData.get("level");
    const matricNumber = formData.get("matricNumber");
    const siwesDuration = formData.get("siwesDuration");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const department = formData.get("department");
    const skills = formData.get("skills");
    const experience = formData.get("experience");
    const whyCoderina = formData.get("whyCoderina");

    // Files
    const cv = formData.get("cv");
    const siwesLetter = formData.get("siwesLetter");
    const studentId = formData.get("studentId");
    const headshot = formData.get("headshot");
    // Validation
    if (!fullName?.trim() || !email?.trim() || !phone?.trim()) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Prevent duplicates
    const existing = await sanityClient.fetch(
      `*[_type == "siwesApplication" && email == $email][0]`,
      { email }
    );
    if (existing) {
      return NextResponse.json(
        { error: "Application already submitted" },
        { status: 409 }
      );
    }

    // Upload files
    const uploadedCv = await uploadToCloudinary(cv, fullName, "cv");
    const uploadedLetter = await uploadToCloudinary(
      siwesLetter,
      fullName,
      "siwes_letter"
    );
    const uploadedStudentId = await uploadToCloudinary(
      studentId,
      fullName,
      "student_id"
    );
    const uploadedHeadshot = await uploadToCloudinary(
      headshot,
      fullName,
      "headshot"
    );

    // Save to Sanity
    await sanityClient.create({
      _type: "siwesApplication",
      fullName,
      email,
      phone,
      gender,
      address,
      state,
      country,
      institution,
      course,
      level,
      matricNumber,
      siwesDuration,
      startDate,
      endDate,
      department,
      skills,
      experience,
      whyCoderina,
      cv: uploadedCv,
      siwesLetter: uploadedLetter,
      studentId: uploadedStudentId,
      headshot: uploadedHeadshot,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, message: "SIWES application submitted!" }, { status: 201 });
  } catch (error) {
    console.error("SIWES POST error:", error);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
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
