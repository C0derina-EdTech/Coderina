import React from 'react';
import { Globe, ArrowRight, Heart, Users, Lightbulb, Target, Award, Sparkles } from 'lucide-react';
import Link from "next/link";
import kenya from "../../../../public/kenya.png";
import nigeria from "../../../../public/nigeria.png";
import ghana from "../../../../public/ghana.png";
import rwanda from "../../../../public/rwanda.png";
import uganda from "../../../../public/uganda.png";
import sierra from "../../../../public/sierra.png";
import Image from "next/image";
const countries = [
  { name: 'Nigeria', img: nigeria, color: 'from-green-400 to-green-600' },
  { name: 'Ghana', img: ghana, color: 'from-yellow-400 to-red-600' },
  { name: 'Kenya', img: kenya, color: 'from-red-400 to-green-600' },
  { name: 'Rwanda', img: rwanda, color: 'from-blue-400 to-yellow-400' },
  { name: 'Sierra Leone', img: sierra, color: 'from-green-400 to-blue-600' },
  { name: 'Uganda', img: uganda, color: 'from-yellow-300 to-red-500' },
];

const coreValues = [
  { value: 'Innovation', icon: Lightbulb, color: 'text-blue-400' },
  { value: 'Excellence', icon: Award, color: 'text-purple-400' },
  { value: 'Integrity', icon: Heart, color: 'text-rose-400' },
  { value: 'Collaboration', icon: Users, color: 'text-green-400' },
  { value: 'Impact', icon: Target, color: 'text-orange-400' },
  { value: 'Creativity', icon: Sparkles, color: 'text-yellow-400' },
];

export default function Core() {
  return (
    <section className="w-full bg-black text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-zinc-900/50 rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-zinc-800/50">
            <Globe className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            <span className="text-zinc-300">Pan-African STEAM Education</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Empowering Africa Through{" "}
            <span className="text-zinc-400">Innovation</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Building STEAM education networks across six African nations
          </p>
        </header>

        {/* Countries Grid */}
        <div className="mb-10 md:mb-12">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-6">
            {countries.map((country, i) => (
              <article key={i} className="group">
                <div className="bg-zinc-900/50 rounded-xl border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/70 transition-all duration-300">
                  <div
                    className={`relative aspect-square bg-linear-to-br ${country.color} rounded-lg mb-2 flex items-center justify-center overflow-hidden `}
                  >
                    <Image
                      src={country.img}
                      alt={`STEAM education in ${country.name}`}
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      fill
                    />
                  </div>
                  <h3 className="text-center text-xs sm:text-sm font-semibold text-white">
                    {country.name}
                  </h3>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/contact">
            <button 
              className="inline-flex items-center gap-2 bg-zinc-900/50 text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800 transition-all duration-300"
              aria-label="Join our Pan-African educational movement"
            >
              <span>Join Our Movement</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
            </Link>
          </div>
        </div>

  
      </div>
    </section>
  );
}