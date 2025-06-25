"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Follow from "./Follow";
import Subscribe from "./Subscribe";
import { usePostContext } from "./contexts/PostContext"; // adjust if needed
const Custom404 = () => {
  const [search, setSearch] = useState("");
  const { blogs = [] } = usePostContext();

  const filteredPosts = blogs.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className=" w-full bg-background text-color h-screen flex flex-col items-center justify-center">
      <div className="text-center max-w-[90rem] mx-auto px-2 md:px-4 lg:px-16 ">
        {/* <h1 className="text-6xl lg:text-8xl font-bold mb-4">404</h1> */}
        <h1 className="text-2xl font-bold mb-4">Sorry, we couldn`t find this post.</h1>
        <p className="text-md font-semibold mb-4 ">
          The post you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
          <p className="text-md  mb-6">Please try using our search box below.</p>
        <div className="w-full border-[1px] bg-background border-color mb-6">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="py-4 px-2 w-full bg-transparent border-none  outline-none focus:border-none"
          />
        </div>

        {search && (
          <div className="mt-4 text-left">
            
            {filteredPosts.length > 0 ? (
              <ul className="space-y-2 text-[14px]">
                {filteredPosts.map((post) => (
                  <li key={post._id}>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="hover:underline text-color2"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No posts found.</p>
            )}
          </div>
        )}

        <Link
          href="/"
          className="text-color2  py-8 hover:underline"
        >
          Go back to the homepage
        </Link>
      </div>
      {/* <Follow />
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

      <Footer /> */}
    </div>
  );
};

export default Custom404;
