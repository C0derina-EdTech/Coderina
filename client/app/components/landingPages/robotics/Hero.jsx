"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-black text-white">
      <section className="relative flex items-start justify-start pt-32 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full opacity-60 object-cover"
              src="/introduction.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="max-w-400 mx-auto px-2 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
              Industrial 3D Printing
            </h1>
            <p className="text-base md:text-lg lg:text-xl  text-gray-300 mb-8">
              Tailored additive manufacturing solutions for research industries,
              healthcare, aerospace, and innovation.
            </p>
            <div className="flex flex-wrap gap-4 text-white">
              <Link
                href="/"
                className="bg-teal-700 hover:bg-teal-600 text-white px-5 sm:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600"
              >
                Robotics Guide →
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-xs md:text-sm"
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

export default Hero;
