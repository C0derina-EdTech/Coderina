"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import sap from "../../public/Sap.png";
import first from "../../public/first.png";
import cater from "../../public/Caterpillar.png";
import dow from "../../public/Dow.png";
import fme from "../../public/FME.png";
import lego from "../../public/Lego.png";
import legoi from "../../public/lego-icon.png";
import ford from "../../public/Ford.png";
import nln from "../../public/NLN.png";
import nitda from "../../public/NITDA.png";
import uol from "../../public/UOL.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sponsors = ({ sponsor  }) => {
  const partnerLogos = [
    sap,
    first,
    cater,
    dow,
    fme,
    lego,
    legoi,
    ford,
    nln,
    nitda,
    uol,
  ];

  const legoLogos = [sap, first, legoi, lego];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2},
      },
    ],
  };

  const logosToShow = sponsor ? legoLogos : partnerLogos;

  return (
    <section className="w-full py-16 md:pt-32 px-2 sm:px-4 md:px-10">
      {!sponsor && (
        <h2 className="text-center text-xl md:text-2xl font-medium mb-6">
          In collaboration with our valued partners
        </h2>
      )}

      <Slider {...settings}>
        {logosToShow.map((logo, index) => (
          <div key={index} className="flex justify-center items-center px-2 py-8">
            <Image
              src={logo}
              alt={`sponsor-${index}`}
              className="w-[120px] md:w-[150px] h-auto object-contain"
            />
          </div>
        ))}
      </Slider>

      {!sponsor && (
        <div className=" flex flex-col md:flex-row justify-center items-center gap-4">
          <Link href="/contact">
            <button className="bg-[#321414] text-white text-sm px-6 py-2 rounded-full hover:bg-[#4a2a2a] transition duration-300">
              Partner with Us
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-transparent border border-[#321414] text-[#321414] text-sm px-6 py-2 rounded-full hover:bg-[#321414] hover:text-white transition duration-300">
              Become a Sponsor
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default Sponsors;
