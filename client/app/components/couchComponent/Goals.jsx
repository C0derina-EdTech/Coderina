import React from "react";
import couch5 from "../../../public/couch5.png";
import Image from "next/image";
const Goals = () => {
  const goCard = [
    {
      num: "01",
      title: "Promote Innovation",
      text: "Encourage  students to explore creative ans sustainable solutions to real world problems.",
    },
    {
      num: "02",
      title: "Foaster Networking",
      text: "Provide a platform for students to connect, collaborate and share ideas.",
    },
  ];

  const goCar = [
    {
      num: "04",
      title: "Encourage Sustainability",
      text: "The idea should round out the others. Does your audience understand how everything is together?.",
    },
    {
      num: "05",
      title: "Empower Students",
      text: "Build leadership, teamwork and problem solving-skill through mentorship and experimental learning.",
    },
  ];
  return (
    <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
      <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
        <Image
          src={couch5}
          alt="couch4"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>
    
  );
};

export default Goals;
