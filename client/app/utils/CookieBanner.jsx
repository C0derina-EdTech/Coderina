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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 py-2 2xl:p-4 z-50">
      <div className="max-w-400 mx-auto px-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs 2xl:text-sm text-gray-300">
          By clicking &quot;Accept All Cookies&quot;, you agree to the storing
          of cookies on your device to enhance site navigation, analyze site
          usage, and assist in our marketing efforts.
        </p>
        <div className="flex gap-3 shrink-0 text-xs 2xl:text-sm">
          <button className="border border-teal-500 text-teal-500 px-4 py-2 rounded-full font-semibold">
            Cookie Settings
          </button>
          <button
            onClick={acceptCookies}
            className="bg-teal-500 text-white px-4 py-2 rounded-full font-semibold"
          >
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
