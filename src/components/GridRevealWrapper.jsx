"use client";

import { useMotionValue, useSpring } from "framer-motion";
import { GridReveal } from "@/components/ui";

export default function GridRevealWrapper({ children }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <section
      className="relative w-full overflow-hidden"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <GridReveal
          x={smoothX}
          y={smoothY}
          theme="golden_orange"
          radius="16.25rem"
        />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        {children}
      </div>

    </section>
  );
}