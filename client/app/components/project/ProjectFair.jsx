"use client";

import React from "react";

import Footer from "../Footer";
import Follow from "../Follow";

import ProjectC from "./ProjectC";

const ProjectFair = () => {
  const projectContent = [
    {
      bgColor: "",
      section: <ProjectC />,
    },
    {
      bgColor: "",
      section: <Follow />,
    },

 
    {
      color: "#232323",
      section: <Footer />,
    },
  ];
  return (
    <div className="bg-background">
      {projectContent.map((content, index) => {
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
  );
};

export default ProjectFair;
