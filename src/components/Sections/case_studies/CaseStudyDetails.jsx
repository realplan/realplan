"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Frame_1 from "../../../assets/Frame 2085665781.webp";
import { Button } from "../../ui";
import { CASE_STUDIES } from "../../../data/caseStudiesData";

export default function CaseStudyDetails({ data }) {
  const items = data || CASE_STUDIES[0].items;

  const [openIndexes, setOpenIndexes] = useState([]);
  const refs = useRef([]);
  const [heights, setHeights] = useState([]);

  // reset when items change
  useEffect(() => {
    setOpenIndexes([]);
  }, [items]);

  // calculate heights
  useEffect(() => {
    const newHeights = refs.current.map((ref, i) =>
      openIndexes.includes(i) ? ref?.scrollHeight + "px" : "0px"
    );
    setHeights(newHeights);
  }, [openIndexes, items]);

  return (
    <section className="mt-[1rem] bg-white">
      {items.map((item, index) => {
        const isWideLayout = (item.approach?.length || 0) > 2;
        const isOpen = openIndexes.includes(index);

        return (
          <div key={index} className="group cursor-pointer mb-8">

            {/* TITLE */}
            <div
              className="flex items-center justify-between gap-[3px] mb-4 lg:justify-start lg:gap-4"
              onClick={() =>
                setOpenIndexes((prev) =>
                  prev.includes(index)
                    ? prev.filter((i) => i !== index) // close
                    : [...prev, index] // open
                )
              }
            >
              <h1 className="text-[clamp(1.2rem,2.5vw,2rem)] font-normal text-[#2A2A2A] leading-snug">
                {item.title}
              </h1>

              {!isOpen && (
                <div className="lg:opacity-0 lg:translate-x-2 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 transition-all duration-300">
                  <Button
                    text="Read More"
                    variant="white"
                    arrowDirection="down"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndexes((prev) => [...prev, index]);
                    }}
                  />
                </div>
              )}
            </div>

            {/* COLLAPSIBLE */}
            <div
              style={{ height: heights[index] || "0px" }}
              className="overflow-hidden transition-all duration-500"
            >
              <div
                ref={(el) => (refs.current[index] = el)}
                className="transition-all duration-500"
              >
                <div
                  className={`
                    flex flex-col lg:grid gap-[clamp(1rem,2vw,2rem)] items-start
                    ${
                      isWideLayout
                        ? "lg:grid-cols-[2fr_1fr]"
                        : "lg:grid-cols-[70%_30%]"
                    }
                  `}
                >

                  {/* IMAGE */}
                  <div className="w-full lg:w-[clamp(200px,22vw,286px)] lg:order-2">
                   <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover rounded-lg"
                      priority
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="lg:order-1">
                    <p className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-snug
 mb-6">
                      {item.description}
                    </p>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div>
                        <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-normal leading-tight mb-1">
  Client
</h3>
                        <p className="text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-snug">
                          {item.client}
                        </p>
                      </div>

                      <div>
                         <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-normal leading-tight mb-1">
                          Research type
                        </h3>
                        <p className="text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-snug">
                          {item.researchType}
                        </p>
                      </div>

                      <div className={isWideLayout ? "md:col-span-2" : ""}>
                         <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-normal leading-tight mb-1">
                          Research approach
                        </h3>
                        <ul className="list-disc pl-5 text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-snug space-y-1">
                          {item.approach?.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* OUTCOME */}
                    <div className="mb-[clamp(1.5rem,5vw,3rem)]">
                       <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-normal leading-tight mb-1">
                        Research outcome
                      </h3>
                      <ul className="list-disc pl-5 text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-snug space-y-1">
                        {Object.entries(item.outcomes || {}).map(
                          ([mainPoint, subPoints], i) => (
                            <li key={i}>
                              {mainPoint}
                              {Array.isArray(subPoints) &&
                                subPoints.length > 0 && (
                                  <ul className="list-decimal pl-6 mt-1 space-y-1">
                                    {subPoints.map((sp, j) => (
                                      <li key={j}>{sp}</li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="border-b border-black mt-[clamp(1rem,3vw,0.5rem)]" />
          </div>
        );
      })}
    </section>
  );
}