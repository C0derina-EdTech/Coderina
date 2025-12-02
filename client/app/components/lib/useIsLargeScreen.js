"use client";
import { useState, useEffect } from "react";

export default function useIsLargeScreen(threshold = 2000) {
  const [isLargeScreen, setIsLargeScreen] = useState(null); // start as null

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= threshold);
    };

    checkScreenSize(); // initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [threshold]);

  return isLargeScreen;
}