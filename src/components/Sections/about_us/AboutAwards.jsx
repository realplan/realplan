"use client";

import Image from "next/image";
import { Badge } from "../../shared";
import certificate from "../../../assets/about_us/certificate.webp";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../../ui";


export default function AwardsSection() {
  return (
    <section className="mt-[3rem] md:mt-[5rem]">

      {/* ENTIRE GRADIENT CARD */}
      <div
  className="
    relative overflow-hidden rounded-[2rem] home-bg">
        {/* GRID OVERLAY */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="
              w-full h-full
              bg-[linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),
                  linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)]
              bg-[size:calc(10vw)_calc(10vw)] /* responsive line spacing */
            "
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-[19rem] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem] py-[3rem] md:py-[4rem] text-center lg:text-left">

          {/* LEFT */}
          <div className="flex flex-col gap-6 lg:w-[55%] items-center lg:items-start">
            <Badge text="Awards and Recognition" variant="white" />

            <h2 className="text-[clamp(1.71rem,3.3vw,2.66rem)] leading-[1.2] text-[#2A2A2A]">
  Certificate of recognition from silicon India magazine and
  Swiftnlift business magazine
</h2>

            <p className="text-black/60 leading-normal text-[1.14rem]/80 sm:text-[1.14rem]">
  Real Plan Consulting is an award winning Pan India Turnkey Business
  Consulting and a Market Research Firm. We can be regarded as a one
  stop destination for all business advisory and support services.
</p>
            <Button
          text="More awards"
          variant="white"
          onClick={() => router.push("/contact_us")}
        />
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-[45%] max-w-[25rem] flex justify-center lg:justify-end">
            <Image
              src={certificate}
              alt="Award Certificate"
              className="w-full h-auto object-contain rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}