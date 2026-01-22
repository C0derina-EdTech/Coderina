"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

export default function ExpandButton({
  href,
  text = "Explore Solutions",
  size = "md",
  width = 260,
  className = "",
  bgColor = "bg-transparent",
  hoverBgColor = "bg-white/10",
  textColor = "text-white",
  borderColor = "border-white",
  hoverBorderColor = "border-white",
}) {
  const sizes = {
    sm: "h-10 text-sm",
    md: "h-12 text-base",
    lg: "h-14 text-lg",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "group relative inline-flex items-center overflow-hidden rounded-full transition-all duration-700 ease-in-out",
        sizes[size],
        textColor,
        className
      )}
      style={{ width }}
    >
      {/* Expanding Circle Background */}
      <span
        className={clsx(
          "absolute left-0 top-1/2 h-full aspect-square -translate-y-1/2 rounded-full border transition-all duration-700 ease-in-out",
          borderColor,
          bgColor,
          "group-hover:w-full group-hover:aspect-auto",
          `group-hover:${hoverBorderColor}`,
          `group-hover:${hoverBgColor}`
        )}
      />

      {/* Hover State Full Border */}
      <span
        className={clsx(
          "absolute inset-0 rounded-full border opacity-0 transition-opacity duration-700 ease-in-out",
          hoverBorderColor,
          "group-hover:opacity-100"
        )}
      />

      {/* Content */}
      <span className="relative z-10 flex w-full items-center justify-start px-6 gap-2">
        <span className="whitespace-nowrap text-sm lg:text-base font-bold transition-all duration-500">
          {text}
        </span>
        <ArrowRight 
          className="w-5 h-5 transform transition-transform duration-500 ease-out group-hover:translate-x-1" 
        />
      </span>
    </Link>
  );
}

// Demo Component
function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Smooth Expand Button Variants</h1>
      
      {/* Default White Border */}
      <ExpandButton 
        href="#"
        text="Explore Solutions"
      />

      {/* Purple Theme */}
      <ExpandButton 
        href="#"
        text="Get Started"
        borderColor="border-purple-400"
        hoverBorderColor="border-purple-300"
        hoverBgColor="bg-purple-500/20"
        textColor="text-purple-100"
      />

      {/* Cyan Theme */}
      <ExpandButton 
        href="#"
        text="Learn More"
        borderColor="border-cyan-400"
        hoverBorderColor="border-cyan-300"
        hoverBgColor="bg-cyan-500/20"
        textColor="text-cyan-100"
        size="lg"
        width={300}
      />

      {/* Gold Theme */}
      <ExpandButton 
        href="#"
        text="Premium Access"
        borderColor="border-amber-400"
        hoverBorderColor="border-amber-300"
        hoverBgColor="bg-amber-500/20"
        textColor="text-amber-100"
      />

      {/* Green Success */}
      <ExpandButton 
        href="#"
        text="Continue"
        borderColor="border-emerald-400"
        hoverBorderColor="border-emerald-300"
        hoverBgColor="bg-emerald-500/20"
        textColor="text-emerald-100"
        size="sm"
        width={200}
      />

      {/* Red Alert */}
      <ExpandButton 
        href="#"
        text="Important Action"
        borderColor="border-red-400"
        hoverBorderColor="border-red-300"
        hoverBgColor="bg-red-500/20"
        textColor="text-red-100"
      />
    </div>
  );
}