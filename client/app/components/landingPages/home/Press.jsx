'use client';

import Link from "next/link";

const pressItems = [
  {
    publication: "TechBuild.Africa",
    date: "Nov 13, 2025",
    title: "Top 10 Finalists to Unveil Groundbreaking Student Innovations at COUCH 2025 Grand Finale",
    link: "https://techbuild.africa/10-finalists-student-innovation-couch-2025-finale/",
  },
  {
    publication: "PUNCH.ng",
    date: "Nov 12, 2025",
    title: "Top 10 student innovators set for COUCH 2025 finale",
    link: "https://punchng.com/top-10-student-innovators-set-for-couch-2025-finale/",
  },
  {
    publication: "Independent.ng",
    date: "Nov 11, 2025",
    title: "Top 10 Finalists set to showcase Groundbreaking Student Innovations at COUCH 2025 Grand Finale",
    link: "https://independent.ng/top-10-finalists-set-to-showcase-groundbreaking-student-innovations-at-couch-2025-grand-finale/",
  },
  {
    publication: "Vanguard",
    date: "Nov 12, 2025",
    title: "Coderina university challenge produces 10 student-led innovator teams",
    link: "https://www.vanguardngr.com/2025/11/coderina-university-challenge-produces-10-student-led-innovator-teams/",
  },
];

export default function Press() {
  return (
    // md:hidden — only renders on mobile, invisible on md and above
    <section className="md:hidden w-full bg-[#0f0f0f] py-10 px-4">

      {/* Header */}
      <div className="mb-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
          Media
        </span>
        <h2 className="text-sm font-extrabold text-white mt-1 tracking-tight">
          Coderina in the press
        </h2>
      </div>

      {/* Press list */}
      <div className="flex flex-col divide-y divide-white/8">
        {pressItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-1 py-4 first:pt-0 last:pb-0"
          >
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-widest text-red-700">
                {item.publication}
              </span>
              <span className="text-[9px] text-white/25">{item.date}</span>
            </div>
            <p className="text-xs font-semibold text-white/70 group-hover:text-white leading-snug transition-colors line-clamp-2">
              {item.title}
            </p>
            <span className="text-[10px] text-white/30 group-hover:text-red-500 transition-colors flex items-center gap-1 mt-0.5">
              Read article
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </a>
        ))}
      </div>

    </section>
  );
}