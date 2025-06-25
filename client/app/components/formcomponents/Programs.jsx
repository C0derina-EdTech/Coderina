"use client";
import React from "react";

import { pinkBg, pinkBgR, whiteColor } from "../../lib/constants";

import Footer from "../Footer";
import Follow from "../Follow";
import RegistrationForm from "./RegistrationForm";
import Subscribe from "../Subscribe";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Programs = () => {
  const evenContent = [
    {
      section: <RegistrationForm />,
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
      section: <Footer />,
    },
  ];

  return (
    <div className="bg-background">
      {evenContent.map((content, index) => {
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
            <div className="max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Programs;
