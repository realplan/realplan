"use client";

import Image from "next/image";
import { Badge } from "../../shared";
import Frame_1 from "@/assets/solution_carousel/Frame_1.webp";

const casesData = [
  {
    image: Frame_1,
    title: "Location Analysis",
    description:
      "Our case studies highlight how we help businesses navigate complex challenges, uncover opportunities, and build strong foundations for sustainable growth.",
  },
  {
    image: Frame_1,
    title: "Market Feasibility",
    description:
      "Our case studies highlight how we help businesses navigate complex challenges, uncover opportunities, and build strong foundations for sustainable growth.",
  },
  {
    image: Frame_1,
    title: "Real Estate Research",
    description:
      "Our case studies highlight how we help businesses navigate complex challenges, uncover opportunities, and build strong foundations for sustainable growth.",
  },
];

export default function AlternativeSolutions() {
  return (
    <section className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem] py-[clamp(3rem,5vw,6rem)]">

      {/* Badge */}
      <Badge text="This might give you clarity" />

      {/* Heading */}
     <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] mb-4 mt-[1.25rem]">
        Alternative solutions and case studies for better context
      </h1>

      {/* Cards Grid */}
      <div className="mt-[clamp(2rem,3vw,3rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {casesData.map((item, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(
                    135deg,
                    rgba(250, 82, 15, 0.85) 6%,
                    rgba(255, 130, 5, 0.85) 24%,
                    rgba(255, 174, 0, 0.85) 52%,
                    rgba(255, 217, 0, 0.85) 76%,
                    rgba(255, 240, 194, 0.85) 100%
                  )`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 bg-[#EDEDED] p-4 sm:p-5 flex flex-col h-full rounded-2xl group-hover:bg-transparent transition-colors duration-300">

              {/* Image */}
              <div className="relative w-full h-[clamp(10rem,14vw,15rem)] rounded-lg overflow-hidden mb-4">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover scale-[1.12]"
  />
</div>

              {/* Title */}
              <h3 className="text-[#FF8205] text-[clamp(1.2rem,1vw+0.8rem,1.75rem)] font-medium leading-snug group-hover:text-black transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-[clamp(1rem,0.55vw+0.63rem,1rem)] leading-relaxed">
                {item.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}