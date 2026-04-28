"use client";

import logo_orange from "../../../assets/Company_Logo/logo_orange.webp";
import cycle from "../../../assets/about_us/cycle.webp";
import { Badge } from "../../shared";
import { useRouter } from "next/navigation";
import { Button } from "../../ui";
import Image from "next/image";

import { useMotionValue, useSpring } from "framer-motion";

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <div
      className="relative text-white"
    >
      {/* GRID REVEAL BACKGROUND: FULL PAGE INCLUDING HEADER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
      </div>

      {/* HEADER */}
      <div className="relative z-10">

      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-10 lg:mt-[8em] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]">

        {/* BADGE */}
        <div className="mb-6">
          <Badge text="Who we are" />
        </div>

        {/* MAIN HEADING */}
       <h1 className="text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] mb-4">
  <span className="text-black">Our team.</span>{" "}
  <span className="text-black/60">
    works with you to deliver actionable research
    <br />
    insights and a structured strategy,
  </span>{" "}
  <span className="text-black">
    enabling confident
    <br />
    decision-making and market validation.
  </span>
</h1>
        {/* PARAGRAPH 1 */}
       <p className="text-black/60 leading-normal text-[1.2rem]/80 sm:text-[1.2rem] mb-[2rem]">
  Real Plan Consulting was founded in the year{" "}
  <span className="underline">2016</span> during the startup boom in India{" "}
  <span className="hidden sm:inline"><br /></span>
  aimed at providing Good Quality Professional Business Support Services.
</p>

        {/* PARAGRAPH 2 */}
        <p className="text-black/60 leading-normal text-[1.22rem]/80 sm:text-[1.22rem] mb-[1rem]">
          We operate in the domain of Strategic Market Research, Scientific Location Analysis{" "}
          <span className="hidden sm:inline"><br /></span>
          Market Feasibility Studies, Brand Consulting, Core Industry Market Intelligence, Real{" "}
          <span className="hidden sm:inline"><br /></span>
          Estate Research, Socio-Economic Research, Political Research.
        </p>

        {/* CTA BUTTON */}
        <Button
          text="Inquiry with us"
          variant="dark"
          onClick={() => router.push("/contact_us")}
          className="py-[clamp(0.8rem,2vw,0.6rem)]"
        />
      </div>

      {/* FULL-WIDTH IMAGE */}
      <div
        className="
          w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]
          mt-[2.5rem] md:mt-[3rem] lg:mt-[4rem]
          px-[0.5rem] z-10
        "
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