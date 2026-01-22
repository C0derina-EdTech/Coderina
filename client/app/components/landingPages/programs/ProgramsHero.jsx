"use client";

import Image from "next/image";
import Head from "next/head";
import {
  Heart,
  Users,
  Lightbulb,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function ProgramsHero() {
  const coreValues = [
    { value: "Innovation", icon: Lightbulb, color: "text-blue-400" },
    { value: "Excellence", icon: Award, color: "text-purple-400" },
    { value: "Integrity", icon: Heart, color: "text-rose-400" },
    { value: "Collaboration", icon: Users, color: "text-green-400" },
    { value: "Impact", icon: Target, color: "text-orange-400" },
    { value: "Creativity", icon: Sparkles, color: "text-yellow-400" },
  ];

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Programs | Coderina – Future-Ready STEAM Education in Africa</title>
        <meta
          name="description"
          content="Explore Coderina’s innovative STEAM programs designed to equip students and educators with future-ready skills in coding, robotics, AI, and digital creativity across Africa."
        />
        <meta
          name="keywords"
          content="Coderina programs, STEAM education Africa, coding for kids, robotics education, AI learning, innovation in education"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Intro Header */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-20">
            <div className="py-10 2xl:py-16 max-w-xl">
              <h1 className="text-xl lg:text-3xl 2xl:text-5xl font-bold mb-4 leading-tight">
                Programs Building Africa’s Next Generation of Innovators
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Purpose-driven learning experiences designed to unlock creativity,
                technical excellence, and real-world problem-solving.
              </p>
            </div>
          </div>
        </nav>

        {/* Hero Section with Video Background */}
        <section className="relative h-[28rem] overflow-hidden">
          {/* Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/introduction.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative max-w-400 mx-auto px-2 sm:px-4 md:px-8 lg:px-8 h-full flex items-center">
            <div className="max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
                Learning Powered by Innovation
              </h2>

              <p className="text-sm md:text-base text-gray-200 mb-8">
                Coderina programs combine STEAM education, technology, and
                creativity to help learners build skills that matter — from
                coding and robotics to AI, design thinking, and digital
                leadership.
              </p>

              <Link href="/contact">
                <button className="bg-[#3DCD58] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#35b84d] inline-flex text-sm items-center transition-all">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Explore Our Programs
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Philosophy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <Image
                  src="/kids1.jpg"
                  alt="Students learning coding and robotics at Coderina"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Programs Designed for Tomorrow’s World
                </h3>

                <p className="text-sm md:text-base text-gray-700 mb-6">
                  Our programs are carefully structured to bridge education and
                  industry. Learners gain hands-on experience through practical
                  projects, collaborative challenges, and mentorship-driven
                  instruction that prepares them for global opportunities.
                </p>

                <div
                  className="flex flex-wrap gap-2 sm:gap-3"
                  role="list"
                >
                  {coreValues.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="bg-gray-900 rounded-full px-4 py-2 border border-gray-700 hover:bg-gray-800 transition-all"
                        role="listitem"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className={`w-4 h-4 ${item.color}`} />
                          <span className="text-xs font-semibold text-white">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <button className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#00A3E0] text-white px-3 py-6 text-sm font-medium writing-mode-vertical-rl rotate-180">
          Feedback
        </button>

        {/* Accessibility */}
        <button className="fixed left-4 bottom-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-14a2 2 0 11-2 2 2 2 0 012-2zm0 4a4 4 0 00-4 4h2a2 2 0 014 0h2a4 4 0 00-4-4z" />
          </svg>
        </button>
      </div>
    </>
  );
}
