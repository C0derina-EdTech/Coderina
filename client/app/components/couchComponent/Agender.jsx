import React from "react";
import couch3 from "../../../public/couch3.png";
import Image from "next/image";

import couch12 from "../../../public/couch12.png";
import blank from "../../../public/blank.jpg";
const Agender = () => {
  const expCard = [
    {
      title: "AGENDER",
      text: [
        "Introduction",
        "Objectives",
        "Structure of the challenge",
        "Phases of the challenge",
      ],
      button: "Register",
      link: "/formData",
      color: couch12,
      col: "#fff",
    },
    {
      text: ["Strategic Goals", "Key Benefits", "Eligibility", "Registration"],
      button: "Contact us",
      link: "/contactUs",
      color: blank,
      col: "#648e38",
    },
  ];
  return (
    <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
      <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
        <Image
          src={couch3}
          alt="couch4"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>
    
  );
};

export default Agender;
