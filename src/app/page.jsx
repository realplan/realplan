"use client";

import {
  HomePage,
  AboutPage,
  SectorSection,
  SolutionSection,
  ConversationSection,
  WhyChooseUs
} from "../components/Sections/home";
import { TestimonialCarousel } from "../components/shared/Carousel/TestimonialCarousel";
import { Footer } from "../components/layouts";
import { Badge } from "../components/shared";
import { Button, GridReveal } from "../components/ui";
import { useRouter } from "next/navigation";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function Page() {
  const router = useRouter();

  // ✅ GRID REVEAL LOGIC
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ❌ NO GRID REVEAL */}
      <HomePage />

      {/* ✅ GRID REVEAL ONLY FOR THESE SECTIONS */}
      <motion.section
        className="relative w-full overflow-hidden"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        {/* GRID LAYER */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <GridReveal
            x={smoothX}
            y={smoothY}
            theme="golden_orange"
            radius="16.25rem"
          />
        </div>

        {/* CONTENT */}
        <div className="relative z-20">
          <AboutPage />
      <SolutionSection />
          <WhyChooseUs />
      <ConversationSection />
          <SectorSection />
          <TestimonialCarousel className="px-4 sm:px-6 md:px-0" />
        </div>
      </motion.section>


      {/* ❌ NO GRID REVEAL */}
      <Footer
        hand={true}
        topContent={{
          badge: <Badge text={"Let's talk business"} />,
          heading: "Let's kick things off!",
          description: (
            <>
              We believe that every idea needs research. <br />
              Take the first step: Contact us, and together, we will build a
              great future for your <br /> dreams.
            </>
          ),
          headingClass:
            "text-[2.3rem] sm:text-[2.3rem] font-regular leading-snug text-white",
          descriptionClass:
            "text-[clamp(1.1rem,2.8vw,1.125rem)] mx-auto leading-[1.5] line-clamp-4",
          cta: (
            <Button
              text="Get Started"
              variant="glow"
              onClick={() => router.push("/about_us")}
              className="py-[clamp(0.5rem,2vw,0.5rem)]"
            />
          ),
        }}
      />
    </>
  );
}