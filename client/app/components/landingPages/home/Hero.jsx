'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from "./Nav";
import HeroContent from "./HeroContent";
import Banner from "./Banner";
export default function Hero() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);
  return (
    <section
      className="relative w-full min-h-[560px] md:min-h-[450px] lg:min-h-[500px] 2xl:min-h-[800px] overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-110"
          src="https://res.cloudinary.com/dpfbpdohh/video/upload/v1769189691/introduction_fuqoz5.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        {/* Dark overlay (underlay) */}
        <div className="absolute inset-0 bg-black/80 pointer-events-none"></div>
      </div>
        <Navbar/>
      {/* Geometric Transparent Shapes Overlay (angles stay untouched) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Right Triangle */}
        <div
          className="absolute top-0 right-0 w-[45%] sm:w-[40%] lg:w-[35%] xl:w-[30%] h-full opacity-20"
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <div className="absolute inset-0 bg-linear-to-br from-cyan-400/30 to-transparent backdrop-blur-[2px]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 50%)' }}></div>
        </div>
        {/* Center Right Triangle */}
        <div
          className="absolute top-1/4 right-[15%] sm:right-[20%] w-[30%] sm:w-[25%] lg:w-[20%] h-[60%] opacity-25"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <div className="absolute inset-0 bg-linear-to-tl from-blue-300/40 to-transparent backdrop-blur-[1px]" style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%)' }}></div>
        </div>
        {/* Left Triangle */}
        <div
          className="absolute top-0 left-0 w-[40%] sm:w-[35%] lg:w-[30%] h-full opacity-30"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-slate-900/60 to-transparent backdrop-blur-[1px]" style={{ clipPath: 'polygon(0 0, 50% 50%, 0 100%)' }}></div>
        </div>
      </div>

      
     <HeroContent/>
    </section>
  );
}
