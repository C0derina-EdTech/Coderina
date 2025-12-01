"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
export default function LabHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden ">
      <div className="mx-auto max-w-[130rem] px-2 sm:px-6 lg:px-8 xl:mt-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[600px] md:min-h-[700px] lg:min-h-[70vh] py-12 md:py-16 lg:py-20">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 md:space-y-8 lg:space-y-12 z-10">
            {/* Logo and Title */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-4 md:border-[6px] border-white flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
                    C
                  </span>
                </div>
                <h1 className="text-white font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
                  Coderina Lab
                </h1>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                Robotics for Good
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                 Empowering the next generation through hands-on experience in 3D printing, 
                robotics, and cutting-edge automation technology. A non-profit initiative 
                dedicated to making innovation accessible to all.
              </p>
            </div>

            {/* buttons */}
            <div className="pt-8 md:pt-12 lg:pt-16">
              <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl"></h3>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/programs"
                className="bg-[#e29818] text-white px-8 py-4 rounded-lg hover:bg-[#c27f0f] transition flex items-center gap-2 font-semibold"
              >
                Explore Programs <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="#gallery"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition font-semibold"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Right Content - Robot Image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Colorful Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Yellow Triangle */}
              <div
                className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                style={{
                  background:
                    "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)",
                }}
              />

              {/* Orange/Coral Gradient */}
              <div
                className="absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]"
                style={{
                  background:
                    "linear-gradient(45deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%)",
                  clipPath: "polygon(0 100%, 100% 100%, 0 50%)",
                }}
              />

              {/* Green Gradient */}
              <div
                className="absolute top-1/2 right-0 w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] transform -translate-y-1/2"
                style={{
                  background:
                    "linear-gradient(180deg, #7ED957 0%, #4CAF50 100%)",
                  clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
                }}
              />
            </div>

            {/* Robot Image */}
            <div className="relative z-10 w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[70vh]">
              <Image
                src="/robotmac.jpeg"
                alt="AI Robot with Butterflies"
                fill
                className=" object-contain drop-shadow-2xl"
              />

              {/* Decorative Butterflies */}
              <div className="absolute top-10 right-10 md:top-16 md:right-16 animate-pulse">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-400 opacity-70 rounded-full blur-sm"></div>
              </div>
              <div className="absolute top-32 right-0 md:top-40 md:right-4 animate-pulse delay-150">
                <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-400 opacity-70 rounded-full blur-sm"></div>
              </div>
              <div className="absolute bottom-20 right-8 md:bottom-32 md:right-12 animate-pulse delay-300">
                <div className="w-8 h-8 md:w-12 md:h-12 bg-pink-400 opacity-70 rounded-full blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
