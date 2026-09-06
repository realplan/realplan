"use client";

import { CaseStudyDetails } from "@/components/Sections/case_studies";
import { CASE_STUDIES } from "@/data/caseStudiesData";

export default function CaseStudiesOutcomes({
  selectedCategory = CASE_STUDIES[0].category,
  onCategoryChange,
}) {
  const activeData = CASE_STUDIES.find(
    (c) => c.category === selectedCategory
  );

  const handleCategorySelect = (category) => {
    onCategoryChange?.(category);
  };

  return (
    <section
      id="case-outcomes"
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
          <div className="flex flex-wrap gap-3 pb-[7.0625rem] ">
            {CASE_STUDIES.map((tab) => {
              const isActive = selectedCategory === tab.category;
              return (
                <button
                  key={tab.category}
                  onClick={() => handleCategorySelect(tab.category)}
                  className={`
                    px-3 py-0.5 rounded-full text-[1rem] whitespace-nowrap
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

          <div className="border-t border-black pt-4 bg-white">
            <CaseStudyDetails data={activeData?.items} />
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="lg:hidden w-full">

          <div className="flex items-center gap-3 mb-6 w-full min-w-0">
            <h2 className="text-[clamp(1.1rem,4vw,1.4rem)] font-normal leading-tight shrink-0">
              <span className="text-[#2A2A2A]/50 whitespace-nowrap">
                Proven outcomes.
              </span>
              <br />
              <span className="text-black whitespace-nowrap">
                Real business impact.
              </span>
            </h2>

            <select
              value={selectedCategory}
              onChange={(e) => handleCategorySelect(e.target.value)}
              className="text-black text-[0.9rem] border border-black rounded-2xl flex-1 min-w-0 px-2 pr-2 py-1"
            >
              {CASE_STUDIES.map((tab) => (
                <option key={tab.category} value={tab.category}>
                  {tab.category} ({tab.items.length})
                </option>
              ))}
            </select>
          </div>

          <div className="border-t border-black pt-4 bg-white">
            <CaseStudyDetails data={activeData?.items} />
          </div>

        </div>
      </div>
    </section>
  );
}
