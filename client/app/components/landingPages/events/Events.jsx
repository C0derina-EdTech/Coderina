// import React, { useState, useEffect } from "react";
// import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Calendar,
//   MapPin,
//   Clock,
//   Globe,
//   Users,
//   ArrowRight,
//   Filter,
//   Search,
//   ChevronRight,
//   Sparkles,
//   Award,
//   Zap,
//   ExternalLink,
// } from "lucide-react";
// import { useBlogContext } from "../../contexts/BlogContext";
// import { urlFor } from "../../lib/imageUrl";
// import { EventSkeleton } from "../../lib/Loaders";

// export default function Events() {
//   const { events = [], loading } = useBlogContext();
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [page, setPage] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       // true for small laptops, tablets, phones; false for desktops
//       setIsMobile(width < 1280);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const EVENTS_PER_PAGE = 6;

//   // Separate upcoming vs past events
//   const now = new Date();

//   const isEventPast = (evt) => {
//     const start = new Date(evt.date);
//     const end = evt.endDate ? new Date(evt.endDate) : null;

//     if (evt.status === "on-hold" || evt.status === "postponed") {
//       return false; // they always remain in upcoming
//     }

//     if (end) {
//       return end < now;
//     }

//     return start < now;
//   };

//   const upcomingEvents = events.filter((evt) => !isEventPast(evt));
//   const pastEvents = events.filter((evt) => isEventPast(evt));

//   const applyFilter = (list) =>
//     list.filter((evt) => {
//       const matchesCategory =
//         selectedCategory === "all" || evt.category === selectedCategory;

//       const matchesSearch =
//         evt.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         evt.description?.toLowerCase().includes(searchQuery.toLowerCase());

//       return matchesCategory && matchesSearch;
//     });

//   const filteredUpcoming = applyFilter(upcomingEvents);
//   const filteredPast = applyFilter(pastEvents);

//   // Pagination
//   const totalPages = Math.ceil(filteredUpcoming.length / EVENTS_PER_PAGE);
//   const paginatedEvents = filteredUpcoming.slice(
//     page * EVENTS_PER_PAGE,
//     (page + 1) * EVENTS_PER_PAGE
//   );

//   // Featured event (first upcoming)
//   const featuredEvent = upcomingEvents[0];

//   // Format date helper
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return {
//       day: date.getDate(),
//       month: date.toLocaleString("en-US", { month: "short" }).toUpperCase(),
//       year: date.getFullYear(),
//     };
//   };

//   // const getBadgeContent = (event) => {
//   //   if (event.status === "on hold") {
//   //     return { label: "ON HOLD", sub: "" };
//   //   }
//   //   if (event.status === "postponed") {
//   //     return { label: "POSTPONED", sub: "" };
//   //   }
//   //   const d = formatDate(event.date);
//   //   return { label: d.day, sub: d.month };
//   // };

//   const getBadgeContent = (event) => {
//     const now = new Date();
//     const start = new Date(event.date);
//     const end = event.endDate ? new Date(event.endDate) : null;

//     if (event.status === "on-hold") {
//       return { label: "ON HOLD", sub: "" };
//     }

//     if (event.status === "postponed") {
//       return { label: "POSTPONED", sub: "" };
//     }

//     // If event has an end date and is currently ongoing
//     if (end && start <= now && end >= now) {
//       return { label: "ONGOING", sub: "ENDS SOON" };
//     }

//     // Normal upcoming event date badge
//     const d = formatDate(event.date);
//     return { label: d.day, sub: d.month };
//   };

//   const isOngoing = (event) => {
//     if (!event.endDate) return false;
//     return new Date(event.date) <= now && new Date(event.endDate) >= now;
//   };

//   // Category options
//   const categories = [
//     { value: "all", label: "All Events" },
//     { value: "training", label: "Training" },
//     { value: "workshop", label: "Workshop" },
//     { value: "competition", label: "Competition" },
//     { value: "stem-program", label: "STEM Program" },
//     { value: "webinar", label: "Webinar" },
//   ];

//   if (loading) {
//     return <EventSkeleton />;
//   }

//   return (
//     <>
//       <div className="bg-white">
//         {/* Hero Section with Featured Event */}
//         <section className="relative bg-black text-white py-10 md:py-16 2xl:py-20 overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-linear-to-br from-[#e29818] via-transparent to-[#e29818]"></div>
//           </div>

//           <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 relative z-10">
//             {featuredEvent ? (
//               (() => {
//                 const featuredBadge = getBadgeContent(featuredEvent);
//                 return (
//                   <div className="grid md:grid-cols-2 gap-12 items-center">
//                     <div className="space-y-4 lg:space-y-6">
//                       <div className="inline-flex items-center gap-2 bg-[#e29818]/20 text-[#e29818] px-4 py-2 rounded-full border border-[#e29818]/30">
//                         <Sparkles className="w-4 h-4" />
//                         <span className="text-xs 2xl:text-sm font-medium">
//                           Featured Event
//                         </span>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <div className="bg-[#e29818] rounded-xl p-4 text-center min-w-[80px]">
//                           <div className="text-lg md:text-3xl font-bold">
//                             {featuredBadge.label}
//                           </div>
//                           {featuredBadge.sub && (
//                             <div className="text-sm uppercase">
//                               {featuredBadge.sub}
//                             </div>
//                           )}
//                         </div>
//                         <div>
//                           <h1 className="text-lg md:text-2xl lg:text-2xl 2xl:text-5xl font-bold leading-tight">
//                             {featuredEvent.title}
//                           </h1>
//                         </div>
//                       </div>

//                       <p className="text-xs lg:text-sm 2xl:text-base text-gray-300 leading-relaxed">
//                         {featuredEvent.description ||
//                           "Join us for an exciting learning experience in technology and innovation."}
//                       </p>

//                       <div className="flex flex-wrap gap-4 text-sm md:text-sm text-gray-300">
//                         <div className="flex items-center gap-2">
//                           <Clock className="w-4 h-4 text-[#e29818]" />
//                           <span>{featuredEvent.time || "TBA"}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           {featuredEvent.isOnline ? (
//                             <>
//                               <Globe className="w-4 h-4 text-[#e29818]" />
//                               <span>Online Event</span>
//                             </>
//                           ) : (
//                             <>
//                               <MapPin className="w-4 h-4 text-[#e29818]" />
//                               <span>
//                                 {featuredEvent.location || "Location TBA"}
//                               </span>
//                             </>
//                           )}
//                         </div>
//                       </div>

//                       <div className="flex flex-wrap gap-4 pt-4 text-xs md:text-sm">
//                         {featuredEvent.registrationLink && (
//                           <a
//                             href={featuredEvent.registrationLink}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-[#e29818] text-white px-8 py-2 rounded-full hover:bg-[#c27f0f] transition flex items-center gap-2 font-semibold"
//                           >
//                             Register Now <ArrowRight className="w-5 h-5" />
//                           </a>
//                         )}
//                         <Link
//                           href="/contact"
//                           className="border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-black transition font-semibold"
//                         >
//                           Contact Us
//                         </Link>
//                       </div>
//                     </div>

//                     <div className="relative aspect-5/3 2xl:aspect-4/3">
//                       {featuredEvent.image ? (
//                         <Image
//                           src={urlFor(featuredEvent.image).url()}
//                           alt={featuredEvent.title}
//                           className="rounded-2xl shadow-md lg:shadow-2xl   object-cover"
//                           fill
//                           priority
//                         />
//                       ) : (
//                         <div className="w-full h-full bg-linear-to-br from-[#e29818] to-[#c27f0f] rounded-2xl flex items-center justify-center">
//                           <Calendar className="w-32 h-32 text-white/30" />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })()
//             ) : (
//               <div className="text-center py-20">
//                 <h1 className="text-5xl md:text-6xl font-bold mb-6">
//                   Coderina <span className="text-[#e29818]">Events</span>
//                 </h1>
//                 <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                   Empowering the next generation through STEM education,
//                   robotics, and innovative technology programs across Africa.
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Filter and Search Section */}
//         <section className="py-8 bg-gray-50 border-b border-gray-200">
//           <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
//               {/* Search */}
//               <div className="relative w-full md:w-96 text-sm">
//                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search events..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-100 focus:border-transparent outline-none"
//                 />
//               </div>

//               {/* Category Filter */}
//               <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto text-sm">
//                 <Filter className="w-5 h-5 text-gray-600 shrink-0" />

//                 {isMobile ? (
//                   <select
//                     value={selectedCategory}
//                     onChange={(e) => {
//                       setSelectedCategory(e.target.value);
//                       setPage(0);
//                     }}
//                     className="w-full md:w-60 border border-gray-300 rounded-lg px-4 py-3"
//                   >
//                     {categories.map((cat) => (
//                       <option key={cat.value} value={cat.value}>
//                         {cat.label}
//                       </option>
//                     ))}
//                   </select>
//                 ) : (
//                   <div className="flex items-center gap-2 overflow-x-auto">
//                     {categories.map((cat) => (
//                       <button
//                         key={cat.value}
//                         onClick={() => {
//                           setSelectedCategory(cat.value);
//                           setPage(0);
//                         }}
//                         className={`px-6 py-2 rounded-lg font-medium whitespace-nowrap transition ${
//                           selectedCategory === cat.value
//                             ? "bg-[#e29818] text-white"
//                             : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
//                         }`}
//                       >
//                         {cat.label}
//                       </button>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Upcoming Events Grid */}
//         <section className="py-20 bg-white">
//           <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="mb-10">
//               <h2 className="text-xl md:text-2xl font-bold mb-4">
//                 Upcoming <span className="text-[#e29818]">Events</span>
//               </h2>
//               <p className="text-gray-600 text-sm 2xl:text-lg">
//                 Join us for exciting learning experiences and innovation
//                 showcases
//               </p>
//             </div>

//             {paginatedEvents.length > 0 ? (
//               <>
//                 <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 2xl:gap-8">
//                   {paginatedEvents.map((event, index) => {
//                     const eventDate = formatDate(event.date);
//                     const badge = getBadgeContent(event);
//                     return (
//                       <article
//                         key={event._id || index}
//                         className="bg-white rounded-2xl shadow hover:shadow-sm transition border border-gray-100 h-96 2xl:h-110 overflow-hidden group"
//                       >
//                         {/* Event Image */}
//                         <div className="relative h-48 md:h-52 2xl:h-64 bg-linear-to-br from-[#e29818] to-[#c27f0f] overflow-hidden">
//                           {event.image ? (
//                             <Image
//                               src={urlFor(event.image).url()}
//                               alt={event.title}
//                               className="object-cover group-hover:scale-110 transition duration-500"
//                               fill
//                             />
//                           ) : (
//                             <div className="w-full h-full flex items-center justify-center">
//                               <Calendar className="w-20 h-20 text-white/30" />
//                             </div>
//                           )}

//                           {/* Date Badge / onhold/ posponed*/}
//                           <div className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white rounded-lg p-3 text-center min-w-[70px]">
//                             <div className="text-sm lg:text-lg font-bold">
//                               {badge.label}
//                             </div>
//                             {badge.sub && (
//                               <div className="text-xs uppercase">
//                                 {badge.sub}
//                               </div>
//                             )}
//                           </div>

//                           {/* Category Badge */}
//                           {event.category && (
//                             <div className="absolute top-4 right-4 bg-[#e29818] text-white px-3 py-1 rounded-full text-xs font-semibold">
//                               <i>{event.category}</i>
//                             </div>
//                           )}

//                           {event.registrationLink && (
//                               <a
//                                 href={event.registrationLink}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="absolute bottom-4 right-4 flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-[#c27f0f] transition text-center text-xs 2xl:text-sm font-semibold flex items-center justify-center gap-2"
//                               >
//                                 Join <ExternalLink className="w-4 h-4" />
//                               </a>
//                             )}
//                         </div>

//                         {/* Event Content */}
//                         <div className="p-4 space-y-3 font-poppins">
//                           <h3 className="text-sm md:text-sm 2xl:text-base font-bold line-clamp-2 group-hover:text-[#e29818] transition">
//                             {event.title}
//                           </h3>

//                           {event.description && (
//                             <p className="text-gray-600 text-xs 2xl:text-sm  line-clamp-2">
//                               {event.description}
//                             </p>
//                           )}

//                           <div className="space-y-2 text-xs 2xl:text-sm text-gray-600">
//                             {event.time && (
//                               <div className="flex items-center gap-2">
//                                 <Clock className="w-4 h-4 text-[#e29818]" />
//                                 <span>{event.time}</span>
//                               </div>
//                             )}

//                             <div className="flex items-center gap-2">
//                               {event.isOnline ? (
//                                 <>
//                                   <Globe className="w-4 h-4 text-[#e29818]" />
//                                   <span>Online Event</span>
//                                 </>
//                               ) : (
//                                 <>
//                                   <MapPin className="w-4 h-4 text-[#e29818]" />
//                                   <span>
//                                     {event.location || "Location TBA"}
//                                   </span>
//                                 </>
//                               )}
//                             </div>
//                           </div>               
//                         </div>
//                       </article>
//                     );
//                   })}
//                 </div>

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                   <div className="flex justify-center gap-4 mt-12">
//                     {page > 0 && (
//                       <button
//                         onClick={() => setPage(page - 1)}
//                         className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
//                       >
//                         Previous
//                       </button>
//                     )}

//                     <div className="flex items-center gap-2">
//                       {Array.from({ length: totalPages }, (_, i) => (
//                         <button
//                           key={i}
//                           onClick={() => setPage(i)}
//                           className={`w-10 h-10 rounded-lg font-semibold transition ${
//                             page === i
//                               ? "bg-[#e29818] text-white"
//                               : "bg-white border border-gray-300 hover:bg-gray-50"
//                           }`}
//                         >
//                           {i + 1}
//                         </button>
//                       ))}
//                     </div>

//                     {page < totalPages - 1 && (
//                       <button
//                         onClick={() => setPage(page + 1)}
//                         className="px-6 py-3 bg-[#e29818] text-white rounded-lg font-semibold hover:bg-[#c27f0f] transition flex items-center gap-2"
//                       >
//                         Next <ChevronRight className="w-4 h-4" />
//                       </button>
//                     )}
//                   </div>
//                 )}
//               </>
//             ) : (
//               <div className="text-center py-20">
//                 <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
//                 <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                   No Events Found
//                 </h3>
//                 <p className="text-gray-600">
//                   {searchQuery || selectedCategory !== "all"
//                     ? "Try adjusting your filters or search query."
//                     : "Check back soon for upcoming events!"}
//                 </p>
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Past Events Section */}
//         {pastEvents.length > 0 && (
//           <section className="py-20 bg-gray-50">
//             <div className="max-w-400 mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="mb-12">
//                 <h2 className="text-xl md:text-2xl font-bold mb-2">
//                   Past <span className="text-red-800">Events</span>
//                 </h2>
//                 <p className="text-gray-600 text-sm md:text-base">
//                   Explore highlights from our previous programs and activities
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

//                 {filteredPast.slice(0, 8).map((event, index) => {
//                   const eventDate = formatDate(event.date);
//                   return (
//                     <article
//                       key={event._id || index}
//                       className="bg-white rounded-xl hover:shadow-sm transition overflow-hidden h-80 2xl:h-96"
//                     >
//                       <div className="relative h-40 2xl:h-56 bg-linear-to-br from-gray-400 to-gray-600">
//                         {event.image ? (
//                           <Image
//                             src={urlFor(event.image).url()}
//                             alt={event.title}
//                             className="object-cover opacity-75"
//                             fill
//                           />
//                         ) : (
//                           <div className="w-full h-full flex items-center justify-center">
//                             <Calendar className="w-16 h-16 text-white/30" />
//                           </div>
//                         )}
//                       </div>
//                       <div className="p-4 font-Poppins">
//                         <div className="text-xs text-gray-500 mb-2">
//                           {eventDate.day} {eventDate.month} {eventDate.year}
//                           {event.endDate && (
//                             <>
//                               {" "}
//                               - {formatDate(event.endDate).day}{" "}
//                               {formatDate(event.endDate).month}{" "}
//                               {formatDate(event.endDate).year}
//                             </>
//                           )}
//                         </div>

//                         <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
//                           <span >
//                               <Clock className="w-4 h-4 text-gray-700"/>
//                             </span>
//                           <h3 className="text-xs font-bold line-clamp-2">
                            
//                             {event.time}
//                           </h3>
//                         </div>
//                         <h3 className="text-sm font-bold line-clamp-2 mb-2">
//                           {event.title}
//                         </h3>
//                         <div className="flex items-center text-xs gap-2">
//                           {event.isOnline ? (
//                             <>
//                               <Globe className="w-4 h-4 text-gray-700" />
//                               <span>Online Event</span>
//                             </>
//                           ) : (
//                             <>
//                               <MapPin className=" w-4 h-4 text-gray-700" />
//                               <span>{event.location || "Location TBA"}</span>
//                             </>
//                           )}
//                         </div>
//                       </div>
//                     </article>
//                   );
//                 })}
//               </div>
//             </div>
//           </section>
//         )}

//       </div>
//     </>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar, MapPin, Clock, Globe, ArrowRight,
  Filter, Search, ChevronLeft, ChevronRight, ExternalLink,
} from "lucide-react";
import { useBlogContext } from "../../contexts/BlogContext";
import { urlFor } from "../../lib/imageUrl";
import { EventSkeleton } from "../../lib/Loaders";

/* ─── helpers ──────────────────────────────────────────────────── */
const fmt = (ds) => {
  const d = new Date(ds);
  return {
    day:   d.getDate(),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    year:  d.getFullYear(),
    full:  d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
  };
};

const now = new Date();
const isPast = (evt) => {
  if (evt.status === "on-hold" || evt.status === "postponed") return false;
  const end = evt.endDate ? new Date(evt.endDate) : new Date(evt.date);
  return end < now;
};
const isOngoing = (evt) => {
  if (!evt.endDate) return false;
  return new Date(evt.date) <= now && new Date(evt.endDate) >= now;
};

const getBadge = (evt) => {
  if (evt.status === "on-hold")    return { top: "ON HOLD",    sub: "" };
  if (evt.status === "postponed")  return { top: "POSTPONED",  sub: "" };
  if (isOngoing(evt))              return { top: "LIVE",        sub: "ONGOING" };
  const d = fmt(evt.date);
  return { top: d.day, sub: d.month };
};

const ACCENT = "#b91c1c"; // red-700

/* ─── Category pills ────────────────────────────────────────────── */
const categories = [
  { value: "all",          label: "All" },
  { value: "training",     label: "Training" },
  { value: "workshop",     label: "Workshop" },
  { value: "competition",  label: "Competition" },
  { value: "stem-program", label: "STEM Program" },
  { value: "webinar",      label: "Webinar" },
];

/* ─── Event card ────────────────────────────────────────────────── */
function EventCard({ event }) {
  const badge = getBadge(event);
  const date  = fmt(event.date);

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white hover:border-gray-200 transition-colors duration-300">
      {/* Image */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100">
        {event.image ? (
          <Image
            src={urlFor(event.image).url()}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <Calendar className="w-10 h-10 text-gray-200" />
          </div>
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

        {/* Date badge */}
        <div className="absolute top-3 left-3 min-w-[48px] bg-black/75 backdrop-blur-sm text-white rounded-md px-2.5 py-1.5 text-center">
          <p className="text-sm font-extrabold leading-none">{badge.top}</p>
          {badge.sub && <p className="text-[9px] uppercase tracking-wide mt-0.5 opacity-80">{badge.sub}</p>}
        </div>

        {/* Category */}
        {event.category && (
          <div
            className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded text-white"
            style={{ background: ACCENT }}
          >
            {event.category}
          </div>
        )}

        {/* Register CTA on image */}
        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-bold px-2.5 py-1.5 rounded bg-white text-gray-900 hover:bg-red-50 hover:text-red-700 transition-colors"
          >
            Register <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="text-xs font-bold text-gray-900 line-clamp-2 leading-snug group-hover:text-red-700 transition-colors">
          {event.title}
        </h3>
        {event.description && (
          <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed flex-1">
            {event.description}
          </p>
        )}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1">
          {event.time && (
            <span className="flex items-center gap-1 text-[10px] text-gray-400">
              <Clock className="w-3 h-3" style={{ color: ACCENT }} />
              {event.time}
            </span>
          )}
          <span className="flex items-center gap-1 text-[10px] text-gray-400">
            {event.isOnline
              ? <><Globe className="w-3 h-3" style={{ color: ACCENT }} />Online</>
              : <><MapPin className="w-3 h-3" style={{ color: ACCENT }} />{event.location || "TBA"}</>
            }
          </span>
        </div>
      </div>

      {/* Bottom accent */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-400 rounded-b-lg"
        style={{ background: ACCENT }}
      />
    </article>
  );
}

/* ─── Past card (compact) ───────────────────────────────────────── */
function PastCard({ event }) {
  const date = fmt(event.date);
  return (
    <article className="group flex gap-3 items-start border-b border-gray-100 pb-4 last:border-0 last:pb-0">
      <div className="relative w-16 h-14 rounded-md overflow-hidden flex-shrink-0 bg-gray-100">
        {event.image ? (
          <Image src={urlFor(event.image).url()} alt={event.title} fill className="object-cover opacity-80" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Calendar className="w-5 h-5 text-gray-300" />
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] text-gray-400 mb-0.5">{date.full}</p>
        <p className="text-xs font-semibold text-gray-700 group-hover:text-red-700 transition-colors line-clamp-2 leading-snug">
          {event.title}
        </p>
        <p className="text-[10px] text-gray-400 mt-0.5 flex items-center gap-1">
          {event.isOnline
            ? <><Globe className="w-3 h-3" />Online</>
            : <><MapPin className="w-3 h-3" />{event.location || "TBA"}</>
          }
        </p>
      </div>
    </article>
  );
}

/* ─── Main ──────────────────────────────────────────────────────── */
const PER_PAGE = 8;

export default function Events() {
  const { events = [], loading } = useBlogContext();
  const [cat, setCat]     = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage]   = useState(0);

  const upcoming = events.filter((e) => !isPast(e));
  const past     = events.filter((e) => isPast(e));

  const filter = (list) =>
    list.filter((e) =>
      (cat === "all" || e.category === cat) &&
      (e.title?.toLowerCase().includes(query.toLowerCase()) ||
       e.description?.toLowerCase().includes(query.toLowerCase()))
    );

  const filtered  = filter(upcoming);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated  = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  const featured   = upcoming[0];

  if (loading) return <EventSkeleton />;

  return (
    <div className="w-full bg-white">

      {/* ── Hero ── */}
      <section className="relative bg-[#0f0f0f] text-white overflow-hidden">
        {/* grid texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* red glow */}
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full pointer-events-none opacity-20"
          style={{ background: `radial-gradient(circle, ${ACCENT}, transparent 70%)` }}
        />

        <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          {featured ? (
            <div className="grid md:grid-cols-2 gap-8 lg:gap-14 items-center">
              {/* Left */}
              <div className="flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>
                  Featured Event
                </span>

                {/* Date badge + title */}
                <div className="flex items-start gap-4">
                  <div
                    className="rounded-xl px-4 py-3 text-center flex-shrink-0"
                    style={{ background: ACCENT }}
                  >
                    {(() => {
                      const b = getBadge(featured);
                      return (
                        <>
                          <p className="text-base font-extrabold leading-none text-white">{b.top}</p>
                          {b.sub && <p className="text-[10px] uppercase tracking-wide mt-0.5 text-white/80">{b.sub}</p>}
                        </>
                      );
                    })()}
                  </div>
                  <h1 className="text-lg sm:text-xl md:text-2xl font-extrabold text-white leading-snug tracking-tight">
                    {featured.title}
                  </h1>
                </div>

                <p className="text-xs text-white/50 leading-relaxed max-w-md">
                  {featured.description || "Join us for an exciting learning experience in technology and innovation."}
                </p>

                <div className="flex flex-wrap gap-4 text-[11px] text-white/50">
                  {featured.time && (
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                      {featured.time}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    {featured.isOnline
                      ? <><Globe className="w-3.5 h-3.5" style={{ color: ACCENT }} />Online Event</>
                      : <><MapPin className="w-3.5 h-3.5" style={{ color: ACCENT }} />{featured.location || "TBA"}</>
                    }
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mt-2">
                  {featured.registrationLink && (
                    <a
                      href={featured.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-85"
                      style={{ background: ACCENT }}
                    >
                      Register Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-5 py-2.5 rounded-lg text-white/70 border border-white/15 hover:border-white/30 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Right: image */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/8">
                {featured.image ? (
                  <Image
                    src={urlFor(featured.image).url()}
                    alt={featured.title}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white/10" />
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Events</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 tracking-tight">
                Coderina Events
              </h1>
              <p className="text-xs text-white/40 mt-2 max-w-md mx-auto leading-relaxed">
                Empowering the next generation through STEM education, robotics, and innovative technology programmes across Africa.
              </p>
            </div>
          )}
        </div>

        {/* bottom red line */}
        <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, transparent, ${ACCENT}60, transparent)` }} />
      </section>

      {/* ── Filter bar ── */}
      <section className="sticky top-0 z-30 bg-white border-b border-gray-100 py-3">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events…"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(0); }}
                className="w-full pl-9 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors"
              />
            </div>

            {/* Category pills — scroll on mobile, wrap on desktop */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 sm:pb-0 flex-nowrap sm:flex-wrap">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => { setCat(c.value); setPage(0); }}
                  className="text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex-shrink-0"
                  style={cat === c.value
                    ? { background: ACCENT, color: "#fff" }
                    : { background: "#f9fafb", color: "#6b7280" }}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Upcoming events ── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Schedule</span>
              <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5 tracking-tight">
                Upcoming Events
              </h2>
            </div>
            {filtered.length > 0 && (
              <p className="text-[11px] text-gray-400">{filtered.length} event{filtered.length !== 1 ? "s" : ""}</p>
            )}
          </div>

          {paginated.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {paginated.map((event) => (
                  <EventCard key={event._id} event={event} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setPage((p) => Math.max(0, p - 1))}
                    disabled={page === 0}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setPage(i)}
                        className="w-8 h-8 rounded-lg text-xs font-bold transition-colors"
                        style={page === i
                          ? { background: ACCENT, color: "#fff" }
                          : { background: "#f9fafb", color: "#6b7280" }}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
                    disabled={page === totalPages - 1}
                    className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:border-gray-400 hover:text-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16 border border-dashed border-gray-200 rounded-xl">
              <Calendar className="w-10 h-10 text-gray-200 mx-auto mb-3" />
              <p className="text-sm font-semibold text-gray-400">No events found</p>
              <p className="text-xs text-gray-300 mt-1">
                {query || cat !== "all" ? "Try adjusting your filters." : "Check back soon for upcoming events."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Past Events ── */}
      {past.length > 0 && (
        <section className="py-10 md:py-14 bg-[#fafafa] border-t border-gray-100">
          <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex items-end justify-between mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Archive</span>
                <h2 className="text-base sm:text-lg font-extrabold text-gray-900 mt-0.5 tracking-tight">Past Events</h2>
              </div>
              <p className="text-[11px] text-gray-400">{past.length} events</p>
            </div>

            {/* Two-column layout: 5-col image grid left, compact list right */}
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Image grid */}
              <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {filter(past).slice(0, 6).map((event, i) => {
                  const date = fmt(event.date);
                  return (
                    <article key={event._id || i} className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                      {event.image ? (
                        <Image
                          src={urlFor(event.image).url()}
                          alt={event.title}
                          fill
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Calendar className="w-8 h-8 text-gray-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3">
                        <p className="text-[9px] text-white/60">{date.full}</p>
                        <p className="text-[10px] font-bold text-white leading-snug line-clamp-2">{event.title}</p>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Compact list */}
              <div className="w-full lg:w-72 flex-shrink-0">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">More Past Events</p>
                <div className="flex flex-col gap-4">
                  {filter(past).slice(6, 14).map((event, i) => (
                    <PastCard key={event._id || i} event={event} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

    </div>
  );
}