"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Robotics() {
  return (
    <div className="bg-white">
      <section className="font-Montserrat bg-white py-8 md:py-10 2xl:py-14 min-h-[350px]">
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 md:order-1">
              <h1 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-gray-900 leading-tight mb-6">
                Built to assist. Designed to inspire.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md leading-relaxed font-poppins">
                Our intelligent robotics systems are built to transform learning
                and real-world problem solving, operating wherever creativity is
                required, enabling safer environments, and unlocking hands-on
                exploration without limits.
              </p>
              <Link
                href="/"
                className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600"
              >
                Discover Our Prints →
              </Link>
            </div>

            {/* Right Image */}
            <div className="order-1 md:order-2">
              <div className="md:-mb-24 2xl:-mb-40 relative aspect-5/3 max-w-md mx-auto 2xl:max-w-xl overflow-hidden rounded-xl">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/ddvid.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Coderina 3D printer operating during live production"
                  title="Coderina Printer in Action"
                  disablePictureInPicture
                  controls={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warehouse Automation Section */}
      <section className="bg-linear-to-b from-teal-900 via-teal-800 to-teal-900 py-12 sm:py-16">
        <div className="max-w-400 mx-auto px-2 sm:px-4 lg:px-6 2xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="order-2 md:order-1 ">
              <div className="relative aspect-5/3 max-w-md mx-auto lg:max-w-xl overflow-hidden rounded-xl">
                <Image
                  src="/microscope6.jpg"
                  alt="Coderina robotics lab showcasing hands-on learning and advanced technology"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-white leading-tight mb-6">
                The Future of Additive Manufacturing
              </h2>
              <p className="text-sm sm:text-base text-teal-100 mb-8 max-w-md leading-relaxed">
                Explore how advanced 3D printing transforms design, prototyping,
                and production workflows. Flexible, scalable, and precise,
                additive manufacturing accelerates innovation.
              </p>
              <Link
                href="/"
                className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600"
              >
                Learn About Additive Manufacturing →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
