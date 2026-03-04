"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MegaMenu } from "./MegaMenu";

/* ─────────────────────────────────────────────
   NAV CONFIG
───────────────────────────────────────────── */
const NAV_ITEMS = [
  { label: "Programs", key: "programs" },
  { label: "Solutions", key: "solutions" },
  { label: "Events", key: "events" },
  { label: "Industries", key: "industries" },
  { label: "Company", key: "company" },
  { label: "Newsroom", key: "newsroom" },
];

const MOBILE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "COUCH", href: "/coderina-university-challenge" },
  { label: "Events", href: "/events" },
  { label: "Company", href: "/about" },
  { label: "SIWES ", href: "/coderina-siwes-application" },
  { label: "Newsroom", href: "/newsroom" },
  { label: "Contact", href: "/contact" },
];

/*
  PATH-BASED THEME CONFIG
  Add paths here to override the default transparent→white scroll behaviour.
  - transparent: initial text color before scroll
  - scrolled: bg class when scrolled (defaults to bg-white/95)
  
  Example: "/about" → dark bg, light text
*/
const PATH_THEMES = {
  "/about": { initial: "text-white", bg: "bg-gray-900/95", logoInvert: true },
  "/programs": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/newsroom": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/events": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/coderina-university-challenge": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/about": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/robotics-lab": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
   "/contact": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
    "/coderina-siwes-application": { initial: "text-gray-900", bg: "bg-white/95", logoInvert: false },
  // Default (all other paths): transparent with white text → white bg on scroll
};




/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeTimer = useRef(null);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const getTheme = () => {
  const match = Object.entries(PATH_THEMES).find(([path]) =>
    pathname === path || pathname.startsWith(path + "/")
  );

  return (
    match?.[1] || {
      initial: "text-white",
      bg: "bg-white/95",
      logoInvert: false,
    }
  );
};

const theme = getTheme();

  // const theme = PATH_THEMES[pathname] ?? { initial: "text-white", bg: "bg-white/95", logoInvert: false };
  const isTransparent = !isScrolled && !activeMenu && !mobileOpen;

  /* scroll */
  useEffect(() => {
    const fn = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* outside click */
  useEffect(() => {
    const fn = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setActiveMenu(null);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  /* lock scroll on mobile open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  /* search autofocus */
  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleNavEnter = useCallback((key) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(key);
  }, []);

  const handleNavLeave = useCallback(() => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 100);
  }, []);

  const handleMegaEnter = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const handleClose = useCallback(() => setActiveMenu(null), []);

  /* text color logic */
  const textColor = isTransparent ? theme.initial : "text-gray-800";
  const logoFilter = isTransparent && theme.logoInvert ? "brightness-0 invert" : "";

  
  return (
    <>
      <header
        ref={navRef}
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isTransparent
            ? "bg-transparent"
            : `${theme.bg} backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]`,
          activeMenu ? "bg-white shadow-none" : "",
        ].join(" ")}
      >
        <nav
          aria-label="Primary navigation"
          className="px-2 sm:px-4 lg:px-6 2xl:px-10"
        >
          <div className="flex h-[52px] sm:h-[56px] items-center justify-between gap-4">

            {/* ── Logo + Desktop Links ── */}
            <div className="flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                aria-label="Coderina EdTech — Home"
                className="relative shrink-0 h-8 w-24 sm:h-9 sm:w-28 focus-visible:outline-2 focus-visible:outline-red-600 focus-visible:outline-offset-4 rounded-sm mr-3 xl:mr-6"
              >
                <Image
                  src="/coderinaLogo.png"
                  alt="Coderina EdTech"
                  fill
                  priority
                  sizes="(max-width:640px) 96px, 112px"
                  className={`object-contain transition-all duration-300 ${logoFilter}`}
                />
              </Link>

              {/* Desktop nav */}
              <ul role="list" className="hidden lg:flex items-center gap-0 xl:gap-0.5">
                {NAV_ITEMS.map(({ label, key }) => {
                  const isActive = activeMenu === key;
                  return (
                    <li key={key}>
                      <button
                        onMouseEnter={() => handleNavEnter(key)}
                        onMouseLeave={handleNavLeave}
                        onClick={() => setActiveMenu(isActive ? null : key)}
                        aria-expanded={isActive}
                        aria-haspopup="true"
                        className={[
                          "relative group flex items-center gap-0.5 px-3 xl:px-3.5 py-2 text-[11px] font-semibold tracking-wide rounded transition-colors duration-150 outline-none",
                          "focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
                          isActive
                            ? "text-red-600"
                            : `${textColor} ${isTransparent ? "hover:text-white/100" : "hover:text-gray-900"}`,
                        ].join(" ")}
                      >
                        {/* Active indicator underline */}
                        <span
                          className={[
                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-red-600 rounded-full transition-all duration-200",
                            isActive ? "w-5 opacity-100" : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-60",
                          ].join(" ")}
                        />
                        {label}
                        <svg
                          className={`w-2.5 h-2.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 10 6" stroke="currentColor" strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M1 1l4 4 4-4" />
                        </svg>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-1 sm:gap-2">

              {/* Search */}
              <button
                onClick={() => setSearchOpen((v) => !v)}
                aria-label={searchOpen ? "Close search" : "Open search"}
                className={[
                  "hidden sm:flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200",
                  isTransparent
                    ? `${theme.initial} opacity-80 hover:opacity-100 hover:bg-white/10`
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-100",
                ].join(" ")}
              >
                {searchOpen ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="11" cy="11" r="7.5" />
                    <path strokeLinecap="round" d="M20.5 20.5l-3.85-3.85" />
                  </svg>
                )}
              </button>

             
              {/* CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-1.5 bg-red-600 hover:bg-red-700 active:scale-95 text-white text-[10px] font-bold px-4 py-2 uppercase tracking-widest rounded-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Get Involved
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-drawer"
                className={[
                  "lg:hidden flex flex-col justify-center items-end gap-[4.5px] p-2 rounded transition-colors",
                  isTransparent ? theme.initial : "text-gray-800",
                ].join(" ")}
              >
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "w-5 rotate-45 translate-y-[6px]" : "w-5"}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 ${mobileOpen ? "w-0 opacity-0" : "w-3.5"}`} />
                <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${mobileOpen ? "w-5 -rotate-45 -translate-y-[6px]" : "w-5"}`} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              searchOpen ? "max-h-16 opacity-100 pb-3" : "max-h-0 opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative">
              <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="7.5" />
                <path strokeLinecap="round" d="M20.5 20.5l-3.85-3.85" />
              </svg>
              <input
                ref={searchRef}
                type="search"
                placeholder="Search programs, events, resources…"
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent rounded-sm transition-all"
              />
            </div>
          </div>
        </nav>

        {/* MegaMenu */}
        {activeMenu && (
          <div
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleNavLeave}
            className="hidden lg:block border-t border-gray-100 animate-megamenu-in"
          >
            <MegaMenu type={activeMenu} onClose={handleClose} />
          </div>
        )}

        {/* Backdrop */}
        {activeMenu && (
          <div
            className="hidden lg:block fixed inset-0 top-full bg-black/10 backdrop-blur-[2px] z-40"
            onClick={handleClose}
          />
        )}
      </header>

      {/* ── Mobile Drawer ── */}
      <>
        {/* Overlay */}
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`lg:hidden fixed inset-0 z-[55] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />

        {/* Drawer */}
        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`lg:hidden fixed top-0 right-0 h-full w-[82vw] max-w-[320px] bg-white z-[60] flex flex-col shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 h-14 border-b border-gray-100 shrink-0">
            <Link href="/" onClick={() => setMobileOpen(false)} className="relative h-8 w-24">
              <Image src="/coderinaLogo.png" alt="Coderina EdTech" fill className="object-contain object-left" />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="px-4 py-3 border-b border-gray-100 shrink-0">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="7.5" />
                <path strokeLinecap="round" d="M20.5 20.5l-3.85-3.85" />
              </svg>
              <input
                type="search"
                placeholder="Search…"
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent rounded-md"
              />
            </div>
          </div>

          {/* Links */}
          <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto">
            <ul role="list">
              {MOBILE_LINKS.map((item, i) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between px-5 py-3.5 text-[11px] font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-150 uppercase tracking-widest group border-b border-gray-50"
                    style={{ animationDelay: `${i * 30}ms` }}
                  >
                    {item.label}
                    <svg
                      className="w-3.5 h-3.5 text-gray-300 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all duration-150"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTAs */}
          <div className="px-4 py-4 border-t border-gray-100 shrink-0">
           
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[10px] py-2.5 uppercase tracking-widest transition-all duration-200 rounded-sm"
            >
              Get Involved
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <p className="text-center text-[9px] text-gray-400 uppercase tracking-widest pt-0.5">
              Empowering Africa Through STEM
            </p>
          </div>
        </aside>
      </>

      {/* Spacer */}
      <div className="h-[52px] sm:h-[56px]" aria-hidden="true" />

      
    </>
  );
}