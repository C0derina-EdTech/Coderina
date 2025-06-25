import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export default async function connect() {
  const uri = process.env.MONGODB_URL;

  if (!uri) {
    throw new Error("❌ Missing MONGODB_URL in environment");
  }

  // Return cached connection if available
  if (cachedDb) return cachedDb;

  try {
    const client = await MongoClient.connect(uri);

    const db = client.db(); // uses the DB in the URI (e.g., "Subscribers")
    cachedClient = client;
    cachedDb = db;

    console.log("✅ MongoDB connected to:", db.databaseName);
    return db;
  } catch (error) {
    console.log("❌ MongoDB connection failed:", error);
    throw error;
  }
}
