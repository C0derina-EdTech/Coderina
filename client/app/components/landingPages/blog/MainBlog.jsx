"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePost } from "../../contexts/PostContext";
import { urlFor } from "../../lib/imageUrl";
import AOS from "aos";
import BlogHero from "./BlogHero";
import Footer from "../Footer";
import LatestAndPopular from "./LatestAndPopular";
import FeaturedSection from "./FeaturedSection";
import Navbar from "../home/Nav";

const MainBlog = () => {
    
 const { posts = [], loading } = usePost();

  if (loading) return <p className="text-center py-8">Loading...</p>;

  if (!posts || posts?.length === 0) {
    return null;
  };
  return (
    <div className="bg-white min-h-screen">
     <Navbar/>

      {/* Page body */}
      <main className="">
        <BlogHero />
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-10">
          <FeaturedSection posts={posts}/>
      

        <LatestAndPopular posts={posts}/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default MainBlog;
