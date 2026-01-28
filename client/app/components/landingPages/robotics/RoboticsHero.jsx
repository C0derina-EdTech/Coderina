"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function RoboticsHero() {
  return (
    <div className="bg-white">
      <section className="font-Montserrat bg-white py-8 md:py-10 2xl:py-14 min-h-[350px]">
        <div className="max-w-400 mx-auto px-2 sm:px-4 lg:px-6 2xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Built to assist. Designed to inspire.
                <br />
                Welcome to Coderina Robotics.
              </h1>
              <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md leading-relaxed font-poppins">
                Our intelligent robotics systems are built to transform learning
                and real-world problem solving, operating wherever creativity is
                required, enabling safer environments, and unlocking hands-on
                exploration without limits.
              </p>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2">
                Discover Our Robotics →
              </button>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="lg:-mb-72 relative w-full h-56 lg:h-98 xl:h-120 max-w-lg mx-auto lg:max-w-xl overflow-hidden rounded-xl">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1 ">
              <div className="relative w-full h-56 lg:h-98 xl:h-120 max-w-lg mx-auto lg:max-w-2xl overflow-hidden rounded-xl">
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
            <div className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-white leading-tight mb-6">
                The Future of Warehouse Automation
              </h2>
              <p className="text-sm sm:text-base text-teal-100 mb-8 max-w-md leading-relaxed">
                Use Stretch to streamline case handling and trailer unloading
                operations. Easy to deploy and reconfigure, Stretch keeps your
                operations moving.
              </p>
              <Link href="/" className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600">
                Learn About Stretch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
