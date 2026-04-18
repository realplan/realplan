import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import { CaseStudiesHero } from "@/components/Sections/case_studies";
import { CaseStudiesOutcomes } from "@/components/Sections/case_studies";

export default function AboutUs() {
  return (
      <>
      <Header
          logo={logo_orange}
          buttonVariant="glow"
          logoRedirect="/"
  color="white"
        />
        <CaseStudiesHero />
        <CaseStudiesOutcomes />
      </>
      )
  };