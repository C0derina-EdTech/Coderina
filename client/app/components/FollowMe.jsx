"use client";

import Image from "next/image";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa6";
import logo from "../../public/logo.png";
import Link from "next/link";
const socials = [
  {
    icon: FaFacebookF,
    link: "https://web.facebook.com/coderinaedu",
    label: "Facebook",
  },
  { icon: FaXTwitter, link: "https://x.com/coderina", label: "X" },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/coderinaedu/",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/coderina-edtech-foundation",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@coderina5977",
    label: "Youtube",
  },
  {
    icon: FaEnvelope,
    link: "mailto:hello@coderina.org",
    label: "Email",
  },
];

const FollowMe = () => {
  const iconStyle = "text-color hover:text-gray-300 transition";

  return (
    <div>
      <div className="h-full max-w-md mx-auto mt-10 p-3 md:border md:border-gray-400 text-color2 space-y-7">
        {/* Profile Image */}
        <div className="relative h-80 md:h-72">
          <Image
            src={logo}
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <div className="text-center space-y-4">
          <h1 className="text-lg md:text-xl font-semibold">
            About Coderina EdTech Foundation
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Coderina Education and Technology Foundation is a forward-thinking
            nonprofit committed to equipping young people across Africa with
            essential skills in coding, robotics, and emerging technologies.
            Through hands-on programs, competitions like the FIRST LEGO League,
            and strategic partnerships with schools and communities, Coderina
            fosters innovation, creativity, and problem-solving in learners of
            all backgrounds. By integrating STEAM (Science, Technology,
            Engineering, Arts, and Mathematics) into education, the foundation
            empowers the next generation of changemakers to thrive in the
            digital economy and build solutions that impact their communities
            and the world.
          </p>
        </div>

        {/* Read More Button */}
        <Link
          href="/contact"
          className="block w-48 mx-auto text-center p-3 text-[13px] font-medium bg-social text-color hover:bg-gray-200 transition duration-300"
        >
          READ MORE
        </Link>
      </div>

      {/* follow */}
      <div className=" text-color p-6 md:border md:border-gray-400 max-w-sm mx-auto mt-10">
        <h3 className="text-lg font-semibold text-center mb-4">FOLLOW US</h3>

        <div className="w-12 h-[2px] bg-gray-600 mx-auto relative mb-6 before:absolute before:top-[-5px] before:left-1/2 before:transform before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-b-gray-600" />

        <div className="flex flex-wrap justify-center gap-4">
          {socials.map(({ icon: Icon, link, label }, index) => (
            <a
              key={index}
              href={link}
              aria-label={label}
              className="border border-gray-400 rounded-full p-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className={iconStyle} size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
