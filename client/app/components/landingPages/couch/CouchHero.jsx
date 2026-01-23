// "use client";
// import React from "react";
// import { Calendar } from "lucide-react";
// import couchData from "../../lib/couch";
// import flier from "../../../../public/couch/couchprogram.jpg";
// import bg from "../../../../public/couch/teamimsu2.jpg";
// import logo from "../../../../public/couchlogo.png";
// import Image from "next/image";

// const CouchHero = () => {
//   return (
//     <div>
//       <div className="relative bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
//         {/* Background Image */}
//         <Image
//           src={bg}
//           alt="Coderina University Challenge participants and innovation showcase"
//           fill
//           priority
//           className="object-cover object-center opacity-20"
//         />

//         {/* Pattern Overlay */}
//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
//               backgroundSize: "40px 40px",
//             }}
//           ></div>
//         </div>

//         {/* Dark Overlay for readability */}
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="relative max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 4xl:px-24 py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48">
//           <div className="text-center">
//             {/* Dynamic Badge */}
//             <div className="inline-block mb-6 sm:mb-8">
//               <div className="flex items-center gap-3 bg-[#f9a826] text-black px-6 py-3 rounded-full text-sm sm:text-base font-bold">
//                 <Calendar className="w-5 h-5" />
//                 <span>Annual Innovation Competition</span>
//               </div>
//             </div>

//             {/* Main Heading - SEO optimised */}
//             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//               Coderina University
//               <br />
//               <span className="text-[#f9a826]">Challenge</span>
//             </h1>

//             {/* Supporting SEO description */}
//             <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
//               An innovation platform designed to empower and inspire creativity
//               amongst students in tertiary education by showcasing
//               groundbreaking projects in collaboration with the National
//               Universities Commission (NUC).
//             </p>

//             {/* Stats */}
//             <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white">
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9a826] mb-2">
//                   10+
//                 </div>
//                 <div className="text-sm sm:text-base md:text-lg text-gray-300">
//                   Universities
//                 </div>
//               </div>
//               <div className="w-px h-12 bg-gray-600"></div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9a826] mb-2">
//                   10+
//                 </div>
//                 <div className="text-sm sm:text-base md:text-lg text-gray-300">
//                   Innovative Projects
//                 </div>
//               </div>
//               <div className="w-px h-12 bg-gray-600"></div>
//               <div className="text-center">
//                 <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f9a826] mb-2">
//                   8+
//                 </div>
//                 <div className="text-sm sm:text-base md:text-lg text-gray-300">
//                   Mentors
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CouchHero;



"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const CouchHero = () => {
  return (
    <div className="bg-black text-white">
      <section className="relative flex items-start justify-start pt-32 pb-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute inset-0 w-full h-full">
            <video
              className="w-full h-full opacity-60 object-cover"
              src="https://res.cloudinary.com/dpfbpdohh/video/upload/v1769190591/couchclip1_xw3x7s.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="max-w-400 mx-auto px-2 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-6 leading-tight">
               Coderina University <span className="text-teal-600 hover:text-[#f9a826]">Challenge</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8">
              An innovation platform designed to empower and inspire creativity
             amongst students in tertiary education by showcasing
            groundbreaking projects in collaboration with the National
             Universities Commission (NUC).
            </p>
            <div className="flex flex-wrap gap-4 text-white">
              <Link
                href="/programs"
                className="bg-teal-700 hover:bg-teal-600 text-white px-5 sm:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600"
              >
                Programs →
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-5 sm:px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-xs md:text-sm"
              >
                About Coderina
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CouchHero;

