"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "../CustomButton";
import legoCard from "../../../public/lego-card3.png";

const LegoCard3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4  px-2 md:px-4 lg:px-16 py-8">
      <div className="flex flex-col items-start gap-4 md:w-[47%]">
        <h4 className="text-[24px] md:text-[36px] font-semibold">
          Code, Design, and Compete with Robots!
        </h4>
        <p className="text-[14px] md:text-[17px]">
          FIRST Tech Challenge students learn to think like engineers. Teams
          design, build, and code robots to compete in an alliance format
          against other teams. Robots are built from a reusable platform,
          powered by Android technology, and can be coded using a variety of
          levels of Java-based programming.
        </p>
        <CustomButton href="/form" label={"Start a Team"}></CustomButton>
      </div>
      <div className="md:w-[47%]">
        <Image src={legoCard} alt="lego card" className="w-full" />
      </div>
    </div>
  );
};

export default LegoCard3;
