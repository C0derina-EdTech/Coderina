'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import Link from "next/link";
const topCards = [
  {
    id: 1,
    title: 'Get Started',
    description:
      'Take the next step and review key details for starting a FIRST LEGO League program.',
    cta: "Let's Go",
    link: '/coderina-first-lego-league',
    image: '/firstlegoleague.png',
    alt: 'Students getting started with FIRST LEGO League robotics program',
    delay: 0,
  },
  {
    id: 2,
    title: 'Get Started',
    description:
      'Understand the associated kits, and materials required to register for the AI FOR GOOD Competition.',
    cta: 'Register Teams',
    link: '/coderina-ai-for-good-application',
    image: '/aiforgood.jpg',
    alt: 'AI FOR GOOD competition materials',
    delay: 100,
  },
  {
    id: 3,
    title: 'Learn About Our Season',
    description:
      'Each season introduces a global challenge designed to build creativity and problem-solving skills.',
    cta: 'Get Season Details',
    link: '/programs',
    image: '/unearthed.png',
    alt: 'FIRST LEGO League UNEARTHED season challenge theme',
    delay: 200,
  },
];

export default function Details() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <div className="w-full bg-gray-50">
      {/* Top Section - Three Cards */}
      <section className="w-full py-16 md:py-20 bg-white">
        <div className="max-w-[100rem] mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-12">
            {topCards.map((card) => (
              <article
                key={card.id}
                className="flex flex-col"
                data-aos="fade-up"
                data-aos-delay={card.delay}
              >
                <div className="relative w-full aspect-[4/3] mb-6 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    title={card.title}
                    fill
                    priority={card.id === 1}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <h2 className="text-base md:text-lg lg:text-xl 2xl:text-2xl  font-bold text-gray-900 mb-2">
                  {card.title}
                </h2>

                <p className="text-sm md:text-base text-gray-600 mb-4 flex-grow">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  className="inline-flex text-sm items-center text-teal-800 font-semibold hover:text-blue-700 transition-colors group"
                >
                  {card.cta}
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300 ease-out"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section - New Season Challenge championship competition */}
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
              data-aos="fade-right"
            >
              <Image
                src="/championship.jpeg"
                alt="FIRST LEGO League UNEARTHED season challenge artwork"
                title="FIRST LEGO League UNEARTHED Season"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Content */}
           {/* Content */}
<div data-aos="fade-left" data-aos-delay="100">
  <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4">
    National Robotics Championship
  </p>

  <h1 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-gray-900 mb-6">
    FIRST AGE℠ National Robotics Championship 2026
  </h1>

  <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
    The FIRST® LEGO® League National Robotics Championship is coming to Abuja.
    From <strong>5 – 7 February 2026</strong>, teams from across the country will
    compete in the UNEARTHED™ season challenge, showcasing innovation, teamwork,
    and real-world problem-solving through robotics.
    <br /><br />
    This championship brings together young innovators to decode the past,
    build the future, and celebrate excellence in STEM as part of the
    <strong> FIRST AGE℠ season</strong>.
  </p>

  <Link href="/events" className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
    View Championship Details
  </Link>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}
