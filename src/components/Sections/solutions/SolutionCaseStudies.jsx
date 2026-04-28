"use client";

import Link from "next/link";
import { Badge } from "@/components/shared";
import { Button } from "../../ui";
import { motion, useMotionValue, useSpring } from "framer-motion";


export default function SolutionCaseStudies({ data }) {

  if (!data) return null;

  const { badge, title, description, cta } = data;

  return (
    <section
      className="relative mb-[8rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
    >
    {/* ✅ GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none">

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
    </section>
  );
}