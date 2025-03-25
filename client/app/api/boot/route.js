import Boot from "../../models/easter";
import connectDB from "../../lib/dbConnect"; // Utility for DB connection
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Create a new bootcamp registration
export async function POST(req) {
  try {
    await connectDB(); // Ensure the database connection is established

    const {
      studentName,
      parentName,
     
      parentEmail,
      age,
      program,
      grade,
      learningMode,
      gender,
      address,
      additionalInfo,
      phone,
      paymentProof,
    } = await req.json();

    // Prepare registration data
    const formData = {
      studentName,
      parentName,
     
      parentEmail,
      age,
      program,
      grade,
      learningMode,
      gender,
      address,
      additionalInfo,
      phone,
      paymentProof,
    };

      // Check if paymentProof exists before saving
      if (!paymentProof) {
        return NextResponse.json(
          { success: false, message: "Payment proof is required." },
          { status: 400 }
        );
      }

    // Save registration data to MongoDB
    const boot = new Boot(formData);
    await boot.save();
    console.log("Bootcamp registration successful");

    return NextResponse.json(
      { success: true, message: "Registration successful" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration Error:", error);
    return NextResponse.json(
      { message: "Error saving registration", error: error.message },
      { status: 500 }
    );
  }
}

// Retrieve all bootcamp registrations
export async function GET() {
  try {
    await connectDB();
    const boots = await Boot.find({});
    return NextResponse.json({ success: true, data: boots }, { status: 200 });
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// Delete a bootcamp registration by ID
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "ID is required." },
        { status: 400 }
      );
    }

    await connectDB();
    const result = await Boot.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, message: "Registration not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Registration deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error." },
      { status: 500 }
    );
  }
}
