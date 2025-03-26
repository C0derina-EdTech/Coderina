import mongoose from "mongoose";
import validator from "validator";

// Define the schema for the FLL form
const fllSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: String,
      required: true,
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
      required: true,
      trim: true,
    },
    parentEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },
    studentEmail: {
      type: String,
      required: true,
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
 
    address: {
      type: String,
      required: true,
    },
  
    device: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt automatically
  }
);

// Create the model from the schema
const FLL = mongoose.models.FLL || mongoose.model("FLL", fllSchema);
export default FLL;
