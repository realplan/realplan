"use client";

import { Badge } from "../../shared";
import { Button } from "../../ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { sectorsData } from "@/data/sectorsData";
import {GridReveal} from "../../ui";
import {
  motion,
  useMotionValue,
  useSpring
} from "framer-motion";


export default function SectorSection() {
    const router = useRouter();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  return (
    <motion.div
  onPointerMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }}
  className="relative px-[clamp(1rem,4vw,6rem)] xl:px-[clamp(6rem,5vw,9rem)] mt-[clamp(4rem,6vw,6rem)] overflow-hidden"
>
    <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">
  <GridReveal
    x={smoothX}
    y={smoothY}
    theme="golden_orange"
    radius="16.25rem"
  />
</div>

      {/* Top */}
      <div className="hidden sm:flex sm:items-center sm:justify-between">
        <Badge text="Industries We Serve" />
        <Button text="More sectors" variant="white" onClick={() => router.push("/sectors")} />
      </div>

      <div className="sm:hidden">
        <Badge text="Industries We Serve" />
      </div>

      {/* Heading */}
<h2 className="text-[clamp(1.55rem,1.2vw+1rem,3rem)] text-[#6B6B6B] leading-[clamp(1.2,1.2vw,1.3)] mt-[clamp(0.5rem,0.8vw,0.9rem)]">        <span className="text-black">
          Sectors we are specialise in
        </span>
      </h2>

<h3 className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/90
  leading-relaxed
  mt-[0.7rem]
  lg:mt-[0.6rem]
">        Deep expertise across diverse sectors delivering measurable results.
      </h3>

      <div className="sm:hidden mt-[clamp(0.8rem,1vw,1.2rem)]">
        <Button text="More sectors" variant="white" onClick={() => router.push("/sectors")} />
      </div>

      {/* GRID */}
      <div className="mt-[clamp(2rem,3vw,3rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">

        {sectorsData.map((item, i) => {
          const total = sectorsData.length;
          const isLastRowTwo = total % 3 === 2 && i >= total - 2;

          return (
            <div
              key={i}
              className={`
                group relative rounded-2xl overflow-hidden flex flex-col h-full
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${isLastRowTwo ? "lg:col-span-3" : "lg:col-span-2"}
              `}
            >
              {/* Gradient */}
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

              {/* Content */}
              <div className="relative z-10 bg-[#EDEDED] p-4 sm:p-5 flex flex-col h-full rounded-2xl group-hover:bg-transparent transition-colors duration-300">

                {/* Image */}
                <div className="relative w-full h-[clamp(16.2rem,20vw,22rem)] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover scale-[1.12]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#FF8205] text-[clamp(1.2rem,1vw+0.8rem,1.75rem)] font-medium leading-snug group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[clamp(0.85rem,0.55vw+0.63rem,1rem)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Pill */}
                <div className="mt-auto">
                  <div
                    className="
                      inline-flex items-center justify-center
                      px-[1rem]
                      h-[clamp(1.6rem,1.5vw,1.9375rem)]
                      rounded-full
                      border border-black
                      bg-transparent text-black
                      text-[clamp(0.8rem,0.5vw+0.5rem,0.95rem)]
                      transition-colors duration-300
                      group-hover:border-white group-hover:text-white
                      whitespace-nowrap
                    "
                  >
                    {item.tag}
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </motion.div>
  );
}