"use client";

import { Badge } from "@/components/shared";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const cards = [
  {
    heading: "FEASIBILITY",
    content:
      "Is your product or service innovative, aligned to address the user’s need, satisfy the market demand and most important of all, conveniently market penetrable and scalable?",
  },
  {
    heading: "VIABILITY",
    content:
      "Can your product or service withstand the test of time, adapt to the changing market dynamics, overcome the competitor retaliation and most of important of all, be profitable?",
  },
  {
    heading: "SUSTAINABILITY",
    content:
      "Will your product or service be a positive contributor to the community, society, economy, environment and most important of all, future reliable?",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const rightRef = useRef(null);
  const subtitleLines = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const allTargets = [
        badgeRef.current,
        titleRef.current,
        rightRef.current,
        ...subtitleLines.current,
        ...cardRefs.current,
      ].filter(Boolean);

      gsap.set(allTargets, {
        autoAlpha: 0,
        y: 20,
      });

      const tl = gsap.timeline({ paused: true });

      // Badge
      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      // Heading + right side
      tl.to(
        titleRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.2"
      );

      tl.to(
        rightRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.4"
      );

      // Subtitle lines
      tl.to(
        subtitleLines.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Cards stagger
      tl.to(
        cardRefs.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
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
      className="w-full flex flex-col gap-[clamp(1rem,1.25vw,1.25rem)]
        px-[clamp(1rem,2vw+0.5rem,4rem)]
        xl:px-[6.2rem]
        2xl:px-[9rem] mt-[3rem]"
    >
      {/* Badge */}
      <div ref={badgeRef}>
        <Badge text="Why Choose Us" />
      </div>

      {/* Heading row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <h2
          ref={titleRef}
          className="font-regular leading-tight text-black"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
        >
          Our Philosophy is to Deliver
        </h2>
      </div>

      {/* Subtitle */}
      <h3 className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/80 leading-relaxed">

        <span
          ref={(el) => (subtitleLines.current[0] = el)}
          className="block"
        >
          We help organisations make confident decisions by evaluating feasibility,
          long-term
        </span>

        <span
          ref={(el) => (subtitleLines.current[1] = el)}
          className="block"
        >
          viability, and sustainable impact through rigorous research and objective
          analysis.
        </span>
      </h3>

      {/* Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-[#F5F5F5] rounded-2xl p-4 flex flex-col h-full gap-7"
          >
            <p
              className="text-black/40 leading-snug"
              style={{
                fontSize:
                  "clamp(calc(1rem * 0.912), calc(1vw * 0.912), calc(1.25rem * 0.912))",
              }}
            >
              {card.content}
            </p>

            <h2 className="text-[clamp(2rem,3vw,3.1rem)] font-medium text-black mt-auto">
              {card.heading}
            </h2>
          </div>
        ))}
      </div>

      {/* Mobile footer text */}

    </section>
  );
}