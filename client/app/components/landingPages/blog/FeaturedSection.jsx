"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Link2 } from "lucide-react";
import { urlFor } from "../../lib/imageUrl";

// ─── Sub-components (UNCHANGED STRUCTURE) ─────────────────────────────

const CategoryTag = ({ category }) => (
  <span className="text-[10px] font-semibold uppercase tracking-widest text-blue-600 mb-1 block">
    {category}
  </span>
);

const AuthorMeta = ({ author, publication, date, readTime, small }) => (
  <div
    className={`flex items-center gap-1 flex-wrap ${small ? "mt-1" : "mt-2"}`}
  >
    <span
      className={`font-medium text-gray-800 ${small ? "text-[10px]" : "text-xs"}`}
    >
      {author}
    </span>
    <span className={`text-gray-400 ${small ? "text-[10px]" : "text-xs"}`}>
      in
    </span>
    <span className={`text-gray-500 ${small ? "text-[10px]" : "text-xs"}`}>
      {publication}
    </span>
    <span className="text-gray-300 text-[10px]">·</span>
    <span className={`text-gray-400 ${small ? "text-[10px]" : "text-xs"}`}>
      {date} · {readTime}
    </span>
  </div>
);

// ─── Featured Section (SAME STRUCTURE) ────────────────────────────────

const FeaturedSection = ({ posts = [] }) => {

  // Feature posts where author is NOT Coderina EdTech Foundation
  const validPosts = posts.filter(
    (post) => post?.author?.name !== "Coderina EdTech Foundation"
  );

  if (!validPosts || validPosts.length === 0) return null;

  // First post = large
  const large = validPosts[0];

  // Rest = small
  const smalls = validPosts.slice(1, 7);

  const copyLink = (slug) => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url);
  };

  const getImageUrl = (post) =>
    post?.featuredImage ? urlFor(post.featuredImage).url() : null;

  return (
    <section className="mb-8 md:mb-10">
      {/* Section header */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-700 tracking-wide">
          Featured for members
        </h2>
        <div className="mt-1 h-[2px] w-12 bg-gray-800 rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {/* Large featured card */}
        <article
          className="sm:col-span-2 lg:col-span-1 group cursor-pointer"
          itemScope
          itemType="https://schema.org/BlogPosting"
        >
          <Link href={`/blog/${large?.slug?.current}`}>
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] rounded-sm overflow-hidden mb-3">
              {getImageUrl(large) ? (
                <Image
                  src={getImageUrl(large)}
                  alt={large?.title}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              ) : large?.featuredVideo ? (
                <div className="relative w-full h-full bg-black">
                  <video
                    src={large.featuredVideo}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              ) : null}
            </div>
          </Link>

          <CategoryTag category={large?.category?.title} />

          <h3 className="text-sm sm:text-[15px] font-bold text-gray-900 leading-snug group-hover:underline line-clamp-3">
            <Link href={`/blog/${large?.slug?.current}`}>
              {large?.title}
            </Link>
          </h3>

          <AuthorMeta
            author={large?.author?.name}
            publication="Coderina Blog"
            date={new Date(large?.publishedAt).toDateString()}
            readTime={large?.readTime || "5 min read"}
          />

          {/* Copy Link */}
          <button
            onClick={() => copyLink(large?.slug?.current)}
            className="mt-2 flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-800"
          >
            <Link2 size={14} />
            Copy link
          </button>
        </article>

        {/* Right column – EXACT SAME STRUCTURE */}
        <div className="sm:col-span-2 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {/* Column A */}
          <div className="flex flex-col gap-4">
            {smalls.slice(0, 3).map((post) => (
              <SmallFeaturedCard key={post._id} post={post} />
            ))}
          </div>

          {/* Column B */}
          <div className="flex flex-col gap-4">
            {smalls.slice(3, 6).map((post) => (
              <SmallFeaturedCard key={post._id} post={post} />
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
        <div className="border-t border-gray-100 my-6 2xl:my-8" />
    </section>
  );
};

// ─── Small Card (UNCHANGED LAYOUT) ────────────────────────────────

const SmallFeaturedCard = ({ post }) => {
  const imageUrl = post?.featuredImage
    ? urlFor(post.featuredImage).url()
    : null;

  const copyLink = (slug) => {
    const url = `${window.location.origin}/newsroom/${slug}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <article className="flex gap-3 group cursor-pointer">
      <Link href={`/blog/${post?.slug?.current}`}>
        <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex-shrink-0 rounded-sm overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={post?.title}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
            />
          ) : post?.featuredVideo ? (
            <div className="relative w-full h-full bg-black">
              <video
                src={post.featuredVideo}
                className="w-full h-full object-cover"
                preload="metadata"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Play className="w-6 h-6 text-white" />
              </div>
            </div>
          ) : null}
        </div>
      </Link>

      <div className="flex-1 min-w-0">
        <h4 className="text-[12px] sm:text-[13px] font-semibold text-gray-900 leading-snug line-clamp-2 group-hover:underline">
          <Link href={`/blog/${post?.slug?.current}`}>
            {post?.title}
          </Link>
        </h4>

        <AuthorMeta
          author={post?.author?.name}
          publication="Coderina Blog"
          date={new Date(post?.publishedAt).toDateString()}
          readTime={post?.readTime || "5 min read"}
          small
        />

        <button
          onClick={() => copyLink(post?.slug?.current)}
          className="mt-1 flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-800"
        >
          <Link2 size={12} />
          Copy
        </button>
      </div>
    </article>
  );
};

export default FeaturedSection;