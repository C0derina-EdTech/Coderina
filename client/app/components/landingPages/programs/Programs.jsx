import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  Clock
} from "lucide-react";

export default function Programs() {
  const programs = [
    {
      title: "Coderina Project Fair",
      description:
        "A 48-hour innovation event promoting creativity among tertiary students in Nigeria. Teams from diverse backgrounds collaborate to solve indigenous problems using technology or modern business approaches.",
      duration: "48 Hours",
      audience: "Tertiary Students",
      image: "/chess1.jpg",
      category: "Competition",
      icon: Trophy,
      color: "from-orange-500 to-amber-600",
      features: [
        "Cross-disciplinary collaboration",
        "Indigenous problem-solving",
        "Technology & business innovation",
        "Industry mentorship",
      ],
      stats: {
        participants: "500+",
        projects: "100+",
        prizes: "$10K+"
      }
    },
    {
      title: "Coderina® University Challenge (COUCH)",
      description:
        "An annual event where tertiary students showcase their final year projects to industry experts. Bridging the gap between academic work and industry needs, aligning student projects with real-world requirements.",
      duration: "Annual Event",
      audience: "Final Year Students",
      image: "/chess1.jpg",
      category: "Showcase",
      icon: GraduationCap,
      color: "from-blue-600 to-indigo-700",
      features: [
        "Industry expert evaluation",
        "Real-world project alignment",
        "Career networking opportunities",
        "Innovation recognition",
      ],
      link: "/programs/couch",
      stats: {
        universities: "20+",
        judges: "50+",
        winners: "Top 10"
      }
    },
    {
      title: "e-STEAM CODERINA",
      description:
        "Comprehensive digital learning platform offering programming courses, hackathons, and internship opportunities. Equipping students with in-demand tech skills through hands-on experience.",
      duration: "Ongoing",
      audience: "Students & Professionals",
      image: "/chess1.jpg",
      category: "Learning Platform",
      icon: Rocket,
      color: "from-green-500 to-emerald-600",
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
        certificates: "2000+"
      }
    },
    {
      title: "Checkmate Chess Program",
      description:
        "Strategic thinking development through chess education. Building critical thinking, problem-solving, and analytical skills that translate to technology and academic excellence.",
      duration: "Regular Sessions",
      audience: "All Ages",
      image: "/kidschess.jpg",
      category: "Skill Development",
      icon: Target,
      color: "from-purple-600 to-pink-600",
      features: [
        "Strategic thinking training",
        "Tournament participation",
        "Mental agility development",
        "Community building",
      ],
      stats: {
        sessions: "Weekly",
        levels: "Beginner to Advanced",
        tournaments: "Monthly"
      }
    },
  ];

  const projects = [
    {
      title: "Africa Code Week",
      description:
        "Pan-African initiative bringing coding education to millions of youth across the continent. Coderina serves as a key implementation partner in Nigeria.",
      scope: "Pan-African",
      image: "/chess1.jpg",
      impact: "Thousands of students trained",
      icon: Globe,
      link: "https://africacodeweek.org",
    },
    {
      title: "Google CS First",
      description:
        "Google's computer science curriculum delivered to Nigerian students. Free coding clubs using video-based lessons to make learning fun and accessible.",
      scope: "International Partnership",
      image: "/chess1.jpg",
      impact: "Multiple schools reached",
      icon: Code,
      link: "https://csfirst.withgoogle.com",
    },
    {
      title: "Information & Resource Center for Research",
      description:
        "Dedicated facility providing students and educators access to cutting-edge technology resources, research materials, and innovation tools.",
      scope: "Community Resource",
      image: "/chess1.jpg",
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
      color: "bg-blue-500",
    },
    {
      title: "Lifelong Skills 2020",
      description:
        "Future-focused program developing essential 21st-century skills including critical thinking, creativity, and digital literacy.",
      icon: Target,
      color: "bg-green-500",
    },
    {
      title: "Themed Party",
      description:
        "Engaging STEM-themed celebration events that make learning fun while fostering community and creativity among young learners.",
      icon: Sparkles,
      color: "bg-pink-500",
    },
    {
      title: "Virtual Tutors",
      description:
        "One-on-one online mentorship connecting students with expert tutors for personalized learning experiences across various subjects.",
      icon: Laptop,
      color: "bg-indigo-500",
    },
    {
      title: "Zero-to-Full Stack",
      description:
        "Intensive bootcamp training complete beginners to become full-stack developers with industry-ready skills.",
      icon: Zap,
      color: "bg-orange-500",
    },
    {
      title: "Job Readiness Program",
      description:
        "Comprehensive career preparation including resume building, interview skills, and professional development for tech careers.",
      icon: Briefcase,
      color: "bg-purple-500",
    },
    {
      title: "After School Program",
      description:
        "Extended learning opportunities providing safe, educational environments with coding, robotics, and STEM activities.",
      icon: Clock,
      color: "bg-teal-500",
    },
    {
      title: "Child Innovation Awards",
      description:
        "Recognition program celebrating young innovators and their creative solutions to community challenges.",
      icon: Award,
      color: "bg-yellow-500",
    },
    {
      title: "Reverse Engineering",
      description:
        "Hands-on program teaching students to deconstruct technology, understand how things work, and build innovative solutions.",
      icon: Lightbulb,
      color: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3ef] via-[#fef9f0] to-[#f9f6f1]">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-black to-[#1a3a52] opacity-90"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#e29818] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-green-500 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float-slow"></div>
        </div>

        <div className="max-w-[130rem] mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 lg:py-36 mt-16 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e29818] to-amber-600 px-6 py-3 rounded-full text-sm font-bold mb-8 animate-fade-in shadow-lg">
              <Sparkles className="w-4 h-4" />
              TRANSFORMING LIVES THROUGH TECHNOLOGY
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                Programs, Projects
              </span>
              <span className="block bg-gradient-to-r from-[#e29818] via-amber-400 to-[#e29818] bg-clip-text text-transparent mt-2">
                & Initiatives
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Empowering Nigerian youth with world-class technology education,
              innovation opportunities, and skills for the digital future.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="#programs"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#e29818] to-amber-600 hover:from-amber-600 hover:to-[#e29818] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-2xl hover:shadow-[#e29818]/50"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
              >
                <Heart className="w-5 h-5" />
                <span>Get Involved</span>
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
              {[
                { label: "Students Impacted", value: "10,000+", icon: Users },
                { label: "Programs Running", value: "15+", icon: Rocket },
                { label: "Partner Schools", value: "50+", icon: GraduationCap },
                { label: "Success Stories", value: "500+", icon: Trophy },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <stat.icon className="w-8 h-8 text-[#e29818] mb-3 mx-auto" />
                  <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#f5f3ef"
            />
          </svg>
        </div>
      </section>

      {/* Main Programs Section */}
      <section id="programs" className="py-20 md:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-[130rem] mx-auto">
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#e29818]/10 text-[#e29818] px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4" />
              OUR FLAGSHIP PROGRAMS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a3a52] mb-6">
              Transformative Learning Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive programs designed to nurture innovation, build
              skills, and create pathways to success in technology
            </p>
          </header>

          <div className="space-y-24">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <article
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 items-center bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-3xl transition-all duration-700 group`}
                >
                  {/* Image Section */}
                  <div className="w-full lg:w-1/2 h-80 md:h-[500px] lg:h-[600px] relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-30 z-10 group-hover:opacity-40 transition-opacity`}></div>
                    <Image
                      src={program.image}
                      alt={`${program.title} - ${program.category}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${program.color} text-white px-5 py-3 rounded-full text-sm font-bold shadow-xl`}>
                        <IconComponent className="w-5 h-5" />
                        {program.category}
                      </div>
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <div className="grid grid-cols-3 gap-3">
                        {Object.entries(program.stats).map(([key, value], idx) => (
                          <div key={idx} className="bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl p-3 text-center">
                            <div className="text-white font-black text-lg mb-1">{value}</div>
                            <div className="text-gray-300 text-xs capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg-gradient-to-br ${program.color} rounded-2xl shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a3a52] leading-tight">
                          {program.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-gradient-to-br from-[#f5f3ef] to-[#fef9f0] p-6 rounded-2xl border-2 border-[#e29818]/20 hover:border-[#e29818]/40 transition-colors">
                        <Calendar className="w-6 h-6 text-[#e29818] mb-2" />
                        <div className="text-2xl font-black text-[#e29818] mb-1">
                          {program.duration}
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">Duration</div>
                      </div>
                      <div className="bg-gradient-to-br from-[#f5f3ef] to-[#fef9f0] p-6 rounded-2xl border-2 border-[#1a3a52]/20 hover:border-[#1a3a52]/40 transition-colors">
                        <Users className="w-6 h-6 text-[#1a3a52] mb-2" />
                        <div className="text-lg font-black text-[#1a3a52] mb-1">
                          {program.audience}
                        </div>
                        <div className="text-sm text-gray-600 font-semibold">Target Audience</div>
                      </div>
                    </div>

                    <div className="space-y-4 mb-10">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item">
                          <div className="w-7 h-7 bg-gradient-to-br from-[#e29818] to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-gray-700 font-medium text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {program.link && (
                      <Link
                        href={program.link}
                        className={`inline-flex items-center gap-3 bg-gradient-to-r ${program.color} text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl group/button`}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-[#1a3a52] via-black to-[#1a3a52] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#e29818] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-[130rem] mx-auto relative z-10">
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-bold mb-6 border border-white/20">
              <Globe className="w-4 h-4" />
              STRATEGIC PARTNERSHIPS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              Global Impact Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Collaborating with global partners to bring world-class technology
              education to Nigerian communities
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <article
                  key={index}
                  className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 hover:border-[#e29818] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#e29818]/20"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.scope}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {project.scope}
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6">
                      <div className="p-3 bg-gradient-to-br from-[#e29818] to-amber-600 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-black mb-4 group-hover:text-[#e29818] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-[#e29818] font-bold">
                        <TrendingUp className="w-5 h-5" />
                        <span>{project.impact}</span>
                      </div>
                      {project.link && (
                        <Link
                          href={project.link}
                          className="inline-flex items-center gap-2 text-white hover:text-[#e29818] font-bold transition-colors group/link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span>Visit</span>
                          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8">
        <div className="max-w-[130rem] mx-auto">
          <header className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#e29818]/10 text-[#e29818] px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Lightbulb className="w-4 h-4" />
              COMMUNITY IMPACT
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a3a52] mb-6">
              Community Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Targeted programs addressing specific needs and creating lasting
              impact in education and technology access
            </p>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => {
              const IconComponent = initiative.icon;
              return (
                <article
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-t-4 border-[#e29818] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e29818]/10 to-transparent rounded-bl-full"></div>
                  
                  <div className={`${initiative.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg relative z-10`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-black text-[#1a3a52] mb-4 group-hover:text-[#e29818] transition-colors">
                    {initiative.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {initiative.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#e29818] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm">Explore Program</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-black via-[#1a3a52] to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#e29818] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-[130rem] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full text-sm font-bold mb-8 border border-white/20">
            <Shield className="w-4 h-4" />
            JOIN THE MOVEMENT
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="block">Ready to Make</span>
            <span className="block bg-gradient-to-r from-[#e29818] via-amber-400 to-[#e29818] bg-clip-text text-transparent">
              a Difference?
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join us in empowering the next generation of innovators and
            problem-solvers. Partner with Coderina today.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#e29818] to-amber-600 hover:from-amber-600 hover:to-[#e29818] text-white px-12 py-6 rounded-full font-black text-xl transition-all hover:scale-105 shadow-2xl hover:shadow-[#e29818]/50"
            >
              <Heart className="w-6 h-6" />
              <span>Partner With Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl hover:bg-white/20 border-2 border-white/30 text-white px-12 py-6 rounded-full font-black text-xl transition-all"
            >
              <Users className="w-6 h-6" />
              <span>Volunteer</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, label: "Trusted Partner" },
              { icon: Award, label: "Award Winning" },
              { icon: Users, label: "Community Driven" },
              { icon: TrendingUp, label: "Proven Impact" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <item.icon className="w-8 h-8" />
                <span className="text-sm font-bold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#e29818]/10 text-[#e29818] px-6 py-3 rounded-full text-sm font-bold mb-6">
              <Lightbulb className="w-4 h-4" />
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1a3a52] mb-6">
              Got Questions?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Everything you need to know about our programs
            </p>
          </header>

          <div className="space-y-6">
            {[
              {
                question: "Who can participate in Coderina programs?",
                answer: "Our programs are designed for students of all ages, from primary school to university level, as well as professionals looking to upskill. Each program has specific eligibility criteria listed on its dedicated page."
              },
              {
                question: "Are the programs free or paid?",
                answer: "We offer a mix of free community programs and paid professional training. Many of our flagship programs are subsidized or fully sponsored through partnerships. Contact us to learn about scholarship opportunities."
              },
              {
                question: "How can my school partner with Coderina?",
                answer: "Schools can partner with us to bring technology education to their students. We provide curriculum, training, resources, and ongoing support. Reach out through our contact page to start the conversation."
              },
              {
                question: "Do you provide certificates upon completion?",
                answer: "Yes! Participants who successfully complete our programs receive recognized certificates that can enhance their academic and professional profiles."
              },
              {
                question: "Can I volunteer or mentor in your programs?",
                answer: "Absolutely! We welcome volunteers, mentors, and industry experts who want to give back to the community. Visit our volunteer page or contact us to learn about opportunities."
              }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gradient-to-br from-[#f5f3ef] to-[#fef9f0] rounded-2xl border-2 border-[#e29818]/20 hover:border-[#e29818]/40 transition-all">
                <summary className="flex items-center justify-between p-8 cursor-pointer font-bold text-lg text-[#1a3a52] list-none">
                  <span className="flex-1 pr-4">{faq.question}</span>
                  <div className="w-8 h-8 bg-gradient-to-br from-[#e29818] to-amber-600 rounded-full flex items-center justify-center flex-shrink-0 group-open:rotate-180 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white rotate-90" />
                  </div>
                </summary>
                <div className="px-8 pb-8 pt-0">
                  <p className="text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
}