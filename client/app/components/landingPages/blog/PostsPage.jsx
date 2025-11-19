"use client";
import { useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { useBlogContext } from "../../contexts/BlogContext";
import BlogContent from "./BlogContent";

export default function PostsPage({ slug }) {
  const { post, loading, blogId, formatTime, updatedPost } = useBlogContext();
  const displayedPost = updatedPost || post;

  useEffect(() => {
    if (post) {
      console.log("Fetched post views:", post?.views);
    }
  }, [post]);

  const postContents = [
    {
      bgColor: "#232323",
      section: <Footer />,
    },
  ];

  return (
    <div className="bg-background text-color">
        <Navbar/>
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
        <BlogContent
          post={displayedPost}
          blogId={blogId}
          formatTime={formatTime}
        />
      ) : (
        <div>no post found</div>
      )}

      {/* Footer Section */}
      {postContents.map((content, index) => {
        const bgStyle = content.bgImage
          ? { backgroundImage: `url(${content.bgImage})` }
          : { backgroundColor: content.bgColor || "" };
        return (
          <div
            key={index}
            className="w-full"
            style={{ ...bgStyle, backgroundSize: "cover" }}
          >
            <div className="">
              {content.section}
            </div>
          </div>
        );
      })}
    </div>
  );
}
