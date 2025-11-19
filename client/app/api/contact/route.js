// import { NextResponse } from "next/server";
// import { sanityClient } from "../../components/lib/sanityClient";
// import { transporter } from "../../components/lib/email";

// export async function POST(req) {
//   try {
//     const { name, email, phone, website, country, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Invalid email address" },
//         { status: 400 }
//       );
//     }

//     // Save message to Sanity
//     await sanityClient.create({
//       _type: "contact",
//       name,
//       email,
//       phone,
//       website,
//       country,
//       message,
//     });

//     // -----------------------
//     //  BEAUTIFUL HTML TEMPLATE
//     // -----------------------
//     const adminHtml = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//         <h2 style="color: #0b3d91;">📩 New Contact Message</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone || "N/A"}</p>
//         <p><strong>Website:</strong> ${website || "N/A"}</p>
//         <p><strong>Country:</strong> ${country || "N/A"}</p>

//         <div style="margin-top: 20px; padding: 15px; background: #f4f4f4; border-left: 4px solid #0b3d91;">
//           <p><strong>Message:</strong></p>
//           <p>${message}</p>
//         </div>
//       </div>
//     `;

//     const userHtml = `
//       <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
//         <p>Dear <strong>${name}</strong>,</p>

//         <p>Thank you for contacting <strong>Coderina Education & Technology Foundation</strong>. We have received your message and our team will get back to you shortly.</p>

//         <p style="margin-top:20px;">Warm regards,<br><strong>Coderina Team</strong></p>
//       </div>
//     `;

//     // Email to Coderina Admin
//     await transporter.sendMail({
//       from: `"Coderina Website" <${process.env.OUTLOOK_EMAIL}>`,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Message from ${name}`,
//       text: `New contact message from ${name}, email: ${email}. Message: ${message}`,
//       html: adminHtml,
//     });

//     // Email to Sender
//     await transporter.sendMail({
//       from: `"Coderina Education & Technology Foundation" <${process.env.OUTLOOK_EMAIL}>`,
//       to: email,
//       subject: "We received your message",
//       text: `Dear ${name}, thank you for contacting us. We will respond shortly.`,
//       html: userHtml,
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Message sent and saved successfully",
//     });
//   } catch (error) {
//     console.error("Contact form error:", error);
//     return NextResponse.json(
//       { error: process.env.NODE_ENV === "development" ? error.message : "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { sanityClient } from "../../components/lib/sanityClient";

export async function POST(req) {
  try {
    const { name, email, phone, website, country, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Save message to Sanity
    await sanityClient.create({
      _type: "contact",
      name,
      email,
      phone,
      website,
      country,
      message,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Message saved successfully to Sanity",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development"
            ? error.message
            : "Failed to save message",
      },
      { status: 500 }
    );
  }
}
