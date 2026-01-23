"use client";
import React, { useEffect } from "react";
import AOS from "aos";

const Clip = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="w-full bg-black text-white py-10 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-400 mx-auto">
        {/* Header */}
        <header className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-xl md:text-2xl font-bold text-teal-600 mb-2">
            Success Stories
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Hear from our alumni about their journey at Coderina
          </p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Video */}
          <div
            className="relative rounded-lg overflow-hidden lg:px-16"
            data-aos="fade-right"
          >
            <div className="relative aspect-video bg-black border-4 rounded-2xl border-teal-500/30">
              <video
                className="w-full h-full object-cover rounded-2xl"
                src="/testimonies/israel.mp4"
                poster="/logo.png"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-4" data-aos="fade-left">
            <h3 className="text-lg md:text-xl font-semibold">
              From FLL Participant to Professional Creative Director/Graphics Designer
            </h3>

            <blockquote className="border-l-2 border-teal-500 pl-4">
              <p className="text-gray-300 text-sm md:text-base italic leading-relaxed">
                “During the championship I discovered new experiences as there were to the robotics aspect and robotics field as a whole and It opened my perspective as to the idea of robotics and its everyday life.”
              </p>
              <footer className="mt-3">
                <span className="block font-medium text-white">
                  Akor Israel
                </span>
                <span className="block text-teal-500 text-xs">
                  Graphics Designer/Creative Director Alumni
                </span>
              </footer>
            </blockquote>

            {/* <a
              href="#join"
              className="inline-block text-sm font-medium text-black bg-teal-500 hover:bg-teal-400 px-5 py-2 rounded-md transition"
            >
              Start Your Journey
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clip;
