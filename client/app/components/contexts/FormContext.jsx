"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { uploadFileToSanity } from "../lib/sanityhelpers";
const FormContext = createContext();

export function FormProvider({ children }) {
  // convert File to base64
 const fileToBase64 = (file) => {
  if (!file) return null;
  if (!["image/png", "image/jpeg", "application/pdf"].includes(file.type)) {
    throw new Error("Invalid file type");
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};


  // ---------- Contact Form ----------
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactWebsite, setContactWebsite] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactCountry, setContactCountry] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactError, setContactError] = useState("");
  const [contactSuccess, setContactSuccess] = useState("");

  const sendContact = async () => {
    setContactSubmitting(true);
    setContactError("");
    setContactSuccess("");

    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) {
      setContactError("Name, Email, and Message are required.");
      setContactSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactName,
          email: contactEmail,
          website: contactWebsite,
          phone: contactPhone,
          country: contactCountry,
          message: contactMessage,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message");

      setContactSuccess("Message sent successfully!");
      // Auto remove success after 10 seconds
      setTimeout(() => setContactSuccess(""), 10000);
      setContactName("");
      setContactEmail("");
      setContactWebsite("");
      setContactPhone("");
      setContactCountry("");
      setContactMessage("");
    } catch (err) {
      console.error("Contact form error:", err);
      setContactError(err.message || "Something went wrong.");
    } finally {
      setContactSubmitting(false);
    }
  };

  // ---------- Comment Form ----------
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [commentWebsite, setCommentWebsite] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentError, setCommentError] = useState("");
  const [commentSuccess, setCommentSuccess] = useState("");
  const [commentSubmitting, setCommentSubmitting] = useState(false);

  const sendComment = async (postId) => {
    setCommentSubmitting(true);
    setCommentError("");
    setCommentSuccess("");

    if (!commentName.trim() || !commentEmail.trim() || !commentText.trim()) {
      setCommentError("Name, Email, and Comment are required.");
      setCommentSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          postId,
          name: commentName,
          email: commentEmail,
          website: commentWebsite,
          comment: commentText,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to submit comment");

      setCommentSuccess("Comment submitted!");
      setCommentName("");
      setCommentEmail("");
      setCommentWebsite("");
      setCommentText("");
    } catch (err) {
      console.error("Comment submission error:", err);
      setCommentError(err.message || "Something went wrong.");
    } finally {
      setCommentSubmitting(false);
    }
  };

  // ---------- Subscribers ----------
  const [subscriberName, setSubscriberName] = useState("");
  const [subscriberEmail, setSubscriberEmail] = useState("");
  const [subscriberSubmitting, setSubscriberSubmitting] = useState(false);
  const [subscriberSuccess, setSubscriberSuccess] = useState("");
  const [subscriberError, setSubscriberError] = useState("");

  const addSubscriber = async () => {
    setSubscriberSubmitting(true);
    setSubscriberError("");
    setSubscriberSuccess("");

    if (!subscriberEmail.trim()) {
      setSubscriberError("Email is required.");
      setSubscriberSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/subscribers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: subscriberName,
          email: subscriberEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add subscriber");

      setSubscriberSuccess("Subscribed successfully!");
      setTimeout(() => setSubscriberSuccess(""), 10000);

      setSubscriberName("");
      setSubscriberEmail("");
    } catch (err) {
      console.error("Subscriber error:", err);
      setSubscriberError(err.message || "Something went wrong.");
    } finally {
      setSubscriberSubmitting(false);
    }
  };

  // ---------- CONTACT COUCH FORM ----------
  const [couchSubmitting, setCouchSubmitting] = useState(false);
  const [universityName, setUniversityName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [universityEmail, setUniversityEmail] = useState("");
  const [universityPhone, setUniversityPhone] = useState("");
  const [country, setCountry] = useState("");
  const [couchError, setCouchError] = useState("");
  const [couchSuccess, setCouchSuccess] = useState("");

  const sendCouchContact = async () => {
    setCouchSubmitting(true);
    setCouchError("");
    setCouchSuccess("");

    // ALL FIELDS REQUIRED
    if (
      !universityName.trim() ||
      !teamName.trim() ||
      !universityEmail.trim() ||
      !universityPhone.trim() ||
      !country.trim()
    ) {
      setCouchError("All fields are required.");
      setCouchSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contactCouch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          universityName,
          teamName,
          universityEmail,
          universityPhone,
          country,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      setCouchSuccess("Form submitted successfully!");
      setTimeout(() => setCouchSuccess(""), 10000);

      // Reset
      setUniversityName("");
      setTeamName("");
      setUniversityEmail("");
      setUniversityPhone("");
      setCountry("");
    } catch (err) {
      console.error("Couch form error:", err);
      setCouchError(err.message || "Something went wrong.");
    } finally {
      setCouchSubmitting(false);
    }
  };


  // ---------- SIWES APPLICATION ----------
  const [siwesSubmitting, setSiwesSubmitting] = useState(false);
  const [siwesError, setSiwesError] = useState("");
  const [siwesSuccess, setSiwesSuccess] = useState("");

  // SIWES FORM DATA (matches UI + Sanity schema)
  const [siwesData, setSiwesData] = useState({
    // Personal
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    state: "",
    country: "Nigeria",

    // Academic
    institution: "",
    course: "",
    level: "",
    matricNumber: "",

    // Internship
    siwesDuration: "",
    startDate: "",
    endDate: "",
    department: "",

    // Skills & Motivation
    skills: "",
    experience: "",
    whyCoderina: "",

    // Documents
    cv: null,
    siwesLetter: null,
    studentId: null,
    headshot: null,
  });

 

  const submitSiwesApplication = async () => {
    setSiwesSubmitting(true);
    setSiwesError("");
    setSiwesSuccess("");

    try {
      
      // Send only asset references to your API
      const payload = {
  ...siwesData,
  cv: siwesData.cv ? await fileToBase64(siwesData.cv) : null,
  siwesLetter: siwesData.siwesLetter
    ? await fileToBase64(siwesData.siwesLetter)
    : null,
  studentId: siwesData.studentId
    ? await fileToBase64(siwesData.studentId)
    : null,
  headshot: siwesData.headshot ? await fileToBase64(siwesData.headshot) : null,
};


      const res = await fetch("/api/siwes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok)
        throw new Error(data?.error || "Failed to submit SIWES application");

      setSiwesSuccess("SIWES application submitted successfully!");
      // Reset form (optional)
      setSiwesData({
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  address: "",
  state: "",
  country: "Nigeria",
  institution: "",
  course: "",
  level: "",
  matricNumber: "",
  siwesDuration: "",
  startDate: "",
  endDate: "",
  department: "",
  skills: "",
  experience: "",
  whyCoderina: "",
  cv: null,
  siwesLetter: null,
  studentId: null,
  headshot: null,
});

    } catch (err) {
      console.error("SIWES submission error:", err);
      setSiwesError(err.message || "Something went wrong.");
    } finally {
      setSiwesSubmitting(false);
    }
  };

  // ------------- CHANGE HANDLER -------------
  const handleSiwesChange = (field, value) => {
    setSiwesData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <FormContext.Provider
      value={{
        // Contact form
        contactSubmitting,
        contactName,
        setContactName,
        contactEmail,
        setContactEmail,
        contactWebsite,
        setContactWebsite,
        contactPhone,
        setContactPhone,
        contactCountry,
        setContactCountry,
        contactMessage,
        setContactMessage,
        contactError,
        contactSuccess,
        sendContact,

        // Comment form
        commentSubmitting,
        commentName,
        setCommentName,
        commentEmail,
        setCommentEmail,
        commentWebsite,
        setCommentWebsite,
        commentText,
        setCommentText,
        commentError,
        commentSuccess,
        sendComment,
        // Subscribers
        subscriberName,
        setSubscriberName,
        subscriberEmail,
        setSubscriberEmail,
        subscriberSubmitting,
        subscriberSuccess,
        subscriberError,
        addSubscriber,

        // Couch Contact
        couchSubmitting,
        universityName,
        setUniversityName,
        teamName,
        setTeamName,
        universityEmail,
        setUniversityEmail,
        universityPhone,
        setUniversityPhone,
        country,
        setCountry,
        couchError,
        couchSuccess,
        sendCouchContact,
        // siwes
        siwesSubmitting,
        siwesError,
        siwesSuccess,
        siwesData,
        handleSiwesChange,
        submitSiwesApplication,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
