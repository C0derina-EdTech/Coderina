"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CHAMPIONSHIP_DATE = new Date("2026-02-05T00:00:00");
const AI_FOR_GOOD_DATE = new Date("2026-03-05T00:00:00");

const Banner = () => {
  const [target, setTarget] = useState(CHAMPIONSHIP_DATE);
  const [mode, setMode] = useState("championship");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(CHAMPIONSHIP_DATE));

  function getTimeRemaining(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      if (now >= CHAMPIONSHIP_DATE) {
        setMode("ai");
        setTarget(AI_FOR_GOOD_DATE);
        setTimeLeft(getTimeRemaining(AI_FOR_GOOD_DATE));
      } else {
        setMode("championship");
        setTarget(CHAMPIONSHIP_DATE);
        setTimeLeft(getTimeRemaining(CHAMPIONSHIP_DATE));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Bottom Banner - Blue Background */}
      <div className="absolute bottom-0 left-0 right-0 shadow-lg bg-linear-to-b from-teal-900 via-teal-800 to-teal-900 py-3 z-20">
        <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* TEXT + COUNTDOWN */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-white">
            <p className="text-xs md:text-sm 2xl:text-base font-medium whitespace-nowrap">
              {mode === "championship"
                ? "FIRST AGE℠ National Robotics Championship • Abuja 2026"
                : "AI for Good Innovation Challenge • Registration Open"}
            </p>

            {/* Countdown Buttons */}
            <div className="flex items-center gap-2">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-1 border border-white/40 rounded-full text-xs 2xl:text-sm font-semibold backdrop-blur-md"
                  aria-label={`${item.value} ${item.label} remaining`}
                >
                  {String(item.value).padStart(2, "0")} {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href={mode === "championship" ? "/events" : "/ai-for-good"}
            className="px-4 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#0c4a6e] transition-all duration-300 text-xs font-semibold whitespace-nowrap"
          >
            {mode === "championship" ? "View Details" : "Join AI for Good"}
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Banner;
