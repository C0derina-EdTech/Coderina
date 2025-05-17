"use client";

import React from "react";

import SubscribeForm from "./SubscribeForm";

import Sponsors from "./Sponsors";

const Subscribers = () => {


  return (
    <div className="w-full font-Geist px-2 md:px-4 lg:px-16 py-8 bg-[#FFF5E5]">
      <Sponsors />
      {/* <Space /> */}
      <SubscribeForm />
    </div>
  );
};

export default Subscribers;
