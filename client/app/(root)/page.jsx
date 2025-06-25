"use client";

import "aos/dist/aos.css";
import Aos from "aos";

import { useEffect } from "react";
import Footer from "../components/Footer";
import Follow from "../components/Follow";
import Subscribe from "../components/Subscribe";
import FirstRoboticsRegistration from "../components/FirstRoboticsRegistration";
import Book from "../components/Book";
import General from "../components/General";
import Hero from "../components/Hero";
import AboutSection from "../components/Us";
import Experience from "../components/Experience";
import Activities from "../components/Activities";
import Space from "../components/Space";
import Sponsors from "../components/Sponsors";

import UpSlider from "../components/Upslider";
export default function Home() {
  const homeContents1 = [
    {
      bgColor: "",
      section: <Hero />,
    },
    {
      bgColor: "#ffffff",
      section: <AboutSection />,
    },
    {
      bgColor: "#000000",
      section: <UpSlider />,
    },

    {
      bgColor: "#ffffff",
      section: <Activities />,
    },
    {
      bgColor: "#ffffff",
      section: <General />,
    },

    {
      bgColor: "#ffffff",
      section: <FirstRoboticsRegistration />,
    },
    {
      bgColor: "#ffffff",
      section: <Experience />,
    },
    // {
    //   bgColor: "#ffffff",
    //   section: <Book />,
    // },
    {
      bgColor: "#000000",
      section: <Space />,
    },

    {
      bgColor: "#ffffff",
      section: <Sponsors />,
    },
    {
      bgColor: "#ffffff",
      section: <Follow />,
    },
    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
    {
      bgColor: "#000000",
      section: <Footer />,
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="">
      {homeContents1.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover", // Ensure the image covers the section
            }}
          >
            <div className="max-w-[410px] sm:max-w-[80rem] mx-auto lg:gap-y-[4rem] overflow-hidden">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
}
