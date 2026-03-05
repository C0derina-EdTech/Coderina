"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePost } from "../../contexts/PostContext";
import AOS from "aos";
import Footer from "../Footer";
import Navbar from "../Navbar";
// // ── Mock Data ─────────────────────────────────────────────────────────
// const mockPosts = [
//   {
//     _id: "1",
//     title:
//       "Coderina Launches Africa's Largest Youth Robotics Championship 2025",
//     slug: { current: "coderina-robotics-championship-2025" },
//     description:
//       "Over 3,000 students from 12 countries will compete in the most ambitious robotics event ever hosted on the African continent, pushing the boundaries of STEM education.",
//     readTime: 7,
//     publishedAt: "2025-03-01",
//     featuredImage:
//       "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Amara Okafor", image: null },
//   },
//   {
//     _id: "2",
//     title: "How AI Is Reshaping STEM Classrooms Across Nigeria",
//     slug: { current: "ai-reshaping-stem-nigeria" },
//     description:
//       "A deep dive into the transformative role artificial intelligence tools are playing in secondary schools nationwide.",
//     readTime: 5,
//     publishedAt: "2025-02-20",
//     featuredImage:
//       "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Chisom Eze", image: null },
//   },
//   {
//     _id: "3",
//     title: "Coderina Partners with UNESCO for Digital Literacy Push",
//     slug: { current: "coderina-unesco-partnership" },
//     description:
//       "A landmark partnership set to bring coding education to 500,000 underserved students across West Africa.",
//     readTime: 4,
//     publishedAt: "2025-02-14",
//     featuredImage:
//       "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Tunde Adeyemi", image: null },
//   },
//   {
//     _id: "4",
//     title: "Girls in Tech: Breaking Barriers in STEM Education",
//     slug: { current: "girls-in-tech-stem" },
//     description:
//       "Meet the young women redefining what it means to be a technologist in Africa today.",
//     readTime: 6,
//     publishedAt: "2025-01-30",
//     featuredImage:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Ngozi Iweala", image: null },
//   },
//   {
//     _id: "5",
//     title: "Inside the Coderina Lab: Building Tomorrow's Engineers Today",
//     slug: { current: "inside-coderina-lab" },
//     description:
//       "An exclusive look at the hands-on programs shaping the next generation of engineers across Lagos.",
//     readTime: 5,
//     publishedAt: "2025-01-22",
//     featuredImage:
//       "https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=200&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Emeka Nwosu", image: null },
//   },
//   {
//     _id: "6",
//     title: "FIRST Robotics: Nigerian Teams Set for World Stage",
//     slug: { current: "first-robotics-nigerian-teams" },
//     description:
//       "Three Nigerian teams qualify for the international FIRST Robotics Competition in Houston.",
//     readTime: 3,
//     publishedAt: "2025-01-15",
//     featuredImage:
//       "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=200&q=80",
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Kemi Adebayo", image: null },
//   },
//   {
//     _id: "7",
//     title: "Coding Bootcamps Spread to Rural Communities",
//     slug: { current: "coding-bootcamps-rural" },
//     description:
//       "New mobile training units bring coding education to students in remote areas with no internet access.",
//     readTime: 4,
//     publishedAt: "2025-01-08",
//     featuredImage: null,
//     category: [{ _id: "c1", title: "Events", slug: { current: "events" } }],
//     author: { name: "Yemi Osinbajo Jr.", image: null },
//   },
// ];

// function formatDate(dateStr) {
//   if (!dateStr) return "";
//   return new Date(dateStr).toLocaleDateString("en-GB", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// }

// // ── Hero Post ─────────────────────────────────────────────────────────
// function HeroPost({ post }) {
//   const categoryTitle = post.category?.[0]?.title || "General";
//   const date = formatDate(post.publishedAt);

//   return (
//     <article
//       className="group relative grid lg:grid-cols-2 gap-0 border border-gray-100 overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500"
//       style={{ boxShadow: "0 0 0 1px #f3f4f6" }}
//     >
//       {/* Image */}
//       <div
//         className="relative overflow-hidden bg-gray-100"
//         style={{ minHeight: 320 }}
//       >
//         {post.featuredImage ? (
//           <img
//             src={post.featuredImage}
//             alt={post.title}
//             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//             style={{ position: "absolute", inset: 0 }}
//           />
//         ) : (
//           <div
//             className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center"
//             style={{ position: "absolute", inset: 0 }}
//           >
//             <span
//               style={{
//                 fontSize: 100,
//                 color: "#e5e7eb",
//                 fontFamily: "Georgia, serif",
//                 lineHeight: 1,
//               }}
//             >
//               N
//             </span>
//           </div>
//         )}
//         <div
//           className="absolute left-0 top-0 h-full w-1 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           style={{ zIndex: 2 }}
//         />
//       </div>

//       {/* Content */}
//       <div className="flex flex-col justify-between p-8 lg:p-12 bg-white">
//         <div>
//           <div className="flex flex-wrap items-center gap-3 mb-6">
//             <span
//               className="inline-block bg-red-700 text-white font-bold uppercase px-3 py-1"
//               style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
//             >
//               {categoryTitle}
//             </span>
//             <span className="text-xs text-gray-400 font-light">{date}</span>
//             <span className="text-xs text-gray-400 font-light ml-auto">
//               {post.readTime} min read
//             </span>
//           </div>

//           <h2
//             style={{
//               fontFamily: "Georgia, 'Times New Roman', serif",
//               fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
//               fontWeight: 700,
//               lineHeight: 1.25,
//               color: "#111827",
//               marginBottom: "1.25rem",
//               transition: "color 0.3s",
//             }}
//             className="group-hover-title"
//           >
//             {post.title}
//           </h2>

//           <p
//             className="text-gray-500 text-base leading-relaxed font-light mb-8"
//             style={{
//               WebkitLineClamp: 3,
//               overflow: "hidden",
//               display: "-webkit-box",
//               WebkitBoxOrient: "vertical",
//             }}
//           >
//             {post.description}
//           </p>
//         </div>

//         <div className="flex items-center justify-between border-t border-gray-100 pt-6">
//           {post.author?.name && (
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
//                 <span
//                   style={{
//                     fontSize: "0.75rem",
//                     fontWeight: 600,
//                     color: "#9ca3af",
//                   }}
//                 >
//                   {post.author.name.charAt(0)}
//                 </span>
//               </div>
//               <span className="text-sm text-gray-600 font-medium">
//                 {post.author.name}
//               </span>
//             </div>
//           )}
//           <span
//             className="flex items-center gap-2 text-red-700 text-sm font-semibold"
//             style={{ letterSpacing: "0.03em" }}
//           >
//             Read full story
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </span>
//         </div>
//       </div>
//     </article>
//   );
// }

// ── Card Post ─────────────────────────────────────────────────────────
function PostCard({ post, index }) {
  const categoryTitle = post.category?.[0]?.title || "General";
  const date = formatDate(post.publishedAt);

  return (
    <article
      className="group flex flex-col bg-white border border-gray-100 overflow-hidden cursor-pointer h-full"
      style={{
        transition: "box-shadow 0.3s, transform 0.3s",
        animationDelay: `${index * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow =
          "0 20px 40px -8px rgba(185,28,28,0.07)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="relative overflow-hidden bg-gray-100"
        style={{ paddingBottom: "56.25%", position: "relative" }}
      >
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #f9fafb, #e5e7eb)",
            }}
          />
        )}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-red-700 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="text-red-700 font-bold uppercase"
            style={{ fontSize: "0.58rem", letterSpacing: "0.15em" }}
          >
            {categoryTitle}
          </span>
          <span className="text-gray-200">·</span>
          <span
            className="text-gray-400 font-light"
            style={{ fontSize: "0.65rem" }}
          >
            {date}
          </span>
        </div>
        <h3
          className="font-bold leading-snug text-gray-900 mb-2 flex-1"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.05rem",
            WebkitLineClamp: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.title}
        </h3>
        <p
          className="text-gray-400 text-xs leading-relaxed font-light mb-3"
          style={{
            WebkitLineClamp: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.description}
        </p>
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
          <span className="text-xs text-gray-400">
            {post.author?.name || ""}
          </span>
          {post.readTime && (
            <span
              className="text-gray-400 uppercase"
              style={{ fontSize: "0.6rem", letterSpacing: "0.15em" }}
            >
              {post.readTime} min
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

// ── List Row ──────────────────────────────────────────────────────────
function PostRow({ post }) {
  const categoryTitle = post.category?.[0]?.title || "General";
  const date = formatDate(post.publishedAt);

  return (
    <article
      className="group flex gap-4 py-5 border-b border-gray-100 items-start cursor-pointer"
      style={{ transition: "background 0.15s" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.background = "rgba(249,250,251,0.7)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div
        className="flex-shrink-0 overflow-hidden bg-gray-100"
        style={{ width: 80, height: 80 }}
      >
        {post.featuredImage ? (
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
          />
        ) : (
          <div className="w-full h-full bg-gray-100" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-red-700 font-bold uppercase"
            style={{ fontSize: "0.57rem", letterSpacing: "0.12em" }}
          >
            {categoryTitle}
          </span>
          <span className="text-gray-200 text-xs">·</span>
          <span className="text-gray-400" style={{ fontSize: "0.62rem" }}>
            {date}
          </span>
        </div>
        <h3
          className="font-bold leading-snug text-gray-900"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1rem",
            WebkitLineClamp: 2,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.title}
        </h3>
        <p
          className="text-gray-400 text-xs mt-1 font-light"
          style={{
            WebkitLineClamp: 1,
            overflow: "hidden",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
          }}
        >
          {post.description}
        </p>
      </div>
      <span
        className="text-gray-300 text-lg mt-1 flex-shrink-0 group-hover:text-red-700 transition-colors"
        style={{ transition: "color 0.2s, transform 0.2s" }}
      >
        →
      </span>
    </article>
  );
}

// // ── Page ──────────────────────────────────────────────────────────────
// export default function CategoryPreview({blogs=[]}) {
//   const { posts = [], loading } = usePost();

//   if (loading) return <p className="text-center py-8">Loading...</p>;

//   if (!posts || posts?.length === 0) {
//     return null;
//   }
//   const category = "events";
//   const displayName = "Events";
//   const [heroPost, ...restPosts] = mockPosts;
//   const gridPosts = restPosts.slice(0, 4);
//   const listPosts = restPosts.slice(4);

//   return (
//     <main
//       style={{
//         background: "#ffffff",
//         minHeight: "100vh",
//         fontFamily: "system-ui, sans-serif",
//       }}
//     >
//       {/* Header */}
//       <header style={{ borderBottom: "1px solid #f3f4f6" }}>
//         <div
//           style={{
//             maxWidth: "90rem",
//             margin: "0 auto",
//             padding: "2.5rem 1.5rem",
//           }}
//         >
//           <nav
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//               fontSize: "0.7rem",
//               color: "#9ca3af",
//               textTransform: "uppercase",
//               letterSpacing: "0.08em",
//               marginBottom: 24,
//             }}
//           >
//             <span
//               className="hover:text-red-700 cursor-pointer"
//               style={{ transition: "color 0.2s" }}
//             >
//               Home
//             </span>
//             <span style={{ color: "#e5e7eb" }}>/</span>
//             <span
//               className="hover:text-red-700 cursor-pointer"
//               style={{ transition: "color 0.2s" }}
//             >
//               Newsroom
//             </span>
//             <span style={{ color: "#e5e7eb" }}>/</span>
//             <span
//               className="hover:text-red-700 cursor-pointer"
//               style={{ transition: "color 0.2s" }}
//             >
//               category
//             </span>
//             <span style={{ color: "#e5e7eb" }}>/</span>
//             <span style={{ color: "#4b5563" }}>{displayName}</span>
//           </nav>

//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               alignItems: "flex-end",
//               justifyContent: "space-between",
//               gap: 16,
//             }}
//           >
//             <div>
//               <div
//                 style={{
//                   width: 48,
//                   height: 4,
//                   background: "#b91c1c",
//                   marginBottom: 20,
//                 }}
//               />
//               <h1
//                 style={{
//                   fontFamily: "Georgia, 'Times New Roman', serif",
//                   fontSize: "clamp(2rem, 5vw, 3.5rem)",
//                   fontWeight: 700,
//                   color: "#111827",
//                   textTransform: "capitalize",
//                   lineHeight: 1.2,
//                 }}
//               >
//                 {displayName}
//               </h1>
//               <p
//                 style={{
//                   color: "#9ca3af",
//                   fontSize: "0.85rem",
//                   marginTop: 8,
//                   fontWeight: 300,
//                 }}
//               >
//                 {mockPosts.length} stories in this category
//               </p>
//             </div>
//             <span
//               style={{
//                 fontSize: "0.8rem",
//                 color: "#9ca3af",
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 6,
//                 cursor: "pointer",
//               }}
//             >
//               ← All Newsroom
//             </span>
//           </div>
//         </div>
//       </header>

//       {/* Content */}
//       <div
//         style={{
//           maxWidth: "90rem",
//           margin: "0 auto",
//           padding: "3rem 1.5rem",
//           display: "flex",
//           flexDirection: "column",
//           gap: "4rem",
//         }}
//       >
//         <HeroPost post={heroPost} />

//         {gridPosts.length > 0 && (
//           <section>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 16,
//                 marginBottom: 32,
//               }}
//             >
//               <div style={{ width: 24, height: 1, background: "#b91c1c" }} />
//               <span
//                 style={{
//                   fontSize: "0.62rem",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.2em",
//                   color: "#9ca3af",
//                   fontWeight: 500,
//                 }}
//               >
//                 More Stories
//               </span>
//               <div style={{ flex: 1, height: 1, background: "#f3f4f6" }} />
//             </div>
//             <div
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
//                 gap: 24,
//               }}
//             >
//               {gridPosts.map((post, i) => (
//                 <PostCard key={post._id} post={post} index={i} />
//               ))}
//             </div>
//           </section>
//         )}

//         {listPosts.length > 0 && (
//           <section>
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 16,
//                 marginBottom: 8,
//               }}
//             >
//               <div style={{ width: 24, height: 1, background: "#b91c1c" }} />
//               <span
//                 style={{
//                   fontSize: "0.62rem",
//                   textTransform: "uppercase",
//                   letterSpacing: "0.2em",
//                   color: "#9ca3af",
//                   fontWeight: 500,
//                 }}
//               >
//                 Also in {displayName}
//               </span>
//               <div style={{ flex: 1, height: 1, background: "#f3f4f6" }} />
//             </div>
//             {listPosts.map((post) => (
//               <PostRow key={post._id} post={post} />
//             ))}
//           </section>
//         )}
//       </div>

//       {/* Footer strip */}
//       <div style={{ borderTop: "1px solid #f3f4f6", marginTop: 32 }}>
//         <div
//           style={{
//             maxWidth: "90rem",
//             margin: "0 auto",
//             padding: "1.5rem",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <span
//             style={{
//               fontSize: "0.72rem",
//               color: "#9ca3af",
//               textTransform: "capitalize",
//             }}
//           >
//             {displayName} · Newsroom
//           </span>
//           <span
//             style={{
//               fontSize: "0.72rem",
//               color: "#b91c1c",
//               fontWeight: 500,
//               cursor: "pointer",
//             }}
//           >
//             ← Back to all stories
//           </span>
//         </div>
//       </div>
//     </main>
//   );
// }

// ── Helpers ─────────────────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}



function HeroPost({ post }) {
  const categoryTitle = post.category?.[0]?.title || "General";
  const date = formatDate(post.publishedAt);

  const media = post.featuredImage || post.featuredVideo || null;

  return (
    <article className="group relative grid lg:grid-cols-2 gap-0 border border-gray-100 overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500">
      {/* Media */}
      <div className="relative overflow-hidden bg-gray-100 h-64 lg:h-auto">
        {media ? (
          <Image
            src={media}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
            <span className="text-[5rem] text-gray-200 font-serif">N</span>
          </div>
        )}

        {/* Red side line */}
        <div className="absolute left-0 top-0 h-full w-1 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between p-6 lg:p-8 bg-white">
        <div>
          {/* Category & meta */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-block bg-red-700 text-white font-bold uppercase px-2 py-1 text-3xl md:text-4xl 2xl:text-[0.55rem] tracking-widest">
              {categoryTitle}
            </span>
            <span className="text-xs text-gray-400 font-light">{date}</span>
            <span className="text-xs text-gray-400 font-light ml-auto">
              {post.readTime} min read
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif font-bold text-[clamp(1.4rem,3vw,2rem)] leading-snug text-gray-900 mb-4 transition-colors duration-300 group-hover:text-red-700">
            {post.title}
          </h2>

          {/* Description */}
          <p className="text-gray-500 text-xs 2xl:text-sm leading-relaxed font-light mb-6 line-clamp-3">
            {post.description}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          {post.author?.name && (
            <div className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-[0.7rem] font-semibold text-gray-400">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <span className="text-[10px] text-gray-600 font-medium">
                {post.author.name}
              </span>
            </div>
          )}

          <span className="flex items-center gap-1.5 text-red-700 text-[10px] font-semibold tracking-[0.01em] cursor-pointer">
            Read full story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}

// ── Other Posts Components (PostCard & PostRow) ──────
// Keep your Tailwind and inline styles intact exactly as before
// (PostCard & PostRow implementations unchanged, just prioritize featuredImage first)

export default function CategoryPreview({
  blogs = [],
  otherBlogs = [],
  category,
}) {

  if (
    (!blogs || blogs.length === 0) &&
    (!otherBlogs || otherBlogs.length === 0)
  )
    return null;

  // Remove duplicates
  const seen = new Set();
  const mainPosts = blogs.filter((p) => !seen.has(p._id) && seen.add(p._id));
  const relatedPosts = otherBlogs.filter(
    (p) => !seen.has(p._id) && seen.add(p._id),
  );

  const [heroPost, ...restPosts] =
    mainPosts.length > 0 ? mainPosts : relatedPosts;
  const gridPosts = restPosts.slice(0, 4);
  const listPosts = restPosts.slice(4);

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen font-sans">
        <header className="border-b border-gray-100">
          <div className="max-w-[90rem] mx-auto px-2 sm:px-4 md:px-6 lg:px-8 2xl:px-10 py-10">
            {/* Breadcrumb / Nav */}
            <nav className="flex items-center gap-2.5 text-[0.7rem] text-gray-400 uppercase tracking-wide mb-6">
              <Link
                href="/"
                className="hover:text-red-700 cursor-pointer transition-colors duration-200"
              >
                Home
              </Link>
              <span className="text-gray-200">/</span>
              <Link
                href="/newsroom"
                className="hover:text-red-700 cursor-pointer transition-colors duration-200"
              >
                Newsroom
              </Link>
              <span className="text-gray-200">/</span>
              <span className="hover:text-red-700 cursor-pointer transition-colors duration-200">
                category
              </span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">{category}</span>
            </nav>

            {/* Title and right-side link */}
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="w-12 h-1 bg-red-700 mb-5" />
                <h1 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 capitalize leading-[1.2]">
                  {category}
                </h1>
                <p className="text-gray-400 text-sm mt-2 font-light">
                  {blogs.length} stories in this category
                </p>
              </div>

              <Link
                href="/newsroom"
                className="text-[0.8rem] text-gray-400 flex items-center gap-1.5 cursor-pointer hover:text-red-700 transition-colors duration-200"
              >
                ← All Newsroom
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10 py-12 flex flex-col gap-16">
          {heroPost && <HeroPost post={heroPost} />}

          {/* Grid posts */}
          {gridPosts.length > 0 && (
            <section>
              <div className="grid gap-6 sm:gap-6 md:gap-6 grid-cols-[repeat(auto-fill,minmax(220px,1fr))]">
                {gridPosts.map((post, i) => (
                  <PostCard key={post._id} post={post} index={i} />
                ))}
              </div>
            </section>
          )}

          {/* List posts */}
          {listPosts.length > 0 && (
            <section className="flex flex-col gap-4">
              {listPosts.map((post) => (
                <PostRow key={post._id} post={post} />
              ))}
            </section>
          )}
        </div>

        <Footer />
      </main>
    </>
  );
}
