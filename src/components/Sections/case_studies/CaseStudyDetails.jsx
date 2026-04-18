"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Frame_1 from "../../../assets/Frame 2085665781.webp";
import { Button } from "../../ui";
import { CASE_STUDIES } from "../../../data/caseStudiesData";

export default function CaseStudyDetails({ data }) {
  const items = data || CASE_STUDIES[0].items;

  const [openIndex, setOpenIndex] = useState(0);
  const refs = useRef([]);
  const [heights, setHeights] = useState([]);

  useEffect(() => {
    setOpenIndex(0);
  }, [items]);

  useEffect(() => {
    const newHeights = refs.current.map((ref, i) =>
      i === openIndex ? ref?.scrollHeight + "px" : "0px"
    );
    setHeights(newHeights);
  }, [openIndex, items]);

  return (
    <section className="mt-[1rem]">
      {items.map((item, index) => {
        const isWideLayout = (item.approach?.length || 0) > 2;

        return (
          <div key={index} className="group cursor-pointer mb-8">

            {/* TITLE */}
            <div
              className="flex items-center gap-4 mb-6"
              onClick={() =>
                setOpenIndex(index === openIndex ? -1 : index)
              }
            >
              <h1 className="text-[clamp(1.5rem,2.5vw,2rem)] font-normal text-[#2A2A2A]">
                {item.title}
              </h1>

              {openIndex !== index && (
                <div className="opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <Button
                    text="Read More"
                    variant="white"
                    arrowDirection="down"
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenIndex(index);
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
                    grid gap-[clamp(1rem,2vw,2rem)] items-start
                    ${isWideLayout
                      ? "grid-cols-1 md:grid-cols-[2fr_1fr]"
                      : "grid-cols-1 lg:grid-cols-[70%_30%]"
                    }
                  `}
                >

                  {/* LEFT */}
                  <div>

                    <p className="text-[#2A2A2A]/60 text-[clamp(1rem,1.8vw,1.125rem)] leading-relaxed mb-10">
                      {item.description}
                    </p>

                    {/* INFO GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                      <div>
                        <h3 className="text-[clamp(1.2rem,1.35vw,1.32rem)] font-normal mb-2">
                          Client
                        </h3>
                        <p className="text-[#2A2A2A]/60">{item.client}</p>
                      </div>

                      <div>
                        <h3 className="text-[clamp(1.2rem,1.35vw,1.32rem)] font-normal mb-2">
                          Research type
                        </h3>
                        <p className="text-[#2A2A2A]/60">
                          {item.researchType}
                        </p>
                      </div>

                      <div className={isWideLayout ? "md:col-span-2" : ""}>
                        <h3 className="text-[clamp(1.2rem,1.35vw,1.32rem)] font-normal mb-2">
                          Research approach
                        </h3>

                        <ul className="list-disc pl-5 text-[#2A2A2A]/60 space-y-1">
                          {item.approach?.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* OUTCOME (NEW STRUCTURE) */}
                    <div className="mb-[clamp(2rem,5vw,3rem)]">
                      <h3 className="text-[clamp(1.2rem,1.35vw,1.32rem)] font-normal mb-2">
                        Research outcome
                      </h3>

                      <ul className="list-disc pl-5 text-[#2A2A2A]/60 space-y-5">
                        {Object.entries(item.outcomes || {}).map(
                          ([mainPoint, subPoints], i) => (
                            <li key={i}>
                              {mainPoint}

                              {Array.isArray(subPoints) && subPoints.length > 0 && (
                                <ul className="list-decimal pl-6 mt-2 space-y-1">
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

                  {/* RIGHT IMAGE */}
                  <div className="w-[clamp(200px,22vw,286px)]">
                    <Image
                      src={Frame_1}
                      alt={item.title}
                      className="w-full h-auto object-cover rounded-lg"
                      priority
                    />
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