import React from "react";
import Image from "next/image";

import Plant from "../../../public/plant.png";
import Load from "../../../public/loading.png";
import Repeat from "../../../public/repeat.png";
import Safe from "../../../public/safe.png";
import Locate from "../../../public/location.png";
import Smile from "../../../public/smile.png";
import Bulb from "../../../public/bulb.png";
import Tool from "../../../public/tool.png";
import Scope from "./Scope";

const AboutMV = () => {
  const mCard = [
    {
      item: "Our Mission",
      color: "#7A4F03",
      details: [
        {
          icon: Plant,
          span: "Give back and leave a lasting footprint ",
          text: "in every community we serve, creating a ripple effect of positive change.",
        },
        {
          icon: Load,
          span: "Challenge the limits of what is possible, ",
          text: "constantly pushing boundaries to achieve better educational outcomes. ",
        },
        {
          icon: Repeat,
          span: "Create and nurture a self-sustaining ecosystem ",
          text: "where students, educators, and professionals can thrive independently.",
        },
        {
          icon: Safe,
          span: "Reduce hunger and poverty ",
          text: "through education and entrepreneurial skills, building resilient communities.",
        },
      ],
    },
  ];

  const vCard = [
    {
      item: "Our Vision",
      details: [
        {
          icon: Locate,
          span: "Influence positive changes within the education sector, ",
          text: "shaping future generations through innovative learning solutions.",
        },
        {
          icon: Smile,
          span: "Bring fun into learning, ",
          text: "making education engaging and interactive for students of all ages.",
        },
        {
          icon: Bulb,
          span: "Empower teachers with 21st-century learning pedagogy, ",
          text: "equipping them with the tools they need to deliver impactful lessons.",
        },
        {
          icon: Tool,
          span: "Empower adults with the right learning and entrepreneurship tools, ",
          text: "ensuring lifelong learning and business opportunities for all.",
        },
      ],
    },
  ];

  return (
    <div className="py-10 px-2 sm:px-4 lg:px-16 font-Geist bg-white">
      {/* Mission Section */}
      {mCard.map((m, index) => (
        <div key={index}>
          <h4 className="font-bold text-[30px] leading-10 py-5">{m.item}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {m.details.map((detail, i) => (
              <div
                key={i}
                className="bg-[#fff5e5] p-4 rounded-2xl h-[246px] flex flex-col space-y-4"
              >
                <div>
                  <Image
                    src={detail.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="bg-[#FAD9A0] rounded-full p-2"
                  />
                </div>
                <div className="text-[16px] font-medium leading-[26px]">
                  <span className="font-semibold">{detail.span}</span>
                  {detail.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Vision Section */}
      {vCard.map((v, index) => (
        <div key={index} className="mt-10">
          <h4 className="font-bold text-[30px] leading-10 py-5">{v.item}</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {v.details.map((detail, i) => (
              <div
                key={i}
                className="bg-[#fff5e5] p-4 rounded-2xl h-[250px] flex flex-col space-y-4"
              >
                <div>
                  <Image
                    src={detail.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="bg-[#FAD9A0] rounded-full p-2"
                  />
                </div>
                <div className="text-[16px] font-medium leading-[26px]">
                  <span className="font-semibold">{detail.span}</span>
                  {detail.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}


      <Scope/>
    </div>
  );
};

export default AboutMV;
