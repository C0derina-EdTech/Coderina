"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import founder2 from "../../../public/founder2.jpg";
import founder3 from "../../../public/founder3.jpg";
import daniel from "../../../public/daniel.png";
import christy from "../../../public/christy.jpg";
import prelumi from "../../../public/prelumi.jpg";
import tosin from "../../../public/tosin.jpg";
import faith from "../../../public/faith.jpg";
import Ephraim from "../../../public/Ephraim.jpg";
import group from "../../../public/group1.jpg";
import Image from "next/image";
import SolutionCards from "../SolutionCards";
import Link from "next/link";

const Team = () => {
  const ourTeamCard = [
    {
      img: founder3,
      name: "Mr. Femi Niyi",
      role: "Chairman Board of Trustee",
    },
    {
      img: founder2,
      name: "Mr. Olabisi Kelvin Ajayi",
      role: "Director of Relationships and Engagement",
    },
    {
      img: daniel,
      name: "Mr. Aduku Daniel",
      role: "Program Director: Emerging Technology Education",
    },
    {
      img: tosin,
      name: "Mr. Oluwatosin Olugbemi",
      role: "Senior Project Manager",
    },
    {
      img: prelumi,
      name: "Mr. Oluwapelumi A. Ojo",
      role: "Program Manager - Additive Manufacturing & Reverse Engineering",
    },
    {
      img: faith,
      name: "Mrs. Faith Effiong",
      role: "Account Manager: Primary Education",
    },
    {
      img: christy,
      name: "Miss Christiana Anthony",
      role: "Project Manager - Tertiary Education",
    },
    {
      img: Ephraim,
      name: "Mr. Ephraim Nyigba",
      role: "Online Digital Facilitator",
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-20 py-12 bg-white w-full space-y-10">
      {/* Header & Button */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <h4 className="text-2xl md:text-3xl font-bold">Our Team</h4>

        <Link
          href="/contact"
          className="relative flex items-center justify-center w-48 bg-black text-white rounded-3xl text-sm py-2 px-4 font-medium group overflow-hidden transition-all duration-700 ease-in-out"
        >
          <span className="relative flex items-center space-x-2 z-10 group-hover:opacity-0 transition-opacity duration-700">
            <p>Volunteer with us</p>
            <FaArrowRightLong />
          </span>
          <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            Go!
          </span>
        </Link>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ourTeamCard.map((teamCard, i) => (
          <SolutionCards
            key={i}
            {...teamCard}
            height="310px"
            text={teamCard.name}
            childern2={teamCard.role}
          />
        ))}
      </div>

      {/* Group Photo */}
      <div className="flex flex-col items-center space-y-3">
        <div className="w-full md:w-[600px] h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden">
          <Image
            src={group}
            alt="Group Photo"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-medium text-base text-center">Our Team</p>
      </div>
    </div>
  );
};

export default Team;
