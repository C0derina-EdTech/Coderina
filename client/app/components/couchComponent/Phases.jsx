import React from "react";
import couch11 from "../../../public/couch11.jpg";
import couch7 from "../../../public/couch7.jpg";
import Image from "next/image";
const Phases = () => {
  return (
    <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
    <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
      <Image
        src={couch7}
        alt="couch4"
        className="w-full h-auto object-cover rounded-lg"
        priority
      />
    </div>
  </div>
  );
};

export default Phases;
