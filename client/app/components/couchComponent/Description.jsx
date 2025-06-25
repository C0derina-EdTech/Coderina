import React from "react";
import couch4 from "../../../public/couch4.png";
import Image from "next/image";
const Description = () => {
  return (

      <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
        <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
          <Image
            src={couch4}
            alt="couch4"
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    
  );
};

export default Description;
