"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import activeImg from "../../public/activityImg.png";

const Activities = () => {
  const textContent1 = [
    "Coderina Project Fair",
    "Coderina® University Challenge (COUCH)",
  ];
  const textContent2 = [
    "Africa Code Week",
    "Google CS-First",
    "Information and Resource Center for Research",
  ];
  const textContent3 = [
    "CPPD for Teachers",
    "Job Readiness Program",
    "Zero - Full Stack",
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 pt-16   space-y-10">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
        Our Programs, Projects and Initiatives
      </h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Image Card */}
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src={activeImg}
              alt="FIRST LEGO League Programs"
              className="w-full h-auto object-cover"
            />
            <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg md:text-xl bg-black/60 px-3 py-1 rounded">
              FIRST LEGO League Programs
            </h3>
          </div>

          {/* Other Programs */}
          <div className="bg-[#FDEFD9] p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              Other Programs
            </h4>
            <ul className="space-y-2 text-gray-700">
              {textContent1.map((item) => (
                <li key={item} className="text-base md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
          {/* Projects */}
          <div className="bg-[#FDEFD9] p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              Projects
            </h4>
            <ul className="space-y-2 text-gray-700">
              {textContent2.map((item) => (
                <li key={item} className="text-base md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Initiatives */}
          <div className="bg-[#FDEFD9] p-5 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-3 text-gray-900">
              Initiatives
            </h4>
            <ul className="space-y-2 text-gray-700">
              {textContent3.map((item) => (
                <li key={item} className="text-base md:text-lg">
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/what"
              className="mt-4 inline-flex items-center text-primary font-semibold hover:underline"
            >
              See other initiatives <FaArrowRightLong className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
