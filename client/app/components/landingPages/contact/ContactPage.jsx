"use client";

import React from "react";
import ContactUs from "./ContactUs";
const ContactPage = () => {
  const contactContents = [
    {
        color: "",
        section: <ContactUs/>,
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

export default ContactPage;
