"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DEFAULT_LOGOS = [
  "/kauvery.webp",
  "/cushman.webp",
  "/lt.webp",
  "/Mask_group.webp",
  "/image 3.webp",
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

  // ✅ FIXED: define marqueeLogos
  const marqueeLogos =
    Array.isArray(logos) && repeatCount > 0
      ? Array(repeatCount).fill(logos).flat()
      : logos;

  return (
    <section
      ref={wrapperRef}
      className={`w-full bg-white overflow-hidden ${className}`}
    >
      <motion.div
        ref={containerRef}
        className="flex items-center gap-16 w-max"
        animate={{ x: [0, -width] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeLogos.map((logo, i) => (
          <div
            key={i}
            className="h-20 w-40 flex items-center justify-center flex-shrink-0"
          >
            <img
              src={logo}
              alt={`logo-${i}`}
              className={`max-h-full max-w-full object-contain ${
                grayscale ? "grayscale" : ""
              }`}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}