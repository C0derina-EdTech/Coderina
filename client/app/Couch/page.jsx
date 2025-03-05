"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../Home/Footer";

import Cheader from "./components/Cheader";
import Agender from "./components/Agender";
import Description from "./components/Description";
import blank from "../../public/blank.jpg";

import Goals from "./components/Goals";
import Join from "./components/Join";
import Structure from "./components/Structure";
import Activities from "./components/Activities";
import Benefits from "./components/Benefits";
import Register from "./components/Register";
import Phases from "./components/Phases";
const page = () => {
  const couchContents1 = [
    {
      bg: blank,
      section: <Cheader />,
    },
    {
      bg: blank,
      section: <Agender />,
    },
    {
      bg: blank,
      section: <Description />,
    },
    {
      bg: blank,
      section: <Goals />,
    },
    {
      bg: blank,
      section: <Structure />,
    },
    {
      bg: blank,
      section: <Activities />,
    },
    {
      bg: blank,
      section: <Benefits />,
    },
    {
      bg: blank,
      section: <Join />,
    },

    {
      bg: blank,
      section: <Phases />,
    },
    {
      bg: blank,
      section: <Register />,
    },


    {
      color: "#1a1a1a",
      section: <Footer />,
    },
  ];
  return (
    <div className="bg-white">
      {couchContents1.map(({ color, section, bg }, index) => (
        <div
          style={{
            background:
              color || `url(${bg?.src}) no-repeat center center/cover`,
          }}
          key={`${section}-${index}`}
        >
          <div className="max-w-[100rem] mx-auto px-2 md:px-4 lg:px-16">{section}</div>
        </div>
      ))}
    </div>
  );
};

export default page;
