"use client";

import { HomePage, AboutPage, SectorSection } from "../components/Sections/home";
import { TestimonialCarousel } from "../components/shared/Carousel/TestimonialCarousel";
import Hand from "@/assets/footer/hand.webp";
import Facebook from "@/assets/social_media/FacebookLogo.webp";
import Instagram from "@/assets/social_media/InstagramLogo.webp";
import Linkedin from "@/assets/social_media/LinkedinLogo.webp";
import { Footer } from "../components/layouts";
import { Badge } from "../components/shared";
import { Button } from "../components/ui";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter(); // ✅ now works

  return (
    <>
      <HomePage />
      <AboutPage />
      <SectorSection />
      <TestimonialCarousel className="px-4 sm:px-6 md:px-0" />
      <Footer
        hand={true}
        topContent={{
         badge: <Badge text={"Let's talk business"} />,
          heading: "Let's kick things off!",
          description: (
            <>
              We believe that every idea needs research. <br />
              Take the first step: Contact us, and together, we will build a great future for your <br/> dreams.
            </>
          ),
          headingClass:
            "text-[2.3rem] sm:text-[2.3rem] font-regular leading-snug text-white",
          descriptionClass: "text-[clamp(1.1rem,2.8vw,1.125rem)] mx-auto leading-[1.5] line-clamp-4",
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