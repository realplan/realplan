"use client";

import { ContactUsPage } from "../../components/Sections";
import { Footer } from "../../components/layouts";
import { Badge, LogoCarousel } from "../../components/shared";
import { Button, GridReveal } from "../../components/ui";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { TestimonialCarousel } from "../../components/shared/Carousel/TestimonialCarousel";
import { useRouter } from "next/navigation";


import { useMotionValue, useSpring, motion } from "framer-motion";

export default function ContactUs() {
  // ✅ GRID LOGIC
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ✅ GRID REVEAL AREA */}
      <motion.section
        className="relative w-full min-h-screen"
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

          <ContactUsPage />
          {/* <TestimonialInfo /> */}
          <TestimonialCarousel />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
        </div>
      </motion.section>

      {/* ❌ NO GRID REVEAL */}
      <Footer
        hand={false}
        topContent={{
          badge: <Badge text={"Who we are"} className="mt-[1rem]" />,
          heading: (
            <>
              Know more about <br />
              Real Plan Consulting
            </>
          ),
          description: (
            <>
              At Real Plan Consulting, we don’t just plan for today, <br />
              We plan for your future.
            </>
          ),
          headingClass:
  "text-[clamp(1.6rem,4vw,2.5rem)] font-normal text-white",
          descriptionClass:
  "text-[clamp(0.95rem,2.2vw,1.375rem)] max-w-full sm:max-w-xxl mx-auto text-white/90",
          cta: <Button text="About Us" variant="glow"
          onClick={() => router.push("/about_us")}
           className="px-[clamp(0.8rem,2vw,1rem)]"
           />,
        }}
      />
    </>
  );
}