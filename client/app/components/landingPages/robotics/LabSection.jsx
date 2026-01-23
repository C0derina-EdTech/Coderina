"use client";

import React from "react";
import Lab from "./Lab";
import Hero from "./Hero";
import Robotics from "./Robotics";
import TrustedBy from "../home/TrustedBy";
import Coderina3D from "./Coderina3D"
import Solutions from "./Solutions";
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
   
    // {
    //   bg: "",
    //   section: <Lab />,
    // },
     {
      bg: "",
      section: <TrustedBy />,
    },
  
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
