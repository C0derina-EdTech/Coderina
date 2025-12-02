"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();

  // Enhanced scroll effect with smoother transitions
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setShowTopBar(scrollY <= 50);
          setScrolled(scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Dynamic navbar background by route with smooth scrolled state
  const getNavbarBg = () => {
    if (scrolled) {
      return "bg-white/95 backdrop-blur-lg shadow-sm ";
    }
    
    // Default backgrounds per route when not scrolled
    if (pathname === "/") return "bg-gradient-to-br from-[#f5f3ef] via-[#fef9f0] to-[#f9f6f1]";
    if (pathname.startsWith("/events")) return "bg-[#FFF9F0]";
    if (pathname.startsWith("/programs")) return "bg-[#F5F5F5]";
    if (pathname.startsWith("/robotics-lab")) return "bg-[#eef6ff]";
    if (pathname.startsWith("/about")) return "bg-gradient-to-r from-[#fef5e7] to-[#fff8f0]";
    if (pathname.startsWith("/contact")) return "bg-gradient-to-r from-[#f0f9ff] to-[#e0f2fe]";
    return "bg-white";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/robotics-lab", label: "Robotics Lab" },
    { href: "/Contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Youtube, link: "https://www.youtube.com/@coderina", label: "YouTube" },
    { icon: Twitter, link: "https://twitter.com/coderina", label: "Twitter" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/coderinaedu", label: "LinkedIn" },
    { icon: Facebook, link: "https://www.facebook.com/coderinaedu", label: "Facebook" },
    { icon: Instagram, link: "https://www.instagram.com/coderinaedu/", label: "Instagram" },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${getNavbarBg()}`}
    >
      
      {/* TOP INFO BAR with enhanced animations */}
      <div
        className={`bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-white text-xs sm:text-sm transition-all duration-700 ease-in-out ${
          showTopBar
            ? "opacity-100 translate-y-0 h-auto py-2 sm:py-2.5"
            : "opacity-0 -translate-y-full h-0 py-0 pointer-events-none overflow-hidden"
        }`}
      >
        <div className="max-w-[130rem] mx-auto flex justify-between items-center px-2 sm:px-6 lg:px-8 xl:px-10 3xl:px-20">
          
          {/* Contact Info */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6">
            <a 
              href="mailto:hello@coderina.org" 
              className="flex items-center group transition-all duration-300 hover:text-[#e29818]"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px]  mr-1 sm:mr-1.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">hello@coderina.org</span>
            </a>
            <a 
              href="tel:+2349093307353" 
              className="flex items-center group transition-all duration-300 hover:text-[#e29818]"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-[18px] lg:h-[18px] mr-1 sm:mr-1.5 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">+234 909 330 7353</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 xl:space-x-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-white transition-all duration-300 hover:text-[#e29818] hover:scale-110 hover:-translate-y-0.5 active:scale-95"
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="relative">
        <div className="max-w-[130rem] mx-auto px-2 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex justify-between items-center h-14 sm:h-14 ">

            {/* LOGO with smooth scaling */}
            <div className="flex items-center">
              <Link href="/" className="block group">
                <div className="relative h-9 w-20 sm:h-11 sm:w-28 md:h-12 md:w-32 lg:h-14 lg:w-36 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/coderinaLogo.png"
                    alt="Coderina - Empowering Future Innovators"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* DESKTOP NAVIGATION with enhanced animations */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 2xl:space-x-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-3 xl:px-4 2xl:px-5 group"
                  >
                    <span
                      className={`relative text-sm xl:text-base  font-medium transition-all duration-300 ${
                        isActive
                          ? "text-[#321414] font-semibold"
                          : "text-[#321414]/75 group-hover:text-[#321414]"
                      }`}
                    >
                      {link.label}
                      
                      {/* Animated underline */}
                      <span
                        className={`absolute left-0 -bottom-[6px] h-[2px] bg-gradient-to-r from-[#e29818] via-[#f5a623] to-[#e29818] transition-all duration-500 ease-out ${
                          isActive
                            ? "w-full opacity-100"
                            : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                        }`}
                      />
                      
                      {/* Subtle glow effect on hover */}
                      <span
                        className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                          isActive
                            ? "bg-[#e29818]/5"
                            : "bg-transparent group-hover:bg-[#e29818]/5"
                        }`}
                      />
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* CTA Button with enhanced styling */}
            {/* <Link
              href="/contact"
              className="hidden lg:block relative overflow-hidden bg-gradient-to-r from-[#e29818] to-[#f5a623] px-5 xl:px-6 2xl:px-8 py-2 xl:py-2.5 2xl:py-3 rounded-lg text-sm xl:text-base 2xl:text-lg font-semibold text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#f5a623] to-[#e29818] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link> */}

            {/* MOBILE TOGGLE with smooth animation */}
            <button
              className="lg:hidden text-[#321414] p-2 rounded-lg transition-all duration-300 hover:bg-black/5 active:scale-90"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 sm:w-7 sm:h-7">
                <Menu 
                  className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                    menuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X 
                  className={`absolute inset-0 w-full h-full transition-all duration-300 ${
                    menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU with enhanced animations */}
        <div
          ref={menuRef}
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl shadow-2xl border-t border-gray-100 transition-all duration-500 ease-out ${
            menuOpen 
              ? "opacity-100 translate-y-0 pointer-events-auto" 
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-3.5 rounded-xl text-base sm:text-lg font-medium transition-all duration-300 group ${
                      isActive
                        ? "text-[#321414] bg-gradient-to-r from-[#e29818]/10 to-[#f5a623]/10 font-semibold"
                        : "text-[#321414]/75 hover:text-[#321414] hover:bg-gray-50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#e29818] to-[#f5a623] rounded-r-full" />
                    )}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-[#e29818] to-[#f5a623] px-6 py-3.5 rounded-full text-center text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Social Links */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3">Connect with us</p>
              <div className="flex justify-center space-x-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-[#321414]/60 hover:text-[#e29818] transition-all duration-300 hover:scale-110 active:scale-95"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}