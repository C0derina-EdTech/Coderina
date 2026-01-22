"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { MegaMenu } from "../MegaMenu";
import AOS from "aos";
import "aos/dist/aos.css";

const NAV_ITEMS = [
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "solutions", label: "Solutions", href: "/solutions" },
  { key: "events", label: "Events", href: "/events" },
  { key: "industries", label: "Industries", href: "/industries" },
  { key: "company", label: "Company", href: "/about" },
  { key: "resources", label: "Resources", href: "/resources" },
];

const NAV = [
  { key: "home", label: "Home", href: "/" },
  { key: "programs", label: "Programs", href: "/programs" },
  { key: "solutions", label: "Coderina Blog", href: "/blog" },
  { key: "events", label: "Events", href: "/events" },
  { key: "industries", label: "Robotics Lab", href: "/robotics-lab" },
  { key: "company", label: "Company", href: "/about" },
  { key: "resources", label: "COUCH", href: "/couch" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimeout = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  /** Desktop mega menu logic */
  const openMenu = (key) => {
    clearTimeout(closeTimeout.current);
    setActiveMenu(key);
  };

  const closeMenu = () => {
    closeTimeout.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  /** Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isHome = pathname === "/";
const [heroVisible, setHeroVisible] = useState(true);

useEffect(() => {
  if (!isHome) return;

  const hero = document.getElementById("home-hero");
  if (!hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      setHeroVisible(entry.isIntersecting);
    },
    {
      root: null,
      threshold: 0.15, // hero must be at least 15% visible
    }
  );

  observer.observe(hero);

  return () => observer.disconnect();
}, [isHome]);


  /** Dynamic background per route */
  const navbarBg = isHome
  ? heroVisible
    ? "bg-transparent"
    : "bg-white shadow-sm"
  : "bg-white";


  // const navbarBg = (() => {
  //   if (pathname === "/") return "bg-white";
  //   if (pathname.startsWith("/programs")) return "bg-[#F5F5F5]";
  //   if (pathname.startsWith("/events")) return "bg-white";
  //   if (pathname.startsWith("/about"))
  //     return "bg-white";
  //   return "bg-white";
  // })();

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ease-out
    ${navbarBg}
  `}>
      <nav
        className="relative mx-auto max-w-400 px-4 sm:px-6 lg:px-8"
        onMouseLeave={closeMenu}
        aria-label="Primary Navigation"
      >
        <div className="flex h-14 2xl:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Coderina Home">
           <Image
  src={
    isHome && heroVisible
      ? "/coderinaLogo.png"
      : "/coderinaLogo.png"
  }
  alt="Coderina EdTech – Empowering Future Innovators"
  width={130}
  height={48}
  priority
  className="object-contain transition-all duration-300"
/>


          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold">
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
               <button
  onMouseEnter={() => openMenu(item.key)}
  className={`relative text-xs font-bold 2xl:text-sm transition-colors duration-300 ${
    activeMenu === item.key
      ? "text-teal-900"
      : isHome && heroVisible
  ? "text-white/90 hover:text-white"
  : "text-gray-700 hover:text-gray-900"

  }`}
>
  {item.label}
</button>

              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search
  className={`w-5 h-5 transition-colors duration-300 ${
    isHome && heroVisible ? "text-white" : "text-gray-700"

  }`}
/>

            </button>

            <button className="hidden sm:block text-xs font-bold 2xl:text-sm">
              Support
            </button>

            <Link
              href="/contact"
              className="rounded-full bg-linear-to-b from-teal-900 to-teal-700 px-5 py-2 text-white text-xs font-bold 2xl:text-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mega Menu (Desktop) */}
        {activeMenu && (
          <MegaMenu
            type={activeMenu}
            onMouseEnter={() => openMenu(activeMenu)}
          />
        )}
      </nav>

      {/* ================= MOBILE NAV OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-60 transition-opacity lg:hidden duration-500 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Off-canvas Menu */}
        <aside
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between px-6 h-14 border-b">
           <div className="relative h-16 w-16">
             <Image
              src="/coderinaLogo.png"
              alt="Coderina"
              fill
              className="object-contain"
            />
           </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="px-6 pt-8 space-y-6">
            {NAV.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                data-aos="fade-left"
                data-aos-delay={i * 80}
                className="block text-sm font-semibold text-gray-900 hover:text-teal-800 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-8 border-t space-y-4">
              <Link
                href="/support"
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold text-gray-600 hover:text-gray-900"
                data-aos="fade-up"
              >
                Support
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                data-aos="fade-up"
                className="inline-flex items-center justify-center w-full rounded-full bg-linear-to-b from-teal-900 to-teal-700 px-6 py-3 text-white font-bold text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
