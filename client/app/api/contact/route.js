import connectDB from "../../utlity/dbConnect";
import ContactUs from "../../utlity/models/contact";
import sendmail from "../../utlity/sendmail";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();

  try {
    const { name, email, message, subject, reason } = await req.json();

    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: "Email and message are required." },
        { status: 400 }
      );
    }

    // Save full data to MongoDB
    await ContactUs.create({
      name: name || "Anonymous",
      email,
      message,
      subject: subject || "",
      reason: reason || "",
      createdAt: new Date(),
    });

    // Only send name, email, and message in the email
    const adminSubject = `New message from ${name || "Anonymous"}`;
    const shortMessage = `
      Name: ${name || "Anonymous"}
      Email: ${email}
      Message: ${message}
    `;

    // Send email to admin
    const adminResponse = await sendmail(
      [process.env.EMAIL_USER],
      adminSubject,
      shortMessage
    );

    // Optionally send confirmation to the user
    if (adminResponse.success) {
      await sendmail(
        [email],
        "We received your message - Coderina EdTech Foundation",
        `Hi ${name || "there"},\n
Thank you for reaching out to Coderina EdTech Foundation!\n
We empower individuals and organizations through innovative STEM education, digital skills, and technology-driven solutions.\n
Our team will review your message and get back to you within 1-3 business days.\n\n
The Coderina Team\n
www.coderina.org`
      );
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all messages
export async function GET() {
  await connectDB();

  try {
    const messages = await ContactUs.find().sort({ createdAt: -1 });
    return NextResponse.json(
      { success: true, data: messages },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// delete

export async function DELETE(req) {
  await connectDB();

  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    const deleted = await ContactUs.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, message: "Message not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Message deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
