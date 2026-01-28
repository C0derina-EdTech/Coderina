'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Countdown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [countdownData, setCountdownData] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  // Championship event details
  const EVENT_START = new Date('2026-02-05T10:00:00');
  const EVENT_END = new Date('2026-02-07T20:00:00');
  const THANK_YOU_END = new Date('2026-02-14T23:59:59'); // One week after event

  useEffect(() => {
    const dismissed = localStorage.getItem('championship-countdown-dismissed');
    if (dismissed) {
      const now = new Date();
      if (now <= THANK_YOU_END) return;
      localStorage.removeItem('championship-countdown-dismissed');
    }

    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const diffTime = EVENT_START.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (now > THANK_YOU_END) {
        setIsVisible(false);
        return null;
      }

      // THANK YOU (Feb 7 @ 8pm → Feb 14)
      if (now >= EVENT_END && now <= THANK_YOU_END) {
        return {
          image: '/championship.jpeg',
          fallbackImage: '/championship.jpeg',
          title: 'Thank You! 🎉',
          message:
            'Thank you for being part of the Coderina National Championship 2026. Together, we advanced STEAM education across Africa.',
          cta:
            'Subscribe to stay updated on future Coderina championships and STEAM programs.',
          phase: 'thank You',
        };
      }

      // LIVE EVENT
      if (now >= EVENT_START && now < EVENT_END) {
        const isAfternoon = now.getHours() >= 14;
        return {
          image: '/championship.jpeg',
          fallbackImage: '/championship.jpeg',
          title: isAfternoon
            ? 'Having a Great Time? 🏆'
            : 'It’s Happening NOW! 🔥',
          message: isAfternoon
            ? 'The Coderina National Championship is in full swing. The excitement continues!'
            : 'The Coderina National Championship Competition is LIVE right now!',
          cta: isAfternoon ? 'Keep the energy high!' : 'Join us at the venue!',
          phase: 'live',
        };
      }

      // COUNTDOWN (10 → 1)
      if (diffDays > 0 && diffDays <= 10) {
        const messages = {
          10: 'The countdown begins to Africa’s biggest STEAM championship! 🚀',
          9: '9 days to go! Innovation meets competition at Coderina! 💡',
          8: '8 days left! The future of STEAM is almost here! ⚡',
          7: 'One week to go! Get ready for excellence! 🌍',
          6: '6 days remaining! The championship spirit is rising! 🎯',
          5: '5 days until brilliance takes the stage! 🏅',
          4: 'Only 4 days left! The excitement is building! 🔥',
          3: '3 days to go! Africa’s brightest minds converge! 🎊',
          2: '2 days left! Almost time for innovation to shine! 🎆',
          1: 'Tomorrow is the day! Coderina National Championship begins! 🚀',
        };

        return {
          image: `/count/day${diffDays}.jpeg`,
          fallbackImage: '/championship.jpeg',
          title: `${diffDays} Day${diffDays > 1 ? 's' : ''} Until Championship ⏰`,
          message:
            messages[diffDays] ||
            `${diffDays} days until the Coderina National Championship 2026.`,
          cta: 'February 5–7, 2026 | 10:00 AM',
          phase: 'countdown',
        };
      }

      // EARLY PROMO
      if (diffDays > 10) {
        return {
          image: '/championship.jpeg',
          fallbackImage: '/championship.jpeg',
          title: 'Coderina National Championship 2026 🏆',
          message:
            'Africa’s premier STEAM competition is coming soon. Get ready to witness innovation, creativity, and excellence.',
          cta: 'February 5–7, 2026 | Save the date',
          phase: 'early',
        };
      }

      return null;
    };

    const data = calculateCountdown();
    setCountdownData(data);
    if (data?.image) setImgSrc(data.image);

    const interval = setInterval(() => {
      const updated = calculateCountdown();
      setCountdownData(updated);
      if (updated?.image) setImgSrc(updated.image);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    localStorage.setItem(
      'championship-countdown-dismissed',
      new Date().toISOString()
    );
    setTimeout(() => setIsVisible(false), 400);
  };

  if (!isVisible || !countdownData) return null;

  return (
    <aside
      role="complementary"
      aria-label="Coderina National Championship countdown notification"
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ease-out ${
        isClosing ? 'translate-x-[-120%] opacity-0' : 'translate-x-0 opacity-100'
      } ${!isClosing && isVisible ? 'animate-slide-in' : ''}`}
    >
      <article className="relative w-[260px] 2xl:w-[380px] bg-gradient-to-br from-teal-800 via-teal-900 to-black rounded-2xl shadow-2xl overflow-hidden border border-teal-700/30 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-white/5 pointer-events-none" />

        <button
          onClick={handleClose}
          aria-label="Close championship notification"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 backdrop-blur-sm group"
        >
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-90"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <figure className="relative w-full h-36 2xl:h-56 overflow-hidden">
          <Image
            src={imgSrc || '/championship.jpeg'}
            alt="Coderina National Championship 2026 – Africa’s leading STEAM competition"
            fill
            sizes="(max-width: 640px) 340px, 380px"
            priority={countdownData.phase !== 'early'}
            className="object-cover transition-transform duration-700 hover:scale-105"
            onError={() => setImgSrc('/championship.jpeg')}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
        </figure>

        <div className="relative p-4 2xl:p-6 space-y-2 2xl:space-y-3">
          <header>
            <h2 className="text-base 2xl:text-xl font-bold text-white leading-tight tracking-tight">
              {countdownData.title}
            </h2>
          </header>

          <p className="text-xs xl:text-sm 2xl:text-base text-teal-50/90 leading-relaxed">
            {countdownData.message}
          </p>

          <footer className="pt-2">
            <p className="text-xs 2xl:text-sm text-teal-300 font-medium flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              {countdownData.cta}
            </p>
          </footer>

          <div className="pt-3 border-t border-teal-700/30">
            <p className="text-xs text-teal-400/70">
              <span className="font-semibold">Coderina</span> National Championship
              2026
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-teal-500/10 to-transparent rounded-tl-full pointer-events-none" />
      </article>
    </aside>
  );
};

export default Countdown;
