import React from "react";
import www from "../../../public/www.png";
import submit from "../../../public/submit.png";
import icon from "../../../public/icon.png";
import Image from "next/image";
const Register = () => {
  const regCard = [
    {
      image: www,
      text: "VISIT COUCH REGISTRATION PORTAL",
      link: "https://forms.office.com/r/MRqXVPY53Q",
    },
    {
      image: submit,
      text: "SUBMIT A BRIEF ABSTRACT OF YOUR IDEA",
    },
    {
      image: icon,
      text: "PROVIDE UNIVERSITY AUTHOURIZATION LETTER AND TEAM DETAILS",
    },
  ];
  return (
    <div className="text-[#648e38]  py-8 flex flex-col items-center justify-center   space-y-10">
      <h1 className="text-[28px] px-2 lg:text-[50px] lg:px-16 font-extrabold tracking-[0.2rem]">
        HOW TO REGISTER
      </h1>
      <div className="grid gap-4 md:grid-cols-3 items-start justify-start">
        {regCard.map((card, i) => (
          <div className="w-[270px] md:w-[300px] h-[200px] md:h-[350px]  flex flex-col items-center justify-center">
            <div className="w-1/2 h-[130px]">
              <Image
                src={card.image}
                alt="join"
                className="w-full h-full object-contain"
              />
            </div>
            {card.link ? (
              <a
                href={card.link}
                className="text-[#648e38] text-center font-bold text-[20px]  px-2 underline hover:text-black"
                target="_blank"
                rel="noopener noreferrer"
              >
                {card.text}
              </a>
            ) : (
              <p className="text-center font-bold text-[20px] px-2">
                {card.text}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Register;
