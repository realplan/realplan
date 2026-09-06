"use client";

import Image from "next/image";
import FooterWave from "./FooterWave";
import Hand from "../../../assets/footer/hand.webp";
import company_logo from "../../../assets/Company_Logo/logo_white.webp";
import Facebook from "../../../assets/social_media/FacebookLogo.webp";
import Instagram from "../../../assets/social_media/InstagramLogo.webp";
import Linkedin from "../../../assets/social_media/LinkedinLogo.webp";
import { GridReveal } from "../../ui";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

export default function Footer({
  showWave = true,
  bg = "bg-black",
  hand = false,
  topImage = hand ? Hand : null,
  topContent = {
    badge: null,
    heading: "Let's Build Something Great",
    description: "This is sample footer content.",
    headingClass:
      "text-[clamp(1.6rem,3.5vw,2.25rem)] font-semibold mb-4 leading-snug",
    descriptionClass:
      "text-[clamp(1.1rem,2.8vw,1.125rem)] max-w-full sm:max-w-xl mx-auto",
  },
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const SOLUTIONS_LINKS = [
  { label: "Market Research", href: "/solutions/market-research" },
  { label: "Location Analysis", href: "/solutions/location-analysis" },
  { label: "Market Feasibility", href: "/solutions/market-feasibility-studies" },
  { label: "Real Estate Research", href: "/solutions/real-estate-research" },
  { label: "Socio-Economic Research", href: "/solutions/socio-economic-research" },
  { label: "Political Research", href: "/solutions/political-research" },
];
const EXTRA_LINKS = [
  { label: "Case Studies", href: "/case_studies" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact us", href: "/contact_us" },
];

  return (
    <footer
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      className="relative overflow-hidden rounded-xl bg-black section-full-bleed
 mt-[2rem] px-4 sm:px-2 md:px-0"
    >
      {/* 🔝 GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <GridReveal
          x={smoothX}
          y={smoothY}
          theme="vivid_orange"
          radius="16.25rem"
        />
      </div>

      {/* 🔝 TOP SECTION */}
      <div className="relative z-20 min-h-[40vh] justify-center">
        {topImage && (
          <div className="absolute inset-0 z-10">
            <Image
              src={topImage}
              alt="Hand Background"
              className="
  object-contain
  object-top
  relative
  top-[clamp(0%,8vw,20%)] md:top-[-30%] lg:top-[-80%]
  scale-[1.7] md:scale-[1] lg:scale-[0.85]
"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        )}

        {/* TOP CONTENT */}
        <div
          className={`relative z-20 w-full text-white text-center px-4 sm:px-6 md:px-0 flex flex-col gap-5 sm:gap-5 mt-[5rem] ${
            topImage ? "" : "pb-8"
          }`}
        >
          {topContent.badge && <div className="mb-2">{topContent.badge}</div>}
          {topContent.heading && (
            <h2 className={topContent.headingClass}>{topContent.heading}</h2>
          )}
          {topContent.description && (
            <h3 className={topContent.descriptionClass}>
              {topContent.description}
            </h3>
          )}
          {topContent.cta && <div className="mt-4">{topContent.cta}</div>}
        </div>
      </div>

      {/* 🔻 MAIN FOOTER */}
      <div
  className={`relative z-30 py-10 text-white
  px-[clamp(1rem,2vw+0.5rem,4rem)]
  xl:px-[6.2rem]
  2xl:px-[9rem]
  ${
    hand
      ? "mt-[6rem] sm:mt-[14rem] md:mt-[18rem] lg:mt-[20rem]"
      : "mt-[2rem] sm:mt-[4rem] md:mt-[6rem] lg:mt-[8rem]"
  }`}
>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-0 max-w-full mx-auto">
          {/* LEFT */}
          <div className="flex flex-col space-y-4 min-w-[10rem]">
            <Image
              src={company_logo}
              alt="Company Logo"
              className="
  w-[clamp(9.5rem,10vw,13.5rem)]
  h-auto
  object-contain
"
            />
            <p className="leading-relaxed text-[clamp(1rem,0.6vw+0.6rem,1.1rem)] text-white">
              Leading market research and business consulting <br />
              firm delivering data-driven insights for smarter <br />
              business decisions.
            </p>
          </div>

          {/* CENTER: Nav links */}
          <div className="flex">
            <div
              className="
      grid grid-cols-2
      gap-x-[1rem] gap-y-[4rem]
      md:flex md:flex-row
      md:gap-[4rem]
      xl:gap-[6rem]
      2xl:gap-[13rem]
    "
            >
              {/* Solutions */}
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6">
                <h3 className="text-[1.3rem] sm:text-[1.25rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-normal text-gray-400">
                  Solutions
                </h3>
                <ul className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 text-[0.9rem] sm:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]">
                  {SOLUTIONS_LINKS.map((item) => (
  <li key={item.href}>
    <Link href={item.href} className="hover:text-gray-300 transition">
      {item.label}
    </Link>
  </li>
))}
                </ul>
              </div>

              {/* About Us */}
              <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6">
                <Link href="/about_us" className="text-[1.3rem] sm:text-[1.25rem] xl:text-[1.3rem] 2xl:text-[1.5rem] font-normal text-gray-400 hover:text-white transition">
  About Us
</Link>
                <ul className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 text-[0.9rem] sm:text-[1rem] xl:text-[1.1rem] 2xl:text-[1.3rem]">
                <li><Link href="/about_us" className="hover:text-gray-300 transition">Company</Link></li>


<li><Link href="/sectors" className="hover:text-gray-300 transition">Sectors</Link></li>
<li><Link href="/location" className="hover:text-gray-300 transition">Locations</Link></li>
<li><Link href="/awards" className="hover:text-gray-300 transition">Awards</Link></li>
<li><Link href="/clientele" className="hover:text-gray-300 transition">Clients</Link></li>

                </ul>
              </div>

              {/* Case Studies + Social Icons — same row on both mobile and desktop */}
              <div className="col-span-2 flex flex-row items-start justify-between md:contents">
                {" "}
                <div className="flex flex-col gap-4 xl:gap-5 2xl:gap-6">
                  <ul className="flex flex-col gap-3 xl:gap-4 2xl:gap-5 text-[1.3rem] sm:text-[1.25rem] xl:text-[1.3rem] 2xl:text-[1.5rem] text-gray-400">
 {EXTRA_LINKS.map((item) => (
  <li key={item.href}>
    <Link href={item.href} className="hover:text-white transition">
      {item.label}
    </Link>
  </li>
))}
</ul>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center space-x-4">
                   <a
  href="https://www.facebook.com/share/1A1a9QbceQ/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block cursor-pointer"
>
  <Image
    src={Facebook}
    alt="Facebook"
    className="w-6 h-6 sm:w-7 sm:h-7 pointer-events-none"
  />
</a>
<a
  href="https://www.instagram.com/realplanconsulting?igsh=MWtnYmp5cGIzeG02cQ=="
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block cursor-pointer"
>
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    </a>
                    <a
  href="https://www.linkedin.com/company/realplanconsulting/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block cursor-pointer"
>
                    <Image
                      src={Linkedin}
                      alt="LinkedIn"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔻 BOTTOM */}
        <div className="mt-12 md:mt-16 border-t border-white pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-white mx-auto gap-2 md:gap-0">
          <p className="text-center md:text-left w-full md:w-auto">
            Copyright © 2026. Real Plan Group. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mt-2 md:mt-0">
            <Link href="/privacy_policy" className="cursor-pointer hover:text-white">
              Privacy policy
            </Link>
            <span>|</span>
            <Link href="/terms_of_service" className="cursor-pointer hover:text-white">
              Terms of service
            </Link>
          </div>
        </div>
      </div>

      {/* 🌊 WAVE */}
      {showWave && <FooterWave x={smoothX} y={smoothY} />}
    </footer>
  );
}
