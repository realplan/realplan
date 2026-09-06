"use client";

import { Button, GridReveal} from "../../ui";
import { SolutionCarousel, Header } from "../../shared";
import {
  useMotionValue,
  useSpring,
  motion,
} from "framer-motion";
import star from "../../../assets/star.png";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Frame_1 from "@/assets/solution_carousel/Location Analysis.webp";
import Frame from "@/assets/solution_carousel/Market Research.webp";
import Frame_2 from "../../../assets/solution_carousel/Market Feasibility.webp";
import Frame_3 from "../../../assets/solution_carousel/Real Estate Research.webp";
import Frame_4 from "@/assets/solution_carousel/Socio Economic.webp";
import political_research from "@/assets/solution_carousel/Political Consulting.webp";
import logo from "../../../assets/Company_Logo/logo_white.webp";
import { useRouter } from "next/navigation";
import tick from "../../../assets/tick.webp";
import gsap from "gsap";
import client from "@/assets/home/client_reveal.webp"


export default function HomePage({ startReveal = false }) {
    const router = useRouter();

  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const revealScopeRef = useRef(null);
  const badgeRef = useRef(null);
  const buttonRef = useRef(null);
  const headingMobileRefs = useRef([]);
  const headingDesktopRefs = useRef([]);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const headingTargets = window.matchMedia("(min-width: 1024px)").matches
        ? headingDesktopRefs.current
        : headingMobileRefs.current;

      const revealTargets = [
        badgeRef.current,
        ...headingTargets,
        ...paragraphRefs.current,
        buttonRef.current,
      ].filter(Boolean);

      gsap.set(revealTargets, {
        autoAlpha: 0,
        x: -18,
        clipPath: "inset(0 100% 0 0)",
      });

      if (!startReveal) {
        return;
      }

      const timeline = gsap.timeline({
        defaults: {
          duration: 0.45,
          ease: "power2.out",
        },
      });

      timeline.to(badgeRef.current, {
        autoAlpha: 1,
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 0.54,
      });

      timeline.to(
        headingTargets,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.12,
        },
        "-=0.32"
      );

      timeline.to(
        paragraphRefs.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.14,
        },
        "-=0.14"
      );

      timeline.to(
        buttonRef.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.58,
        },
        "-=0.48"
      );
    }, revealScopeRef);

    return () => ctx.revert();
  }, [startReveal]);

  return (
   <motion.section
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
        className="
          mt-10 lg:mt-[8em]
          relative z-20
          grid
          grid-cols-1
          lg:grid-cols-[minmax(0,1fr)_minmax(0,clamp(420px,40vw,520px))]
          w-full
         px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]
        "
      >
        {/* LEFT */}
        <div ref={revealScopeRef} className="flex flex-col gap-6 lg:gap-8 min-w-0">
          <div
  ref={badgeRef}
  className="inline-flex items-center justify-center gap-2 border border-white/60 text-white px-4 py-1 rounded-full w-fit will-change-transform"
>
  <Image
    src={tick}
    alt="tick"
    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
  />
  <span className="text-sm sm:text-base">
    Your Trusted Market Research Partner
  </span>
</div>

         <h1
  className="
  text-[clamp(2.05rem,4.5vw,3.5rem)]
  lg:text-[clamp(3rem,3.7vw,7.35rem)]
  leading-[1.1]
  text-[#2A2A2A]
  overflow-hidden
"
>
  {/* MOBILE */}
  <span
    ref={(el) => {
      headingMobileRefs.current[0] = el;
    }}
    className="block lg:hidden whitespace-nowrap will-change-transform"
  >
    INDIA&apos;S LEADING MARKET
  </span>
  <span
    ref={(el) => {
      headingMobileRefs.current[1] = el;
    }}
    className="block lg:hidden whitespace-nowrap will-change-transform"
  >
    RESEARCH & BUSINESS
  </span>
  <span
    ref={(el) => {
      headingMobileRefs.current[2] = el;
    }}
    className="block lg:hidden whitespace-nowrap will-change-transform"
  >
    CONSULTING FIRM
  </span>

  {/* DESKTOP */}
  <span
    ref={(el) => {
      headingDesktopRefs.current[0] = el;
    }}
    className="hidden lg:block will-change-transform"
  >
    INDIA&apos;S LEADING
  </span>
  <span
    ref={(el) => {
      headingDesktopRefs.current[1] = el;
    }}
    className="hidden lg:block will-change-transform"
  >
    MARKET RESEARCH &
  </span>
  <span
    ref={(el) => {
      headingDesktopRefs.current[2] = el;
    }}
    className="hidden lg:block will-change-transform"
  >
    BUSINESS CONSULTING FIRM
  </span>
</h1>

<h3
  className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/90
  leading-relaxed
  will-change-transform overflow-y-hidden
">
  <span
    ref={(el) => {
      paragraphRefs.current[0] = el;
    }}
    className="block will-change-transform"
  >
    Real Plan Consulting delivers in-depth market research, feasibility studies, and
  </span>

  <span
    ref={(el) => {
      paragraphRefs.current[1] = el;
    }}
    className="block will-change-transform"
  >
    strategic insights that help businesses understand markets, uncover opportunities,
  </span>

  <span
    ref={(el) => {
      paragraphRefs.current[2] = el;
    }}
    className="block will-change-transform"
  >
    and make confident decisions for sustainable growth.
  </span>
</h3>
         <div
  ref={buttonRef}
  className="will-change-transform"
>
  <Button
  text="Let's talk about your project"
  onClick={() => router.push("/contact_us")}
  className="py-[clamp(0.8rem,2vw,0.6rem)] mb-[1rem]"
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
                  description: "Know your market better",
                  slug: "market-research",
                },
            {
                  image: Frame_1,
                  title: "Location Analysis",
                  description: "Your business needs great locations",
                  slug: "location-analysis",
                },
                {
                  image: Frame_2,
                  title: "Market Feasibility",
                  description: "Will Your Business Idea Pass The Feasibility Test?",
                  slug: "market-feasibility-studies",
                },
                {
                  image: Frame_3,
                  title: "Real Estate Research",
                  description: "Your Real Estate Needs, Satisfied!",
                  slug: "real-estate-research",
                },
            {
                  image: Frame_4,
                  title: "Socio-Economic Research",
                  description: "Voices of our society",
                  slug: "socio-economic-research",
                },
             {
                  image: political_research,
                  title: "Political Research",
                  description: "Policies. Polls. People. Perception.",
                  slug: "political-research",
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

          <div className="flex items-center">
  <Image
    src={client}
    alt="Clients"
    className="object-contain"
    style={{
      width: "clamp(4.5rem, 6vw, 7.5rem)",
      height: "auto",
    }}
  />
</div>
        </div>
      </div>
        </div>
        </div>

    </motion.section>
  );
}
