"use client";

import React from "react";
import Lab from "./Lab";
import LabHero from "./LabHero";
import RoboticsHero from "./RoboticsHero";
import Features from "./Features";
import TrustedBy from "../home/TrustedBy";
const LabSection = () => {
  const aboutContents = [
    {
      bg: "",
      section: <LabHero/>,
    },
     {
      bg: "",
      section: <RoboticsHero/>,
    },
    {
      bg: "",
      section: <Features/>,
    },
    // {
    //   bg: "",
    //   section: <Lab />,
    // },
    //  {
    //   bg: "",
    //   section: <TrustedBy />,
    // },
  
  ];

  return (
    <div>
    
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

   
    </div>
  );
};

export default LabSection;
