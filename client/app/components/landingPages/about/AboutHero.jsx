"use client";
import Image from "next/image";
import {
  Heart,
  Users,
  Lightbulb,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
export default function AboutHero() {
  const coreValues = [
    { value: "Innovation", icon: Lightbulb, color: "text-blue-400" },
    { value: "Excellence", icon: Award, color: "text-purple-400" },
    { value: "Integrity", icon: Heart, color: "text-rose-400" },
    { value: "Collaboration", icon: Users, color: "text-green-400" },
    { value: "Impact", icon: Target, color: "text-orange-400" },
    { value: "Creativity", icon: Sparkles, color: "text-yellow-400" },
  ];
  return (
    <div className="bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 mt-20">
          <div className="py-10 2xl:py-16 max-w-xl">
            <h1 className="text-xl lg:text-3xl 2xl:text-5xl font-bold mb-4 leading-tight">
              Transforming Africa&apos;s Future Through STEAM Education
            </h1>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-900 to-teal-900 h-96">
        <div className="absolute inset-0 opacity-60">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/eye-background.jpg')" }}
          />
        </div>
        <div className="relative max-w-400 mx-auto px-2 sm:px-4 md:px-8 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
              Innovation on your own terms
            </h1>
            <p className="text-sm md:text-base  text-gray-200 mb-8">
              We empower students and educators with innovative,
              technology-driven solutions in Science, Technology, Engineering,
              Arts, and Mathematics. Our programs foster creativity,
              problem-solving, and lifelong learning for Africa&apos;s next
              generation.
            </p>
            <Link href="/programs">
            <button className="bg-[#3DCD58] text-white px-4 py-3 rounded-2xl font-medium hover:bg-[#35b84d] inline-flex text-sm items-center">
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
             Explore Programs
            </button>
            </Link>
          </div>
          {/* <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button className="bg-[#3DCD58] text-white p-3 rounded-full hover:bg-[#35b84d]">
              <svg
                className="w-4 h-4"
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
            </button>
            <button className="bg-[#3DCD58] text-white p-3 rounded-full hover:bg-[#35b84d]">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </section>

      {/* Future-ready automation section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-12">
            <div className="flex-1">
              <div className="relative rounded-r-full overflow-hidden">
                <div className="bg-linear-to-r from-gray-800 to-teal-800">
                  <Image
                    src="/kids1.jpg"
                    alt="A girl learning scratch via laptop"
                    width={600}
                    height={300}
                    className="rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 lg:mb-6">
                Education designed for the future
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-4">
                 At Coderina, we go beyond traditional education. Our hands-on
                STEAM programs combine coding, robotics, artificial
                intelligence, and creative problem-solving to prepare learners
                for real-world challenges and emerging careers.
              </p>

              <div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4"
                role="list"
              >
                {coreValues.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="bg-gray-800 rounded-full px-4  py-2 sm:py-2.5 border border-teal-800 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
                      role="listitem"
                    >
                      <div className="flex items-center gap-2">
                        <Icon
                          className={`w-4 h-4 ${item.color}`}
                          aria-hidden="true"
                        />
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

    
    </div>
  );
}
