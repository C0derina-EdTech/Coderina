"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Users,
  Star,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AllTeams({
  teams = [],
  expandedTeam,
  setExpandedTeam,
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  if (!teams.length) return null;

  return (
    <div className="py-8 sm:py-12 lg:py-16 px-2 sm:px-4 md:px-6 lg:px-8 bg-linear-to-br from-gray-50 via-white to-teal-50/30">
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <div
          className="text-center mb-8 sm:mb-12"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-linear-to-br from-teal-600 to-teal-800 rounded-2xl mb-4 shadow-lg shadow-teal-200">
            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Participating Teams
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            {teams.length} innovative teams showcasing cutting-edge solutions
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-teal-600 to-teal-800 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-6">
          {teams.map((team, index) => (
            <div
              key={team.id}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-teal-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] bg-linear-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={team.image}
                  alt={team.teamName}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {team.award && (
                  <div className="absolute top-3 right-3 bg-linear-to-br from-teal-600 to-teal-800 text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{team.award}</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-teal-800 transition-colors line-clamp-2">
                    {team.teamName}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {team.university}
                  </p>

                  <div className="inline-block bg-linear-to-r from-teal-50 to-teal-100 border border-teal-200 text-teal-800 px-3 py-1 rounded-xl text-xs font-semibold mb-3">
                    {team.category}
                  </div>

                  <div className="overflow-hidden">
                    <p
                      className={`text-xs text-gray-600 leading-relaxed transition-all duration-500 ${
                        expandedTeam === team.id ? "mb-4" : "mb-3"
                      }`}
                    >
                      {expandedTeam === team.id
                        ? team.description
                        : `${team.description.substring(0, 120)}...`}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-gray-100">
                  <button
                    onClick={() =>
                      setExpandedTeam(
                        expandedTeam === team.id ? null : team.id
                      )
                    }
                    className="flex items-center gap-1 text-gray-700 font-medium hover:text-teal-800 transition-colors text-xs hover:gap-2"
                  >
                    {expandedTeam === team.id ? (
                      <>
                        Show Less{" "}
                        <ChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </>
                    ) : (
                      <>
                        Read More{" "}
                        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </>
                    )}
                  </button>

                  {team.projectLink && (
                    <a
                      href={team.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-linear-to-r from-teal-600 to-teal-800 text-white px-3 sm:px-4 py-1.5 rounded-lg font-medium hover:from-teal-700 hover:to-teal-900 hover:shadow-md transition-all text-xs ml-auto"
                    >
                      View Project <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div
          className="mt-12 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-teal-200 rounded-full px-6 py-3 shadow-sm">
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-linear-to-br from-teal-400 to-teal-600 border-2 border-white"
                ></div>
              ))}
            </div>
            <p className="text-sm text-gray-700 font-medium">
              <span className="text-teal-800 font-bold">{teams.length}+</span>{" "}
              Teams Participated
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}