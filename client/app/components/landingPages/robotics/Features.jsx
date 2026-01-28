import React from "react";
import Image from "next/image";
import Link from "next/link";

const solutionsData = [
  {
    title: "Inspection",
    imgSrc: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=600&h=450&fit=crop",
    alt: "Inspection robot",
    link: "#",
  },
  {
    title: "Digital Twin",
    imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop",
    alt: "Digital Twin visualization",
    link: "#",
  },
  {
    title: "Warehouse Automation",
    imgSrc: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=600&h=450&fit=crop",
    alt: "Warehouse automation",
    link: "#",
  },
  {
    title: "Safety & Response",
    imgSrc: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=600&h=450&fit=crop",
    alt: "Safety and Response",
    link: "#",
  },
  {
    title: "Research & Development",
    imgSrc: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=450&fit=crop",
    alt: "Research and Development",
    link: "#",
  },
  {
    title: "Industries",
    imgSrc: "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?w=600&h=450&fit=crop",
    alt: "Industries",
    link: "#",
    isOverlay: true,
    description:
      "From healthcare to construction and beyond, we show our robots can today just by work in your industry.",
  },
];

export default function Features() {
  return (
    <div className="font-poppins bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-400 px-2 sm:px-4 lg:px-6 2xl:px-8 py-6 sm:py-8">
        <div>
          <h1 className="max-w-4xl text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Embodied Manufacturing Intelligence
          </h1>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="order-2 lg:order-1">
              <p className="text-sm sm:text-base text-gray-600 mb-8 leading-relaxed max-w-xl">
                Atlas isn&apos;t just built for our world - it&apos;s built to transform it.
                For years, Atlas has been changing the world&apos;s idea of what robots
                can do. We&apos;re bringing embodied AI to revolutionize industrial
                workplaces, bringing unparalleled versatility, dexterity and
                human-autonomy.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group"
              >
                Learn About Atlas
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
            <div className="hidden lg:block w-full h-auto order-1 lg:order-2"></div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-400 px-2 sm:px-4 lg:px-6 2xl:px-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-gray-900 mb-4">
            Solutions for the real world
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-12 max-w-2xl">
            See how Spot, the easy to make work better that fast and to scale
            your warehouse, productive and keep your people safe.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {solutionsData.map((item, idx) => (
              <article
                key={idx}
                className={`group bg-white rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                  item.isOverlay ? "relative bg-gray-900 text-white" : ""
                }`}
              >
                <div
                  className={`relative aspect-4/3 overflow-hidden ${
                    item.isOverlay ? "opacity-60" : ""
                  }`}
                >
                  {item.imgSrc && (
                    <Image
                      src={item.imgSrc}
                      alt={item.alt}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-110`}
                    />
                  )}
                </div>
                {item.isOverlay && (
                  <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                )}
                <div
                  className={`p-6 ${
                    item.isOverlay ? "absolute bottom-0 left-0 right-0 text-white" : ""
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  {item.description && (
                    <p className="text-sm text-gray-300 mb-4">{item.description}</p>
                  )}
                  <a
                    href={item.link}
                    className={`inline-flex items-center font-medium ${
                      item.isOverlay ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                    } transition-colors group/link`}
                  >
                    Learn More
                    <span className="ml-2 transform group-hover/link:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-400 px-2 sm:px-4 lg:px-6 2xl:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 sm:p-12 lg:p-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Your automation journey starts today
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-8">
                Talk to Robots, our AI agent, to explore Coderina&apos;s solutions,
                find the right tools for your application, and start improving your
                operations with simple, smart technology.
              </p>
              <button className="bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-full text-base font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 inline-flex items-center group">
                See What You Can Do
                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
