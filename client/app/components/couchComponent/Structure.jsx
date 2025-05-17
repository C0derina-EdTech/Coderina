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
    // <div className="text-[#648e38] md:px-4 md:max-w-[800px] mx-auto py-8 flex flex-col items-center justify-center  md:py-16 space-y-6">
    //   <h1 className="lg:text-[60px] md:leading-[59px] text-center font-extrabold tracking-[0.4rem]">
    //     STRUCTURE OF THE CHALLENGE
    //   </h1>
    //   <div className="bg-[#648e38] text-white rounded-[3rem] p-10 space-y-8">
    //     <h1 className=" text-white lg:text-[40px] md:leading-[30px] text-center font-bold ">
    //       Themed Inter-University Group Competition
    //     </h1>
    //     <ul className="list-disc ml-5 space-y-8 text-[20px] tracking-[0.1rem] lg:text-[24px]">
    //       <li>
    //         Teams of five students from each university collaborate on a
    //         real-world innovation challenge.
    //       </li>
    //       <li>
    //         Solutions are assessed on creativity, teamwork, and potential
    //         societal impact.
    //       </li>
    //       <li>
    //         Mentorship is provided to refine ideas into actionable solutions.
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Structure;
