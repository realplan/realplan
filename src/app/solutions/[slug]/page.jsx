// /app/solutions/[slug]/page.jsx

import { SOLUTIONS } from "@/data/solutionsData";
import { notFound } from "next/navigation";
import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";

import SolutionHero from "@/components/Sections/solutions/SolutionHero";
import SolutionInsight from "@/components/Sections/solutions/SolutionInsight";
import SolutionTypes from "@/components/Sections/solutions/SolutionTypes";
import SolutionCaseStudies from "@/components/Sections/solutions/SolutionCaseStudies";
import LogoCarousel from "@/components/shared/Carousel/LogoCarousel";
import { Footer } from "@/components/layouts";
import { Badge } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";

import GridRevealWrapper from "@/components/GridRevealWrapper";

export async function generateStaticParams() {
  const params = Object.keys(SOLUTIONS).map((slug) => ({
    slug,
  }));

  return params;
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;

  const data = SOLUTIONS[slug];

  if (!data) return notFound();

  return (
    <main>

        <GridRevealWrapper>
            <Header
            logo={logo_orange}
            buttonVariant="glow"
            logoRedirect="/"
            color="white"
          />
          <SolutionHero data={data.hero} slug={slug} />
          <SolutionInsight data={data.insight} />
          <SolutionTypes data={data.typesSection} />
          <SolutionCaseStudies data={data.caseStudies} />
          <section className="py-7">
           <LogoCarousel grayscale={true} />
           </section>
        </GridRevealWrapper>

        <Footer
          hand={true}
          topContent={{
            badge: <Badge text={"Let's talk business"} className="mt-[3rem]" />,
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
              "text-base sm:text-[1.3rem] mx-auto text-white/90",
            cta: (
              <Link href="/contact_us">
                <Button text="Get Started" variant="glow" />
              </Link>
            ),
          }}
        />
    </main>
  );
}
