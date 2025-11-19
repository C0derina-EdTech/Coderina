"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Globe, Users, Target, Lightbulb, Award, Heart } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Team from "./Team";
// Import images
import Plant from "../../../../public/plant.png";
import Load from "../../../../public/loading.png";
import Repeat from "../../../../public/repeat.png";
import Safe from "../../../../public/safe.png";
import Locate from "../../../../public/location.png";
import Smile from "../../../../public/smile.png";
import Bulb from "../../../../public/bulb.png";
import Tool from "../../../../public/tool.png";

import scopeImg1 from "../../../../public/scope-img1.png";
import scopeImg2 from "../../../../public/scope-img2.png";
import scopeImg3 from "../../../../public/scope-img3.png";
import scopeImg4 from "../../../../public/scope-img4.png";

import kenya from "../../../../public/kenya.png";
import nigeria from "../../../../public/nigeria.png";
import ghana from "../../../../public/ghana.png";
import rwanda from "../../../../public/rwanda.png";
import uganda from "../../../../public/uganda.png";
import sierra from "../../../../public/sierra.png";

import education from "../../../../public/Education.png";
import equality from "../../../../public/equality.png";
import growth from "../../../../public/growth.png";
import innovation from "../../../../public/innovation.png";

import group from "../../../../public/group1.jpg";
import founder2 from "../../../../public/founder2.jpg";
import founder3 from "../../../../public/founder3.jpg";
import daniel from "../../../../public/daniel.png";
import christy from "../../../../public/christy.jpg";
import prelumi from "../../../../public/prelumi.jpg";
import tosin from "../../../../public/tosin.jpg";
import faith from "../../../../public/faith.jpg";

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

  const countries = [
    { name: "Ghana", img: ghana, color: "from-yellow-400 to-red-500" },
    { name: "Kenya", img: kenya, color: "from-green-500 to-red-600" },
    { name: "Nigeria", img: nigeria, color: "from-green-600 to-green-700" },
    { name: "Rwanda", img: rwanda, color: "from-blue-500 to-yellow-400" },
    { name: "Sierra Leone", img: sierra, color: "from-blue-400 to-green-500" },
    { name: "Uganda", img: uganda, color: "from-red-500 to-yellow-400" },
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

  const coreValues = [
    { value: "Innovation", icon: Lightbulb, color: "bg-purple-100 text-purple-700" },
    { value: "Excellence", icon: Award, color: "bg-blue-100 text-blue-700" },
    { value: "Dedication", icon: Heart, color: "bg-red-100 text-red-700" },
    { value: "Inclusion", icon: Users, color: "bg-green-100 text-green-700" },
    { value: "Collaboration", icon: Users, color: "bg-orange-100 text-orange-700" },
    { value: "Integrity", icon: Award, color: "bg-indigo-100 text-indigo-700" },
    { value: "Quality", icon: Target, color: "bg-pink-100 text-pink-700" },
    { value: "Partnerships", icon: Globe, color: "bg-teal-100 text-teal-700" },
    { value: "Creativity", icon: Lightbulb, color: "bg-yellow-100 text-yellow-700" },
  ];


  const impactStats = [
    { number: "6+", label: "African Countries", color: "text-green-600" },
    { number: "50,000+", label: "Students Reached", color: "text-blue-600" },
    { number: "2,000+", label: "Educators Trained", color: "text-purple-600" },
    { number: "100+", label: "Partner Schools", color: "text-orange-600" },
  ];

  return (
    <div className="w-full bg-white">
      {/* SEO Meta */}
      <head>
        <title>About Coderina | Transforming Education Across Africa Through STEAM</title>
        <meta
          name="description"
          content="Coderina is Africa's leading non-profit organization empowering students and educators with technology-driven STEAM education across Ghana, Kenya, Nigeria, Rwanda, Sierra Leone, and Uganda. Learn about our mission, vision, services, and dedicated team."
        />
        <meta
          name="keywords"
          content="Coderina, STEAM education Africa, technology education, coding, robotics, non-profit, African education, educational programs, Ghana, Kenya, Nigeria, Rwanda, Uganda, Sierra Leone"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://coderina.org/about" />
      </head>

      {/* Hero Header Section */}
      <header className="w-full bg-gradient-to-br from-[#FFF9F0] via-[#FFF5E5] to-[#FFEFD5]">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20">
          <div
            className="max-w-6xl mx-auto text-center space-y-6 md:space-y-8 xl:mt-24"
            data-aos="fade-up"
          >
            <div className="inline-flex items-center gap-2 border-2 border-[#7A4F03] rounded-full text-[#7A4F03] px-6 py-2.5 text-sm md:text-base font-semibold bg-white shadow-sm">
              <Globe className="w-4 h-4" />
              About Coderina
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Transforming Africa's Future Through{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A4F03] to-[#C17C2B]">
                STEAM Education
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We empower students and educators with innovative, technology-driven solutions in Science, Technology, Engineering, Arts, and Mathematics. Our programs foster creativity, problem-solving, and lifelong learning for Africa's next generation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {impactStats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl px-6 py-4 shadow-sm"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className={`text-3xl md:text-4xl font-black ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <div className="w-2 h-16 bg-gradient-to-b from-[#7A4F03] to-[#C17C2B] rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Our Mission
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {[Plant, Load, Repeat, Safe].map((icon, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#FFF5E5] to-[#FFE9C5] p-7 md:p-8 rounded-3xl min-h-[280px] flex flex-col space-y-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-[#FAD9A0]"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="bg-gradient-to-br from-[#FAD9A0] to-[#F4C47E] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md">
                  <Image
                    src={icon}
                    alt="Mission Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium">
                  {
                    [
                      "Give back and leave a lasting footprint in every community we serve, creating a ripple effect of positive change that extends far beyond the classroom.",
                      "Challenge the limits of what is possible, constantly pushing boundaries to achieve better educational outcomes and unlock untapped potential in every learner.",
                      "Create and nurture a self-sustaining ecosystem where students, educators, and professionals can thrive independently, building long-term capacity.",
                      "Reduce hunger and poverty through education and entrepreneurial skills, building resilient communities that can shape their own prosperous futures.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="w-full bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <div className="w-2 h-16  bg-gradient-to-b from-[#7A4F03] to-[#C17C2B] rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Our Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {[Locate, Smile, Bulb, Tool].map((icon, i) => (
              <div
                key={i}
                className="bg-white p-7 md:p-8 rounded-3xl min-h-[280px] flex flex-col space-y-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className='bg-gradient-to-br from-[#FAD9A0] to-[#F4C47E] w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center shadow-md'>
                  <Image
                    src={icon}
                    alt="Vision Icon"
                    width={28}
                    height={28}
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                </div>
                <p className="text-base md:text-lg leading-relaxed text-gray-800 font-medium">
                  {
                    [
                      "Influence positive changes within the education sector, shaping future generations through innovative learning solutions that address Africa's unique challenges.",
                      "Bring fun into learning, making education engaging, interactive, and enjoyable for students of all ages, backgrounds, and learning styles.",
                      "Empower teachers with 21st-century learning pedagogy, equipping them with cutting-edge tools and methodologies to deliver truly impactful lessons.",
                      "Empower adults with the right learning and entrepreneurship tools, ensuring lifelong learning opportunities and sustainable business ventures for all.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section - New Vibrant Design */}
      <section className="w-full bg-gradient-to-br from-[#7A4F03] via-[#8B5A0F] to-[#6B4003] text-white">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2.5 text-sm md:text-base font-semibold mb-6">
              <Globe className="w-5 h-5" />
              Our Pan-African Presence
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transforming Lives Across{" "}
              <span className="text-[#FAD9A0]">Six Nations</span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              From West to East Africa, we're building a network of innovation, empowering thousands of students and educators with world-class STEAM education.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {countries.map((country, i) => (
              <div
                key={i}
                className="group relative"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="bg-white rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 transform">
                  <div className={`w-full aspect-square bg-gradient-to-br ${country.color} rounded-2xl mb-4 flex items-center justify-center overflow-hidden shadow-lg`}>
                    <Image
                      src={country.img}
                      alt={`Coderina in ${country.name}`}
                      className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-center text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#7A4F03] transition-colors">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="600">
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Together, we're creating a united Africa powered by technology and innovation
            </p>
            <div className="inline-flex items-center gap-3 bg-white text-[#7A4F03] rounded-full px-8 py-4 text-base md:text-lg font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <span>Join Our Pan-African Movement</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full bg-white">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
            <div className="w-2 h-16  bg-gradient-to-b from-[#7A4F03] to-[#C17C2B] rounded-full"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
            {services.map((service, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 group border border-gray-100 hover:-translate-y-2"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="relative h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <Image
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 md:p-7 space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#7A4F03] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SDGs Section */}
      <section className="w-full bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Aligned with UN{" "}
              <span className="text-transparent bg-clip-text  bg-gradient-to-b from-[#7A4F03] to-[#C17C2B]">
                Sustainable Development Goals
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Our work directly contributes to achieving global sustainability targets, creating lasting impact for communities across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {sdgs.map((sdg, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-7 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={sdg.img}
                    alt={sdg.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 text-center">
                  {sdg.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center">
                  {sdg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="w-full max-w-[130rem] mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-16 md:py-20 lg:py-28">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              These principles guide everything we do, from curriculum design to community engagement
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className={`${item.color} rounded-2xl px-6 md:px-8 py-4 md:py-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105`}
                  data-aos="zoom-in"
                  data-aos-delay={i * 80}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-base md:text-lg font-bold">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Team/>
     </div>
  )
}
export default AboutH   