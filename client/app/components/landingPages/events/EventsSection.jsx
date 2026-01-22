"use client";

import React from "react";
import Events from "./Events";
import TrustedBy from "../home/TrustedBy";
import Press from "../home/Press";
const EventsSection = () => {
  const contactContents = [
    {
        color: "",
        section: <Events/>,
      },
      {
        color: "",
        section: <Press/>,
      },
       {
        color: "",
        section: <TrustedBy/>,
      },
  ];
  return (
    <div className="">
     
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
    </div>
  );
};

export default EventsSection;
