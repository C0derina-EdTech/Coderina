"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useBlogContext } from "../../contexts/BlogContext";
import { urlFor } from "../../lib/imageUrl";
import { UpcomingEventsSkeletonLoader } from "../../lib/Loaders";
import { Eye } from "lucide-react";

export default function Blog({ isLargeScreen }) {
  const { blogs = [], loading } = useBlogContext();

  if (loading) return <p className="text-center py-8">Loading...</p>;

  if (!blogs || blogs?.length === 0) {
    return null;
  }
  return (
    <>
      <section className="py-16 lg:py-24 xl:py-32 bg-[#f9fafb]">
        <div className="max-w-[130rem] mx-auto px-4 md:px-4 lg:px-8 xl:px-10">
          <div className="text-center mb-12 lg:mb-16 xl:mb-20">
            <p className="text-[#1a3a52] text-xs lg:text-sm font-semibold mb-2 tracking-wide uppercase">
              Our Latest Updates
            </p>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#133c55]">
              Discover What’s New at{" "}
              <span className="text-[#f9a826]">Coderina</span>
            </h2>
          </div>

          {/* ✅ Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((post, index) => (
              <div
                key={post.id}
                className="bg-white rounded-xl overflow-hidden hover:shadow-sm transition-all duration-300"
              >
                <div className={`relative w-full h-56 lg:h-[20rem]  overflow-hidden ${isLargeScreen ? "h-[22rem]" : "lg:h-56"}`}>
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute bottom-4 left-4 bg-[#f9a826] text-[#133c55] px-4 py-1.5 rounded-full text-xs font-semibold">
                    {post.category[0]?.charAt(0).toUpperCase() +
                      post.category[0]?.slice(1)}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span>By Coderina</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" /> {/* Icon size */}
                      {post.views}k
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug.current}`}>
                    <h3 className={`text-xs font-bold text-[#133c55] mb-2 hover:text-[#f9a826] transition-colors truncate w-full overflow-hidden text-ellipsis whitespace-nowrap ${isLargeScreen ? "text-xl" : "md:text-sm"}`}>
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
