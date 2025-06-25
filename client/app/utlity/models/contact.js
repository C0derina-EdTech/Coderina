// models/contactUsModel.js
import mongoose from "mongoose";
const validator = require("validator");

// Define the schema for the Contact Us form
const contactUsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Trim leading and trailing spaces
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Regex for email format
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
    },
   
    message: {
      type: String,
      required: true,
      trim: true,

      maxlength: 1000, // Maximum message length
    },

     subject: {
      type: String,
      trim: true,
    },

     reason: {
      type: String,
      enum: ["Sponsorship", "Volunteer", "Other"],
    },

  },
  {
    timestamps: true, // This will add createdAt and updatedAt automatically
  }
);

// Create the model from the schema
const ContactUs =
  mongoose.models.ContactUs || mongoose.model("ContactUs", contactUsSchema);
export default ContactUs;
