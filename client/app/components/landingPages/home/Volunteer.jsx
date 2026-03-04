"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Volunteer = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    { id: 1, src: "/heresteam/event.jpg", alt: "Students learning with technology in Africa" },
    { id: 2, src: "/heresteam/girlchild.jpg", alt: "Interactive coding classroom with children" },
    { id: 3, src: "/heresteam/girlchild3.jpg", alt: "Community digital literacy program" },
    { id: 4, src: "/heresteam/event.jpg", alt: "Community digital literacy program" },
    { id: 5, src: "/heresteam/girlchild5.jpg", alt: "Community digital literacy program" },
    { id: 6, src: "/heresteam/girlchild4.jpg", alt: "Community digital literacy program" },
     { id: 7, src: "/2026/chessplay2.jpg", alt: "student playing chess game" },
      { id: 8, src: "/2026/lovesmile.jpg", alt: "smile of happiness at the 2026 National competition" },
  ];

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // Auto slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const next = (current + 1) % images.length;

  return (
    <section className="w-full  overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">

        {/* Left - Two Image Auto Carousel */}
        <div
          className="relative w-full h-[240px] sm:h-[300px] md:h-[340px] lg:h-[380px] overflow-hidden"
          data-aos="fade-right"
        >
          <div className="grid grid-cols-2 w-full h-full gap-[2px]">
            
            {/* Current */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                key={images[current].id}
                src={images[current].src}
                alt={images[current].alt}
                fill
                className="object-cover animate-slideIn"
                priority
              />
            </div>

            {/* Next */}
            <div className="relative w-full h-full overflow-hidden">
              <Image
                key={images[next].id}
                src={images[next].src}
                alt={images[next].alt}
                fill
                className="object-cover animate-slideInDelay"
                priority
              />
            </div>

          </div>
        </div>

        {/* Right - Content */}
        <div
          className="w-full bg-black text-white flex items-center"
          data-aos="fade-left"
        >
          <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16 max-w-xl">

            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-white"></div>
              <span className="text-xs 2xl:text-sm tracking-widest uppercase text-white font-semibold">
                INTERNSHIP APPLICATION
              </span>
            </div>

            <h2 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold leading-tight mb-4">
              SIWES - Students Industrial
Work Experience Scheme
            </h2>

            <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed">
              Gain real-world experience with top industry mentors and placement support.
            </p>

             <Link
                href="/coderina-siwes-application"
                className="hidden sm:inline-flex items-center gap-2 bg-white hover:bg-white/50 active:scale-95 text-red-700 text-[10px] font-bold px-5 lg:px-7 py-2.5 uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md focus-visible:outline-2 focus-visible:outline-red-600 focus-visible:outline-offset-2 rounded-md"
              >
                Apply Now
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;
