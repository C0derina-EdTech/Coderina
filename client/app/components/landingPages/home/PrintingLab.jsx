"use client";

import React, { useState } from "react";
import Image from "next/image";

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
  const imagesPerPage = 5;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const startIndex = currentIndex * imagesPerPage;
  const visibleImages = images.slice(startIndex, startIndex + imagesPerPage);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section
      className="py-20 px-8 bg-gray-50 transition-all duration-500"
      aria-labelledby="printing-lab-heading"
    >
      <div className="max-w-400 mx-auto">
        <h2
          id="printing-lab-heading"
          className="text-2xl lg:text-3xl 2xl:text-4xl font-bold mb-12 text-[#1a3a52] text-center"
        >
          Coderina 3D Printing & Robotics Innovation Lab
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12 transition-transform duration-500 ease-in-out">
          {visibleImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative w-full h-52 2xl:h-96 overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt={`Coderina EdTech Foundation 3D printing and robotics lab showcasing educational models and student-built prototypes ${index + 1}`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
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
              aria-label={`View 3D printing lab image set ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
