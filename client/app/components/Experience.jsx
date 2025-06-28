import React from "react";

import expCard1 from "../../public/experience-card1.png";
import expCard2 from "../../public/couch1.png";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { greenBg2, pinkBgR, headerBackground } from "../lib/constants";

const Experience = () => {
  const expCard = [
    {
      title: "Coderina® University Challenge (COUCH)",
      text: [
        "This is an annual event where tertiary students showcase their final year projects to industry experts. The goal is to bridge the gap between academic work and industry needs, aligning student projects with real-world requirements.",
      ],
      textType: "li",
      divType: "ul",
      button: "Register",
      link: "/couch",
      color: greenBg2,
      image: expCard2,
      bg: greenBg2,
    },
    {
      title: "Bring the STEAM Experience to Your Next Celebration!",
      text: [
        "Looking for something different to celebrate your child's birthday? Coderina provides a totally unique party experience with interactive elements that really engage the kids.",
      ],
      textType: "span",
      button: "Contact us",
      link: "/contact",
      color: pinkBgR,
      image: expCard1,
      bg: headerBackground,
    },
  ];

  return (
   <div className="w-full px-2 md:px-4 lg:px-16 py-6 md:py-16 lg:pt-20">
  <div className="w-full">
    <div className="grid md:grid-cols-2 gap-6">
      {expCard.map((card, i) => (
        <div
          key={i}
          className="flex flex-col justify-between h-full space-y-6 rounded-2xl p-7 w-full bg-white"
          style={{ backgroundColor: card.bg }}
        >
          {/* Content */}
          <div className="flex flex-col space-y-4 flex-grow">
            <h1 className="text-[25px] font-semibold leading-[37.6px]">
              {card.title}
            </h1>
            <div>
              {card.divType === "ul" ? (
                <ul className="list-disc pl-5">
                  {card.text.map((t, index) => (
                    <li key={index} className="text-[14px] md:text-[17px]">
                      {t}
                    </li>
                  ))}
                </ul>
              ) : (
                card.text.map((t, index) => (
                  <span key={index} className="text-[14px] md:text-[17px] block">
                    {t}
                  </span>
                ))
              )}
            </div>
            <div className="w-full pt-3">
              <CustomButton href={card.link} label={card.button} />
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full h-[250px] md:h-[270px] lg:h-[300px]">
            <Image
              src={card.image}
              alt="Card image"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Experience;
