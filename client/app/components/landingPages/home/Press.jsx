'use client';

import { useEffect } from 'react';
import AOS from "aos";
import Link from "next/link";
export default function Press() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });
    }
  }, []);

  const pressItems = [
    {
      publication: 'TechBuild.Africa',
      date: 'November 13, 2025',
      title: 'Top 10 Finalists to Unveil Groundbreaking Student Innovations at COUCH 2025Grand Finale',
      link:"https://techbuild.africa/10-finalists-student-innovation-couch-2025-finale/",
      delay: 0
    },
    {
      publication: 'PUNCH.ng',
      date: 'November 12, 2025',
      title: 'Top 10 student innovators set for COUCH 2025 finale',
      link:"https://punchng.com/top-10-student-innovators-set-for-couch-2025-finale/",
      delay: 100
    },
    {
      publication: 'Independent.ng',
      date: 'November 11, 2025',
      title: 'Top 10 Finalists set to showcase Groundbreaking Student innovations At COUCH 2025 Ground finale',
      link:"https://independent.ng/top-10-finalists-set-to-showcase-groundbreaking-student-innovations-at-couch-2025-grand-finale/",
      delay: 200
    },
    {
      publication: 'vanguard',
      date: 'November 12, 2025',
      title: "Coderina university challenge produces 10 student led innovator teams",
      link:" https://www.vanguardngr.com/2025/11/coderina-university-challenge-produces-10-student-led-innovator-teams/",
      delay: 300
    }
  ];

  return (
    <section className="w-full bg-linear-to-br from-teal-700 via-teal-600 to-cyan-600 py-20 px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-400 mx-auto">
        <h2 
          className="text-white text-3xl md:text-4xl font-light mb-16"
          data-aos="fade-up"
        >
          Coderina in the press.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pressItems.map((item, index) => (
            <Link href={item.link} key={index}>
            <div
              className="bg-transparent"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="mb-3">
                <h3 className="text-white text-lg font-semibold mb-1">
                  {item.publication}
                </h3>
                <p className="text-teal-200 text-sm">
                  {item.date}
                </p>
              </div>
              <p className="text-white text-base leading-relaxed">
                {item.title}
              </p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}