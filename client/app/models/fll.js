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
    parentName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    parentEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
    age: {
      type: Number,
      required: true,
      min: 3, // Assuming minimum age requirement
      max: 18, // Assuming maximum age limit for students
    },
    class: {
      type: String,
      required: true,
      trim: true,
    },
    sessions: {
      type: String,
      enum: ["Yes", "No"],
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
    },
    device: {
      type: String,
      enum: ["Laptop", "iPad", "Tablet"],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^\+?[1-9]\d{1,14}$/.test(v); // Regex for phone number validation (E.164 format)
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
  },
  {
    timestamps: true, // This will add createdAt and updatedAt automatically
  }
);

// Create the model from the schema
const FLL = mongoose.models.FLL || mongoose.model("FLL", fllSchema);
export default FLL;
