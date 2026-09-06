"use client";

import Image from "next/image";
import { Badge } from "@/components/shared";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SolutionInsight({ data }) {
  if (!data) return null;

  const { badge, title, description, quote, grid } = data;
  const primaryImage = grid?.primary?.image;

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const quoteRef = useRef(null);

  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textTargets = [
        badgeRef.current,
        titleRef.current,
        descRef.current,
        quoteRef.current,
      ].filter(Boolean);

      gsap.set(textTargets, {
        autoAlpha: 0,
        clipPath: "inset(0 0 100% 0)",
      });

      gsap.set(cardRefs.current, {
        autoAlpha: 0,
        clipPath: "inset(0 0 100% 0)",
      });

      const tl = gsap.timeline({ paused: true });

      // TEXT
      tl.to(badgeRef.current, {
        autoAlpha: 1,
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
      });

      tl.to(
        titleRef.current,
        {
          autoAlpha: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
        },
        "-=0.2"
      );

      tl.to(
        descRef.current,
        {
          autoAlpha: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
        },
        "-=0.2"
      );

      if (quoteRef.current) {
        tl.to(
          quoteRef.current,
          {
            autoAlpha: 1,
            clipPath: "inset(0 0 0% 0)",
            duration: 0.5,
          },
          "-=0.2"
        );
      }

      // CARDS STAGGER ANIMATION
      tl.to(
        cardRefs.current,
        {
          autoAlpha: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.2"
      );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white py-[clamp(3rem,6vw,6rem)] rounded-3xl overflow-hidden px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
    >
      <div className="absolute inset-0 bg-black pointer-events-none z-0" />
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

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex flex-col gap-8 lg:gap-12">

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 w-full">

            <div className="flex flex-col gap-6 max-w-[700px]">

              {badge && (
                <div ref={badgeRef}>
                  <Badge text={badge} />
                </div>
              )}

              <h2 ref={titleRef} className="text-[clamp(1.9rem,2.85vw,2.375rem)] font-medium leading-[1.2]">
                {title}
              </h2>

              <p ref={descRef} className="text-gray-300 text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed">
                {description}
              </p>

            </div>

            {quote?.highlight && (
              <div ref={quoteRef} className="flex flex-col lg:items-end text-right max-w-[500px]">
                <p className="text-[#FF8205] text-[clamp(0.9rem,1.4vw,1.4rem)] lg:text-[clamp(1rem,1.0vw,1.7rem)]">
                  {quote.highlight}
                </p>
                {quote?.author && <p className="text-white">— {quote.author}</p>}
              </div>
            )}

          </div>
        </div>

        {/* GRID */}
        {grid && (
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-2">

            {/* PRIMARY */}
            <div
              ref={(el) => (cardRefs.current[0] = el)}
              className="bg-white text-black rounded-2xl p-4 flex flex-col h-full"
            >
              <h3 className="text-[#FF8205] font-medium text-[clamp(1.957rem,2.266vw,2.3rem)] mb-[8rem]">
                {grid.primary?.title}
              </h3>

              <p className="text-black/60 text-[clamp(0.98rem,1.35vw,1.35rem)] lg:text-[clamp(1.09rem,0.91vw,1.55rem)]">
                {grid.primary?.description}
              </p>

              {primaryImage && (
                <div className="mt-6 relative w-full flex-1 aspect-[16/9] rounded-lg overflow-hidden">
                  <Image src={primaryImage} alt="" fill className="object-cover" />
                </div>
              )}
            </div>

            {/* MIDDLE */}
            <div className="flex flex-col gap-2">

              <div
                ref={(el) => (cardRefs.current[1] = el)}
                className="bg-white text-black rounded-2xl p-4 flex-1"
              >
                <h3 className="text-[1.75rem] mb-[5rem] font-semibold">
                  {grid.qualitative?.title}
                </h3>
                <p className="text-black/60">
                  {grid.qualitative?.description}
                </p>
              </div>

              <div
                ref={(el) => (cardRefs.current[2] = el)}
                className="bg-white text-black rounded-2xl p-4 flex-1"
              >
                <h3 className="text-[1.75rem] mb-[5rem] font-semibold">
                  {grid.quantitative?.title}
                </h3>
                <p className="text-black/60">
                  {grid.quantitative?.description}
                </p>
              </div>

            </div>

            {/* SECONDARY */}
            <div
              ref={(el) => (cardRefs.current[3] = el)}
              className="bg-white text-black rounded-2xl p-4 flex flex-col h-full"
            >

              {grid.secondary?.image && (
                <div className="relative w-full flex-1 min-h-[220px] rounded-lg overflow-hidden">
                  <Image
                    src={grid.secondary.image}
                    alt=""
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