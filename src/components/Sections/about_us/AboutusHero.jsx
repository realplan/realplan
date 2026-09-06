"use client";

import logo_orange from "../../../assets/Company_Logo/logo_orange.webp";
import cycle from "../../../assets/about_us/cycle.webp";
import { Badge } from "../../shared";
import { useRouter } from "next/navigation";
import { Button } from "../../ui";
import Image from "next/image";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AboutUsPage() {
  const router = useRouter();

  const sectionRef = useRef(null);
  const badgeRef = useRef(null);

  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const para3Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const targets = [
        badgeRef.current,
        line1.current,
        line2.current,
        line3.current,
        para1Ref.current,
        para2Ref.current,
        para3Ref.current,
        buttonRef.current,
      ].filter(Boolean);

      gsap.set(targets, {
        autoAlpha: 0,
        y: 18,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(badgeRef.current, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      tl.to(
        line1.current,
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

      tl.to(
        line2.current,
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      tl.to(
        line3.current,
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.3"
      );

      tl.to(
        para1Ref.current,
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

      tl.to(
        para2Ref.current,
        { autoAlpha: 1, y: 0, duration: 0.6 },
        "-=0.2"
      );

  tl.to(
  para3Ref.current,
  { autoAlpha: 1, y: 0, duration: 0.6 },
  "-=0.2"
);

      tl.to(
        buttonRef.current,
        { autoAlpha: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.35 }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);

      return () => observer.disconnect();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative text-white">

      {/* GRID REVEAL BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none"></div>

      {/* HEADER (UNCHANGED) */}
      <div className="relative z-10"></div>

      {/* CONTENT */}
      <div
        className="relative z-10 mt-10 lg:mt-[8em]
        px-[clamp(1rem,2vw+0.5rem,4rem)]
        xl:px-[6.2rem]
        2xl:px-[9rem]"
      >

        {/* BADGE */}
        <div ref={badgeRef} className="mb-6 will-change-transform">
          <Badge text="Who we are" />
        </div>

        {/* MAIN HEADING (STRICTLY SAME LAYOUT) */}
        <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] mb-4">

          <span ref={line1} className="text-black will-change-transform">
            Our team.
          </span>{" "}

          <span ref={line2} className="text-black/60 will-change-transform">
            works with you to deliver actionable research
            <br />
            insights and a structured strategy,
          </span>{" "}

          <span ref={line3} className="text-black will-change-transform">
            enabling confident
            <br />
            decision-making and market validation.
          </span>

        </h1>

        {/* PARAGRAPH 1 */}
        <p
          ref={para1Ref}
          className="text-[clamp(1rem,1.4vw,1.4rem)]
          lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
          text-[#2A2A2A]/80 leading-relaxed mb-[2rem]"
        >
          Real Plan Consulting was founded in the year{" "}
          <span className="underline">2016</span> during the startup boom in India{" "}
          <span className="hidden sm:inline"><br /></span>
          aimed at providing Good Quality Professional Business Support Services.
        </p>

        {/* PARAGRAPH 2 */}
        <p
          ref={para2Ref}
          className="text-[clamp(1rem,1.4vw,1.4rem)]
          lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
          text-[#2A2A2A]/80 leading-relaxed mb-[1rem]"
        >
          We operate in the domain of Strategic Market Research, Scientific Location Analysis{" "}
          <span className="hidden sm:inline"><br /></span>
          Market Feasibility Studies, Brand Consulting, Core Industry Market Intelligence, Real{" "}
          <span className="hidden sm:inline"><br /></span>
          Estate Research, Socio-Economic Research, Political Research.
        </p>

 <p
          ref={para3Ref}
          className="text-[clamp(1rem,1.4vw,1.4rem)]
          lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
          text-[#2A2A2A]/80 leading-relaxed mb-[1rem]"
        >
         We achieve our goals through research, consulting and solution deployment with a{" "}
          <span className="hidden sm:inline"><br /></span>
          customized approach to every client of ours. We provide solutions through simple{" "}
          <span className="hidden sm:inline"><br /></span>
          intelligence and technology that will maximize efficiency and thereby add value
          <span className="hidden sm:inline"><br /></span>
          to the business of our clients.
        </p>
        {/* CTA */}
        <div ref={buttonRef}>
          <Button
            text="Inquiry with us"
            variant="dark"
            onClick={() => router.push("/contact_us")}
            className="py-[clamp(0.8rem,2vw,0.6rem)]"
          />
        </div>

      </div>

      {/* IMAGE (UNCHANGED) */}
      <div
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
        mt-[2.5rem] md:mt-[3rem] lg:mt-[4rem] px-[0.5rem] z-10"
      >
        <div className="relative w-full h-[clamp(220px,40vw,500px)]">
          <Image
            src={cycle}
            alt="Cycle"
            fill
            className="object-cover rounded-[1.5rem]"
            priority
          />
        </div>
      </div>

    </div>
  );
}