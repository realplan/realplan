"use client";

import { Badge } from "@/components/shared";

const cards = [
  {
    heading: "FEASIBILITY",
    content:
      "Is your product or service innovative, aligned to address the user’s need, satisfy the market demand and most important of all, conveniently market penetrable and scalable?",
  },
  {
    heading: "VIABILITY",
    content:
      "Can your product or service withstand the test of time, adapt to the changing market dynamics, overcome the competitor retaliation and most of important of all, be profitable?",
  },
  {
    heading: "SUSTAINABILITY",
    content:
      "Will your product or service be a positive contributor to the community, society, economy, environment and most important of all, future reliable?",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full py-20 flex flex-col gap-[clamp(1rem,1.25vw,1.25rem)]
        px-[clamp(1rem,2vw+0.5rem,4rem)]
        xl:px-[6.2rem]
        2xl:px-[9rem]"
    >
      {/* Badge */}
      <div>
        <Badge text="Why Choose Us" />
      </div>

      {/* Heading row */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <h2
          className="font-regular leading-tight text-black"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
        >
          Our Philosophy is to Deliver
        </h2>

        <div className="flex flex-col text-right shrink-0">
          <h4 className="text-[#FF8205] text-[clamp(1.16rem,1.2vw,1.3rem)] font-normal">
            Our philosophy is to deliver
          </h4>
          <p className="text-black text-[0.9rem] mt-1">
            — Real Plan Consulting Team
          </p>
        </div>
      </div>

      {/* Subtitle */}
      <h3 className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/80 leading-relaxed">
        We help organisations make confident decisions by evaluating feasibility,
        long-term
        <br />
        viability, and sustainable impact through rigorous research and objective
        analysis.
      </h3>

      {/* Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
  {cards.map((card, index) => (
    <div
      key={index}
      className="bg-[#F5F5F5] rounded-2xl p-7 flex flex-col justify-between gap-6 h-full"
    >
      {/* Content */}
      <p
  className="text-black/40 leading-snug"
  style={{
    fontSize:
      "clamp(calc(1rem * 0.912), calc(1vw * 0.912), calc(1.25rem * 0.912))",
  }}
>
        {card.content}
      </p>

      {/* Heading (always bottom aligned) */}
      <h2 className="text-[3.1rem] font-medium text-black flex items-baseline gap-1">
        {card.heading}
      </h2>
    </div>
  ))}
</div>
    </section>
  );
}