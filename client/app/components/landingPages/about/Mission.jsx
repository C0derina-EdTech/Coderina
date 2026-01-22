"use client";
import React from "react";
import Image from "next/image";
import Plant from "../../../../public/plant.png";
import Load from "../../../../public/loading.png";
import Repeat from "../../../../public/repeat.png";
import Safe from "../../../../public/safe.png";
import Locate from "../../../../public/location.png";
import Smile from "../../../../public/smile.png";
import Bulb from "../../../../public/bulb.png";
import Tool from "../../../../public/tool.png";

const Mission = () => {
  const missionItems = [
    {
      icon: Plant,
      text: "Give back and leave a lasting footprint in every community we serve, creating a ripple effect of positive change that extends far beyond the classroom.",
    },
    {
      icon: Load,
      text: "Challenge the limits of what is possible, constantly pushing boundaries to achieve better educational outcomes and unlock untapped potential in every learner.",
    },
    {
      icon: Repeat,
      text: "Create and nurture a self-sustaining ecosystem where students, educators, and professionals can thrive independently, building long-term capacity.",
    },
    {
      icon: Safe,
      text: "Reduce hunger and poverty through education and entrepreneurial skills, building resilient communities that can shape their own prosperous futures.",
    },
  ];

  const visionItems = [
    {
      icon: Locate,
      text: "Influence positive changes within the education sector, shaping future generations through innovative learning solutions that address Africa's unique challenges.",
    },
    {
      icon: Smile,
      text: "Bring fun into learning, making education engaging, interactive, and enjoyable for students of all ages, backgrounds, and learning styles.",
    },
    {
      icon: Bulb,
      text: "Empower teachers with 21st-century learning pedagogy, equipping them with cutting-edge tools and methodologies to deliver truly impactful lessons.",
    },
    {
      icon: Tool,
      text: "Empower adults with the right learning and entrepreneurship tools, ensuring lifelong learning opportunities and sustainable business ventures for all.",
    },
  ];

  return (
    <div className="">
      {/* Mission Section */}
      <section className="relative py-10 2xl:py-16  overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 opacity-40"></div>
        
        <div className="relative max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 2xl:mb-10" data-aos="fade-down">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-[#FAD9A0] to-[#F4C47E] mx-auto rounded-full"></div>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {missionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 md:p-6 2xl:p-8 border-2 border-[#FAD9A0] transition-all duration-500 hover:scale-105 hover:border-[#F4C47E] group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-linear-to-br from-[#FAD9A0] to-[#F4C47E] w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <Image
                    src={item.icon}
                    alt="Mission Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </div>
                <p className="text-sm 2xl:text-base leading-relaxed text-gray-700 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="relative py-10 lg:py-16 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 opacity-40"></div>
        
        <div className="relative max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <div className="w-24 h-1.5 bg-linear-to-r from-teal-500 to-teal-700 mx-auto rounded-full"></div>
            
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:gap-8">
            {visionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 md:p-6 2xl:p-8 border-2 border-teal-300 transition-all duration-500 hover:scale-105 hover:border-teal-500 group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-linear-to-br from-teal-500 to-teal-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6">
                  <Image
                    src={item.icon}
                    alt="Vision Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 brightness-0 invert"
                  />
                </div>
                <p className="text-sm 2xl:text-base leading-relaxed text-gray-700 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;