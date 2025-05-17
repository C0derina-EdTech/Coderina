"use client";
import React from "react";
import FairHeader from "../../components/projectscomponents/FairHeader";
import Projects from "../../components/projectscomponents/Projects";
import Footer from "../../components/Footer";
import SubscribeForm from "../../components/SubscribeForm";
const page = () => {
  return (
    <div>
      <div className="max-w-[100rem] mx-auto">
        <FairHeader />
        <div className=" px-2 md:px-4 lg:px-8">
          <Projects />
          <SubscribeForm />
        </div>
      </div>
      <div className="bg-[#1a1a1a]">
        <div className="max-w-[100rem] mx-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default page;
