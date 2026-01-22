"use client";
import React from "react";
import {
  Cpu,
  Printer,
  Wrench,
  Users,
  Award,
  Target,
  Microscope,
  Cog,
  Zap,
  Box,
  Layers,
  ChevronRight,
  BookOpen,
  Lightbulb,
  Settings,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Lab() {
  const [activeTab, setActiveTab] = React.useState("all");

  const images = [
    "/microscope4.jpg",
    "/microscope5.jpg",
    "/microscope6.jpg",
    "/print1.jpg",
    "/anatomy.jpg",
    "/print6.jpg",
    "/robotarm.jpg",
    "/microscope2.jpg",
    "/microscope3.jpg",
    "/robotarm4.jpg",
    "/skull.jpg",
    "/skull2.jpg",
    "/skull3.jpg",
    "/skull4.jpg",
    "/skull5.jpg",
    "/skull6.jpg",
    "/skull7.jpg",
  ];

  const filteredImages =
    activeTab === "all"
      ? images
      : activeTab === "3dprints"
        ? images.filter(
            (img) =>
              img.includes("skull") ||
              img.includes("print") ||
              img.includes("anatomy")
          )
        : images.filter(
            (img) => img.includes("microscope") || img.includes("robotarm")
          );

  return (
    <div className="min-h-screen bg-white">
     
      {/* Lab Features */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Why Choose <span className="text-[#e29818]">Our Lab</span>
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-[#e29818] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Advanced Equipment
                    </h3>
                    <p className="text-gray-400">
                      Professional-grade 3D printers, robotic arms, and
                      automation tools for real-world learning experiences.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#e29818] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Expert Mentorship
                    </h3>
                    <p className="text-gray-400">
                      Learn from experienced engineers and technicians
                      passionate about nurturing the next generation of
                      innovators.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#e29818] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Non-Profit Mission
                    </h3>
                    <p className="text-gray-400">
                      Accessible education for all. We're committed to breaking
                      barriers and making technology education affordable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#e29818] w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Hands-On Learning
                    </h3>
                    <p className="text-gray-400">
                      Project-based curriculum where students build, test, and
                      iterate real solutions to real problems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/print6.jpg"
                  alt="3D Print Sample"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/robotarm.jpg"
                  alt="Robotic Arm"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/skull2.jpg"
                  alt="Anatomical Print"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden mt-8">
                <Image
                  src="/microscope4.jpg"
                  alt="Lab Equipment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Lab <span className="text-[#e29818]">Gallery</span>
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Explore our 3D prints, robotics projects, and lab equipment
            </p>

            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === "all"
                    ? "bg-[#e29818] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveTab("3dprints")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === "3dprints"
                    ? "bg-[#e29818] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                3D Prints
              </button>
              <button
                onClick={() => setActiveTab("robotics")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === "robotics"
                    ? "bg-[#e29818] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                Robotics
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition"
              >
                <Image
                  src={image}
                  alt={`Lab project ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition">
                    <Zap className="w-8 h-8" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#e29818] text-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
              <div className="text-orange-100 text-lg">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">30+</div>
              <div className="text-orange-100 text-lg">Expert Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">200+</div>
              <div className="text-orange-100 text-lg">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold mb-2">98%</div>
              <div className="text-orange-100 text-lg">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#e29818]">Programs</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Structured learning paths designed to build practical skills and
              inspire innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Box className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">
                3D Printing Fundamentals
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Master the basics of additive manufacturing, from design to
                print. Learn CAD modeling, slicing software, and printer
                operation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  CAD Design & Modeling
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Printer Setup & Calibration
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Material Selection
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Robotics Engineering</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Build and program robots from scratch. Explore sensors,
                actuators, control systems, and autonomous navigation.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Robot Construction
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Programming & Logic
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Sensor Integration
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Automation Systems</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Design intelligent automation solutions. Learn PLC programming,
                industrial controls, and system integration.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Control Systems Design
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Process Automation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  IoT Integration
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Microscope className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Advanced Prototyping</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Turn ideas into reality with rapid prototyping techniques.
                Master iterative design and testing methodologies.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Rapid Prototyping
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Testing & Iteration
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Production Scaling
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Maker Workshops</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hands-on sessions for all skill levels. Build practical projects
                while learning electronics, mechanics, and coding.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Weekend Projects
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Tool Training
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Collaborative Building
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>

            <article className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-100">
              <div className="bg-[#e29818] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Competition Prep</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Prepare for robotics competitions and hackathons. Team-based
                projects with mentorship from industry professionals.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Team Formation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Strategy Development
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <ChevronRight className="w-4 h-4 text-[#e29818]" />
                  Competition Support
                </li>
              </ul>
              <button className="text-[#e29818] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </article>
          </div>
        </div>
      </section>
     
    </div>
  );
}
