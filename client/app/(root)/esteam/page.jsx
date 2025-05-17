"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footer from "../../components/Footer";



const page = () => {
  const couchContents1 = [
  
    // {
    //   bg: blank,
    //   section: <Goals />,
    // },
   
   

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
