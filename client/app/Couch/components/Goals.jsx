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
    // <div className="text-[#648e38]  py-8 flex flex-col items-center justify-center   space-y-9">
    //   <h1 className="lg:text-[70px] lg:px-16 font-extrabold tracking-[0.3rem]">
    //     OUR GOALS
    //   </h1>

    //   <div className="grid gap-y-4 md:gap-10 grid-cols-2 items-start justify-start">
    //     {goCard.map((card, i) => (
    //       <div className=" text-white bg-[#648e38] w-full md:w-[460px] h-[140px]  rounded-3xl p-4 flex  items-center justify-center space-y-2">
    //         <p className="px-3  font-extrabold text-[24px] md:text-[32px] text-white ">
    //           {card.num}
    //         </p>
    //         <div className="border-white border-2 h-12"></div>
    //         <div className="flex flex-col items-center justify-start px-2 space-y-1">
    //           <p className="text-center font-bold text-[20px] md:text-[28px] text-nowrap">
    //             {card.title}
    //           </p>
    //           <p className="text-center font-normal text-[16px]">{card.text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className=" text-white bg-[#648e38] w-full md:w-[460px] h-[140px]  rounded-3xl p-4 flex  items-center justify-center space-y-2">
    //     <p className="px-3  font-extrabold text-[24px] md:text-[32px] text-white ">
    //       03
    //     </p>
    //     <div className="border-white border-2 h-12"></div>
    //     <div className="flex flex-col items-center justify-start px-2 space-y-1">
    //       <p className="text-center font-bold text-[20px] md:text-[28px] text-nowrap">
    //         Stimulate Entrepreneurship
    //       </p>
    //       <p className="text-center font-normal text-[16px]">
    //         cultivate Entrepreneurial skills and help participants turn ideas
    //         into viable business ventures.
    //       </p>
    //     </div>
    //   </div>

    //   <div className="grid gap-y-4 md:gap-10 grid-cols-2 items-start justify-start">
    //     {goCar.map((card, i) => (
    //       <div className=" text-white bg-[#648e38] w-full md:w-[460px] h-[140px]  rounded-3xl p-4 flex  items-center justify-center space-y-2">
    //         <p className="px-3  font-extrabold text-[24px] md:text-[32px] text-white ">
    //           {card.num}
    //         </p>
    //         <div className="border-white border-2 h-12"></div>
    //         <div className="flex flex-col items-center justify-start px-2 space-y-1">
    //           <p className="text-center font-bold text-[20px] md:text-[28px] text-nowrap">
    //             {card.title}
    //           </p>
    //           <p className="text-center font-normal text-[16px]">{card.text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Goals;
