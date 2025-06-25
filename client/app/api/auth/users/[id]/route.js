import { NextResponse } from "next/server";
import connectDB from "../../../../utlity/dbConnect";
import { getServerSession } from "next-auth";
import { authOptions } from "../../[...nextauth]/route";
import users from "../../../../utlity/models/user";
import cloudinary from "../../../../lib/cloudinary";
import mongoose from "mongoose";
import { getToken } from "next-auth/jwt";



connectDB();

connectDB();

export async function GET(req, { params }) {
  try {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const user = await users.findById(id).select("-password");
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

// export async function GET(req, { params }) {
//   try {
//     const token = await getToken({ req });
//     if (!token || !token.id || token.id !== params.id) {
//       return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//     }

//     const userId = params.id;

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
//     }

//     const user = await users.findById(userId).select("-password");

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json(user, { status: 200 });
//   } catch (error) {
//     console.error("GET /user/:id error:", error);
//     return NextResponse.json({ message: "Server error" }, { status: 500 });
//   }
// }


// ✅ PATCH update profile
export async function PATCH(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ message: "Invalid user ID" }, { status: 400 });
    }

    const formData = await req.formData();
    const updates = {};

    ["username", "email", "address", "phone"].forEach((field) => {
      const value = formData.get(field);
      if (value) updates[field] = value;
    });

    const profilePicture = formData.get("profilePicture");

    if (
      profilePicture &&
      typeof profilePicture === "object" &&
      profilePicture.name
    ) {
      const buffer = Buffer.from(await profilePicture.arrayBuffer());
      const base64Image = buffer.toString("base64");

      const uploadRes = await cloudinary.uploader.upload(
        `data:${profilePicture.type};base64,${base64Image}`,
        {
          folder: "coderina_profiles",
          public_id: `${userId}-profile`,
          overwrite: true,
        }
      );

      updates.profilePicture = uploadRes.secure_url;
    }

    const updatedUser = await users
      .findByIdAndUpdate(userId, updates, { new: true })
      .select("-password");

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("PATCH /profile error:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
