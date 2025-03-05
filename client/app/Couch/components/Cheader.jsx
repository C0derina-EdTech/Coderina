import React from "react";
import couchlogo from "../../../public/couchlogo.png";
import Image from "next/image";
const Cheader = () => {
  return (
    <div className="py-16 flex flex-col items-center justify-center space-y-4 md:space-y-10">
      <div className="w-full max-w-4xl  mx-auto ">
        <Image
          src={couchlogo}
          alt="logo"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
      <h1 className="font-medium text-[#176b3e] tracking-wide text-[20px] md:text-[30px] text-center">
        Empowering Innovators,Transforming <br />
        Ideas into Impact
      </h1>
    </div>
  );
};

export default Cheader;
