"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import legoCard from "../../../public/lego-card1.png";
import CustomButton from "../CustomButton";

const LegoCard1 = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-start gap-4  px-2 md:px-4 lg:px-16 py-10 md:py-16">
      <div className="flex flex-col items-start gap-4 md:w-[47%]">
        <h4 className="text-[24px] md:text-[36px] font-semibold">
          FIRST® LEGO® League guides youth through STEM learning and exploration
          at an early age.
        </h4>
        <p className="text-[14px] md:text-[17px]">
          From Discover, to Explore, and then to Challenge, students will
          understand the basics of STEM and apply their skills in an exciting
          competition while building habits of learning, confidence, and
          teamwork skills along the way.
        </p>
        <div className="mt-3">
          <CustomButton href="/form" label={"Let`s go!"}>
           
          </CustomButton>
        </div>
      </div>
      <div className="md:w-[47%]">
        <Image src={legoCard} alt="lego" className="w-full" />
      </div>
    </div>
  );
};

export default LegoCard1;
