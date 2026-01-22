"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProgramsHero() {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section with Video Background */}
        <section className="relative h-112 overflow-hidden">
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/national-competition.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative max-w-400 mx-auto px-2 sm:px-4 md:px-8 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
                Learning Powered by Innovation
              </h2>

              <p className="text-sm md:text-base text-gray-200 mb-8">
                Coderina programs combine STEAM education, technology, and
                creativity to help learners build skills that matter — from
                coding and robotics to AI, design thinking, and digital
                leadership.
              </p>

              {/* <Link href="/contact">
                <button className="bg-[#3DCD58] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#35b84d] inline-flex text-sm items-center transition-all">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Explore Our Programs
                </button>
              </Link> */}
            </div>
          </div>
        </section>

        {/* Programs Philosophy Section */}
        {/* <section className="py-12 md:py-16 2xl:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="relative aspect-5/3 flex-1">
                <Image
                  src="/kids1.jpg"
                  alt="Students learning coding and robotics at Coderina"
                  fill
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Programs Designed for Tomorrow’s World
                </h3>

                <p className="text-sm md:text-base text-gray-700 mb-6">
                  Our programs are carefully structured to bridge education and
                  industry. Learners gain hands-on experience through practical
                  projects, collaborative challenges, and mentorship-driven
                  instruction that prepares them for global opportunities.
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
