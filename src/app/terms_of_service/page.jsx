"use client";

import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { Footer } from "@/components/layouts";
import { Header, LogoCarousel, Badge } from "@/components/shared";
import { Button} from "@/components/ui";
import { TermsConditionsPage } from "@/components/Sections";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";

export default function Page() {
  const router = useRouter();

  return (
    <>
      <motion.section
        className="relative w-full"
      >

        <div className="relative z-[100]">
          <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />

          <TermsConditionsPage />

          <section className="py-7">
            <LogoCarousel grayscale={true} />
          </section>
        </div>
      </motion.section>

      <Footer
        hand={true}
        topContent={{
          badge: <Badge text={"Start a conversation"} />,
          heading: "Need clarity before investing?",
          description: (
            <>
              We provide support in feasibility studies, market size estimation and
              <br />
              demand assessment for making confident decisions.
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
