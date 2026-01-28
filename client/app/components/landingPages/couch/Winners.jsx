"use client";
import React, { useState, useEffect } from "react";
import { Trophy, Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";

export default function Winners({
  teams = [],
  selectedYear = "2024",
}) {
  const [expandedCards, setExpandedCards] = useState({});
useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }, []);
  const winners = teams.filter((team) => team.award);

  const toggleDescription = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (winners.length === 0) return null;

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <div 
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          data-aos="fade-down"
          data-aos-duration="800"
        >
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-teal-800 mx-auto mb-2 sm:mb-3" />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            {selectedYear} Champions
          </h2>
          <div className="w-12 sm:w-16 h-0.5 bg-teal-800 mx-auto mt-3 sm:mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-3 sm:gap-4 2xl:gap-5">
          {winners.map((team, index) => (
            <div
              key={team.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="600"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              {/* IMAGE + AWARD */}
              <div className="relative w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={team.image || "/logo.png"}
                  alt={team.teamName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {team.award && (
                  <div className="absolute top-2 right-2 bg-teal-800 text-white px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-md">
                    <Award className="w-3 h-3" />
                    <span className="hidden sm:inline">{team.award}</span>
                  </div>
                )}
              </div>

              {/* DETAILS */}
              <div className="p-3 sm:p-4 flex flex-col flex-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 line-clamp-1">
                  {team.teamName}
                </h3>
                <p className="text-xs text-gray-500 mb-2 line-clamp-1">
                  {team.university}
                </p>

                <span className="inline-block bg-teal-50 text-teal-800 px-2 sm:px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 w-fit">
                  {team.category}
                </span>

                <p className={`text-xs text-gray-600 leading-relaxed flex-1 mb-2 ${expandedCards[team.id] ? '' : 'line-clamp-2'}`}>
                  {team.description}
                </p>

                {/* See More Toggle */}
                {team.description && team.description.length > 100 && (
                  <button
                    onClick={() => toggleDescription(team.id)}
                    className="text-xs text-teal-800 font-medium hover:text-teal-900 transition-colors flex items-center gap-1 mb-2"
                  >
                    {expandedCards[team.id] ? (
                      <>
                        Show Less <ChevronUp className="w-3 h-3" />
                      </>
                    ) : (
                      <>
                        See More <ChevronDown className="w-3 h-3" />
                      </>
                    )}
                  </button>
                )}

                {/* PROJECT LINK */}
                {team.projectLink && (
                  <Link
                    href={team.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-teal-800 font-semibold hover:text-teal-900 transition-colors text-xs group/link"
                  >
                    View Project <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}