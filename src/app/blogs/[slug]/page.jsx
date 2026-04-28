import { Header } from "@/components/shared";
import logo_orange from "@/assets/Company_Logo/logo_orange.webp";
import BlogDetailHero from "@/components/sections/blogs/BlogDetailHero";
import Frame_1 from "../../../assets/Frame 2085665781-2.webp";
import { SOLUTIONS } from "@/data/solutionsData";
import BlogDetailContent from "@/components/sections/blogs/BlogDetailContent";
import AlternativeSolutions from "@/components/sections/blogs/BlogDetailAlternative";
import LogoCarousel from "../../../components/shared/Carousel/LogoCarousel";
import { Footer } from "@/components/layouts";
import { Badge } from "@/components/shared";
import { Button } from "@/components/ui";
import Link from "next/link";
import { BLOGS } from "@/data/blogsData";


export default async function Page({ params }) {

  const { slug } = await params;
 const blog = BLOGS.find((b) => b.slug === slug);

  // ❌ invalid slug
  if (!blog) {
    return <div className="p-10">Blog not found</div>;
  }

  return (
    <main>
        <Header
          logo={logo_orange}
          buttonVariant="glow"
          logoRedirect="/"
  color="white"
        />
      <BlogDetailHero data={blog} />
      <BlogDetailContent content={blog.content} />
      <AlternativeSolutions />
    <LogoCarousel grayscale={true} />
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
              <Link href="/about_us">
            <Button
              text="Get Started"
              variant="glow"
              className="py-[clamp(0.5rem,2vw,0.5rem)]"
            />
            </Link>
          ),
        }}
      />
    </main>
  );
}


