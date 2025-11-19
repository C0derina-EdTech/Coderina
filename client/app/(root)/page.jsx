"use client";
import React, { useState } from "react";
import Hero from "../components/landingPages/home/Hero";
import PrintingLab from "../components/landingPages/home/PrintingLab";
import Footer from "../components/landingPages/Footer";
import TrustedBy from "../components/landingPages/home/TrustedBy";
import SiwesCoworkingSection from "../components/landingPages/home/SiwesCoworkingSection";
import CoderinaLanding from "../components/landingPages/home/CoderinaLanding";
import Blog from "../components/landingPages/home/Blog";
import ProgramsAndInitiatives from "../components/landingPages/home/ProgramsAndInitiatives";
import CoderinaFacilities from "../components/landingPages/home/CoderinaFacilities";
import UpcomingEvents  from "../components/landingPages/home/UpcomingEvents";
import Navbar from "../components/landingPages/Navbar";
const Page = () => {
  
  const homeContents1 = [
     
    {
      color: "#fff",
      section:<Navbar/>,
    },
    {
      color: "#fff",
      section:<Hero />,
    },
    {
      color: "#fff",
      section:<UpcomingEvents/>,
    },
     {
      color: "#fff",
      section:<ProgramsAndInitiatives/>,
    },
     {
      color: "#fff",
      section:<CoderinaFacilities/>,
    },
     {
      color: "#fff",
      section:<PrintingLab/>,
    },

     {
      color: "#fff",
      section:<CoderinaLanding/>,
    },
      {
      color: "#fff",
      section:<Blog/>,
    },
     {
      color: "#fff",
      section:<TrustedBy/>,
    },
     {
      color: "#fff",
      section:<Footer/>,
    },
   
  ];
  return (
    <div className="">
      <div>
      

        {homeContents1.map(({ color, section, isGradient, bgImage }, index) => (
          <div
            key={index}
            className={`scroll-smooth  ${
              isGradient ? "bg-gradient-to-br from-[#321414] to-[#fbeee9]" : ""
            }`}
            style={{
              background: isGradient ? undefined : color,
              backgroundImage: bgImage ? `url(${bgImage.src})` : undefined,
              backgroundSize: bgImage ? "cover" : undefined,
              backgroundPosition: bgImage ? "center" : undefined,
            }}
          >
            <div className="bg-white">
              {section}
            </div>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default Page;
