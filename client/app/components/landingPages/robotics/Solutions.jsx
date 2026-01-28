"use client";

import Image from "next/image";
import React from "react";

const solutions = [
  {
    title: "Rapid Prototyping",
    description:
      "Accelerate product development with fast, cost-effective prototyping solutions that bring your designs to life in hours, not weeks.",
    image:
      "https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&h=400&fit=crop",
    alt: "Rapid Prototyping",
  },
  {
    title: "Production Manufacturing",
    description:
      "Scale your production with industrial-grade 3D printing systems designed for high-volume, repeatable manufacturing excellence.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=600&h=400&fit=crop",
    alt: "Production Manufacturing",
  },
  {
    title: "Medical Solutions",
    description:
      "Create patient-specific medical devices, surgical guides, and anatomical models with biocompatible materials and precision engineering.",
    image:
      "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=600&h=400&fit=crop",
    alt: "Medical Solutions",
  },
  {
    title: "Aerospace Components",
    description:
      "Manufacture lightweight, complex aerospace parts with certified materials that meet stringent industry standards and regulations.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
    alt: "Aerospace Components",
  },
  {
    title: "Tooling & Fixtures",
    description:
      "Reduce lead times and costs with on-demand manufacturing tools, jigs, and fixtures customized for your production requirements.",
    image:
      "https://images.unsplash.com/photo-1581091870621-191eb8d3d5f6?w=600&h=400&fit=crop",
    alt: "Tooling & Fixtures",
  },
  {
    title: "Educational Programs",
    description:
      "Empower the next generation with comprehensive training programs and educational resources for additive manufacturing excellence.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
    alt: "Educational Programs",
  },
];

export default function Solutions() {
  return (
    /* Solutions Section */
    <section className="text-white py-20 bg-linear-to-b from-black to-gray-900">
      <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-12 text-center">
          Our Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-linear-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden mb-4">
                <Image
                  src={solution.image}
                  alt={solution.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <h3 className="text-base lg:text-lg 2xl:text-2xl font-bold mb-2 group-hover:text-teal-400 transition-colors">
                {solution.title}
              </h3>

              <p className="text-xs md:text-sm xl:text-base text-gray-400">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
