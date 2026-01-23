"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

export default function Speakers({
  speakers = [],
  heading = "Distinguished Speakers",
  sectionId = "speakers",
}) {
  const [expandedSpeakers, setExpandedSpeakers] = useState({});

  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 50,
        });
      });
    }
  }, []);

  const toggleDescription = (index) => {
    setExpandedSpeakers(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  if (!speakers.length) return null;

  return (
    <section
      id={sectionId}
      aria-labelledby="speakers-heading"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white px-2  sm:px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <header 
          className="text-center mb-8 sm:mb-12"
          data-aos="fade-down"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-teal-800 rounded-full mb-3 sm:mb-4 shadow-lg">
            <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <h2
            id="speakers-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2"
          >
            {heading}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-800 to-teal-600 mx-auto rounded-full"></div>
        </header>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 2xl:gap-6">
          {speakers.map((speaker, index) => (
            <article
              key={index}
              itemScope
              itemType="https://schema.org/Person"
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-800 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={`${speaker.name} – ${speaker.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3
                  className="text-base font-bold text-gray-900 mb-1 line-clamp-2"
                  itemProp="name"
                >
                  {speaker.name}
                </h3>
                <p
                  className="text-xs text-gray-600 mb-3 line-clamp-2"
                  itemProp="jobTitle"
                >
                  {speaker.title}
                </p>

                {speaker.topic && (
                  <div className="bg-gradient-to-r from-teal-50 to-teal-50/50 rounded-lg border-l-3 border-teal-800 overflow-hidden">
                    <div className="p-3">
                      <p className="text-xs text-teal-800 font-bold mb-1.5 tracking-wide">
                        TOPIC
                      </p>
                      <p
                        className={`text-sm text-gray-700 leading-relaxed ${
                          !expandedSpeakers[index] ? 'line-clamp-2' : ''
                        }`}
                        itemProp="description"
                      >
                        {speaker.topic}
                      </p>
                      {speaker.topic.length > 80 && (
                        <button
                          onClick={() => toggleDescription(index)}
                          className="mt-2 text-xs text-teal-800 font-semibold hover:text-teal-900 flex items-center gap-1 transition-colors"
                          aria-label={expandedSpeakers[index] ? "Show less" : "See more"}
                        >
                          {expandedSpeakers[index] ? (
                            <>
                              Show less
                              <ChevronUp className="w-3 h-3" />
                            </>
                          ) : (
                            <>
                              See more
                              <ChevronDown className="w-3 h-3" />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}