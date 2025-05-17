"use client";
import React from "react";
import { Box, Container } from "@mui/material";
import "../globals.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Upcoming from "../components/Upcoming";

import Footer from "../components/Footer";
import Experience from "../components/Experience";
import News from "../components/News";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import Aos from "aos";
import Activities from "../components/Activities";
import Subscribers from "../components/Subscribers";
import { blackCard, headerBackground, whiteColor } from "../utils/constants";

import Welcome from "../components/Welcome";
import Programs from "../components/Programs";

const page = () => {
  const homeContents1 = [
    {
      color: headerBackground,
      section: <Header />,
    },
    {
      // color: greenBg,
      section: <AboutSection />,
    },
    {
      color: blackCard,
      section: <Upcoming />,
    },
    {
      // color: blueColor,
      section: <Activities />,
    },
    {
      color: whiteColor,
      section: <News />,
    },
    {
      color: blackCard,
      section: <Programs />,
    },

    {
      color: whiteColor,
      section: <Experience />,
    },
    {
      color: whiteColor,
      section: <Welcome />,
    },
    {
      color: headerBackground,
      section: <Subscribers />,
    },
    {
      color: "#1a1a1a",
      section: <Footer />,
    },
  ];

  return (
    <div className=" overflow-hidden bg-white ">
      {homeContents1.map(({ color, section }, index) => (
        // <div  style={{ border: "1px solid red" }}>
        <div style={{ background: color }} key={`${section}-${index}`}>
          <div className="max-w-[100rem] mx-auto">{section}</div>
        </div>
        // </div>
      ))}
    </div>
  );
};

export default page;
