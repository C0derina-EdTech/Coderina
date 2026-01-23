"use client";

import React from "react";
import Programs from "./Programs";
import TrustedBy from "../home/TrustedBy";
import ProgramsHero from "./ProgramsHero";
import Press from "../home/Press";
const ProgramsPage = () => {
  const contactContents = [
    {
      color: "",
      section: <ProgramsHero />,
    },
    {
      color: "",
      section: <Programs />,
    },
    {
      color: "",
      section: <Press/>,
    },
    {
      color: "",
      section: <TrustedBy />,
    },
  ];
  return (
    <div className="">
      <div>
        {contactContents.map(
          ({ color, section, isGradient, bgImage }, index) => (
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
              <div className="">{section}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProgramsPage;
