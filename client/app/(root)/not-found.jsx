"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "../components/landingPages/Footer";
import Navbar from "../components/landingPages/Navbar";
import { usePost} from "../components/contexts/PostContext";

const staticRoutes = [
  { label: "Home",              path: "/",                            type: "page" },
  { label: "About",             path: "/about",                       type: "page" },
  { label: "Contact",           path: "/contact",                     type: "page" },
  { label: "Events",            path: "/events",                      type: "page" },
  { label: "Programs",          path: "/programs",                    type: "page" },
  { label: "Robotics Lab",      path: "/robotics-lab",                type: "page" },
  { label: "COUCH", path: "/coderina-university-challenge",             type: "page" },
  { label: "Project Fair",      path: "/project-fair",                type: "page" },
  { label: "Newsroom",          path: "/newsroom",                    type: "page" },
  { label: "SIWES",             path: "/coderina-siwes-application",  type: "page" },
];

const quickLinks = [
  { label: "Home",       href: "/" },
  { label: "Programmes", href: "/programs" },
  { label: "Events",     href: "/events" },
  { label: "Newsroom",   href: "/newsroom" },
  { label: "Contact",    href: "/contact" },
];

export default function NotFound() {
  const { posts = [] } = usePost();
  const [query, setQuery]           = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const q = e.target.value;
    setQuery(q);
    if (!q.trim()) { setSuggestions([]); return; }
    const lq = q.toLowerCase();

    const matchedPosts = posts
      .filter((p) =>
        p?.title?.toLowerCase().includes(lq) ||
        p?.slug?.current?.toLowerCase().includes(lq)
      )
      .map((p) => ({ label: p.title, path: `/newsroom/${p.slug?.current}`, type: "article", id: p._id }));

    const matchedPages = staticRoutes.filter((r) => r.label.toLowerCase().includes(lq));
    setSuggestions([...matchedPages, ...matchedPosts].slice(0, 6));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16 relative overflow-hidden">

        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* red glow top-left */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{ background: "radial-gradient(circle, #b91c1c, transparent 70%)" }}
        />
        {/* red glow bottom-right */}
        <div
          className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none opacity-10"
          style={{ background: "radial-gradient(circle, #b91c1c, transparent 70%)" }}
        />

        <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center gap-6">

          {/* 404 hollow type */}
          <div className="relative select-none">
            <p
              className="font-black leading-none tracking-tighter"
              style={{
                fontSize: "clamp(6rem, 20vw, 12rem)",
                WebkitTextStroke: "1.5px rgba(185,28,28,0.55)",
                color: "transparent",
                fontFamily: "Georgia, serif",
              }}
            >
              404
            </p>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-700 animate-pulse" />
          </div>

          {/* headline */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-red-700">
              Page not found
            </span>
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-white tracking-tight leading-snug">
              This page went off-course
            </h1>
            <p className="text-xs text-white/40 leading-relaxed max-w-sm mx-auto">
              The page you're looking for doesn't exist or may have been moved. Search below or use the quick links to find your way back.
            </p>
          </div>

          {/* search */}
          <div className="relative w-full">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30 pointer-events-none"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search pages, programmes, articles…"
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white/5 border border-white/10 text-white placeholder-white/25 rounded-lg focus:outline-none focus:border-white/25 transition-colors"
            />

            {/* dropdown */}
            {query.trim() && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#161616] border border-white/10 rounded-lg overflow-hidden z-50">
                {suggestions.length > 0 ? suggestions.map((item, i) => (
                  <Link
                    key={item.id || i}
                    href={item.path}
                    className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5 border-b border-white/6 last:border-0 transition-colors group"
                  >
                    <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors truncate">
                      {item.label}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-red-700 ml-3 flex-shrink-0">
                      {item.type}
                    </span>
                  </Link>
                )) : (
                  <p className="text-[11px] text-white/30 px-4 py-3">
                    No results — try different keywords.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-px bg-white/8" />
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/20">quick links</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* quick links */}
          <div className="flex flex-wrap justify-center gap-2 w-full">
            {quickLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[11px] font-semibold px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/8 transition-all duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/"
              className="text-[11px] font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-85 active:scale-95"
              style={{ background: "#b91c1c" }}
            >
              ← Back to Home
            </Link>
          </div>

          <p className="text-[10px] text-white/15">
            Coderina EdTech Foundation · Building Africa's next generation
          </p>
        </div>
      </main>

      <div className="border-t border-white/8">
        <Footer />
      </div>
    </div>
  );
}