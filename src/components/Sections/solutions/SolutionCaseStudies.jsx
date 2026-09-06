"use client";

import Link from "next/link";
import { Badge } from "@/components/shared";
import { Button } from "../../ui";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionCaseStudies({ data }) {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        badgeRef.current,
        titleRef.current,
        descRef.current,
        ctaRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 18,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

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
          "-=0.2"
        )
        .to(
          descRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .to(
          ctaRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  if (!data) return null;

  const { badge, title, description, cta } = data;
  const ctaHref = cta?.category
    ? `${cta.link.replace(/\/?$/, "/")}?category=${encodeURIComponent(
        cta.category
      )}`
    : cta?.link;

  return (
    <section
      ref={sectionRef}
      className="relative mb-[4rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
    >
      {/* GRID REVEAL */}
      <div className="absolute inset-0 z-10 pointer-events-none"></div>

      <div>
        {/* LEFT ALIGNED CONTENT */}
        <div className="flex flex-col items-start gap-6 lg:gap-3 max-w-[850px]">

          {/* BADGE */}
          {badge && (
            <div ref={badgeRef}>
              <Badge text={badge} />
            </div>
          )}

          {/* TITLE */}
          <h2
            ref={titleRef}
            className="text-black text-[clamp(1.7rem,3vw,2rem)] font-regular leading-[1.3] sm:leading-[1.15]"
          >
            {title}
          </h2>

          {/* DESCRIPTION */}
          {description && (
            <p
              ref={descRef}
              className="text-gray-600 text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed"
            >
              {description}
            </p>
          )}

          {/* CTA */}
          {cta?.link && (
            <div ref={ctaRef}>
              <Link href={ctaHref}>
                <Button text={cta.text || "Read more"} variant="white" />
              </Link>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
