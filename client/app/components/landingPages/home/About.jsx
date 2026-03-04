"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const programs = [
  {
    title: "Robotics & Innovation Programs",
    desc: "Hands-on competitions and challenges that inspire critical thinking, teamwork, and engineering excellence.",
    href: "/programs",
    tag: "Competitions",
  },
  {
    title: "National Competitions & Challenges",
    desc: "Flagship championships bringing students together to showcase creativity and technical excellence nationwide.",
    href: "/coderina-university-challenge",
    tag: "Championships",
  },
  {
    title: "Digital Skills & STEAM Education",
    desc: "Structured learning pathways equipping learners with future-proof coding and STEAM competencies.",
    href: "https://www.esteamcoderina.org",
    tag: "e-Learning",
  },
  {
    title: "Teacher Training & Community Impact",
    desc: "Capacity-building initiatives empowering educators to deliver sustainable, high-quality STEAM education.",
    href: "/programs",
    tag: "Training",
  },
];

const logos = [
  { src: "/checkmate.jpg",  alt: "Coderina Checkmate Chess Program" },
  { src: "/sociallogo.png", alt: "Coderina STEAM Innovation" },
  { src: "/firsttech.png",  alt: "FIRST Tech Challenge" },
  { src: "/couch1.png",     alt: "Coderina COUCH Program" },
];

const stats = [
  { value: "6+",   label: "Countries Reached" },
  { value: "10K+", label: "Students Impacted" },
  { value: "2010", label: "Est." },
];

export default function About() {
  return (
    <section className="w-full bg-[#0f0f0f]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8 2xl:px-10 py-12 md:py-16">

        {/* ── Top row: label + stat pills ── */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 md:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
            About Coderina
          </span>

          <div className="flex gap-px rounded-xl overflow-hidden border border-white/8 self-start sm:self-auto">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-2.5 bg-white/4 text-center border-r border-white/8 last:border-0">
                <p className="text-xs font-extrabold text-white leading-none">{s.value}</p>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-white/30 mt-0.5 whitespace-nowrap">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-14 items-start">

          {/* Left — brand column */}
          <div className="flex flex-col gap-5">
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white leading-snug tracking-tight max-w-sm">
              Empowering Africa through STEAM education, innovation, and technology
            </h1>

            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              Coderina EdTech Foundation builds future-ready innovators through inclusive STEAM programmes — reaching students, educators, and institutions across Africa.
            </p>

            {/* Programme logo pills */}
            <div>
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/20 mb-3">
                National &amp; Pan-African Initiatives
              </p>
              <div className="flex gap-2">
                {logos.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-white/10 bg-white/5"
                    style={{ marginLeft: i > 0 ? "-6px" : "0" }}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </div>
                ))}
                <div
                  className="w-9 h-9 rounded-full border-2 border-white/10 bg-white/5 flex items-center justify-center text-[9px] font-bold text-white/30"
                  style={{ marginLeft: "-6px" }}
                >
                  +6
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white/60 hover:text-white transition-colors w-fit mt-1 group"
            >
              Our full story
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right — programmes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {programs.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group relative flex flex-col gap-2 rounded-xl bg-white/4 border border-white/8 p-4 hover:bg-white/7 hover:border-white/14 transition-all duration-200"
              >
                {/* Tag */}
                <span className="text-[9px] font-bold uppercase tracking-widest text-red-700/80">
                  {item.tag}
                </span>

                {/* Title + arrow */}
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-xs font-bold text-white leading-snug group-hover:text-white/90">
                    {item.title}
                  </h2>
                  <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-red-700 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0 mt-0.5" />
                </div>

                <p className="text-[11px] text-white/40 leading-relaxed">
                  {item.desc}
                </p>

                {/* bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-px rounded-b-xl bg-red-700"
                  style={{
                    width: "0%",
                    transition: "width 0.35s ease",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const parent = el.closest("a");
                    const show = () => (el.style.width = "100%");
                    const hide = () => (el.style.width = "0%");
                    parent?.addEventListener("mouseenter", show);
                    parent?.addEventListener("mouseleave", hide);
                  }}
                />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}