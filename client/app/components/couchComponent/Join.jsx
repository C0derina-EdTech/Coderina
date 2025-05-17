import React from "react";
import join1 from "../../../public/join1.png";
import humans from "../../../public/humans.png";
import premium from "../../../public/premium.png";
import couch10 from "../../../public/couch10.png";
import Image from "next/image";
const Join = () => {
  const joinCard = [
    {
      image: join1,
      text: "OPENED TO ALL STUDENTS ENROLLED IN TERTIARY INSTITUTIONS ACROSS NIGERIA",
    },
    {
      image: humans,
      text: "TEAMS MUST COMPRISE 3-5 MEMBERS, WITH AT LEAST ONE TECHNICAL EXPERT",
    },
    {
      image: premium,
      text: "PROJECT MUST ALIGN WITH THE GIVEN THEME AND BE ORIGINAL",
    },
  ];
  return (
    <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
      <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
        <Image
          src={couch10}
          alt="couch4"
          className="w-full h-auto object-cover rounded-lg"
          priority
        />
      </div>
    </div>
    // <div className="text-[#648e38]  py-10 flex flex-col items-center justify-center   space-y-9">
    //   <h1 className="lg:text-[70px] lg:px-16 font-extrabold tracking-[0.3rem]">
    //     WHO CAN JOIN?
    //   </h1>
    //   <div className="grid  gap-4 grid-cols-3 items-start justify-start">
    //     {joinCard.map((card, i) => (
    //       <div className="bg-[#648e38] h-[430px] text-white  rounded-[2rem] flex flex-col items-center justify-center space-y-2">
    //        <div className="w-[200px] h-[200px]">
    //        <Image src={card.image} alt="join" className="w-full h-full object-cover"/>
    //        </div>
    //        <p className="text-center font-bold text-[20px] md:text-[28px] px-6">{card.text}</p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Join;
