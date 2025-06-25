
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../lib/imageUrl";
import { useBlogContext } from "./contexts/BlogContext";

// Define your API URL if needed
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const General = () => {
  const { blogs, loading, error } = useBlogContext();

  if (loading) return <p className="text-center py-8">Loading...</p>;
  if (error) return <p className="text-center py-8 text-red-500">{error}</p>;
  if (!blogs || blogs?.length === 0)
    return <p className="text-center py-8 md:py-16">No posts found.</p>;

  return (
    <div className="bg-background px-2 md:px-4 lg:px-20 py-8 md:py-12">
      <div className="flex items-center justify-between text-[13px] text-color px-2 py-5 border-b-[0.6px] border-color">
        <p className="font-semibold">POSTS</p>
        <Link href="/category/general">
          <i>see all in posts</i>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 2xl:grid-cols-4 gap-y-5 sm:gap-y-0 sm:gap-x-3 md:gap-x-4 lg:gap-x-16 mt-8 lg:mt-10">
        {blogs.slice(0, 3).map((post, index) => {
          const imageUrl = post?.image
            ? urlFor(post.image).width(800).height(600).url()
            : "/default-image.png";
          console.log("Image URL:", imageUrl);

          return (
            <div key={index} className="overflow-hidden">
              <div className="relative w-full h-64">
                <Image
                  src={imageUrl}
                  alt={post?.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg text-color font-semibold">
                  {post?.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default General;
