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

const Footer = ({ isLargeScreen }) => {
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

  const socialLinks = [
    {
      icon: <Linkedin />,
      url: "https://www.linkedin.com/company/coderina-edtech-foundation",
    },
    { icon: <Facebook />, url: "https://web.facebook.com/coderinaedu" },
    { icon: <Instagram />, url: "https://www.instagram.com/coderinaedu/" },
    { icon: <Youtube />, url: "https://www.youtube.com/@coderina5977" },
    { icon: <Twitter />, url: "https://x.com/coderina" },
  ];

  const programs = [
    "FIRST LEGO League (FLL)",
    "FIRST Tech Challenge (FTC)",
    "FIRST Robotics Competition (FRC)",
    "AI & Data Science Bootcamp",
    "Web Development",
    "Mobile App Development",
    "Game Development",
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

  const contactInfo = [
    {
      icon: <MapPin />,
      label: "Head Office (Abuja)",
      value: "4 Ngozi Okonjo Iweala Way, Utako District, Abuja, Nigeria",
    },
    {
      icon: <MapPin />,
      label: "Lagos Office",
      value: "4 Oye Balogun St, Lekki Peninsula II, Lekki, Lagos, Nigeria",
    },
    {
      icon: <Mail />,
      label: "Email",
      value: "hello@coderina.org",
      href: "mailto:hello@coderina.org",
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
    setSubscriberEmail(email);
    setSubscriberName("");
    await addSubscriber();
    setEmail("");
  };

  return (
    <footer
      role="contentinfo"

      className={`${bgColor} ${textColor} border-t ${borderColor} rounded-t-full`}
    >
      <div className="overflow-hidden max-w-400 mx-auto px-2 sm:px-4 md:px-6 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-5 space-y-6">
            <div className="relative h-16 w-48 ">
              <Image
                src={profile}
                alt="Coderina logo"
                fill
                className="object-contain"
              />
            </div>

            <p
              className={`${subTextColor} text-sm sm:text-base leading-relaxed max-w-full ${isLargeScreen ? "text-xl" : "lg:text-sm"}`}
            >
              Coderina Education and Technology Foundation is a not-for-profit
              organization that equips young Africans with 21st-century skills
              through robotics, AI, coding, and digital learning programs.
            </p>

            <p
              className={`${subTextColor} text-sm sm:text-base leading-relaxed max-w-full ${isLargeScreen ? "text-xl" : "md:text-base lg:text-sm"}`}
            >
              Our platforms enable learners to build, create, and solve
              real-world problems while preparing for global opportunities.
            </p>

            <div>
              <h4
                className={`font-semibold ${accentColor} text-base  mb-3 ${isLargeScreen ? "text-xl" : "md:text-base lg:text-sm"}`}
              >
                Follow Us
              </h4>

              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map(({ icon, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="flex items-center justify-center rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 2xl:w-12 2xl:h-12 bg-gray-100 hover:bg-black transition"
                  >
                    <span className="[&>svg]:w-4 sm:[&>svg]:w-5 md:[&>svg]:w-5 lg:[&>svg]:w-6 2xl:[&>svg]:w-7">
                      {icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-4">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:whitespace-nowrap">
              {[
                ...footerSections,
                {
                  title: "Programs",
                  items: programs.map((p) => ({ label: p })),
                },
              ].map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h4
                    className={`font-semibold ${accentColor} text-base sm:text-lg  ${isLargeScreen ? "text-2xl" : "lg:text-lg"}`}
                  >
                    {section.title}
                  </h4>

                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <p
                          className={`${subTextColor} text-xs sm:text-sm ${isLargeScreen ? "text-xl" : "md:text-base lg:text-sm"}`}
                        >
                          {item.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-3 space-y-8">
            <div>
              <h4
                className={`font-semibold ${accentColor} text-base sm:text-lg  mb-4  ${isLargeScreen ? "text-2xl" : "lg:text-lg"}`}
              >
                Contact Info
              </h4>

              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="[&>svg]:w-4 sm:[&>svg]:w-5 lg:[&>svg]:w-6 2xl:[&>svg]:w-7">
                      {contact.icon}
                    </span>
                    <p
                      className={`${subTextColor} text-xs sm:text-sm  ${isLargeScreen ? "text-xl" : "md:text-base lg:text-sm"}`}
                    >
                      {contact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4
                className={`font-semibold ${accentColor} text-base sm:text-lg  ${isLargeScreen ? "text-2xl" : "lg:text:lg"} mb-3`}
              >
                Newsletter
              </h4>

              <p
                className={`${subTextColor} text-xs sm:text-sm md:text-base  ${isLargeScreen ? "text-xl" : "lg:text-sm"} mb-3`}
              >
                Subscribe to get the latest updates.
              </p>

              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-sm sm:text-base lg:text-sm 2xl:text-lg rounded-l-lg border"
                />
                <button className="bg-[#e29818] px-4 py-2 rounded-r-lg">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6 text-white" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-[100rem] mx-auto px-2 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p
            className={`${subTextColor} text-xs sm:text-sm md:text-base lg:text-sm 2xl:text-lg`}
          >
            © 2025 Coderina Education and Technology Foundation. All rights
            reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm md:text-base lg:text-sm 2xl:text-lg">
            <Link href="#" className={`${subTextColor}`}>
              Terms of Service
            </Link>
            <Link href="#" className={`${subTextColor}`}>
              Privacy Policy
            </Link>
            <Link href="#" className={`${subTextColor}`}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
