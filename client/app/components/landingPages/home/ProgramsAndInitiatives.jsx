"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProgramsProjectsInitiatives() {
  return (
    <section className="bg-black text-white">
      {/* Main Content */}
      <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-10">
        {/* Hero Title */}
        <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-10 md:mb-12 max-w-5xl">
          Empowering Africa through STEAM education, innovation, and technology
        </h1>

        {/* Two Column Layout */}
        <div className="font-Roboto grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column */}
          <article>
            <p className="text-sm md:text-base mb-8">
              Coderina EdTech Foundation is{" "}
              <span className="font-semibold">
                building future-ready innovators through inclusive STEAM programs.
              </span>
            </p>

            <p className="text-xs md:text-sm 2xl:text-base text-gray-300 mb-12">
              Our programs and initiatives reach students, educators, and institutions,
              fostering creativity, problem-solving, and real-world impact across communities.
            </p>

            {/* Partner / Program Visuals */}
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    src="/checkmate.jpg"
                    alt="Coderina Checkmate Chess Program"
                    fill
                    className="object-cover transition-transform duration-700 rounded-full"
                  />
                </div>
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    src="/sociallogo.png"
                    alt="Coderina STEAM Innovation Programs"
                    fill
                    className="object-cover transition-transform duration-700 rounded-full"
                  />
                </div>

                 <div className="relative h-12 w-12 rounded-full">
                  <Image
                    src="/firsttech.png"
                    alt="Coderina STEAM Innovation Programs"
                    fill
                    className="object-cover transition-transform duration-700 rounded-full"
                  />
                </div>
                <div className="relative h-12 w-12 rounded-full">
                  <Image
                    src="/couch1.png"
                    alt="Coderina STEAM Innovation Programs"
                    fill
                    className="object-cover transition-transform duration-700 rounded-full"
                  />
                </div>
              </div>

            </div>

            <p className="text-sm font-semibold mt-4">
              NATIONAL & PAN-AFRICAN INITIATIVES
            </p>
          </article>

          {/* Right Column – Programs & Initiatives */}
          <div className="space-y-8 ">
            {/* Program 1 */}
            <article>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 group"
              >
                <h2 className="text-sm md:text-base font-bold mb-4">
                  Robotics & Innovation Programs
                </h2>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-gray-300 text-xs md:text-sm 2xl:text-base">
                Hands-on robotics competitions and innovation challenges that inspire
                critical thinking, teamwork, and engineering excellence.
              </p>
            </article>

            {/* Program 2 */}
            <article>
              <Link
                href="/couch"
                className="inline-flex items-center gap-2 group"
              >
                <h2 className="text-sm md:text-base font-bold mb-4">
                  National Competitions & Challenges
                </h2>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-gray-300 text-xs md:text- 2xl:text-base">
                Flagship championships that bring students together to showcase skills,
                creativity, and innovation on a national stage.
              </p>
            </article>

            {/* Program 3 */}
            <article>
              <Link
                href="https://www.esteamcoderina.org"
                className="inline-flex items-center gap-2 group"
              >
                <h2 className="text-sm md:text-base font-bold mb-4">
                  Digital Skills & STEAM Education
                </h2>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-gray-300 text-xs md:text-sm 2xl:text-base">
                Structured learning pathways that equip learners with essential digital,
                coding, and STEAM skills for the future workforce.
              </p>
            </article>

            {/* Program 4 */}
            <article>
              <Link
                href="/programs"
                className="inline-flex items-center gap-2 group"
              >
                <h2 className="text-sm md:text-base font-bold mb-4">
                  Teacher Training & Community Impact
                </h2>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
              <p className="text-gray-300 text-xs md:text-sm 2xl:text-base">
                Capacity-building initiatives empowering educators and communities to
                deliver sustainable, high-quality STEAM education.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
