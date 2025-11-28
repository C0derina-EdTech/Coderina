"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import focus from "../../../../public/focus.jpg";
import flier from "../../../../public/couch/couchprogram.jpg";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  Clock,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";
import Head from "next/head";
import { useFormContext } from "../../contexts/FormContext";

const Couch = () => {
  //10 teams came for the 2025 COUCH Competition
  const images = [
    "/couch/generalpic1.jpg", // this is general pic of participants , coderina teams and some organizers
    "/couch/generalpic2.jpg",  // this is general pic of participants , coderina teams and some organizers
    "/couch/generalpic3.jpg",  // this is general pic of participants , coderina teams and some organizers
    "/couch/ashafalandan.jpg", //Acting director, skills development and entrepreneurship (National universities commission)
    "/couch/teamimsu.jpg", // Team IMSU won the Grand winner of the 2025 COUCH competition
    "/couch/teamneuronaut.jpg", // 1st runner up Team Neuronaut from Nile university
    "/couch/teamwaste2light.jpg",// 2nd runner up Team Waste2light from federal university of technology minna
    "/couch/teamabsufreshairinnovators.jpg", // winner for peoples choice award team ABSU fresh air innovators from Adamawa state university
    "/couch/teamscraplink.jpg", // Ist runner up for peoples choice award, team scrap link from lagos state university
    "/couch/teamcircle.jpg", // 2nd runner up for peoples choice award, team circle from Federal university of technology Akura (FUTA)
    "/couch/drtopekaladefasua.jpg",// DR.Tpe kolade fasua (Special Adviser to the president on Economic Affairs). Speaking on 'Empowering youth innovation: A policy framework for sustainable Economic Growth'
    "/couch/drtopekaladefasua2.jpg",
    "/couch/profsaadatu.jpg", // prof. Sa'adatu Hassan Liman (vice chancellor Nasarawa state university). Speaking on 'Circular Economy and Technology: Empowering university innovation for sustainable National Transformation'
    "/couch/drkingsley.jpg",// Dr kingsley Tochukwu Udeh (minister for innovation, science and Technology, Nigeria.) giving a keynote speech on 'empowering youth innovation for sustainable growth'
    "/couch/drkingsley2.jpg",
    "/couch/teamimsu2.jpg", // a picture of someone holding team imsu holding the team imsu tag
    "/couch/christy.jpg", // A picture of the Christiana Anthony(COUCH project lead) at the COUCH Registeration umbrella cordinating
    "/couch/teampupindustries.jpg", //Team pup industries from Ahmadu Bello University holding COUCH certificate of participation
    "/couch/teamabsufreshairinnovators2.jpg", //Team Absu fresh air innovators from Adamawa state university holding COUCH certificate of participation
    "/couch/teamneuronaut2.jpg",//Team Neuronaut from Nile university holding COUCH certificate of participation
    "/couch/teamwaste2light2.jpg",// Team Waste2light from federal university of technology minna holding COUCH certificate of participation
    "/couch/engrfummi.jpg",// award of honor presented to engr Funmi Jemisenia as one for the mentors for COUCH 2025 Competition
    "/couch/engrolawale.jpg",// award of honor presented to engr Olawale as one for the mentors for COUCH 2025 Competition
    "/couch/engrchinyereigbkwe.jpg",// award of honor presented to engr chinyere Igbkwe as one for the mentors for COUCH 2025 Competition
  ];

  const presentations = [
    //all teams presenting their project, add pictures of all teams
    "/couch/teamimsu.jpg",
  ];
  const {
    contactName,
    setContactName,
    contactEmail,
    setContactEmail,
    contactWebsite,
    setContactWebsite,
    contactPhone,
    setContactPhone,
    contactCountry,
    setContactCountry,
    contactMessage,
    setContactMessage,
    contactSubmitting,
    contactError,
    contactSuccess,
    sendContact,
  } = useFormContext();

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/company/coderina-edtech-foundation",
    },
    {
      icon: <Facebook size={20} />,
      url: "https://web.facebook.com/coderinaedu",
    },
    {
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/coderinaedu/",
    },
    {
      icon: <Youtube size={20} />,
      url: "https://www.youtube.com/@coderina5977",
    },
    { icon: <Twitter size={20} />, url: "https://x.com/coderina" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    sendContact();
  };

  if (contactSuccess) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle2 className="w-16 h-16 text-white" strokeWidth={2.5} />
            </div>
          </div>

          <div className="mb-6">
            <Sparkles className="w-8 h-8 text-yellow-500 mx-auto mb-4 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Message Sent Successfully!
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            Thank you for reaching out to{" "}
            <span className="font-semibold text-black">
              Coderina Education and Technology Foundation
            </span>
            . We&apos;ve received your message and our team will respond within{" "}
            <span className="font-semibold text-black">24 hours</span>.
          </p>

          <button
            onClick={() => {
              setContactName("");
              setContactEmail("");
              setContactWebsite("");
              setContactPhone("");
              setContactCountry("");
              setContactMessage("");
            }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Contact Coderina Education and Technology Foundation</title>
        <meta
          name="description"
          content="Get in touch with Coderina Education and Technology Foundation. Reach us at our Abuja or Lagos offices, send us an email, or connect via LinkedIn, Facebook, Instagram, YouTube, or X (Twitter)."
        />
        <meta
          name="keywords"
          content="Coderina, Coderina Education, Coderina Foundation, contact Coderina, robotics training, STEM education, coding in Nigeria, FIRST LEGO League, education technology Nigeria"
        />
      </Head>

      <div className="min-h-screen bg-gray-50 font-SpaceGrotesk">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <Image
            src={focus}
            alt="Coderina Focus Background"
            fill
            priority
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative max-w-[130rem] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 2xl:py-64 2xl:h-[700px] text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
              Get in <br />
              <span className="text-[#FFD700]">Touch with Coderina</span>
            </h1>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFF9F0] text-black rounded-full font-semibold hover:bg-[#8B5A04] hover:text-white transition-all duration-300 text-sm sm:text-base"
            >
              ← BACK TO HOME
            </Link>
          </div>

          {/* Scrolling Services Banner */}
          <div className="relative bg-[#FFF9F0] py-3 sm:py-4 overflow-hidden">
            <div className="flex items-center gap-4 sm:gap-8 animate-scroll whitespace-nowrap">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-8">
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    Teacher Training Programs
                  </span>
                  <span className="text-black text-xl">✦</span>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    Programming
                  </span>
                  <span className="text-black text-xl">✦</span>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    3D Printing Workshops
                  </span>
                  <span className="text-black text-xl">✦</span>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    Coding & Robotics Training
                  </span>
                  <span className="text-black text-xl">✦</span>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    FIRST Tech Challenge (FTC)
                  </span>
                  <span className="text-black text-xl">✦</span>
                  <span className="text-black font-semibold text-xs sm:text-sm md:text-base">
                    Innovative Ideas
                  </span>
                  <span className="text-black text-xl">✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Have any questions?
                </h2>
                <p className="text-5xl sm:text-6xl font-bold text-black">
                  Get in touch!
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                Coderina Education and Technology Foundation is dedicated to
                empowering African youth through STEM education, robotics, and
                digital skills. Reach out today and let&apos;s collaborate to build
                the future.
              </p>

              <div className="space-y-6">
                {/* Address 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    4 Ngozi Okonjo Iweala Way
                    <br />
                    Utako District, Abuja, Nigeria
                  </p>
                </div>

                {/* Address 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    4 Oye Balogun St, Lekki Peninsula II,
                    <br />
                    Lekki, Lagos, Nigeria
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href="tel:+2349093307353"
                    className="text-gray-700 hover:text-black font-medium"
                  >
                    +234 909 330 7353
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <a
                    href="mailto:hello@coderina.org"
                    className="text-gray-700 hover:text-black font-medium"
                  >
                    hello@coderina.org
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    Mon - Fri: 10:00 - 17:00
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-6">
                {socialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-100 rounded-full hover:bg-black hover:text-white transition-all"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1a1a] rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Form
              </h3>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
                />

                <input
                  type="text"
                  placeholder="Country"
                  value={contactCountry}
                  onChange={(e) => setContactCountry(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-5 py-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all"
                />

                <textarea
                  rows={5}
                  placeholder="Write Your Message Here"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                  className="w-full px-5 py-4 bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all resize-none"
                />

                {contactError && (
                  <p className="text-red-500 text-sm">{contactError}</p>
                )}

                <button
                  type="submit"
                  disabled={contactSubmitting}
                  className={`w-full py-4 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-3 ${
                    contactSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#FFF9F0] text-black hover:bg-[#FFD700]"
                  }`}
                >
                  {contactSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    "Submit Now"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="px-2">
          <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9626384826247!2d7.445861!3d9.072264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a5c3c3c3c3c%3A0x0!2s4%20Ngozi%20Okonjo%20Iweala%20Way%2C%20Utako%2C%20Abuja!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) brightness(90%)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coderina Foundation Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Couch;
