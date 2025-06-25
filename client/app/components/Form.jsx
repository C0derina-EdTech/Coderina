"use client";

import { useState } from "react";
import { useFormContext } from "./contexts/FormContext";
export default function ContactForm() {
  const {
    name,
    setName,
    email,
    setEmail,
    userMessage,
    reason,
    setReason,
    subject,
    setSubject,
    setUserMessage,
    handleContact,
    message,
    isMessage,
    Success,
    loading,
    nameError,
    emailError,
    messageError,
  } = useFormContext();

  return (
    <form
      onSubmit={handleContact}
      className="max-w-5xl mx-auto px-3 md:px-6 py-12 md:py-16 space-y-6 text-color"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block mb-4 sm:mb-6 text-sm font-medium"
          >
            Your Name <span className="text-red-500">(required)</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 bg-transparent border border-gray-600 outline-none rounded focus:outline-none"
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-4 sm:mb-6 text-sm font-medium"
          >
            Your Email <span className="text-red-500">(required)</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none "
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
      </div>

      {/* Subject (optional) */}
      <div>
        <label
          htmlFor="subject"
          className="block mb-4 sm:mb-6 text-sm font-medium"
        >
          Subject 
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 bg-transparent border border-gray-600 rounded"
        />
      </div>

     {/* Reason (enum dropdown) */}
<div>
  <label htmlFor="reason" className="block mb-4 sm:mb-6 text-sm font-medium">
    Reason 
  </label>
  <select
    id="reason"
    name="reason"
    value={reason}
    onChange={(e) => setReason(e.target.value)}
    className="w-full p-3 bg-transparent border border-gray-600 rounded"
  >
    <option value="">-- Select Reason --</option>
    <option value="Sponsorship">Sponsorship</option>
    <option value="Volunteer">Volunteer</option>
    <option value="Other">Other</option>
  </select>
</div>


      <div>
        <label
          htmlFor="message"
          className="block mb-4 sm:mb-6 text-sm font-medium"
        >
          Your Message
        </label>
        <textarea
          name="message"
          id="message"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          rows={6}
          required
          className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none "
        />
        {messageError && (
          <p className="text-red-500 text-sm mt-1">{messageError}</p>
        )}
      </div>

      {isMessage && (
        <div
          className={`text-[16px] ${
            Success ? " text-red-600" : " text-green-500"
          }`}
        >
          {isMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`
    flex items-center justify-center
    px-6 py-3 mt-4
    text-background bg-color
    hover:bg-socialT hover:text-background
    transition
    ${loading ? "opacity-50 cursor-not-allowed" : ""}
  `}
      >
        {loading && (
          <svg
            className="animate-spin h-5 w-5 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            />
          </svg>
        )}
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
