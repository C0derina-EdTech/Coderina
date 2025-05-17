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
    // <div className="text-[#648e38]  py-8 flex flex-col items-center justify-center   space-y-9">
    //   <h1 className="lg:text-[70px] lg:px-16 font-extrabold tracking-[0.3rem]">
    //     POST-EVENT ACTIVITIES
    //   </h1>

    //   <div className="grid gap-4 grid-cols-2 items-start justify-start">
    //     {actCard.map((card, i) => (
    //       <div className="border-[#648e38] border-2 w-full md:w-[500px] h-[130px]  rounded-3xl p-4 flex flex-col items-center justify-center space-y-2">
    //         <div className="flex items-center justify-start space-x-2">
    //           <div className="w-[50px] h-[40px]">
    //             <Image
    //               src={card.image}
    //               alt="join"
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //           <p className="text-center font-bold text-[20px] md:text-[28px]  text-nowrap">
    //             {card.title}
    //           </p>
    //         </div>
    //         <p className="text-center font-normal text-[16px]">{card.text}</p>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="border-[#648e38] border-2 w-full md:w-[500px] h-[130px]  rounded-3xl p-4 flex flex-col items-center justify-center space-y-2">
    //     <div className="flex items-center space-x-2 justify-start">
    //       <div className="w-[50px] h-[40px]">
    //         <Image
    //           src={join1}
    //           alt="join"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <p className="text-center font-bold text-[20px] md:text-[28px] text-nowrap">
    //         Phases of The Challenge
    //       </p>
    //     </div>
    //     <p className="text-center font-normal text-[16px]">
    //       Broad publicity inviting applications from individuals and teams.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Activities;
