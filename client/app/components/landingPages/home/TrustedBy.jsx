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
     
      <section
        className="py-8 px-4 sm:px-4 md:px-8 lg:px-16 bg-white"
        aria-labelledby="trusted-heading"
      >
        <div className="max-w-400 mx-auto text-center">
          <h2
            id="trusted-heading"
            className="text-lg md:text-2xl font-bold text-[#1a3a52] mb-6"
          >
            Trusted by leading organizations across Africa
          </h2>
          
          {/* Tailwind Marquee */}
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap gap-8">
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
                      className="object-contain mx-auto hover:grayscale-0 transition duration-300"
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
