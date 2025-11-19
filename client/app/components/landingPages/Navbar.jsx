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

  // ✅ Hide top bar + detect scroll for navbar shadow/blur
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Updated nav links
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/robotics-lab", label: "Robotics Lab" },
  ];

  const socialLinks = [
    {
      icon: <Youtube />,
      link: "https://www.youtube.com/@coderina",
      label: "YouTube",
    },
    {
      icon: <Twitter />,
      link: "https://twitter.com/coderina",
      label: "Twitter",
    },
    {
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/coderinaedu",
      label: "LinkedIn",
    },
    {
      icon: <Facebook />,
      link: "https://www.facebook.com/coderinaedu",
      label: "Facebook",
    },
    {
      icon: <Instagram />,
      link: "https://www.instagram.com/coderinaedu/",
      label: "Instagram",
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md bg-white/80 shadow-md" : "bg-white"
      }`}
    >
      {/*Top Info Bar*/}
      <div
        className={`bg-gray-800 text-white text-sm sm:text-base transition-all duration-500 ${
          showTopBar
            ? "opacity-100 translate-y-0 py-2"
            : "opacity-0 -translate-y-full py-0 pointer-events-none"
        }`}
      >
        <div className="max-w-[130rem] mx-auto flex justify-between items-center px-4 sm:px-8">
          <div className="flex items-center space-x-4">
            <a
              href="mailto:hello@coderina.org"
              className="flex items-center hover:text-gray-200 transition"
            >
              <Mail size={18} className="mr-1" /> hello@coderina.org
            </a>
            <a
              href="tel:+2349093307353"
              className="flex items-center hover:text-gray-200 transition"
            >
              <Phone size={18} className="mr-1" /> +234 909 330 7353
            </a>
          </div>

          <div className="hidden md:flex space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-200 transition-transform transform hover:scale-110"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Main Navbar */}
      <nav
        className={`transition-all duration-500 ${
          showTopBar ? "mt-0" : "mt-0"
        }`}
      >
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative h-14 w-28 md:h-20 md:w-44">
                <Image
                  src="/coderinaLogo.png"
                  alt="Coderina Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors font-medium text-lg ${
                      isActive
                        ? "text-[#321414] font-semibold border-b-2 border-[#321414] pb-1"
                        : "text-[#321414]/80 hover:text-[#321414]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="hidden lg:block bg-[#e29818] text-black px-8 py-3 rounded-full hover:bg-[#FFF9F0] transition-all duration-300 text-lg font-semibold shadow-sm"
            >
              Contact Us
            </Link>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-[#321414] hover:text-[#4a2020] transition"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown */}
        <div
          ref={menuRef}
          className={`lg:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[#321414] font-semibold"
                    : "text-[#321414]/80 hover:text-[#321414]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/account-access"
              onClick={() => setMenuOpen(false)}
              className="bg-[#321414] text-white px-6 py-3 rounded-full hover:bg-[#4a2020] transition duration-300 font-semibold text-center"
            >
              Get Started Free
            </Link>

            {/* Socials for Mobile */}
            <div className="flex justify-center space-x-5 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#321414] hover:text-[#4a2020] transition-transform transform hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
