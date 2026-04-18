"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui";
import { Badge } from "../../shared";
import { useRouter } from "next/navigation";

export default function CaseStudiesHero() {
  const router = useRouter();

  return (
    <div className="relative z-10 mt-15 sm:mt-28 md:mt-[8.9375rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
    xl:px-[6.2rem]
    2xl:px-[9rem]">

      {/* BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <Badge text="Case Studies" />
      </motion.div>

      {/* MAIN HEADING */}
      <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] mb-4"
>
  <span className="text-black">Discover.</span>{" "}
  <span className="text-black/60">
    how our research-driven strategies have helped
  </span>
  <br />
  <span className="text-black/60">
  businesses validate ideas,{" "}
</span>
<span className="text-black">
  identify opportunities, and
</span>
  <br />
  <span className="text-black">
    achieve measurable growth.
  </span>
</motion.h1>

      {/* PARAGRAPH 1 */}
      <motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="text-black/60 leading-normal text-[1.2rem]/80 sm:text-[1.2rem] mb-[2rem]"
>
  At Real Plan Consulting, our work is defined by results. Each case study reflects how {" "}
  <span className="block">we combine in-depth research, strategic thinking, and practical execution to solve </span>
  <span className="block">complex business challenges.</span>
</motion.p>
    </div>
  );
}