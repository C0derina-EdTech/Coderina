import React from 'react'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "../CustomButton";
import scopeImg1 from "../../../public/roydek.jpg";
import scopeImg2 from "../../../public/kiki.jpg";
const ProjectC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 pt-8 md:pt-12">
      {/* Hero Section */}
      <section className="bg-[#FFF9F0] font-Geist py-12 px-4 md:px-8 lg:px-16 rounded-b-[24px]  ">
        <div className="max-w-5xl mx-auto text-center space-y-6 ">
          <button className="border-[#7A4F03] border rounded-full text-[#7A4F03] px-4 py-2 text-sm">
            Coderina Project Fair Challenge
          </button>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            The Coderina Project Fair is a movement and shift from academic
            theory to practical impact.
          </h1>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            This fair transforms dissertations and research into real-world
            solutions, fostering innovation, entrepreneurship, and
            problem-solving. Participants showcase projects, compete creatively,
            and pitch their ideas for a chance to win amazing prizes.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            A 48-hour innovation sprint bringing together Nigeria`s brightest
            tertiary students to solve indigenous problems using tech and modern
            business.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-16 px-4 md:px-8 lg:px-0">
        {[
          {
            title: "🌍 Purpose",
            desc: "Promote creativity, teamwork, and real-world problem-solving among students by encouraging them to create impactful solutions for local challenges.",
          },
          {
            title: "👨‍💻 Who Can Join?",
            desc: "Tertiary students across Nigeria from various disciplines—tech, business, design—form diverse teams to tackle real problems together.",
          },
          {
            title: "⏱️ Duration",
            desc: "The Project Fair is a 48-hour sprint—packed with ideation, prototyping, and presenting innovative ideas.",
          },
          {
            title: "🏆 Outcome",
            desc: "Winning ideas receive mentorship, funding, and potential incubation. Every participant walks away with skills, confidence, and new connections.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start items-start text-left"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">
              {item.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}

          <div className="text-center mt-10">
        <CustomButton href="/form" label="Start a Team" />
      </div>
      </section>

    

      {/* Projects Showcase */}
      <section className="w-full py-16">
        <div className="px-4 md:px-8 lg:px-16">
          <h4 className="font-bold text-2xl md:text-3xl mb-12">Our Projects</h4>

          <div className="flex flex-col md:flex-row gap-8 mb-12 items-center">
            <div className="w-full md:w-1/2">
              <Image
                src={scopeImg1}
                alt="Roydek Academy Project"
                className="rounded-2xl object-cover w-full h-[300px]"
              />
            </div>
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Coderina Donates STEAM and Robotics Kits to Roy-Dek Academy in
                Makoko
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Coderina visited Roy-Dek Academy in the heart of Makoko, Lagos,
                to donate much-needed STEAM and Robotics kits. Roy-Dek Academy
                empowers children from underserved communities, and this
                initiative aims to inspire and equip them with tools to thrive
                in tech.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold">
                Coderina`s STEAM and Robotics Initiative for Girls at Kiyi
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                Coderina empowers young girls in Kiyi with STEAM and Robotics
                education—preventing early marriages and promoting confidence
                through a mix of technical and academic learning.
              </p>
              <a
                href="https://www.dropbox.com/scl/fo/u6coqfo7xnz1ldriz42lt/AL0nQYTX_iAnyzlWvOxPBM8?rlkey=drosn8gdytiwir5e67ikjhjwk&st=ms6iuaei&dl=0"
                className="text-sm text-indigo-600 flex items-center gap-2 hover:underline"
              >
                See More <FaArrowRightLong />
                     
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src={scopeImg2}
                alt="Kiyi Girls Project"
                className="rounded-2xl object-cover w-full h-[300px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectC