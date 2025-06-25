// components/SubscribeForm.tsx
"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { useTheme } from "../components/contexts/ThemeContext";
import Image from "next/image";
import { useFormContext } from "../components/contexts/FormContext";
import card from "../../public/esteam1.png";
import Link from "next/link";
const SubscribeForm = () => {
  const {
    email,
    setEmail,
    name,
    setName,
    handleSubscribe,
    loading,
    message,
    isSuccess,
    agreed,
    setAgreed,
  } = useFormContext();
  const { isOpen, closeModal } = useTheme();

  const modalRef = useRef();

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center  transition-opacity duration-300 ease-in-out">
      <div
        ref={modalRef}
        className="bg-background text-color max-w-[345px] mx-auto sm:max-w-xl lg:max-w-2xl w-full   relative transform transition-transform duration-300 ease-in-out scale-100 opacity-100 animate-fade-in"
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 font-extrabold "
        >
          <X />
        </button>
        <div className="flex items-start justify-center md:justify-between">
          <div className="relative w-96 lg:w-[700px] h-96 hidden sm:block">
            <Image src={card} fill alt="card" className="object-cover" />
          </div>

          <div className="py-9 px-6 md:p-10">
            <h1 className="text-lg md:text-xl font-semibold mb-4">
              Subscribe for updates from Coderina EdTech including case studies,
              tech tips, and more.
            </h1>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="First name"
                className="py-3 px-4 border text-black border-gray-300 w-full outline-none"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="py-3 px-4 border border-gray-300 text-black w-full outline-none"
              />

              <div>
                {message && (
                  <span
                    className={`text-[13px] mt-2 ${
                      isSuccess ? "text-green-300" : "text-red-300"
                    }`}
                  >
                    {message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center gap-2 text-sm ">
                <input
                  type="checkbox"
                  value={agreed}
                  onChange={(e) => setAgreed(e.target.value)}
                  className="w-4 h-4 accent-black border-2 border-color bg-color checked:border-background rounded-sm transition duration-200"
                />
                <Link
                  href="/privacy-policy"
                  className="text-[13px] text-color hover:text-gray-200"
                >
                  I have read and agree to the Privacy Policy
                </Link>
              </div>
              <button
                type="submit"
                disabled={loading || !agreed}
                className={`w-full px-6 py-3  text-background bg-color font-semibold hover:opacity-90 transition-all  ${
                  !agreed || loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                {loading ? "Subscribing..." : "SUBSCRIBE"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeForm;
