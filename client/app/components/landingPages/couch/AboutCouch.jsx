"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "../../../../public/couch/teamimsu2.jpg";
export default function AboutCouch() {
  return (
    <div className="bg-black text-white">
      {/* Innovation Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-6">
                What is COUCH?
              </h2>
              <h3 className="text-sm sm:text-base 2xl:text-xl text-teal-800 mb-6">
                Empowering University Students to Innovate, Build, and Solve
                Real-World Problems
              </h3>
              <p className="text-sm md:text-base text-gray-900 mb-8 leading-relaxed">
                The Coderina University Challenge (COUCH) is an innovative
                platform designed to inspire creativity, foster entrepreneurial
                mindsets, and encourage the practical application of academic
                research among students in tertiary education. By bridging the
                gap between theoretical knowledge and real-world application,
                COUCH empowers students to develop solutions that address
                pressing societal challenges across Nigeria.
              </p>
              <Link
                href="/"
                className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs md:text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600"
              >
                Explore the COUCH Challenge →
              </Link>
            </div>

            <div className="">
              <div className="relative aspect-video bg-linear-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={bg}
                  fill
                  className="object-cover"
                  alt="COUCH team members collaborating on innovation projects"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
