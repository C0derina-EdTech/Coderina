"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/kids1.jpg",
    "/coderinagirls.png", 
    "/kidschess.jpg",
    "/teach1.png",
    "/robotkids.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative bg-gradient-to-br from-[#f5f3ef] via-[#fef9f0] to-[#f9f6f1] overflow-hidden pt-20 ">
      <div className="max-w-[130rem] mx-auto px-2 sm:px-6 lg:px-8 xl:px-12 2xl:mt-6">
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-10">
              {/* Main Heading */}
              <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
                  <span className="block text-black">Youth.</span>
                  <span className="block text-black">Innovation.</span>
                  <span className="block text-black">Entrepreneurships.</span>
                  <span className="block text-[#133c55] font-extrabold">Empowerment.</span>
                </h1>
              </div>

              {/* CTA Button */}
              <div className="pt-4 md:pt-6">
                <Link 
                  href="/about"
                  className="inline-block px-8 md:px-10 lg:px-12 xl:px-14 py-3 md:py-4 lg:py-5 bg-black hover:bg-[#133c55] text-white text-sm md:text-base lg:text-lg xl:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  Get Started →
                </Link>
              </div>
            </div>

            {/* Right Side - Image Carousel */}
            <div className="relative">
              {/* Main Image Carousel */}
              <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[520px] rounded-3xl overflow-hidden shadow-sm">
                {images.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Coderina students and activities ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? "bg-white w-6 md:w-8" 
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - About Text */}
          <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left - Image Grid */}
            <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4">
              {[
                "/girlrobot.png",
                "/media2.jpg",
                "/hero6.jpg",
                "/robotboys.png",
              ].map((img, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={img}
                    alt={`Coderina student activity ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right - About Text */}
            <div className="space-y-6 md:space-y-8">
              <p className="text-gray-800 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-medium">
                Coderina is an independent Non-profit organisation Ed-Tech that works to promote ICT development, Youth Innovation and Entrepreneurship in Africa
              </p>
              <Link 
                href="/about"
                className="inline-block px-6 md:px-8 lg:px-10 py-3 md:py-4 bg-[#133c55] hover:bg-black text-white text-sm md:text-base lg:text-lg font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-[#133c55]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-[#f9a826]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Decorative Dots Pattern */}
      <div className="absolute top-20 left-20 hidden lg:block opacity-20">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#133c55] rounded-full"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 right-20 hidden lg:block opacity-20">
        <div className="grid grid-cols-3 gap-3">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-[#133c55] rounded-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
}