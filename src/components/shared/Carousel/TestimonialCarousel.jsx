"use client";

import { useEffect, useRef } from "react";
import avatar from "../../../assets/avatar/avatar.webp";
import dodla_dairy from "../../../assets/testimonial_carousel/dodla_dairy.webp";
import century_flour_mills from "../../../assets/testimonial_carousel/century_flour_mills.webp";
import thalelo from "../../../assets/testimonial_carousel/thalelo.webp";
import ihi from "../../../assets/testimonial_carousel/ihi.webp";
import mmm from "../../../assets/testimonial_carousel/mmm.webp";
import { Badge } from "@/components/shared";
import gsap from "gsap";

/* ================= DATA ================= */
export const DEFAULT_TESTIMONIALS = [
  {
    logo: dodla_dairy,
    quote:
      "Having travelled and studied abroad, I had a dream to venture into Premium Student Housing in India to the likes of that in the US and UK. Real Plan Consulting helped us a lot with their research expertise in checking out the feasibility of such a concept.",
    name: "Rahul Reddy Dodla",
    role: "Partner At Dodla Natural Products LLP",
  },
  {
    logo: century_flour_mills,
    quote:
      "Real Plan Consulting helped us out in understanding the dynamics of the agarbatti market in terms of competitors, consumer demand and market size. They had provided us with all the vital inputs that we wanted. Highly recommend them for all kinds of market research.",
    name: "Avinash Ravindran",
    role: "Director at Century Flour Mills Ltd",
  },
  {
    logo: thalelo,
    quote:
      "We were very much new to the baby products industry in terms of Business and wanted to do a feasibility Study to analyze the prospects for a successful market penetration. We had roped in Real Plan Consulting to do the job for us and they did a highly professional work which laid the foundation for our currently running successful venture.",
    name: "Dr. Vandita Rajesh",
    role: "Founder of Thalelo",
  },
  {
    logo: ihi,
    quote:
      "Our regional HQ IHI Asia Pacific had engaged Real Plan Consulting for a market intelligence study of start-ups in India during the period Sep 2021 to Feb 2022. The work assigned was performed and competed to the satisfaction of our team.",
    name: "R.V. Krishnan",
    role: "General Manager of IHI Corporation",
  },
  {
    logo: mmm,
    quote:
      "We were not performing as good as we could, so we planned to assess the underlying reasons. They devised an in-depth strategy to identify bottlenecks and suggested corrective measures.",
    name: "Dr. K. Manivannun",
    role: "Founder of Manisundaram Medical Mission",
  },
];

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
  const revealScopeRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRefs = useRef([]);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let observer;

    const ctx = gsap.context(() => {
      const revealTargets = [
        badgeRef.current,
        ...headingRefs.current,
        subtitleRef.current,
      ].filter(Boolean);

      // 👇 initial hidden state
      gsap.set(revealTargets, {
        autoAlpha: 0,
        x: -18,
        clipPath: "inset(0 100% 0 0)",
      });

      const timeline = gsap.timeline({ paused: true });

      timeline.to(badgeRef.current, {
        autoAlpha: 1,
        x: 0,
        clipPath: "inset(0 0% 0 0)",
        duration: 0.7,
      });

      timeline.to(
        headingRefs.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          stagger: 0.12,
          duration: 0.8,
        },
        "-=0.3"
      );

      timeline.to(
        subtitleRef.current,
        {
          autoAlpha: 1,
          x: 0,
          clipPath: "inset(0 0% 0 0)",
          duration: 0.8,
        },
        "-=0.2"
      );

      // 👇 MOBILE SAFE OBSERVER
      const isMobile = window.innerWidth < 768;

      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            timeline.play();
            observer.disconnect();
          }
        },
        {
          threshold: isMobile ? 0.05 : 0.2,
          rootMargin: isMobile
            ? "0px 0px -5% 0px"
            : "0px 0px -10% 0px",
        }
      );

      if (revealScopeRef.current) {
        observer.observe(revealScopeRef.current);
      }

      // 👇 FAILSAFE (important for iOS/Safari)
      setTimeout(() => {
        if (timeline.progress() === 0) {
          timeline.play();
        }
      }, 1200);
    }, revealScopeRef);

    return () => {
      observer?.disconnect();
      ctx.revert();
    };
  }, []);

  if (!items.length) return null;

  const marqueeItems = [...items, ...items];

  return (
    <section className="w-full mb-[clamp(1.5rem,4vw,3rem)] lg:mt-[6.5rem] mt-[1.9375rem]">
      <div
        ref={revealScopeRef}
        className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]"
      >
        <div ref={badgeRef} className="mb-6 w-fit">
          <Badge text="Client Testimonials" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <h2 className="text-[clamp(1.6rem,3.5vw,2.5rem)] leading-[1.2] text-black">
            <span ref={(el) => (headingRefs.current[0] = el)} className="block">
              Real Plan Consulting’s
            </span>
            <span ref={(el) => (headingRefs.current[1] = el)} className="block">
              impact in their own words
            </span>
          </h2>

          <h3 className="text-[clamp(1.1rem,1.2vw,1.16rem)] text-[#2A2A2A]/90 leading-relaxed">
            <span ref={subtitleRef} className="block">
              Our clients rely on us for objective research, clear insights, and dependable consulting support.
            </span>
          </h3>
        </div>

        {/* MOBILE */}
        <div className="flex flex-col gap-5 mt-10 md:hidden">
          {items.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>

      {/* DESKTOP MARQUEE */}
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

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}