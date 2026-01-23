"use client";
import React from "react";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Loader,
 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFormContext } from "../contexts/FormContext";

const Footer = () => {
  const pathname = usePathname();

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

  // Dynamic color configuration based on pathname
  let bgColor = "bg-white";
  let textColor = "text-gray-800";
  let subTextColor = "text-gray-600";
  let inputBg = "bg-white";
  let inputBorder = "border-gray-300";
  let inputText = "text-gray-900";
  let borderColor = "border-gray-200";
  let buttonBg = "bg-linear-to-b from-teal-900 to-teal-700";
  let buttonHoverBg = "bg-black";

  if (pathname?.startsWith("/programs") || pathname?.startsWith("/events")) {
    bgColor = "bg-black";
    textColor = "text-white";
    subTextColor = "text-gray-300";
    inputBg = "bg-gray-800";
    inputBorder = "border-gray-600";
    inputText = "text-white";
    borderColor = "border-gray-700";
  } else if (pathname?.startsWith("/about")) {
    bgColor = "bg-gray-50";
  }

  const socialLinks = [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/coderina-edtech-foundation",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      url: "https://web.facebook.com/coderinaedu",
      label: "Facebook",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/coderinaedu/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      url: "https://www.youtube.com/@coderina5977",
      label: "YouTube",
    },
    { icon: Twitter, url: "https://x.com/coderina", label: "Twitter" },
  ];

  const navigationLinks = [
    { label: "Upcoming Events", url: "/events" },
    { label: "National & Global Summits", url: "/events" },
    { label: "Workshops & Bootcamps", url: "/programs" },
    { label: "Tech Outreach Programs", url: "/programs" },
    { label: "View all events →", url: "/events" },
  ];

  const skillsLinks = [
    { label: "SIWES 2026 Internship", url: "/coderina-siwes-application" },
    { label: "Robotics & AI Programs", url: "/events" },
    { label: "Checkmate", url: "/programs" },
    { label: "e-STEAM Coderina", url: "https://www.esteamcoderina.org" },
    { label: "Coderina University Challenge (COUCH)", url: "/couch" },
  ];

  const standardsLinks = [
    { label: "About Coderina", url: "/about" },
    {
      label: "Teach on e-STEAM",
      url: "https://www.esteamcoderina.org/teach-on-esteam",
    },
    { label: "Partners & Sponsors", url: "/contact" },
    { label: "Contact Us", url: "/contact" },
  ];

  const contactInfo = [
    {
      label: "Head Office (Abuja)",
      value: "4 Ngozi Okonjo Iweala Way, Utako District, Abuja, Nigeria",
    },
    {
      label: "Lagos Office",
      value: "4 Oye Balogun St, Lekki Peninsula II, Lekki, Lagos, Nigeria",
    },
    {
      label: "Email",
      value: "hello@coderina.org",
      href: "mailto:hello@coderina.org",
    },
    {
      label: "Phone",
      value: "+234 909 330 7353",
      href: "tel:+2349093307353",
    },
  ];

  const handleSubscribe = async () => {
    if (!subscriberName || !subscriberEmail) return;
    await addSubscriber();
  };

  return (
    <footer
      className={`${bgColor} ${textColor} transition-colors duration-300`}
    >
      {/* Newsletter Section */}
      <div className={`border-t border-b ${borderColor}`}>
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">
                Join the Coderina Community
              </h3>
              <p className={`${subTextColor}`}>
                Empowering learners through technology, innovation & digital
                skills
              </p>
            </div>

            <div className="flex flex-col items-center text-sm w-full md:w-auto">
              <div className="flex flex-col md:flex-row w-full gap-2">
                <input
                  type="text"
                  value={subscriberName}
                  onChange={(e) => setSubscriberName(e.target.value)}
                  placeholder="Your name"
                  className={`${inputBg} ${inputBorder} ${inputText} w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-100 w-48`}
                />
                <input
                  type="email"
                  value={subscriberEmail}
                  onChange={(e) => setSubscriberEmail(e.target.value)}
                  placeholder="Your email"
                  className={`${inputBg} ${inputBorder} ${inputText} w-full px-4 py-2.5 rounded-md border focus:outline-none focus:ring-2 focus:ring-gray-100 w-64`}
                />
                <button
                  onClick={handleSubscribe}
                  disabled={subscriberSubmitting}
                  className={`${buttonBg} hover:${buttonHoverBg} text-white px-6 py-2.5 rounded-md font-medium transition-colors disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {subscriberSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader className="h-4 w-4 animate-spin" />
                      Subscribing...
                    </span>
                  ) : subscriberSuccess ? (
                    "Subscribed!"
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </div>
              {subscriberError && (
                <p className="mt-2 text-sm text-red-500 text-center md:text-left">
                  {subscriberError}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 2xl:gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Events</h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className={`${subTextColor} hover:text-teal-700 transition-colors text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2.5">
              {skillsLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className={`${subTextColor} hover:text-teal-700 transition-colors text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Foundation</h4>
            <ul className="space-y-2.5">
              {standardsLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.url}
                    className={`${subTextColor} hover:text-teal-700 transition-colors text-sm`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5">
              {contactInfo.map((item, idx) => (
                <li key={idx}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`${subTextColor} hover:text-teal-700 transition-colors text-sm`}
                    >
                      {item.value}
                    </Link>
                  ) : (
                    <span className={`${subTextColor} text-sm`}>
                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`${subTextColor} hover:text-teal-600 transition-colors`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`pt-8 border-t ${borderColor} flex flex-col sm:flex-row justify-between items-center gap-4`}
        >
          <p className={`${subTextColor} text-sm`}>
            © Coderina Education & Technology Foundation{" "}
            {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className={`${subTextColor} hover:text-teal-600 text-sm transition-colors`}
            >
             Become a Volunteer
            </Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
