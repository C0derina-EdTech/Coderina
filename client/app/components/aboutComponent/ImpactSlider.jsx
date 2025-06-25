"use client";

import React from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ImpactSlider = ({ lego }) => {
  const impactNums = [
    {
      number: 28372,
      text: (
        <>
          Number of <br />
          Students trained
        </>
      ),
      img: "/green-smile.png",
    },
    {
      number: 7362,
      text: (
        <>
          Number of <br /> Teachers trained
        </>
      ),
      img: "/green-person.png",
    },
    {
      number: 12,
      text: (
        <>
           Number of Governments &  <br /> Ministry Relationships
        </>
      ),
      img: "/green-bank.png",
    },
    {
      number: 16,
      text: (
        <>
          Number of <br />
          Partnerships
        </>
      ),
      img: "/green-shake.png",
    },
    {
      number: 64,
      text: (
        <>
          New Businesses <br /> Incubated
        </>
      ),
      img: "/green-bill.png",
    },
  ];

  const legoImpact = [
    {
      number: 5600,
      text: "Teachers trained",
      img: "/person-star.svg",
    },
    {
      number: 12749,
      text: "Students Impacted",
      img: "/smile.svg",
    },
    {
      number: 1185,
      text: "Robots Built",
      img: "/robot.svg",
    },
    {
      number: 26,
      text: "Projects Incubated",
      img: "/plant.svg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = lego ? legoImpact : impactNums;

  return (
    <div className="py-[1em] px-[3em] rounded-[1rem] border-2 border-[#4c4c4c]">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="">
            <ImpactCard {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const ImpactCard = ({ number, text, img }) => {
  return (
    <div className="w-full h-full p-4  text-center">
      <div className="w-12 h-12 mb-4 mx-auto relative">
        <Image src={img} alt="icon" fill className="object-contain" />
      </div>
      <h2 className="text-4xl font-bold mb-2 text-yellow-600 dark:text-yellow-400">
        <CountUp start={0} end={number} duration={2.5} separator="," />
      </h2>
      <p className="text-sm leading-relaxed">{text}</p>
    </div>
  );
};

export default ImpactSlider;
