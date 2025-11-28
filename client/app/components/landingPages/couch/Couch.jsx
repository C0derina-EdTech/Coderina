"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Trophy, Users, Lightbulb, ExternalLink, Award, Star, Target, BookOpen, Clock, Gift } from "lucide-react";
import couchData from "../../lib/couch";
import Image from "next/image";

const Couch = () => {
  const [expandedTeam, setExpandedTeam] = useState(null);
  const [selectedYear, setSelectedYear] = useState(2025);

  const currentData = couchData[selectedYear];
  const availableYears = Object.keys(couchData).filter(year => couchData[year].teams.length > 0);
  const showYearSelector = availableYears.length > 1;

  return (
    <div className="min-h-screen bg-white">
      {/* Year Selector */}
      {showYearSelector && (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
          <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex justify-center gap-2 sm:gap-3">
              {availableYears.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(parseInt(year))}
                  className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all ${
                    selectedYear === parseInt(year)
                      ? 'bg-[#f9a826] text-white'
                      : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  COUCH {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* About COUCH */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[130rem] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What is COUCH?
            </h2>
            <div className="w-16 h-0.5 bg-[#f9a826] mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed text-center">
              The <span className="font-semibold text-[#f9a826]">Coderina University Challenge (COUCH)</span> is an innovative platform designed to inspire creativity, foster entrepreneurial mindsets, and encourage the practical application of academic research among students in tertiary education. By bridging the gap between theoretical knowledge and real-world application, COUCH empowers students to develop solutions that address pressing societal challenges across Nigeria.
            </p>
          </div>

          {/* Key Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f9a826] transition-all">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Target Audience</h3>
              <p className="text-xs sm:text-sm text-gray-600">Students in tertiary institutions across Nigeria</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f9a826] transition-all">
              <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Focus Areas</h3>
              <p className="text-xs sm:text-sm text-gray-600">Innovation, Research & Entrepreneurship</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f9a826] transition-all">
              <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Duration</h3>
              <p className="text-xs sm:text-sm text-gray-600">Multi-phase competition with mentorship</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#f9a826] transition-all">
              <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm md:text-base">Benefits</h3>
              <p className="text-xs sm:text-sm text-gray-600">Prizes, mentorship & industry exposure</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#f9a826] to-[#e89516] rounded-2xl p-6 sm:p-8 text-center text-white">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
              In partnership with the <span className="font-bold">National Universities Commission</span>, COUCH empowers students to transform ideas into impactful solutions that drive sustainable national transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Winners Section */}
      {currentData.teams.filter(team => team.award).length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-[130rem] mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <Trophy className="w-10 h-10 sm:w-12 sm:h-12 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {selectedYear} Champions
              </h2>
              <div className="w-16 h-0.5 bg-[#f9a826] mx-auto mt-4 sm:mt-6"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6 sm:gap-8">
              {currentData.teams
                .filter(team => team.award)
                .map((team) => (
                  <div
                    key={team.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col"
                  >
                    {/* IMAGE + AWARD */}
                    <div className="relative w-full aspect-[4/3] bg-gray-100">
                      <Image
                        src={team.image}
                        alt={team.teamName}
                        fill
                        className="object-cover"
                      />
                      {team.award && (
                        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-[#f9a826] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span className="hidden sm:inline">{team.award}</span>
                        </div>
                      )}
                    </div>

                    {/* DETAILS */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                        {team.teamName}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2 line-clamp-1">
                        {team.university}
                      </p>
                      <span className="inline-block bg-gray-50 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium mb-3 w-fit">
                        {team.category}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3 flex-1 mb-3">
                        {team.description}
                      </p>

                      {/* LINK TO PROJECT */}
                      {team.projectLink && (
                        <a
                          href={team.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#f9a826] font-semibold hover:text-[#e89516] transition-colors text-xs sm:text-sm"
                        >
                          View Project <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* All Teams */}
      {currentData.teams.length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[130rem] mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Participating Teams
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4">
                {currentData.teams.length} innovative teams showcasing cutting-edge solutions
              </p>
              <div className="w-16 h-0.5 bg-[#f9a826] mx-auto mt-4 sm:mt-6"></div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-6">
              {currentData.teams.map((team) => (
                <div key={team.id} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                  <div className="relative aspect-[16/9] bg-gray-100">
                    <Image 
                      src={team.image} 
                      alt={team.teamName}
                      fill
                      className=" object-cover"
                    />
                    {team.award && (
                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-[#f9a826] text-white px-2 sm:px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="hidden sm:inline">{team.award}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1">{team.teamName}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{team.university}</p>
                    <div className="inline-block bg-white border border-gray-200 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium mb-3 sm:mb-4">
                      {team.category}
                    </div>
                    
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4">
                      {expandedTeam === team.id 
                        ? team.description 
                        : `${team.description.substring(0, 150)}...`}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <button
                        onClick={() => setExpandedTeam(expandedTeam === team.id ? null : team.id)}
                        className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#f9a826] transition-colors text-xs sm:text-sm"
                      >
                        {expandedTeam === team.id ? (
                          <>Show Less <ChevronUp className="w-3 h-3 sm:w-4 sm:h-4" /></>
                        ) : (
                          <>Read More <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" /></>
                        )}
                      </button>
                      
                      <a
                        href={team.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-[#f9a826] text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-medium hover:bg-[#e89516] transition-all text-xs sm:text-sm"
                      >
                        View Project <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Speakers */}
      {currentData.speakers.length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-[130rem] mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <Lightbulb className="w-10 h-10 sm:w-12 sm:h-12 text-[#f9a826] mx-auto mb-3 sm:mb-4" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Distinguished Speakers
              </h2>
              <div className="w-16 h-0.5 bg-[#f9a826] mx-auto mt-4 sm:mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {currentData.speakers.map((speaker, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1">{speaker.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 mb-3">{speaker.title}</p>
                    {speaker.topic && (
                      <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-[#f9a826]">
                        <p className="text-xs text-gray-500 font-semibold mb-1">TOPIC</p>
                        <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">{speaker.topic}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mentors */}
      {currentData.mentors.length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-[130rem] mx-auto">
            <div className="text-center mb-10 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Our Mentors
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4">
                Industry experts guiding the next generation
              </p>
              <div className="w-16 h-0.5 bg-[#f9a826] mx-auto mt-4 sm:mt-6"></div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {currentData.mentors.map((mentor, index) => (
                <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
                  <div className="relative aspect-[3/4] bg-gray-100">
                    <img 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-center">
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900">{mentor.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery - Scattered Masonry Layout */}
      {currentData.gallery.length > 0 && (
        <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-[130rem] mx-auto">
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
                    <div className={`relative ${
                      index % 7 === 0 ? 'aspect-[3/4]' : 
                      index % 5 === 0 ? 'aspect-[4/5]' : 
                      index % 3 === 0 ? 'aspect-square' : 
                      'aspect-[4/3]'
                    } bg-gray-100`}>
                      <Image
                        src={item.img} 
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-2 sm:p-3 bg-white">
                      <p className="text-xs sm:text-sm text-gray-600">{item.title}</p>
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