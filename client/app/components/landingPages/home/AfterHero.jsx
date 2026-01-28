"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AfterHero = () => {
  return (
    <div className="bg-white">
      {/* Hero Intro */}
      <section className="py-12 2xl:py-16">
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Building Africa&apos;s Next Generation of Innovators
          </h1>
          <p className="text-sm sm:text-base 2xl:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Coderina EdTech Foundation delivers inclusive STEAM education programs
            that empower children, youth, and educators with practical technology,
            robotics, and digital innovation skills.
          </p>
        </div>
      </section>

      {/* Orbit Section */}
      <section className="py-12 2xl:py-16">
        <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                National Robotics & STEAM Programs
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                From FIRST LEGO League to national robotics championships,
                Coderina equips learners with hands-on experience in engineering,
                problem-solving, teamwork, and real-world technology applications.
              </p>
              <Link href="/programs">
                <button className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center group">
                  Explore Our Programs
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>

            {/* Right Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/girlrobot.png"
                  alt="Student participating in robotics"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="hidden lg:block relative w-full h-96 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src="/robotkids.png"
                  alt="Young innovator learning robotics"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arm Section */}
      <section className="py-12 2xl:py-16 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Image */}
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/kids1.jpg"
                alt="Hands-on technology training"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
                Education Beyond the Classroom
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                Through teacher training, digital skills development, and community
                initiatives, Coderina extends learning beyond classrooms—building
                capacity for sustainable education and workforce readiness.
              </p>
              <Link href="/initiatives">
                <button className="bg-cyan-100 hover:bg-cyan-200 text-cyan-700 px-6 py-3 rounded-full text-sm font-medium transition-all inline-flex items-center group">
                  View Our Initiatives
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterHero;
