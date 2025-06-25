"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import Follow from "../../components/Follow";
import Cheader from "./Cheader";
import Agender from "./Agender";
import Description from "./Description";
import blank from "../../../public/blank.jpg";

import Goals from "./Goals";
import Join from "./Join";
import Structure from "./Structure";
import Activities from "./Activities";
import Benefits from "./Benefits";
import Register from "./Register";
import Phases from "./Phases";
const CouchPage = () => {
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
      bgColor: "",
      section: <Follow />,
    },

    {
      bgImage: blank,
      section: <Subscribe />,
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
          <div className=" px-2 md:px-4 lg:px-16">
            {section}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CouchPage;
