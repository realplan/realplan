"use client";

import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import {
  CaseStudiesHero,
  CaseStudiesOutcomes,
  AlternativeSolutions,
} from "@/components/Sections/case_studies";
import LogoCarousel from "../../components/shared/Carousel/LogoCarousel";
import { Footer } from "@/components/layouts";
import { Badge } from "@/components/shared";
import { Button, GridReveal } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function AboutUs() {
  const router = useRouter();

  // ✅ SAME AS BLOGS PAGE
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ✅ GRID REVEAL SECTION */}
      <motion.section
        className="relative w-full overflow-hidden"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        {/* GRID REVEAL */}
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
          <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />

          <CaseStudiesHero />
          <CaseStudiesOutcomes />
          <AlternativeSolutions />
          <LogoCarousel grayscale={true} />
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