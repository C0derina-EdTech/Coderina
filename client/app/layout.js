"use client"; // This line ensures this component runs on the client side.

import React, { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar";

import { DataProvider } from "./context/DataContext";
import { BlogProvider } from "./context/BlogContext";
import { MediaProvider } from "./context/MediaContext";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "coderina",
  description:
    "coderina EdTech Foundation is a dynamic organization dedicated to advancing education through innovative technology solutions. With a mission to empower individuals and communities, coderina specializes in providing digital skills training, fostering STEM education, and promoting coding literacy among students and educators. By leveraging technology, the organization seeks to bridge the digital divide and equip learners with the tools needed to thrive in a rapidly evolving world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/codelogo.png" // Ensure the favicon path is correct
          type="image/png"
          className="w-48"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="font-Inter bg-[#FFF5E5]">
        <div>
          <DataProvider>
            <BlogProvider>
              <MediaProvider>
                <Suspense fallback={null}>
                  <Navbar />
                  {children}
                </Suspense>
              </MediaProvider>
            </BlogProvider>
          </DataProvider>
        </div>
      </body>
    </html>
  );
}
