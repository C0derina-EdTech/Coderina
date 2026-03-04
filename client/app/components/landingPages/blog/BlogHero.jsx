import React from "react";
import Link from "next/link";

// ── Animated ticker tape ─────────────────────────────────────────
const topics = [
  "Robotics Championships",
  "FIRST Tech Challenge",
  "STEM Education",
  "Youth Innovation",
  "National Competitions",
  "Chess Initiative",
  "Code Car Racing",
  "FIRST LEGO League",
];

const Ticker = () => (
  <div className="overflow-hidden w-full border-y border-white/10 py-2 bg-black/30 backdrop-blur-sm">
    <div
      className="flex gap-8 whitespace-nowrap"
      style={{
        animation: "ticker 28s linear infinite",
        width: "max-content",
      }}
    >
      {[...topics, ...topics].map((t, i) => (
        <span key={i} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/50">
          <span className="w-1 h-1 rounded-full bg-red-700 inline-block flex-shrink-0" />
          {t}
        </span>
      ))}
    </div>
    <style>{`
      @keyframes ticker {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}</style>
  </div>
);

// ── Stat pill ────────────────────────────────────────────────────
const Stat = ({ value, label }) => (
  <div className="text-center px-5 py-3 border-r border-white/10 last:border-0">
    <p className="text-lg font-extrabold text-white leading-none">{value}</p>
    <p className="text-[9px] font-semibold uppercase tracking-widest text-white/40 mt-0.5">{label}</p>
  </div>
);

// ── Hero ─────────────────────────────────────────────────────────
const BlogHero = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl mb-8 md:mb-10" style={{ background: "#0f0f0f" }}>

      {/* Background texture grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Red glow — top left */}
      <div
        className="absolute -top-20 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #b91c1c, transparent 70%)" }}
      />

      {/* Red glow — bottom right */}
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #b91c1c, transparent 70%)" }}
      />

      {/* ── Top strip: label + date ── */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-8 md:px-10 pt-5 pb-0">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#b91c1c" }}
          />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
            Coderina EdTech Foundation
          </span>
        </div>
        <span className="text-[10px] text-white/30 font-medium tabular-nums hidden sm:block">
          {new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </span>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-6 sm:px-8 md:px-10 pt-6 pb-7 flex flex-col sm:flex-row sm:items-end justify-between gap-6">

        {/* Left: headline */}
        <div className="max-w-xl">
          {/* Section label */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span
              className="text-[9px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded"
              style={{ background: "#b91c1c", color: "#fff" }}
            >
              Newsroom
            </span>
            <span className="text-[10px] text-white/30 font-medium">Stories, updates & impact</span>
          </div>

          <h1
            className="font-black text-white leading-[1.05] tracking-tight mb-3"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.6rem)" }}
          >
            Where{" "}
            <span
              className="relative inline-block"
              style={{ color: "#b91c1c" }}
            >
              innovation
              {/* underline squiggle */}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                preserveAspectRatio="none"
                style={{ height: "4px" }}
              >
                <path
                  d="M0,4 Q25,0 50,4 Q75,8 100,4 Q125,0 150,4 Q175,8 200,4"
                  fill="none"
                  stroke="#b91c1c"
                  strokeWidth="2.5"
                  opacity="0.5"
                />
              </svg>
            </span>{" "}
            meets<br className="hidden sm:block" /> the next generation.
          </h1>

          <p className="text-xs text-white/40 leading-relaxed max-w-sm">
            Follow Nigeria's leading STEM foundation — robotics championships, chess initiatives, code car races, and the young minds reshaping Africa's future.
          </p>

          {/* CTA row */}
          <div className="flex gap-3 mt-5 flex-wrap items-center">
            <Link
              href="/about"
              className="text-xs font-bold px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-80"
              style={{ background: "#b91c1c" }}
            >
              About Coderina
            </Link>
            <Link
              href="/programmes"
              className="text-xs font-bold px-4 py-2 rounded-lg text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
            >
              Our Programmes →
            </Link>
          </div>
        </div>

        {/* Right: stats */}
        <div
          className="hidden sm:flex items-stretch rounded-xl overflow-hidden border border-white/10 flex-shrink-0 self-end"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <Stat value="116+" label="Teams" />
          <Stat value="6+" label="Programmes" />
          <Stat value="36" label="States" />
          <Stat value="2015" label="Est." />
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="relative z-10">
        <Ticker />
      </div>
    </div>
  );
};

export default BlogHero;