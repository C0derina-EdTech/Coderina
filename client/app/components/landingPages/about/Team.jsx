import React, { useEffect } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import group from "../../../../public/group1.jpg";
import founder2 from "../../../../public/founder2.jpg";
import founder3 from "../../../../public/couch/feminiyi.jpg";
import daniel from "../../../../public/daniel.png";
import christy from "../../../../public/christy.jpg";
import prelumi from "../../../../public/prelumi.jpg";
import tosin from "../../../../public/tosin.jpg";
import faith from "../../../../public/faith.jpg";

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const teamMembers = [
    {
      img: founder3,
      name: "Mr. Femi Niyi",
      role: "Chairman Board of Trustee",
      email: "fniyi@coderina.org",
      description:
        "Leading strategic vision and governance for Coderina's mission across Africa.",
    },
    {
      img: founder2,
      name: "Mr. Olabisi Kelvin Ajayi",
      role: "Director of Relationships and Engagement",
      email: "oajayi@coderina.org",
      description:
        "Building partnerships and fostering community engagement across the continent.",
    },
    {
      img: daniel,
      name: "Mr. Aduku Daniel",
      role: "Program Director: Emerging Technology Education",
      email: "adaniel@coderina.org",
      description:
        "Driving innovation in technology education and curriculum development.",
    },
    {
      img: tosin,
      name: "Mr. Oluwatosin Olugbemi",
      role: "Senior Project Manager",
      email: "oolugbemi@coderina.org",
      description:
        "Overseeing project implementation and ensuring excellence in delivery.",
    },
    {
      img: prelumi,
      name: "Mr. Oluwapelumi A. Ojo",
      role: "Program Manager - Additive Manufacturing & Reverse Engineering",
      email: "oojo@coderina.org",
      description:
        "Leading hands-on learning in advanced manufacturing and engineering design.",
    },
    {
      img: faith,
      name: "Mrs. Faith Effiong",
      role: "Account Manager: Primary Education",
      email: "feffiong@coderina.org",
      description:
        "Championing early childhood STEAM education and primary school programs.",
    },
    {
      img: christy,
      name: "Miss Christiana Anthony",
      role: "Project Manager - Tertiary Education",
      email: "canthony@coderina.org",
      description:
        "Managing higher education initiatives and university partnerships.",
    },
  ];

  return (
    <section
      className="w-full bg-white py-8 md:py-16"
      aria-labelledby="team-heading"
    >
      <div className="w-full max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="mb-8">
          <h2
            id="team-heading"
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Meet Our Team
          </h2>
         
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {teamMembers.map((member, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl md:rounded-3xl overflow-hidden hover:shadow-sm transition-all duration-300 h-auto group border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={member.img}
                  alt={`${member.name} - ${member.role} at Coderina`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading={i < 4 ? "eager" : "lazy"}
                  quality={75}
                />
              </div>

              {/* Content */}
              <div className="p-2 md:p-4 space-y-2">
                <h3 className="text-sm md:text-base font-bold text-gray-900 leading-tight">
                  {member.name}
                </h3>

                <p className="text-xs text-[#7A4F03] font-semibold leading-snug">
                  {member.role}
                </p>

                <p className="text-xs text-gray-700 leading-relaxed line-clamp-3">
                  {member.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Team Photo Section */}
        {/* <div
          className="flex flex-col items-center space-y-6"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div className="w-full max-w-5xl h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] rounded-2xl md:rounded-3xl lg:rounded-[3rem] overflow-hidden shadow-lg">
            <Image
              src={group}
              alt="The entire Coderina team working together to transform STEAM education in Africa"
              className="w-full h-full object-cover"
              loading="lazy"
              quality={90}
            />
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl md:text-2xl font-bold text-gray-900">
              Our Amazing Team
            </p>
            <p className="text-base md:text-lg text-gray-600">
              United in our mission to empower the next generation through
              technology education
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Team;
