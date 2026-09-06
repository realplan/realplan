"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { Button} from "../../ui";
import {LogoCarousel, Badge} from "../../shared";
import { useRouter } from "next/navigation";
import gsap from "gsap";


/* ================= COUNT UP (TRIGGER ON VIEW) ================= */
function CountUp({ value, start }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;

    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [start, value]);

  return <span>{display}</span>;
}

/* ================= PAGE ================= */
export default function AboutPage() {
  const statsRef = useRef(null);
  const revealScopeRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRefs = useRef([]);
  const buttonRef = useRef(null);
  const brandTextRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const revealTargets = [
        badgeRef.current,
        ...headingRefs.current,
        buttonRef.current,
        brandTextRef.current,
      ].filter(Boolean);

      gsap.set(revealTargets, {
        autoAlpha: 0,
        x: -18,
        clipPath: "inset(0 100% 0 0)",
      });

      const timeline = gsap.timeline({
        paused: true,
        defaults: {
          duration: 0.64,
          ease: "power2.out",
        },
      });

      timeline.to(badgeRef.current, {
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
        "-=0.28"
      );

      timeline.to(
        buttonRef.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.78,
        },
        "-=0.36"
      );

      timeline.to(
        brandTextRef.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
        },
        "-=0.12"
      );

      observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      timeline.play();
      observer?.disconnect();
    }
  },
  {
    threshold: 0, // ⬅️ trigger immediately
    rootMargin: "0px 0px -30% 0px", // ⬅️ trigger earlier BEFORE visible
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

  const stats = [
    {
      value: 10,
      suffix: "+",
      subtitle: "Years of Expertise",
      desc: "For more than a decade we have delivered spot on and accurate market intelligence solutions.",
    },
    {
      value: 600,
      suffix: "+",
      subtitle: "Clients served",
      desc: "Our work has supported more than 600+ organisations with research, clear insights and strategic guidance across diverse markets and industries.",
    },
    {
      value: 2000,
      suffix: "+",
      subtitle: "Projects completed",
      desc: "With more than 2,000+ projects completed, we bring depth, consistency, and reliability to every research and consulting engagement.",
    },
    {
      value: 98,
      suffix: "%",
      subtitle: "Client satisfaction",
      desc: "Client satisfaction is driven by our committed focus on quality, clear insights, and actionable recommendations.",
    },
  ];

  return (
   <div
  className="relative px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem] mb-[4rem]"
>
      <div className="absolute inset-0 z-0 pointer-events-none">
</div>
    <div ref={revealScopeRef} className="relative z-10">
        {/* ABOUT SECTION */}
        <section className="w-full text-white">
          <div className="py-10 flex flex-col lg:flex-row items-baseline justify-between gap-10 lg:gap-[21.5rem]">
            <div className="max-w-4xl">
              <div ref={badgeRef} className="w-fit will-change-transform">
                <Badge text="About Real Plan Consulting" />
              </div>
              <h2 className="
  text-[clamp(1.4rem,1.5vw+0.8rem,3rem)]
  text-[#6B6B6B]
  leading-[1.2]
  lg:leading-[1.25]
  xl:leading-[1.3]
  mt-[2rem]
  lg:mt-[3rem]
">
  <span className="text-black">
    <span
      ref={(el) => {
        headingRefs.current[0] = el;
      }}
      className="inline-block will-change-transform"
    >
      We are a one stop destination for
    </span>
    <br />
  </span>{" "}
  <span>
    <span
      ref={(el) => {
        headingRefs.current[3] = el;
      }}
      className="inline-block will-change-transform"
    >
      all business advisory and support services.
    </span>
  </span>
</h2>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end lg:translate-y-15">
              <div ref={buttonRef} className="will-change-transform">
              <Button
  text="Know more"
  variant="white"
  onClick={() => router.push("/about_us")}
/>
              </div>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION (FIXED) ================= */}
        <section ref={statsRef} className="w-full bg-white relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-2xl p-4 flex flex-col justify-between gap-10"
              >
<p
  className="text-black/40 leading-snug"
  style={{
    fontSize:
      "clamp(calc(1rem * 0.912), calc(1vw * 0.912), calc(1.25rem * 0.912))",
  }}
>             {item.desc}
                </p>

                <div className="mt-10">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-[clamp(2.5rem,5vw,3rem)] font-medium text-black flex items-baseline gap-1">
                      <span className="flex items-baseline">
                        <CountUp value={item.value} start={startCount} />
                        <span className="ml-1">{item.suffix}</span>
                      </span>
                    </h2>

                    <span className="text-gray-500 text-body">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LOGO CAROUSEL ================= */}
<div className="mt-[clamp(3rem,6vw,7rem)]">
    <div className="flex flex-col lg:flex-row items-center lg:items-center">

  {/* LEFT TEXT */}
  <div className="w-full lg:w-[35%] mb-[1.5rem] lg:mb-0">

    <div ref={brandTextRef} className="will-change-transform">
    <h3 className="text-[clamp(1.15rem,1.2vw,1.7rem)]
  text-[#2A2A2A]/50
  leading-relaxed">
      Leading brands choose{" "}
      <br />
      <span className="font-medium text-[#2A2A2A]">
        Real Plan Consulting
      </span>
    </h3>
    </div>
  </div>

  {/* RIGHT CAROUSEL */}
  <div className="w-full lg:w-[65%] overflow-hidden">
    <LogoCarousel grayscale={false} />
  </div>

</div>
</div>
      </div>
    </div>
  );
}
