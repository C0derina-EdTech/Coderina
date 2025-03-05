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


    // <div className="text-[#648e38]  py-8 flex flex-col items-center justify-center   space-y-9">
    //   <h1 className="lg:text-[70px] lg:px-16 font-extrabold tracking-[0.3rem]">
    //     KEY BENEFITS
    //   </h1>

    //   <div className="grid gap-y-4 md:gap-10 grid-cols-2 items-start justify-start">
    //     {benCard.map((card, i) => (
    //       <div className="relative border-[#648e38] border-2 w-full md:w-[450px] h-[120px]  rounded-3xl p-4 flex flex-col items-center justify-center space-y-2">
    //         <p className="absolute -top-9 -left-6 p-4 font-extrabold text-[24px] md:text-[32px] text-white bg-[#648e38] rounded-[70%]">
    //           {card.num}
    //         </p>
    //         <div className="flex flex-col items-center justify-start space-x-2">
    //           <p className="text-center font-bold text-[20px] md:text-[28px]">
    //             {card.title}
    //           </p>
    //           <p className="text-center font-normal text-[16px]">{card.text}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="relative border-[#648e38] border-2 w-full md:w-[450px] h-[160px]  rounded-3xl p-4 flex flex-col items-center justify-center space-y-2">
    //     <p className="absolute -top-9 -left-6 p-4 font-extrabold text-[24px] md:text-[32px] text-white bg-[#648e38] rounded-[70%]">
    //       05
    //     </p>
    //     <div className="flex flex-col items-center justify-start space-x-2">
    //       <p className="text-center font-bold text-[20px] md:text-[28px]">
    //         Prizes and Funding
    //       </p>
    //       <p className="text-center font-normal text-[16px]">Total prize pool 0 Million naira</p>
    //       <p className="text-center font-normal text-[16px]">1st 5 Million |  2nd 2.5 Million</p>
    //       <p className="text-center font-normal text-[16px]">3rd- 1.5 Million</p>
    //       <p className="text-center font-normal text-[16px]">Incubation Opportunities</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Benefits;
