"use client";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Follow from "./Follow";
import Footer from "./Footer";
import Subscribe from "./Subscribe";
import Sidebar from "./Sidebar";
import AuthorCard from "./AuthorCard";
import CommentForm from "./CommentForm";
import { FaRegCalendarAlt, FaRegClock, FaEye } from "react-icons/fa";
import { useBlogContext } from "./contexts/BlogContext";
import NotFound from "../not-found";
import { urlFor } from "../lib/imageUrl";

export default function PostsPage({ slug }) {
  const { post, loading, blogId, formatTime, updatedPost } = useBlogContext();

  const displayedPost = updatedPost || post;

  useEffect(() => {
    if (post) {
      console.log("Fetched post views:", post?.views);
    }
  }, [post]);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const postContents = [
    {
      bgImage: "",
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

  const title = post?.title || "";
  const read = post?.readTime || "";
  const content = post?.content || [];
  const imageUrl = post?.image ? urlFor(post.image).url() : "";
  const link = post?.links || [];
  const comment = post?.comments || [];
  const view = displayedPost?.views ?? 0;

  return (
    <div className=" bg-background text-color ">
      {/* close of head */}
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-background text-color">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-t-transparent border-color rounded-full animate-spin"></div>
            <p className="text-lg font-semibold animate-pulse">
              Loading post...
            </p>
          </div>
        </div>
      ) : post ? (
        <main className="pt-6 lg:pt-10 text-color min-h-screen max-w-[400px] md:max-w-5xl 2xl:max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 p-4">
          {/* Main content (spans 2 columns on large screens) */}
          <div className=" lg:col-span-2">
            <div className="mb-4 space-y-4 flex flex-col items-center justify-center">
              <h1 className="text-3xl lg:text-6xl font-bold text-center lg:leading-[70px]">
                {title}
              </h1>
              <div className="flex items-center text-sm space-x-3">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt />
                  <span>{formatTime(post?._createdAt)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegClock />
                  <span>{read} min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaEye />
                  <span>{view} views</span>
                </div>
              </div>
            </div>

            {imageUrl && (
              <div className="w-full h-96 lg:h-[600px] relative mb-6 lg:mb-8">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}

            <PortableText
              value={content}
              components={{
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold">{children}</h2>
                  ),
                  normal: ({ children }) => <p className="mb-4">{children}</p>,
                },
                marks: {
                  strong: ({ children }) => <strong>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  underline: ({ children }) => <u>{children}</u>,
                },
              }}
            />

            <AuthorCard links={link} comments={comment.length || 0} />
            <CommentForm id={blogId} />
          </div>

          {/* Sidebar (1 column) */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </main>
      ) : (
        <div>
          <NotFound />
        </div>
      )}

      {/* downside */}
      {postContents.map((content, index) => {
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
}
