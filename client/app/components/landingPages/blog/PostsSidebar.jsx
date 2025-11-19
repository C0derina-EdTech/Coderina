"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../lib/imageUrl";
import { useBlogContext } from "../../contexts/BlogContext";

export default function PostsSidebar({ post, slug }) {
  const { allPosts } = useBlogContext();
  const [relatedPosts, setRelatedPosts] = useState([]);
  const currentCategory = post?.category;
  const currentSlug = slug;

  useEffect(() => {
    if (!allPosts?.length) return;

    let related = allPosts.filter(
      (p) =>
        p.category === currentCategory &&
        p.slug?.current !== currentSlug
    );

    if (!related.length) {
      related = allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(currentCategory?.toLowerCase() || "") &&
          p.slug?.current !== currentSlug
      );
    }

    if (!related.length) {
      related = allPosts.filter(
        (p) =>
          ["coderina", "education", "technology", "programs"].some((word) =>
            p.title.toLowerCase().includes(word)
          ) &&
          p.slug?.current !== currentSlug
      );
    }

    setRelatedPosts(related.slice(0, 4));
  }, [allPosts, currentCategory, currentSlug]);

  // Optional: prevent SSR mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold mb-3">
        {relatedPosts.length
          ? `More in ${currentCategory || "Coderina"}`
          : "You might also like"}
      </h2>
      {relatedPosts.length ? (
        relatedPosts.map((p) => (
          <Link
            key={p._id}
            href={`/blog/${p.slug?.current}`}
            className="block border-b border-gray-200 pb-3 hover:text-primary transition"
          >
            <div className="flex items-center gap-3">
              {p.image && (
                <div className="relative w-20 h-16 flex-shrink-0">
                  <Image
                    src={urlFor(p.image).url()}
                    alt={p.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
              )}
              <div>
                <h3 className="font-medium text-sm">{p.title}</h3>
                <p className="text-xs text-gray-500 capitalize">{p.category}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-sm text-gray-400">No related posts found.</p>
      )}
    </div>
  );
}
