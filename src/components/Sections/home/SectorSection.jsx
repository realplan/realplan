"use client";

import { Badge } from "../../shared";
import { Button } from "../../ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { sectorsData } from "@/data/sectorsData";
import { useEffect, useRef } from "react";
import gsap from "gsap";


export default function SectorSection() {
  const router = useRouter();
  const revealScopeRef = useRef(null);
  const badgeDesktopRef = useRef(null);
  const badgeMobileRef = useRef(null);
  const buttonDesktopRef = useRef(null);
  const buttonMobileRef = useRef(null);
  const headingRefs = useRef([]);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia("(max-width: 639px)").matches;
      const revealTargets = [
        isMobile ? badgeMobileRef.current : badgeDesktopRef.current,
        ...headingRefs.current,
        subtitleRef.current,
        isMobile ? buttonMobileRef.current : buttonDesktopRef.current,
      ].filter(Boolean);

      gsap.set(revealTargets, {
        autoAlpha: 0,
        x: -18,
        clipPath: "inset(0 100% 0 0)",
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.84,
          ease: "power2.out",
        },
      });

      timeline.to(revealTargets[0], {
        autoAlpha: 1,
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 0.74,
      });

      timeline.to(
        headingRefs.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.12,
        },
        "-=0.32"
      );

      timeline.to(
        subtitleRef.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
        },
        "-=0.16"
      );

      const activeButton = isMobile ? buttonMobileRef.current : buttonDesktopRef.current;
      if (activeButton) {
        timeline.to(
          activeButton,
          {
            autoAlpha: 1,
            x: 0,
            clipPath: "inset(0 0% 0 0)",
            duration: 0.78,
          },
          "-=0.4"
        );
      }

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer?.disconnect();
          }
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -6% 0px",
        }
      );

      if (revealScopeRef.current) {
        observer.observe(revealScopeRef.current);
      }
    }, revealScopeRef);

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  return (
    <div
  ref={revealScopeRef}
  className="relative px-[clamp(1rem,4vw,6rem)] xl:px-[clamp(6rem,5vw,9rem)] overflow-hidden"
>
    <div className="absolute inset-0 z-0 pointer-events-none h-full w-full">

</div>

      {/* Top */}
      <div className="hidden sm:flex sm:items-center sm:justify-between">
        <div ref={badgeDesktopRef} className="will-change-transform">
          <Badge text="Industries We Serve" />
        </div>
        <div ref={buttonDesktopRef} className="will-change-transform">
        <Button text="More sectors" variant="white" onClick={() => {
  console.log("clicked");
  router.push("/sectors");
}} />
        </div>
      </div>

      <div className="sm:hidden">
        <div ref={badgeMobileRef} className="w-fit will-change-transform">
          <Badge text="Industries We Serve" />
        </div>
      </div>

      {/* Heading */}
<h2 className="text-[clamp(1.55rem,1.2vw+1rem,3rem)] text-[#6B6B6B] leading-[clamp(1.2,1.2vw,1.3)] mt-[clamp(0.5rem,0.8vw,0.9rem)]">
        <span
          ref={(el) => {
            headingRefs.current[0] = el;
          }}
          className="block text-black will-change-transform"
        >
          Sectors we specialise in
        </span>
      </h2>

<h3 className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/90
  leading-relaxed
">
        <span ref={subtitleRef} className="block will-change-transform">
          Deep expertise across diverse sectors delivering measurable results.
        </span>
      </h3>

      <div className="sm:hidden mt-[clamp(0.8rem,1vw,1.2rem)]">
        <div ref={buttonMobileRef} className="w-fit will-change-transform">
        <Button text="More sectors" variant="white" onClick={() => router.push("/sectors")} />
        </div>
      </div>

      {/* GRID */}
      <div className="mt-[clamp(2rem,3vw,3rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5">

        {sectorsData.map((item, i) => {
          const total = sectorsData.length;
          const isLastRowTwo = total % 3 === 2 && i >= total - 2;

          return (
            <div
              key={i}
              className={`
                group relative rounded-2xl overflow-hidden flex flex-col h-full
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${isLastRowTwo ? "lg:col-span-3" : "lg:col-span-2"}
              `}
            >
              {/* Gradient */}
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

              {/* Content */}
              <div className="relative z-10 bg-[#EDEDED] p-4 sm:p-5 flex flex-col h-full rounded-2xl group-hover:bg-transparent transition-colors duration-300">

                {/* Image */}
                <div className="relative w-full h-[clamp(16.2rem,20vw,22rem)] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover scale-[1.12]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-[#FF8205] text-[clamp(1.2rem,1vw+0.8rem,1.75rem)] font-medium leading-snug group-hover:text-black transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-[clamp(0.85rem,0.55vw+0.63rem,1rem)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Pill */}
{/*                 <div className="mt-auto"> */}
{/*                   <div */}
{/*                     className=" */}
{/*                       inline-flex items-center justify-center */}
{/*                       px-[1rem] */}
{/*                       h-[clamp(1.6rem,1.5vw,1.9375rem)] */}
{/*                       rounded-full */}
{/*                       border border-black */}
{/*                       bg-transparent text-black */}
{/*                       text-[clamp(0.8rem,0.5vw+0.5rem,0.95rem)] */}
{/*                       transition-colors duration-300 */}
{/*                       group-hover:border-white group-hover:text-white */}
{/*                       whitespace-nowrap */}
{/*                     " */}
{/*                   > */}
{/*                     {item.tag} */}
{/*                   </div> */}
{/*                 </div> */}

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
