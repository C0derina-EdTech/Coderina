"use client";

import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegClock, FaEye } from "react-icons/fa";
import Follow from "./Follow";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import { useBlogContext } from "./contexts/BlogContext";
import { urlFor } from "../lib/imageUrl";

const CategoryPage = ({ slug }) => {
  const categorySlug = slug?.toLowerCase();
  const { blogs, loading, formatTime } = useBlogContext();
  const categoryDisplayName = slug
    ?.split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const filteredPosts = blogs.filter((post) =>
    post.category?.some((cat) => cat.toLowerCase() === categorySlug)
  );

  const categoryContents = [
    {
      bgColor: "#ffffff",
      section: <Follow />,
    },

    {
      bgImage:
        "https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      section: <Subscribe />,
    },
    {
      bgColor: "#232323",
      section: <Footer />,
    },
  ];
  return (
    <div>
      <div className=" bg-background text-color px-2 md:px-4 lg:px-8  py-8">
        <h1 className="pt-8 md:pt-10 text-3xl md:text-5xl text-center font-bold mb-6 capitalize">
          {categoryDisplayName}
        </h1>
        {loading ? (
          <div className="min-h-screen flex items-center justify-center bg-background text-color">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-t-transparent border-color rounded-full animate-spin"></div>
              <p className="text-lg font-semibold animate-pulse">
                Loading post...
              </p>
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
          <p>No posts found in this category.</p>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-x-16 lg:gap-y-8 mt-16 2xl:mt-[8rem] max-w-[400px] sm:max-w-[80rem] mx-auto">
            {filteredPosts.map((post) => (
              <div key={post._id} className=" overflow-hidden">
                <Link href={`/posts/${post?.slug.current}`}>
                  <div className="relative h-72 w-full">
                    <Image
                      src={urlFor(post.image).width(800).height(600).url()}
                      alt={post.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg text-color font-semibold">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-start text-sm space-x-3">
                    <div className="flex items-center gap-1">
                      <FaRegCalendarAlt />
                      <span>{formatTime(post._createdAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegClock />
                      <span>{post.readTime} min read</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye />
                      <span>{post?.views || 0} views</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* downside */}
      {categoryContents.map((content, index) => {
        // Define background styles based on content
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" }; // Fallback to a default color

        return (
          <div
            key={index}
            className="w-full"
            style={{
              ...bgStyle,
              backgroundSize: "cover",
            }}
          >
            <div className="max-w-[80rem] mx-auto lg:gap-y-[4rem]">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryPage;
