"use client";
import React from "react";
import AboutHeader from "../../components/aboutComponent/AboutHeader";
import AboutMV from "../../components/aboutComponent/AboutMV";
import Impact from "../../components/aboutComponent/Impact";

import Team from "../../components/aboutComponent/Team";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../components/Footer";

import Sponsors from "../../components/Sponsors";
import { blackCard, headerBackground, whiteColor } from "../../utils/constants";
import AboutTS from "../../components/aboutComponent/AboutTS";

const page = () => {
  const aboutContents1 = [
    {
      color: headerBackground,
      section: <AboutHeader />,
    },
    {
      color: whiteColor,
      section: <AboutMV />,
    },
    {
      color: blackCard,
      section: <Impact />,
    },
    {
      color: whiteColor,
      section: <Team />,
    },
    {
      color: headerBackground,
      section: <Sponsors />,
    },
    {
      color: headerBackground,
      section: <AboutTS />,
    },
    {
      color: "#1a1a1a",
      section: <Footer />,
    },
  ];
  return (
    <div className="">
      {aboutContents1.map(({ color, section }, index) => (
        <div style={{ background: color }} key={`${section}-${index}`}>
          <div className="max-w-[100rem] mx-auto">{section}</div>
        </div>
      ))}
    </div>
  );
};

export default page;
