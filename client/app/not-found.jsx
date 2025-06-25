"use client";
import React from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Follow from "./components/Follow";
import Subscribe from "./components/Subscribe";
import Navbar from "./components/Navbar";
const NotFound = () => {
  return (
    <div className=" w-full bg-white text-black">
      <div className="text-center max-w-[80rem] mx-auto px-2 md:px-4 lg:px-16 pt-[5rem] lg:pt-[10rem]">
        <h1 className="text-6xl lg:text-8xl font-bold mb-4">404</h1>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-md font-semibold mb-4 ">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="text-md  mb-6">Please try using our search box below.</p>
        <div className="border-[1px] bg-background border-color mb-6">
          <input
            type="text"
            placeholder="Search"
            className="py-4 px-2 w-full bg-transparent border-none  outline-none focus:border-none"
          />
        </div>
        <Link href="/" className="text-color2  py-8 hover:underline">
          Go back to the homepage
        </Link>
      </div>
      <Follow />
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",

          backgroundRepeat: "no-repeat",
        }}
        className="w-full"
      >
        <Subscribe />
      </div>
      <div className="bg-[#232323]">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
