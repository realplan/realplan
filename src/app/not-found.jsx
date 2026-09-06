"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button, GridReveal } from "@/components/ui";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import Image from "next/image";
import error from "@/assets/error_page/404.webp";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";


export default function NotFound() {
  const router = useRouter();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  return (
    <motion.section
      className="relative h-screen w-full overflow-hidden bg-white flex items-center justify-center"
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
          radius="20rem"
        />
      </div>
      <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />


      {/* CONTENT */}
      <div className="relative z-[100] flex flex-col items-center text-center">

        {/* IMAGE + GLOBE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {/* Error Image replaces 404 */}
          <Image
            src={error}
            alt="404 Error"
            width={260}
            height={120}
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Message */}
        <p className="mt-6 text-lg text-gray-500">
          Oops you’re in{" "}
          <span className="text-[#ff8a00] font-medium">
            Unknown location
          </span>
        </p>

        {/* CTA */}
        <div className="mt-8 flex items-center gap-4">
  <Button
    text="Go back"
    variant="white"
    onClick={() => router.back()}
  />
</div>
      </div>
    </motion.section>
  );
}