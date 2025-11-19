"use client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { CalendarDays, Clock, Eye } from "lucide-react";
import { urlFor } from "../../lib/imageUrl";
//import PostsSidebar from "./PostsSidebar";
export default function BlogContent({ post, blogId, formatTime }) {
  const title = post?.title || "";
  const read = post?.readTime || "";
  const content = post?.content || [];
  const imageUrl = post?.image ? urlFor(post.image).url() : "";
  const link = post?.links || [];
  const comment = post?.comments || [];
  const view = post?.views ?? 0;

  return (
    <main className="pt-6 lg:pt-10 text-color min-h-screen max-w-[400px] md:max-w-5xl 2xl:max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-10 p-4">
      {/* Main content */}
      <div className="lg:col-span-2">
        <div className="mb-4 space-y-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl lg:text-6xl font-bold text-center lg:leading-[70px]">
            {title}
          </h1>

          <div className="flex items-center text-sm space-x-3">
            <div className="flex items-center gap-1">
              <CalendarDays />
              {post?._createdAt && (
                <span suppressHydrationWarning>
                {typeof window !== "undefined" ? formatTime(post._createdAt) : ""}
               </span>
              )}

            </div>
            <div className="flex items-center gap-1">
              <Clock />
              <span>{read} min read</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye />
              <span>{view} views</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
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

        {/* Blog Content */}
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

        {/* <AuthorCard links={link} comments={comment.length || 0} />
        <CommentForm id={blogId} /> */}
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
         {/* <PostsSidebar
          post={displayedPost}          // needed for category
          slug={slug || displayedPost?.slug?.current} // current slug for filtering
          /> */}
      </aside>
    </main>
  );
}
