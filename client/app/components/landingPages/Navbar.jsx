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

  // Hide top bar + scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 50);
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Dynamic navbar background by route
  const getNavbarBg = () => {
    if (pathname.startsWith("/events")) return "bg-[#FFF9F0]";
    if (pathname.startsWith("/programs")) return "bg-[#F5F5F5]";
    if (pathname.startsWith("/robotics-lab")) return "bg-[#eef6ff]";
    return scrolled
      ? "bg-white/80 backdrop-blur-md shadow-md"
      : "bg-white";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/events", label: "Events" },
    { href: "/robotics-lab", label: "Robotics Lab" },
  ];

  const socialLinks = [
    { icon: <Youtube />, link: "https://www.youtube.com/@coderina", label: "YouTube" },
    { icon: <Twitter />, link: "https://twitter.com/coderina", label: "Twitter" },
    { icon: <Linkedin />, link: "https://www.linkedin.com/in/coderinaedu", label: "LinkedIn" },
    { icon: <Facebook />, link: "https://www.facebook.com/coderinaedu", label: "Facebook" },
    { icon: <Instagram />, link: "https://www.instagram.com/coderinaedu/", label: "Instagram" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${getNavbarBg()}`}>
      
      {/* TOP INFO BAR */}
      <div
        className={`bg-gray-800 text-white text-sm transition-all duration-500 ${
          showTopBar
            ? "opacity-100 translate-y-0 py-2"
            : "opacity-0 -translate-y-full py-0 pointer-events-none"
        }`}
      >
        <div className="max-w-full 3xl:max-w-[130rem] mx-auto flex justify-between items-center px-2 sm:px-8">
          <div className="flex items-center space-x-4">
            <a href="mailto:hello@coderina.org" className="flex items-center hover:text-gray-200">
              <Mail size={16} className="mr-1" /> hello@coderina.org
            </a>
            <a href="tel:+2349093307353" className="flex items-center hover:text-gray-200">
              <Phone size={16} className="mr-1" /> +234 909 330 7353
            </a>
          </div>

         <div className="hidden md:flex space-x-4 lg:space-x-5">
  {socialLinks.map((social) => (
    <Link
      key={social.label}
      href={social.link}
      target="_blank"
      rel="noreferrer"
      className="
        text-[#fff]
        transition-all
        duration-300
        hover:scale-110
        hover:text-[#e29818]
      "
    >
      <span className="
        [&>svg]:w-4 [&>svg]:h-4
        md:[&>svg]:w-5 md:[&>svg]:h-5
        lg:[&>svg]:w-6 lg:[&>svg]:h-6
        3xl:[&>svg]:w-7 3xl:[&>svg]:h-7
      ">
        {social.icon}
      </span>
    </Link>
  ))}
</div>

        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav>
        <div className="max-w-full 3xl:max-w-[130rem] mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 md:h-12 3xl:h-16">

            {/* LOGO */}
            <div className="flex items-center">
              <div className="relative h-10 w-24 md:h-14 md:w-36">
                <Image
                  src="/coderinaLogo.png"
                  alt="Coderina Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* DESKTOP NAVIGATION (Now visible from tablets) */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-medium text-base transition-colors ${
                      isActive
                        ? "text-[#321414] font-semibold border-b-2 border-[#321414]"
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
              className="hidden md:block bg-[#e29818] px-6 py-2 rounded-full text-black font-semibold hover:bg-[#FFF9F0] transition"
            >
              Contact Us
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden text-[#321414]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          ref={menuRef}
          className={`md:hidden bg-white shadow-md transition-all duration-300 overflow-hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-medium ${
                  pathname === link.href ? "text-[#321414] font-semibold" : "text-[#321414]/80"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
