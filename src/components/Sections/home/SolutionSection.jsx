"use client";

import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { Badge } from "@/components/shared";
import { Button, GridReveal } from "@/components/ui";
import { useRouter } from "next/navigation";

const DESKTOP_VIEWPORT_HEIGHT = 720;

const cards = [
  {
    id: "01",
    title: "Market Research",
    description: "Turn market insights into confident business decisions.",
    href: "/solutions/market-research",
  },
  {
    id: "02",
    title: "Location Analysis",
    description:
      "Location is the key to most businesses, and we do it better for you.",
    href: "/solutions/location-analysis",
  },
  {
    id: "03",
    title: "Market Feasibility",
    description: "Assess demand, risk, and viability before committing.",
    href: "/solutions/market-feasibility-studies",
  },
  {
    id: "04",
    title: "Real Estate Research",
    description: "Research that supports confident real estate planning.",
    href: "/solutions/real-estate-research",
  },
  {
    id: "05",
    title: "Socio-Economic Research",
    description: "Evidence-based insights into socio-economic conditions.",
    href: "/solutions/socio-economic",
  },{
    id: "06",
    title: "Political Research",
    description: "We analyze political and policy environments to help organisations.",
    href: "/solutions/political-research",
  },
];

export default function SolutionSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const revealScopeRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRefs = useRef([]);

  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const router = useRouter();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const measureLayout = useCallback(() => {
    if (trackRef.current) {
      setScrollRange(trackRef.current.scrollWidth);
    }
    if (viewportRef.current) {
      setViewportW(viewportRef.current.offsetWidth);
    }
  }, []);

  useLayoutEffect(() => {
    if (!isMobile) measureLayout();
  }, [measureLayout, isMobile]);

  useLayoutEffect(() => {
    if (isMobile) return;
    if (!trackRef.current && !viewportRef.current) return;
    const resizeObserver = new ResizeObserver(() => measureLayout());
    if (trackRef.current) resizeObserver.observe(trackRef.current);
    if (viewportRef.current) resizeObserver.observe(viewportRef.current);
    return () => resizeObserver.disconnect();
  }, [measureLayout, isMobile]);

  useEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const revealTargets = [
        badgeRef.current,
        ...headingRefs.current,
      ].filter(Boolean);

      gsap.set(revealTargets, {
        autoAlpha: 0,
        y: -22,
        clipPath: "inset(0 0 100% 0)",
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.9,
          ease: "power2.out",
        },
      });

      timeline.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.78,
      });

      timeline.to(
        headingRefs.current,
        {
          autoAlpha: 1,
          y: 0,
          clipPath: "inset(0 0 0% 0)",
          stagger: 0.14,
        },
        "-=0.36"
      );

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer?.disconnect();
          }
        },
        {
          threshold: 0.45,
          rootMargin: "0px 0px -18% 0px",
        }
      );

      if (revealScopeRef.current) {
        observer.observe(revealScopeRef.current);
      }
    }, revealScopeRef);

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(scrollRange - viewportW, 0);

  const transform = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const progressScale = useSpring(scrollYProgress, {
    damping: 30,
    mass: 0.45,
    stiffness: 120,
  });

  const spring = useSpring(transform, {
    damping: 40,
    mass: 0.5,
    stiffness: 80,
  });

  const sectionHeight = maxTranslate + DESKTOP_VIEWPORT_HEIGHT;
  return (
 <section
  ref={sectionRef}
  className="relative w-full mb-[3rem] [overflow-x:clip]"
  onPointerMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }}
  style={{
    height: isMobile
      ? "auto"
      : sectionHeight
      ? `${sectionHeight}px`
      : `${DESKTOP_VIEWPORT_HEIGHT * 2}px`,
  }}
>
    <div className="fixed inset-0 z-0 pointer-events-none">
    <GridReveal
      x={smoothX}
      y={smoothY}
      theme="golden_orange"
      radius="16.25rem"
    />
  </div>
      <div
        className={`${isMobile ? "" : "sticky top-[20vh]"} relative z-10 flex flex-col`}
      >
        {/* MAIN CARD */}
        <div
          ref={viewportRef}
          className="relative overflow-hidden rounded-3xl flex flex-col"
          style={isMobile ? undefined : { height: `${DESKTOP_VIEWPORT_HEIGHT}px` }}
        >
          {/* ✅ LOADER INSIDE CARD */}
          <div className="relative z-10 w-full">
            <div className="h-[6px] w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full w-full bg-gradient-to-r from-[#FFD900] via-[#FF8205] to-[#FA520F] shadow-[0_0_18px_rgba(255,130,5,0.45)]"
                style={{
                  scaleX: progressScale,
                  transformOrigin: "left center",
                }}
              />
            </div>
          </div>
        <div className="absolute inset-0 pointer-events-none z-[1]">
          <div className="absolute inset-0 bg-black" />

          <div
            className="absolute bottom-0 left-0 right-0 h-[80%]"
            style={{
              background:
                "linear-gradient(240deg, #FFD900 0%, #FF8205 35%, #FA520F 65%, transparent 100%)",
              opacity: 0.85,
              filter: "blur(30px)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-[80%]"
            style={{
              background:
                "radial-gradient(ellipse 90% 35% at 55% 45%, #FF8205 0%, #FA520F 40%, transparent 75%)",
              filter: "blur(60px)",
              opacity: 0.55,
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-[80%]"
            style={{
              background:
                "radial-gradient(ellipse 60% 30% at 25% 45%, #8B1500 0%, #CC2800 55%, transparent 85%)",
              filter: "blur(65px)",
              opacity: 0.65,
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-[80%]"
            style={{
              background:
                "radial-gradient(ellipse 55% 28% at 75% 45%, #CC2800 0%, #FA520F 55%, transparent 90%)",
              filter: "blur(65px)",
              opacity: 0.55,
            }}
          />

          <div
            className="absolute bottom-0 left-0 right-0 h-[80%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 100% 100%, rgba(255,130,5,0.25) 0%, rgba(250,82,15,0.15) 30%, transparent 75%)",
              filter: "blur(75px)",
              opacity: 0.6,
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, #000 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, transparent 80%)",
            }}
          />
        </div>

        {/* HEADER */}
        <div
          ref={revealScopeRef}
          className="relative z-10 flex w-full flex-col items-center px-[clamp(1rem,2vw+0.5rem,4rem)] pt-8 text-center xl:px-[6.2rem] 2xl:px-[9rem] mt-[3rem] gap-[clamp(0.8rem,2vw,1.25rem)]"
        >
  <div ref={badgeRef} className="will-change-transform">
    <Badge text="Our Services" />
  </div>

  <h2 className="text-[clamp(1.4rem,1.5vw+0.8rem,3rem)] text-white leading-[1.2] lg:leading-[1.25] xl:leading-[1.3]">
    <span
      ref={(el) => {
        headingRefs.current[0] = el;
      }}
      className="block will-change-transform"
    >
      Build smarter projects with data-driven
    </span>
    <span
      ref={(el) => {
        headingRefs.current[1] = el;
      }}
      className="block will-change-transform"
    >
      insights with us
    </span>
  </h2>
</div>

        {/* MOBILE GRID */}
        {isMobile ? (
<div className="relative z-10 mt-6 flex flex-col gap-4 px-[clamp(1rem,2vw+0.5rem,4rem)] pb-10 lg:flex-row lg:flex-wrap xl:px-[6.2rem] 2xl:px-[9rem]">            {cards.map((card, index) => (
              <article
                key={card.id}
                onClick={() => router.push(card.href)}
                className="group cursor-pointer flex flex-col justify-between w-full rounded-lg border border-black/10 bg-gray-200 px-4 py-4 text-black transition-all duration-300 active:scale-95"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold leading-tight text-[clamp(1.1rem,2.5vw,1.125rem)]">
  {card.title}
</h3>
                </div>

                <p className="mt-[4.625rem] text-[clamp(0.9rem,2.2vw,0.95rem)] leading-relaxed font-normal">
  {card.description}
</p>
              </article>
            ))}
          </div>
        ) : (
          /* DESKTOP */
          <div className="relative z-10 mt-[clamp(0.1rem,0.5vw,0.5rem)] flex-1 overflow-hidden pb-2">
            <motion.div
              ref={trackRef}
              style={{ x: spring }}
              className="flex h-full min-w-max items-center gap-6 px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
            >
              {cards.map((card) => (
                <article
                  key={card.id}
                  onClick={() => router.push(card.href)}
                  className="group cursor-pointer flex h-[21rem] w-[clamp(22rem,30vw,40rem)] shrink-0 flex-col rounded-lg border border-black/10 bg-gray-200 p-8 text-black transition-all duration-300 hover:bg-[#FF8205] hover:scale-[1.05]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-[clamp(1.2rem,2vw,1.75rem)] leading-tight">
                      {card.title}
                    </h3>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(card.href);
                      }}
                    >
                      <Button text="Know more" />
                    </div>
                  </div>

                  <div className="flex-1" />

                  <p className="max-w-md text-[clamp(1rem,1vw,1.25rem)] leading-relaxed font-medium">
                    {card.description}
                  </p>
                </article>
              ))}
            </motion.div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
}
