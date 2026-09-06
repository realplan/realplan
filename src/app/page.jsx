"use client";

import {
  HomePage,
  AboutPage,
  SectorSection,
  SolutionSection,
  ConversationSection,
  FeaturesPage,
} from "../components/Sections/home";
import { TestimonialCarousel } from "../components/shared/Carousel/TestimonialCarousel";
import { Footer } from "../components/layouts";
import { Badge, LogoCarousel } from "../components/shared";
import { Button, GridReveal } from "../components/ui";
import { useRouter } from "next/navigation";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

import rpc from "@/assets/avatar/New RPC 2.0 logo.webp";
import logo from "@/assets/Company_Logo/logo_white.webp";
import { useAnimation } from "framer-motion";



// ✅ Loader Component
function HomeLoader({ onFinish }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 900);
    const t2 = setTimeout(() => setStage(2), 1700);
    const t3 = setTimeout(() => setStage(3), 2600);
    const t4 = setTimeout(() => onFinish?.(), 3925);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onFinish]);

  const stripDelays = [0.16, 0.1, 0.04, 0.1, 0.16];

  return (
    <motion.div
      className="fixed inset-0 z-[9999] overflow-hidden"
      animate={{ opacity: stage >= 3 ? 0 : 1 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: stage >= 3 ? 0.92 : 0,
      }}
    >
      {/* STRIPS */}
      <div className="absolute inset-0 flex overflow-hidden">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="flex-1 bg-[#FA520F]"
            animate={{ y: stage >= 3 ? "-110%" : "0%" }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              delay: stage >= 3 ? stripDelays[i] : 0,
            }}
          />
        ))}
      </div>

      {/* CENTER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div
          className="relative flex h-[80px] w-[120px] items-center justify-center sm:h-[140px] sm:w-[220px]"
          style={{ perspective: 1000 }} // 🔥 important for 3D
        >

          {/* RPC FLIP */}
          <motion.div
            initial={{ opacity: 1, rotateY: 0 }}
            animate={{
              rotateY: stage >= 1 ? 180 : 0,
              opacity: stage < 2 ? 1 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-[clamp(60px,14vw,100px)] h-[clamp(60px,14vw,100px)]">
  <Image
    src={rpc}
    alt="RPC Logo"
    priority
    width={100}
    height={100}
    className="h-full w-full object-contain"
    style={{
      backfaceVisibility: "hidden",
    }}
  />
</div>
          </motion.div>

          {/* MAIN LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={{
              opacity: stage === 2 ? 1 : 0,
              y: stage >= 3 ? -36 : stage >= 2 ? 0 : 32,
              scale: stage >= 3 ? 0.94 : stage >= 2 ? 1 : 0.96,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
              delay: stage >= 2 ? 0.1 : 0,
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={logo}
              alt="Main Logo"
              priority
              width={260}
              height={90}
              className="h-auto w-[clamp(90px,25vw,160px)] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const router = useRouter();

  // ✅ Start as true — loader is ON by default (no flicker)
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("home_loader_shown");

    if (hasLoaded) {
      // Already seen loader — skip it immediately
      setLoading(false);
    } else {
      // First visit — mark it and let loader play
      sessionStorage.setItem("home_loader_shown", "true");
    }

    setMounted(true);
  }, []);

  const handleLoaderFinish = useCallback(() => {
    setLoading(false);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // ✅ Render nothing until hydrated — prevents SSR/client mismatch flash
  if (!mounted) return null;

  return (
    <>
      {loading && <HomeLoader onFinish={handleLoaderFinish} />}

      <HomePage startReveal={!loading} />

      <motion.section
        className="relative w-full [overflow-x:clip]"
        onPointerMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          mouseX.set(e.clientX - rect.left);
          mouseY.set(e.clientY - rect.top);
        }}
      >
        <div className="absolute inset-0 z-10 pointer-events-none">
          <GridReveal
            x={smoothX}
            y={smoothY}
            theme="golden_orange"
            radius="16.25rem"
          />
        </div>

        <div className="relative z-20">
          <AboutPage />
          <SolutionSection />
          <FeaturesPage />
          <ConversationSection />
          <SectorSection />
          <TestimonialCarousel className="px-4 sm:px-6 md:px-0" />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
        </div>
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
