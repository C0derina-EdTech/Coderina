"use client";

import React from "react";

import { blackColor, pinkBg, whiteBg } from "../../utils/constants";
import EventPage from "../../components/eventComponents/EventPage";

import Footer from "../../components/Footer";
import SubscribeForm from "../../components/SubscribeForm";

const page = () => {
  const eventContent = [
    {
      color: pinkBg,
      section: <EventPage />,
    },
    {
      section: <SubscribeForm />,
    },
    {
      color: "#1a1a1a",
      section: <Footer />,
    },
  ];

  return (
    <div className="overflow-hidden">
      {eventContent.map(({ color, section }, index) => (
        <div
          style={{ background: color }}
          className="p-4"
          key={`${section}-${index}`}
        >
          <div className="max-w-[100rem] mx-auto">{section}</div>
        </div>
      ))}
    </div>
  );
};

export default page;
