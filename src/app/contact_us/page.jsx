import { ContactUsPage } from "../../components/Sections";
import { Footer } from "../../components/layouts";
import { Badge } from "../../components/shared";
import { Button } from "../../components/ui";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { TestimonialCarousel } from "../../components/shared/Carousel/TestimonialCarousel";


export default function ContactUs() {
  return (
    <>
    <Header
          logo={logo_orange}
          buttonVariant="glow"
          logoRedirect="/"
  color="white"
        />
      <ContactUsPage />
{/*       <TestimonialInfo /> */}
        <TestimonialCarousel />
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
          headingClass: "text-[2.5rem] sm:text-[2.5rem] font-normal text-white",
          descriptionClass:
            "text-base sm:text-[1.375rem] max-w-full sm:max-w-xl mx-auto text-white/90",
          cta: <Button text="About Us" variant="glow" />,
        }}
      />
    </>
  );
}
