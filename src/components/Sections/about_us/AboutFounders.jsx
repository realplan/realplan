"use client";

import Image from "next/image";
import { Badge } from "../../shared";

import founder1 from "../../../assets/about_us/founder_1.webp";
import founder2 from "../../../assets/about_us/founder_2.webp";

import { useMotionValue, useSpring } from "framer-motion";

export default function FoundersSection() {

  return (
    <section
      className="mt-[4rem] md:mt-[4rem] lg:mt-[4rem] relative px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"

    >
      {/* GRID REVEAL BACKGROUND: ONLY INSIDE THIS SECTION */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      </div>

      {/* BADGE */}
      <div className="mb-5 relative z-10">
        <Badge text="Meet the founders" />
      </div>

      {/* MAIN GRID */}
      <div className="flex flex-col lg:flex-row gap-[1rem] lg:gap-[17.625rem] relative z-10">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-between lg:w-[35%]">
          <div>
            <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.2] text-black max-w-[28rem]">
              The minds behind Real Plan Consulting
            </h2>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 lg:w-[65%]">

          {/* DESCRIPTION */}
          <p className="text-black/60 leading-normal text-[1.3rem]/80 sm:text-[1.3rem]">
            We are one of those niche companies who provide end-to-end business
            consulting and support services for all businesses across all sectors
            and is present alongside them throughout their lifecycle from ideation
            to validation to early traction to scaling to consistent growth phase
            of their business. We can be regarded as a one stop destination for all
            business support services.
          </p>

          {/* FOUNDERS GRID */}
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* FOUNDER 1 */}
  <div className="flex flex-col">
    <div className="overflow-hidden rounded-xl aspect-square">
      <Image
        src={founder1}
        alt="Founder 1"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
    </div>

    <h3 className="mt-4 text-[#FF8205] text-[1.4rem] sm:text-[1.75rem] font-medium">
      A VENKATA SAI KASYAP
    </h3>

    <p className="text-black/60 text-[1.125rem]">
      Founder of Real plan Consulting
    </p>
  </div>

  {/* FOUNDER 2 */}
  <div className="flex flex-col">
    <div className="overflow-hidden rounded-xl aspect-square">
      <Image
        src={founder2}
        alt="Founder 2"
        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
      />
    </div>

    <h3 className="mt-4 text-[#FF8205] text-[1.4rem] sm:text-[1.75rem] font-medium">
      VINOTH S
    </h3>

    <p className="text-black/60 text-[1.125rem]">
      Founder of Real plan Consulting
    </p>
  </div>

</div>

          {/* MOBILE TAGLINE (RIGHT ALIGNED) */}
          <div className="lg:hidden text-right mt-3">
          <h4 className="text-[#FF8205] text-[clamp(1.16rem,1.2vw,1.3rem)] font-normal">
  Every business needs a dependable and a trustworthy consultant.
</h4>

            <p className="text-black text-[0.9rem] mt-1">
              — Real Plan Consulting Team
            </p>
          </div>

        </div>

        {/* DESKTOP TAGLINE (LEFT BOTTOM) */}
        <div className="hidden lg:block absolute left-0 bottom-0 lg:w-[35%] z-10">
          <h4 className="text-[#FF8205] text-[1.1rem] sm:text-[1.3rem] font-normal">
            Every business needs a dependable and a trustworthy consultant.
          </h4>

          <p className="text-black text-sm mt-1">
            — Real Plan Consulting Team
          </p>
        </div>

      </div>
    </section>
  );
}