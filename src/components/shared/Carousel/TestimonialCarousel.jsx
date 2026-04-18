"use client";

import { useRef } from "react";
import avatar from "../../../assets/avatar/avatar.webp";
import dodla_dairy from "../../../assets/testimonial_carousel/dodla_dairy.webp";
import century_flour_mills from "../../../assets/testimonial_carousel/century_flour_mills.webp";
import thalelo from "../../../assets/testimonial_carousel/thalelo.webp";
import ihi from "../../../assets/testimonial_carousel/ihi.webp";
import mmm from "../../../assets/testimonial_carousel/mmm.webp";
import { Badge } from "@/components/shared";

/* ================= DATA ================= */
export const DEFAULT_TESTIMONIALS = [ { logo: dodla_dairy, quote: "Having travelled and studied abroad, I had a dream to venture into Premium Student Housing in India to the likes of that in the US and UK. Real Plan Consulting helped us a lot with their research expertise in checking out the feasibility of such a concept.", name: "Rahul Reddy Dodla", role: "Founder of Thalelo", }, { logo: century_flour_mills, quote: "Real Plan Consulting helped us out in understanding the dynamics of the agarbatti market in terms of competitors, consumer demand and market size. They had provided us with all the vital inputs that we wanted. Highly recommend them for all kinds of market research. ", name: "Avinash Ravindran", role: "Director at Century Flour Mills Ltd", }, { logo: thalelo, quote: "We were very much new to the baby products industry in terms of Business and wanted to do a feasibility Study to analyze the prospects for a successful market penetration. We had roped in Real Plan Consulting to do the job for us and they did a highly professional work which laid the foundation for our currently running successful venture.", name: "Dr. Vandita Rajesh", role: "Founder of Thalelo", }, { logo: ihi, quote: "Our regional HQ IHI Asia Pacific had engaged Real Plan Consulting for a market intelligence study of start-ups in India during the period Sep 2021 to Feb 2022. The work assigned was performed and competed to the satisfaction of our team. Our best wishes to Real Plan Consulting.", name: "R.V. Krishnan", role: "General Manager of IHI Corporation", }, { logo: mmm, quote: "We were not performing as good as we could, so we planned to assess the underlying reasons. We then approached Real Plan Consulting with our prevailing issues. They devised an in-depth strategy to identify all the bottlenecks and suggested us corrective measures for improving the overall performance of our hospital. All those recommendations came in handy for us and were readily implementable. Thanks Real Plan Consulting team, that our hospital has now got its much needed 2.0 upgrade.", name: "Dr. K. Manivannun", role: "Founder of Manisundaram Medical Mission", }, ];
function GradientBoxes() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FF8205]" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FF8205]/80" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FF8205]/60" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FF8205]/40 blur-[0.5px]" />
      <div className="w-3.5 h-3.5 rounded-sm bg-[#FF8205]/20 blur-[0.5px]" />
    </div>
  );
}

/* ================= HELPERS ================= */
function resolveImg(src) {
  if (!src) return "";
  return typeof src === "string" ? src : src.src;
}

/* ================= CARD ================= */
function TestimonialCard({ item }) {
  return (
    <div
      className="flex-shrink-0 flex flex-col justify-between rounded-[1.25rem] bg-white border border-[#E8E8E8]"
      style={{
        width: "100%",
        maxWidth: "42.875rem",
        minHeight: "20.5rem",
        padding: "1.25rem",
      }}
    >
      <div className="mb-5">
        <img
          src={resolveImg(item.logo)}
          alt="company logo"
          className="object-contain w-[7.25rem] h-[5rem]"
        />
      </div>

      <p className="text-[#2A2A2A] flex-1 mb-4 leading-[1.4] text-[clamp(0.95rem,0.7vw+0.6rem,1rem)]">
        {item.quote}
      </p>

      <div className="flex items-center gap-3">
        <div className="w-[3rem] h-[3rem] rounded-full overflow-hidden bg-[#FF6B00]">
          <img
            src={avatar.src}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="text-[#FF8205] font-semibold">{item.name}</p>
          <p className="text-[#6B6B6B] text-sm">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ================= CAROUSEL ================= */
export function TestimonialCarousel({
  items = DEFAULT_TESTIMONIALS,
  speed = 30,
}) {
  const marqueeRef = useRef(null);

  if (!items.length) return null;

  const marqueeItems = [...items, ...items];

  return (
    <section className="w-full mb-[3rem] lg:mt-[6.5rem] mt-[1.9375rem]">

      {/* ===== CONTAINER (ALIGNMENT FIX) ===== */}
      <div className="px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]">

        {/* BADGE */}
        <div className="mb-6">
          <Badge text="Testimonial" />
        </div>

        {/* HEADER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
         <h2
  className="
    text-[clamp(1.8rem,4vw,2.8rem)] lg:text-[clamp(2.8rem,3vw,3.5rem)]
    leading-tight
    text-black
  "
>
  Real Plans Consulting’s <br />
  impact in their own words
</h2>

          <h3
  className="
    text-[clamp(1.1rem,1.2vw,1.16rem)]
    text-[#2A2A2A]/90
    leading-relaxed
  "
>
            Our clients rely on us for objective research, clear insights, and dependable consulting support. Here’s what they say about working with Real Plan Consulting.
          </h3>
        </div>

        {/* BORDER + GRADIENT */}
        <div className="relative mt-12">
          <div className="border-t border-gray-800"></div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white px-3">
            <GradientBoxes />
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-5 mt-10 md:hidden">
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ===== MARQUEE FULL WIDTH ===== */}
      <div
        className="hidden md:block overflow-hidden mt-12"
        onMouseEnter={() =>
          (marqueeRef.current.style.animationPlayState = "paused")
        }
        onMouseLeave={() =>
          (marqueeRef.current.style.animationPlayState = "running")
        }
      >
        <div
          ref={marqueeRef}
          className="flex gap-6 px-6 md:px-12 lg:px-20"
          style={{
            width: "max-content",
            animation: `marquee ${speed}s linear infinite`,
          }}
        >
          {marqueeItems.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}