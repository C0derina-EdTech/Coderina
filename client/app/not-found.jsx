"use client";
import React, { useState } from "react";
import Link from "next/link";
import Footer from "./components/landingPages/Footer";
import Navbar from "./components/landingPages/Navbar";
import { useBlogContext } from "./components/contexts/BlogContext";

const staticRoutes = [
  { label: "Home", path: "/", type: "page" },
  { label: "About", path: "/about", type: "page" },
  { label: "Contact", path: "/contact", type: "page" },
  { label: "Events", path: "/events", type: "page" },
  { label: "Programs", path: "/programs", type: "page" },
  { label: "Robotics Lab", path: "/robotics-lab", type: "page" },
  { label: "First Lego League", path: "/firstlegoleague", type: "page" },
  { label: "Project Fair", path: "/project-fair", type: "page" },
];

const NotFound = () => {
  const { blogs = [], events = [] } = useBlogContext();
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

    const combined = [...matchedPages, ...matchedBlogs].slice(0, 6);
    setFilteredSuggestions(combined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <main className="flex-grow flex items-center  justify-center px-4 py-16 h-[80vh] lg:mt-24">
        <div className="max-w-2xl w-full text-center">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 mb-6 rounded-full bg-gradient-to-br from-blue-50 to-purple-50">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="none"
                stroke="#e29818"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-7xl font-bold text-gray-900 mb-2">404</h1>
          </div>

          {/* Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            We couldn't find the page you're looking for. It might have been moved, 
            deleted, or the link might be broken. Let's help you find what you need.
          </p>

          {/* Search Box */}
          <div className="relative mb-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search for pages, programs, or blog posts..."
                className="w-full py-4 px-6 pr-12 text-base bg-gray-50 border-2 border-gray-200 rounded-xl outline-none focus:border-[#e29818]  focus:bg-white transition-all"
              />
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Suggestions */}
            {searchQuery && filteredSuggestions.length > 0 && (
              <ul className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden z-50">
                {filteredSuggestions.map((item, index) => (
                  <li key={item.id || index}>
                    <Link
                      href={item.path}
                      className="flex items-center justify-between px-6 py-3 hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium text-gray-900 text-left">
                        {item.label}
                      </span>
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        {item.type}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {searchQuery && filteredSuggestions.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl p-4 z-50">
                <p className="text-gray-500 text-sm">No results found. Try different keywords.</p>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">
              Quick Links
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/"
                className="px-6 py-3 bg-[#e29818]  text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                Go to Homepage
              </Link>
              <Link
                href="/programs"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                View Programs
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <div className="bg-[#232323]">
        <Footer />
      </div>
    </div>
  );
};

export default NotFound;