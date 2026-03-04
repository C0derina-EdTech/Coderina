"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import sap from "../../../../public/Sap.png";
import first from "../../../../public/first.png";
import cater from "../../../../public/Caterpillar.png";
import dow from "../../../../public/Dow.png";
import fme from "../../../../public/FME.png";
import lego from "../../../../public/Lego.png";
import legoi from "../../../../public/lego-icon.png";
import ford from "../../../../public/Ford.png";
import nln from "../../../../public/NLN.png";
import nitda from "../../../../public/NITDA.png";
import uol from "../../../../public/UOL.png";

const logos = [
  { src: sap,   alt: "SAP",                              link: "https://www.sap.com" },
  { src: first, alt: "FIRST Robotics",                   link: "https://www.firstinspires.org" },
  { src: cater, alt: "Caterpillar Foundation",           link: "https://www.caterpillar.com" },
  { src: dow,   alt: "Dow Chemical Company",             link: "https://www.dow.com" },
  { src: fme,   alt: "Federal Ministry of Education",    link: "#" },
  { src: lego,  alt: "LEGO Education",                   link: "https://education.lego.com" },
  { src: legoi, alt: "LEGO Foundation",                  link: "https://www.legofoundation.com" },
  { src: ford,  alt: "Ford Motor Company",               link: "https://www.ford.com" },
  { src: nln,   alt: "National Library of Nigeria",      link: "#" },
  { src: nitda, alt: "NITDA",                            link: "https://nitda.gov.ng" },
  { src: uol,   alt: "University of Lagos",              link: "https://unilag.edu.ng" },
];

// duplicate for seamless loop
const track = [...logos, ...logos];

export default function Partners() {
  return (
    <section className="w-full bg-white py-12 md:py-14 border-y border-gray-100">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
              Partners & Supporters
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 mt-1 tracking-tight">
              Trusted by leading organisations
            </h2>
            
          </div>

          {/* count pill */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="flex -space-x-1">
              {logos.slice(0, 4).map((l, i) => (
                <div
                  key={i}
                  className="relative w-6 h-6 rounded-full bg-gray-100 border-2 border-white overflow-hidden"
                >
                  <Image src={l.src} alt={l.alt} fill className="object-contain p-0.5" />
                </div>
              ))}
            </div>
            <span className="text-[11px] font-semibold text-gray-500">
              {logos.length} partners worldwide
            </span>
          </div>
        </div>

        {/* ── Marquee strip ── */}
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to right, white, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
               style={{ background: "linear-gradient(to left, white, transparent)" }} />

          <div
            className="flex gap-6 w-max"
            style={{ animation: "marquee 32s linear infinite" }}
          >
            {track.map((logo, i) => (
              <Link
                key={i}
                href={logo.link}
                target={logo.link !== "#" ? "_blank" : undefined}
                rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                aria-label={`Visit ${logo.alt}`}
                className="group flex items-center justify-center w-28 h-16 rounded-xl border border-gray-100 bg-gray-50 hover:border-gray-300 hover:bg-white hover:shadow-sm transition-all duration-200 flex-shrink-0 px-4"
              >
                <div className="relative w-full h-8">
                  <Image
                    src={logo.src}
                    alt={`${logo.alt} logo`}
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Static grid fallback / second row on large screens ── */}
        <div className="hidden lg:grid grid-cols-11 gap-3 mt-4 items-center">
          {logos.map((logo, i) => (
            <Link
              key={i}
              href={logo.link}
              target={logo.link !== "#" ? "_blank" : undefined}
              rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
              aria-label={`Visit ${logo.alt}`}
              className="group flex flex-col items-center gap-1.5"
            >
              <div className="relative w-full h-10">
                <Image
                  src={logo.src}
                  alt={`${logo.alt} logo`}
                  fill
                  className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <span className="text-[9px] text-gray-400 group-hover:text-red-700 text-center leading-tight transition-colors font-medium truncate w-full text-center">
                {logo.alt}
              </span>
            </Link>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}