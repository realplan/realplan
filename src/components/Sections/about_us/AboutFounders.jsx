"use client";

import Image from "next/image";
import { Badge } from "../../shared";

import founder1 from "../../../assets/about_us/founder_1.webp";
import founder2 from "../../../assets/about_us/founder_2.webp";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FoundersSection() {
  const sectionRef = useRef(null);

  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const founderCardsRef = useRef([]);
  const taglineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        badgeRef.current,
        headingRef.current,
        paraRef.current,
        ...founderCardsRef.current,
        taglineRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
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

      // Heading
      tl.to(
        headingRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.2"
      );

      // Paragraph
      tl.to(
        paraRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3"
      );

      // Founder cards stagger
      tl.to(
        founderCardsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
        },
        "-=0.3"
      );

      // Tagline
      tl.to(
        taglineRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
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
      className="mt-[4rem] md:mt-[4rem] lg:mt-[4rem] relative px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
    >
      {/* BADGE */}
      <div ref={badgeRef} className="mb-5 relative z-10">
        <Badge text="Meet the founders" />
      </div>

      {/* MAIN GRID */}
      <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[17.625rem] relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between lg:w-[35%]">
          <h2
            ref={headingRef}
            className="text-[clamp(1.6rem,3.5vw,2.1rem)] leading-[1.2] text-black max-w-[28rem]"
          >
            The minds behind Real Plan Consulting
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:w-[65%]">

          {/* DESCRIPTION */}
          <p
            ref={paraRef}
            className="text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-relaxed"
          >
            We believe in providing our clients with the right insights and support which will empower them to make well informed strategic business decisions and implement them effectively, all of which will not only propel their growth and script their success story but will also ensure them that they stay ahead of the competition in the market.
          </p>

          {/* FOUNDERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* FOUNDER 1 */}
            <div
              ref={(el) => (founderCardsRef.current[0] = el)}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-xl aspect-square">
                <Image
                  src={founder1}
                  alt="Founder 1"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

              <h3 className="mt-4 text-[#FF8205] text-[1.4rem] sm:text-[1.75rem] font-medium">
                A VENKATA SAI KASYAP
              </h3>

              <p className="text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-relaxed">
                Co-Founder of Real Plan Consulting
              </p>
            </div>

            {/* FOUNDER 2 */}
            <div
              ref={(el) => (founderCardsRef.current[1] = el)}
              className="flex flex-col"
            >
              <div className="overflow-hidden rounded-xl aspect-square">
                <Image
                  src={founder2}
                  alt="Founder 2"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                />
              </div>

              <h3 className="mt-4 text-[#FF8205] text-[1.4rem] sm:text-[1.75rem] font-medium">
                S VINOTH
              </h3>

              <p className="text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-relaxed">
                Co-Founder of Real Plan Consulting
              </p>
            </div>

          </div>


        </div>



      </div>
    </section>
  );
}