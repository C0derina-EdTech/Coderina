"use client";

import React from "react";
import Couch from "./Couch";
import CouchHero from "./CouchHero";
import Join from "./Join";
import Footer from "../Footer";
import Navbar from "../Navbar";
const CouchPage = () => {
  const couchContents = [
    {
      color: "",
      section: <CouchHero/>,
    },
    {
        color: "",
        section: <Couch/>,
      },
      {
        color: "",
        section: <Join/>,
      },
  ];
  return (
    <div className="">
        <Navbar/>
      <div>
        {couchContents.map(({ color, section, isGradient, bgImage }, index) => (
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

export default CouchPage;
