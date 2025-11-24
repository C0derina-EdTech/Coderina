import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useBlogContext } from "../../contexts/BlogContext";
import { urlFor } from "../../lib/imageUrl";
import { UpcomingEventsSkeletonLoader } from "../../lib/Loaders";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Globe,
  Calendar,
} from "lucide-react";
export default function UpcomingEvents() {
  const { events = [], loading } = useBlogContext();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // ✅ Filter only valid upcoming events
//  const upcomingEvents = events.filter((event) => {
//   const now = new Date();
//   const startDate = new Date(event.date);
//   const endDate = event.endDate ? new Date(event.endDate) : null;

//   const isUpcoming =
//     startDate > now || (endDate && endDate > now);

//   return isUpcoming;
// });


const upcomingEvents = events.filter((event) => {
  const now = new Date();
  const startDate = event.date ? new Date(event.date) : null;
  const endDate = event.endDate ? new Date(event.endDate) : null;

  // Always include these even without date
  if (event.status === "on-hold" || event.status === "postponed") {
    return true;
  }

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

//  Move this check AFTER hooks
if (loading) {
  return <UpcomingEventsSkeletonLoader />;
}

if (!upcomingEvents || upcomingEvents.length === 0) {
  return null;
}


  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScrollButtons, 300);
    }
  };

 

  return (
    <section
      id="upcoming-events"
      itemScope
      itemType="https://schema.org/EventSeries"
      className="bg-black text-white py-12 sm:py-16 md:py-20 px-2 sm:px-6 md:px-8"
    >
      <div className="max-w-[130rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8 md:mb-12">
          <div>
            <div className="inline-block bg-[#e29818] px-3 py-1 rounded-full text-xs font-semibold mb-3">
              UPCOMING
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured Events
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Discover and join amazing events happening soon
            </p>
          </div>

          {/* Scroll Buttons - Desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-gray-700 text-gray-700 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "border-white hover:bg-white hover:text-black"
                  : "border-gray-700 text-gray-700 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Events Scroll Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                  
                   {event.image ? (
                    <Image
                      src={urlFor(event.image).url()}
                      alt={event.title}
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      fill
                      priority
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#e29818] to-[#c27f0f] rounded-2xl flex items-center justify-center">
                      <Calendar className="w-32 h-32 text-white/30" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Date Badge or on hold or postponed */}
                  <div className="absolute top-4 left-4 bg-white text-black rounded-xl px-3 py-2 text-center shadow-lg">
                   {event.status === "on-hold" || event.status === "postponed" ? (
  <div className="text-xs font-bold uppercase leading-tight">
    {event.status === "on-hold" ? "ON HOLD" : "POSTPONED"}
  </div>
) : (
  <>
    <div className="text-2xl font-bold leading-none">
      {new Date(event.date).getDate()}
    </div>
    <div className="text-xs font-semibold uppercase tracking-wide mt-0.5">
      {new Date(event.date).toLocaleString("default", {
        month: "short",
      })}
    </div>
  </>
)}

                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 group-hover:text-[#e29818] transition-colors">
                    {event.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4"/>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4"/>
                      <span>{event.location}</span>
                    </div>

                  </div>

                  {event.registrationLink && (
  <Link
    href={event.registrationLink}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full block text-center bg-[#e29818] hover:bg-[#c88416] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
  >
    Join
  </Link>
)}

                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          {canScrollLeft && (
            <div className="hidden md:block absolute left-0 top-0 bottom-4 w-20 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          )}
          {canScrollRight && (
            <div className="hidden md:block absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
          )}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/events"
            className="inline-flex items-center text-white hover:text-[#e29818] font-semibold transition-colors group"
          >
            <span>View All Events</span>
            <svg
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
