"use client";
"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import Contact from "./Contact";
import Blog from "./Blog";
// ─── Image placeholders – swap src with your actual chess images ───────────
const CHESS_IMAGES = [
  { src: "/2026/chessplay1.jpg", alt: "Students playing chess in action" },
  { src: "/2026/chessplay2.jpg", alt: "Young chess competitor focusing" },
  { src: "/2026/chess1.jpg", alt: "Chess tournament in progress" },
  { src: "/2026/chessplay0.jpg", alt: "Students at chess board" },
  { src: "/2026/chess3.jpg", alt: "Chess competition moment" },
  { src: "/2026/chessplay1.jpg", alt: "Chess player making a move" },
];
const STATS = [
  { value: "2,000+", label: "Students Reached" },
  { value: "53+", label: "Partner Schools" },
  { value: "2", label: "Competitions Held" },
  { value: "20+", label: "States Covered" },
];

// ─── Chess board SVG decoration ────────────────────────────────────────────
function ChessSquares({ className = "" }) {
  return (
    <div className={`grid grid-cols-8 opacity-[0.06] ${className}`} aria-hidden>
      {Array.from({ length: 64 }).map((_, i) => {
        const row = Math.floor(i / 8);
        const col = i % 8;
        const dark = (row + col) % 2 === 0;
        return (
          <div
            key={i}
            className={`aspect-square ${dark ? "bg-red-700" : "bg-gray-900"}`}
          />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [activeImg, setActiveImg] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);
  return (
    <div className="bg-white font-garamond text-gray-900 overflow-x-hidden">
      {/* ══════════════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative flex items-center pt-2 overflow-hidden bg-white"
      >
        {/* Chess board decoration top-right */}
        <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 pointer-events-none">
          <ChessSquares className="w-full h-full" />
        </div>
        {/* Thin red accent line */}
        <div className="absolute left-0 top-1/3 w-1 h-40 bg-red-700 opacity-60 hidden lg:block" />

        <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10 w-full py-10 2xl:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <p
                className="thin-line text-xs uppercase tracking-[0.25em] text-red-700 font-sans font-medium mb-6"
                data-aos="fade-right"
              >
                A Coderina Initiative
              </p>
              <h1
                className="heading text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-light leading-[1.05] text-gray-900 mb-8"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Where Every
                <br />
                <em className="font-semibold italic">Move</em>
                <br />
                <span className="text-red-700">Matters.</span>
              </h1>
              <p
                className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md font-sans font-light mb-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Checkmate is Coderina&apos;s initiative to harness the timeless
                power of chess in cultivating critical thinking, discipline, and
                strategic excellence in Nigerian youth. One competition at a
                time.
              </p>
              <div
                className="flex flex-wrap gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  href="#about"
                  className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-sm transition-all duration-200 shadow-sm hover:shadow-md font-sans"
                >
                  Discover More
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="#contact"
                  className="btn-outline text-[10px] font-bold px-8 py-2 rounded-sm text-sm uppercase tracking-widest"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Hero image mosaic */}
            <div
              className="relative hidden lg:grid grid-cols-2 gap-3 h-[520px]"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="relative overflow-hidden rounded-sm row-span-2">
                <Image
                  src={CHESS_IMAGES[0].src}
                  alt={CHESS_IMAGES[0].alt}
                  fill
                  className="gallery-img object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={CHESS_IMAGES[1].src}
                  alt={CHESS_IMAGES[1].alt}
                  fill
                  className="gallery-img object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <Image
                  src={CHESS_IMAGES[2].src}
                  alt={CHESS_IMAGES[2].alt}
                  fill
                  className="gallery-img object-cover"
                />
                {/* Red badge */}
                <div className="absolute bottom-3 left-3 bg-red-700 text-white text-[0.65rem] uppercase tracking-widest px-3 py-1 font-sans">
                  In Action
                </div>
              </div>
            </div>

            {/* Mobile hero image */}
            <div
              className="lg:hidden relative overflow-hidden rounded-sm h-64 w-full"
              data-aos="fade-up"
            >
              <Image
                src={CHESS_IMAGES[0].src}
                alt={CHESS_IMAGES[0].alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
          <span className="text-[0.6rem] uppercase tracking-widest font-sans">
            Scroll
          </span>
          <div className="w-px h-10 bg-gray-400 animate-pulse" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          STATS BAND
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-950 text-white py-14">
        <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <div className="heading text-4xl md:text-5xl font-light text-white mb-1">
                  {s.value}
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-gray-400 font-sans">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
            {/* Images */}
            <div
              className="grid grid-cols-2 gap-3 relative"
              data-aos="fade-right"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
                <Image
                  src={CHESS_IMAGES[3].src}
                  alt={CHESS_IMAGES[3].alt}
                  fill
                  className="gallery-img object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] mt-8">
                <Image
                  src={CHESS_IMAGES[4].src}
                  alt={CHESS_IMAGES[4].alt}
                  fill
                  className="gallery-img object-cover"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-red-700 opacity-10 rounded-sm pointer-events-none" />
            </div>

            {/* Text */}
            <div data-aos="fade-left" data-aos-delay="100">
              <p className="thin-line text-xs uppercase tracking-[0.22em] text-red-700 font-sans font-medium mb-5">
                About Checkmate
              </p>
              <h2 className="heading text-4xl md:text-5xl font-light leading-tight mb-6">
                A Movement Born from
                <br />
                <em className="font-semibold">Passion for Purpose</em>
              </h2>
              <div className="space-y-4 text-gray-500 text-sm leading-relaxed font-sans font-light">
                <p>
                  Founded in 2024 by{" "}
                  <span className="text-gray-800 font-medium">Coderina</span>,
                  Nigeria&apos;s foremost STEM education organisation. Checkmate
                  was born from a conviction: that chess, the ancient game of
                  kings, holds a modern superpower for young minds.
                </p>
                <p>
                  Through structured competitions, school outreach, and an
                  inclusive curriculum, Checkmate equips students with the
                  mental architecture of champions, patience, foresight,
                  adaptability, and the courage to think two moves ahead in
                  every area of life.
                </p>
                <p>
                  Since our inaugural season, we have engaged thousands of
                  students across primary and secondary schools, partnered with
                  educators nationwide, and built a community where every child
                  has the opportunity to say:{" "}
                  <em className="text-gray-700">&quot;Checkmate.&quot;</em>
                </p>
              </div>

              <Link
                href="#mission"
                className="btn-outline inline-block mt-8 px-7 py-3 text-[10px] font-bold px-8 py-2 rounded-sm text-sm uppercase tracking-widest font-sans font-medium"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          MISSION / PILLARS
      ══════════════════════════════════════════════════════════════════ */}
      <section id="mission" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
          <div className="max-w-2xl mb-16" data-aos="fade-up">
            <p className="thin-line text-xs uppercase tracking-[0.22em] text-red-700 font-sans font-medium mb-5">
              Our Mission
            </p>
            <h2 className="heading text-4xl md:text-5xl font-light leading-tight">
              Three Pillars of
              <br />
              <em className="font-semibold">Checkmate</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Educate",
                body: "We introduce chess into school curricula through an engaging, age-appropriate programme that meets students where they are and grows with them.",
                icon: "♟",
              },
              {
                num: "02",
                title: "Compete",
                body: "Structured intra-school, inter-school, and national tournaments give students a stage to test their skills and rise to excellence under fair, professional conditions.",
                icon: "♜",
              },
              {
                num: "03",
                title: "Empower",
                body: "Every game, every lesson, every competition is a deliberate investment in the critical-thinking and decision-making abilities that drive lifelong success.",
                icon: "♛",
              },
            ].map((p, i) => (
              <div
                key={p.num}
                className="chess-hover bg-white border border-gray-100 p-8 rounded-sm relative overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <span className="absolute top-4 right-5 heading text-6xl text-gray-100 font-bold select-none leading-none">
                  {p.num}
                </span>
                <div className="text-3xl mb-5">{p.icon}</div>
                <h3 className="heading text-2xl font-semibold mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                  {p.body}
                </p>
                <div className="mt-6 w-8 h-0.5 bg-red-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════════════════════ */}
      <section id="gallery" className="py-24 md:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div data-aos="fade-up">
              <p className="thin-line text-xs uppercase tracking-[0.22em] text-red-700 font-sans font-medium mb-4">
                Gallery
              </p>
              <h2 className="heading text-4xl md:text-5xl font-light leading-tight">
                The Board Is
                <br />
                <em className="font-semibold">Alive</em>
              </h2>
            </div>
            <p
              className="text-gray-400 text-sm font-sans max-w-xs font-light"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Moments captured from our competitions — where concentration,
              passion, and the love of chess converge.
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {CHESS_IMAGES.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm cursor-pointer ${i === 0 ? "md:col-span-2 aspect-video" : "aspect-square"}`}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                onClick={() => setActiveImg(img)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="gallery-img w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 hover:opacity-100 text-2xl transition-opacity">
                    ⊕
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImg && (
        <div
          className="lightbox-bg fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setActiveImg(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImg.src}
              alt={activeImg.alt}
              className="w-full rounded-sm max-h-[80vh] object-contain"
            />
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-red-400 transition-colors"
              onClick={() => setActiveImg(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <section className="bg-red-700 py-16 2xl:py-20 overflow-hidden">
        <div
          className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10 text-center"
          data-aos="fade-up"
        >
          <p className="thin-line text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl mx-auto heading">
            &quot;We are not just teaching chess. We are building the
            problem-solvers, visionaries, and leaders Africa needs&quot;
          </p>
          <p className="text-red-200 mt-5 text-[9px] uppercase tracking-widest font-semibold">
            Checkmate Initiative · Coderina · Nigeria
          </p>
        </div>
      </section>
      {/* ══════════════════════════════════════════════════════════════════
          BLOG
      ══════════════════════════════════════════════════════════════════ */}
      <section id="blog" className="py-16 md:py-24 xl:py-32 bg-gray-50">
        <Blog
          tagLine="Blog & Insights"
          headingLine1="Stories from"
          headingHighlight="the Board"
          initialCount={3}
        />
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-16 xl:py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <ChessSquares className="w-full h-full" />
        </div>
        <div
          className="relative max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10 text-center"
          data-aos="fade-up"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-red-400 font-sans font-medium mb-4">
            Join the Movement
          </p>
          <h2 className="heading text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
            Your Next Move
            <br />
            <em className="font-semibold">Starts Here.</em>
          </h2>
          <p className="text-gray-400 text-sm font-sans font-light max-w-lg mx-auto mb-10">
            Whether you are a school administrator, educator, parent, student or
            chess enthusiast. Checkmate has a place for you. Register your
            school or sign up as a participant today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#contact"
              className="btn-red px-8 py-3.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-medium"
            >
              Register Your School
            </Link>
            <Link
              href="mailto:hello@coderina.org"
              className="border border-white/20 text-white px-8 py-3.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <Contact />
      </section>
    </div>
  );
}
