"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ArrowRight, Calendar, Play } from "lucide-react";
import Image from "next/image";
const MENU_CONTENT = {
  programs: {
    title: "Our Programs",
    sections: [
      {
        heading: "Learning Platforms",
        links: [
          {
            title: "e-STEAM Coderina",
            desc: "Complete learning management system",
            href: "https://esteamcoderina.org",
          },
          {
            title: "Coding Environment",
            desc: "Browser-based IDE for students",
            href: "/programs",
          },
          {
            title: "Checkmate",
            desc: "Chess game competitions",
            href: "/programs",
          },
          {
            title: "COUCH",
            desc: "Coderina University Challenge",
            href: "/coderina-university-challenge",
          },
        ],
      },
      {
        heading: "Physical Products",
        links: [
          {
            title: "Robotics Kits",
            desc: "Arduino and Raspberry Pi based",
            href: "/programs",
          },
          {
            title: "Electronics Bundles",
            desc: "Components for prototyping",
            href: "/programs",
          },
          {
            title: "3D Printing Solutions",
            desc: "Design and fabrication tools",
            href: "/robotics-lab",
          },
          {
            title: "SIWES",
            desc: "Students Industrial Work Experience Scheme",
            href: "/coderina-siwes-application",
          },
        ],
      },
    ],

    feature: {
      image: "/checkmate.jpg",
    },
  },
  solutions: {
    title: "Solutions",
    sections: [
      {
        heading: "By Institution",
        links: [
          {
            title: "Primary Schools",
            desc: "Foundation STEM curriculum",
            href: "#",
          },
          {
            title: "Secondary Schools",
            desc: "Advanced robotics & coding",
            href: "#",
          },
          {
            title: "Universities",
            desc: "Research and innovation labs",
            href: "#",
          },
          {
            title: "Training Centers",
            desc: "Professional development",
            href: "#",
          },
        ],
      },
      {
        heading: "By Stakeholder",
        links: [
          {
            title: "Parents & Guardians",
            desc: "Home learning resources",
            href: "#",
          },
          {
            title: "Governments",
            desc: "National digital programs",
            href: "#",
          },
          { title: "NGOs", desc: "Community empowerment", href: "#" },
          {
            title: "Corporations",
            desc: "CSR and workforce development",
            href: "#",
          },
        ],
      },
    ],
    featured: {
      title: "School Deployment Success",
      desc: "Learn how 200+ schools across Africa deployed our solutions with 95% satisfaction rate",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=250&fit=crop",
      cta: "View Case Study",
    },
  },
  events: {
    title: "Events & Community",
    sections: [
      {
        heading: "Upcoming Events",
        links: [
          {
            title: "STEM Innovation Summit 2026",
            desc: "Lagos • March 15-17",
            href: "/events",
            badge: "Featured",
          },
          {
            title: "Robotics Championship",
            desc: "Nairobi • April 22",
            href: "/events",
          },
          {
            title: "Teacher Training Workshop",
            desc: "Virtual • Feb 10",
            href: "/events",
          },
          {
            title: "Hackathon Series",
            desc: "Multi-city • Ongoing",
            href: "/events",
          },
        ],
      },
      {
        heading: "Community",
        links: [
          {
            title: "Student Showcase",
            desc: "Share your projects",
            href: "/events",
          },
          {
            title: "Webinars",
            desc: "Weekly learning sessions",
            href: "/events",
          },
          {
            title: "Partner Events",
            desc: "Collaborative initiatives",
            href: "/events",
          },
        ],
      },
    ],
    featured: {
      title: "National Robotics Championship 2026",
      desc: "Join 5,000+ students, educators, and innovators at Africa's largest STEM event",
      image: "/championship.jpeg",
      cta: "Register Now",
      hasPlayIcon: true,
    },
  },
  industries: {
    title: "Industries We Serve",
    sections: [
      {
        heading: "Education Sector",
        links: [
          {
            title: "K-12 Education",
            desc: "Transform classroom learning",
            href: "#",
          },
          {
            title: "Higher Education",
            desc: "Research and development",
            href: "#",
          },
          {
            title: "EdTech Partners",
            desc: "Integration solutions",
            href: "#",
          },
          {
            title: "Online Learning",
            desc: "Remote education tools",
            href: "#",
          },
        ],
      },
      {
        heading: "Industry Applications",
        links: [
          { title: "Manufacturing", desc: "Automation training", href: "#" },
          {
            title: "Agriculture Tech",
            desc: "Smart farming education",
            href: "#",
          },
          { title: "Healthcare", desc: "Medical device training", href: "#" },
          {
            title: "Renewable Energy",
            desc: "Sustainable tech programs",
            href: "#",
          },
        ],
      },
    ],
    feature: {
      image: "/prostheticarm.jpeg",
    },
  },
  company: {
    title: "Company",
    sections: [
      {
        heading: "About Us",
        links: [
          {
            title: "Our Story",
            desc: "How we started and where we're going",
            href: "/about",
          },
          {
            title: "Mission & Vision",
            desc: "Empowering Africa through STEM",
            href: "/about",
          },
          {
            title: "Leadership Team",
            desc: "Meet the people behind Coderina",
            href: "/about",
          },
          {
            title: "Awards & Recognition",
            desc: "Industry accolades",
            href: "/about",
          },
        ],
      },
      {
        heading: "Work With Us",
        links: [
          { title: "Careers", desc: "Join our growing team", href: "/about" },
          {
            title: "Ethics & Values",
            desc: "Our principles and commitments",
            href: "/about",
          },
          {
            title: "Partners",
            desc: "Strategic collaborations",
            href: "/about",
          },
          {
            title: "Press & Media",
            desc: "News and media resources",
            href: "/events",
          },
        ],
      },
    ],
    // 
     feature: {
      image: "/championship.jpeg",
    },
  },
  resources: {
    title: "Resources",
    sections: [
      {
        heading: "Learning Materials",
        links: [
          {
            title: "Documentation",
            desc: "Complete platform guides",
            href: "#",
          },
          {
            title: "Video Tutorials",
            desc: "Step-by-step walkthroughs",
            href: "#",
          },
          {
            title: "Curriculum Library",
            desc: "Lesson plans and activities",
            href: "#",
          },
          {
            title: "Project Gallery",
            desc: "Student work showcase",
            href: "#",
          },
        ],
      },
      {
        heading: "Support",
        links: [
          {
            title: "Help Center",
            desc: "FAQs and troubleshooting",
            href: "/contact",
          },
          {
            title: "Technical Support",
            desc: "Get expert assistance",
            href: "/contact",
          },
          {
            title: "Community Forum",
            desc: "Connect with other users",
            href: "/contact",
          },
          {
            title: "API Documentation",
            desc: "For developers",
            href: "/contact",
          },
        ],
      },
    ],
    featured: {
      title: "Latest: 2026 STEM Report",
      desc: "Download our annual report on the state of STEM education across Africa with data from 30+ countries",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      cta: "Download Report",
    },
  },
};

export function MegaMenu({ type, onMouseEnter }) {
  const data = MENU_CONTENT[type];
  if (!data) return null;

  const featured = data.featured;
  const featureOnly = data.feature;

  return (
    <div
      onMouseEnter={onMouseEnter}
      className="absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl animate-fadeInDown z-50 max-w-5xl mx-auto px-6 py-8"
      style={{
        animation: "fadeInDown 0.3s ease-out forwards",
      }}
    >
      <div className="">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side - Navigation Links */}
          <div className="lg:col-span-7 grid md:grid-cols-2 gap-10">
            {data.sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {section.heading}
                </h3>
                <div className="space-y-1">
                  {section.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="group block p-3 -mx-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-sm  text-gray-900 group-hover:text-teal-800 transition-colors">
                              {link.title}
                            </span>
                            {link.badge && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-700 rounded">
                                {link.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {link.desc}
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Featured Content */}
          {/* Right Side */}
          <div className="lg:col-span-5">
            <div className="sticky top-8">
              {/* IMAGE ONLY (feature) */}
              {featureOnly && !featured && (
                <div className="max-w-[16rem] mx-auto rounded-2xl overflow-hidden border border-gray-200">
                  <div className="relative w-full h-40 2xl:h-64">
                    <Image
                      src={featureOnly.image}
                      alt="Feature image"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}

              {/* FULL FEATURED CARD */}
              {featured && (
                <div className="max-w-[16rem] mx-auto bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-300 group cursor-pointer">
                  <div className="relative w-full h-28 overflow-hidden">
                    <Image
                      src={featured.image}
                      alt={featured.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {featured.hasPlayIcon && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <Play className="w-7 h-7 text-gray-900 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-sm font-bold text-gray-900 mb-2">
                      {featured.title}
                    </h3>
                    <p className="text-gray-600 text-xs mb-4">
                      {featured.desc}
                    </p>
                    <div className="flex items-center text-teal-800 font-medium text-xs">
                      <span>{featured.cta}</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-gray-600">
                Need help? Need help choosing the right solution?
              </p>
            </div>
            <div className="text-xs">
              <Link
                href="/contact"
                className="px-5 py-2.5 font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
