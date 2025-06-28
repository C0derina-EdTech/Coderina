"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaSun,
  FaMoon,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { TbMenu3 } from "react-icons/tb";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import log2 from "../../public/coderinaLogo.png";
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.startsWith("/Media/")
    ? pathname.split("/Media/")[1]
    : null;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [display, setDisplay] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Programs", path: "/programs" },
    { label: "Events", path: "/events" },
  ];
  const link = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Programs", path: "/programs" },
    { label: "Events", path: "/events" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com/coderinaedu" },
    { icon: <FaTwitter />, url: "https://twitter.com/coderina" },
    {
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com/in/coderina-edtech-foundation",
    },
    { icon: <FaInstagram />, url: "https://instagram.com/coderinaedu" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@coderina5977" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // you can adjust the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const validPaths = [
      "/",
      "/about",
      "/contact",
      "/posts",
      "/category",
      "/privacy-policy",
      "/what",
      "/events",
      "/form",
      "/firstlego",
      "/couch",
      "/project-fair",
      "/programs",
      "/firstlegoleague",
      "/sign-in",
      "/not-found",
      "/404",
    ];

    const isMediaPath = id && pathname === `/Media/${id}`;

    const isPostSlugPath =
      (pathname?.startsWith("/posts/") || pathname.startsWith("/category/")) &&
      pathname.split("/").length === 3;

    const archiveRegex = /^\/\d{4}\/\d{2}$/;
    const isArchivePath = archiveRegex.test(pathname);

    const isValid =
      validPaths.includes(pathname) ||
      isMediaPath ||
      isPostSlugPath ||
      isArchivePath;

    setDisplay(isValid);
  }, [pathname, id]);
  const transparentPaths = ["/"];
  const isTransparentPath = transparentPaths.includes(pathname);

  const activeLink =
    "text-[#FBB12F] flex items-center justify-center space-x-1 text-[16px] font-normal relative after:content-[''] after:bg-[#FBB12F] after:h-[4px] after:w-[100%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute";
  const normalLink =
    "relative flex text-[#232323] items-center justify-center space-x-1 tracking-[1px] text-[16px] font-normal leading-[20px] hover:text-[#6b4343] after:content-[''] after:bg-[#FBB12F] after:h-[4px] after:w-[0%] after:left-0 after:bottom-[-12px] after:rounded-xl after:absolute after:duration-300 hover:after:w-[100%]";

  return display ? (
    <motion.div
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${
        isTransparentPath
          ? isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="flex items-center  justify-between py-4 md:py-3 px-4 md:px-6 lg:px-12">
        {/* Logo */}
        <div className="relative h-14 w-24 sm:w-36 rounded-md">
          <Image
            src={log2}
            alt="logo"
            fill
            className="rounded-lg object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center justify-center">
          {links.map(({ label, path }, index) => (
            <Link
              key={index}
              href={path}
              className={pathname === path ? activeLink : normalLink}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map(({ icon, url }, idx) => (
              <Link
                key={idx}
                href={url}
                target="_blank"
                className="hover:text-blue-500 text-[#232323] text-[13px] sm:text-[15px] transition"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden text-2xl text-color"
          >
            {/* <GiHamburgerMenu /> */}
            <TbMenu3 />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full sm:w-1/2 h-screen bg-background text-color shadow-lg z-[100] p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-lg font-semibold"></h2>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-4xl"
              >
                x
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center space-y-5">
              {link.map(({ label, path }, i) => (
                <Link
                  key={i}
                  href={path}
                  onClick={() => setIsDrawerOpen(false)}
                  className="text-color text-xl transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-4 mt-10">
              {socialLinks.map(({ icon, url }, idx) => (
                <Link
                  key={idx}
                  href={url}
                  target="_blank"
                  className="text-color text-lg hover:text-blue-500"
                >
                  {icon}
                </Link>
              ))}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.div>
  ) : null;
};

export default Navbar;
