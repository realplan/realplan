"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/shared";

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState("");

  const content = [
  {
    type: "heading",
    text: "Acceptance of Terms",
    id: "acceptance-of-terms",
  },
  {
    type: "paragraph",
    text: "By accessing this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms & Conditions, along with our Privacy Policy.",
  },
  {
    type: "paragraph",
    text: "If you do not agree with any part of these terms, please discontinue the use of our website and services.",
  },

  {
    type: "heading",
    text: "Use of Website",
    id: "use-of-website",
  },
  {
    type: "paragraph",
    text: "The content available on this website is provided for general information and business purposes only. Users agree to use the website responsibly and refrain from:",
  },
  {
    type: "list",
    items: [
      "Misusing website content or services",
      "Attempting unauthorized access to systems or data",
      "Disrupting website functionality or security",
      "Using the website for unlawful activities",
    ],
  },

  {
    type: "heading",
    text: "Intellectual Property",
    id: "intellectual-property",
  },
  {
    type: "paragraph",
    text: "All content on this website, including text, graphics, branding, logos, images, research materials, and design elements, is the property of Real Plan Consulting unless otherwise stated.",
  },
  {
    type: "paragraph",
    text: "Unauthorized reproduction, distribution, or use of website content without prior written permission is prohibited.",
  },

  {
    type: "heading",
    text: "Service Information",
    id: "service-information",
  },
  {
    type: "paragraph",
    text: "The information provided on this website is intended to offer general insights into our services, including market research, feasibility studies, business consulting, political research, and related solutions.",
  },
  {
    type: "paragraph",
    text: "Real Plan Consulting reserves the right to modify, update, or discontinue any service or website content without prior notice.",
  },

  {
    type: "heading",
    text: "User Submissions",
    id: "user-submissions",
  },
  {
    type: "paragraph",
    text: "Any information submitted through enquiry forms, surveys, or communication channels must be accurate and lawful.",
  },
  {
    type: "paragraph",
    text: "By submitting information, users grant Real Plan Consulting the right to use the information for communication, consultation, research, and service-related purposes in accordance with our Privacy Policy.",
  },

  {
    type: "heading",
    text: "Third-Party Links",
    id: "third-party-links",
  },
  {
    type: "paragraph",
    text: "Our website may contain links to third-party websites for informational purposes. Real Plan Consulting is not responsible for the content, policies, or practices of external websites.",
  },

  {
    type: "heading",
    text: "Limitation of Liability",
    id: "limitation-of-liability",
  },
  {
    type: "paragraph",
    text: "Real Plan Consulting shall not be held liable for any direct, indirect, incidental, or consequential damages arising from the use of this website, its content, or services.",
  },
  {
    type: "paragraph",
    text: "While we strive to ensure accuracy and reliability, we do not guarantee that all website information will always be complete, accurate, or up to date.",
  },

  {
    type: "heading",
    text: "Privacy & Cookies",
    id: "privacy-cookies",
  },
  {
    type: "paragraph",
    text: "Use of this website is also governed by our Privacy Policy and Cookies Policy, which explain how information is collected, stored, and used.",
  },

  {
    type: "heading",
    text: "Changes to Terms",
    id: "changes-to-terms",
  },
  {
    type: "paragraph",
    text: "Real Plan Consulting reserves the right to update or modify these Terms & Conditions at any time without prior notice.",
  },
  {
    type: "paragraph",
    text: "Continued use of the website following updates constitutes acceptance of the revised terms.",
  },

  {
    type: "heading",
    text: "Governing Law",
    id: "governing-law",
  },
  {
    type: "paragraph",
    text: "These Terms & Conditions shall be governed and interpreted in accordance with the laws of India.",
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
          <Badge text={"Terms of service"} />
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] break-words">
              Terms & Conditions
            </h1>
          </div>

          <div className="min-w-0">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/60 leading-relaxed">
              By accessing and using the Real Plan Consulting website, you agree to comply with the terms governing the use of our services, content, and communications. These terms are designed to ensure a secure, transparent, and professional user experience.
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
