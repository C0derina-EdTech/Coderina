import React from "react";
import couch9 from "../../../public/couch9.png";
import Image from "next/image";
const Benefits = () => {
  const benCard = [
    {
      num: "01",
      title: "Networking Opportunities",
      text: "Collaborate with peers, mentors and industry leaders.",
    },
    {
      num: "02",
      title: "Recongnition",
      text: "Gain recongnition to potential investors and stakeholders.",
    },
    {
      num: "03",
      title: "Mentorship",
      text: "Access guidance from experts in various fields.",
    },
    {
      num: "04",
      title: "Resources",
      text: "Utilize cutting-edge tools, technologies and workspace.",
    },
  ];
  return (
  <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
      <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
        <Image
          src={couch9}
          alt="couch4"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>

  );
};

export default Benefits;
