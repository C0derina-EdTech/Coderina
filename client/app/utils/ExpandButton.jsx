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


