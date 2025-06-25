"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegClock, FaEye } from "react-icons/fa";
import Follow from "./Follow";
import Footer from "./Footer";
import { urlFor } from "../lib/imageUrl";
import Subscribe from "./Subscribe";
import { useBlogContext } from "./contexts/BlogContext";

const GeneralPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { formatTime, loading, blogs } = useBlogContext();

  const cate = Array.from(
    new Set(blogs.flatMap((post) => post?.category || []).filter(Boolean))
  ).sort();

  console.log(cate); // Check the categories array

  const filtered =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((post) =>
          post.category?.some(
            (cat) => cat.toLowerCase() === selectedCategory.toLowerCase()
          )
        );

  const generalContents = [
    {
      bgColor: "#ffffff",
      section: <Follow />,
    },

    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
    {
      bgColor: "#232323",
      section: <Footer />,
    },
  ];
  return (
    <div className="text-color">
      <div className="pt-2 md:pt-10 bg-background text-color px-2 md:px-4 lg:px-8  py-8">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 capitalize">
          GENERAL
        </h1>
        {/* category */}
        <div className="border-t-[1px] border-color border-b-[1px] py-4 lg:py-8 uppercase">
          <ul className="text-[13px] cursor-pointer flex items-center justify-center gap-x-10 ">
            <li
              onClick={() => setSelectedCategory("All")}
              className={`hover:underline ${
                selectedCategory === "All" ? "font-bold" : ""
              }`}
            >
              All
            </li>
            {cate.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`hover:underline ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* display blog section map out all blogs by default*/}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-8 mt-16 2xl:mt-[8rem] max-w-[400px] sm:max-w-[80rem] mx-auto">
          {filtered.map((post) => (
            <div key={post.id} className="">
              <Link href={`/posts/${post?.slug?.current}`}>
                <div className="relative h-72 w-full">
                  <Image
                    src={urlFor(post.image).width(800).height(600).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg text-color font-semibold">
                    {post.title}
                  </h3>
                  {/* <p className="text-sm text-gray-600">{post.date}</p> */}
                </div>

                <div className="flex items-center justify-start text-sm space-x-3">
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt />
                    <span>{formatTime(post._createdAt)}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FaRegClock />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{post?.views || 0} views</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* downside */}
      {generalContents.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GeneralPage;
