import React from 'react';
import Image from 'next/image';
import Link from "next/link";
export default function Coderina3D() {
  
  return (
    <div className="bg-black text-white">
    
      {/* Innovation Section */}
      <section className="py-20 bg-white text-black">
        <div className="max-w-400 mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-base md:text-xl lg:text-2xl 2xl:text-3xl font-bold mb-6">
                Driving Innovation Throughout Production
              </h2>
              <h3 className="text-sm sm:text-base 2xl:text-xl text-teal-800 mb-6">
                How Leading Companies Use Coderina Technology to Cut Costs, Boost Agility, and Improve Quality
              </h3>
              <p className="text-sm md:text-base text-gray-900 mb-8 leading-relaxed">
                In this exclusive behind-the-scenes look, learn how industry leaders are leveraging industrial 3D printing with Coderina technology to transform manufacturing on the production floor. From rapid design cycles to on-demand tooling, see how innovation meets efficiency in creating next-generation products across automotive, aerospace, and medical device industries.
              </p>
              <Link href="/" className="bg-teal-700 hover:bg-teal-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm font-medium transition-colors inline-flex items-center gap-2 border border-teal-600">
                Watch Our Videos →
              </Link>
            </div>

            <div className="">
              <div className="relative aspect-video bg-linear-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop" 
                  alt="Advanced manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}