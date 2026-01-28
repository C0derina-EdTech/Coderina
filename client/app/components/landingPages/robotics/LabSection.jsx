"use client";

import React from "react";
import Lab from "./Lab";
import Hero from "./Hero";
import Robotics from "./Robotics";
import LabHero from "./LabHero";
import RoboticsHero from "./RoboticsHero";
import Features from "./Features";
import TrustedBy from "../home/TrustedBy";
import Coderina3D from "./Coderina3D"
import Solutions from "./Solutions";
import Navbar from "../Navbar";
import Footer from "../Footer";
const LabSection = () => {
  const aboutContents = [
  
    {
      bg: "",
      section: <Hero/>,
    },

       {
      bg:"",
      section:<Coderina3D/>,
    },
       {
      bg:"",
      section:<Solutions/>,
    },
     {
      bg: "",
      section: <Robotics/>,
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

   <Footer/>
    </div>
  );
};

export default LabSection;
