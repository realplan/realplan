"use client";

import Image from "next/image";
import { Badge } from "../../shared";
import certificate from "../../../assets/about_us/certificate.webp";
import { Button } from "../../ui";
import { useRouter } from "next/navigation";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AwardsSection() {
  const router = useRouter();

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        badgeRef.current,
        titleRef.current,
        paraRef.current,
        buttonRef.current,
        imageRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 25,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
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
        paraRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3"
      );

      tl.to(
        buttonRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
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
    <section ref={sectionRef} className="mt-[3rem] md:mt-[5rem]">

      {/* ENTIRE GRADIENT CARD */}
      <div className="relative overflow-hidden rounded-[2rem] home-bg">

        {/* GRID OVERLAY */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="
              w-full h-full
              bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),
                  linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]
              bg-[size:calc(10vw)_calc(10vw)]
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-[19rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem] py-[3rem] md:py-[4rem] text-center lg:text-left">

          {/* LEFT */}
          <div className="flex flex-col gap-6 lg:w-[55%] items-center lg:items-start">

            <div ref={badgeRef}>
              <Badge text="Awards and Recognition" variant="white" />
            </div>

            <h2
              ref={titleRef}
              className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.2] text-[#2A2A2A]"
            >
              Certificate of Recognition from Corporate LiveWire Global Awards
            </h2>

            <p
              ref={paraRef}
              className="
                text-[clamp(1rem,1.4vw,1.4rem)]
                lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
                text-[#2A2A2A]/80
                leading-relaxed
              "
            >
             Corporate LiveWire has been in circulation for 10 years and its awards are open to both UK-based and international businesses and organisations across all major industries. From SMEs to multinational corporations, the awards recognise those who have proven to consistently deliver excellent products and services in their market.
            </p>

            <div ref={buttonRef}>
              <Button
                text="More awards"
                variant="transparent"
                onClick={() => router.push("/awards")}
              />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div
            ref={imageRef}
            className="w-full lg:w-[45%] max-w-[25rem] flex justify-center lg:justify-end"
          >
            <Image
              src={certificate}
              alt="Award Certificate"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}