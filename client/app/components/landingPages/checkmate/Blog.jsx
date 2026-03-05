"use client";

import { useState } from "react";
import { usePost } from "../../contexts/PostContext";
import Link from "next/link";
export default function Blog({
  tagLine = "Blog & Insights",
  headingLine1 = "Stories from",
  headingHighlight = "the Board",
  initialCount = 3,
}) {
  const { posts = [] } = usePost();
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const checkmatePosts = posts.filter((post) =>
    post.category?.some((cat) => cat.slug?.current === "checkmate"),
  );
  const visiblePosts = showAllBlogs
    ? checkmatePosts
    : checkmatePosts.slice(0, initialCount);

  return (
    <div className="max-w-[90rem] mx-auto px-2 md:px-4 lg:px-8 2xl:px-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <p className="thin-line text-xs uppercase tracking-[0.22em] text-red-700 font-sans font-medium mb-4">
            {tagLine}
          </p>

          <h2 className="heading text-4xl md:text-5xl font-light leading-tight">
            {headingLine1}
            <br />
            <em className="font-semibold">{headingHighlight}</em>
          </h2>
        </div>

        {!showAllBlogs && checkmatePosts.length > initialCount && (
          <button
            className="btn-outline px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-medium"
            onClick={() => setShowAllBlogs(true)}
          >
            View All Posts
          </button>
        )}
      </div>

      <div className="space-y-0">
        {visiblePosts.map((post, i) => {
          const categoryTitle = post.category?.[1]?.title || "General";
          const formattedDate = post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })
            : "";

          return (
            <Link href={`/newsroom/${post.slug?.current || ""}`} key={post._id}>
              <article className="chess-hover group border-t border-gray-200 px-2 py-8 grid sm:grid-cols-[1fr_2fr] md:grid-cols-[180px_1fr_auto] gap-4 md:gap-8 items-start cursor-pointer">
                <div className="flex flex-col gap-1">
                  <span className="blog-tag">{categoryTitle}</span>

                  <span className="text-xs text-gray-400 font-sans">
                    {formattedDate}
                  </span>
                </div>

                <div>
                  <h3 className="heading text-xl md:text-2xl font-semibold leading-tight mb-2 group-hover:text-red-700 transition-colors line-clamp-1">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed font-sans font-light line-clamp-2">
                    {post.description}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className="text-[0.68rem] uppercase tracking-widest text-gray-400 font-sans whitespace-nowrap">
                    {post.readTime} min read
                  </span>

                  <span className="text-red-700 text-sm group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                </div>
              </article>
            </Link>
          );
        })}

        <div className="border-t border-gray-200" />

        <Link
          href="/newsroom/category/checkmate"
          className="italic text-xs text-gray-700 hover:text-red-700 py-4 flex items-center gap-1 relative group cursor-pointer"
        >
          see all
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
          
        </Link>
      </div>

      {showAllBlogs && (
        <div className="mt-8 text-center">
          <button
            className="btn-outline px-6 py-2.5 rounded-sm text-[10px] uppercase tracking-widest font-sans font-medium"
            onClick={() => setShowAllBlogs(false)}
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
