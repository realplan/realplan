"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import image_c_1 from "@/assets/logo_carousel/C (1).webp";
import image_c_2 from "@/assets/logo_carousel/C (2).webp";
import image_c_3 from "@/assets/logo_carousel/C (3).webp";
import image_c_4 from "@/assets/logo_carousel/C (4).webp";
import image_c_5 from "@/assets/logo_carousel/C (5).webp";
import image_c_6 from "@/assets/logo_carousel/C (6).webp";
import image_c_7 from "@/assets/logo_carousel/C (7).webp";
import image_c_8 from "@/assets/logo_carousel/C (8).webp";
import image_c_9 from "@/assets/logo_carousel/C (9).webp";
import image_c_10 from "@/assets/logo_carousel/C (10).webp";
import image_c_11 from "@/assets/logo_carousel/C (11).webp";
import image_c_12 from "@/assets/logo_carousel/C (12).webp";
import image_c_13 from "@/assets/logo_carousel/C (13).webp";
import image_c_14 from "@/assets/logo_carousel/kfc.webp";
import image_c_15 from "@/assets/logo_carousel/my gov (2).webp";
import image_c_16 from "@/assets/logo_carousel/Queen mira.webp";
import image_c_17 from "@/assets/logo_carousel/tg.webp";
import image_c_18 from "@/assets/logo_carousel/hyundai.webp";

const DEFAULT_LOGOS = [
  image_c_1,
  image_c_2,
  image_c_4,
  image_c_6,
  image_c_7,
  image_c_8,
  image_c_9,
  image_c_10,
  image_c_11,
  image_c_12,
  image_c_13,
  image_c_14,
  image_c_15,
  image_c_16,
  image_c_17,
  image_c_18,
];

export default function LogoCarousel({
  logos = DEFAULT_LOGOS,
  speed = 50,
  grayscale = true,
  className = "",
}) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [width, setWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);

  useEffect(() => {
    const calculate = () => {
      if (!containerRef.current || !wrapperRef.current) return;

      const containerWidth = wrapperRef.current.offsetWidth;
      const contentWidth = containerRef.current.scrollWidth;

      if (!contentWidth || contentWidth === 0) return;

      const neededRepeats =
        Math.ceil(containerWidth / contentWidth) + 2;

      const safeRepeat = Math.max(2, Math.min(neededRepeats, 50));

      setRepeatCount(safeRepeat);
      setWidth(contentWidth);
    };

    const timeout = setTimeout(calculate, 100);

    window.addEventListener("resize", calculate);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculate);
    };
  }, [logos]);

  const marqueeLogos =
    Array.isArray(logos) && repeatCount > 0
      ? Array(repeatCount).fill(logos).flat()
      : logos;

  const duration = width / speed;

  return (
    <section
      ref={wrapperRef}
      className={`relative w-full bg-transparent overflow-hidden ${className}`}
    >
      {/* LEFT FADE */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[clamp(2rem,6vw,20rem)] z-10 bg-gradient-to-r from-white to-transparent" />

<div className="pointer-events-none absolute right-0 top-0 h-full w-[clamp(2rem,6vw,20rem)] z-10 bg-gradient-to-l from-white to-transparent" />

      <motion.div
        ref={containerRef}
        className="flex items-center gap-10 w-max"
        animate={{ x: [0, -width] }}
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeLogos.map((logo, i) => (
          <div
            key={i}
            className="h-20 w-40 flex items-center justify-center flex-shrink-0"
          >
            <Image
              src={logo}
              alt={`logo-${i}`}
              width={160}
              height={80}
              className={`max-h-full max-w-full object-contain transition-all duration-300`}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
