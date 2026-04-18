"use client";

import Image from "next/image";
import { Badge } from "@/components/shared";
import insightImg from "@/assets/solution/market_research_1.webp";
import { GridReveal } from "@/components/ui";
import { motion, useMotionValue, useSpring } from "framer-motion";

// IMAGE MAP
const IMAGE_MAP = {
  frame1: insightImg,
};

export default function SolutionInsight({ data }) {
  if (!data) return null;

  const { badge, title, description, quote, grid } = data;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // FIX: properly resolve primary image
  const primaryImage = grid?.primary?.image;

  return (
    <motion.section
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="relative bg-black text-white py-[clamp(3rem,6vw,6rem)] section-full-bleed overflow-hidden px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
    >
      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GridReveal x={smoothX} y={smoothY} theme="dark" radius="16.25rem" />
      </div>

      <div className="relative z-20 page-container">
        {/* TOP SECTION */}
        <div className="flex flex-col gap-8 lg:gap-12">
          {badge && (
            <div className="mb-2">
              <Badge text={badge} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div className="flex flex-col gap-4 sm:gap-6 max-w-[700px]">
              <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-medium leading-[1.2]">
                {title}
              </h2>

              <p className="text-gray-300 text-[clamp(1rem,1.2vw,1.375rem)] leading-relaxed">
                {description}
              </p>
            </div>

            {quote?.highlight && (
              <div className="flex flex-col gap-4 lg:items-end text-left lg:text-right max-w-[500px] ml-auto">
                <p className="text-[#FF8205] text-[clamp(1rem,1.2vw,1.25rem)] leading-relaxed">
                  {quote.highlight}
                </p>

                {quote?.author && (
                  <p className="text-white text-[1rem] sm:text-base">
                    — {quote.author}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* GRID SECTION */}
        {grid && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:items-stretch">
            {/* PRIMARY */}
            <div className="bg-white text-black rounded-2xl p-6 flex flex-col h-full">
              <div>
                <h3 className="text-[#FF8205] text-[2.5rem] font-medium mb-10">
                  {grid.primary?.title}
                </h3>

                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  {grid.primary?.description}
                </p>
              </div>

              {/* IMAGE FIXED */}
              {primaryImage && (
                <div className="mt-6 relative w-full flex-1 min-h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src={primaryImage}
                    alt={grid.primary?.title || "primary image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* MIDDLE */}
            <div className="flex flex-col gap-2 h-full">
              <div className="bg-white text-black rounded-2xl p-6 flex-1">
                <h3 className="text-gray-900 text-[1.75rem] font-medium mb-10">
                  {grid.qualitative?.title}
                </h3>

                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  {grid.qualitative?.description}
                </p>
              </div>

              <div className="bg-white text-black rounded-2xl p-6 flex-1">
                <h3 className="text-gray-900 text-[1.75rem] font-medium mb-10">
                  {grid.quantitative?.title}
                </h3>

                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  {grid.quantitative?.description}
                </p>
              </div>
            </div>

            {/* SECONDARY */}
            <div className="bg-white text-black rounded-2xl p-4 flex flex-col h-full">
              {grid.secondary?.image && (
                <div className="relative w-full flex-1 min-h-[220px] rounded-xl overflow-hidden">
                  <Image
                    src={IMAGE_MAP[grid.secondary.image]}
                    alt={grid.secondary?.title || "secondary image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="mt-4">
                <h3 className="text-[#FF8205] text-[2.2rem] font-medium mb-10">
                  {grid.secondary?.title}
                </h3>

                <p className="text-gray-600 text-[1.125rem] leading-relaxed">
                  {grid.secondary?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
}