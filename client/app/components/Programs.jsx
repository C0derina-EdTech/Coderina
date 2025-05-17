import React from "react";
import Link from "next/link";

const Programs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-2 md:px-4 lg:px-16 py-8  text-white">
      {/* Easter Bootcamp Registration Card */}
      <div
        className="relative bg-[#fff5ef] p-6 w-full md:w-1/2 rounded-lg flex flex-col justify-between"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 12% 100%)" }}
      >
        <h2 className="text-lg text-black font-bold">EASTER BOOTCAMP REGISTRATION</h2>
        <p className="text-black font-medium mb-4">
          📅 <strong>April 2nd - 17th, 2025</strong> | 🕘 Monday-Wednesday | ⏰ 11AM - 1PM
        </p>
        <div className="bg-[#f3fdf6] ml-10 border-l-4 border-[#0a5d23] p-5 rounded-md shadow-md">
          <p className="text-gray-800 font-medium leading-relaxed">
            🚀 Register your child for our exciting <strong>Easter Bootcamp!</strong> 
            We offer both <span className="text-[#0a5d23] font-semibold">physical</span> and 
            <span className="text-[#0a5d23] font-semibold"> virtual</span> classes in:
          </p>

          <ul className="mt-3 space-y-1 text-gray-800 list-disc list-inside">
          <li>Python/Scratch Programming</li>
            <li>Python/Scratch Programming</li>
            <li>App Development</li>
            <li>Web Design</li>
            <li>Graphics Design</li>
          </ul>

          <DynamicLink href="/bootcamp">Register</DynamicLink>
        </div>
      </div>

      {/* FIRST Robotics Registration Card */}
      <div
        className="relative bg-[#d0f3ff] p-6 w-full md:w-1/2 rounded-lg flex flex-col justify-between"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 88% 100%, 0% 100%)" }}
      >
        <h2 className="text-lg text-black font-bold">FIRST ROBOTICS REGISTRATION</h2>
        <p className="text-black font-medium mb-4">
          📅 <strong>Ongoing</strong> | 🕘 Saturdays | ⏰ 10AM - 12PM
        </p>
        <div className="bg-[#f3fdf6] mr-10 border-l-4 border-[#0a5d23] p-5 rounded-md shadow-md">
          <p className="text-gray-800 font-medium leading-relaxed">
            🚀 Join the <strong>FIRST LEGO League</strong>, an immersive robotics program 
            where kids explore problem-solving through **STEM challenges, coding, and teamwork**. 
            Participants will:
          </p>

          <ul className="mt-3 space-y-1 text-gray-800 list-disc list-inside">
            <li>Build and program LEGO robots</li>
            <li>Engage in hands-on robotics competitions</li>
            <li>Develop critical thinking and collaboration skills</li>
            <li>Compete at local and national levels</li>
          </ul>

          <DynamicLink href="/firstlegoleague">Register</DynamicLink>
        </div>
      </div>
    </div>
  );
};

// Reusable Dynamic Link Component
const DynamicLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="mt-4 max-w-[11rem] mx-auto relative border-[1.3px] border-black bg-black text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-500 rounded-3xl py-2 px-6 text-[14px]  font-medium group overflow-hidden flex items-center justify-center"
    >
      {/* Default Text */}
      <span className="relative z-10 transition-all duration-500 group-hover:translate-y-[-100%] group-hover:opacity-0">
        {children}
      </span>

      {/* Hover Text */}
      <span className="absolute inset-0 flex items-center justify-center text-green-800 font-medium scale-0 group-hover:scale-100 transition-transform duration-500">
        🚀 Let`s Go!
      </span>

      {/* Underline Swipe Effect */}
      <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-800 transition-all duration-500 group-hover:w-full"></span>
    </Link>
  );
};

export default Programs;
