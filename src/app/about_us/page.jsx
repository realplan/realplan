"use client";

import {
  AboutUsPage,
  FoundersSection,
  AwardsSection,
  MissionVisionSection,
  WhyChooseUs
} from "../../components/Sections";
import { LogoCarousel, Badge } from "../../components/shared";
import { Footer } from "../../components/layouts";
import { Button, GridReveal } from "../../components/ui";
import { useRouter } from "next/navigation";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";

import { useMotionValue, useSpring, motion } from "framer-motion";

export default function AboutUs() {
  const router = useRouter();

  // ✅ GRID LOGIC
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ✅ GRID REVEAL AREA */}
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
        <div className="relative z-[100]">
          <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />

          <AboutUsPage />
          <WhyChooseUs />
          <FoundersSection />
          <AwardsSection />
          <MissionVisionSection />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
        </div>
      </motion.section>

      {/* ❌ NO GRID REVEAL */}
      <Footer
        hand={true}
        topContent={{
          badge: (
            <Badge text={"Let's talk business"} className="mt-[3rem]" />
          ),
          heading: "Tell us your requirement",
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
            "text-base sm:text-[1.3rem] mx-auto text-white/90",
          cta: (
            <Button
              text="Get Started"
              variant="glow"
              onClick={() => router.push("/contact_us")}
            />
          ),
        }}
      />
    </>
  );
}