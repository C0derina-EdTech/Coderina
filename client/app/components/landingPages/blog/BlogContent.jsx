"use client";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

// ── Portable Text custom components ─────────────────────────────
const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={value.asset.url || value.asset._ref}
              alt={value.alt || ""}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          {value.caption && (
            <figcaption className="text-center text-[11px] text-gray-400 mt-2 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-700 underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-lg font-extrabold text-gray-900 tracking-tight mt-8 mb-3 leading-snug">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-base font-bold text-gray-800 tracking-tight mt-6 mb-2 leading-snug">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-sm font-bold text-gray-800 mt-5 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-red-700 pl-4 my-5 text-sm italic text-gray-500 leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-sm text-gray-600 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-sm text-gray-600 pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
};

// ── Lightbox ─────────────────────────────────────────────────────
const Lightbox = ({ images, index, onClose }) => {
  const [current, setCurrent] = useState(index);

  const prev = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl leading-none"
        aria-label="Close"
      >
        ✕
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
            aria-label="Next"
          >
            ›
          </button>
        </>
      )}

      <div className="relative max-w-4xl w-full max-h-[85vh] rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          width={1200}
          height={800}
          unoptimized
          className="w-full h-full object-contain max-h-[85vh]"
        />
      </div>

      {images.length > 1 && (
        <p className="absolute bottom-4 text-white/50 text-xs">
          {current + 1} / {images.length}
        </p>
      )}
    </div>
  );
};

// ── Gallery Section ───────────────────────────────────────────────
const GallerySection = ({ images, title }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!images?.length) return null;

  // Layout: 1 image → full width | 2 → side by side | 3+ → masonry-style grid
  const gridClass =
    images.length === 1
      ? "grid-cols-1"
      : images.length === 2
      ? "grid-cols-2"
      : images.length === 3
      ? "grid-cols-2 sm:grid-cols-3"
      : "grid-cols-2 sm:grid-cols-3";

  return (
    <section className="mt-10">
      <div className="flex items-center gap-3 mb-4">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Gallery
        </p>
        <div className="flex-1 h-px bg-gray-100" />
        <span className="text-[10px] text-gray-400">{images.length} photos</span>
      </div>

      <div className={`grid gap-2 ${gridClass}`}>
        {images.map((img, idx) => {
          // first image in 3+ grid spans 2 cols on sm+
          const isFeature = images.length >= 3 && idx === 0;
          return (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className={`relative rounded-lg overflow-hidden bg-gray-100 cursor-zoom-in group
                ${images.length === 1 ? "aspect-video" : "aspect-[4/3]"}
                ${isFeature ? "sm:col-span-2 sm:aspect-video" : ""}
              `}
            >
              <Image
                src={img}
                alt={`${title} — photo ${idx + 1}`}
                fill
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              {/* index badge */}
              <span className="absolute bottom-1.5 right-1.5 text-[9px] text-white/70 bg-black/30 px-1.5 py-0.5 rounded-full">
                {idx + 1}
              </span>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
};

// ── Video Section ─────────────────────────────────────────────────
const VideoSection = ({ videoUrl }) => {
  if (!videoUrl) return null;
  return (
    <div className="mt-8 relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-md">
      <video
        src={videoUrl}
        controls
        preload="metadata"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Play className="w-12 h-12 text-white opacity-60" />
      </div>
    </div>
  );
};

// ── Main BlogContent ──────────────────────────────────────────────
// SlugContent already renders:
//   - Navbar, breadcrumb, category pills, title, description, meta, featuredImage
//   - Tags footer, share bar, gallery strip, "More from Coderina" section
//
// BlogContent is ONLY responsible for:
//   - Featured video (if any — image is handled by SlugContent)
//   - Portable Text body
//   - In-article gallery (with lightbox)
//   - Inline author bio (only if bio exists, no duplicate of author card in sidebar)

const BlogContent = ({ post }) => {
  const videoUrl = post?.featuredVideo || null;
  const galleryImages = post?.gallery || [];

  return (
    <div>
      {/* Featured Video — only rendered if no image OR as supplement */}
      <VideoSection videoUrl={videoUrl} />

      {/* Portable Text body */}
      {post?.content && (
        <div className="mt-2">
          <PortableText value={post.content} components={ptComponents} />
        </div>
      )}

      {/* Gallery — smart grid with lightbox */}
      <GallerySection images={galleryImages} title={post?.title || ""} />

      {/* Inline author bio — only if bio text exists (sidebar shows card regardless) */}
      {post?.author?.bio && (
        <div className="mt-10 pt-6 border-t border-gray-100 flex gap-4 items-start">
          {post.author.image && (
            <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-red-100">
              <Image
                src={post.author.image}
                alt={post.author.name || ""}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          )}
          <div>
            <p className="text-xs font-semibold text-gray-800">{post.author.name}</p>
            <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">{post.author.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogContent;