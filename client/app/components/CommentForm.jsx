"use client";

import { useState } from "react";
import { useBlogContext } from "./contexts/BlogContext";

export default function CommentForm({ id }) {
  const {
    name,
    setName,
    email,
    setEmail,
    website,
    setWebsite,
    comment,
    setComment,
    isMessage,
    isSuccess,
    handleComments,
    handleSaveInfo,
    loading,
    nameError,
    emailError,
    commentError,
  } = useBlogContext();

  return (
    <div className="w-full">
      <div className="mt-5 md:mt-10 text-center space-y-2">
        <h1 className="text-md lg:text-[2rem] font-semibold">
          What do you think?
        </h1>
        <p className="text-sm">
          Your email address will not be published. Required fields are marked *
        </p>
      </div>
      <form
        onSubmit={(e) => handleComments(e, id)}
        className="max-w-5xl mx-auto py-8 space-y-6 text-color flex flex-col md:items-center md:justify-center"
      >
        <div className="w-full">
          <textarea
            placeholder="Your comment*"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={6}
            className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-socialT"
          />
          {commentError && (
            <p className="text-red-500 text-sm mt-1">{commentError}</p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-socialT"
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1">{nameError}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-socialT"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full p-3 bg-transparent border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-socialT"
            />
          </div>
        </div>

        {isMessage && (
          <p
            className={`text-sm ${
              isSuccess ? "text-green-600" : "text-red-600"
            }`}
          >
            {isMessage}
          </p>
        )}
        {/* Checkbox */}
        <div className="flex items-center justify-center gap-3 text-sm text-color2">
          <input
            type="checkbox"
            onChange={handleSaveInfo}
            className="w-4 h-4 accent-black border-2 border-color bg-color checked:border-background rounded-sm transition duration-200"
          />
          <label htmlFor="policy">
            Save my name,email, and website in this browser for the next time I
            comment.
          </label>
        </div>

        <button
          type="submit"
          disabled={loading || !email}
          className={`
    flex items-center justify-center
    w-full md:w-44 py-3 mt-4
    text-background bg-color
    hover:opacity-90
    transition-all text-[15px] font-semibold
    ${!email || loading ? "opacity-50 cursor-not-allowed" : ""}
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
          {loading ? "Posting..." : "POST COMMENT"}
        </button>
      </form>
    </div>
  );
}
