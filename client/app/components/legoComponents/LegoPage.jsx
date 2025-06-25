"use client";
import React from 'react';

import {  pinkBg, pinkBgR, whiteColor } from "../../lib/constants";
import LegoCard1 from "./LegoCard1";
import LegoPrograms from "./LegoPrograms";
import LegoCard2 from "./LegoCard2";
import LegoImpact from "./LegoImpact";
import LegoCard3 from "./LegoCard3";
import LegoHeader from "./LegoHeader";
import Footer from "../Footer";
import Follow from "../Follow";
import Subscribe from "../Subscribe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LegoPage = () => {
   const legoContent = [
    {
      color: whiteColor,
      section: <LegoHeader />,
    },
    {
      color: pinkBgR,
      section: <LegoCard1 />,
    },
    {
      color: pinkBg,
      section: <LegoCard2 />,
    },
    {
      color: pinkBg,
      section: <LegoPrograms />,
    },
    {
      color: pinkBgR,
      section: <LegoImpact />,
    },
    {
      color: pinkBg,
      section: <LegoCard3 />,
    },

     {
      bgColor: "",
      section: <Follow />,
    },

    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
     {
      color: "#232323",
      section: <Footer/>,
    },
  ];

  return (
     <div className="bg-background">
      {legoContent.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.color || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-[410px] sm:max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default LegoPage