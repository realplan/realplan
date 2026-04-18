import { Badge } from "../../shared";
import Image from "next/image";
import { sectorsData } from "@/data/sectorsmainData";


export default function SectorsHero() {
  return (
    <div className="px-[clamp(1rem,4vw,6rem)] xl:px-[clamp(6rem,5vw,9rem)] py-10 flex flex-col items-center text-center">

      {/* Top Content */}
      <Badge text="Industries We Serve" />

      <h2 className="text-[clamp(1.4rem,1.5vw+0.8rem,3rem)] text-[#2A2A2A] leading-[1.2] mt-[2rem]">
        Sectors we are specialise in
      </h2>

      <h3 className="mt-[clamp(0.5rem,0.8vw,0.9rem)] text-[clamp(0.95rem,0.8vw+0.6rem,1.25rem)] text-[#2A2A2A]/80 max-w-2xl">
        Deep expertise across diverse sectors delivering measurable results.
      </h3>

      {/* GRID */}
      <div className="mt-[clamp(2rem,3vw,3rem)] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 text-left">

        {sectorsData.map((item, i) => {
          const total = sectorsData.length;
          const isLastRowTwo = total % 3 === 2 && i >= total - 2;

          return (
            <div
              key={i}
              className={`
                group relative rounded-2xl overflow-hidden flex flex-col h-full
                transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                ${isLastRowTwo ? "lg:col-span-3" : "lg:col-span-2"}
              `}
            >
              {/* Gradient */}
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
                <div className="relative w-full h-[clamp(16.2rem,20vw,22rem)] rounded-md overflow-hidden mb-4">
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
                <p className="text-gray-600 text-[clamp(0.85rem,0.55vw+0.63rem,1rem)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Pill */}
                <div className="mt-auto">
                  <div
                    className="
                      inline-flex items-center justify-center
                      px-[1rem]
                      h-[clamp(1.6rem,1.5vw,1.9375rem)]
                      rounded-full
                      border border-black
                      bg-transparent text-black
                      text-[clamp(0.8rem,0.5vw+0.5rem,0.95rem)]
                      transition-colors duration-300
                      group-hover:border-white group-hover:text-white
                      whitespace-nowrap
                    "
                  >
                    {item.tag}
                  </div>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}