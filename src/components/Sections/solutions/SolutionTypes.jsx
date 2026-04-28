"use client";

import { Badge } from "@/components/shared";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SolutionTypes({ data }) {

  if (!data) return null;

  const { badge, title, subtitle, items } = data;
  console.log("last",items)

  return (
    <section
      className="relative py-[clamp(3rem,6vw,6rem)] px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
    >
      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none">
      </div>

      {/* HEADER */}
      <div className="relative z-20">
        <div className="flex flex-col items-center text-center gap-6 lg:gap-8">
          {badge && <Badge text={badge} />}

          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] text-black font-regular leading-[1.3] max-w-[900px]">
            {title}
          </h2>

          {subtitle && (
            <p className="text-gray-500 text-[clamp(1rem,1.2vw,1.375rem)] max-w-[700px] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[3rem]">
          {items?.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="w-full h-full"
                  style={{
                    background: `linear-gradient(
                      135deg,
                      rgba(250, 82, 15, 0.85) 6%,
                      rgba(255, 130, 5, 0.85) 24%,
                      rgba(255, 174, 0, 0.85) 52%,
                      rgba(255, 217, 0, 0.85) 76%,
                      rgba(255, 240, 194, 0.85) 100%
                    )`,
                  }}
                />
              </div>

              {/* CARD */}
              <div className="relative z-10 bg-[#EDEDED] p-4 sm:p-5 flex flex-col h-full rounded-2xl transition-colors duration-300 group-hover:bg-transparent">

                {/* IMAGE (NOW FULLY DATA DRIVEN) */}
                {item?.image?.src ? (
  <div className="relative w-full h-[220px] mb-4 overflow-hidden rounded-xl">
    <Image
      src={item.image.src}
      alt={item.title || "image"}
      fill
      className="object-cover"
    />
  </div>
) : null}

                <div className="flex flex-col gap-2">
                  <h3 className="text-[#FF8205] text-[1.4rem] font-regular leading-snug group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-[1rem] leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}