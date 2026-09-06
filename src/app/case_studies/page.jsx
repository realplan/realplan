"use client";

import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import {
  CaseStudiesHero,
  CaseStudiesOutcomes,
  AlternativeSolutions,
} from "@/components/Sections/case_studies";
import { Footer } from "@/components/layouts";
import { Badge, LogoCarousel } from "@/components/shared";
import { Button, GridReveal } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useState, useSyncExternalStore } from "react";
import { CASE_STUDIES } from "@/data/caseStudiesData";

const getMatchingCategory = (category) => {
  if (!category) return null;

  return CASE_STUDIES.find(
    (item) =>
      item.category.trim().toLowerCase() === category.trim().toLowerCase()
  )?.category;
};

const getCategoryFromCurrentUrl = () => {
  if (typeof window === "undefined") return null;

  return new URLSearchParams(window.location.search).get("category");
};

const subscribeToUrlChanges = (callback) => {
  window.addEventListener("popstate", callback);
  window.addEventListener("case-studies-url-change", callback);

  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener("case-studies-url-change", callback);
  };
};

export default function Page() {
  const router = useRouter();
  const categoryFromUrl = useSyncExternalStore(
    subscribeToUrlChanges,
    getCategoryFromCurrentUrl,
    () => null
  );
  const matchingUrlCategory = getMatchingCategory(categoryFromUrl);
  const [selectedCategoryOverride, setSelectedCategoryOverride] =
    useState(null);
  const selectedCategory =
    selectedCategoryOverride ?? matchingUrlCategory ?? CASE_STUDIES[0].category;

  const handleCategoryChange = (category) => {
    setSelectedCategoryOverride(category);
    router.replace(`/case_studies/?category=${encodeURIComponent(category)}`, {
      scroll: false,
    });
    window.dispatchEvent(new Event("case-studies-url-change"));
  };

  // ✅ SAME AS BLOGS PAGE
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <>
      {/* ✅ GRID REVEAL SECTION */}
      <motion.section
        className="relative w-full [overflow-x:clip]"
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
        <div className="relative z-[100]">
          <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />

          <CaseStudiesHero />
          <CaseStudiesOutcomes
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
          <AlternativeSolutions
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategoryChange}
          />
          <section className="py-7">
            <LogoCarousel grayscale={true} />
          </section>
        </div>
      </motion.section>

      {/* ❌ NO GRID REVEAL */}
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
