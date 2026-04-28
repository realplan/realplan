"use client";

import { useState } from "react";
import { CaseStudyDetails } from "@/components/Sections/case_studies";
import { CASE_STUDIES } from "@/data/caseStudiesData";
import { ChevronDown } from "lucide-react";

export default function CaseStudiesOutcomes() {
  const [active, setActive] = useState(CASE_STUDIES[0].category);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeData = CASE_STUDIES.find((c) => c.category === active);

  return (
    <section
      className="w-full px-[clamp(1rem,2vw+0.5rem,4rem)]
      xl:px-[6.2rem]
      2xl:px-[9rem]"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-[2.9375rem]">

        {/* LEFT CONTENT — desktop only */}
        <div className="hidden lg:block">
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

        {/* DESKTOP TABS */}
        <div className="flex-1 hidden lg:block">
          <div className="flex flex-wrap gap-3 pb-[7.0625rem] border-b border-black mb-[clamp(2rem,5vw,3rem)]">
            {CASE_STUDIES.map((tab) => {
              const isActive = active === tab.category;
              return (
                <button
                  key={tab.category}
                  onClick={() => setActive(tab.category)}
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
                  {tab.category} ({tab.items.length})
                </button>
              );
            })}
          </div>
          <CaseStudyDetails data={activeData?.items} />
        </div>

        {/* MOBILE DROPDOWN */}
        <div className="lg:hidden w-full">

          {/* Heading + pill on same line */}
          <div className="flex items-center justify-between gap-2 mb-6 w-full min-w-0">

            {/* Heading — shrinks if needed */}
            <h2 className="text-[clamp(1.1rem,4vw,1.4rem)] font-normal leading-tight shrink-0">
              <span className="text-[#2A2A2A]/50 whitespace-nowrap">
                Proven outcomes.
              </span>
              <br />
              <span className="text-black whitespace-nowrap">
                Real business impact.
              </span>
            </h2>

       {/* Orange pill trigger */}
<div className="relative shrink-0">
  <button
    onClick={() => setMobileOpen((prev) => !prev)}
className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF8205] text-black font-normal text-[clamp(0.75rem,3vw,1rem)] uppercase tracking-wide whitespace-nowrap"  >
    <span>{active} ({activeData?.items.length})</span>
    <ChevronDown
  className={`transition-transform duration-300 w-5 h-5 ${
    mobileOpen ? "rotate-180" : "rotate-0"
  }`}
/>
  </button>

  {/* Dropdown — same width as button, more rounded */}
  {mobileOpen && (
    <div className="absolute top-[110%] right-0 w-full z-50 bg-white border border-[#FF8205] rounded-3xl overflow-hidden shadow-lg">
      {CASE_STUDIES.map((tab) => {
        const isActive = active === tab.category;
        return (
          <button
            key={tab.category}
            onClick={() => {
              setActive(tab.category);
              setMobileOpen(false);
            }}
            className={`
              w-full text-left px-5 py-3 text-[0.95rem] uppercase tracking-wide transition-colors duration-200
              ${
                isActive
                  ? "bg-[#FF8205] text-black font-semibold"
                  : "text-black hover:bg-[#FF8205]/20"
              }
            `}
          >
            {tab.category} ({tab.items.length})
          </button>
        );
      })}
    </div>
  )}
</div>

          </div>

          {/* Content */}
          <div className="border-t border-black pt-4">
  <CaseStudyDetails data={activeData?.items} />
</div>
        </div>

      </div>
    </section>
  );
}