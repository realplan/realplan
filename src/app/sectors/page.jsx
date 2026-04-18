"use client";

import { useRouter } from "next/navigation";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { SectorsHero } from "../../components/Sections";
import LogoCarousel from "@/components/shared/Carousel/LogoCarousel";
import { Footer } from "@/components/layouts";
import { Badge } from "@/components/shared";
import { Button } from "@/components/ui";

export default function Sectors() {
  const router = useRouter();

  return (
    <>
    <Header
  logo={logo_orange}
  buttonVariant="glow"
  logoRedirect="/"
  color="white"
/>
      <SectorsHero />
      <LogoCarousel grayscale={true} />

      <Footer
        hand={true}
        topContent={{
          badge: <Badge text={"Let's talk business"} />,
          heading: "Let's kick things off!",
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
              onClick={() => router.push("/about_us")}
              className="py-[clamp(0.5rem,2vw,0.5rem)]"
            />
          ),
        }}
      />
    </>
  );
}