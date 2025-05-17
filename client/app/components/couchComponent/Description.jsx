import React from "react";
import couch4 from "../../../public/couch4.png";
import Image from "next/image";
const Description = () => {
  return (

      <div className="text-[#648e38] py-10 flex flex-col items-center justify-center space-y-10">
        <div className="w-full max-w-4xl  mx-auto lg:max-w-5xl">
          <Image
            src={couch4}
            alt="couch4"
            className="w-full h-auto object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    // <div className="text-[#648e38] md:px-4 md:max-w-[800px] mx-auto py-8 flex flex-col items-center justify-center  md:py-16 space-y-6">
    //   <h1 className="lg:text-[70px] font-extrabold tracking-[0.5rem]">WHAT IS COUCH</h1>
    //   <p className="tracking-[0.1rem] text-center text-[16px] md:text-[28px] leading-9">
    //     The Coderina University Challenge (COUCH) is an innovative platform
    //     designed to inspire creativity, foster entrepreneurial mindsets, and
    //     encourage the practical application of academic research among students
    //     in tertiary education. By bridging the gap between theoretical knowledge
    //     and real-world application, COUCH empowers students to develop solutions
    //     that address pressing societal challenges. Open to participants across
    //     Nigeria, the challenge offers a dynamic environment for collaboration,
    //     learning, and competition.
    //   </p>
    // </div>
  );
};

export default Description;
