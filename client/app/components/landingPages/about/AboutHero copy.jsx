"use client";
import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-[#3DCD58] text-white px-3 py-2 text-sm font-medium">
                Life Is On
              </div>
              <div className="ml-2">
                <span className="text-2xl font-bold text-gray-800">Schneider</span>
                <span className="text-sm text-gray-600 ml-1">Electric</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products, documents & more"
                  className="w-full px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3DCD58]"
                />
                <button className="absolute right-0 top-0 h-full px-4 bg-gray-700 text-white rounded-r hover:bg-gray-800">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Impact Company Logo */}
            <div className="flex items-center">
              <span className="text-sm font-bold mr-2">IMPACT</span>
              <span className="text-xs">Company</span>
              <div className="ml-2">
                <Image src="/impact-logo.svg" alt="Impact" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-14">
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Products
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Software
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Services
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Solutions
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Homeowner
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Support
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-[#3DCD58]">
              Company
            </a>
          </div>
        </div>
      </nav>

      {/* Sub Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12">
            <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-[#3DCD58] text-sm font-medium text-gray-900">
              Overview
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Benefits
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Testimonials
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Water and Environment
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Consumer Packaged Goods
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Energies and Chemicals
            </a>
            <a href="#" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
              Mining, Minerals and Metals
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-gray-900 to-teal-900 h-96">
        <div className="absolute inset-0 opacity-60">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/eye-background.jpg')" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">
              Automation on your own terms
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Accelerate your business&apos;s competitive edge with open, software-defined automation.
            </p>
            <button className="bg-[#3DCD58] text-white px-6 py-3 rounded font-medium hover:bg-[#35b84d] inline-flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a demo
            </button>
          </div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4">
            <button className="bg-[#3DCD58] text-white p-3 rounded-full hover:bg-[#35b84d]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button className="bg-[#3DCD58] text-white p-3 rounded-full hover:bg-[#35b84d]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Future-ready automation section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            <div className="flex-1">
              <div className="relative rounded-3xl overflow-hidden">
                <div className="bg-linear-to-r from-gray-800 to-teal-800 p-8">
                  <Image 
                    src="/laptop-automation.jpg" 
                    alt="Automation Software" 
                    width={600} 
                    height={400}
                    className="rounded shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                A future-ready automation solution
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Unlike traditional automation, EcoStruxure Automation Expert is flexible and hardware agnostic. Built for seamless interoperability and digital continuity, it scales easily- without the hassle or cost of rebuilding systems.
              </p>

               <div className="flex flex-wrap justify-center gap-2 sm:gap-3" role="list">
            {coreValues.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-zinc-900/50 rounded-lg px-4 sm:px-5 py-2 sm:py-2.5 border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300"
                  role="listitem"
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${item.color}`} aria-hidden="true" />
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
              <button className="bg-[#3DCD58] text-white px-6 py-3 rounded font-medium hover:bg-[#35b84d] inline-flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Check the expert&apos;s analysis
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Goodbye to rigid systems section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Say goodbye to rigid systems and hello<br />to flexible automation
          </h2>
        </div>
      </section>

      {/* Feedback Button */}
      <button className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-[#00A3E0] text-white px-3 py-6 text-sm font-medium writing-mode-vertical-rl rotate-180">
        Feedback
      </button>

      {/* Accessibility Button */}
      <button className="fixed left-4 bottom-4 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm0-14a2 2 0 11-2 2 2 2 0 012-2zm0 4a4 4 0 00-4 4h2a2 2 0 014 0h2a4 4 0 00-4-4z"/>
        </svg>
      </button>

      {/* Chat Button */}
      <button className="fixed right-4 bottom-4 bg-[#3DCD58] text-white p-4 rounded-full hover:bg-[#35b84d] shadow-lg">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </div>
  );
}