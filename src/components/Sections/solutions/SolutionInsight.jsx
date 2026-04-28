"use client";

import Image from "next/image";
import { Badge } from "@/components/shared";

export default function SolutionInsight({ data }) {
  if (!data) return null;

  const { badge, title, description, quote, grid } = data;
  const primaryImage = grid?.primary?.image;

  return (
    <section className="relative text-white py-[clamp(3rem,6vw,6rem)] rounded-3xl overflow-hidden px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">

      {/* BASE BLACK */}
      <div className="absolute inset-0 bg-black pointer-events-none z-0" />

      {/* 🔥 MAIN GLOW (RIGHT-BOTTOM ORIGIN) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(240deg, #FFD900 0%, #FF8205 35%, #FA520F 65%, transparent 100%)",
          opacity: 0.85,
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 35% at 55% 45%, #FF8205 0%, #FA520F 40%, transparent 75%)",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 30% at 25% 45%, #8B1500 0%, #CC2800 55%, transparent 85%)",
          filter: "blur(65px)",
          opacity: 0.65,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 28% at 75% 45%, #CC2800 0%, #FA520F 55%, transparent 90%)",
          filter: "blur(65px)",
          opacity: 0.55,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-[80%] pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(255,130,5,0.25) 0%, rgba(250,82,15,0.15) 30%, transparent 75%)",
          filter: "blur(75px)",
          opacity: 0.6,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, transparent 80%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">

        <div className="flex flex-col gap-8 lg:gap-12">

          {/* ✅ FIXED TOP SECTION (NO GRID, NO EMPTY STRAY LINE) */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">

            {/* LEFT */}
            <div className="flex flex-col gap-6 max-w-[700px]">

              {badge && <Badge text={badge} />}

              <h2 className="text-[clamp(1.9rem,2.85vw,2.375rem)] font-medium leading-[1.2]">
                {title}
              </h2>

              <p className="text-gray-300 text-[clamp(0.88rem,1.056vw,1.21rem)] leading-relaxed">
                {description}
              </p>

            </div>

            {/* RIGHT */}
            {quote?.highlight && (
              <div className="flex flex-col lg:items-end text-left lg:text-right max-w-[500px]">

                <p className="text-[#FF8205] text-[clamp(0.864rem,1.0368vw,1.08rem)]">
                  {quote.highlight}
                </p>

                {quote?.author && (
                  <p className="text-white">— {quote.author}</p>
                )}

              </div>
            )}

          </div>

        </div>

        {/* GRID (UNCHANGED) */}
        {grid && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-2">

            <div className="bg-white text-black rounded-2xl p-4 flex flex-col h-full">

              <h3 className="text-[#FF8205] font-medium text-[clamp(1.957rem,2.266vw,2.3rem)] mb-[8rem]">
                {grid.primary?.title}
              </h3>

              <p className="text-black/60">
                {grid.primary?.description}
              </p>

              {primaryImage && (
                <div className="mt-6 relative w-full flex-1 aspect-[16/9] rounded-lg overflow-hidden">
                  <Image
                    src={primaryImage}
                    alt={grid.primary?.title || "primary image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

            </div>

            <div className="flex flex-col gap-2">

              <div className="bg-white text-black rounded-2xl p-4 flex-1">
                <h3 className="text-[1.75rem] mb-[8rem] font-semibold">
                  {grid.qualitative?.title}
                </h3>
                <p className="text-black/60">
                  {grid.qualitative?.description}
                </p>
              </div>

              <div className="bg-white text-black rounded-2xl p-4 flex-1">
                <h3 className="text-[1.75rem] mb-[8rem] font-semibold">
                  {grid.quantitative?.title}
                </h3>
                <p className="text-black/60">
                  {grid.quantitative?.description}
                </p>
              </div>

            </div>

            <div className="bg-white text-black rounded-2xl p-4 flex flex-col h-full">

              {grid.secondary?.image && (
                <div className="relative w-full flex-1 min-h-[220px] rounded-lg overflow-hidden">
                  <Image
                    src={grid.secondary.image}
                    alt={grid.secondary?.title || "secondary image"}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="mt-4">

                <h3 className="text-[#FF8205] font-medium text-[clamp(1.957rem,2.266vw,2.3rem)] mb-[8rem]">
                  {grid.secondary?.title}
                </h3>

                <p className="text-black/60">
                  {grid.secondary?.description}
                </p>

              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}