"use client";
import React from "react";
import Image from "next/image";

export default function Mentors({
  mentors = [],
  heading = "Our Mentors",
  description = "Industry experts guiding the next generation",
  sectionId = "mentors",
}) {
  if (!mentors.length) return null;

  return (
    <section
      id={sectionId}
      aria-labelledby="mentors-heading"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <header className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            id="mentors-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
          >
            {heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 mt-3 sm:mt-4">
            {description}
          </p>
          <div className="w-16 h-0.5 bg-teal-600 mx-auto mt-4 sm:mt-6"></div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <article
              key={index}
              itemScope
              itemType="https://schema.org/Person"
              className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="relative aspect-[3/4] bg-gray-100">
                <Image
                  src={mentor.image}
                  alt={`${mentor.name} – Mentor`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  itemProp="image"
                />
              </div>

              <div className="p-3 text-center">
                <h3
                  className="text-xs sm:text-sm font-bold text-gray-900"
                  itemProp="name"
                >
                  {mentor.name}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
