"use client";

import { useState } from "react";
import { CaseStudyDetails } from "@/components/Sections/case_studies";
import { CASE_STUDIES } from "@/data/caseStudiesData"; // ✅ import data

export default function CaseStudiesOutcomes() {
  const [active, setActive] = useState(CASE_STUDIES[0].category); // ✅ default first category
  const activeData = CASE_STUDIES.find(
  (c) => c.category === active
);

  return (
    <section
      className="w-full px-[clamp(1rem,2vw+0.5rem,4rem)]
      xl:px-[6.2rem]
      2xl:px-[9rem]"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[2.9375rem]">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-[clamp(1rem,2.5vw,1.3rem)] font-normal leading-tight">
            <span className="text-[#2A2A2A]/50 whitespace-nowrap">
              Proven outcomes.
            </span>
            <br />
            <span className="text-black whitespace-nowrap">
              Real business impact.
            </span>
          </h2>
        </div>

        {/* RIGHT TABS */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-3 pb-[7.0625rem] border-b border-black mb-[clamp(2rem,5vw,3rem)]">

            {CASE_STUDIES.map((tab) => {
              const isActive = active === tab.category;

              return (
                <button
                  key={tab.category}
                  onClick={() => setActive(tab.category)} // ✅ set active
                  className={`
                    px-3 py-0.5 rounded-full text-[1.125rem] whitespace-nowrap
                    border transition-all duration-300
                    ${
  isActive
    ? "bg-[#FF8205] border-[#FF8205] text-black shadow-md"
    : "border-black text-black hover:bg-[#FF8205] hover:text-black hover:border-[#FF8205] hover:shadow-md hover:cursor-pointer"
}
                  `}
                >
                  {tab.category} ({tab.items.length}) {/* ✅ dynamic count */}
                </button>
              );
            })}

          </div>

          {/* KEEP SAME — no design change */}
          <CaseStudyDetails data={activeData?.items} />

        </div>
      </div>
    </section>
  );
}