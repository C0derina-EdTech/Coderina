

"use client";

import React from "react";
import SiwesForms from "./SiwesForms";
import Navbar from "../Navbar";
import Footer from "../Footer";
const SiwesSection = () => {
  const siwesContents = [

    {
        color: "",
        section: <SiwesForms/>,
      },
       
  ];
  return (
    <div className="">
        <Navbar/>
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
            <div className="w-full">
              {section}
            </div>
          </div>
        ))}
      </div>
<Footer/>
   
    </div>
  );
};

export default SiwesSection;
