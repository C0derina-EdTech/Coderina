"use client";

import Image from "next/image";
import Link from "next/link";
import { usePost } from "../../contexts/PostContext";
import { useEffect, useState } from "react";

// ─── Trending Card ─────────────────────────────────────────────
function TrendingCard({ topic }) {
  return (
    <Link
      href={`/newsroom/${topic.slug.current}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
    >
      {/* Media */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        {topic?.featuredVideo ? (
          <>
            <video
              src={topic.featuredVideo}
              className="w-full h-full object-cover"
              muted
              playsInline
              
              preload="metadata"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <svg className="w-4 h-4 text-red-700 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </>
        ) : (
          <Image
            src={topic?.featuredImage || "/placeholder.jpg"}
            alt={topic.title}
            fill
            unoptimized
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category pill */}
        {topic.category?.[0] && (
          <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/90 text-red-700">
            {topic.category[0]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 p-3.5">
        <h3 className="text-xs font-bold leading-snug text-gray-900 line-clamp-2 group-hover:text-red-700 transition-colors duration-200">
          {topic.title}
        </h3>
        {topic.description && (
          <p className="text-[11px] leading-relaxed text-gray-400 line-clamp-2">
            {topic.description}
          </p>
        )}
        {topic.publishedAt && (
          <p className="text-[10px] text-gray-300 mt-0.5">
            {new Date(topic.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric", month: "short", year: "numeric",
            })}
          </p>
        )}
      </div>
    </Link>
  );
}

// ─── News Item ──────────────────────────────────────────────────
function NewsItem({ item }) {
  return (
    <Link
      href={item.href}
      className="group flex flex-col gap-1.5 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
    >
      <p className="text-xs font-semibold leading-snug text-gray-800 group-hover:text-red-700 transition-colors duration-200 line-clamp-2">
        {item.title}
      </p>
      <div className="flex items-center gap-2">
        <span className="text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-red-50 text-red-700">
          {item.tag}
        </span>
        <span className="text-[10px] text-gray-300">{item.readTime}</span>
      </div>
    </Link>
  );
}

// ─── Main Component ─────────────────────────────────────────────
export default function News() {
  const { posts = [], loading } = usePost();

  // track viewport to know active grid cols
  const [cols, setCols] = useState(2);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCols(3);      // xl → 3 cols → show 6
      else if (window.innerWidth >= 768) setCols(2);  // md → 2 cols → show 4
      else setCols(1);                                // mobile → show 4
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (loading) return (
    <section className="w-full bg-[#fafafa] py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-xl bg-gray-100 animate-pulse aspect-[4/3]" />
          ))}
        </div>
      </div>
    </section>
  );

  if (!posts?.length) return null;

  const sorted = [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Smart slice: 6 for 3-col, 4 for everything else
  const trendingCount = cols >= 3 ? 6 : 4;
  const trending = sorted.slice(0, trendingCount);
  const latest   = sorted.slice(0, 5);

  return (
    <section className="w-full bg-[#fafafa] py-12 md:py-16">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-10 items-start">

          {/* ── LEFT: Trending ── */}
          <div className="hidden sm:block flex-1 min-w-0">

            {/* Section header */}
            <div className="flex items-end gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
                  Explore
                </span>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5 tracking-tight">
                  Trending Topics
                </h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-red-100 to-transparent mb-1.5 hidden sm:block" />
              <Link
                href="/newsroom"
                className="text-[11px] font-semibold text-red-700 hover:text-red-800 transition-colors mb-1 whitespace-nowrap flex-shrink-0"
              >
                See all →
              </Link>
            </div>

            {/* Grid — 1 col mobile, 2 col md, 3 col xl */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-3">
              {trending.map((topic) => (
                <TrendingCard key={topic._id} topic={topic} />
              ))}
            </div>
          </div>

          {/* ── RIGHT: Latest News ── */}
          <aside className="w-full lg:w-72 xl:w-80 flex-shrink-0 lg:sticky lg:top-6">
            <div className="bg-white border border-gray-100 rounded-sm p-5 ">

              {/* Header */}
              <div className="mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-700">
                  Latest
                </span>
                <h2 className="text-sm font-extrabold text-gray-900 mt-0.5 tracking-tight">
                  Latest News
                </h2>
                <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">
                  Coderina's latest milestones and stories.
                </p>
              </div>

              {/* List */}
              <div className="flex flex-col gap-4">
                {latest.map((post) => (
                  <NewsItem
                    key={post._id}
                    item={{
                      title: post.title,
                      tag: post.tags?.[0] || post.category?.[0] || "News",
                      readTime: `${post.readTime || 3} min read`,
                      href: `/newsroom/${post.slug.current}`,
                    }}
                  />
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/newsroom"
                className="mt-5 flex items-center justify-between text-xs font-bold text-gray-800 hover:text-red-700 transition-colors pt-4 border-t border-gray-100 group"
              >
                View all news
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}