"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue, useSpring } from "framer-motion";
import { Button} from "../../ui";
import {LogoCarousel, Badge} from "../../shared";
import { useRouter } from "next/navigation";


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

  const stats = [
    {
      value: 10,
      suffix: "+",
      subtitle: "Years of Excellence",
      desc: "For a decade we have delivered market intelligence and consulting solutions",
    },
    {
      value: 750,
      suffix: "+",
      subtitle: "Clients served",
      desc: "Our work has supported more than 750+ organisations with research, clear insights and strategic guidance across diverse markets and industries.",
    },
    {
      value: 1000,
      suffix: "+",
      subtitle: "Projects completed",
      desc: "With more than 1,000+ projects completed, we bring depth, consistency, and reliability to every research and consulting engagement.",
    },
    {
      value: 98,
      suffix: "%",
      subtitle: "Clients satisfaction",
      desc: "Our high client satisfaction is driven by a focus on quality, clarity, and actionable insights",
    },
  ];

  return (
   <div
  className="relative px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
>
      <div className="absolute inset-0 z-0 pointer-events-none">
</div>
    <div className="relative z-10">
        {/* ABOUT SECTION */}
        <section className="w-full text-white">
          <div className="py-10 flex flex-col lg:flex-row items-baseline justify-between gap-10 lg:gap-[21.5rem]">
            <div className="max-w-4xl">
              <Badge text="About Real Plan Consulting" />
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
    We are one of those niche companies <br />
    who provide end-to-end business <br />
    consulting
  </span>{" "}
  <span>
    and support services for all <br /> businesses across all sectors.
  </span>
</h2>
            </div>

            <div className="shrink-0 w-full lg:w-auto flex justify-start lg:justify-end lg:translate-y-15">
              <Button
  text="Know more"
  variant="white"
  onClick={() => router.push("/about_us")}
/>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION (FIXED) ================= */}
        <section ref={statsRef} className="w-full bg-white relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#F5F5F5] rounded-2xl p-4 flex flex-col justify-between gap-10 hover:shadow-md transition-all duration-300"
              >
                <p className="text-black/40 leading-snug text-body">
                  {item.desc}
                </p>

                <div className="mt-10">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-[3.1rem] font-medium text-black flex items-baseline gap-1">
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

    <h3 className="text-[clamp(1.15rem,1.2vw,1.7rem)]
  text-[#2A2A2A]/50
  leading-relaxed">
      The world’s leading brands work with{" "}
      <br />
      <span className="font-medium text-[#2A2A2A]">
        Real Plan Consulting
      </span>
    </h3>
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