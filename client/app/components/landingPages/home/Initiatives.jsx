"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import Link from "next/link";

const topCards = [
  {
    id: 1,
    title: "Coderina University Challenge (COUCH)",
    description:
      "A national innovation and technology competition for university students to showcase creativity, problem-solving, robotics, and software development while solving real-world challenges.",
    cta: "Let's Go",
    link: "/coderina-university-challenge",
    image: "/couch/couchprogram.jpg",
    alt: "Coderina University Challenge competition for Nigerian university students",
    delay: 0,
  },
  {
    id: 2,
    title: "Checkmate – Chess & Critical Thinking",
    description:
      "A strategic learning initiative promoting chess education, logical reasoning, and critical thinking among young learners — building mental agility and competitive confidence.",
    cta: "Register Teams",
    link: "/checkmate",
    image: "/2026/chessplay1.jpg",
    alt: "Coderina Checkmate chess and critical thinking initiative for youth",
    delay: 100,
  },
  {
    id: 3,
    title: "e-STEAM Coderina Learning Platform",
    description:
      "A digital learning ecosystem delivering world-class education in coding, robotics, AI, and emerging technologies — equipping students with future-ready skills.",
    cta: "Get Season Details",
    link: "https://www.esteamcoderina.org",
    image: "/sociallogo.png",
    alt: "e-STEAM Coderina digital learning platform for coding robotics and AI education",
    delay: 200,
  },
];

export default function Initiatives() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <section className="w-full py-8 md:py-10  bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">

          {/* Section header */}
          <div className="mb-6 md:mb-8" data-aos="fade-up">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
              Our Initiatives
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 mt-1 tracking-tight">
              Programmes shaping Nigeria&apos;s next generation
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-7">
            {topCards.map((card) => (
              <article
                key={card.id}
                className="group flex flex-col"
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                {/* Image */}
                <div className="relative w-full aspect-[5/3] mb-3 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    title={card.title}
                    fill
                    priority={card.id === 1}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle red overlay on hover */}
                  <div className="absolute inset-0 bg-red-700/0 group-hover:bg-red-700/5 transition-colors duration-300" />
                </div>

                {/* Text */}
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xs sm:text-sm font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-red-700 transition-colors">
                    {card.title}
                  </h2>

                  <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed flex-grow mb-3">
                    {card.description}
                  </p>

                  <Link
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : undefined}
                    rel={card.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-red-700 hover:gap-2 transition-all duration-200 w-fit"
                  >
                    {card.cta}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}