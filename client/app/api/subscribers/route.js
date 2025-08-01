import { MongoClient, ObjectId } from "mongodb";
import sendEmail from "../../utlity/sendEmail";
import connect from "../../utlity/connect";

//MongoDB configuration
const MONGODB_URI = process.env.MONGODB_URL;
const MONGODB_DB = process.env.MONGODB_DB;
const connectToDatabase = async () => {
  const client = await MongoClient.connect(MONGODB_URI);
  return client.db(MONGODB_DB);
};

// Named export for handling POST requests
export async function POST(req) {
  const db = await connect();
  const collection = db.collection("subscribers");

  try {
    const { email, name } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required." }), {
        status: 400,
      });
    }

    // Check if email already exists
    const existingSubscriber = await collection.findOne({ email });
    if (existingSubscriber) {
      return new Response(
        JSON.stringify({ error: "Email already subscribed." }),
        { status: 400 }
      );
    }

    // Add the new email
    // Insert email and optional name
    await collection.insertOne({
      email,
      name: name || null,
      subscribedAt: new Date(),
    });

    // Send welcome email
    // Compose welcome message
    const greeting = name ? `Hello ${name},` : `Hello ${email},`;
    const subject = "Welcome to coderina Education and Technology Foundation!";
    const message = `${greeting} \n\nThank you for subscribing to the coderina's Newsletter! We're thrilled to have you on board.\n\nAt coderina Education and Technology Foundation, we are committed to empowering students and educators by providing access to cutting-edge STEM education, technology skills, and innovative learning opportunities. Our mission is to inspire the next generation of tech leaders and problem-solvers through programs, workshops, and collaborative initiatives designed to bridge the digital divide.\n\nAs a subscriber, you will receive the latest updates on our projects, upcoming events, workshops, and new educational resources. Stay tuned for exciting content that will help you stay ahead in the ever-evolving world of technology.\n\nBest regards,\nThe coderina Team`;

    const emailResponse = await sendEmail([email], subject, message);

    if (!emailResponse.success) {
      console.error("Failed to send email:", emailResponse.message);
      return new Response(
        JSON.stringify({
          message: "Subscriber added, but email could not be sent.",
        }),
        { status: 201 }
      );
    }

    return new Response(
      JSON.stringify({ message: "Successfully subscribed!" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error in POST:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}

export async function GET(req) {
  try {
    // Connect to MongoDB
    const db = await connect();
    const collection = db.collection("subscribers");

    // Fetch all subscribers
    const subscribers = await collection.find({}).toArray();
    // Only sort if all have valid dates
    if (subscribers) {
      subscribers.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );
    }
    return new Response(JSON.stringify({ success: true, subscribers }), {
      status: 200,
    });
  } catch (error) {
    console.log("Error in GET:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(
        JSON.stringify({ success: false, message: "Missing subscriber ID" }),
        { status: 400 }
      );
    }

    const db = await connect();
    const collection = db.collection("subscribers");

    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    if (result.deletedCount === 0) {
      return new Response(
        JSON.stringify({ success: false, message: "Subscriber not found" }),
        { status: 404 }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Subscriber deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Delete Error:", error.message);
    return new Response(
      JSON.stringify({ success: false, message: "Internal Server Error" }),
      { status: 500 }
    );
  }
}
