import React from "react";
import {
  Trophy,
  Users,
  Rocket,
  GraduationCap,
  Code,
  Briefcase,
  Target,
  Award,
  Calendar,
  Globe,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Laptop,
  Heart,
  Lightbulb,
  Zap,
  Star,
  TrendingUp,
  Shield,
  Clock,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export default function Programs() {
  const programs = [
    {
      title: "Coderina Project Fair",
      description:
        "A 48-hour innovation event promoting creativity among tertiary students in Nigeria. Teams from diverse backgrounds collaborate to solve indigenous problems using technology or modern business approaches.",
      duration: "48 Hours",
      audience: "Tertiary Students",
      category: "Competition",
      icon: Trophy,
      features: [
        "Cross-disciplinary collaboration",
        "Indigenous problem-solving",
        "Technology & business innovation",
        "Industry mentorship",
      ],
      stats: {
        participants: "500+",
        projects: "100+",
        prizes: "5M+",
      },
    },
    {
      title: "Coderina® University Challenge (COUCH)",
      description:
        "An annual event where tertiary students showcase their final year projects to industry experts. Bridging the gap between academic work and industry needs, aligning student projects with real-world requirements.",
      duration: "Annual Event",
      audience: "Final Year Students",
      category: "Showcase",
      icon: GraduationCap,
      features: [
        "Industry expert evaluation",
        "Real-world project alignment",
        "Career networking opportunities",
        "Innovation recognition",
      ],
      link: "/couch",
      stats: {
        universities: "20+",
        judges: "50+",
        winners: "Top 10",
      },
    },
    {
      title: "e-STEAM CODERINA",
      description:
        "Comprehensive digital learning platform offering programming courses, hackathons, and internship opportunities. Equipping students with in-demand tech skills through hands-on experience.",
      duration: "Ongoing",
      audience: "Students & Professionals",
      category: "Learning Platform",
      icon: Rocket,
      features: [
        "Digital programming courses",
        "Competitive hackathons",
        "Industry internships",
        "Certificate programs",
      ],
      link: "https://www.esteamcoderina.org",
      stats: {
        courses: "50+",
        students: "5000+",
        certificates: "2000+",
      },
    },
    {
      title: "Checkmate Chess Program",
      description:
        "Strategic thinking development through chess education. Building critical thinking, problem-solving, and analytical skills that translate to technology and academic excellence.",
      duration: "Regular Sessions",
      audience: "All Ages",
      category: "Skill Development",
      icon: Target,
      features: [
        "Strategic thinking training",
        "Tournament participation",
        "Mental agility development",
        "Community building",
      ],
      stats: {
        sessions: "Weekly",
        levels: "Beginner to Advanced",
        tournaments: "Monthly",
      },
    },
  ];

  const projects = [
    {
      title: "Africa Code Week",
      description:
        "Pan-African initiative bringing coding education to millions of youth across the continent. Coderina serves as a key implementation partner in Nigeria.",
      scope: "Pan-African",
      impact: "Thousands of students trained",
      icon: Globe,
      link: "https://africacodeweek.org",
    },
    {
      title: "Google CS First",
      description:
        "Google's computer science curriculum delivered to Nigerian students. Free coding clubs using video-based lessons to make learning fun and accessible.",
      scope: "International Partnership",
      impact: "Multiple schools reached",
      icon: Code,
      link: "https://csfirst.withgoogle.com",
    },
    {
      title: "Information & Resource Center for Research",
      description:
        "Dedicated facility providing students and educators access to cutting-edge technology resources, research materials, and innovation tools.",
      scope: "Community Resource",
      impact: "Open to all learners",
      icon: BookOpen,
    },
  ];

  const initiatives = [
    {
      title: "CPPD for Teachers",
      description:
        "Continuous Professional Development program equipping educators with modern teaching methodologies and technology integration skills.",
      icon: Users,
    },
    {
      title: "Lifelong Skills 2020",
      description:
        "Future-focused program developing essential 21st-century skills including critical thinking, creativity, and digital literacy.",
      icon: Target,
    },
    {
      title: "Themed Party",
      description:
        "Engaging STEM-themed celebration events that make learning fun while fostering community and creativity among young learners.",
      icon: Sparkles,
    },
    {
      title: "Virtual Tutors",
      description:
        "One-on-one online mentorship connecting students with expert tutors for personalized learning experiences across various subjects.",
      icon: Laptop,
    },
    {
      title: "Zero-to-Full Stack",
      description:
        "Intensive bootcamp training complete beginners to become full-stack developers with industry-ready skills.",
      icon: Zap,
    },
    {
      title: "Job Readiness Program",
      description:
        "Comprehensive career preparation including resume building, interview skills, and professional development for tech careers.",
      icon: Briefcase,
    },
    {
      title: "After School Program",
      description:
        "Extended learning opportunities providing safe, educational environments with coding, robotics, and STEM activities.",
      icon: Clock,
    },
    {
      title: "Child Innovation Awards",
      description:
        "Recognition program celebrating young innovators and their creative solutions to community challenges.",
      icon: Award,
    },
    {
      title: "Reverse Engineering",
      description:
        "Hands-on program teaching students to deconstruct technology, understand how things work, and build innovative solutions.",
      icon: Lightbulb,
    },
  ];

  const faqs = [
    {
      question: "Who can participate in Coderina programs?",
      answer:
        "Our programs are designed for students of all ages, from primary school to university level, as well as professionals looking to upskill. Each program has specific eligibility criteria listed on its dedicated page.",
    },
    {
      question: "Are the programs free or paid?",
      answer:
        "We offer a mix of free community programs and paid professional training. Many of our flagship programs are subsidized or fully sponsored through partnerships. Contact us to learn about scholarship opportunities.",
    },
    {
      question: "How can my school partner with Coderina?",
      answer:
        "Schools can partner with us to bring technology education to their students. We provide curriculum, training, resources, and ongoing support. Reach out through our contact page to start the conversation.",
    },
    {
      question: "Do you provide certificates upon completion?",
      answer:
        "Yes! Participants who successfully complete our programs receive recognized certificates that can enhance their academic and professional profiles.",
    },
    {
      question: "Can I volunteer or mentor in your programs?",
      answer:
        "Absolutely! We welcome volunteers, mentors, and industry experts who want to give back to the community. Visit our volunteer page or contact us to learn about opportunities.",
    },
  ];

  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="bg-white">
      {/* Main Programs Section */}
      <section className="py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-400 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              OUR FLAGSHIP PROGRAMS
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black mb-3">
              Transformative Learning Experiences
            </h2>
            <p className="text-xs md:text-sm 2xl:text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to nurture innovation, build skills, and create pathways to success in technology
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className="inline-flex items-center gap-2 bg-teal-800 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 w-fit">
                        <IconComponent className="w-4 h-4" />
                        {program.category}
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold text-black mb-3">
                        {program.title}
                      </h3>

                      <p className="text-xs md:text-sm 2xl:text-base text-gray-600 mb-6">
                        {program.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <Calendar className="w-5 h-5 text-teal-800 mb-2" />
                          <div className="text-xs md:text-sm font-bold text-black mb-1">
                            {program.duration}
                          </div>
                          <div className="text-xs md:text-sm text-gray-500">Duration</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <Users className="w-5 h-5 text-teal-800 mb-2" />
                          <div className="text-xs md:text-sm font-bold text-black mb-1">
                            {program.audience}
                          </div>
                          <div className="text-xs md:text-sm text-gray-500">Audience</div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-800 shrink-0 mt-0.5" />
                            <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {program.link && (
                        <Link
                          href={program.link}
                          className="inline-flex items-center gap-2 bg-teal-800 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-teal-900 transition-colors w-fit"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                        {Object.entries(program.stats).map(([key, value], idx) => (
                          <div
                            key={idx}
                            className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center"
                          >
                            <div className="text-base md:text-lg lg:text-2xl 2xl:text-3xl font-bold text-teal-800 mb-1">
                              {value}
                            </div>
                            <div className="text-xs md:text-sm text-gray-600 capitalize">
                              {key}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8 bg-teal-800">
        <div className="max-w-400 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Globe className="w-4 h-4" />
              STRATEGIC PARTNERSHIPS
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-3">
              Global Impact Projects
            </h2>
            <p className="text-sm md:text-base text-teal-100 max-w-2xl mx-auto">
              Collaborating with global partners to bring world-class technology education to Nigerian communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-teal-800 p-3 rounded-lg">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.scope}
                    </span>
                  </div>

                  <h3 className="text-base lg:text-xl font-bold text-black mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-teal-800">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-xs md:text-sm font-semibold">{project.impact}</span>
                    </div>
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-800 hover:text-teal-900 font-semibold text-xs md:text-sm flex items-center gap-1"
                      >
                        Visit
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-400 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Lightbulb className="w-4 h-4" />
              COMMUNITY IMPACT
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-black mb-3">
              Community Initiatives
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
              Targeted programs addressing specific needs and creating lasting impact in education and technology access
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-teal-800 hover:shadow-lg transition-all duration-300"
                >
                  <div className="bg-teal-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base md:text-lg font-bold text-black mb-2">
                    {initiative.title}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-600">
                    {initiative.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8 bg-black">
        <div className="max-w-400 mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            JOIN THE MOVEMENT
          </div>

          <h2 className="text-xl md:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h2>

          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto mb-8">
            Join us in empowering the next generation of innovators and problem-solvers. Partner with Coderina today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal-800 hover:bg-teal-900 text-white px-8 py-4 rounded-lg font-semibold text-sm transition-colors"
            >
              <Heart className="w-5 h-5" />
              Partner With Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-sm transition-colors"
            >
              <Users className="w-5 h-5" />
              Volunteer
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Shield, label: "Trusted Partner" },
              { icon: Award, label: "Award Winning" },
              { icon: Users, label: "Community Driven" },
              { icon: TrendingUp, label: "Proven Impact" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center gap-2 text-gray-400"
              >
                <item.icon className="w-6 h-6" />
                <span className="text-sm font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Lightbulb className="w-4 h-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-base lg:text-3xl 2xl:text-4xl font-bold text-black mb-3">
              Got Questions?
            </h2>
            <p className="text-sm 2xl:text-base text-gray-600">
              Everything you need to know about our programs
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-sm lg:text-base text-black pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-800 shrink-0 transition-transform ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5">
                    <p className="text-xs md:text-sm text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}