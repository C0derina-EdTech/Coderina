"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar";

const SLIDES = [
  {
    id: 0,
    type: "image",
    src: "/2026/hallview.jpg",
    poster: null,
    eyebrow: "Innovation & Education",
    headline: "Empowering Africa's Next Generation of Innovators",
    body: "Coderina drives STEM education, robotics, and tech entrepreneurship across Africa, building skills and communities that shape tomorrow.",
    primaryCta: { label: "Explore Our Programs", href: "/programs" },
    secondaryCta: { label: "Read our latest report", href: "/newsroom" },
    duration: 8000,
  },
  {
    id: 1,
    type: "image",
    src: "/2026/engineering.jpg",
    poster: null,
    eyebrow: "Girls in Robotics",
    headline: "10,000 Girls Transformed Through Robotics & STEM",
    body: "Our flagship Girls in Robotics Programme has reached 10,000 participants across Nigeria, breaking barriers and rewriting the narrative for women in tech.",
    primaryCta: { label: "View the Programme", href: "#girls-in-robotics" },
    secondaryCta: { label: "Read success stories", href: "#stories" },
    duration: 8000,
  },
  {
    id: 2,
    type: "image",
    src: "/2026/chess1.jpg",
    poster: null,
    eyebrow: "2026 STEM Bootcamp",
    headline: "Launching Across 6 Countries in Africa",
    body: "Coderina's 2026 STEM Bootcamp equips thousands of young Africans with cutting-edge digital skills from AI and coding to engineering design.",
    primaryCta: { label: "Register Now", href: "#bootcamp" },
    secondaryCta: { label: "Learn more", href: "#about-bootcamp" },
    duration: 8000,
  },
  {
    id: 3,
    type: "image",
    src: "/2026/students.jpg",
    poster: null,
    eyebrow: "Innovation Hub · Abuja/Lagos",
    headline: "Our New Innovation Hub Is Open",
    body: "Coderina's state-of-the-art Innovation Hub in Lagos is a world-class space for young creators, builders, and entrepreneurs to collaborate and thrive.",
    primaryCta: { label: "Visit the Hub", href: "#hub" },
    secondaryCta: { label: "Our story", href: "#story" },
    duration: 8000,
  },
  {
    id: 4,
    type: "image",
    src: "/2026/COD02600.jpg",
    poster: null,
    eyebrow: "Community & Culture",
    headline: "Building a Bold Community of Young Tech Leaders",
    body: "From workshops to competitions, Coderina fosters a vibrant community where Africa's young tech leaders connect, grow, and lead.",
    primaryCta: { label: "Join the Community", href: "#community" },
    secondaryCta: { label: "Our events", href: "/events" },
    duration: 8000,
  },
  {
    id: 5,
    type: "image",
    src: "/2026/techdivas.jpg",
    poster: null,
    eyebrow: "her-eSTEAM Initiative",
    headline: "Rewriting the Narrative for Women in Tech",
    body: "Through the her-eSTEAM initiative, Coderina is creating bold pathways for young African women to lead in science, technology, and engineering.",
    primaryCta: { label: "Join e-STEAM Coderina", href: "https://www.esteamcoderina.org/her-esteam" },
    secondaryCta: { label: "Partner with us", href: "#partner" },
    duration: 8000,
  },
  {
    id: 6,
    type: "image",
    src: "/2026/flltable.jpg",
    poster: null,
    eyebrow: "FIRST LEGO League",
    headline: "Competing on the World Stage",
    body: "Coderina's FLL teams represent Nigeria globally by solving real-world problems through robotics, research, and teamwork on an international platform.",
    primaryCta: { label: "See Our Teams", href: "#fll" },
    secondaryCta: { label: "Sponsor a team", href: "#sponsor" },
    duration: 8000,
  },
];

const NEWS_ITEMS = [
  { label: "Coderina launches 2026 STEM Bootcamp across 6 Countries", href: "#" },
  { label: "Girls in Robotics Programme hits 10,000 participants milestone", href: "#" },
  { label: "Coderina partners with UNICEF for digital literacy initiative", href: "#" },
  { label: "Our new Innovation Hub in Abuja/Lagos is open", href: "#" },
  { label: "her-eSTEAM initiative expands to 3 new states", href: "#" },
  { label: "Coderina 2025/2026 FLL teams qualify for world championship", href: "#" },
  { label: "2026 STEM Bootcamp applications now open", href: "#" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pastSlides, setPastSlides] = useState([]);

  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);
  const isTransitioningRef = useRef(false);

  const clearTimers = () => {
    clearTimeout(timerRef.current);
    clearInterval(progressRef.current);
  };

  const startAutoPlay = useCallback((idx) => {
    clearTimers();
    const slide = SLIDES[idx];
    startTimeRef.current = Date.now();
    setProgress(0);

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min((elapsed / slide.duration) * 100, 100);
      setProgress(p);
    }, 30);

    timerRef.current = setTimeout(() => {
      clearInterval(progressRef.current);
      const next = (idx + 1) % SLIDES.length;
      transitionTo(next, idx);
    }, slide.duration);
  }, []);

  const transitionTo = useCallback((idx, from) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setTransitioning(true);
    setCurrent(idx);
    setPastSlides((p) => [...new Set([...p, from])]);
    setProgress(0);

    setTimeout(() => {
      isTransitioningRef.current = false;
      setTransitioning(false);
      startAutoPlay(idx);
    }, 900);
  }, [startAutoPlay]);

  useEffect(() => {
    startAutoPlay(0);
    return () => clearTimers();
  }, []);

  const handleTabClick = (idx) => {
    if (idx === current || isTransitioningRef.current) return;
    clearTimers();
    transitionTo(idx, current);
  };

  const slide = SLIDES[current];

  return (
    <>
      <section
        className="font-sans relative w-full overflow-hidden bg-gray-950"
        aria-label="Hero section"
        
      >
        {/* ─── SLIDE BACKGROUNDS ─── */}
        {SLIDES.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== current}
            className="absolute inset-0 z-0"
            style={{
              opacity: i === current ? 1 : 0,
              transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1)",
              pointerEvents: "none",
            }}
          >
            <Image
              src={s.src}
              alt=""
              fill
              priority={i === 0}
              className="object-cover object-center"
              style={{
                transform: i === current ? "scale(1.06)" : "scale(1.0)",
                transition: "transform 10s ease-out",
              }}
            />

            {/* Gradient overlays — ExxonMobil-style: heavier on left, top and bottom vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/55 to-gray-950/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/40" />
          </div>
        ))}

        {/* ─── NAVIGATION ─── */}
        <Navbar />

        {/* ─── HERO CONTENT ─── */}
        <div className="relative z-10 flex items-center sm:min-h-[calc(100vh-76px)] px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-16 pb-16 sm:pb-36 pt-8 md:pt-4 max-w-[100rem] mx-auto overflow-hidden">
          <div className="max-w-xl xl:max-w-2xl 2xl:max-w-3xl w-full">

            {/* Eyebrow */}
            <p
              key={`eyebrow-${current}`}
              className="slide-enter text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-red-400 mb-3 sm:mb-4"
              style={{ animationDelay: "0ms" }}
            >
              {slide.eyebrow}
            </p>

            {/* Headline */}
            <h1
              key={`headline-${current}`}
              className="slide-enter text-4xl lg:text-5xl 2xl:text-7xl font-normal text-white leading-[1.06] mb-5 sm:mb-6"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.015em",
                animationDelay: "80ms",
              }}
            >
              {slide.headline}
            </h1>

            {/* Body */}
            <p
              key={`body-${current}`}
              className="slide-enter text-sm sm:text-base text-white/70 max-w-md xl:max-w-lg leading-relaxed mb-8 sm:mb-10 font-light"
              style={{ animationDelay: "160ms" }}
            >
              {slide.body}
            </p>

            {/* CTAs */}
            <div
              key={`cta-${current}`}
              className="slide-enter flex flex-wrap items-center gap-3 sm:gap-4"
              style={{ animationDelay: "240ms" }}
            >
              <Link
                href={slide.primaryCta.href}
                className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold text-[10px] px-6 sm:px-7 py-3.5 tracking-wider rounded-md uppercase transition-all duration-200 shadow-lg shadow-red-900/30"
              >
                {slide.primaryCta.label}
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href={slide.secondaryCta.href}
                className="inline-flex items-center gap-2 text-white/75 hover:text-white font-medium text-xs sm:text-sm tracking-wide transition-colors duration-200 group"
              >
                <span>{slide.secondaryCta.label}</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* ─── BOTTOM NEWS TABS — lg+ only, ExxonMobil style ─── */}
        <div
          className="hidden 2xl:block absolute bottom-16 left-0 right-0 z-20 "
          role="tablist"
          aria-label="Latest from Coderina"
        >
          <div
            className="flex items-stretch divide-x divide-white/[0.12] max-w-7xl mx-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {NEWS_ITEMS.map((item, i) => {
              const isActive = i === current;
              const isPast = pastSlides.includes(i) && !isActive;

              return (
                <button
                  key={i}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleTabClick(i)}
                  className={`relative group flex-1 px-2 pt-3 pb-6 text-left text-[11px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-500 ${
                    isActive
                      ? "text-white "
                      : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Top progress line */}
                  <span
                    className="absolute top-0 left-0 h-[2px]"
                    style={{
                      width: isActive
                        ? `${progress}%`
                        : isPast
                        ? "100%"
                        : "0%",
                      backgroundColor: isActive
                        ? "#ef4444"
                        : isPast
                        ? "#6b7280"
                        : "transparent",
                      transition: isActive ? "none" : "width 0.4s ease, background-color 0.4s ease",
                    }}
                    aria-hidden="true"
                  />

                  <span className="block line-clamp-1 leading-snug font-medium pr-2">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── SCROLL INDICATOR — centered, blinking dot style ─── */}
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          {/* Blinking dot */}
          <div
            className="w-1.5 h-1.5 rounded-full bg-white"
            style={{ animation: "dotBlink 1.4s ease-in-out infinite" }}
          />
          {/* Animated line */}
          <div
            className="w-px h-9 bg-gradient-to-b from-white/50 to-transparent origin-top"
            style={{ animation: "scrollPulse 1.4s ease-in-out infinite" }}
          />
          <span
            className="text-[8px] font-semibold tracking-[0.35em] uppercase text-white/35"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </div>
      </section>
    </>
  );
}