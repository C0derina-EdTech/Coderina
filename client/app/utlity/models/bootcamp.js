import mongoose from "mongoose";
import validator from "validator";

// Define the schema for the Bootcamp form
const bootSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: String,
    },
    grade: {
      type: String,
      required: true,
    },
    gender: {
      type: String,

      required: true,
    },
    parentName: {
      type: String,

      trim: true,
    },
    parentEmail: {
      type: String,

      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    email: {
      type: String,

      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    phone: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    learningMode: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    additionalInfo: {
      type: String,
      default: "",
    },
    paymentProof: {
      type: String,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model from the schema
const Boot = mongoose.models.Boot || mongoose.model("Boot", bootSchema);

export default Boot;
