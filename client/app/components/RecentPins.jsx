"use client";

import Image from "next/image";
import { urlFor } from "../lib/imageUrl";
import { useBlogContext } from "./contexts/BlogContext";


const RecentPins = () => {
  const {
    blogs,
  } = useBlogContext();

  
  const imageBaseUrl = process.env.NEXT_PUBLIC_API_URL;
  // Get the first 6 valid image URLs from blogs
 const blogImages = blogs
  .map((post) =>
    post?.image ? urlFor(post.image).width(300).height(300).url() : null
  )
  .filter(Boolean)
  .slice(0, 6);


  return (
    <div className="text-color2 p-6 md:border md:border-gray-400 max-w-[380px] md:max-w-md  mx-auto mt-10">
      <h3 className="text-lg font-semibold text-center mb-4">RECENT PINS</h3>

      <div className="w-12 h-[2px] bg-gray-600 mx-auto relative mb-6 before:absolute before:top-[-5px] before:left-1/2 before:transform before:-translate-x-1/2 before:border-[6px] before:border-transparent before:border-b-gray-400" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-2">
        {blogImages.slice(0, 6).map((img, index) => (
          <div key={index} className="flex justify-center">
            <div className="relative w-full h-40 md:h-24 ">
              <Image
                src={img}
                alt={`Pin ${index + 1}`}
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPins;
