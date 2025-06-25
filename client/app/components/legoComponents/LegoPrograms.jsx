"use client";

import React from "react";
import Image from "next/image";
import legoDiscover from "../../../public/lego-discover.png";
import legoExplore from "../../../public/lego-explore.png";
import legoChallenge from "../../../public/lego-challenge.png";
import legoTech from "../../../public/lego-tech.png";

const LegoPrograms = () => {
  const legoLeagues = [
    {
      img: legoDiscover,
      description:
        "For children ages 4-6, this playful introductory STEM program ignites their natural curiosity and builds their habits of learning with hands-on activities in the classroom and at home using LEGO® DUPLO® bricks.",
    },
    {
      img: legoExplore,
      description:
        "In Explore, teams of students ages 6-10 focus on the fundamentals of engineering as they explore real-world problems, learn to design, and code and create unique solutions made with LEGO bricks and powered by LEGO® Education WeDo 2.0.",
    },
    {
      img: legoChallenge,
      description:
        "Friendly competition is at the heart of Challenge, as teams of students ages 9-16* engage in research, problem-solving, coding, and engineering - building and programming a LEGO robot that navigates the missions of a robot game.",
    },
    {
      img: legoTech,
      description:
        "FIRST Tech Challenge students learn to think like engineers. Teams design, build, and code robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-12 py-6 md:py-12 px-2 md:px-4 lg:px-16 py-6">
      <h2 className="text-[24px] md:text-[36px] font-semibold text-center">
        FIRST LEGO League Programs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {legoLeagues.map((league, index) => (
          <div key={index} className="flex flex-col gap-4">
            <Image src={league.img} alt="league image" className="w-full" />
            <p className="text-[13px]">{league.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegoPrograms;
