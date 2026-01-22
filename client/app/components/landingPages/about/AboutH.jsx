"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  Globe,
  Users,
  Target,
  Lightbulb,
  Award,
  Heart,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import scopeImg1 from "../../../../public/scope-img1.png";
import scopeImg2 from "../../../../public/scope-img2.png";
import scopeImg3 from "../../../../public/scope-img3.png";
import scopeImg4 from "../../../../public/scope-img4.png";

import education from "../../../../public/Education.png";
import equality from "../../../../public/equality.png";
import growth from "../../../../public/growth.png";
import innovation from "../../../../public/innovation.png";


const AboutH = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const services = [
    {
      img: scopeImg1,
      title: "STEAM Curriculum Development",
      details:
        "Designing comprehensive school programs that seamlessly integrate coding, robotics, and critical problem-solving into daily learning experiences.",
    },
    {
      img: scopeImg2,
      title: "Educator Training Programs",
      details:
        "Delivering Continuous Personal and Professional Development Training (CPPDT) for teachers to excel in virtual learning, coding, and modern STEAM methodologies.",
    },
    {
      img: scopeImg3,
      title: "Project-Based Learning",
      details:
        "Empowering students to tackle real-world community challenges through hands-on experiences with robotics, AI, and innovative technology solutions.",
    },
    {
      img: scopeImg4,
      title: "Monitoring & Evaluation",
      details:
        "Delivering expert assessments and actionable real-time feedback to continuously enhance project implementation and maximize educational outcomes.",
    },
  ];

  const sdgs = [
    {
      img: education,
      title: "Quality Education",
      desc: "Promoting inclusive and equitable quality education that transforms lives and builds sustainable futures.",
    },
    {
      img: equality,
      title: "Gender Equality",
      desc: "Empowering girls and women through the Her e-STEM initiative, breaking barriers in technology fields.",
    },
    {
      img: growth,
      title: "Economic Growth",
      desc: "Encouraging entrepreneurship and innovation through COUCH, e-STEAM,creating sustainable economic opportunities.",
    },
    {
      img: innovation,
      title: "Industry Innovation",
      desc: "Building resilient infrastructure and fostering technological innovation through comprehensive STEAM programs.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Services Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8  py-8 md:py-10 lg:py-16">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <div className="w-2 h-10  bg-linear-to-b from-[#7A4F03] to-[#C17C2B] rounded-full"></div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-4">
            {services.map((service, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="relative h-56 md:h-40 2xl:h-56 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-4 space-y-2">
                  <h3 className="text-sm md:text-base 2xl:text-lg font-bold text-gray-900 group-hover:text-[#7A4F03] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="w-full bg-black text-white">
        <div className="w-full max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8 lg:py-16">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
              Aligned with UN{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-[#7A4F03] to-[#C17C2B]">
                Sustainable Development Goals
              </span>
            </h2>
            <p className="text-sm md:text-base 2xl:text-lg text-white max-w-3xl mx-auto">
              Our work directly contributes to achieving global sustainability
              targets, creating lasting impact for communities across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 2xl:gap-10">
            {sdgs.map((sdg, i) => (
              <div
                key={i}
                className="transition-all duration-300 hover:-translate-y-2  rounded-xl"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="relative w-full h-54 lg:h-64 2xl:h-80 mx-auto rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={sdg.img}
                    alt={sdg.title}
                    fill
                    className="object-cover"
                  />
                </div>
              
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutH;
