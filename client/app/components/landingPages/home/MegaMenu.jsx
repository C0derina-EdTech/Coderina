"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Newspaper } from "lucide-react";

/* ─── Press items ─────────────────────────────────────────────── */
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
    title: "Top 10 Finalists set to showcase Groundbreaking Student innovations at COUCH 2025 Grand Finale",
    link: "https://independent.ng/top-10-finalists-set-to-showcase-groundbreaking-student-innovations-at-couch-2025-grand-finale/",
  },
  {
    publication: "Vanguard",
    date: "Nov 12, 2025",
    title: "Coderina university challenge produces 10 student-led innovator teams",
    link: "https://www.vanguardngr.com/2025/11/coderina-university-challenge-produces-10-student-led-innovator-teams/",
  },
];

/* ─── Menu data ───────────────────────────────────────────────── */
const MENU_CONTENT = {
  programs: {
    tagline: "Tools built to spark curiosity and create change.",
    cols: [
      {
        heading: "Platforms",
        links: [
          { title: "e-STEAM Coderina",    desc: "Full learning management system",    href: "https://esteamcoderina.org", external: true },
          { title: "Coding Environment",  desc: "Browser-based IDE for students",     href: "/programs" },
          { title: "Checkmate",           desc: "Chess game competitions",            href: "/programs" },
          { title: "COUCH",               desc: "University challenge hub",           href: "/coderina-university-challenge" },
        ],
      },
      {
        heading: "Products",
        links: [
          { title: "Robotics Kits",  desc: "Arduino & Raspberry Pi based",  href: "/programs" },
          { title: "3D Printing",    desc: "Design and fabrication tools",   href: "/robotics-lab" },
          { title: "SIWES",          desc: "Industrial work experience",     href: "/coderina-siwes-application", badge: "Open" },
        ],
      },
    ],
    cta: { label: "All Programs", href: "/programs" },
    highlight: {
      label: "New",
      title: "SIWES 2026 Applications",
      desc: "Industrial training placements now open for university students.",
      href: "/coderina-siwes-application",
    },
  },

  solutions: {
    tagline: "Tailored STEM for every institution and stakeholder.",
    cols: [
      {
        heading: "By Institution",
        links: [
          { title: "Primary Schools",   desc: "Foundation STEM curriculum",    href: "#" },
          { title: "Secondary Schools", desc: "Advanced robotics & coding",    href: "#" },
          { title: "Universities",      desc: "Research and innovation labs",  href: "#" },
        ],
      },
      {
        heading: "By Stakeholder",
        links: [
          { title: "Governments",  desc: "National digital programs",      href: "#" },
          { title: "NGOs",         desc: "Community empowerment",          href: "#" },
          { title: "Corporations", desc: "CSR and workforce development",  href: "#" },
        ],
      },
    ],
    cta: { label: "View Solutions", href: "#solutions" },
    highlight: {
      label: "Featured",
      title: "Government Partnerships",
      desc: "Helping ministries integrate STEAM into national education policy.",
      href: "/contact",
    },
  },

  events: {
    tagline: "Where Africa's brightest STEM minds connect and compete.",
    cols: [
      {
        heading: "Upcoming",
        links: [
          { title: "STEM Innovation Summit",  desc: "Lagos · March 2026",       href: "/events", badge: "Soon" },
          { title: "Robotics Championship",   desc: "Abuja · April 2026",       href: "/events" },
          { title: "Hackathon Series",         desc: "Multi-city · Ongoing",     href: "/events" },
        ],
      },
      {
        heading: "Community",
        links: [
          { title: "Student Showcase",  desc: "Share your projects",          href: "/events" },
          { title: "Weekly Webinars",   desc: "Live learning sessions",       href: "/events" },
          { title: "Partner Events",    desc: "Collaborative initiatives",    href: "/events" },
        ],
      },
    ],
    cta: { label: "All Events", href: "/events" },
    highlight: {
      label: "Live",
      title: "2025/2026 National Robotics Championship",
      desc: "116 teams, one stage. Results and highlights now available.",
      href: "/newsroom",
    },
  },

  industries: {
    tagline: "STEM innovation across every sector of Africa's economy.",
    cols: [
      {
        heading: "Education",
        links: [
          { title: "K-12 Education",    desc: "Transform classroom learning",  href: "#" },
          { title: "Higher Education",  desc: "Research & development",         href: "#" },
          { title: "Online Learning",   desc: "Remote education tools",         href: "#" },
        ],
      },
      {
        heading: "Industry",
        links: [
          { title: "Manufacturing",      desc: "Automation training",            href: "#" },
          { title: "Agriculture Tech",   desc: "Smart farming education",        href: "#" },
          { title: "Renewable Energy",   desc: "Sustainable tech programs",      href: "#" },
        ],
      },
    ],
    cta: { label: "Explore Industries", href: "#industries" },
    highlight: {
      label: "Impact",
      title: "36 States Reached",
      desc: "Coderina programmes now active in every geopolitical zone in Nigeria.",
      href: "/about",
    },
  },

  company: {
    tagline: "Built in Africa, for Africa — a mission-driven STEM force.",
    cols: [
      {
        heading: "About",
        links: [
          { title: "Our Story",       desc: "How we started in 2015",          href: "/about" },
          { title: "Leadership Team", desc: "Meet the people behind Coderina",  href: "/about" },
          { title: "Awards",          desc: "Industry accolades & recognition", href: "/about" },
        ],
      },
      {
        heading: "Work With Us",
        links: [
          { title: "Careers",       desc: "Join our growing team",         href: "/about" },
          { title: "Partners",      desc: "Strategic collaborations",      href: "/contact" },
          { title: "Press & Media", desc: "News and media resources",      href: "/newsroom" },
        ],
      },
    ],
    cta: { label: "About Coderina", href: "/about" },
    highlight: {
      label: "Est. 2015",
      title: "A Decade of STEM Impact",
      desc: "From a single classroom to a pan-African movement in STEAM education.",
      href: "/about",
    },
  },

  newsroom: {
    tagline: "Stories, press coverage, and resources from Coderina.",
    cols: [
      {
        heading: "Explore",
        links: [
          { title: "Latest News",       desc: "Announcements & updates",       href: "/newsroom" },
          { title: "Events Coverage",   desc: "Championship highlights",       href: "/newsroom?category=events" },
          { title: "Innovation Stories", desc: "Student & alumni spotlights",  href: "/newsroom?category=innovation" },
          { title: "All Articles",       desc: "Browse the full newsroom",     href: "/newsroom" },
        ],
      },
    ],
    cta: { label: "Visit Newsroom", href: "/newsroom" },
    press: true, // renders press panel instead of standard right col + highlight
  },
};

/* ─── Sub-components ──────────────────────────────────────────── */
function LinkCol({ col, isLast, onClose }) {
  return (
    <div className={`flex-1 min-w-0 ${!isLast ? "border-r border-gray-100 pr-6" : ""}`}>
      <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[2.5px] mb-3">
        {col.heading}
      </p>
      <ul className="space-y-0.5">
        {col.links.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              onClick={onClose}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group flex items-center justify-between gap-2 px-2.5 py-2 -mx-2.5 rounded-lg hover:bg-red-50 transition-colors duration-150"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-semibold text-gray-700 group-hover:text-red-700 transition-colors leading-snug">
                    {link.title}
                  </span>
                  {link.badge && (
                    <span className="px-1.5 py-px text-[8px] font-bold bg-red-600 text-white rounded uppercase tracking-wide">
                      {link.badge}
                    </span>
                  )}
                  {link.external && <ExternalLink className="w-2.5 h-2.5 text-gray-300 group-hover:text-red-400 flex-shrink-0" />}
                </div>
                <p className="text-[10px] text-gray-400 mt-px leading-snug truncate">{link.desc}</p>
              </div>
              <ArrowRight className="w-3 h-3 text-gray-200 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HighlightCard({ item, onClose }) {
  return (
    <div className="w-48 shrink-0 flex flex-col gap-3 pl-4 border-l border-gray-100">
      <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[2.5px]">Featured</p>
      <Link
        href={item.href}
        onClick={onClose}
        className="group flex flex-col gap-1.5 p-3 rounded-xl bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 transition-all duration-200"
      >
        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-red-100 text-red-700 w-fit">
          {item.label}
        </span>
        <p className="text-[11px] font-bold text-gray-800 group-hover:text-red-700 transition-colors leading-snug">
          {item.title}
        </p>
        <p className="text-[10px] text-gray-400 leading-relaxed">{item.desc}</p>
        <span className="text-[10px] font-bold text-red-600 group-hover:text-red-700 flex items-center gap-1 mt-1">
          Learn more <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </Link>
    </div>
  );
}

function PressPanel({ onClose }) {
  return (
    <div className="w-64 shrink-0 flex flex-col gap-3 pl-4 border-l border-gray-100">
      <div className="flex items-center gap-1.5">
        <Newspaper className="w-3 h-3 text-gray-300" />
        <p className="text-[9px] font-bold text-gray-300 uppercase tracking-[2.5px]">Coderina in the Press</p>
      </div>
      <div className="flex flex-col gap-0.5">
        {pressItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex flex-col gap-0.5 px-2.5 py-2 -mx-2.5 rounded-lg hover:bg-red-50 transition-colors duration-150"
          >
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold text-red-700 uppercase tracking-wide shrink-0">
                {item.publication}
              </span>
              <span className="text-[9px] text-gray-300">{item.date}</span>
            </div>
            <p className="text-[10px] text-gray-600 group-hover:text-red-700 leading-snug line-clamp-2 transition-colors">
              {item.title}
            </p>
          </a>
        ))}
      </div>
      <Link
        href="/newsroom"
        onClick={onClose}
        className="text-[10px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1 mt-1 transition-colors"
      >
        All news <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}

/* ─── Main MegaMenu ───────────────────────────────────────────── */
export function MegaMenu({ type, onClose }) {
  const data = MENU_CONTENT[type];
  if (!data) return null;

  return (
    /* Positioned container — NOT full width, floats under nav */
    <div
      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[92vw] max-w-3xl bg-white border border-gray-100 rounded-xl z-50 overflow-hidden"
      style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)" }}
    >
      {/* Top accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

      <div className="px-6 py-5">
        {/* Tagline */}
        <p className="text-[10px] text-gray-400 uppercase tracking-[2px] font-medium mb-4">
          {data.tagline}
        </p>

        {/* Columns */}
        <div className="flex gap-6">
          {data.cols.map((col, i) => (
            <LinkCol
              key={col.heading}
              col={col}
              isLast={i === data.cols.length - 1 && !data.highlight && !data.press}
              onClose={onClose}
            />
          ))}

          {/* Right panel: press or highlight */}
          {data.press
            ? <PressPanel onClose={onClose} />
            : data.highlight
            ? <HighlightCard item={data.highlight} onClose={onClose} />
            : null}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              onClick={onClose}
              className="text-[10px] text-gray-400 hover:text-gray-700 font-medium transition-colors"
            >
              Become a Volunteer
            </Link>
            <Link
              href={data.cta.href}
              onClick={onClose}
              className="text-[10px] font-bold text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
            >
              {data.cta.label} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white text-[9px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-md transition-colors active:scale-95"
          >
            Get Involved <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}