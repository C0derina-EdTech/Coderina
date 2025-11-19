"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

// Logos
import sap from "../../../../public/Sap.png";
import first from "../../../../public/first.png";
import cater from "../../../../public/Caterpillar.png";
import dow from "../../../../public/Dow.png";
import fme from "../../../../public/FME.png";
import lego from "../../../../public/Lego.png";
import legoi from "../../../../public/lego-icon.png";
import ford from "../../../../public/Ford.png";
import nln from "../../../../public/NLN.png";
import nitda from "../../../../public/NITDA.png";
import uol from "../../../../public/UOL.png";

export default function TrustedBy() {
  const logos = [
    { src: sap, alt: "SAP", link: "https://www.sap.com" },
    { src: first, alt: "FIRST Robotics", link: "https://www.firstinspires.org" },
    { src: cater, alt: "Caterpillar Foundation", link: "https://www.caterpillar.com" },
    { src: dow, alt: "Dow Chemical Company", link: "https://www.dow.com" },
    { src: fme, alt: "Federal Ministry of Education Nigeria", link: "#" },
    { src: lego, alt: "LEGO Education", link: "https://education.lego.com" },
    { src: legoi, alt: "LEGO Foundation", link: "https://www.legofoundation.com" },
    { src: ford, alt: "Ford Motor Company", link: "https://www.ford.com" },
    { src: nln, alt: "National Library of Nigeria", link: "#" },
    { src: nitda, alt: "NITDA", link: "https://nitda.gov.ng" },
    { src: uol, alt: "University of Lagos", link: "https://unilag.edu.ng" },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Coderina Education and Technology Foundation",
    url: "https://coderina.org",
    description:
      "Organizations that partner with and trust Coderina Education and Technology Foundation to advance STEM, Robotics, and 3D learning in Africa.",
    sponsor: logos.map((logo) => ({
      "@type": "Organization",
      name: logo.alt,
      url: logo.link,
    })),
  };

  return (
    <>
      {/* SEO Meta */}
      <Head>
        <title>Our Partners | Coderina Education and Technology Foundation</title>
        <meta
          name="description"
          content="Global and local organizations that trust Coderina Foundation — including LEGO Education, FIRST Robotics, SAP, Dow, and Ford — supporting innovation, STEM, and 3D learning across Africa."
        />
        <meta
          name="keywords"
          content="Coderina partners, LEGO Education, FIRST Robotics, SAP, STEM Africa, Coderina Foundation, 3D printing education, robotics partnership"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      {/* Trusted By Section */}
      <section
        className="py-20 px-4 sm:px-6 md:px-12 lg:px-20 bg-white"
        aria-labelledby="trusted-heading"
      >
        <div className="max-w-[110rem] mx-auto text-center">
          <h2
            id="trusted-heading"
            className="text-4xl md:text-5xl font-bold text-[#1a3a52] mb-6"
          >
            Trusted by Global Leaders in Innovation
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            Coderina collaborates with world-renowned organizations and educational institutions to empower Africa’s next generation of innovators through robotics, coding, and STEM education.
          </p>

          {/* Tailwind Marquee */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap gap-12">
              {logos.concat(logos).map((logo, index) => (
                <div key={index} className="inline-flex items-center justify-center">
                  <Link
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${logo.alt}`}
                  >
                  <div className="relative h-24 w-24  2xl:w-32">
                     <Image
                      src={logo.src}
                      alt={`${logo.alt} logo`}
                      fill
                      className="object-contain mx-auto grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
}
