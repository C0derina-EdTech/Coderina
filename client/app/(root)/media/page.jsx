"use client";

import React from "react";
import { blackColor, pinkBg } from "../../utils/constants";
import { Box, Container, Stack } from "@mui/material";

import MediaBody from "../../components/mediacomponent/MediaBody";
import Footer from "../../components/Footer";
import SubscribeForm from "../../components/SubscribeForm";

const Media = () => {
  const eventContent = [
    {
      color: pinkBg,
      section: <MediaBody />,
    },

    {
      color: "#1a1a1a",
      section: <Footer />,
    },
  ];

  return (
    <div className="overflow-hidden ">
      {eventContent.map(({ color, section }) => (
        <div style={{ background: color }} p={4} key={section}>
          <div className="max-w-[100rem] mx-auto">{section}</div>
        </div>
      ))}
    </div>
  );
};

export default Media;
