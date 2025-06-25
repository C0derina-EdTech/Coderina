import React from "react";
import CustomButton from "./CustomButton";

const FirstRoboticsRegistration = () => {
  return (
    <section className="mt-10 px-4 md:px-8 lg:px-16 py-10 bg-white rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
      
      {/* Left Card: Bootcamp Info */}
      <div className="bg-[#E8FBF2] md:bg-[#FFF5E5] p-6 rounded-xl text-[#321414] flex flex-col justify-between h-full min-h-[420px]">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold ">
            ROBOTICS & CODING BOOTCAMP
          </h2>

          <p className="text-sm text-gray-500">
            📅 4th-28th August 2025 | ⏰ 10:00am - 1:00pm
          </p>

          <div>
            <h3 className="text-lg font-semibold text-[#256D85] mb-2">
              What You`ll Learn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-gray-700 text-sm">
              <p>• Web Development</p>
              <p>• App Development</p>
              <p>• Scratch</p>
              <p>• Python</p>
              <p>• Robotics</p>
              <p>• Graphics Design</p>
              <p>• Drone Piloting</p>
              <p>• Video Editing & Photography</p>
            </div>
          </div>

          <p className="text-green-800 font-medium mt-4">
            Virtual and Physical Class Available
          </p>
          <p className="text-sm text-gray-700">Registration closes soon</p>
        </div>

        <div className="mt-6">
          <CustomButton href="http://bootcamp.ng" label="Register" />
        </div>
      </div>

      {/* Right Card: First Robotics Info */}
      <div className="text-[#321414] bg-[#FDEFD9] md:bg-[#E8FBF2] p-6 rounded-xl flex flex-col justify-between h-full min-h-[420px]">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
            FIRST ROBOTICS REGISTRATION
          </h2>

          <p className="text-sm text-gray-500 mb-4">
            📅 Ongoing | 🕘 Saturdays | ⏰ 10AM - 12PM
          </p>

          <p className="text-base text-gray-700 mb-4 leading-relaxed">
            🚀 Join the <strong>FIRST LEGO League</strong>, an immersive robotics
            program where kids explore problem-solving through{" "}
            <strong>STEM challenges, coding, and teamwork</strong>.
          </p>

          <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
            <li>Build and program LEGO robots</li>
            <li>Engage in hands-on robotics competitions</li>
            <li>Develop critical thinking and collaboration skills</li>
            <li>Compete at local and national levels</li>
          </ul>
        </div>

        <div className="mt-4">
          <CustomButton href="/firstlegoleague" label="Register" />
        </div>
      </div>
    </section>
  );
};

export default FirstRoboticsRegistration;
