import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiwesCoworkingSection() {
  return (
    <>
      {/* SIWES & Internship Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#FAD9A0]">
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#7A4F03] leading-tight">
                SIWES & Internship Placements
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed text-[#5a3902]">
                We partner with leading tech companies to provide real-world
                experience through our SIWES and internship programs. Get
                hands-on experience, build your portfolio, and kickstart your
                tech career.
              </p>
              <ul className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#7A4F03] text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#5a3902]">
                    Industry-standard training and mentorship
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#7A4F03] text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#5a3902]">
                    Work on real projects with experienced developers
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#7A4F03] text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#5a3902]">
                    Certificate of completion and recommendation letters
                  </span>
                </li>
                <li className="flex items-start gap-3 md:gap-4">
                  <span className="text-[#7A4F03] text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0 font-bold">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-[#5a3902]">
                    Potential for full-time employment opportunities
                  </span>
                </li>
              </ul>
              <Link
                href="/apply-internship"
                className="inline-block bg-[#7A4F03] text-[#FAD9A0] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold hover:bg-[#5a3902] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Apply for Internship
              </Link>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] 2xl:h-[48rem]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop&q=90"
                alt="Young African tech professionals collaborating on internship project at Coderina"
                fill
                className="rounded-2xl md:rounded-3xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Co-working Space */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem] xl:h-[40rem] 2xl:h-[48rem] order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop&q=90"
                alt="Modern co-working space at Coderina with collaborative environment"
                fill
                className="rounded-2xl md:rounded-3xl object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
            </div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#7A4F03] leading-tight">
                Our Co-working Space
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-700 leading-relaxed">
                Experience a creative and productive environment designed for
                collaboration and innovation. Our state-of-the-art co-working
                space is equipped with everything you need to succeed.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#FAD9A0] rounded-xl flex items-center justify-center text-[#7A4F03] flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      ⚡
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1">
                      High-Speed Internet
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
                      Reliable connectivity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#FAD9A0] rounded-xl flex items-center justify-center text-[#7A4F03] flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      🖥️
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1">
                      Modern Equipment
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
                      Latest tech tools
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#FAD9A0] rounded-xl flex items-center justify-center text-[#7A4F03] flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      ☕
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1">
                      Refreshments
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
                      Coffee & snacks
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4 bg-white p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 bg-[#FAD9A0] rounded-xl flex items-center justify-center text-[#7A4F03] flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      🤝
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-1">
                      Community
                    </h4>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600">
                      Network & collaborate
                    </p>
                  </div>
                </div>
              </div>
              <Link
                href="/book-tour"
                className="inline-block bg-[#7A4F03] text-[#FAD9A0] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 py-3 sm:py-4 md:py-5 lg:py-6 rounded-xl md:rounded-2xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold hover:bg-[#5a3902] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
