"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import worldMap from "@/assets/features/image_1.webp";
import handshake from "@/assets/features/image_2.webp";
import search from "@/assets/features/search.webp";
import { Badge } from "@/components/shared";
import { useRouter } from "next/navigation";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const features = [
  {
    title: "MULTI-SECTOR EXPERTISE",
    desc: "Industry-leading expertise across multiple sectors.",
    image: search,
  },
  {
    title: "PAN-INDIA & GLOBAL REACH",
    desc: "Pan-India and global research capabilities.",
    image: worldMap,
  },
  {
    title: "CUSTOMIZED CLIENT PARTNERSHIPS",
    desc: "Customized partnership approach with our clients.",
    image: handshake,
  },
];

function ArrowCircle() {
  return (
    <motion.div
      whileHover="hover"
      initial="initial"
      className="relative flex items-center justify-center overflow-hidden rounded-full bg-[#FF8205]
      w-[clamp(1.6rem,1.6vw,2rem)] h-[clamp(1.6rem,1.6vw,2rem)]"
    >
      <motion.div
        variants={{ initial: { x: 0, y: 0 }, hover: { x: 24, y: -24 } }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <ArrowUpRight className="text-black w-[clamp(0.9rem,1.2vw,1.1rem)] h-[clamp(0.9rem,1.2vw,1.1rem)]" />
      </motion.div>

      <motion.div
        variants={{ initial: { x: -24, y: 24 }, hover: { x: 0, y: 0 } }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <ArrowUpRight className="text-black w-[clamp(0.9rem,1.2vw,1.1rem)] h-[clamp(0.9rem,1.2vw,1.1rem)]" />
      </motion.div>
    </motion.div>
  );
}

export default function FeaturesPage() {
  const router = useRouter();

  return (
    <section className="relative mb-12 w-full overflow-hidden px-4 text-black sm:px-6 lg:px-10 xl:px-[6.2rem] 2xl:px-[9rem]">

      {/* Background blur */}
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-gray-300/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-orange-200/20 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto">

        {/* Top Section */}
        <div className="mb-[clamp(2rem,5vw,3.5rem)] flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

  {/* LEFT SIDE */}
  <div className="max-w-[42rem]">
    <Badge text="Our Features" />

    <motion.h2
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      custom={1}
      viewport={{ once: true }}
      className="mt-6 text-[clamp(1.8rem,3vw,2.6rem)] font-normal leading-tight"
    >
      What Sets Us Apart
    </motion.h2>

    <motion.p
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      custom={2}
      viewport={{ once: true }}
      className="mt-4 text-[#2A2A2A]/80 text-base sm:text-lg"
    >
We are a niche firm offering end-to-end business consulting and support services for all businesses across all sectors and are present alongside them throughout their lifecycle from ideation to validation to early traction to scaling to consistent growth phase of their business. We can be regarded as a one stop destination for all business support services.    </motion.p>

    <motion.div
      initial="hidden"
      whileInView="show"
      variants={fadeUp}
      custom={3}
      viewport={{ once: true }}
      className="mt-6"
    >
      <Button
        text="Get started"
        className="px-6 py-3"
        variant="glow"
        onClick={() => router.push("/contact_us")}
      />
    </motion.div>
  </div>

  {/* RIGHT SIDE QUOTE */}
  <motion.div
  initial="hidden"
  whileInView="show"
  variants={fadeUp}
  custom={4}
  viewport={{ once: true }}
  className="hidden lg:block max-w-[28rem] pt-12"
>
 <h4 className="text-[#FF8205] text-[1.1rem] sm:text-[1.3rem] font-normal text-right">
  Every business needs a dependable and trustworthy consultant, hence a
  <br />
  REAL PLANNER.
</h4>


</motion.div>

</div>

        {/* Features Grid with separators */}
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          {features.map((item, i) => (
            <React.Fragment key={item.title}>

              {/* CARD */}
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={fadeUp}
                custom={i + 1}
                viewport={{ once: true }}
                className="flex flex-col flex-1 px-0 lg:px-6"
              >
                <div className="flex flex-col gap-4 h-full">
                  <h3 className="flex items-center gap-3 text-lg sm:text-xl lg:text-[1.4rem] font-medium">
                    <span>{item.title}</span>
                    <ArrowCircle />
                  </h3>

                  <p className="text-[#2A2A2A]/80 text-base sm:text-lg">
                    {item.desc}
                  </p>

                  <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10] lg:mt-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>


              {/* SEPARATOR */}
              {i < features.length - 1 && (
                <>
                  {/* Mobile */}
                  <div className="my-8 h-px w-full bg-black/40 lg:hidden" />


                  {/* Desktop */}
                  <div className="hidden w-px self-stretch bg-black/40 lg:block" />
                </>
              )}

            </React.Fragment>
          ))}
        </div>


      </div>
      <motion.div
  initial="hidden"
  whileInView="show"
  variants={fadeUp}
  custom={4}
  viewport={{ once: true }}
  className="mt-12 pt-6 text-right lg:hidden"
>
  <h4 className="text-[#FF8205] text-[1.2rem] sm:text-[1.5rem] font-normal">
    Every business needs a dependable and trustworthy consultant, hence a
  <br />
  REAL PLANNER.
  </h4>

</motion.div>
    </section>
  );
}