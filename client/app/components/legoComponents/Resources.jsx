"use client";

import React from "react";
import edit from "../../../public/edit.png";
import pic from "../../../public/pic.png";
import set from "../../../public/setting.png";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const Resources = () => {
  const cardContent = [
    {
      img: edit,
      description: "Discover FIRST Tech Challenge's impact on our community",
      link: "Read Blog",
    },
    {
      img: pic,
      description: "Take a look at what FIRST Tech Challenge is all about",
      link: "View Gallery",
    },
    {
      img: set,
      description: "Discover FIRST Tech Challenge's impact on our community",
      link: "View Resource Library",
    },
  ];

  return (
    <div className="bg-[#e9f9fe] p-6 md:p-12 rounded-xl flex flex-col gap-8">
      <h2 className="text-[22px] md:text-[28px] font-semibold">Resources</h2>

      <div className="flex flex-col gap-6">
        {cardContent.map((content, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <Image src={content.img} alt="icon" className="h-[18px] w-auto" />
              <p className="text-[14px] md:text-[18px]">{content.description}</p>
            </div>

            <div className="flex">
              <Link
                href="form"
                className="flex items-center justify-center font-medium text-[14px] md:text-[17px] gap-1 -tracking-tight"
              >
                {content.link}
                <BsArrowRight size={20} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
