"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";

import { useBlogContext } from "../../contexts/BlogContext";
import { urlFor } from "../../lib/imageUrl";
import { UpcomingEventsSkeletonLoader } from "../../lib/Loaders";
import { Calendar, MapPin } from "lucide-react";

export default function UpcomingEvents({ isLargeScreen }) {
  const { events = [], loading } = useBlogContext();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  const upcomingEvents = events.filter((event) => {
    const now = new Date();
    const startDate = event.date ? new Date(event.date) : null;
    const endDate = event.endDate ? new Date(event.endDate) : null;

    if (event.status === "on-hold" || event.status === "postponed") return true;
    if (!startDate) return false;

    return startDate > now || (endDate && endDate > now);
  });

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener("resize", checkScrollButtons);
    return () => window.removeEventListener("resize", checkScrollButtons);
  }, []);

  if (loading) return <UpcomingEventsSkeletonLoader />;
  if (!upcomingEvents.length) return null;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 250);
    }
  };

  return (
    <section
      id="upcoming-events"
      itemScope
      itemType="https://schema.org/EventSeries"
      className="bg-white text-black py-10 md:py-12 px-3 sm:px-4 lg:px-8 2xl:px-10"
    >
      <div className="max-w-7xl 2xl:max-w-[100rem] mx-auto">
        {/* Header */}
        <header
          data-aos="fade-up"
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6"
        >
          <div>
            <h2 className="text-base lg:text-xl tracking-tight">
              Upcoming Events
            </h2>
           
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs font-semibold text-red-700 hover:underline italic"
          >
            View All Events →
          </Link>
        </header>

        {/* Slider */}
        <div className="relative" data-aos="fade-up" data-aos-delay="100">
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {upcomingEvents.map((event, index) => (
              <article
                key={index}
                itemScope
                itemType="https://schema.org/Event"
                className={`group shrink-0 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden 
                w-[240px] sm:w-[300px] md:w-[330px] ${
                  isLargeScreen ? "w-[340px]" : "lg:w-[290px]"
                }`}
                data-aos="zoom-in"
                data-aos-delay={index * 80}
              >
                {/* Image */}
                <figure
                  className={`relative overflow-hidden ${
                    isLargeScreen ? "h-36" : "h-32 lg:h-34"
                  }`}
                >
                  {event.image ? (
                    <Image
                      src={urlFor(event.image).url()}
                      alt={`${event.title} event banner`}
                      title={event.title}
                      fill
                      priority
                      itemProp="image"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-gray-300" />
                    </div>
                  )}

                  {/* Date Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 border border-gray-200 px-2.5 py-1 rounded-lg text-center shadow-sm">
                    {event.status === "on-hold" ||
                    event.status === "postponed" ? (
                      <span className="text-[10px] font-semibold uppercase text-red-700">
                        {event.status === "on-hold" ? "On Hold" : "Postponed"}
                      </span>
                    ) : (
                      <>
                        <div className="text-sm font-bold leading-none">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-[10px] uppercase tracking-wide text-gray-500">
                          {new Date(event.date).toLocaleString("default", {
                            month: "short",
                          })}
                        </div>
                      </>
                    )}
                  </div>

                  {event.registrationLink && (
                    <Link
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-3 right-3 text-[10px] px-2.5 py-1 rounded-md bg-red-700 text-white hover:opacity-90 transition italic"
                    >
                      Register
                    </Link>
                  )}
                </figure>

                {/* Content */}
                <div className="p-4">
                  <h3
                    itemProp="name"
                    className="text-sm font-semibold leading-snug mb-1 line-clamp-2 group-hover:text-red-700 transition"
                  >
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 text-[10px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <time itemProp="startDate">{event.time}</time>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span itemProp="location">{event.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Gradient edges */}
          {canScrollLeft && (
            <div className="hidden md:block absolute left-0 top-0 bottom-2 w-16 bg-linear-to-r from-white to-transparent pointer-events-none" />
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute right-0 top-0 bottom-2 w-16 bg-linear-to-l from-white to-transparent pointer-events-none" />
          )}
        </div>
      </div>
    </section>
  );
}