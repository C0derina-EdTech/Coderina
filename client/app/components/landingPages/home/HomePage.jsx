"use client";
import React from "react";
import "aos/dist/aos.css";
import PrintingLab from "./PrintingLab";
import TrustedBy from "./TrustedBy";
import Clip from "./Clip";
import ProgramsAndInitiatives from "./ProgramsAndInitiatives";
import CoderinaFacilities from "./CoderinaFacilities";
import UpcomingEvents from "./UpcomingEvents";
import useIsLargeScreen from "../../lib/useIsLargeScreen";
import AfterHero from "./AfterHero";
import Press from "./Press";
import Header from "./Header";
import Blog from "./Blog";
import Details from "./Details";
const HomePage = () => {
  const isLargeScreen = useIsLargeScreen();

  // Wait until screen size is determined
  if (isLargeScreen === null) return null;

  // Store only the component (not JSX)
  const homeContents = [
    // { color: "#fff", section: Navbar },
      { color: "#fff", section: Header },
     { color: "#fff", section: TrustedBy },
    { color: "#fff", section: UpcomingEvents },
     { color: "#fff", section: AfterHero},
    { color: "#fff", section: ProgramsAndInitiatives },
    { color: "#fff", section: Details },
    { color: "#fff", section: CoderinaFacilities },
    { color: "#fff", section: PrintingLab },
    { color: "#fff", section: Clip },
    { color: "#fff", section: Blog },
    { color: "#fff", section: Press },

  ];

  return (
    <div>
      {homeContents.map(({ color, section: Component, isGradient, bgImage }, index) => (
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
          <div className="bg-white">
            <Component isLargeScreen={isLargeScreen} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
