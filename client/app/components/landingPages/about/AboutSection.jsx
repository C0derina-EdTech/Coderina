"use client";

import React from "react";
import AboutH from "./AboutH";
import AboutHero from "./AboutHero";
import Team from "./Team";
import Mission from "./Mission";
import Core from "./Core";
import TrustedBy from "../home/TrustedBy";
import Press from "../home/Press";
import Navbar from "../Navbar";
import Footer from "../Footer";
const AboutSection = () => {
  const aboutContents = [
   
    {
      bg: "",
      section: <AboutHero />,
    },
    {
      bg: "",
      section: <Mission />,
    },
     {
      bg: "",
      section: <Core />,
    },
    {
      bg: "",
      section: <AboutH />,
    },
    {
      bg: "",
      section: <Team />,
    },
    {
      bg: "",
      section: <Press />,
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
            <div className="">{section}</div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AboutSection;
