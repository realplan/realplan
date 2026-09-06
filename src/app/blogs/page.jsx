"use client";

import { BlogsHero, BlogsList } from "@/components/Sections/blogs";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { Footer } from "@/components/layouts";
import { Badge, LogoCarousel } from "@/components/shared";
import { Button, GridReveal } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useMotionValue, useSpring, motion } from "framer-motion";


export default function Blogs() {
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ✅ ONLY THIS PART HAS GRID REVEAL */}
      <motion.section
        className="relative w-full"
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
            radius="10rem"
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

          <BlogsHero />
          <BlogsList />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
        </div>
      </motion.section>

      {/* ❌ NO GRID REVEAL HERE */}
      <Footer
        hand={true}
        topContent={{
          badge: <Badge text={"Let's talk business"} />,
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
            "text-[clamp(1.1rem,2.8vw,1.125rem)] mx-auto leading-[1.5]",
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