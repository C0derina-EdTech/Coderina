"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function ProgramsProjectsInitiatives({ isLargeScreen }) {
  const programs = [
    {
      id: 1,
      title: "FIRST LEGO League",
      category: "Robotics Program",
      description: "Young innovators designing, building, and programming LEGO robots for competitive challenges",
      image: "/look.jpg",
      link: "/programs/first-lego-league",
      featured: true,
    },
    {
      id: 2,
      title: "FIRST Robotics Competition",
      category: "Advanced Robotics",
      description: "High school teams competing in the ultimate robotics championship experience",
      image: "/pic3.jpg",
      link: "/first-robotics-competition",
      featured: true,
    },
    {
      id: 3,
      title: "FIRST Tech Challenge",
      category: "Tech Innovation",
      description: "Students designing and building robots to compete in alliance-based competitions",
      image: "/firsttech.png",
      link: "/first-tech-challenge",
      featured: false,
    },
    {
      id: 4,
      title: "Checkmate",
      category: "Chess Education",
      description: "Strategic thinking through chess - building analytical minds one move at a time",
      image: "/checkmate.jpg",
      link: "/checkmate",
      featured: false,
    },
    {
      id: 5,
      title: "e-STEAM",
      category: "Digital Training",
      description: "Online digital training programs empowering youth with 21st-century skills",
      image: "/sociallogo.png",
      link: "https://www.esteamcoderina.org",
      featured: false,
    },
    {
      id: 6,
      title: "Coderina University Challenge (COUCH)",
      category: "University Challenge",
      description: "University students building innovative STEAM projects to solve real-world problems",
      image: "/couch1.png",
      link: "/couch",
      featured: false,
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Africa Code Week",
      description: "Pan-African initiative to equip youth with digital skills",
      image: "/images/africa-code-week.jpg",
      link: "/projects/africa-code-week",
    },
    {
      id: 2,
      title: "Google CS-First",
      description: "Computer science curriculum making coding accessible to all students",
      image: "/images/google-cs-first.jpg",
      link: "/projects/google-cs-first",
    },
    {
      id: 3,
      title: "Coderina Project Fair",
      description: "Annual showcase of innovative student STEAM projects",
      image: "/images/project-fair.jpg",
      link: "/projects/coderina-project-fair",
    },
    {
      id: 4,
      title: "Information and Resource Center",
      description: "Research hub for STEAM education and innovation",
      image: "/images/resource-center.jpg",
      link: "/projects/resource-center",
    },
  ];

  const initiatives = [
    {
      id: 1,
      title: "Coderina University Challenge (COUCH)",
      description: "University students building innovative STEAM projects to solve real-world problems",
      image: "/images/couch.jpg",
      link: "/initiatives/university-challenge",
    },
    {
      id: 2,
      title: "STEAM Teachers Training",
      description: "Equipping educators with cutting-edge tools and methodologies",
      image: "/images/teacher-training.jpg",
      link: "/initiatives/teacher-training",
    },
    {
      id: 3,
      title: "CPPD for Teachers",
      description: "Continuous professional development programs for educators",
      image: "/images/cppd.jpg",
      link: "/initiatives/cppd",
    },
    {
      id: 4,
      title: "Job Readiness Program",
      description: "Preparing young people for careers in technology and innovation",
      image: "/images/job-readiness.jpg",
      link: "/initiatives/job-readiness",
    },
    {
      id: 5,
      title: "Zero - Full Stack",
      description: "Comprehensive full-stack development training program",
      image: "/images/zero-fullstack.jpg",
      link: "/initiatives/zero-fullstack",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="max-w-520 mx-auto px-2 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16 xl:mb-20">
          <h2 className={`text-[#133c55] text-3xl sm:text-4xl font-bold mb-4 md:mb-6 ${isLargeScreen ? "text-7xl" : "md:text-5xl"}`}>
            Our Programs, Projects and Initiatives
          </h2>
          <p className={`text-gray-600 text-sm sm:text-base max-w-4xl mx-auto leading-relaxed ${isLargeScreen ? "text-2xl" : "md:text-lg"}`}>
            Transforming lives across Africa through innovative STEM education, competitive robotics, and comprehensive digital literacy programs
          </p>
        </div>

        {/* Featured Programs */}
        <div className="mb-16 md:mb-20 lg:mb-24 xl:mb-28">
          <div className="flex items-center justify-between mb-6 md:mb-8 lg:mb-10">
            <h3 className="text-[#133c55] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
             
            </h3>
            <Link 
              href="/programs" 
              className={`text-[#133c55] hover:text-[#f9a826] transition-colors flex items-center gap-2 text-sm font-semibold ${isLargeScreen ? "text-lg" : "md:text-base"}`}
            >
              View All
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </Link>
          </div>

          {/* Featured Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-10">
            {programs.filter(p => p.featured).map((program) => (
              <Link 
                key={program.id} 
                href={program.link}
                className="group relative bg-[#133c55] rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#133c55] via-[#133c55]/50 to-transparent z-10"></div>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 z-20">
                  <span className="inline-block bg-[#f9a826] text-[#133c55] text-xs md:text-sm lg:text-base font-bold px-4 py-2 rounded-full mb-3 md:mb-4">
                    {program.category}
                  </span>
                  <h4 className={`text-white text-2xl font-bold mb-3 md:mb-4 ${isLargeScreen ? "text-5xl" : "sm:text-3xl"}`}>
                    {program.title}
                  </h4>
                  <p className={`text-white/90 text-sm md:text-base mb-4 md:mb-6 leading-relaxed ${isLargeScreen ? "text-xl" : "md:text-base"}`}>
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#f9a826] group-hover:gap-4 transition-all">
                    <span className="text-sm md:text-base lg:text-lg font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Other Programs Grid */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${isLargeScreen ? "gap-8" : "md:gap-4"}`}>
            {programs.filter(p => !p.featured).map((program) => (
              <Link 
                key={program.id} 
                href={program.link}
                className="group bg-[#133c55] rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.03]"
              >
                <div className={`relative h-48overflow-hidden ${isLargeScreen ? "h-64" : "md:h-56"}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#133c55] to-transparent z-10"></div>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-4 md:p-5 lg:p-6">
                  <span className="inline-block bg-[#f9a826] text-[#133c55] text-xs md:text-sm font-bold px-3 py-1 rounded-full mb-2 md:mb-3">
                    {program.category}
                  </span>
                  <h4 className={`text-white text-lg font-bold mb-2 md:mb-3 ${isLargeScreen ? "text-2xl" : "sm:text-lg"}`}>
                    {program.title}
                  </h4>
                  <p className={`text-white text-xs leading-relaxed mb-3 md:mb-4 ${isLargeScreen ? "text-base" : "md:text-sm"}`}>
                    {program.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#f9a826] text-sm md:text-base">
                    <span className="font-semibold">Explore</span>
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}