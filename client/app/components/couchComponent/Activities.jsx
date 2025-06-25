import React from "react";
import join1 from "../../../public/join1.png";
import light from "../../../public/light.jpg";
import phone from "../../../public/phone.jpg";
import track from "../../../public/track.jpg";
import couch8 from "../../../public/couch8.png";
import Image from "next/image";

const Activities = () => {
  const actCard = [
    {
      image: track,
      title: "Mentorship",
      text: "Connect winners with experienced mentors to refine their solutions.",
    },
    {
      image: phone,
      title: "Documentation and Publicity",
      text: "Highlight success stories and ongoing projects to inspire others.",
    },
    {
      image: light,
      title: "Project Incubation",
      text: "Provide resources and guidance for scaling innovative ideas.ed mentors to refine their solutions.",
    },
    {
      image: join1,
      title: "Networking Opportunities",
      text: "Facilitate introductions to potential investors and stakeholders.",
    },
   
  ];
  return (

      <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
        <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
          <Image
            src={couch8}
            alt="couch4"
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    
  );
};

export default Activities;
