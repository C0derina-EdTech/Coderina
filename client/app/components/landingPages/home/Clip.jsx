"use client";

import React from "react";
import Link from "next/link";

const Clip = () => {
  return (
    <section className="w-full bg-[#0f0f0f] py-12 md:py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8 md:mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
            Alumni Stories
          </span>
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-white mt-1 tracking-tight">
            Success stories from our community
          </h2>
          <p className="text-xs text-white/40 mt-1.5 max-w-md leading-relaxed">
            Hear directly from the young innovators whose lives were shaped by Coderina's programmes.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* Video */}
          <div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/8">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dpfbpdohh/video/upload/v1769189917/israel_ctzlrh.mp4"
                poster="/logo.png"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-5">
            {/* Quote card */}
            <div className="rounded-2xl bg-white/5 border border-white/8 p-5 sm:p-6">
              {/* Opening quote mark */}
              <div
                className="text-4xl font-black leading-none mb-3 select-none"
                style={{ color: "#b91c1c", opacity: 0.6 }}
              >
                "
              </div>

              <p className="text-xs sm:text-sm text-white/70 italic leading-relaxed mb-5">
                During the championship I discovered new experiences in the robotics field as a whole — it opened my perspective to the idea of robotics and its place in everyday life.
              </p>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-4" />

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-extrabold"
                  style={{ background: "#b91c1c" }}
                >
                  AI
                </div>
                <div>
                  <p className="text-xs font-bold text-white leading-none">Akor Israel</p>
                  <p className="text-[10px] text-white/40 mt-0.5">
                    Creative Director & Graphics Designer · FLL Alumni
                  </p>
                </div>
              </div>
            </div>

            {/* Journey label */}
            <div className="rounded-xl bg-white/3 border border-white/8 px-4 py-3 flex items-start gap-3">
              <div
                className="w-1 h-full min-h-[2rem] rounded-full flex-shrink-0"
                style={{ background: "#b91c1c" }}
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">
                  Journey
                </p>
                <p className="text-xs font-semibold text-white/80 leading-snug">
                  From FLL Participant to Professional Creative Director
                </p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/coderina-siwes-application"
              className="inline-flex items-center gap-1.5 text-[11px] font-bold w-fit transition-colors"
              style={{ color: "#b91c1c" }}
            >
              Start your journey
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clip;