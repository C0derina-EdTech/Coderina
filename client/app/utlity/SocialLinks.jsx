"use client"

import Link from 'next/link';
import React from 'react'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
  FaYoutube
} from "react-icons/fa";
const SocialLinks = () => {

      const socialLinks = [
        { icon: <FaFacebookF />, url: "https://facebook.com/coderinaedu" },
        { icon: <  FaTwitter/>, url: "https://twitter.com/coderina" },
        { icon: <FaLinkedinIn />, url: "https://linkedin.com/in/coderina-edtech-foundation" },
        { icon: <FaInstagram />, url: "https://instagram.com/coderinaedu" },
      //  { icon: <FaYoutube />, url: "https://www.youtube.com/@coderina5977" },
      ];
  return (
    <div className='fixed top-1/2 left-0 transform -translate-y-1/2 space-y-4 pl-2 z-50'>  
    <nav className="flex flex-col gap-[0.8px] bg-foreground items-center ">
    {socialLinks.map((social, index) => (
      <Link
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[12px] p-4 hover:text-blue-500 transition bg-social text-socialT"
       
      >
        {social.icon}
      </Link>
    ))}
  </nav>
  </div>
  )
}

export default SocialLinks