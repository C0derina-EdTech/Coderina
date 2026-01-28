"use client";
import { useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(() => {
    if (typeof window !== "undefined") {
      return !localStorage.getItem("cookieConsent");
    }
    return false;
  });

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 border-t border-gray-700 z-50">
      <div className="max-w-400 mx-auto px-3 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-[11px] md:text-xs text-gray-300 leading-snug">
          We use cookies to improve your experience, analyze traffic, and support marketing.
        </p>

        <div className="flex gap-2 shrink-0">
          <button className="border border-teal-500 text-teal-500 px-3 py-1 rounded-full text-[11px] font-medium">
            Settings
          </button>
          <button
            onClick={acceptCookies}
            className="bg-teal-800 text-white px-3 py-1 rounded-full text-[11px] font-medium"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
