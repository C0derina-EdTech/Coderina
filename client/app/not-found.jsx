"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";
import Follow from "./components/Follow";
import Subscribe from "./components/Subscribe";
import Navbar from "./components/Navbar";
import { useBlogContext } from "./components/contexts/BlogContext";

const staticRoutes = [
  { label: "Home", path: "/", type: "page" },
  { label: "About", path: "/About", type: "page" },
  { label: "Contact", path: "/contact", type: "page" },
  { label: "Posts", path: "/posts", type: "page" },
  { label: "Category", path: "/category", type: "page" },
  { label: "Privacy Policy", path: "/privacy-policy", type: "page" },
  { label: "What", path: "/what", type: "page" },
  { label: "Events", path: "/Events", type: "page" },
  { label: "Form", path: "/form", type: "page" },
  { label: "First Lego", path: "/firstlego", type: "page" },
  { label: "COUCH", path: "/Couch", type: "page" },
  { label: "Project Fair", path: "/project-fair", type: "page" },
  { label: "Programs", path: "/programs", type: "page" },
  { label: "First Lego League", path: "/firstlegoleague", type: "page" },
  { label: "Sign In", path: "/sign-in", type: "page" },
];

const NotFound = () => {
  const { blogs } = useBlogContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length === 0) {
      setFilteredSuggestions([]);
      return;
    }

    const matchedBlogs = blogs
      .filter(
        (blog) =>
          blog?.title?.toLowerCase().includes(query) ||
          blog?.slug?.current?.toLowerCase().includes(query)
      )
      .map((blog) => ({
        label: blog.title,
        path: `/posts/${blog.slug?.current}`,
        type: "post",
        id: blog._id,
      }));

    const matchedPages = staticRoutes.filter((route) =>
      route.label.toLowerCase().includes(query)
    );

    const combined = [...matchedPages, ...matchedBlogs].slice(0, 7); // Limit to top 7
    setFilteredSuggestions(combined);
  };

  return (
    <div className="w-full bg-white text-black">
      <div className="text-center max-w-[80rem] mx-auto px-2 md:px-4 lg:px-16 pt-[5rem] lg:pt-[10rem]">
        <h1 className="text-6xl lg:text-8xl font-bold mb-4">404</h1>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-md font-semibold mb-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <p className="text-md mb-6">Please try using our search box below.</p>

        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search blogs or site pages"
            className="py-4 px-4 w-full bg-gray-100 border border-gray-300 rounded-md outline-none"
          />
          {searchQuery && filteredSuggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-t-0 border-gray-300 rounded-b-md z-50">
              {filteredSuggestions.map((item, index) => (
                <li key={item.id || index} className="border-t border-gray-200">
                  <Link
                    href={item.path}
                    className="block px-4 py-2 hover:bg-gray-100 text-left"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="ml-2 text-xs text-gray-500">
                      ({item.type})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link href="/" className="text-color2 mt-6 inline-block hover:underline">
          Go back to the homepage
        </Link>
      </div>

      <Follow />
      <div
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1551001626-86e913f8baf7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full"
      >
        <Subscribe />
      </div>
      <div className="bg-[#232323]">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;
