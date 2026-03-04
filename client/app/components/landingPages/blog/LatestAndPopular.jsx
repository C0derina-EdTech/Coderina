"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../lib/imageUrl";
import { Link as LinkIcon } from "lucide-react";

const WORD_LIMIT_TITLE = 12;
const WORD_LIMIT_EXCERPT = 18;

const truncateWords = (text = "", limit) => {
  const words = text.split(" ");
  if (words.length <= limit) return text;
  return words.slice(0, limit).join(" ") + "...";
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

const calculateReadTime = (content) => {
  const words = content?.split(" ").length || 0;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

const LatestAndPopular = ({ posts = [] }) => {
 

  if (!posts.length) return null;

  // Sort latest
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);

  // Popular logic (you can later replace with views field)
  const popularPosts = [...posts]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5);

  const copyLink = (slug) => {
    const url = `${window.location.origin}/newsroom/${slug.current}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-8 lg:gap-10">
        
        {/* ───────────── Latest Posts ───────────── */}
        <div>
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-700 tracking-wide">
              Latest Posts
            </h2>
            <div className="mt-1 h-[2px] w-8 bg-gray-800 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {latestPosts.map((post) => (
              <article key={post._id} className="group cursor-pointer">
                
                <Link href={`/newsroom/${post.slug?.current}`}>
                  <div className="relative w-full aspect-[16/10] rounded-sm overflow-hidden mb-3">
                   

                    {post?.featuredVideo ? (
    <>
      {/* Static video preview (no autoplay) */}
      <video
        src={post.featuredVideo}
        className="h-full w-full object-cover"
        muted
        playsInline
        preload="metadata"
      />

      {/* Play Icon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 group-hover:bg-black/40">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <svg
            className="h-6 w-6 text-red-700 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </>
  ) : (
    <Image
     src={post?.featuredImage || "/placeholder.jpg"}
                     alt={post.title}
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={false}
    />
  )}
                  </div>
                </Link>

                <Link href={`/newsroom/${post.slug?.current}`}>
                  <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                    {truncateWords(post.title, WORD_LIMIT_TITLE)}
                  </h3>
                </Link>

                <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                  {truncateWords(post.description || "", WORD_LIMIT_EXCERPT)}
                </p>

                {/* Author Meta */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    {post.author?.image && (
                      <div className="relative w-5 h-5 rounded-full overflow-hidden">
                        <Image
                          src={post.author.image}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          sizes="20px"
                        />
                      </div>
                    )}
                    <span className="text-[10px] font-medium text-gray-800">
                      {post.author?.name}
                    </span>
                    <span className="text-gray-300 text-[10px]">·</span>
                    <span className="text-[10px] text-gray-400">
                      {formatDate(post.publishedAt)} ·{" "}
                      {post.readTime} min read
                    </span>
                  </div>

                  {/* Copy Link */}
                  <LinkIcon 
                    onClick={() => copyLink(post.slug)}
                    className="w-4 h-4 text-gray-400 hover:text-red-700 transition-colors cursor-pointer"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ───────────── Popular Posts ───────────── */}
        <div>
          <div className="mb-4">
            <h2 className="text-sm font-semibold text-gray-700 tracking-wide">
              Popular Posts
            </h2>
            <div className="mt-1 h-[2px] w-8 bg-gray-800 rounded-full" />
          </div>

          <div className="flex flex-col divide-y divide-gray-100">
            {popularPosts.map((post, index) => (
              <div
                key={post._id}
                className="flex gap-3 items-start py-3 group cursor-pointer"
              >
                <span className="text-[22px] font-extrabold text-gray-100 leading-none select-none mt-0.5 w-7 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <Link href={`/newsroom/${post.slug?.current}`}>
                    <h4 className="text-[12px] sm:text-[13px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:text-red-600 transition-colors">
                      {truncateWords(post.title, WORD_LIMIT_TITLE)}
                    </h4>
                  </Link>

                  <div className="flex items-center gap-1 flex-wrap mt-1">
                    <span className="text-[10px] font-medium text-gray-800">
                      {post.author?.name}
                    </span>
                    <span className="text-gray-300 text-[10px]">·</span>
                    <span className="text-[10px] text-gray-400">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestAndPopular;