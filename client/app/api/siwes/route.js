import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";
import cloudinary from "../../components/lib/cloudinary";


// async function uploadToCloudinary(file, fullName, docType) {
//   if (!file) return null;

//   const publicId = `${fullName
//     .toLowerCase()
//     .replace(/\s+/g, "_")}_${docType}`;

//   const upload = await cloudinary.uploader.upload(file, {
//     folder: "siwes",
//     public_id: publicId,
//     resource_type: "auto", // VERY IMPORTANT for PDFs, images, docs
//   });

//   return {
//     url: upload.secure_url,
//     public_id: upload.public_id,
//   };
// }

async function uploadToCloudinary(file, fullName, docType) {
  if (!file) return null;

  // sanitize applicant name
  const applicantFolder = fullName.toLowerCase().replace(/\s+/g, "_");

  const upload = await cloudinary.uploader.upload(file, {
    folder: `coderina/siwes/${applicantFolder}`, // nested folders
    public_id: docType, // just cv, siwes_letter, etc.
    resource_type: "auto", // supports PDF, images, docs
  });

  return {
    url: upload.secure_url,
    public_id: upload.public_id,
  };
}


/* =====================
   CREATE SIWES APPLICATION
===================== */
// export async function POST(request) {
//   try {
//     const body = await request.json();

//     const {
//       // Personal Info
//       fullName,
//       email,
//       phone,
//       gender,
//       address,
//       state,
//       country,

//       // Academic Info
//       institution,
//       course,
//       level,
//       matricNumber,

//       // Internship
//       siwesDuration,
//       startDate,
//       endDate,
//       department,

//       // Skills & Motivation
//       skills,
//       experience,
//       whyCoderina,

//       // Documents (Sanity asset refs)
//       cv,
//       siwesLetter,
//       studentId,
//       headshot,
//     } = body;

//     /* ========= REQUIRED FIELD VALIDATION ========= */
//     if (
//       !fullName?.trim() ||
//       !email?.trim() ||
//       !phone?.trim() ||
//       !institution?.trim() ||
//       !course?.trim() ||
//       !siwesDuration?.trim() ||
//       !department?.trim() ||
//       !whyCoderina?.trim()
//     ) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     /* ========= EMAIL VALIDATION ========= */
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Invalid email address" },
//         { status: 400 }
//       );
//     }

//     /* ========= PREVENT DUPLICATE APPLICATION ========= */
//     const existing = await sanityClient.fetch(
//       `*[_type == "siwesApplication" && email == $email][0]`,
//       { email }
//     );

//     if (existing) {
//       return NextResponse.json(
//         { error: "Application already submitted with this email" },
//         { status: 409 }
//       );
//     }

//     /* ========= CREATE DOCUMENT ========= */
//     await sanityClient.create({
//       _type: "siwesApplication",

//       // Personal
//       fullName,
//       email,
//       phone,
//       gender,
//       address,
//       state,
//       country,

//       // Academic
//       institution,
//       course,
//       level,
//       matricNumber,

//       // Internship
//       siwesDuration,
//       startDate,
//       endDate,
//       department,

//       // Skills & Motivation
//       skills,
//       experience,
//       whyCoderina,

//       // Documents (optional)
//       cv: cv || undefined,
//       siwesLetter: siwesLetter || undefined,
//       studentId: studentId || undefined,
//       headshot: headshot || undefined,

//       // Metadata
//       status: "pending",
//       createdAt: new Date().toISOString(),
//     });

//     return NextResponse.json(
//       {
//         success: true,
//         message: "SIWES application submitted successfully",
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("SIWES POST error:", error);
//     return NextResponse.json(
//       { error: "Failed to submit application" },
//       { status: 500 }
//     );
//   }
// }

export async function POST(request) {
  try {
    const body = await request.json();

    const {
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

      // Documents (base64 or file URLs)
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

    /* ========= PREVENT DUPLICATE ========= */
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

    /* ========= UPLOAD DOCUMENTS TO CLOUDINARY ========= */
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

    /* ========= SAVE TO SANITY ========= */
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

      // Cloudinary documents
      cv: uploadedCv,
      siwesLetter: uploadedLetter,
      studentId: uploadedStudentId,
      headshot: uploadedHeadshot,

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
