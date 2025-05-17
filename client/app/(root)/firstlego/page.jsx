"use client";

import React from "react";
import LegoHeader from "../../components/legoComponents/LegoHeader";
import {  pinkBg, pinkBgR, whiteColor } from "../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LegoCard1 from "../../components/legoComponents/LegoCard1";
import LegoCard2 from "../../components/legoComponents/LegoCard2";
import LegoPrograms from "../../components/legoComponents/LegoPrograms";
import LegoImpact from "../../components/legoComponents/LegoImpact";
import LegoCard3 from "../../components/legoComponents/LegoCard3";

import Footer from "../../components/Footer";
import Sponsors from "../../components/Sponsors";

const FirstLego = () => {
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
  ];

  return (
    <>
      <div className="">
        {legoContent.map(({ color, section }, index) => (
          <div p={4} key={`${section}-${index}`} bgcolor={color}>
            <div>{section}</div>
          </div>
        ))}
      </div>
      <Sponsors />
      <Footer />
    </>
  );
};

export default FirstLego;

// https://youtu.be/i52coAkhX8g
