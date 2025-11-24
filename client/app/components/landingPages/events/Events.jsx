import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Globe,
  Users,
  ArrowRight,
  Filter,
  Search,
  ChevronRight,
  Sparkles,
  Award,
  Zap,
  ExternalLink,
} from "lucide-react";
import { useBlogContext } from "../../contexts/BlogContext";
import { urlFor } from "../../lib/imageUrl";
import { EventSkeleton } from "../../lib/Loaders";

export default function Events() {
  const { events = [], loading } = useBlogContext();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      // true for small laptops, tablets, phones; false for desktops
      setIsMobile(width < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const EVENTS_PER_PAGE = 6;

  // Separate upcoming vs past events
  const now = new Date();

  const isEventPast = (evt) => {
    const start = new Date(evt.date);
    const end = evt.endDate ? new Date(evt.endDate) : null;

    if (evt.status === "on-hold" || evt.status === "postponed") {
      return false; // they always remain in upcoming
    }

    if (end) {
      return end < now;
    }

    return start < now;
  };

  const upcomingEvents = events.filter((evt) => !isEventPast(evt));
  const pastEvents = events.filter((evt) => isEventPast(evt));

  const applyFilter = (list) =>
    list.filter((evt) => {
      const matchesCategory =
        selectedCategory === "all" || evt.category === selectedCategory;

      const matchesSearch =
        evt.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        evt.description?.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });

  const filteredUpcoming = applyFilter(upcomingEvents);
  const filteredPast = applyFilter(pastEvents);

  // Pagination
  const totalPages = Math.ceil(filteredUpcoming.length / EVENTS_PER_PAGE);
  const paginatedEvents = filteredUpcoming.slice(
    page * EVENTS_PER_PAGE,
    (page + 1) * EVENTS_PER_PAGE
  );

  // Featured event (first upcoming)
  const featuredEvent = upcomingEvents[0];

  // Format date helper
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
      year: date.getFullYear(),
    };
  };

  // const getBadgeContent = (event) => {
  //   if (event.status === "on hold") {
  //     return { label: "ON HOLD", sub: "" };
  //   }
  //   if (event.status === "postponed") {
  //     return { label: "POSTPONED", sub: "" };
  //   }
  //   const d = formatDate(event.date);
  //   return { label: d.day, sub: d.month };
  // };

  const getBadgeContent = (event) => {
    const now = new Date();
    const start = new Date(event.date);
    const end = event.endDate ? new Date(event.endDate) : null;

    if (event.status === "on-hold") {
      return { label: "ON HOLD", sub: "" };
    }

    if (event.status === "postponed") {
      return { label: "POSTPONED", sub: "" };
    }

    // If event has an end date and is currently ongoing
    if (end && start <= now && end >= now) {
      return { label: "ONGOING", sub: "ENDS SOON" };
    }

    // Normal upcoming event date badge
    const d = formatDate(event.date);
    return { label: d.day, sub: d.month };
  };

  const isOngoing = (event) => {
    if (!event.endDate) return false;
    return new Date(event.date) <= now && new Date(event.endDate) >= now;
  };

  // Category options
  const categories = [
    { value: "all", label: "All Events" },
    { value: "training", label: "Training" },
    { value: "workshop", label: "Workshop" },
    { value: "competition", label: "Competition" },
    { value: "stem-program", label: "STEM Program" },
    { value: "webinar", label: "Webinar" },
  ];

  if (loading) {
    return <EventSkeleton />;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover upcoming STEM events, workshops, competitions, and training programs by Coderina – empowering youth in Africa through technology and innovation."
        />
        <meta
          name="keywords"
          content="Coderina events, STEM programs, robotics workshops, coding competitions, technology training, Nigeria education events"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Hero Section with Featured Event */}
        <section className="relative bg-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e29818] via-transparent to-[#e29818]"></div>
          </div>

          <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {featuredEvent ? (
              (() => {
                const featuredBadge = getBadgeContent(featuredEvent);
                return (
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 bg-[#e29818]/20 text-[#e29818] px-4 py-2 rounded-full border border-[#e29818]/30">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          Featured Event
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="bg-[#e29818] rounded-xl p-4 text-center min-w-[80px]">
                          <div className="text-lg md:text-3xl font-bold">
                            {featuredBadge.label}
                          </div>
                          {featuredBadge.sub && (
                            <div className="text-sm uppercase">
                              {featuredBadge.sub}
                            </div>
                          )}
                        </div>
                        <div>
                          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            {featuredEvent.title}
                          </h1>
                        </div>
                      </div>

                      <p className="text-xl text-gray-300 leading-relaxed">
                        {featuredEvent.description ||
                          "Join us for an exciting learning experience in technology and innovation."}
                      </p>

                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-[#e29818]" />
                          <span>{featuredEvent.time || "TBA"}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {featuredEvent.isOnline ? (
                            <>
                              <Globe className="w-5 h-5 text-[#e29818]" />
                              <span>Online Event</span>
                            </>
                          ) : (
                            <>
                              <MapPin className="w-5 h-5 text-[#e29818]" />
                              <span>
                                {featuredEvent.location || "Location TBA"}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                        {featuredEvent.registrationLink && (
                          <a
                            href={featuredEvent.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#e29818] text-white px-8 py-4 rounded-lg hover:bg-[#c27f0f] transition flex items-center gap-2 font-semibold"
                          >
                            Register Now <ArrowRight className="w-5 h-5" />
                          </a>
                        )}
                        <Link
                          href="/contact"
                          className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition font-semibold"
                        >
                          Contact Us for more Details
                        </Link>
                      </div>
                    </div>

                    <div className="relative h-[400px] lg:h-[600px]">
                      {featuredEvent.image ? (
                        <Image
                          src={urlFor(featuredEvent.image).url()}
                          alt={featuredEvent.title}
                          className="rounded-2xl shadow-2xl object-cover"
                          fill
                          priority
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#e29818] to-[#c27f0f] rounded-2xl flex items-center justify-center">
                          <Calendar className="w-32 h-32 text-white/30" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })()
            ) : (
              <div className="text-center py-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Coderina <span className="text-[#e29818]">Events</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Empowering the next generation through STEM education,
                  robotics, and innovative technology programs across Africa.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#e29818] focus:border-transparent outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
                <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />

                {isMobile ? (
                  <select
                    value={selectedCategory}
                    onChange={(e) => {
                      setSelectedCategory(e.target.value);
                      setPage(0);
                    }}
                    className="w-full md:w-60 border border-gray-300 rounded-lg px-4 py-3"
                  >
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex items-center gap-2 overflow-x-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => {
                          setSelectedCategory(cat.value);
                          setPage(0);
                        }}
                        className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                          selectedCategory === cat.value
                            ? "bg-[#e29818] text-white"
                            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Upcoming <span className="text-[#e29818]">Events</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Join us for exciting learning experiences and innovation
                showcases
              </p>
            </div>

            {paginatedEvents.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
                  {paginatedEvents.map((event, index) => {
                    const eventDate = formatDate(event.date);
                    const badge = getBadgeContent(event);
                    return (
                      <article
                        key={event._id || index}
                        className="bg-white rounded-2xl shadow hover:shadow-sm transition border border-gray-100 overflow-hidden group"
                      >
                        {/* Event Image */}
                        <div className="relative h-48 md:h-64 2xl:h-80 bg-gradient-to-br from-[#e29818] to-[#c27f0f] overflow-hidden">
                          {event.image ? (
                            <Image
                              src={urlFor(event.image).url()}
                              alt={event.title}
                              className="object-cover group-hover:scale-110 transition duration-500"
                              fill
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Calendar className="w-20 h-20 text-white/30" />
                            </div>
                          )}

                          {/* Date Badge / onhold/ posponed*/}
                          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white rounded-lg p-3 text-center min-w-[70px]">
                            <div className="text-2xl font-bold">
                              {badge.label}
                            </div>
                            {badge.sub && (
                              <div className="text-xs uppercase">
                                {badge.sub}
                              </div>
                            )}
                          </div>

                          {/* Category Badge */}
                          {event.category && (
                            <div className="absolute top-4 right-4 bg-[#e29818] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase">
                              {event.category}
                            </div>
                          )}
                        </div>

                        {/* Event Content */}
                        <div className="p-6 space-y-4">
                          <h3 className="text-xl font-bold line-clamp-2 group-hover:text-[#e29818] transition">
                            {event.title}
                          </h3>

                          {event.description && (
                            <p className="text-gray-600 text-sm line-clamp-2">
                              {event.description}
                            </p>
                          )}

                          <div className="space-y-2 text-sm text-gray-600">
                            {event.time && (
                              <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-[#e29818]" />
                                <span>{event.time}</span>
                              </div>
                            )}

                            <div className="flex items-center gap-2">
                              {event.isOnline ? (
                                <>
                                  <Globe className="w-4 h-4 text-[#e29818]" />
                                  <span>Online Event</span>
                                </>
                              ) : (
                                <>
                                  <MapPin className="w-4 h-4 text-[#e29818]" />
                                  <span>
                                    {event.location || "Location TBA"}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4">
                            {/* Show JOIN button only if registrationLink exists */}
                            {event.registrationLink && (
                              <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-[#e29818] text-white px-4 py-2 rounded-lg hover:bg-[#c27f0f] transition text-center text-sm font-semibold flex items-center justify-center gap-2"
                              >
                                Join <ExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center gap-4 mt-12">
                    {page > 0 && (
                      <button
                        onClick={() => setPage(page - 1)}
                        className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                      >
                        Previous
                      </button>
                    )}

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setPage(i)}
                          className={`w-10 h-10 rounded-lg font-semibold transition ${
                            page === i
                              ? "bg-[#e29818] text-white"
                              : "bg-white border border-gray-300 hover:bg-gray-50"
                          }`}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>

                    {page < totalPages - 1 && (
                      <button
                        onClick={() => setPage(page + 1)}
                        className="px-6 py-3 bg-[#e29818] text-white rounded-lg font-semibold hover:bg-[#c27f0f] transition flex items-center gap-2"
                      >
                        Next <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No Events Found
                </h3>
                <p className="text-gray-600">
                  {searchQuery || selectedCategory !== "all"
                    ? "Try adjusting your filters or search query."
                    : "Check back soon for upcoming events!"}
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Past <span className="text-[#e29818]">Events</span>
                </h2>
                <p className="text-gray-600 text-lg">
                  Explore highlights from our previous programs and activities
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {filteredPast.slice(0, 8).map((event, index) => {
                  const eventDate = formatDate(event.date);
                  return (
                    <article
                      key={event._id || index}
                      className="bg-white rounded-xl shadow hover:shadow-sm transition overflow-hidden"
                    >
                      <div className="relative h-40 2xl:h-72 bg-gradient-to-br from-gray-400 to-gray-600">
                        {event.image ? (
                          <Image
                            src={urlFor(event.image).url()}
                            alt={event.title}
                            className="object-cover opacity-75"
                            fill
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Calendar className="w-16 h-16 text-white/30" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-gray-500 mb-2">
                          {eventDate.day} {eventDate.month} {eventDate.year}
                          {event.endDate && (
                            <>
                              {" "}
                              - {formatDate(event.endDate).day}{" "}
                              {formatDate(event.endDate).month}{" "}
                              {formatDate(event.endDate).year}
                            </>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                          <Clock className="w-4 h-4 text-gray-700" />
                          <h3 className="font-bold line-clamp-2 mb-2">
                            {event.time}
                          </h3>
                        </div>
                        <h3 className="font-bold line-clamp-2 mb-2">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          {event.isOnline ? (
                            <>
                              <Globe className="w-4 h-4 text-gray-700" />
                              <span>Online Event</span>
                            </>
                          ) : (
                            <>
                              <MapPin className="w-4 h-4 text-gray-700" />
                              <span>{event.location || "Location TBA"}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Stats Section */}
        <section className="py-20 bg-[#e29818] text-white">
          <div className="max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {events.length}+
                </div>
                <div className="text-orange-100 text-lg">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {upcomingEvents.length}
                </div>
                <div className="text-orange-100 text-lg">Upcoming</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">5K+</div>
                <div className="text-orange-100 text-lg">Participants</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">98%</div>
                <div className="text-orange-100 text-lg">Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
