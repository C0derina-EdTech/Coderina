"use client";
import React, { useState } from "react";
import Head from "next/head";
import { Phone, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFormContext } from "../../contexts/FormContext";
import { Country } from "country-state-city";
export default function CoderinaLanding() {
  const {
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
    contactSubmitting,
    contactError,
    contactSuccess,
    sendContact,
  } = useFormContext();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will contact you soon.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="bg-[#f9fafb]">
        {/* Hero Section with Form */}
        <section className="relative">
          <div>
            <div
              className="
                grid lg:grid-cols-2
                min-h-[50vh] 
                md:min-h-[90vh]
                lg:min-h-[400px]
              "
            >
              {/* Left Side - Image */}
              <div className="relative bg-[#e6eef2]  order-2 lg:order-1">
                <Image
                  src="/nationals.png"
                  alt="A group picture of at the National competition 2025"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Call to Action Card */}
                <div
                  className="
                    absolute bottom-6 left-6 
                    sm:bottom-8 sm:left-8 
                    lg:bottom-12 lg:left-12 
                    bg-[#1a3a52] text-white 
                    px-5 py-4 sm:px-6 sm:py-4 lg:px-8 lg:py-5 
                    rounded-xl 
                    max-w-[260px] sm:max-w-[280px] lg:max-w-xs
                  "
                >
                  <div className="flex items-center gap-3 lg:gap-4">
                    <div className="bg-white/20 p-2 lg:p-3 rounded-full">
                      <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm font-medium mb-1 opacity-90">
                        Call us anytime
                      </p>
                      <p className="text-lg lg:text-xl font-bold tracking-wide">
                        +234 909 330 7353
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div
                className="hidden
                  bg-[#133c55] 
                  px-6 
                  sm:px-8 sm:py-16 
                  lg:px-16 lg:py-20 
                  xl:px-24 xl:py-28 
                  md:flex items-center justify-center 
                  order-1 lg:order-2 
                  relative overflow-hidden
                "
              >
                {/* Decorative Rocket */}
                <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 opacity-70 animate-bounce">
                  <Rocket className="w-12 h-12 lg:w-16 lg:h-16 text-[#f9a826]" />
                </div>

                <div className="w-full max-w-xl mx-auto relative z-10 ">
                  <div className="text-center mb-8 lg:mb-12">
                    <p className="text-[#f9a826] text-xs lg:text-sm font-semibold mb-2 tracking-wide uppercase">
                      Empowering Africa Through STEM
                    </p>
                    <h1 className="text-white text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6 leading-tight">
                      Connect With Coderina
                    </h1>
                    <p className="text-gray-200 text-sm sm:text-base max-w-lg mx-auto">
                      Join our mission to bridge the technology gap in Africa
                      through robotics, STEM programs, and innovation-driven
                      education.
                    </p>
                  </div>

                  {/* ✅ Responsive Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendContact();
                    }}
                    className="
    space-y-4 lg:space-y-5
    w-full
    flex flex-col
    justify-center
  "
                  >
                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f9a826]"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f9a826]"
                        required
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 lg:gap-5">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f9a826]"
                        required
                      />
                      <input
                        type="url"
                        name="website"
                        placeholder="Your Website (optional)"
                        value={contactWebsite}
                        onChange={(e) => setContactWebsite(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f9a826]"
                      />
                    </div>

                    <textarea
                      name="message"
                      placeholder="Write Your Message Here"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      rows="4"
                      className="w-full px-4 py-3 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f9a826]"
                    ></textarea>

                    <div className="flex justify-center sm:justify-start">
                      <button
                        type="submit"
                        disabled={contactSubmitting}
                        className="w-full sm:w-auto px-8 py-3 bg-[#f9a826] hover:bg-[#e29818] text-[#133c55] text-sm font-semibold rounded-full transition-all duration-300"
                      >
                        {contactSubmitting ? "Sending..." : "Submit Now"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
