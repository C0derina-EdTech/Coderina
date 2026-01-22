'use client';

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Swies() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-white">
     <div>
      
     </div>
    </div>
  );
}