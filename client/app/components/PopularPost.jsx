import React from "react";
import Image from "next/image";
import { useBlogContext } from "./contexts/BlogContext";
import { urlFor } from "../lib/imageUrl";
// Define your API URL if needed
const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const PopularPost = () => {
  const { blogs, loading, error, formatTime } = useBlogContext();

  if (loading) return <p className="text-center">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading posts</p>;
  if (!blogs || blogs.length === 0)
    return <p className="text-center">No posts available</p>;

  // Sort blogs from newest to oldest
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const mainPost = sortedBlogs[0];
  const restPosts = sortedBlogs.slice(1, 4); // Next 3

  return (
    <div className="space-y-6 p-3 md:border md:border-gray-400 max-w-md mx-auto mt-10">
      {/* Highlight first post */}
      <div className="p-2">
        <div className="relative h-72 w-full">
          <Image
           src={urlFor(mainPost?.image).width(800).height(600).url()}
            alt={mainPost.title}
            fill
            className="rounded object-cover"
            unoptimized
          />
        </div>
        <h1 className="text-[15px] font-semibold mt-4">{mainPost.title}</h1>
        <p className="text-gray-500 text-sm">
          {formatTime(mainPost?._createdAt)}
        </p>
      </div>

      {/* Display rest */}
      <div className="flex flex-col gap-4">
        {restPosts.map((post, index) => {
          const imageUrl = post?.image
            ? urlFor(post.image).width(800).height(600).url()
            : "/default-image.png";
         

          return (
            <div key={post.id || index} className="flex gap-4 items-start">
              <div className="relative h-24 w-48">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="rounded object-cover"
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-[15px] font-semibold">
                  {post.title.split(" ").slice(0, 6).join(" ")}...
                </h2>
                <p className="text-sm text-gray-400">
                  {formatTime(post?._createdAt)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularPost;
