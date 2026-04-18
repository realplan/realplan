"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const VARIANT_CONFIG = {
  default: {
    button: "bg-black text-white",
    circle: "bg-white",
    arrow: "text-black",
  },
  white: {
    button: "bg-transparent text-black border border-black",
    circle: "bg-black",
    arrow: "text-white",
  },
  glow: {
    button: "bg-[#FF8205] text-black border-2 border-[#FFAE00]",
    circle: "bg-black/80",
    arrow: "text-white",
  },
};

const Button = ({
  text,
  variant = "default",
  arrowDirection = "up", // "up" | "down"
  className = "",
  ...props
}) => {
  const config = VARIANT_CONFIG[variant] ?? VARIANT_CONFIG.default;

  const hasCustomPx = /(^|\s)px-\[/.test(className);
  const hasCustomPy = /(^|\s)py-\[/.test(className);

  const defaultPx = "pl-[1rem] pr-[0.4rem] md:pl-[1.2rem] md:pr-[0.5rem]";
  const defaultPy = "py-[0.25rem] md:py-[0.3rem]";

  // ✅ FIXED ROTATION
  const arrowRotation =
    arrowDirection === "down" ? "rotate-90" : "rotate-0";

  return (
    <motion.button
      {...props}
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      initial="initial"
      className={`
        group inline-flex items-center justify-center
        gap-[0.5rem] md:gap-[0.6rem]
        ${!hasCustomPx ? defaultPx : ""}
        ${!hasCustomPy ? defaultPy : ""}
        rounded-full
        cursor-pointer transition-all duration-300
        ${config.button} ${className}
      `}
    >
      <span className="text-[1.12rem] tracking-tight whitespace-nowrap">
        {text}
      </span>

      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 0.9 },
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className={`relative w-[1.9rem] h-[1.9rem] rounded-full flex items-center justify-center overflow-hidden ${config.circle}`}
      >
        {/* FIRST ARROW */}
        <motion.div
          variants={{ initial: { x: 0, y: 0 }, hover: { x: 24, y: -24 } }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight
            className={`w-[1.2rem] h-[1.2rem] ${config.arrow} ${arrowRotation}`}
          />
        </motion.div>

        {/* SECOND ARROW */}
        <motion.div
          variants={{ initial: { x: -24, y: 24 }, hover: { x: 0, y: 0 } }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <ArrowUpRight
            className={`w-[1.2rem] h-[1.2rem] ${config.arrow} ${arrowRotation}`}
          />
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default Button;