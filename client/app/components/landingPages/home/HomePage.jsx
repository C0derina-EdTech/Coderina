"use client";
import React from "react";
import "aos/dist/aos.css";
import Hero from "./Hero";
import PrintingLab from "./PrintingLab";
import Clip from "./Clip";
import About from "./About";
import Facilities from "./Facilities";
import UpcomingEvents from "./UpcomingEvents";
import useIsLargeScreen from "../../lib/useIsLargeScreen";
import Press from "./Press";
import Volunteer from "./Volunteer";
import Blog from "./Blog";
import Initiatives from "./Initiatives";
import Partners from "./Partners";
import Footer from "../Footer";
import News from "./News";
const HomePage = () => {
  const isLargeScreen = useIsLargeScreen();

  // Wait until screen size is determined
  if (isLargeScreen === null) return null;

  // Store only the component (not JSX)
  const homeContents = [
    { color: "#fff", section: Hero },
     { color: "#fff", section: Partners },
     { color: "#000", section: About },
     { color: "#fff", section: UpcomingEvents },
     { color: "#fff", section: Volunteer },
     { color: "#fff", section: News},
    { color: "#fff", section: Initiatives },
    { color: "#fff", section: Facilities },
    { color: "#fff", section: PrintingLab },
    { color: "#fff", section: Clip },
    // { color: "#fff", section: Blog },
    { color: "#fff", section: Press },
   
  ];

  return (
    <div className="overflow-hidden">
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
          <div className="bg-white font-sans">
            <Component isLargeScreen={isLargeScreen} />
          </div>
        </div>
      ))}
    </div>
    <Footer/>
    </div>
  );
};

export default HomePage;
