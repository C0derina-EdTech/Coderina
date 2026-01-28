import React, { useState } from "react";
import {
  Headset,
  Briefcase,
  GraduationCap,
  Rocket,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export default function CoderinaFacilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const facilities = [
    {
      title: "VR Lab",
      subtitle: "Virtual Reality",
      description:
        "Immersive learning experiences with next-generation VR headsets and simulators.",
      image:
        "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
      icon: Headset,
      gradient: "from-purple-500 via-purple-600 to-indigo-600",
      accentColor: "bg-purple-500",
      // link: "/contact",
      // linkText: "Contact Us",
    },
    {
      title: "Co-Working",
      subtitle: "Innovation Hub",
      description:
        "Collaborative workspace designed for tech creators, startups, and innovators.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      icon: Briefcase,
      gradient: "from-blue-500 via-blue-600 to-cyan-600",
      accentColor: "bg-blue-500",
      link: "/contact",
      linkText: "Contact Us",
    },
    {
      title: "After School",
      subtitle: "Bootcamps",
      description:
        "Hands-on training for kids and teens to learn coding, robotics, and AI.",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      icon: GraduationCap,
      gradient: "from-orange-500 via-orange-600 to-red-600",
      accentColor: "bg-orange-500",
      // link: "/contact",
      // linkText: "Contact Us",
    },
    {
      title: "SIWES",
      subtitle: "Internship Program",
      description:
        "Gain real-world experience with top industry mentors and placement support.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      icon: Rocket,
      gradient: "from-green-500 via-emerald-600 to-teal-600",
      accentColor: "bg-green-500",
      link: "/coderina-siwes-application",
      linkText: "Apply Now",
      badge: "Applications Open",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 min-h-[400px]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
          }}
        ></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-slate-900/50 to-slate-950"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        style={{ animation: "pulse 3s ease-in-out infinite 0.7s" }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-400 mx-auto px-2 sm:px-4 lg:px-8 py-12 sm:py-10 lg:py-16">
        {/* Header Section */}

        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
  <h1 className="text-2xl sm:text-2xl lg:text-3xl xl:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
    Where Innovation
    <span className="block bg-linear-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
      Comes Alive
    </span>
  </h1>

  <p className="text-sm lg:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
    Experience cutting-edge technology and immersive learning
    environments designed to unlock your potential
  </p>
</div>


        {/* Facilities Grid with Curved Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-6">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              const isHovered = hoveredIndex === index;

              const getTransform = () => {
                if (index === 0) return "lg:translate-y-8";
                if (index === 1) return "lg:-translate-y-4";
                if (index === 2) return "lg:translate-y-12";
                if (index === 3) return "lg:-translate-y-6";
                return "";
              };

              return (
                <div
                  key={index}
                  className={`relative group ${getTransform()} transition-all duration-700 ease-out ${
                    isHovered ? "scale-105 z-20" : "scale-100 z-10"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  
                  <div className="relative h-[350px] lg:h-[400px] 2xl:h-[500px] rounded-[2.5rem] overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-white/10 shadow-2xl">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <div className="relative w-full h-full">
                        <Image
                          src={facility.image}
                          alt={facility.title}
                          fill
                          className={`object-cover transition-transform duration-700 ${
                            isHovered ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>

                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${facility.gradient} opacity-70 mix-blend-multiply`}
                      ></div>
                      <div
                        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
                          isHovered ? "opacity-40" : "opacity-60"
                        }`}
                      ></div>
                    </div>

                    <div
                      className={`absolute inset-0 bg-linear-to-t from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-4 lg:p-6 2xl:p-8">
                      {/* Top Section */}
                      <div className="flex items-start justify-between">
                        <div
                          className={`p-3 sm:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 transition-transform duration-500 ${
                            isHovered ? "scale-110 rotate-6" : "scale-100"
                          }`}
                        >
                          <Icon className="w-6 h-6 2xl:w-8 sm:h-8 text-white" />
                        </div>

                        {facility.badge && (
                          <div className="px-3 py-1.5 bg-green-500 text-white text-xs font-bold rounded-full flex items-center gap-1 animate-pulse">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            {facility.badge}
                          </div>
                        )}
                      </div>

                      {/* Bottom Section */}
                      <div className="space-y-3 sm:space-y-4">
                        <div>
                          <div className="text-xs font-bold text-white/70 uppercase tracking-widest mb-2">
                            {facility.subtitle}
                          </div>
                          <h3 className="text-lg sm:text-xl 2xl:text-3xl font-black text-white leading-none mb-3 sm:mb-4">
                            {facility.title}
                          </h3>
                          <p className="text-xs md:text-sm 2xl:text-base text-white/90 leading-relaxed">
                            {facility.description}
                          </p>
                        </div>

                        {/* CTA Button */}
                        {/* CTA Button */}
                        {facility.link && facility.linkText && (
                          <Link
                            href={facility.link}
                            className={`inline-flex items-center gap-2 px-2 2xl:px-6 py-3 bg-white text-black rounded-full font-bold text-xs 2xl:text-sm transition-all duration-300 hover:gap-4 hover:px-5 shadow-lg hover:shadow-2xl ${
                              isHovered
                                ? "translate-y-0 opacity-100"
                                : "translate-y-2 opacity-90"
                            }`}
                          >
                            <span>{facility.linkText}</span>
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 rounded-[2.5rem] border-2 transition-all duration-500 pointer-events-none ${
                        isHovered ? "border-white/40" : "border-white/0"
                      }`}
                      style={
                        isHovered
                          ? { boxShadow: "0 0 30px rgba(255,255,255,0.3)" }
                          : {}
                      }
                    ></div>

                    {/* Corner Accent */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${facility.gradient} rounded-bl-full opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Floating Shadow */}
                  <div
                    className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/40 blur-2xl rounded-full transition-all duration-500 ${
                      isHovered
                        ? "opacity-60 scale-110"
                        : "opacity-30 scale-100"
                    }`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
    </div>
  );
}
