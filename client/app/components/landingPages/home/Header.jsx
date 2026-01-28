"use client";
import React from "react";
import ExpandButton from "../../../utils/ExpandButton";
import Banner from "./Banner";

export default function CoderinaHero() {
  return (
    <div className="w-full">
      <section
        id="home-hero"
        className="relative flex items-center justify-center overflow-hidden bg-[#0a1621]
                   min-h-[550px] md:min-h-[450px] lg:min-h-[400px] 2xl:min-h-[600px]"
      >
        {/* Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src="https://res.cloudinary.com/dpfbpdohh/video/upload/v1769189691/introduction_fuqoz5.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent" />

        {/* Content */}
        <div className="relative z-10 font-poppins max-w-400 mx-auto px-2 sm:px-4 md:px-6 xl:px-8 py-20 2xl:py-32 w-full">
          <div className="max-w-3xl">
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight mb-6 md:mb-8">
              Youth Innovation & Entrepreneurship Empowerment
            </h1>

            <p className="text-gray-300 text-sm md:text-lg 2xl:text-xl mb-8 md:mb-12 leading-relaxed max-w-2xl">
              Empowering African youth through ICT development, innovation, and
              entrepreneurship education
            </p>

            <ExpandButton
              href="/programs"
              text="Explore Solutions"
              size="md"
              width={210}
            />
          </div>
        </div>

        <Banner />
      </section>
    </div>
  );
}
