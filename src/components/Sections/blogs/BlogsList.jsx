"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Frame_1 from "../../../assets/Frame 2085665781-2.webp";
import Image from "next/image";
import { Button } from "../../ui";

const categories = ["All posts", "Feasibility Study", "Location Analysis", "Market Research"];

const blogs = [
  {
    id: 1,
    date: "17 October 2024",
    category: "Market Research",
    title: "Decoding Shifts in Consumer Preferences in India's FMCG Market",
    description: "India's Fast-Moving Consumer Goods (FMCG) sector has undergone transformative changes in recent years, driven by evolving consumer preferences, digital advancements, and shifting socio-economic dynamics.",
    image: Frame_1,
    slug: "decoding-shifts-consumer-preferences",
  },
  {
    id: 2,
    date: "17 October 2024",
    category: "Market Research",
    title: "The Essential Role of Market Research in Start-Up Success",
    description: "In the competitive world of start-ups, where bold ideas collide with market realities, one element stands out as a fundamental pillar for success: Market Research.",
    image: Frame_1,
    slug: "essential-role-market-research-startup-success",
  },
  {
    id: 3,
    date: "16 October 2024",
    category: "Location Analysis",
    title: "Optimising Business Success through Strategic Location Analysis",
    description: "In today's fiercely competitive business environment, establishing your business in the right location can mean the difference between success and failure.",
    image: Frame_1,
    slug: "optimising-business-success-strategic-location-analysis",
  },
  {
    id: 4,
    date: "16 October 2024",
    category: "Location Analysis",
    title: "The Importance of Market Research in Today's Competitive Business",
    description: "In today's fast-evolving business environment, competition is fiercer than ever. Companies are constantly vying for market share, customer attention, and loyalty.",
    image: Frame_1,
    slug: "importance-market-research-competitive-business",
  },
];

export default function BlogsList() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("All posts");
  const [isOpen, setIsOpen] = useState(false);

  const filtered =
    activeCategory === "All posts"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem] py-4 sm:py-2 lg:py-[clamp(3rem,5vw,5rem)]">
      <div className="flex flex-col lg:flex-row gap-[clamp(1.5rem,9vw,10.375rem)]">

        {/* LEFT SIDEBAR */}
       <div className="w-full lg:w-[220px] shrink-0 lg:sticky lg:top-[5rem] lg:self-start">
  <div className="flex flex-col">

    {categories.map((category) => (
      <div
        key={category}
        onClick={() => setActiveCategory(category)}
        className="flex items-center py-3 pl-4 border-b border-black/20 cursor-pointer"
      >
        <span
          className={`text-[clamp(0.9rem,1.5vw,1rem)] leading-relaxed text-black ${
            activeCategory === category ? "font-medium" : ""
          }`}
        >
          {category}
        </span>
      </div>
    ))}

  </div>
</div>

        {/* RIGHT BLOG LIST */}
        <div className="flex-1 flex flex-col divide-y divide-black">
          {filtered.map((blog) => (
            <div key={blog.id} className="flex flex-col lg:flex-row items-stretch justify-between gap-6 md:gap-[5rem] py-8">

              {/* LEFT TEXT */}
              <div className="flex-1 flex flex-col">

                <div className="flex items-center gap-2 mb-4">
                  <span className="border border-black/40 text-black text-[0.8rem] px-3 py-0.5 rounded-full">
                    {blog.date}
                  </span>
                  <span className="text-black/30">|</span>
                  <span className="border border-black/40 text-black text-[0.8rem] px-3 py-0.5 rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h2 className="text-[clamp(1.5rem,2vw,1.65rem)] text-[#2A2A2A] font-normal leading-snug mb-3">
                  {blog.title}
                </h2>

                <p className="text-black/50 text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed mb-6">
                  {blog.description}
                </p>

                {/* ✅ FIX: prevent button stretching */}
                <div className="self-start">
                  <Button
                    text="Read more"
                    onClick={() => router.push(`/blogs/${blog.slug}`)}
                    variant="white"
                  />
                </div>

                {/* ✅ FIX: square image on mobile */}
                <div className="mt-6 flex lg:hidden w-full">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover rounded-lg grayscale"
                    />
                  </div>
                </div>
              </div>

              {/* DESKTOP IMAGE */}
              <div className="hidden lg:flex w-[clamp(14rem,25vw,20rem)] shrink-0 self-stretch">
                <div className="relative w-full h-full min-h-[12rem]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-lg grayscale"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}