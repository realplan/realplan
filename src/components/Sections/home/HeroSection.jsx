"use client";

import { Button, GridReveal} from "../../ui";
import { SolutionCarousel, Header } from "../../shared";
import {
  useMotionValue,
  useSpring,
  motion,
  AnimatePresence,
} from "framer-motion";
import star from "../../../assets/star.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Frame_1 from "@/assets/solution_carousel/Frame_1.webp";
import Frame from "@/assets/solution_carousel/market_research.webp";
import Frame_2 from "../../../assets/solution_carousel/Frame_2.webp";
import Frame_3 from "../../../assets/solution_carousel/Frame_3.webp";
import Frame_4 from "@/assets/solution_carousel/Frame_4.webp";
import logo from "../../../assets/Company_Logo/logo_white.webp";
import { useRouter } from "next/navigation";
import tick from "../../../assets/tick.webp";


export default function HomePage() {
    const router = useRouter();

  const [showContact, setShowContact] = useState(false);
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });


  const [isOpen, setIsOpen] = useState(false);

  return (
   <motion.section
  layout
  transition={{ type: "spring", stiffness: 80, damping: 20 }}
  className="relative flex flex-col overflow-clip rounded-2xl home-bg section-full-bleed mt-[0.3rem]"
>

  {/* ✅ SINGLE COORDINATE ROOT (FIXED) */}
  <div
    className="relative w-full h-full"
    onPointerMove={(e) => {
      const rect = e.currentTarget.getBoundingClientRect();

      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }}
  >
      <div className="absolute inset-0 z-10 pointer-events-none">
        <GridReveal
          x={smoothX}
          y={smoothY}
          theme="golden_orange"
          radius="16.25rem"
        />
      </div>

  <div className="relative z-50">
    <Header
  logo={logo}
/>

      {/* CONTENT */}
      <motion.div
        layout
        className="
          mt-10 lg:mt-[8em]
          relative z-20
          grid
          grid-cols-1
          lg:grid-cols-[minmax(0,1fr)_minmax(0,clamp(420px,40vw,520px))]
          w-full
          gap-10
         px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]
        "
      >
        {/* LEFT */}
        <div className="flex flex-col gap-6 lg:gap-8 min-w-0">
          <div className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-4 py-1 rounded-full w-fit">
  <Image
    src={tick}
    alt="tick"
    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
  />
  <span className="text-sm sm:text-base">
    Trusted Market Research Partner Across India
  </span>
</div>

         <h1
  className="
    text-[clamp(2.05rem,4.5vw,3.5rem)]
    lg:text-[clamp(3rem,3.7vw,7.35rem)]
    leading-[1.1]
    text-[#2A2A2A]
  "
>
  {/* MOBILE */}
  <span className="block lg:hidden whitespace-nowrap">
    INDIA'S LEADING MARKET
  </span>
  <span className="block lg:hidden whitespace-nowrap">
    RESEARCH & STRATEGY
  </span>
  <span className="block lg:hidden whitespace-nowrap">
    CONSULTING FIRM
  </span>

  {/* DESKTOP */}
  <span className="hidden lg:block whitespace-nowrap">
    INDIA'S LEADING
  </span>
  <span className="hidden lg:block whitespace-nowrap">
    MARKET RESEARCH &
  </span>
  <span className="hidden lg:block whitespace-nowrap">
    STRATEGY CONSULTING FIRM
  </span>
</h1>

<h3 className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/90
  leading-relaxed
">
  Real Plan Consulting delivers in-depth market research, feasibility studies, and{" "}

  <span className="hidden lg:inline">
    <br />
  </span>

  strategic insights that help businesses understand markets, uncover opportunities,{" "}

  <span className="hidden lg:inline">
    <br />
  </span>

  and make confident decisions for sustainable growth.
</h3>
         <div>
  <Button
  text="Let's talk about your project"
  onClick={() => router.push("/contact_us")}
  className="py-[clamp(0.8rem,2vw,0.6rem)]"
/>
</div>
        </div>

        {/* RIGHT - MOBILE FIX: REMOVE OVERFLOW ISSUE */}
        <div className="mt-0 lg:mt-[12rem] flex items-start justify-center lg:justify-end">
          <div className="w-full max-w-[520px] lg:w-[21vw]">
            <SolutionCarousel
              interval={2500}
              items={[
                {
                  image: Frame,
                  title: "Market Research",
                  description: "Turn insights into confident decisions.",
                  slug: "market-research",
                },
            {
                  image: Frame_1,
                  title: "Location Analysis",
                  description: "Build scalable growth plans.",
                  slug: "location-analysis",
                },
                {
                  image: Frame_2,
                  title: "Market Feasibility",
                  description: "Build scalable growth plans.",
                  slug: "market-feasability-studies",
                },
                {
                  image: Frame_3,
                  title: "Real Estate Research",
                  description: "Convert data into actionable insights.",
                  slug: "real-estate",
                },
            {
                  image: Frame_4,
                  title: "Socio-Economic Research",
                  description: "Convert data into actionable insights.",
                  slug: "socio-economic",
                },
              ]}
            />
          </div>
        </div>
      </motion.div>

      {/* BOTTOM STRIP */}
      <div
  className="
    w-full
    px-4 sm:px-6 lg:px-7
    mt-7 mb-7
    flex flex-row
    items-center
    justify-between
    gap-4
    px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]
  "
>
        <div className="flex-1 h-[2px] bg-black/40 " />
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[#2A2A2A]">
            <img src={star.src} alt="star" className="w-4 h-4" />
            <span className="font-normal text-[clamp(0.9rem,1.2vw,1.2rem)]">
  5.0
</span>
          </div>

          <div className="w-[1px] h-4 bg-[#2A2A2A]/60" />

          <div className="flex -space-x-3">
            <img src="/avatar1.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/avatar2.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="/avatar3.jpg" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          </div>
        </div>
      </div>
        </div>
        </div>

    </motion.section>
  );
}