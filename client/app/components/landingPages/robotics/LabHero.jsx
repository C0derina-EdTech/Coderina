"use client";
import React from "react";
import Link from "next/link";
import ExpandButton from "../../../utils/ExpandButton";
export default function LabHero() {
  return (
    <div>
    <section className="bg-black text-white relative overflow-hidden">
      <div className="max-w-400 mx-auto px-2 sm:px-4 lg:px-6 xl:px-8 py-16 sm:py-20 lg:py-32 min-h-[500px] sm:min-h-[600px] flex items-center">
        <div className="max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold leading-tight mb-6 sm:mb-8 lg:mb-10">
            Redefining how you think about
            <br className="hidden sm:block" /> what robots can do.
          </h1>
          <p className="font-Poppins text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-md leading-relaxed">
            Discover practical robotics solutions designed to tackle
            today&apos;s and tomorrow&apos;s toughest automation demands with confidence.
          </p>
          
          <ExpandButton
            href="/solutions"
            text="Explore Solutions"
            size="md"
            width={210}
          />
        </div>
      </div>
    </section>

     {/* Webinar Banner */}
      <section className="shadow-lg bg-linear-to-b from-teal-900 via-teal-800 to-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-2 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm lg:text-base text-center sm:text-left">
              WEBINAR: Beyond the Routine with Spot & Orbit 5.1
            </p>
            <Link href="/" className="border-2 border-white hover:bg-white hover:text-blue-900 px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap font-bold">
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
