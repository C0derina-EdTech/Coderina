"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
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
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
