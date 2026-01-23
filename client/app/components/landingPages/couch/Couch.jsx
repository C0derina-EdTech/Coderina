"use client";
import React, { useState } from "react";
import {
 
  Lightbulb,
 
} from "lucide-react";
import couchData from "../../lib/couch";
import Image from "next/image";
import Winners from "./Winners";
import AllTeams from "./AllTeams";
import Speakers from "./Speakers";
import Mentors from "./Mentors";
const Couch = () => {
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2025);

  const currentData = couchData[selectedYear];
  const availableYears = Object.keys(couchData).filter(
    (year) => couchData[year].teams.length > 0
  );
  const showYearSelector = availableYears.length > 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Year Selector */}
      {showYearSelector && (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex justify-center gap-2 sm:gap-3">
              {availableYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(parseInt(year))}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all ${
                    selectedYear === parseInt(year)
                      ? "bg-[#f9a826] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  COUCH {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

  {/* winners */}
      <Winners
      teams={currentData.teams}
     selectedYear={selectedYear}
    />

  {/* participated teams */}

<AllTeams
  teams={currentData.teams}
  expandedTeam={expandedTeam}
  setExpandedTeam={setExpandedTeam}
/>


    {/* speakers */}

    <Speakers
  speakers={currentData.speakers}
  heading="Distinguished Speakers"
/>

     <Mentors
  mentors={currentData.mentors}
  heading="Expert Mentors"
  description="Guiding teams with real-world experience"
/>

      {/* Gallery - Scattered Masonry Layout */}
      {currentData.gallery.length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-400 mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Event Highlights
              </h2>
              <div className="w-16 h-0.5 bg-[#f9a826] mx-auto mt-4 sm:mt-6"></div>
            </div>

            {/* Masonry-style grid */}
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
              {currentData.gallery.map((item, index) => (
                <div
                  key={index}
                  className="break-inside-avoid mb-3 sm:mb-4 group"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all bg-white border border-gray-100">
                    <div
                      className={`relative ${
                        index % 7 === 0
                          ? "aspect-[3/4]"
                          : index % 5 === 0
                            ? "aspect-[4/5]"
                            : index % 3 === 0
                              ? "aspect-square"
                              : "aspect-[4/3]"
                      } bg-gray-100`}
                    >
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 bg-white">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Couch;
