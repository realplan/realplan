"use client";

import { Button} from "../../ui";
import { useMotionValue, useSpring, motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo_orange from "../../../assets/Company_Logo/logo_orange.webp";
import { LogoCarousel, Badge, Header } from "../../shared";
import Link from "next/link";

export default function ContactUsPage() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex flex-col mb-[clamp(2rem,4vw,8.75rem)]">
      <div
    className="relative"

  >

      <div className="relative">

        {/* CONTACT CONTENT */}
        <div className="mx-auto w-full">
          <div
            className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-[clamp(1.5rem,3vw,4rem)] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6 w-full justify-center lg:w-1/2">
              {/* Badge */}
              <Badge text="Let's connect" />

              <div className="flex flex-col gap-[1rem]">
                {/* Heading */}
<h1 className="text-[clamp(1.6rem,3.5vw,3rem)] leading-[1.2] mb-4">
  Partner with us and get
  <br />
  amazing insights
</h1>

                {/* Subtitle */}
                <p className="text-[#2A2A2A]/70 text-[clamp(1rem,1.2vw,1.375rem)] leading-relaxed">
                  We believe that every idea needs research. <br />
                  Take the first step:
                </p>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3 text-[#1A1A1A] text-[clamp(1.2rem,0.25vw,1.04rem)]">
                    <span className="w-[clamp(0.55rem,0.5vw,0.625rem)] h-[clamp(0.55rem,0.5vw,0.625rem)] rounded-full bg-[#FF8205] shrink-0" />
                    Use the contact form to get in touch
                  </li>
                  <li className="flex items-center gap-3 text-[#1A1A1A] text-[clamp(1.2rem,0.25vw,1.04rem)]">
                    <span className="w-[clamp(0.55rem,0.5vw,0.625rem)] h-[clamp(0.55rem,0.5vw,0.625rem)] rounded-full bg-[#FF8205] shrink-0" />
                    <span>
                      email us at{" "}
                      <a
                        href="mailto:connect@realplan.in"
                        className="text-[#FF8205] underline"
                      >
                        connect@realplan.in
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-[#FF8205] text-black font-normal px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.4rem,0.7vw,0.75rem)] rounded-full w-fit mt-[1rem] hover:opacity-90 transition"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp"
                  className="w-[clamp(1.25rem,2vw,2rem)]
h-[clamp(1.25rem,2vw,2rem)]"
                />
                <p>Message us on Whatsapp</p>
              </a>
              <div className="hidden lg:block mt-6 w-full max-w-[clamp(40rem,80vw,70rem)]">
                <LogoCarousel />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
  className="
    relative flex flex-col bg-black rounded-lg
    w-full lg:w-[clamp(22rem,38vw,38.875rem)]
    ml-0 lg:ml-auto
    min-h-[auto]
    px-[clamp(2rem,2.7vw,3rem)]
    py-[clamp(3.5rem,3vw,4.5rem)]
    justify-center overflow-hidden
    z-30
  "
>

              <div
                className="absolute bottom-0 left-0 right-0 h-[65%] pointer-events-none z-0"
                style={{
                  background:
                    "linear-gradient(to top left, #FFD900 0%, #FF8205 40%, #FA520F 65%, transparent 100%)",
                  opacity: 0.85,
                  filter: "blur(28px)",
                  clipPath: "polygon(0% 8%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />

              {/* SPRAY EFFECT — top edge only */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[67%] pointer-events-none z-0"
                style={{
                  background:
                    "linear-gradient(to top left, transparent 0%, #FF8205 50%, #FA520F 75%, transparent 100%)",
                  opacity: 0.4,
                  filter: "blur(50px)",
                  clipPath: "polygon(0% 8%, 100% 0%, 100% 100%, 0% 100%)",
                }}
              />

              {/* TOP EDGE SPRAY BLEED */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[70%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 90% 20% at 60% 42%, #FA520F 0%, #FF8205 40%, transparent 75%)",
                  filter: "blur(45px)",
                  opacity: 0.6,
                }}
              />

              {/* DARK RED UPPER SPRAY — left blob */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[73%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 25% at 25% 38%, #8B1500 0%, #CC2800 50%, transparent 80%)",
                  filter: "blur(55px)",
                  opacity: 0.7,
                }}
              />

              {/* DARK RED UPPER SPRAY — right blob */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[73%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 55% 22% at 75% 35%, #CC2800 0%, #FA520F 50%, transparent 80%)",
                  filter: "blur(55px)",
                  opacity: 0.65,
                }}
              />

              {/* ORANGE HAZE — wide center spread */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[75%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 100% 30% at 55% 40%, #FF8205 0%, #FA520F 35%, transparent 70%)",
                  filter: "blur(60px)",
                  opacity: 0.45,
                }}
              />

              {/* YELLOW BOTTOM RIGHT GLOW */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 40% at 90% 95%, #FFD900 0%, #FFAA00 45%, transparent 80%)",
                  filter: "blur(35px)",
                  opacity: 0.3,
                }}
              />

              {/* EDGE SOFTENER — kills any remaining hard line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[77%] pointer-events-none z-0"
                style={{
                  background:
                    "radial-gradient(ellipse 110% 15% at 50% 28%, #FA520F 0%, transparent 100%)",
                  filter: "blur(60px)",
                  opacity: 0.5,
                }}
              />

              {/* BLACK FADE TOP — keeps upper area dark */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[75%] pointer-events-none z-0"
                style={{
                  background:
                    "linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0.60) 25%, rgba(0,0,0,0.20) 45%, transparent 70%)",
                }}
              />

              {/* FORM CONTENT */}
              <div className="relative z-10 flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-white">
                    Name <span className="text-[#FF8205]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-white/20 rounded-lg px-2 py-[0.6rem] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-normal text-white">
                      Email <span className="text-[#FF8205]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full border border-white/20 rounded-lg px-3 sm:px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-normal text-white">
                      Phone <span className="text-[#FF8205]">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-white/20 rounded-lg px-3 sm:px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-white">
                    Company <span className="text-[#FF8205]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    className="w-full border border-white/20 rounded-lg px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                  />
                </div>

                {/* Choose Solution */}
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-white">
                    Choose solution <span className="text-[#FF8205]">*</span>
                  </label>
                  <select
                    defaultValue=""
                    className="w-full border border-white/20 rounded-lg px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition text-black/60 appearance-none bg-white cursor-pointer"
                  >
                    <option value="" disabled>
                      Select one or more
                    </option>
                    <option value="market_research">Market Research</option>
                    <option value="business_strategy">Business Strategy</option>
                    <option value="data_analytics">Data Analytics</option>
                    <option value="feasibility">Feasibility Study</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-white">Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full border border-white/20 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <Button text="Submit Enquiry" />
                </div>
              </div>
            </div>
          </div>
          <div className="block lg:hidden my-[3rem]">
            <LogoCarousel />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
