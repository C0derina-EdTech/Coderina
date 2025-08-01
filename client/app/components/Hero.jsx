import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import ImgSlider from "./ImgSlider"
import Vector from "../../public/Vector.png";

import BG from "../../public/BGPattern.png";
import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  const containerStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "0.5em",
    padding: "3em 0 4em",
    backgroundImage: Vector,
  };
  return (
    <div className="font-Geist py-10 ">
      <div className="w-full relative flex flex-col items-center justify-center space-y-10 max-h-[550px]">
        <div className="mt-36 w-full h-full">
          <Image src={BG} alt="bgImage" className="w-full h-full" />
        </div>
        <div className="absolute top-10 space-y-10 md:space-y-16 flex flex-col items-center justify-center">
          <div
            width={["default", "65%"]}
            className="text-center px-2 md:px-4 space-y-3  lg:space-y-9"
          >
            <h1 className="font-bold leading-[47.2px] md:leading-[55px] text-[34px] md:text-[60px] ">
              Youth. Innovation.
            </h1>
            <h1 className="font-bold leading-[47.2px] md:leading-[55px] text-[34px] md:text-[60px] ">
              Entrepreneurships.
            </h1>
            <h1 className="font-bold leading-[47.2px] md:leading-[55px] text-[34px] md:text-[60px] ">
              Empowerment.
            </h1>
          </div>
          <Link
            href="/contact"
            className="relative w-48 md:w-52 text-nowrap   bg-black text-white space-x-2 rounded-3xl text-sm md:text-xl  cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-700  py-4 px-7 text-[14px]   font-medium group overflow-hidden"
          >
            {/* Default Text */}
            <span className="relative space-x-3 flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
              <p> Get Started</p> <FaArrowRightLong />
            </span>

            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center text-white  font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
              Go!
            </span>
          </Link>
        </div>
      </div>
  <ImgSlider/>
    </div>
  );
};

export default Hero;
