import React from "react";
import couch6 from "../../../public/couch6.png";
import Image from "next/image";
const Structure = () => {
  return (

      <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
          <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
            <Image
              src={couch6}
              alt="couch4"
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>
    
  );
};

export default Structure;
