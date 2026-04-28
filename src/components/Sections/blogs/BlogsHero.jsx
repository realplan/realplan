import { Badge } from "../../shared";


export default function BlogsHero() {
  return (
    <div className="relative z-10 mt-10 lg:mt-[8em] px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">
        <div className="mb-6">
          <Badge text="Blogs" />
        </div>
<div
  className="
    flex flex-col lg:flex-row
    lg:items-start lg:justify-between
    gap-[clamp(0.5rem,5vw,20rem)]
  "
>
        <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] shrink-0">
          <span className="text-black">Knowledge Backed by </span>
          <span className="text-[#FF8205]">Real Plan</span>
          <br />
          <span className="text-[#FF8205]">Consulting, </span>
          <span className="text-black">Built for Impact.</span>
        </h1>

        <p className="text-black/60 text-[clamp(0.9rem,1.5vw,1.15rem)] leading-relaxed">
          we share research-driven insights, industry trends, and strategic
          perspectives to help businesses navigate complexity and make confident
          decisions in a dynamic market.
        </p>

      </div>
    </div>
  );
}