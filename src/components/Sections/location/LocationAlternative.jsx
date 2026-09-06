"use client";

import { Badge } from "@/components/shared";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import asia from "@/assets/location/asia.webp";
import north_america from "@/assets/location/north_america.webp";
import south_africa from "@/assets/location/south_africa.webp";

gsap.registerPlugin(ScrollTrigger);

const locations = [
  {
    title: "NORTH AMERICA (NA)",
    image: north_america,
  },
  {
    title: "EUROPE, MIDDLE EAST & AFRICA(EMEA)",
    image: south_africa,
  },
  {
    title: "ASIA PACIFIC (APAC)",
    image: asia,
  },
];

export default function LocationPage() {
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

      gsap.set(targets, { autoAlpha: 0, y: 12 });

      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
        .to(
          titleRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3"
        )
        .to(
          subtitleRef.current,
          { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
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
      className="w-full text-black mt-9 sm:mt-28 md:mt-[5rem]"
    >
      <div className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">

        {/* ── TOP BADGE ── */}
        <div className="mb-6" ref={badgeRef}>
          <Badge text="Global" />
        </div>

        {/* ── HERO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">
          <div className="min-w-0">
            <h1
              ref={titleRef}
              className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] break-words"
            >
              Presence in Global Markets

            </h1>
          </div>


        </div>

        {/* ── CARDS GRID ── */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((location, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              {/* ── GRADIENT OVERLAY ── */}
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

              {/* ── CARD BODY ── */}
              <div className="relative bg-[#EDEDED] p-4 sm:p-5 flex flex-col h-full rounded-2xl transition-colors duration-300 group-hover:bg-transparent">

                {/* Image */}
                {location?.image?.src && (
                  <div className="relative w-full h-[220px] mb-4 overflow-hidden rounded-xl">
                    <Image
                      src={location.image.src}
                      alt={location.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Title + Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-black text-[1.4rem] font-regular leading-snug group-hover:text-black transition-colors duration-300">
                    {location.title}
                  </h3>

                  <p className="text-gray-600 text-[1rem] leading-snug group-hover:text-black/70 transition-colors duration-300">
                    {location.description}
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