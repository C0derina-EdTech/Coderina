"use client";

import Image from "next/image";
import React from "react";

const images = [
  "/microscope4.jpg", //OpenFlexure Microscope
  "/microscope5.jpg",
  "/microscope6.jpg",
  "/print1.jpg",
  "/anatomy.jpg",
  "/print6.jpg",
  "/robotarm.jpg", //Faze4 Robotic Arm
  "/microscope2.jpg",
  "/microscope3.jpg",
  "/robotarm4.jpg",
  "/skull.jpg",
  "/skull2.jpg",
  "/skull3.jpg",
  "/skull4.jpg",
  "/skull5.jpg",
  "/skull6.jpg",
  "/skull7.jpg",
];

const solutions = [
  {
    title: "Human Brain",
    description:
      "Design and fabricate highly detailed anatomical brain models using precision 3D printing to support research, education, and clinical visualization.",
    image: "/skull.jpg",
    alt: "3D Printed Brain Model",
  },
  {
    title: "Human Anatomy",
    description:
      "Produce accurate full-scale anatomical structures through additive manufacturing for medical training, demonstrations, and advanced learning.",
    image: "/anatomy.jpg",
    alt: "3D Printed Human Anatomy",
  },
  {
  title: "Prosthetic Arm",
  description:
    "Design and fabricate patient-specific prosthetic arms using durable, lightweight materials and high-resolution 3D printing for improved mobility.",
  image: "/prostheticarm.jpeg",
  alt: "3D Printed Prosthetic Arm",
},

  {
    title: "Faze4 Robotic Arm",
    description:
      "Engineer and manufacture functional robotic components with lightweight, durable 3D printed parts optimized for motion and performance.",
    image: "/robotarm1.jpg",
    alt: "3D Printed Robotic Arm",
  },
  {
    title: "OpenFlexure Microscope",
    description:
      "Create precision scientific instruments using 3D printed components that enable low-cost, customizable, and accessible microscopy systems.",
    image: "/print1.jpg",
    alt: "3D Printed Microscope",
  },
  {
    title: "Educational Programs",
    description:
      "Train learners and innovators through hands-on additive manufacturing programs focused on design, printing, and real-world applications.",
    image:
      "/studentwork.jpg",
    alt: "Additive Manufacturing Education",
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

              <p className="text-xs md:text-sm xl:text-base text-gray-400">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
