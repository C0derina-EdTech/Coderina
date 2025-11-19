"use client";

import React from "react";
import Programs from "./Programs";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TrustedBy from "../home/TrustedBy";
const ProgramsPage = () => {
  const contactContents = [
    {
        color: "",
        section: <Programs/>,
      },
        {
        color: "",
        section: <TrustedBy/>,
      },
  ];
  return (
    <div className="">
        <Navbar/>
      <div>
        {contactContents.map(({ color, section, isGradient, bgImage }, index) => (
          <div
            key={index}
            className={`scroll-smooth ${
              isGradient ? "bg-gradient-to-br from-[#321414] to-[#fbeee9]" : ""
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

      <Footer/>
    </div>
  );
};

export default ProgramsPage;
