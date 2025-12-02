"use client";
import React from "react";

import Hero from "../components/landingPages/home/Hero";
import PrintingLab from "../components/landingPages/home/PrintingLab";
import Footer from "../components/landingPages/Footer";
import TrustedBy from "../components/landingPages/home/TrustedBy";
import SiwesCoworkingSection from "../components/landingPages/home/SiwesCoworkingSection";
import CoderinaLanding from "../components/landingPages/home/CoderinaLanding";
import Blog from "../components/landingPages/home/Blog";
import ProgramsAndInitiatives from "../components/landingPages/home/ProgramsAndInitiatives";
import CoderinaFacilities from "../components/landingPages/home/CoderinaFacilities";
import UpcomingEvents from "../components/landingPages/home/UpcomingEvents";
import Navbar from "../components/landingPages/Navbar";
import useIsLargeScreen from "../components/lib/useIsLargeScreen"; // import the hook

const Page = () => {
  const isLargeScreen = useIsLargeScreen();

  // Wait until screen size is determined
  if (isLargeScreen === null) return null;

  // Store only the component (not JSX)
  const homeContents = [
    { color: "#fff", section: Navbar },
    { color: "#fff", section: Hero },
    { color: "#fff", section: UpcomingEvents },
    { color: "#fff", section: ProgramsAndInitiatives },
    { color: "#fff", section: CoderinaFacilities },
    { color: "#fff", section: PrintingLab },
    { color: "#fff", section: CoderinaLanding },
    { color: "#fff", section: Blog },
    { color: "#fff", section: TrustedBy },
    { color: "#fff", section: Footer },
  ];

  return (
    <div>
      {homeContents.map(({ color, section: Component, isGradient, bgImage }, index) => (
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
          <div className="bg-white">
            <Component isLargeScreen={isLargeScreen} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
