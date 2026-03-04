"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import BlogContent from "./BlogContent";
import Navbar from "../home/Nav";
import { usePost } from "../../contexts/PostContext";
import Footer from "../Footer";
// ── tiny helpers ────────────────────────────────────────────────
const fmt = (iso) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const readColor = "#b91c1c"; // red-700 — used sparingly

// ── TableOfContents (auto-builds from h2/h3 in DOM) ─────────────
const TableOfContents = ({ headings }) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    if (!headings.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0% -60% 0%" }
    );
    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div className="mb-6">
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
        On this page
      </p>
      <nav className="space-y-1">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className={`block text-xs leading-snug py-0.5 border-l-2 pl-3 transition-all duration-200 ${
              h.level === 3 ? "ml-3" : ""
            } ${
              active === h.id
                ? "border-red-700 text-red-700 font-semibold"
                : "border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300"
            }`}
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

// ── SidebarPostCard ──────────────────────────────────────────────
const SidebarPostCard = ({ post }) => (
  <Link
    href={`/newsroom/${post.slug?.current || post.slug}`}
    className="group flex gap-3 items-start py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 -mx-2 px-2 rounded-md transition-colors"
  >
    {post.featuredImage && (
      <div className="relative w-16 h-14 flex-shrink-0 rounded overflow-hidden bg-gray-100">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    <div className="flex-1 min-w-0">
      <p className="text-[11px] text-gray-400 mb-0.5">{fmt(post.publishedAt)}</p>
      <p className="text-xs font-medium text-gray-700 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
        {post.title}
      </p>
    </div>
  </Link>
);

// ── CategoryBadge ────────────────────────────────────────────────
const CategoryBadge = ({ cat }) => (
  <Link
    href={`/newsroom?category=${cat}`}
    className="inline-block text-[10px] font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 hover:bg-red-700 hover:text-white transition-colors"
  >
    {cat}
  </Link>
);

// ── TagBadge ─────────────────────────────────────────────────────
const TagBadge = ({ tag }) => (
  <Link
    href={`/newsroom?tag=${encodeURIComponent(tag)}`}
    className="inline-block text-[10px] font-medium px-2.5 py-1 rounded border border-gray-200 text-gray-500 hover:border-red-700 hover:text-red-700 transition-colors"
  >
    #{tag}
  </Link>
);

// ── ShareBar ─────────────────────────────────────────────────────
const ShareBar = ({ title, url }) => {
  const [copied, setCopied] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : url;

  const copy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mr-1">
        Share
      </span>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-colors"
        aria-label="Share on X"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition-colors"
        aria-label="Share on Facebook"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-blue-700 hover:text-white transition-colors"
        aria-label="Share on LinkedIn"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <button
        onClick={copy}
        className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-red-700 hover:text-white transition-colors"
        aria-label="Copy link"
      >
        {copied ? (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ) : (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
    </div>
  );
};

// ── ProgressBar ──────────────────────────────────────────────────
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
      <div
        className="h-full bg-red-700 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

// ── Sidebar ──────────────────────────────────────────────────────
const Sidebar = ({ post, allPosts, headings }) => {
  // group posts by year for archive
  const archive = {};
  allPosts?.forEach((p) => {
    if (!p.publishedAt) return;
    const yr = new Date(p.publishedAt).getFullYear();
    if (!archive[yr]) archive[yr] = 0;
    archive[yr]++;
  });
  const archiveYears = Object.keys(archive).sort((a, b) => b - a);

  // related = same tags or categories, exclude current
  const related = allPosts
    ?.filter((p) => {
      if (p._id === post._id) return false;
      const sharedTag = p.tags?.some((t) => post.tags?.includes(t));
      const sharedCat = p.category?.some((c) => post.category?.includes(c));
      return sharedTag || sharedCat;
    })
    .slice(0, 4);

  // recent posts (exclude current)
  const recent = allPosts
    ?.filter((p) => p._id !== post._id)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 4);

  // all unique categories
  const allCats = [
    ...new Set(allPosts?.flatMap((p) => p.category || [])),
  ].slice(0, 12);

  return (
    <aside className="w-full space-y-6">
      {/* TOC */}
      {headings.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <TableOfContents headings={headings} />
        </div>
      )}

      {/* Author card */}
      {post.author && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Publisher
          </p>
          <div className="flex items-center gap-3">
            {post.author.image && (
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-red-100">
                <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
              </div>
            )}
            <div>
              <p className="text-xs font-semibold text-gray-800">{post.author.name}</p>
              {post.author.role && (
                <p className="text-[10px] text-gray-400">{post.author.role}</p>
              )}
            </div>
          </div>
          {post.author.bio && (
            <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">{post.author.bio}</p>
          )}
        </div>
      )}

      {/* Related Posts */}
      {related?.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
            Related Posts
          </p>
          <div>
            {related.map((p) => (
              <SidebarPostCard key={p._id} post={p} />
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts */}
      {recent?.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
            Latest News
          </p>
          <div>
            {recent.map((p) => (
              <SidebarPostCard key={p._id} post={p} />
            ))}
          </div>
        </div>
      )}

      {/* Archive by Year */}
      {archiveYears.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Archive
          </p>
          <div className="space-y-1">
            {archiveYears.map((yr) => (
              <Link
                key={yr}
                href={`/newsroom?year=${yr}`}
                className="flex items-center justify-between py-1.5 px-2 rounded-lg text-xs text-gray-600 hover:bg-red-50 hover:text-red-700 transition-colors group"
              >
                <span className="font-medium group-hover:font-semibold transition-all">{yr}</span>
                <span className="text-[10px] bg-gray-100 group-hover:bg-red-100 text-gray-400 group-hover:text-red-600 px-2 py-0.5 rounded-full transition-colors">
                  {archive[yr]} {archive[yr] === 1 ? "post" : "posts"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Categories */}
      {allCats.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            Categories
          </p>
          <div className="flex flex-wrap gap-1.5">
            {allCats.map((cat) => (
              <CategoryBadge key={cat} cat={cat} />
            ))}
          </div>
        </div>
      )}

      {/* Newsletter / CTA */}
      <div
        className="rounded-xl p-4 text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10"
          style={{ background: readColor, transform: "translate(30%, -30%)" }}
        />
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
          Stay Updated
        </p>
        <p className="text-xs font-semibold text-white mb-1 leading-snug">
          Get the latest STEM & robotics news from Coderina
        </p>
        <p className="text-[11px] text-gray-400 mb-3 leading-relaxed">
          Follow our programmes, competitions, and innovation across Nigeria.
        </p>
        <Link
          href="/contact"
          className="inline-block text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ background: readColor }}
        >
          Get in touch →
        </Link>
      </div>
    </aside>
  );
};

// ── Main Component ───────────────────────────────────────────────
const SlugContent = ({ post, allPosts = [] }) => {
    const { posts = [], loading } = usePost();
  const [headings, setHeadings] = useState([]);

  // extract headings from rendered article for TOC
  useEffect(() => {
    const article = document.getElementById("article-body");
    if (!article) return;
    const els = article.querySelectorAll("h2, h3");
    const list = [];
    els.forEach((el, i) => {
      if (!el.id) el.id = `heading-${i}`;
      list.push({ id: el.id, text: el.textContent, level: parseInt(el.tagName[1]) });
    });
    setHeadings(list);
  }, [post]);

  // categories & tags
  const categories = post.category || [];
  const tags = post.tags || [];

  // breadcrumb label
  const primaryCat = categories[0] || "newsroom";

  return (
    <>
      <ReadingProgress />
      <Navbar />

      {/* ── Hero ── */}
      <div className="w-full bg-gray-50 border-b border-gray-100">
        <div className="max-w-[90rem] mx-auto px-4 lg:px-6 2xl:px-10 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-4 flex-wrap">
            <Link href="/" className="hover:text-red-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/newsroom" className="hover:text-red-700 transition-colors">Newsroom</Link>
            <span>/</span>
            {/* <Link
              href={`/newsroom?category=${primaryCat}`}
              className="capitalize hover:text-red-700 transition-colors"
            >
              {primaryCat}
            </Link>
            <span>/</span> */}
            <span className="text-gray-500 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Categories row */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/newsroom?category=${cat}`}
                className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                style={{ background: "#fef2f2", color: readColor }}
              >
                {cat}
              </Link>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-4 max-w-4xl tracking-tight">
            {post.title}
          </h1>

          {/* Description */}
          {post.description && (
            <p className="text-sm text-gray-500 leading-relaxed max-w-3xl mb-5">
              {post.description}
            </p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400">
            {post.author?.image && (
              <div className="relative w-7 h-7 rounded-full overflow-hidden ring-2 ring-white shadow">
                <Image src={post.author.image} alt={post.author.name || ""} fill className="object-cover" />
              </div>
            )}
            {post.author?.name && (
              <span className="font-medium text-gray-600">{post.author.name}</span>
            )}
            {post.publishedAt && (
              <>
                <span className="text-gray-300">·</span>
                <span>{fmt(post.publishedAt)}</span>
              </>
            )}
            {post.readTime && (
              <>
                <span className="text-gray-300">·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
            <span className="text-gray-300">·</span>
            <ShareBar title={post.title} url="" />
          </div>
        </div>
      </div>

      {/* ── Featured Image ── */}
      {post.featuredImage && (
        <div className="w-full bg-gray-900" style={{ maxHeight: "520px", overflow: "hidden" }}>
          <div className=" mx-auto">
            <div className="w-full bg-gray-900" style={{ maxHeight: "520px", overflow: "hidden" }}>
        <div className="max-w-[90rem] mx-auto">
         {post.featuredVideo && !post.featuredImage ? (
      <div className="relative w-full" style={{ paddingTop: "min(42%, 520px)" }}>
        <video
          src={post.featuredVideo}
          controls
          preload="metadata"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    ) : post.featuredImage ? (
      <div className="relative w-full" style={{ paddingTop: "min(42%, 520px)" }}>
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          unoptimized
          className="object-cover"
          priority
        />
      </div>
    ) : null}
  </div>
</div>
          </div>
        </div>
      )}

      {/* ── Body + Sidebar ── */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

          {/* ── Article ── */}
          <article className="flex-1 min-w-0">
            <div id="article-body" className="prose prose-sm max-w-none
              prose-headings:font-extrabold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-lg prose-h2:mt-8 prose-h2:mb-3
              prose-h3:text-base prose-h3:mt-6 prose-h3:mb-2
              prose-p:text-gray-600 prose-p:text-sm prose-p:leading-relaxed prose-p:mb-4
              prose-a:text-red-700 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-800
              prose-li:text-gray-600 prose-li:text-sm
              prose-img:rounded-xl prose-img:shadow-md
              prose-blockquote:border-l-red-700 prose-blockquote:text-gray-500 prose-blockquote:italic
            ">
              <BlogContent post={post} />
            </div>

            {/* Gallery */}
            {post.gallery?.length > 0 && (
              <div className="mt-10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">
                  Gallery
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {post.gallery.map((img, i) => (
                    <div key={i} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 group">
                      <Image
                        src={img}
                        alt={`Gallery ${i + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags + Share footer */}
            <div className="mt-10 pt-6 border-t border-gray-100 space-y-4">
              {tags.length > 0 && (
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <ShareBar title={post.title} url="" />
                <Link
                  href="/newsroom"
                  className="text-xs text-gray-400 hover:text-red-700 transition-colors flex items-center gap-1"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Back to Newsroom
                </Link>
              </div>
            </div>
          </article>

          {/* ── Sidebar ── */}
          <div className="w-full md:w-64 lg:w-72 flex-shrink-0 md:sticky md:top-6">
            <Sidebar post={post} allPosts={posts} headings={headings} />
          </div>
        </div>
      </div>

      {/* ── More Posts (full-width footer strip) ── */}
      {posts.filter((p) => p._id !== post._id).length > 0 && (
        <div className="border-t border-gray-100 bg-gray-50 py-10">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-6">
              More from Coderina
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {allPosts
                .filter((p) => p._id !== post._id)
                .slice(0, 4)
                .map((p) => (
                  <Link
                    key={p._id}
                    href={`/newsroom/${p.slug?.current || p.slug}`}
                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    {p.featuredImage && (
                      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
                        <Image
                          src={p.featuredImage}
                          alt={p.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      {p.category?.[0] && (
                        <span
                          className="text-[9px] font-bold uppercase tracking-widest"
                          style={{ color: readColor }}
                        >
                          {p.category[0]}
                        </span>
                      )}
                      <p className="text-xs font-semibold text-gray-800 mt-1 leading-snug line-clamp-2 group-hover:text-red-700 transition-colors">
                        {p.title}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-2">{fmt(p.publishedAt)}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}

      <Footer/>
    </>
  );
};

export default SlugContent;