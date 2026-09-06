"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../../ui";

export default function SolutionCarousel({
  items = [],
  interval = 3000,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!items.length || isPaused) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items, interval, isPaused]);

  if (!items.length) {
    return <div className="text-white p-4">No items available</div>;
  }

  const handleNavigate = (slug) => {
    router.push(`/solutions/${slug}`);
  };

  return (
    <div
      className={`
        relative
        w-full
        aspect-square
        rounded-2xl
        overflow-hidden
        shadow-2xl
        border border-white/30
        bg-black
        cursor-pointer
        group
        ${className}
      `}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* TRACK */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          width: `${items.length * 100}%`,
          transform: `translateX(-${index * (100 / items.length)}%)`,
        }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="relative h-full flex-shrink-0 group/item cursor-pointer"
            style={{ width: `${100 / items.length}%` }}
            onClick={() => handleNavigate(item.slug)}
          >
            {/* IMAGE WRAPPER */}
            <div className="w-full h-full overflow-hidden bg-black">
              <img
  src={typeof item.image === "string" ? item.image : item.image.src}
  alt={item.title.toUpperCase()}
  className="
    w-full h-full object-cover
    grayscale group-hover:grayscale-0
    group-hover:scale-105
    group-hover:opacity-50
    transition-all duration-500
  "
/>
            </div>

            {/* GRADIENT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* CENTER BUTTON */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="pointer-events-auto opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <Button
                  type="button"
                  text="Know more"
                  onClick={(event) => {
                    event.stopPropagation();
                    handleNavigate(item.slug);
                  }}
                >
                  View Solution
                </Button>
              </div>
            </div>

            {/* TITLE */}
            <div className="absolute top-4 left-4 z-10 text-white">
              <h2 className="text-base lg:text-lg font-semibold uppercase">{item.title}</h2>
            </div>

            {/* DESCRIPTION */}
            <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
              <p className="text-[clamp(1.1rem,2.5vw,0.95rem)] text-white/80 uppercase">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* INDICATORS */}
      <div className="absolute top-3 right-3 flex gap-1 z-10">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-[2px] transition-all duration-500 ${
              i === index ? "bg-white scale-125" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
