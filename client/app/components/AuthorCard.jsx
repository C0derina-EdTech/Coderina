"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaLink,
  FaComments,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../../public/logo.png";
import { useFormContext } from "./contexts/FormContext";
const AuthorCard = ({ links, comments }) => {
  const [pageUrl, setPageUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Only runs in the client, sets the full current URL
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  // Function to copy the URL to the clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl); // Copies the URL
      setCopied(true); // Show feedback that it was copied
      setTimeout(() => setCopied(false), 2000); // Reset feedback after 2 seconds
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };
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

  const { linkedin, youtube, twitter, instagram, facebook } = links;
  const [agree, setAgree] = useState(false);
  return (
    <div className="text-color">
      <div className="mt-6  py-10 px-6">
        {/* Top Row */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:justify-between mb-10">
          <div className="order-0 md:hidden w-full flex items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-color"></div>
              <span className="mx-4 text-sm text-color font-semibold">SHARE</span>
              <div className="flex-grow border-t border-color"></div>
            </div>
          </div>
          <div className="order-2 md:order-1 flex items-center space-x-3">
            <div className="w-10 h-10 relative rounded-full overflow-hidden">
              <Image
                src="/codelogo.png"
                alt="Author"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm">
              By <span className="font-semibold">coderinaAdmin</span>
            </p>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center space-x-4">
            {facebook && (
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:text-gray-400" />
              </a>
            )}
            {twitter && (
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer hover:text-gray-400" />
              </a>
            )}
            {youtube && (
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:text-gray-400" />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:text-gray-400" />
              </a>
            )}
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer hover:text-gray-400" />
              </a>
            )}
            <div className="flex items-center space-x-2 relative">
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-2 cursor-pointer hover:text-gray-400"
              >
                <FaLink />
                <span
                  className={`transition-all duration-300 text-sm ${
                    copied ? "text-color" : "opacity-0 group-hover:opacity-100"
                  }`}
                  style={{ fontSize: copied ? "0.4rem" : "0.75rem" }}
                >
                  {copied ? "Copied!" : "Copy URL"}
                </span>
              </button>
            </div>
          </div>

          <div className="order-3 flex items-center text-sm space-x-1">
            <FaComments />
            <span>{comments} Comments</span>
          </div>
        </div>

        {/* Author Info */}
        <div className="max-w-5xl mx-auto flex items-center space-x-6 border-t border-gray-700 pt-10">
          <div className="w-24 h-24 rounded-full overflow-hidden relative border-4 border-gray-700">
            <Image src="/logo.png" alt="Author" fill className="object-cover" />
          </div>

          <div>
            <h2 className="text-xl font-semibold">coderinaadmin</h2>
            <p className="text-sm text-gray-400">
              Posts by coderinaadmin <span className="ml-1">➜</span>
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-4 border-t border-gray-700 pt-4 flex items-center space-x-2">
          <FaLink />
        </div>
      </div>

      <div className=" px-4 md:px-10">
        {/* Subscription Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Subscribe so you don`t miss a case study
          </h2>
          <p className="text-sm text-color2">
            Sign up with your email address to receive case studies and updates!
          </p>
        </div>

        {/* Subscription Form */}
        <form
          onSubmit={handleSubscribe}
          className="max-w-4xl mx-auto gap-4 mb-4"
        >
          <div className=" flex flex-col md:flex-row items-center gap-4 mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First name"
              className="w-full md:w-1/3 px-4 py-3 bg-transparent border border-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full md:w-1/3 px-4 py-3 bg-transparent border border-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !agreed}
              className={`px-6 py-3 bg-color text-background w-full md:w-auto text-[15px] font-semibold transition-all ${
                !agreed || loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-90"
              }`}
            >
              {loading ? "Subscribing..." : "SUBSCRIBE"}
            </button>
          </div>
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

          {/* Checkbox */}
          <div className="flex items-center justify-center gap-3 text-sm text-color2 mb-10">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 accent-black border-2 border-color bg-color checked:border-background rounded-sm transition duration-200"
            />
            <label htmlFor="policy">
              I have read and agree to the
              <span className="underline cursor-pointer"> Privacy Policy</span>
            </label>
          </div>
        </form>

        {/* Up Next Section */}
        <div className="hidden max-w-4xl mx-auto  flex-col md:flex-row items-center md:items-start justify-between gap-6 border-t border-gray-700 pt-10">
          <div className="flex-1">
            <p className="text-gray-400 text-sm uppercase">Up Next</p>
            <h3 className="text-2xl font-semibold leading-snug mt-2">
              Case Study: Building the Gerald Nwoye Foundation Website - A
              Digital Home for Community Empowerment
            </h3>
          </div>
          <div className="w-28 h-28 relative">
            <Image
              src={logo} // ← Put your image inside public/
              alt="Gerald Nwoye Foundation"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
