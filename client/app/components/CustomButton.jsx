"use client";

import Link from "next/link";

const CustomButton = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="relative flex items-center justify-center  w-44  text-nowrap   bg-black text-white  rounded-3xl text-[14px]  cursor-pointer hover:bg-black hover:text-white transition-all ease-in-out duration-700  py-2 px-2    font-medium group overflow-hidden"
    >
      {/* Default Text */}
      <span className="relative flex items-center justify-center z-10 group-hover:opacity-0 transition-opacity duration-700 ease-in-out">
        <p>{label}</p>
      </span>

      {/* Hover Text */}
      <span className="absolute inset-0 flex items-center justify-center text-white  font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
        Go!
      </span>
    </Link>
  );
};

export default CustomButton;
