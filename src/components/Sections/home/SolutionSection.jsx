"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useSpring } from "framer-motion";

const SERVICES_DATA = [
  {
    title: "MARKET RESEARCH",
    description: "Turn market insights into confident business decisions.",
    href: "/solutions/market-research",
  },
  {
    title: "LOCATION ANALYSIS",
    description:
      "Location is the key to most businesses, and we do it better for you.",
    href: "/solutions/location-analysis",
  },
  {
    title: "MARKET FEASIBILITY",
    description: "Assess demand, risk, and viability before committing.",
    href: "/solutions/market-feasability-studies",
  },
  {
    title: "REAL ESTATE RESEARCH",
    description: "Research that supports confident real estate planning.",
    href: "/solutions/real-estate",
  },
  {
    title: "SOCIO-ECONOMIC RESEARCH",
    description: "Evidence-based insights into socio-economic conditions.",
    href: "/solutions/socio-economic",
  },
  {
    title: "POLITICAL RESEARCH",
    description:
      "We analyze political and policy environments to help organisations.",
    href: "/solutions/political-research",
  },
];

function RowReveal({ items, progress }) {
  const router = useRouter();

  const w0 = useTransform(progress, [0, 0.4, 1], ["100%", "50%", "33.3333%"]);
  const w1 = useTransform(progress, [0, 0.4, 1], ["0%", "50%", "33.3333%"]);
  const w2 = useTransform(progress, [0, 0.6, 1], ["0%", "0%", "33.3333%"]);

  const widths = [w0, w1, w2];

  const bg0 = useTransform(progress, (p) =>
    p < 0.15 ? "#FF8205" : "#EDEDED"
  );
  const bg1 = useTransform(progress, (p) =>
    p >= 0.05 && p < 0.65 ? "#FF8205" : "#EDEDED"
  );
  const bg2 = useTransform(progress, (p) =>
    p >= 0.62 && p < 0.96 ? "#FF8205" : "#EDEDED"
  );

  const bgColors = [bg0, bg1, bg2];

  const btn0Opacity = useTransform(progress, [0.18, 0.22], [0, 1]);
  const btn1Opacity = useTransform(progress, [0.65, 0.7], [0, 1]);
  const btn2Opacity = useTransform(progress, [0.95, 1], [0, 1]);

  const btnOpacities = [btn0Opacity, btn1Opacity, btn2Opacity];

  const btn0Y = useTransform(progress, [0.18, 0.22], [10, 0]);
  const btn1Y = useTransform(progress, [0.65, 0.7], [10, 0]);
  const btn2Y = useTransform(progress, [0.95, 1], [10, 0]);

  const btnYs = [btn0Y, btn1Y, btn2Y];

  return (
    <div className="flex w-full gap-[clamp(12px,1.5vw,24px)]">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          style={{ width: widths[i] }}
          className="overflow-hidden"
        >
         <motion.div
  style={{ background: bgColors[i] }}
  onClick={() => router.push(item.href)}
  className="cursor-pointer flex h-[clamp(160px,24vh,320px)] flex-col justify-between rounded-xl border border-black/5 p-6 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
>
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[clamp(1.2rem,2vw,1.6rem)] font-medium">
                {item.title}
              </h3>
              <motion.div style={{ opacity: btnOpacities[i], y: btnYs[i] }}>
                <Button
                  text="Know More"
                  onClick={() => router.push(item.href)}
                />
              </motion.div>
            </div>
            <p className="text-black text-[clamp(0.9rem,1.1vw,1.05rem)] mt-6 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default function SolutionBackgroundCard({ children }) {
  const sectionRef = useRef(null);
  const [showRow2, setShowRow2] = useState(false);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ["start start", "end start"],
});

const smoothProgress = useSpring(scrollYProgress, {
  stiffness: 35,
  damping: 30,
  restDelta: 0.001,
});

  const row1Progress = useTransform(smoothProgress, [0, 0.45], [0, 1]);
  const row2Progress = useTransform(smoothProgress, [0.65, 1], [0, 1]);

  const row2Y = useTransform(smoothProgress, [0, 0.5, 0.65], [40, 40, 0]);
  const row2Opacity = useTransform(smoothProgress, [0.55, 0.65, 1], [0, 1, 1]);

  const row1 = SERVICES_DATA.slice(0, 3);
  const row2 = SERVICES_DATA.slice(3, 6);

  useMotionValueEvent(smoothProgress, "change", (v) => {
    setShowRow2(v >= 0.6);
  });

  return (
    <>
      {/* ================= MOBILE — completely outside sticky scroll ================= */}
      <div className="md:hidden relative w-full overflow-hidden px-4 py-16"
        style={{ background: "#111" }}
      >
        {/* background glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[60%] blur-[40px] pointer-events-none"
          style={{
            background:
              "linear-gradient(240deg, rgba(255,217,0,0.9) 0%, rgba(255,130,5,0.8) 35%, rgba(250,82,15,0.6) 65%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 20%, transparent 45%)",
          }}
        />

        <div className="relative z-10">
          <h2 className="mb-8 text-center text-3xl font-semibold leading-tight text-white">
            Build smarter projects with data-driven insights with us
          </h2>

         {/* Orange container — gaps show through as orange borders */}
<div className="rounded-2xl overflow-hidden">
  <div className="grid grid-cols-2 gap-[6px] p-[6px]">
    {SERVICES_DATA.map((item) => (
      <div
        key={item.title}
        onClick={() => router.push(item.href)}
        className="cursor-pointer bg-[#EDEDED] rounded-lg flex flex-col p-4"
      >
        {/* TOP */}
        <h3 className="text-sm font-semibold leading-snug mb-3">
          {item.title}
        </h3>

        {/* BOTTOM GROUP */}
        <div className="flex flex-col gap-4 mt-auto">
          <p className="text-black/70 text-xs leading-relaxed">
            {item.description}
          </p>

          <div>
            <Button
              text="Know More"
              onClick={(e) => {
                e.stopPropagation(); // prevents double navigation
                router.push(item.href);
              }}
            />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </div>

      {/* ================= DESKTOP — sticky scroll section ================= */}
      <section
        ref={sectionRef}
        className="relative w-full hidden md:block"
      >
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-black z-0" />
          <div
            className="absolute bottom-0 left-0 right-0 h-[70%] blur-[40px]"
            style={{
              background:
                "linear-gradient(240deg, rgba(255,217,0,0.9) 0%, rgba(255,130,5,0.8) 35%, rgba(250,82,15,0.6) 65%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.25) 20%, transparent 45%)",
            }}
          />

          <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center py-16 px-[clamp(1rem,2vw+0.5rem,4rem)]">

            <h2 className="mx-auto mb-12 max-w-4xl text-center text-3xl font-semibold leading-tight text-white md:text-5xl">
              Build smarter projects with data-
              <br />
              driven insights with us
            </h2>

            <div className="flex flex-col gap-5">
              <RowReveal items={row1} progress={row1Progress} />
              {showRow2 && (
                <motion.div style={{ y: row2Y, opacity: row2Opacity }}>
                  <RowReveal items={row2} progress={row2Progress} />
                </motion.div>
              )}
            </div>

            {children}
          </div>
        </div>
      </section>
    </>
  );
}