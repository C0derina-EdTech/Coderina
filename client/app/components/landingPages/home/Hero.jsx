"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import ExpandButton from "../../../utils/ExpandButton";
import Link from "next/link";
export default function CoderinaHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/kids1.jpg",
    "/coderinagirls.png",
    "/kidschess.jpg",
    "/teach1.png",
    "/robotkids.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section - Dark Background with Yellow Robot */}
      <section className="min-h-[500px] md:min-h-[450px] 2xl:min-h-[600px] relative flex items-center justify-center overflow-hidden bg-[#0a1621]">
        {/* Background Image - Yellow Robot */}
        <div className="absolute inset-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Coderina activity ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Content Container */}
        <div className="relative font-poppins z-10 max-w-400 mx-auto px-2 sm:px-4 md:px-6 xl:px-8 py-20 2xl:py-32 w-full">
          <div className="max-w-3xl">
            {/* Main Heading - White Text, Left Aligned */}
            <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl leading-tight mb-6 md:mb-8">
              Youth Innovation & Entrepreneurship Empowerment
            </h1>
            
            {/* Subheading - Light Gray Text */}
            <p className="text-gray-300 text-sm md:text-lg 2xl:text-xl mb-8 md:mb-12 leading-relaxed max-w-2xl">
              Empowering African youth through ICT development, innovation, and entrepreneurship education
            </p>

            {/* Buttons */}
            <div className="">
              <ExpandButton
            href="/programs"
            text="Explore Solutions"
            size="md"
            width={210}
          />
             
            </div>
          </div>
        </div>

        {/* Bottom Banner - Blue Background */}
        <div className="absolute bottom-0 left-0 right-0 shadow-lg bg-linear-to-b from-teal-900 via-teal-800 to-teal-900 py-3  z-20">
          <div className="max-w-[1400px] mx-auto px-2 sm:px-4 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white text-sm 2xl:text-base font-medium">
              WEBINAR: Empowering Youth Through Technology & Innovation
            </p>
            <Link href="/programs" className="px-5 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0c4a6e] transition-all duration-300 text-xs 2xl:text-sm  font-semibold whitespace-nowrap">
              Join Now
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}