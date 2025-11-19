"use client";

import React from "react";
import AboutH from "./AboutH";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TrustedBy from "../home/TrustedBy";
const AboutSection = () => {
  const aboutContents = [
    {
      bg: "",
      section: <AboutH />,
    },
     {
      bg: "",
      section: <TrustedBy />,
    },
  
  ];

  return (
    <div>
      <Navbar/>
      <div>
        {aboutContents.map(({ bg, section, color, bgImage }, index) => (
          <div
            key={index}
            className={`scroll-smooth ${bg}`}
            style={{
              background: color || undefined,
              backgroundImage: bgImage ? `url(${bgImage.src})` : undefined,
              backgroundSize: bgImage ? "cover" : undefined,
              backgroundPosition: bgImage ? "center" : undefined,
            }}
          >
            <div className="">
              {section}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AboutSection;
