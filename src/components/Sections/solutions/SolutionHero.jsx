"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { Badge } from "@/components/shared";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";


export default function SolutionHero({ data }) {
  const image = data?.image;

  const words = data.title.split(" ");
  const firstLine = words.slice(0, 3).join(" ");
  const secondLine = words.slice(3).join(" ");

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const listRef = useRef([]);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  const router = useRouter();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        badgeRef.current,
        titleRef.current,
        subtitleRef.current,
        buttonRef.current,
        imageRef.current,
        ...listRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 20,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });

      tl.to(
        titleRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.2"
      );

      tl.to(
        subtitleRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3"
      );

      tl.to(
        listRef.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.05,
          duration: 0.4,
        },
        "-=0.3"
      );

      tl.to(
        buttonRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
        },
        "-=0.2"
      );

      tl.to(
        imageRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        {
  threshold: 0,
  rootMargin: "0px 0px -25% 0px",
}
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-[clamp(3rem,6vw,6.8rem)]">

      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-0 pointer-events-none global-grid"></div>

      <div className="relative z-20 px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {/* LEFT */}
          <div className="flex flex-col gap-[1rem]">

            {/* BADGE */}
            <div ref={badgeRef}>
              <Badge text={"Solutions"} />
            </div>

            {/* TITLE */}
            <h1 ref={titleRef} className="leading-[1.1] font-normal">
              <span className="block text-[clamp(1.8rem,4vw,2.8rem)] lg:text-[clamp(2.8rem,3vw,3.5rem)] text-[#2A2A2A]">
                {firstLine}
              </span>

              {secondLine && (
                <span className="block mt-1 text-[clamp(1.8rem,4vw,2.8rem)] lg:text-[clamp(2.8rem,3vw,3.5rem)] text-gray-400">
                  {secondLine}
                </span>
              )}
            </h1>

            {/* SUBTITLE */}
            <p
              ref={subtitleRef}
              className="text-[clamp(0.95rem,1.2vw,1.2rem)] text-gray-500 leading-relaxed"
            >
              {data.subtitle}
            </p>

            {/* POINTS */}
            {data.points && (
              <ul className="flex flex-col gap-3 mt-2">
                {data.points.map((point, i) => (
                  <li
                    key={i}
                    ref={(el) => (listRef.current[i] = el)}
                    className="flex items-start gap-3 text-black text-[clamp(0.95rem,1.1vw,1.15rem)] leading-relaxed"
                  >
                    <span className="mt-[0.45em] w-2.5 h-2.5 lg:w-3 lg:h-3 bg-[#FF8205] rounded-full shrink-0"></span>
                    <span className="flex-1">{point}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* BUTTON */}
            <div ref={buttonRef} className="mt-4">
              <Button text={data?.cta?.text || "Get started"} onClick={() => router.push("/contact_us")} />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div ref={imageRef} className="w-full flex">
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