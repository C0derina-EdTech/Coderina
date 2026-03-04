"use client";

import { useState } from "react";
import { Headset, Briefcase, GraduationCap, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const facilities = [
  {
    title: "VR Lab",
    subtitle: "Virtual Reality",
    description: "Immersive learning with next-gen VR headsets and simulators.",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&q=80",
    icon: Headset,
  },
  {
    title: "Co-Working",
    subtitle: "Innovation Hub",
    description: "Collaborative workspace for tech creators, startups, and innovators.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    icon: Briefcase,
    link: "/contact",
    linkText: "Contact Us",
  },
  {
    title: "After School",
    subtitle: "Bootcamps",
    description: "Hands-on coding, robotics, and AI training for kids and teens.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    icon: GraduationCap,
  },
  {
    title: "SIWES",
    subtitle: "Internship Program",
    description: "Real-world experience with top industry mentors and placement support.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    icon: Rocket,
    link: "/coderina-siwes-application",
    linkText: "Apply Now",
    badge: "Applications Open",
  },
];

export default function Facilities() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="w-full bg-[#0f0f0f] py-12 md:py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
            Our Facilities
          </span>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white mt-1 tracking-tight">
            Where innovation comes alive
          </h2>
          <p className="text-xs text-white/40 mt-1.5 max-w-md leading-relaxed">
            Cutting-edge environments designed to unlock creativity, collaboration, and real-world skills.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {facilities.map((f, i) => {
            const Icon = f.icon;
            const isHovered = hovered === i;

            return (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/8 cursor-pointer"
                style={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isHovered ? "0 16px 48px rgba(0,0,0,0.5)" : "0 2px 8px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/2] md:aspect-[4/3] overflow-hidden">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    style={{
                      transition: "transform 0.5s ease",
                      transform: isHovered ? "scale(1.06)" : "scale(1)",
                    }}
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)",
                      transition: "opacity 0.3s ease",
                      opacity: isHovered ? 0.8 : 1,
                    }}
                  />

                  {/* Badge */}
                  {f.badge && (
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-green-500 text-white text-[9px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                      {f.badge}
                    </div>
                  )}

                  {/* Icon */}
                  <div className="absolute bottom-3 left-3 w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="p-4">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">
                    {f.subtitle}
                  </p>
                  <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {f.title}
                  </h3>
                  <p className="text-[11px] text-white/50 leading-relaxed mb-3">
                    {f.description}
                  </p>

                  {f.link && f.linkText && (
                    <Link
                      href={f.link}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-red-500 hover:text-red-400 transition-colors"
                    >
                      {f.linkText}
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>

                {/* Bottom red accent line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 bg-red-700"
                  style={{
                    transition: "width 0.4s ease",
                    width: isHovered ? "100%" : "0%",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}