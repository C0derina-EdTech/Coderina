"use client";
import React from "react";
import {
  Cog,
  Printer,
  BookOpen,
} from "lucide-react";


const WhatWeDo = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We Do at the Lab
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our state-of-the-art facility provides hands-on learning experiences
            in advanced manufacturing and robotics technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
            <div className="bg-[#e29818]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Printer className="w-8 h-8 text-[#e29818]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3D Printing Services</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced additive manufacturing with precision prototyping,
              educational models, and custom fabrication for projects of all
              scales.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
            <div className="bg-[#e29818]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Cog className="w-8 h-8 text-[#e29818]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Robotics Development</h3>
            <p className="text-gray-600 leading-relaxed">
              Build and program autonomous robots, learn control systems, and
              explore automation solutions with industry-standard tools.
            </p>
          </article>

          <article className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
            <div className="bg-[#e29818]/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-[#e29818]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Tech Training</h3>
            <p className="text-gray-600 leading-relaxed">
              Comprehensive workshops and courses designed to build practical
              skills in engineering, programming, and digital fabrication.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
