import React from "react";
import education from "../../../public/Education.png";
import equality from "../../../public/equality.png";
import growth from "../../../public/growth.png";
import innovation from "../../../public/innovation.png";
import Image from "next/image";

const Alignment = () => {
  const align = [
    {
      img: education,
      desc: "Promoting inclusive and equitable quality education.",
    },
    {
      img: equality,
      desc: "Empowering girls through the Her e-STEM initiative.",
    },
    {
      img: growth,
      desc: "Encouraging entrepreneurship and innovation through COUCH.",
    },
    {
      img: innovation,
      desc: "Building resilient infrastructure and fostering innovation through STEAM programs.",
    },
  ];

  return (
    <section className="space-y-10 py-10 md:py-14">
      <div>
        <h1 className="font-bold text-[28px] md:text-[32px] leading-[41.1px] text-center md:text-left">
          Alignment with the SDGs
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        {align.map((sec, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 max-w-[290px] mx-auto"
          >
            <div className="w-full h-[270px] flex justify-center items-center">
              <Image
                src={sec.img}
                alt="alignment icon"
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-center font-normal text-[16px] leading-7">
              {sec.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Alignment;
