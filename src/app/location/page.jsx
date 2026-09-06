"use client";

import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Location, LocationAlternative } from "@/components/Sections/location";
import { Footer } from "../../components/layouts";
import { Badge, LogoCarousel, Header } from "../../components/shared";
import { Button, GridReveal } from "@/components/ui";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";

export default function Page() {
  const router = useRouter();

  // Grid Reveal mouse tracking for the location hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      <div className="relative w-full">


        <motion.section
          className="relative isolate z-[1000]"
          onPointerMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - rect.left);
            mouseY.set(e.clientY - rect.top);
          }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none">
            <GridReveal
              x={smoothX}
              y={smoothY}
              theme="golden_orange"
              radius="16.25rem"
            />
          </div>

          <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />

          <div>
            <Location />
          </div>
        </motion.section>

        <div className="relative z-0">
          <LocationAlternative />

          <section className="py-7">
            <LogoCarousel grayscale={true} />
          </section>
        </div>
      </div>

      {/* FOOTER (NO GRID REVEAL) */}
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
              onClick={() => router.push("/contact_us")}
              className="py-[clamp(0.5rem,2vw,0.5rem)]"
            />
          ),
        }}
      />
    </>
  );
}
