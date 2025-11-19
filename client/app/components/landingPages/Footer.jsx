"use client";
import React, { useState } from "react";
import {
  Twitter,
  Youtube,
  Linkedin,
  Facebook,
  Instagram,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import profile from "../../../public/coderinaLogo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormContext } from "../contexts/FormContext";
const Footer = () => {
  const {
    subscriberName,
    setSubscriberName,
    subscriberEmail,
    setSubscriberEmail,
    subscriberSubmitting,
    subscriberSuccess,
    subscriberError,
    addSubscriber,
  } = useFormContext();
  const [email, setEmail] = useState("");
  const pathname = usePathname();

  // ✅ Dynamic color scheme by route
  let bgColor = "bg-white";
  let textColor = "text-gray-800";
  let subTextColor = "text-gray-600";
  let accentColor = "text-[#321414]";
  let borderColor = "border-gray-100";

  if (pathname.startsWith("/programs") || pathname.startsWith("/events")) {
    bgColor = "bg-black";
    textColor = "text-white";
    subTextColor = "text-gray-300";
    accentColor = "text-white";
    borderColor = "border-gray-800";
  } else if (pathname.startsWith("/about")) {
    bgColor = "bg-[#f8fafc]";
    accentColor = "text-[#e29818]";
  } else if (pathname.startsWith("/even")) {
    bgColor = "bg-[#321414]";
    textColor = "text-white";
    subTextColor = "text-gray-300";
    accentColor = "text-[#e29818]";
  }

  // ✅ Social links
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/company/coderina-edtech-foundation",
    },
    {
      icon: <Facebook size={20} />,
      url: "https://web.facebook.com/coderinaedu",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/coderinaedu/",
    },
    {
      icon: <Youtube size={20} />,
      url: "https://www.youtube.com/@coderina5977",
    },
    { icon: <Twitter size={20} />, url: "https://x.com/coderina" },
  ];

  // ✅ Programs list (nowrap on large screens)
  const programs = [
    "FIRST LEGO League (FLL)",
    "FIRST Tech Challenge (FTC)",
    "FIRST Robotics Competition (FRC)",
    "AI & Data Science Bootcamp",
    "Web Development",
    "Mobile App Development",
    "Game Development",
    "Cybersecurity & Ethical Hacking",
    "Robotics & IoT",
    "STEAM Teacher Training",
    "Girls in STEAM (Her e-STEAM)",
    "Design Thinking & Innovation",
    "Coding for Kids",
    "Digital Skills for Educators",
    "Career Mentorship Programs",
  ];

  const footerSections = [
    {
      title: "Organization",
      items: [
        { label: "About Coderina", href: "/about" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Contact Us", href: "/contact" },
        { label: "Programs", href: "/programs" },
        { label: "Events", href: "/events" },
      ],
    },
  ];

  // ✅ Contact Info (Added Lagos address)
  const contactInfo = [
    {
      icon: <MapPin />,
      label: "Head Office (Abuja)",
      value: "4 Ngozi Okonjo Iweala Way, Utako District, Abuja, Nigeria",
    },
    {
      icon: <MapPin />,
      label: "Lagos Office",
      value: " 4 Oye Balogun St, Lekki Peninsula II, Lekki, Lagos, Nigeria",
    },
    {
      icon: <Mail />,
      label: "Email",
      value: "esteam@coderina.org",
      href: "mailto:esteam@coderina.org",
    },
    {
      icon: <Phone />,
      label: "Phone",
      value: "+234 909 330 7353",
      href: "tel:+2349093307353",
    },
  ];

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // set subscriber context values
    setSubscriberEmail(email);
    setSubscriberName(""); // optional, no name field in footer
    await addSubscriber();
    setEmail(""); // clear local input
  };

  return (
    <footer
      role="contentinfo"
      className={`${bgColor} ${textColor} border-t ${borderColor}`}
    >
      <div className="max-w-[130rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
          {/* ✅ Left Column */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative h-16 w-52 md:h-20 md:w-64 rounded-md overflow-hidden">
                <Image
                  src={profile}
                  alt="Coderina Education and Technology Foundation logo"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <p
              className={`text-sm sm:text-base lg:text-lg ${subTextColor} leading-relaxed`}
            >
              Coderina Education and Technology Foundation is a not-for-profit
              organization that equips young Africans with 21st-century skills
              through robotics, AI, coding, and digital learning programs.
            </p>
            <p
              className={`text-sm sm:text-base lg:text-lg ${subTextColor} leading-relaxed`}
            >
              Our platforms enables learners to build, create, and solve
              real-world problems while preparing for global opportunities.
            </p>

            <div>
              <h4 className={`font-semibold ${accentColor} text-lg mb-3`}>
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map(({ icon, url, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      pathname.startsWith("/programs") ||
                      pathname.startsWith("/events")
                        ? "bg-white/10 hover:bg-white/20 text-white"
                        : "bg-gray-100 hover:bg-[#321414] text-gray-600 hover:text-white"
                    }`}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Middle Column - Navigation & Programs (no wrapping) */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 whitespace-nowrap">
              {[
                ...footerSections,
                {
                  title: "Programs",
                  items: programs.map((p) => ({
                    label: p,
                    href: `/programs/${p.toLowerCase().replace(/\s+/g, "-")}`,
                  })),
                },
              ].map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className={`font-semibold ${accentColor} text-lg`}>
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.href}
                          className={`text-sm sm:text-base ${subTextColor} hover:${accentColor} transition-colors duration-200 hover:underline`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ✅ Right Column - Contact & Newsletter */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-8">
            <div>
              <h4 className={`font-semibold ${accentColor} text-lg mb-4`}>
                Contact Info
              </h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-5 h-5 ${accentColor} mt-1`}>
                      {contact.icon}
                    </div>
                    <div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className={`text-sm sm:text-base ${subTextColor} hover:${accentColor} transition-colors duration-200`}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className={`text-sm sm:text-base ${subTextColor}`}>
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Newsletter */}
            {/* ✅ Newsletter */}
            <div>
              <h4 className={`font-semibold ${accentColor} text-lg mb-3`}>
                Newsletter
              </h4>
              <p className={`${subTextColor} mb-3 text-sm sm:text-base`}>
                Subscribe to get the latest updates.
              </p>

              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:border-[#e29818]"
                  required
                />
                <button
                  type="submit"
                  disabled={subscriberSubmitting}
                  className="bg-[#e29818] px-4 py-2 rounded-r-lg hover:bg-[#d48b16] transition disabled:opacity-50"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </form>

              {/* ✅ Display subscriber messages */}
              {subscriberSuccess && (
                <p className="mt-2 text-green-600 text-sm">
                  {subscriberSuccess}
                </p>
              )}
              {subscriberError && (
                <p className="mt-2 text-red-600 text-sm">{subscriberError}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Bottom Bar */}
      <div
        className={`${
          pathname.startsWith("/programs") || pathname.startsWith("/events")
            ? "border-t border-white/10 bg-black/90"
            : "border-t border-gray-200 bg-gray-50"
        }`}
      >
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 md:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className={`text-xs sm:text-sm ${subTextColor}`}>
              © 2025 Coderina Education and Technology Foundation. All rights
              reserved.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
              <Link
                href="#"
                className={`${subTextColor} hover:${accentColor}`}
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className={`${subTextColor} hover:${accentColor}`}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className={`${subTextColor} hover:${accentColor}`}
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
