"use client";

import Image from "next/image";
import missionImg from "../../../assets/about_us/mission.webp";
import visionImg from "../../../assets/about_us/vision.webp";
import sideImg from "../../../assets/about_us/founders.webp";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MissionVisionSection() {
  const sectionRef = useRef(null);

  const foundersRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const textRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        foundersRef.current,
        missionRef.current,
        visionRef.current,
        textRef.current,
        quoteRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 25,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(foundersRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.to(
        missionRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.4"
      );

      tl.to(
        visionRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.5"
      );

      tl.to(
        textRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      tl.to(
        quoteRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3"
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

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 lg:py-20">
      <div className="">
        <div
          className="px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
        >
          <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

            {/* LEFT BLOCK */}
            <div className="lg:flex-[1.4] flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6">

              {/* FOUNDERS IMAGE */}
              <div
                ref={foundersRef}
                className="relative w-full md:flex-1 aspect-[3/4] rounded-[0.5rem] overflow-hidden"
              >
                <Image
                  src={sideImg}
                  alt="Team Vision"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* MISSION + VISION */}
              <div className="flex flex-col gap-4 md:gap-6 w-full md:flex-1">

                {/* MISSION */}
                <div
                  ref={missionRef}
                  className="relative rounded-[0.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1"
                >
                  <Image
                    src={missionImg}
                    alt="Mission"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-300/70 via-yellow-200/60 to-transparent" />
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                    <p className="text-black text-[clamp(1.2rem,1.2vw,1.05rem)]">
                      Solving unknowns for <br />the known.
                    </p>
                    <h3 className="text-[clamp(2.8rem,4vw,2.5rem)] font-semibold text-black">
                      MISSION
                    </h3>
                  </div>
                </div>

                {/* VISION */}
                <div
                  ref={visionRef}
                  className="relative rounded-[0.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1"
                >
                  <Image
                    src={visionImg}
                    alt="Vision"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                    <p className="text-white text-[clamp(1.2rem,1.2vw,1.05rem)]">
                      Transforming lives by giving solutions for who, what, when,
                      where, why and how.
                    </p>
                    <h3 className="text-[clamp(2.8rem,4vw,2.5rem)] font-semibold text-white">
                      VISION
                    </h3>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT TEXT */}
            <div className="lg:flex-1 flex flex-col justify-between lg:self-stretch py-1">

              <p
                ref={textRef}
                className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/80
  leading-relaxed
"
              >
                We are of the strong opinion that, when the vision of our clients sync in perfect harmony with our market data-driven advisory and business support services, the final resulting output would make our clients unstoppable in pursuing their vision and making them a reality.
              </p>

              <h4
                ref={quoteRef}
                className="text-[#FF8205] text-[clamp(1rem,2.2vw,1.3rem)] font-normal text-right leading-relaxed"
              >
                "Our goal is to transform data into information, and – <br />
                information into insights"
                <br />

                <span className="block text-black/70 text-[clamp(0.75rem,1.6vw,0.9rem)] font-normal mt-2">
                  - Real Plan Consulting Team
                </span>
              </h4>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}