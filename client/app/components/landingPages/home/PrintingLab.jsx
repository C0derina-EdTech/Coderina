"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/microscope4.jpg",
  "/microscope5.jpg",
  "/microscope6.jpg",
  "/print1.jpg",
  "/anatomy.jpg",
  "/print6.jpg",
  "/robotarm.jpg",
  "/microscope2.jpg",
  "/microscope3.jpg",
  "/robotarm4.jpg",
  "/print1.jpg",
  "/skull.jpg",
  "/skull2.jpg",
  "/skull3.jpg",
  "/skull4.jpg",
  "/skull5.jpg",
  "/skull6.jpg",
  "/skull7.jpg",
];

const stats = [
  { value: "500+", label: "Prototypes Built" },
  { value: "3D", label: "Additive Manufacturing" },
  { value: "FDM", label: "Printing Technology" },
  { value: "STEM", label: "Integrated Learning" },
];

const PER_PAGE = 5;

export default function PrintingLab() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(images.length / PER_PAGE);
  const visible = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-10">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
              Innovation Lab
            </span>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-gray-900 mt-1 leading-snug tracking-tight">
              3D Printing & Additive Manufacturing
            </h2>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed max-w-lg">
              At Coderina, we believe making is the deepest form of learning. Our lab equips young innovators with industry-grade additive manufacturing tools — from designing anatomical models to engineering functional robot arms — turning ideas into physical reality, one layer at a time.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex gap-px border border-gray-100 rounded-xl overflow-hidden flex-shrink-0 self-start md:self-auto">
            {stats.map((s, i) => (
              <div key={i} className="px-4 py-3 bg-gray-50 text-center border-r border-gray-100 last:border-0">
                <p className="text-sm font-extrabold text-gray-900 leading-none">{s.value}</p>
                <p className="text-[9px] font-semibold uppercase tracking-widest text-gray-400 mt-0.5 whitespace-nowrap">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Two-column highlight + grid ── */}
        <div className="flex flex-col lg:flex-row gap-4 mb-4">

          {/* Left: feature text card */}
          <div className="lg:w-56 flex-shrink-0 rounded-xl bg-[#0f0f0f] p-5 flex flex-col justify-between">
            <div>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                style={{ background: "#b91c1c" }}
              >
                {/* cube icon */}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <p className="text-xs font-bold text-white leading-snug mb-2">
                From digital design to physical prototype
              </p>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Students use CAD software to design, then watch their models materialise layer by layer — bridging the digital and physical worlds.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-[9px] font-bold uppercase tracking-widest text-white/30 mb-1">Technologies</p>
              <div className="flex flex-wrap gap-1.5">
                {["FDM", "CAD", "PLA", "Resin", "Robotics"].map((t) => (
                  <span key={t} className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/8 text-white/50 border border-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image grid */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {visible.map((src, i) => (
              <div
                key={`${src}-${page}-${i}`}
                className={`relative overflow-hidden rounded-xl bg-gray-100 group
                  ${i === 0 ? "col-span-2 sm:col-span-1 lg:col-span-2 row-span-2" : ""}
                `}
                style={{ aspectRatio: i === 0 ? "1/1" : "4/3" }}
              >
                <Image
                  src={src}
                  alt={`Coderina 3D printing and robotics lab — image ${page * PER_PAGE + i + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-between mt-5">
          <p className="text-[10px] text-gray-400">
            Showing {page * PER_PAGE + 1}–{Math.min((page + 1) * PER_PAGE, images.length)} of {images.length} images
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: page === i ? "20px" : "6px",
                    height: "6px",
                    background: page === i ? "#b91c1c" : "#d1d5db",
                  }}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}