"use client";

import { Badge } from "@/components/shared";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionTypes({ data }) {
  if (!data) return null;

  const { badge, title, subtitle, items } = data;

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      const targets = [
        badgeRef.current,
        titleRef.current,
        subtitleRef.current,
        ...cardsRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 12,
      });

      // header
      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          subtitleRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.35"
        )
        .to(
          cardsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: "power2.out",
          },
          "-=0.25"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-[clamp(3rem,6vw,6rem)] px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
    >
      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none"></div>

      {/* HEADER */}
      <div className="relative z-20">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-5">

          {badge && (
            <div ref={badgeRef}>
              <Badge text={badge} />
            </div>
          )}

          <div className="flex flex-col items-center text-center gap-[clamp(0.5rem,1vw,0.75rem)]">

            <h2
              ref={titleRef}
              className="text-[clamp(1.8rem,3vw,2.4rem)] text-black font-regular leading-[1.3] max-w-[900px] leading-snug"
            >
              {title}
            </h2>

            {subtitle && (
              <p
                ref={subtitleRef}
                className="text-gray-500 text-[clamp(1rem,1.2vw,1.375rem)] max-w-[700px] leading-relaxed"
              >
                {subtitle}
              </p>
            )}
          </div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-[3rem]">
          {items?.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
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