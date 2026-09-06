"use client";

import { useEffect, useState } from "react";

export default function BlogDetailContent({ content }) {
  const [activeId, setActiveId] = useState("");

  const headings = content.filter((item) => item.type === "heading");

  // 🔥 SCROLL SPY LOGIC
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      headings.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();

          // Adjust this offset if needed
          if (rect.top <= 150) {
            current = section.id;
          }
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);

    // run once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <section className="bg-white text-black">
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-[clamp(2rem,4vw+1rem,5.1923rem)] px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">

        {/* LEFT - TOC */}
        <aside className="hidden lg:block sticky top-28 h-fit font-medium ">
          <ul className="space-y-4 text-sm">
            {headings.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`transition-colors duration-200 ${
                    activeId === h.id
                      ? "text-black"
                      : "text-gray-400 hover:text-black"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* RIGHT - CONTENT */}
        <div className="space-y-6">
          {content.map((block, index) => {
            switch (block.type) {
              case "heading":
                return (
                  <h2
                    key={block.id || index}
                    id={block.id}
                    className="scroll-mt-32 text-[clamp(1.5rem,2vw,1.65rem)] text-[#2A2A2A] font-normal leading-snug mb-3"
                  >
                    {block.text}
                  </h2>
                );

              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-black/60 text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed"
                  >
                    {block.text}
                  </p>
                );

              case "list":
                return (
                  <ul
  key={index}
  className="list-disc pl-6 space-y-2"
>
  {block.items.map((item, i) => (
    <li
      key={i}
      className="text-black/60 text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed"
    >
      {item}
    </li>
  ))}
</ul>
                );

              default:
                return null;
            }
          })}
        </div>

      </div>
    </section>
  );
}