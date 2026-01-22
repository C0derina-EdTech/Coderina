

"use client";

import React from "react";
import SiwesForms from "./SiwesForms";

const SiwesSection = () => {
  const siwesContents = [

    {
        color: "",
        section: <SiwesForms/>,
      },
       
  ];
  return (
    <div className="">
        
      <div>
        {siwesContents.map(({ color, section, isGradient, bgImage }, index) => (
          <div
            key={index}
            className={`scroll-smooth ${
              isGradient ? "bg-linear-to-br from-[#321414] to-[#fbeee9]" : ""
            }`}
            style={{
              background: isGradient ? undefined : color,
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

export default SiwesSection;
