"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { RiMapPin3Fill, RiMailFill } from "react-icons/ri";
import { TbClockHour3Filled } from "react-icons/tb";

// Define consistent brand colors (can also be imported from tailwind.config)
const redColor = "#ff4c4c";
const yellowColor = "#facc15";
const darkGreenColor = "#15803d";
const blueColor = "#3b82f6";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/coderina-edtech-foundation",
    },
    { icon: <FaFacebookF />, url: "https://web.facebook.com/coderinaedu" },
    { icon: <AiFillInstagram />, url: "https://www.instagram.com/coderinaedu/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/@coderina5977" },
    { icon: <FaXTwitter />, url: "https://x.com/coderina" },
  ];
  return (
    <footer className=" text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Social */}
        <div className="flex flex-col space-y-8 w-full md:w-1/3">
          <Image
            src="/logo.png" // replace with actual path
            alt="Coderina Logo"
            width={180}
            height={40}
            className="object-contain"
          />
          <div className="flex items-center gap-4 text-xl">
            {socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="hover:text-[#facc15] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="space-y-4 text-sm lg:text-base w-full md:w-1/3">
          <h4 className="font-semibold text-lg mb-2">Our Address</h4>
          <div className="flex items-start gap-2">
            <RiMapPin3Fill color={redColor} />
            <p>4 Ngozi Okonjo Iweala Way, Utako District, Abuja</p>
          </div>
          <div className="flex items-start gap-2">
            <RiMapPin3Fill color={redColor} />
            <p>4 Oye Balogun St, Lekki Peninsula II, Lekki, Lagos</p>
          </div>
          <div className="flex items-center gap-2">
            <TbClockHour3Filled color={yellowColor} />
            <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
          <div className="flex items-center gap-2">
            <TbClockHour3Filled color={darkGreenColor} />
            <p>Sat: 10:00 AM - 2:00 PM</p>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4 text-sm lg:text-base w-full md:w-1/3">
          <h4 className="font-semibold text-lg mb-2">Contact</h4>
          <div className="flex items-center gap-2">
            <FaPhoneAlt color={darkGreenColor} />
            <p>+234 909 330 7353 (Call or WhatsApp)</p>
          </div>
          <div className="flex items-center gap-2">
            <RiMailFill color={blueColor} />
            <p>Planning@coderina.org</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6 px-6 md:px-12 lg:px-20 pb-10 text-sm flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <p className="text-[#E6E6E6]">© 2025 Coderina EdTech Foundation. All rights reserved.</p>
        <div className="flex flex-col md:flex-row gap-4 text-[#E6E6E6]">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Accessibility</Link>
          <Link href="#" className="hover:text-white">Information</Link>
          <Link href="/contact" className="hover:text-white">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
