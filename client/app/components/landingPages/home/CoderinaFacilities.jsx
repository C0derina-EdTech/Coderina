"use client";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Headset,
  Briefcase,
  GraduationCap,
  Rocket,
  ArrowRight,
  Zap,
  Laptop,
  Target,
  Star,
} from "lucide-react";

export default function CoderinaFacilities() {
  const facilities = [
    {
      title: "VR Lab",
      subtitle: "Virtual Reality",
      description: "Immersive learning experiences with next-generation VR headsets and simulators.",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
      icon: <Headset className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      gradient: "from-purple-600 to-blue-600",
    },
    {
      title: "Co-Working",
      subtitle: "Innovation Hub",
      description: "Collaborative workspace designed for tech creators, startups, and innovators.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      icon: <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      gradient: "from-blue-600 to-cyan-600",
    },
    {
      title: "After School",
      subtitle: "Bootcamps",
      description: "Hands-on training for kids and teens to learn coding, robotics, and AI.",
      image: "/kids1.jpg",
      icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      gradient: "from-orange-600 to-red-600",
    },
    {
      title: "SWIES",
      subtitle: "Internship",
      description: "Gain real-world experience with top industry mentors and placement support.",
      image: "/studentwork.jpg",
      icon: <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
      gradient: "from-green-600 to-teal-600",
    },
  ];

  return (
    <>
      <Head>
        <title>World-Class Facilities | Coderina Education & Technology Foundation</title>
        <meta
          name="description"
          content="Explore Coderina's world-class facilities including our VR Lab, Co-Working Innovation Hub, After School Bootcamps, and SWIES Internship Program—where innovation comes alive."
        />
        <meta
          name="keywords"
          content="Coderina facilities, VR lab, co-working space, bootcamps, internship, innovation hub, education technology, STEAM learning, robotics training, Nigeria tech education, games, car racing, car racing stimulator, scrabble, xbox, jenga"
        />
        <meta name="author" content="Coderina Education and Technology Foundation" />
        <meta property="og:title" content="World-Class Facilities | Coderina" />
        <meta
          property="og:description"
          content="Discover Coderina’s high-tech learning environments empowering innovation and creativity."
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80" />
        <meta property="og:type" content="website" />
      </Head>

      <section className="relative bg-black text-white overflow-hidden" style={{ minHeight: "1000px" }}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-[150rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-[1.2fr,2fr] gap-6 lg:gap-10 xl:gap-12 h-full">
            {/* Left Side - Main Content */}
            <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
              <div>
                <div className="inline-block bg-[#e29818] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 animate-pulse">
                  ✨ WORLD-CLASS FACILITIES
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 sm:mb-4 md:mb-5">
                  Where Innovation
                  <span className="block bg-[#e29818] to-yellow-500 bg-clip-text text-transparent">
                    Comes Alive
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl leading-relaxed">
                  Experience cutting-edge technology and immersive learning environments designed to unlock your potential
                  and inspire creativity.
                </p>
              </div>
            </div>

            {/* Right Side - Facility Cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-full">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500 ${
                    index === 0 ? "col-span-2 lg:col-span-1 lg:row-span-2" : ""
                  } ${index === 3 ? "col-span-2 lg:col-span-1" : ""}`}
                  style={{
                    minHeight: index === 0 ? "300px" : "150px",
                  }}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-60 group-hover:opacity-75 transition-opacity`}></div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-5 md:p-6 lg:p-8">
                    <div className="self-start transform group-hover:scale-125 transition-transform duration-500">
                      {facility.icon}
                    </div>

                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-xs sm:text-sm font-semibold text-white/80 uppercase tracking-wider">
                        {facility.subtitle}
                      </div>
                      <h3
                        className={`font-black text-white leading-tight ${
                          index === 0
                            ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                            : "text-xl sm:text-2xl md:text-3xl"
                        }`}
                      >
                        {facility.title}
                      </h3>
                      <p
                        className={`text-white/90 font-medium leading-snug ${
                          index === 0
                            ? "text-sm sm:text-base md:text-lg"
                            : "text-xs sm:text-sm md:text-base"
                        }`}
                      >
                        {facility.description}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 sm:top-5 sm:right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-2xl sm:rounded-3xl transition-all pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>

         
        </div>

      </section>
    </>
  );
}
