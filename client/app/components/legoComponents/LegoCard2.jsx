"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "../CustomButton";
import legoCard from "../../../public/lego-card2.png";

const LegoCard2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-4 px-2 md:px-4 lg:px-16 py-8 md:py-16">
      <div className="md:w-[47%]">
        <Image src={legoCard} alt="card" className="w-full" />
      </div>
      <div className="flex flex-col items-start gap-4 md:w-[47%]">
        <h4 className="text-[24px] md:text-[36px] font-semibold">
          A chance to shine!
        </h4>
        <p className="text-[14px] md:text-[17px]">
          Each FIRST LEGO League season culminates with a celebration where
          teams show off what they learned and invented, and in our oldest
          division, compete with their robots.
        </p>
        <p className="text-[14px] md:text-[17px]">
          Some teams earn an invitation to FIRST LEGO League World Festival as
          part of FIRST Championship Houston or FIRST Championship Detroit,
          where teams from all over the world meet and compete.
        </p>
        <div className="mt-3">
          <CustomButton href="/form" label={"Get Started"}></CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LegoCard2;
