"use client";

import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const images = [
  "/microscope4.jpg",
  "/microscope5.jpg",
  "/microscope6.jpg",
  "/print1.jpg",
  "/anatomy.jpg",
  "/print6.jpg",
  "/robotarm.jpg",
  "/microscope2.jpg",
  "/microscope3.jpg",
  "/robotarm4.jpg",
  "/print1.jpg",
  "/skull.jpg",
  "/skull2.jpg",
  "/skull3.jpg",
  "/skull4.jpg",
  "/skull5.jpg",
  "/skull6.jpg",
  "/skull7.jpg",
];

export default function PrintingLab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIndex = currentIndex * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* SEO Meta */}
      <Head>
        <title>3D Printing & Robotics Lab | Coderina Foundation</title>
        <meta
          name="description"
          content="Explore Coderina's 3D Printing & Robotics Lab, showcasing state-of-the-art STEM equipment, advanced 3D printers, robotic arms, and microscopy tools. Our hands-on lab empowers students and innovators across Africa to develop practical skills in robotics, additive manufacturing, and scientific research."
        />
        <meta
          name="keywords"
          content="Coderina 3D Printing Lab, Robotics Lab Africa, STEM education, 3D printing, robotic arms, microscopy tools, hands-on learning, African innovators"
        />
      </Head>

      {/* Lab Section */}
      <section className="py-20 px-8 bg-gray-50 transition-all duration-500">
        <div className="max-w-[110rem] mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-[#1a3a52] text-center">
            Coderina 3D Printing & Robotics Lab
          </h2>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mb-12 transition-transform duration-500 ease-in-out">
            {visibleImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative w-full h-80 md:h-96 lg:h-96 xl:h-[30rem] 2xl:h-[35rem] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Coderina 3D Printing Lab ${index + 1}`}
                  fill
                  className="object-contain md:object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-[#1a3a52] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`View set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
