"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { Badge } from "@/components/shared";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SolutionHero({ data }) {
  const image = data?.image;

  const words = data.title.split(" ");
  const firstLine = words.slice(0, 3).join(" ");
  const secondLine = words.slice(3).join(" ");

  return (
    <section
      className="relative py-[clamp(3rem,6vw,6.8rem)]"
    >
      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-0 pointer-events-none global-grid">

      </div>

      <div className="relative z-20 px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col gap-[1rem]">
            <Badge text={"Solutions"} />

            <h1 className="leading-[1.1] font-normal">
              <span className="block text-[clamp(1.8rem,4vw,2.8rem)] lg:text-[clamp(2.8rem,3vw,3.5rem)] text-[#2A2A2A]">
                {firstLine}
              </span>

              {secondLine && (
                <span className="block mt-1 text-[clamp(1.8rem,4vw,2.8rem)] lg:text-[clamp(2.8rem,3vw,3.5rem)] text-gray-400">
                  {secondLine}
                </span>
              )}
            </h1>

            <p className="text-[clamp(0.95rem,1.2vw,1.2rem)] text-gray-500 leading-relaxed">
              {data.subtitle}
            </p>

            {data.points && (
              <ul className="flex flex-col gap-3 mt-2">
                {data.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-black text-sm sm:text-base lg:text-[1.1rem] leading-relaxed"
                  >
                    <span className="mt-[0.45em] w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#FF8205] rounded-full shrink-0"></span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-4">
              <Button text={data?.cta?.text || "Get started"} />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex">
            <div className="relative w-full aspect-square lg:aspect-auto lg:flex-1 rounded-xl overflow-hidden">
              {image && (
                <Image
                  src={image}
                  alt={data.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 720px"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}