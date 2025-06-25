"use client";

import React from "react";
import ReactPlayer from "react-player";
import Link from "next/link";
import CustomButton from "../CustomButton";

const LegoHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-{#fff9f0} text-center p-6 md:p-10 lg:px-16 rounded-xl gap-12">
      <div className="flex flex-col items-center gap-4 w-full md:w-3/5">
        <h4 className="text-[27px] font-semibold">
          Engaging Youth in STEM Exploration with FIRST® LEGO® League
        </h4>

       <CustomButton href="/form" label={"Get Started"}></CustomButton>
      </div>

      <div className="w-full h-[500px] rounded-xl overflow-hidden">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://youtu.be/i52coAkhX8g"
        />
      </div>
    </div>
  );
};

export default LegoHeader;
