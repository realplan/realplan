"use client";

import Link from "next/link";
import { Badge } from "@/components/shared";
import { Button } from "../../ui";
import { GridReveal } from "@/components/ui";
import { motion, useMotionValue, useSpring } from "framer-motion";


export default function SolutionCaseStudies({ data }) {
    const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  if (!data) return null;

  const { badge, title, description, cta } = data;

  return (
    <motion.section
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="relative mb-[8rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
    >
    {/* ✅ GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GridReveal
          x={smoothX}
          y={smoothY}
          theme="golden_orange"
          radius="16.25rem"
        />
      </div>
      <div>

        {/* LEFT ALIGNED CONTENT */}
        <div className="flex flex-col items-start gap-6 lg:gap-3 max-w-[850px]">

          {/* BADGE */}
          {badge && <Badge text={badge} />}

          {/* TITLE */}
          <h2 className="text-black text-[clamp(2rem,3vw,2.3rem)] font-regular">
            {title}
          </h2>

          {/* DESCRIPTION */}
          {description && (
            <p className="text-gray-600 text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA BUTTON */}
          <Button text="Read more" variant="white" />

        </div>

      </div>
    </motion.section>
  );
}