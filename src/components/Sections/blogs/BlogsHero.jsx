"use client";

import { Badge } from "../../shared";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlogsHero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll("h1, p, span"), {
        y: 25,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative z-10 mt-10 lg:mt-[8em] px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
    >
      <div className="mb-6">
        <Badge text="Blogs" />
      </div>

      <div
        className="
          flex flex-col lg:flex-row
          lg:items-start lg:justify-between
          gap-[clamp(1.2rem,6vw,7rem)]
        "
      >
        <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] shrink-0">
          <span className="text-black">Knowledge Backed by </span>
          <span className="text-[#FF8205]">Real Plan</span>
          <br />
          <span className="text-[#FF8205]">Consulting, </span>
          <span className="text-black">Built for Impact.</span>
        </h1>

        <p
          className="
            text-[clamp(1rem,1.4vw,1.4rem)]
            lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
            text-[#2A2A2A]/60
            leading-relaxed
          "
        >
          we share research-driven insights, industry trends, and strategic
          perspectives to help businesses navigate complexity and make confident
          decisions in a dynamic market.
        </p>
      </div>
    </div>
  );
}