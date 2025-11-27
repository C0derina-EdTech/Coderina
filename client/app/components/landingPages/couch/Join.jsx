"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Linkedin, Send, Mail } from "lucide-react";
import { useFormContext } from "../../contexts/FormContext";

export default function JoinCouch() {
  const {
    contactName, setContactName,
    contactEmail, setContactEmail,
    contactPhone, setContactPhone,
    contactWebsite, setContactWebsite,
    contactSubmitting,
    sendContact,
  } = useFormContext();

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh] 
                md:min-h-[90vh]
                lg:min-h-[600px]
                xl:min-h-[700px]
                2xl:min-h-[800px] 3xl:min-h-[1200px] ">

        {/* IMAGE SIDE - hidden on mobile */}
        <div className="relative hidden lg:block">
          <Image
            src="/couch/tag1.jpg"
            alt="COUCH innovation challenge Nigerian university teams"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* FORM SIDE */}
        <div className="relative flex items-center justify-center px-6 sm:px-10 lg:px-20 xl:px-28 py-16">

          {/* mobile bg image overlay */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/couch/tag1.jpg"
              alt="COUCH Nigeria background"
              fill
              className="object-cover opacity-10"
            />
          </div>

          <div className="relative z-10 w-full max-w-xl 3xl:max-w-2xl">

            {/* SEO HEADER */}
            <header className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-4">
                Join COUCH 2026 Innovation Challenge
              </h1>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                Are you ready to showcase your innovation and compete with
                the brightest university teams across Nigeria? Register your
                interest for the next COUCH edition and become part of the
                national technology revolution.
              </p>
            </header>

            {/* FORM */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendContact();
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="University Name"
                value={contactWebsite}
                onChange={(e) => setContactWebsite(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-0"
                required
              />

              <input
                type="text"
                placeholder="Team Name"
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-0"
                required
              />

              <input
                type="email"
                placeholder="Team Email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-0"
                required
              />

              <input
                type="tel"
                placeholder="+234XXXXXXXXXX"
                pattern="^\+234\d{10}$"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/20 text-white px-4 py-3 rounded-xl placeholder-gray-400 focus:outline-none focus:ring-0"
                required
              />

              <button
                type="submit"
                disabled={contactSubmitting}
                className="w-full bg-white text-gray-900 py-3 rounded-full font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {contactSubmitting ? "Submitting..." : "Register Your Interest"}
              </button>
            </form>

            {/* SOCIAL LINKS */}
            <div className="flex justify-center gap-6 mt-10">
              <Link href="https://instagram.com/couch_coderina" target="_blank">
                <Instagram className="hover:text-[#FFD700] transition" />
              </Link>
              <Link href="https://facebook.com/coderina university challenge" target="_blank">
                <Facebook className="hover:text-[#FFD700] transition" />
              </Link>
              <Link href="https://linkedin.com/company/coderina" target="_blank">
                <Linkedin className="hover:text-[#FFD700] transition" />
              </Link>
              <Link href="mailto:couch@coderina.org">
  <Mail className="hover:text-[#FFD700] transition" />
</Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
