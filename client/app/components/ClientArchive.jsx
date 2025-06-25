// components/ClientArchive.jsx
"use client";

import { useBlogContext } from "./contexts/BlogContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import Follow from "./Follow";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import { urlFor } from "../lib/imageUrl"; // adjust path as needed

import { FaRegCalendarAlt, FaRegClock, FaEye } from "react-icons/fa";

export default function ClientArchive({ year, month }) {
  const { blogs, formatTime } = useBlogContext();
  const [filtered, setFiltered] = useState([]);
  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const result = blogs.filter((post) => {
      const date = new Date(post._createdAt); // instead of post.createdAt
      return (
        date.getFullYear() === parseInt(year) &&
        date.getMonth() + 1 === parseInt(month)
      );
    });

    setFiltered(result);
  }, [blogs, year, month]);

  const categoryContents = [
    {
      bgImage: "",
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
    <div className="  bg-background text-color ">
      <div className="px-2 md:px-4 lg:px-8  py-8">
        <h1 className="text-3xl md:text-5xl text-center font-bold mb-6 capitalize mt-8 md:mt-10">
          <span className="text-[13px] text-socialT uppercase font-light tracking-[2px] py-4">
            {" "}
            Monthly Archives
          </span>{" "}
          <br />
          {new Date(`${year}-${month}-01`).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h1>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-8 mt-16 2xl:mt-[8rem] mb-24 max-w-[400px] sm:max-w-[80rem] mx-auto">
          {filtered.length > 0 ? (
            filtered.map((post) => (
              <li key={post.id}>
                <Link href={`/posts/${post.slug.current}`}>
                  <div className="relative h-72 w-full">
                    <Image
                      src={urlFor(post?.image).width(800).height(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                      unoptimized
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
                      <span>{post.readTime || 1} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye />
                      <span>{post?.views || 0} views</span>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>No posts found for this month.</p>
          )}
        </ul>
      </div>

      {/* downside */}
      {categoryContents.map((content, index) => {
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
}
