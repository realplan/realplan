"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/shared";

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState("");

  const content = [
  {
    type: "heading",
    text: "Information We Collect",
    id: "information-we-collect",
  },
  {
    type: "paragraph",
    text: "We may collect personal and business-related information including your name, email address, phone number, company details, project requirements, and any information voluntarily shared through contact forms, surveys, consultations, or research activities.",
  },
  {
    type: "paragraph",
    text: "We may also automatically collect certain technical information such as IP address, browser type, device information, pages visited, and website interaction data.",
  },

  {
    type: "heading",
    text: "How We Use Your Information",
    id: "how-we-use-your-information",
  },
  {
    type: "list",
    items: [
      "Respond to enquiries and provide consulting services",
      "Conduct market research, feasibility studies, and analysis",
      "Improve website functionality and user experience",
      "Share relevant updates, insights, or service information",
      "Analyze trends and support research activities",
      "Maintain website security and prevent unauthorized use",
    ],
  },

  {
    type: "heading",
    text: "Cookies Policy",
    id: "cookies-policy",
  },
  {
    type: "paragraph",
    text: "Our website may use cookies and similar technologies to improve your browsing experience and analyze website performance.",
  },
  {
    type: "paragraph",
    text: "Cookies are small files stored on your device that help us understand visitor behavior, improve performance, remember preferences, and enhance user experience.",
  },
  {
    type: "paragraph",
    text: "You can disable or manage cookies through your browser settings, but some features may not work properly if cookies are disabled.",
  },

  {
    type: "heading",
    text: "Data Protection & Security",
    id: "data-protection-security",
  },
  {
    type: "paragraph",
    text: "We implement appropriate security measures to protect your information against unauthorized access, misuse, disclosure, alteration, or loss. However, no system is completely secure.",
  },

  {
    type: "heading",
    text: "Sharing of Information",
    id: "sharing-of-information",
  },
  {
    type: "list",
    items: [
      "When required by applicable laws or regulations",
      "With trusted service providers supporting our operations",
      "With your consent for specific research or consulting purposes",
    ],
  },

  {
    type: "heading",
    text: "Third-Party Links",
    id: "third-party-links",
  },
  {
    type: "paragraph",
    text: "Our website may contain links to external websites for informational purposes. We are not responsible for the privacy practices or content of third-party websites.",
  },

  {
    type: "heading",
    text: "Your Rights",
    id: "your-rights",
  },
  {
    type: "list",
    items: [
      "Access your personal information",
      "Correct inaccurate data",
      "Request deletion of your information",
      "Withdraw consent for communications where applicable",
    ],
  },

  {
    type: "heading",
    text: "Policy Updates",
    id: "policy-updates",
  },
  {
    type: "paragraph",
    text: "We reserve the right to update or modify this Privacy Policy at any time. Changes will be reflected on this page with the updated effective date.",
  },

  {
    type: "heading",
    text: "Contact Us",
    id: "contact-us",
  },
  {
    type: "paragraph",
    text: "If you have any questions regarding this Privacy Policy, you can contact us at Real Plan Consulting.",
  },
  {
    type: "paragraph",
    text: "Website: www.realplan.in | Email: connect@realplan.in",
  },
];

  const headings = content.filter((item) => item.type === "heading");

  // 🔥 IMPROVED SCROLL SPY (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5, 0.75],
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <section className="w-full text-black mt-9 sm:mt-28 md:mt-[5rem]">
      <div className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">

        {/* Top Tag */}
        <div className="mb-6">
          <Badge text={"Privacy Policy"} />
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] break-words">
              Your Privacy Matters to Us
            </h1>
          </div>

          <div className="min-w-0">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/60 leading-relaxed">
              At Real Plan Consulting, we are committed to protecting your personal information and maintaining transparency in how your data is collected, used, and safeguarded through our website and services.
            </p>
          </div>
        </div>

        {/* BLOG SECTION */}
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
          {h.text}
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
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)] leading-relaxed"                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  );

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
