"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import certificate from "@/assets/about_us/certificate.webp";
import { Badge } from "@/components/shared";
import { Button } from "@/components/ui";
import management_consultent from "@/assets/awards/management_consultent.webp";
import award_1 from "@/assets/awards/award_1.webp";
import award_2 from "@/assets/awards/award_2.webp";
import award_3 from "@/assets/awards/award_3.webp";
import award_4 from "@/assets/awards/award_4.webp";
import case_study from "@/assets/awards/case_study.webp";
import silicon_india from "@/assets/awards/silicon_india.webp";
import swift_nl from "@/assets/awards/swift_nl.webp";
import swift_nl_2 from "@/assets/awards/swift_nl_2.webp";
import image from "@/assets/awards/image.webp";

const content = [
  {
    type: "heading",
    text: 'Real Plan Consulting has been awarded as the "Market Research Company of the Year 2024" by Corporate LiveWire Global Awards.',
    id: "corporate-livewire-global-awards",
    navText: "Corporate LiveWire Global Awards",
  },
  {
    type: "paragraph",
    text: "Corporate LiveWire has been in circulation for 10 years and its awards are open to both UK-based and international businesses and organisations across all major industries. From SMEs to multinational corporations, the awards recognise those who have proven to consistently deliver excellent products and services in their market.",
  },
  {
    type: "paragraph",
    text: "Password: GlobalAwar24252101",
  },
  {
    type: "button",
    text: "Read more",
    href: "https://awards.corporatelivewire.com/GlobalAwards24252/GlobalAwards24252.html#p=426",
    variant: "transparent",
  },

  {
    type: "image",
    src: certificate,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "heading",
    text: 'Real Plan Consulting has been recognized as one of the "Best Emerging Business & Market Research Consulting Company 2024" by Wealth & Finance International / AI Global Media UK.',
    id: "swiftnlift-business-magazine-recognition",
    navText: "Wealth & Finance International/ AI Global Media UK",
  },
  {
    type: "paragraph",
    text: "Wealth & Finance International has more than 10 years of experience, publishes a quarterly magazine which is circulated to over 67,000 professionals within the finance and investment marketplace.",
  },
  {
    type: "button",
    text: "Read more",
    href: "https://wealthandfinance.digital/winners/real-plan-consulting/",
    variant: "transparent",
  },
  {
    type: "image",
    src: management_consultent,
    alt: "Real Plan Consulting award certificate",
  },

  {
    type: "heading",
    text: 'Real Plan Consulting has been recognized as one among "The 10 Most Promising Market Research Companies in India" by Silicon India Magazine. ',
    id: "award-winning-consulting-approach",
    navText: "Silicon India",
  },
  {
    type: "paragraph",
    text: "Silicon India Magazine is India’s Leading Business Enterprises & Industries Magazine which is eminent for the circulation of around 96,000 hard copies across PAN India with 4 lakh readers and 47,000 downloads of e-Magazines",
  },
  {
    type: "heading",
    text: "Certificate of Recognition",
  },
  {
    type: "image",
    src: silicon_india,
    alt: "Real Plan Consulting award certificate",
  },

  {
    type: "heading",
    text: "Memento",
    id: "pan-india-business-support",
    navText: "SwiftnLift",
  },
  {
    type: "image",
    src: award_4,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "heading",
    text: "Our interview given to the magazine (July 2021 Issue)",
  },
  {
    type: "image",
    src: award_3,
    alt: "Real Plan Consulting award certificate",
  },
{
    type: "buttons",
    items: [
        {
        text: "Download",
        href: "https://www.siliconindia.com/digital-magazine/market-research-july-2021/",
        variant: "transparent",
      },
      {
        text: "Read more",
        href: "https://marketing.siliconindia.com/vendor/real-plan-consulting-committed-to-market-research-excellence-cid-15188.html",
        variant: "transparent",
      },

    ],
  },
  {
    type: "heading",
    text: 'Real Plan Consulting has been chosen among "The 10 Most Promising Business Consulting Companies in India" by SwiftnLift Business Magazine.',
  },

  {
    type: "paragraph",
    text: "SwiftnLift Business Magazine has its circulation in India and the US and reaches out to all the ‘C’ Level professionals, VPs, Consultants, VCs, Managers, and HRs of various industries.",
    id: "commitment-to-client-outcomes",
  },
  {
    type: "heading",
    text: "Certificate of Recognition",
  },
  {
    type: "image",
    src: image,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "heading",
    text: "Our interview given to the magazine (May 2021 Issue)",
  },
  {
    type: "image",
    src: swift_nl_2,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "image",
    src: award_1,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "image",
    src: award_2,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "image",
    src: case_study,
    alt: "Real Plan Consulting award certificate",
  },
  {
    type: "buttons",
    items: [
              {
        text: "Download",
        href: "https://online.fliphtml5.com/dxfyj/qrob/#p=1",
        variant: "transparent",
      },
      {
        text: "Read more",
        href: "https://swiftnlift.in/real-plan-consulting/",
        variant: "transparent",
      },
    ],
  },
];

const headings = content.filter(
  (item) => item.type === "heading" && item.id && item.navText,
);

export default function Awards() {
  const router = useRouter();
  const [activeId, setActiveId] = useState("");

  const handleButtonClick = (href) => {
    if (!href) return;

    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(href);
  };

  // Scroll spy for the award section navigation.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full text-black mt-9 sm:mt-28 md:mt-[5rem]">
      <div className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">
        <div className="mb-6">
          <Badge text={"Awards and Recognition"} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] break-words">
              Awards & Recognition
            </h1>
          </div>

          <div className="min-w-0">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/60 leading-relaxed">
              Our achievements and professional registrations reflect our
              commitment to delivering high-quality research, maintaining
              industry standards, and building lasting trust with clients across
              sectors.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-[clamp(2.5rem,6vw+1rem,7.5rem)] items-start">
          {/* LEFT - STICKY TOC */}
          <aside className="hidden lg:block sticky top-28 self-start h-fit font-medium">
            <ul className="space-y-4 text-sm">
              {headings.map((h) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className={`transition-colors duration-200 ${
                      activeId === h.id
                        ? "text-[#2A2A2A] font-medium"
                        : "text-gray-400 hover:text-black"
                    }`}
                  >
                    {h.navText}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* RIGHT - CONTENT */}
          <div className="space-y-6 min-w-0">
            {content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={block.id || index}
                      id={block.id}
                      className="scroll-mt-32 text-[clamp(1.5rem,2vw,1.65rem)] text-[#2A2A2A] font-normal leading-snug mb-3"
                    >
                      {block.text}
                    </h2>
                  );

                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-black/60 text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed"
                    >
                      {block.text}
                    </p>
                  );

                case "list":
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2">
                      {block.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-black/60 text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

                case "image":
                  return (
                    <div
                      key={index}
                      className="relative w-full max-w-[34rem] overflow-hidden rounded-lg border border-black/10 bg-white"
                    >
                      <Image
                        src={block.src}
                        alt={block.alt}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1024px) 100vw, 34rem"
                      />
                    </div>
                  );

                case "button":
                case "buttons":
                  {
                    const buttons =
                      block.type === "buttons"
                        ? block.items || []
                        : block.items || block.buttons || [block];

                    return (
                      <div
                        key={index}
                        className="flex flex-wrap items-center gap-4 pt-2"
                      >
                        {buttons.map((button, buttonIndex) => (
                          <Button
                            key={`${button.text}-${button.href || buttonIndex}`}
                            text={button.text}
                            variant={button.variant || "default"}
                            onClick={() => handleButtonClick(button.href)}
                          />
                        ))}
                      </div>
                    );
                  }

                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
