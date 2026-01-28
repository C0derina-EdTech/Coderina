"use client";

import React from "react";
import Link from "next/link";

const CouchHero = () => {
  return (
    <div className="bg-black text-white">
      <section className="relative flex items-start justify-start pt-32 pb-16 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10" />

          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            src="https://res.cloudinary.com/dpfbpdohh/video/upload/v1769190591/couchclip1_xw3x7s.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-400 mx-auto px-2">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
              Coderina University{" "}
              <span className="text-teal-600 hover:text-[#f9a826] transition-colors">
                Challenge
              </span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 leading-relaxed">
              An innovation platform designed to empower and inspire creativity
              amongst students in tertiary education by showcasing groundbreaking
              projects in collaboration with the National Universities Commission
              (NUC).
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-600
                           text-white px-5 sm:px-6 py-2 rounded-full
                           text-xs md:text-sm font-medium transition-colors
                           border border-teal-600"
              >
                Programs →
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-white
                           text-white px-5 sm:px-6 py-2 rounded-full
                           text-xs md:text-sm font-semibold
                           hover:bg-white hover:text-black transition-colors"
              >
                About Coderina
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouchHero;
