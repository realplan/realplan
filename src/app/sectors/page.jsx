"use client";

import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { SectorsHero } from "../../components/Sections";
import { Footer } from "@/components/layouts";
import { Badge, LogoCarousel } from "@/components/shared";
import { Button, GridReveal } from "@/components/ui";

export default function Sectors() {
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>

      <motion.section
        className="relative w-full [overflow-x:clip]"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <GridReveal
            x={smoothX}
            y={smoothY}
            theme="golden_orange"
            radius="16.25rem"
          />
        </div>

        {/* Page Content */}
        <div className="relative z-[100]">
            <Header
        logo={logo_orange}
        buttonVariant="glow"
        logoRedirect="/"
        color="white"
      />
      </div>
          <SectorsHero />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
      </motion.section>

      <Footer
        hand={true}
        topContent={{
          badge: <Badge text={"Let's talk business"} />,
          heading: "Tell us your requirement",
          description: (
            <>
              We believe that every idea needs research. <br />
              Take the first step: Contact us, and together, we will build a
              great future for your <br />
              dreams.
            </>
          ),
          headingClass:
            "text-[2.3rem] sm:text-[2.3rem] font-regular leading-snug text-white",
          descriptionClass: "text-base sm:text-[1.3rem] mx-auto text-white/90",
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