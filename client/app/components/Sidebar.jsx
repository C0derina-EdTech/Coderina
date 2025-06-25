import React from "react";
import FollowMe from "./FollowMe";
import RecentPins from "./RecentPins";
import PopularPost from "./PopularPost";
import Link from "next/link";
import { useBlogContext } from "./contexts/BlogContext";
const Sidebar = () => {
  const {
    post,
    loading,
    archiveDates,
    blogId,
    searchTerm,
    blogs,
    setSearchTerm,
    filteredPosts,
  } = useBlogContext();

  blogs.forEach((post) => {
    console.log(post?.category); // Log categories of each post
  });

  const cate = Array.from(
    new Set(blogs.flatMap((post) => post?.category || []).filter(Boolean))
  ).sort();

  console.log(cate); // Check the categories array

  return (
    <aside className=" text-color2 mt-12 lg:mt-0">
      {/* search */}
      <div className="mb-8">
        <label htmlFor="search" className="sr-only outline-none  ">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded bg-gray-800 text-white"
        />
      </div>

      {/* recent posts */}
      <div className="mb-6 text-color2">
        <h2 className="font-bold mb-2">Recent Posts</h2>
        <ul className="text-sm space-y-1">
          {(searchTerm ? filteredPosts : blogs).map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post?.slug?.current}`}>
                <h2 className="hover:underline cursor-pointer">
                  {post?.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-16">
        <h2 className="font-bold mb-2">Recent Comments</h2>
        <p className="text-sm ">
          Reverse lookup service on It`s that time again…
        </p>
      </div>

      {/* archive */}

      <div className="py-16">
        <h2 className="font-bold mb-2">Archives</h2>
        <ul className="text-sm space-y-1">
          {archiveDates.map((date) => (
            <li key={date}>
              <Link href={`/${date}`}>
                {new Date(`${date}/01`).toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="font-bold mb-2">Categories</h2>
        <ul className="text-sm space-y-1 cursor-pointer ">
          {cate.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FollowMe />
      <RecentPins />
      <PopularPost />
    </aside>
  );
};

export default Sidebar;
