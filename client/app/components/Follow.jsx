import Aos from "aos";
import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { urlFor } from "../lib/imageUrl";
import { useBlogContext } from "./contexts/BlogContext";

// InstagramCard Component (Nested)
const InstagramCard = ({ image, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105"
    >
      {/* Image */}
      <div className="relative w-full h-48 sm:h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-60 transition-opacity duration-500 z-10 opacity-0 group-hover:opacity-40"></div>

      {/* Inner Border Animation */}
      <div className="absolute inset-2 z-20 pointer-events-none">
        <span className="absolute top-0 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ease-out"></span>
        <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-700 ease-out"></span>
        <span className="absolute top-0 left-0 h-0 w-[1px] bg-white group-hover:h-full transition-all duration-700 ease-out"></span>
        <span className="absolute bottom-0 right-0 h-0 w-[1px] bg-white group-hover:h-full transition-all duration-700 ease-out"></span>
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity space-y-4 duration-500 z-30 text-white text-center">
        <div className="text-white text-2xl">
          <FaInstagram />
        </div>
        <div className="flex items-center text-[13px]">{title}</div>
      </div>
    </a>
  );
};

// Follow Component
const Follow = () => {
  const { loading, instagramPosts } = useBlogContext();

  return (
    <div className="bg-background px-2 md:px-4 lg:px-16 py-10">
      {/* Title */}
      <div className="text-center py-12 lg:py-16">
        <h2 className="text-3xl font-bold text-color">FOLLOW US</h2>
        <p className="text-sm text-color">
          Stay inspired with our latest moments ✨
        </p>
      </div>

      {/* Grid of Instagram Cards */}
      <div className="grid gap-3 md:gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-w-[340px] sm:max-w-full mx-auto">
        {loading ? (
          <div className="flex justify-center items-center col-span-full">
            <div className="w-6 h-6 border-2 border-color border-t-transparent rounded-full animate-spin motion-safe:animate-bounce-slow" />
          </div>
        ) : (
          instagramPosts?.map((post, index) => (
            <InstagramCard
              key={index}
              title={post.title}
              link={post.link}
              image={
                post.image.startsWith("http")
                  ? post.image
                  : urlFor(post.image).url()
              }
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Follow;
