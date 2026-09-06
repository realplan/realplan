"use client";

import { Button} from "../../ui";
import { useState } from "react";
import Image from "next/image";
import logo_orange from "../../../assets/Company_Logo/logo_orange.webp";
import { LogoCarousel, Badge, Header } from "../../shared";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { message } from "antd";

message.config({
  top: 80, // distance from top
  duration: 3,
  maxCount: 3,
});

const BulletItem = ({ children }) => {
  return (
    <li className="flex items-start gap-3 text-[#1A1A1A] text-[clamp(1.04rem,0.25vw,1.2rem)] leading-relaxed">
      <span className="mt-[0.45em] w-[clamp(0.55rem,0.5vw,0.625rem)] h-[clamp(0.55rem,0.5vw,0.625rem)] rounded-full bg-[#FF8205] shrink-0" />
      <span>{children}</span>
    </li>
  );
};


export default function ContactUsPage() {
    const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  const formData = new FormData(e.target);

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    solution: formData.get("solution"),
    message: formData.get("message"),
  };

  try {
    const res = await fetch(
      "https://realplan-theta.vercel.app/api/v1/contacts", // 👈 LOCAL TEST
// "http://localhost:3000/api/v1/contacts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (!data.success) throw new Error("Email failed");

    message.success({
      content: "Your enquiry has been submitted successfully!",
      className: "custom-toast",
      duration: 5,
    });

    e.target.reset();
  } catch (error) {
    console.error(error);

    message.error({
      content: "Something went wrong. Please try again.",
      className: "custom-toast",
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative flex flex-col mb-[clamp(2rem,4vw,8.75rem)]">
      <div
    className="relative"

  >

      <div className="relative">

        {/* CONTACT CONTENT */}
        <div className="mx-auto w-full">
          <div
            className="mt-12 lg:mt-16 flex flex-col lg:flex-row gap-[clamp(1.35rem,7.2vw,5.8rem)]"
          >
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-6 w-full justify-center lg:w-1/2 pl-[clamp(0.95rem,1.9vw+0.45rem,3.8rem)] pr-0
xl:pl-[5.8rem]
2xl:pl-[8.5rem]">
              {/* Badge */}
              <Badge text="Let's connect" />

              <div className="flex flex-col gap-[1rem]">
                {/* Heading */}
<h1 className="text-[clamp(1.9rem,3.5vw,3rem)] leading-[1.2] mb-4">
  Partner with us and get
  <br />
  amazing insights
</h1>

                {/* Subtitle */}
                <p className="text-[#2A2A2A]/70 text-[clamp(1rem,1.2vw,1.375rem)] leading-relaxed">
                  Reach out to us to achieve and realize your business dreams.<br />
Happy Consulting & Great Support. Always! <br /><br />
                  Take the first step:
                </p>

                {/* Bullet Points */}
                <ul className="flex flex-col gap-4">
      <BulletItem>
        Use the contact form to get in touch
      </BulletItem>

      <BulletItem>
        email us at{" "}
        <a
          href="mailto:connect@realplan.in"
          className="text-[#FF8205] underline"
        >
          connect@realplan.in
        </a>
      </BulletItem>

      <BulletItem>
        No 133, 1F, 16th Street, Chowdry Nagar, Valasaravakkam, Chennai - 600 087
      </BulletItem>
    </ul>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918778227074"
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
            <div className="">
            <div
  className="
    relative flex flex-col bg-black rounded-lg
    w-full lg:w-[clamp(22rem,38vw,38.875rem)]
    ml-0 lg:ml-auto
    min-h-[auto]
    px-[clamp(1rem,2.2vw,2.5rem)]
    py-[clamp(3.5rem,3vw,4.5rem)]
    justify-center overflow-hidden
    z-30
  "
>

             <div
  className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none z-0"
  style={{
    background: `
      linear-gradient(to top left, #FFD900 0%, #FF8205 40%, #FA520F 65%, transparent 100%),
      linear-gradient(to top left, transparent 0%, #FF8205 50%, #FA520F 75%, transparent 100%),
      radial-gradient(ellipse 100% 30% at 55% 40%, #FF8205 0%, #FA520F 35%, transparent 70%),
      radial-gradient(ellipse 60% 25% at 25% 38%, #8B1500 0%, #CC2800 50%, transparent 80%),
      radial-gradient(ellipse 55% 22% at 75% 35%, #CC2800 0%, #FA520F 50%, transparent 80%),
      radial-gradient(ellipse 90% 20% at 60% 42%, #FA520F 0%, #FF8205 40%, transparent 75%),
      radial-gradient(ellipse 50% 40% at 90% 95%, #FFD900 0%, #FFAA00 45%, transparent 80%),
      radial-gradient(ellipse 110% 15% at 50% 28%, #FA520F 0%, transparent 100%),
      linear-gradient(to bottom, #000000 0%, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0.60) 25%, rgba(0,0,0,0.20) 45%, transparent 70%)
    `,
    filter: "blur(20px)",
    opacity: 0.7,
    willChange: "transform",
    transform: "translateZ(0)",
  }}
/>

              {/* FORM CONTENT */}
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="font-normal text-white">
                    Name <span className="text-[#FF8205]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border border-white/20 rounded-lg px-2 py-[0.6rem] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="font-normal text-white">
                      Email <span className="text-[#FF8205]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="w-full border border-white/20 rounded-lg px-3 sm:px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="font-normal text-white">
                      Phone <span className="text-[#FF8205]">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-white/20 rounded-lg px-3 sm:px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                    />
                  </div>
                </div>

                {/* Company */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-company" className="font-normal text-white">
                    Company <span className="text-[#FF8205]">*</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    className="w-full border border-white/20 rounded-lg px-[clamp(0.75rem,1vw,1rem)]
py-[clamp(0.5rem,0.8vw,0.75rem)] text-sm outline-none focus:border-[#FF8205] transition placeholder:text-black/35 bg-white text-black"
                  />
                </div>

                {/* Choose Solution */}
                <div className="flex flex-col gap-2 relative">
  <label htmlFor="contact-solution" className="font-normal text-white">
    Choose solution <span className="text-[#FF8205]">*</span>
  </label>

  <div className="relative">
    <select
      id="contact-solution"
      name="solution"
      defaultValue=""
      className="w-full border border-white/20 rounded-lg
      px-[clamp(0.75rem,1vw,1rem)]
      py-[clamp(0.5rem,0.8vw,0.75rem)]
      text-sm outline-none focus:border-[#FF8205] transition
      text-black/60 appearance-none bg-white cursor-pointer"
    >
      <option value="" disabled>
        Select one or more
      </option>
     <option value="market_research">Market Research</option>
<option value="location_analysis">Location Analysis</option>
<option value="market_feasibility">Market Feasibility</option>
<option value="real_estate_research">Real Estate Research</option>
<option value="socio_economic_research">Socio-Economic Research</option>
    </select>

    {/* DROPDOWN ICON */}
    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black/50 pointer-events-none" />
  </div>
</div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-normal text-white">Message</label>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full border border-white/30 rounded-lg
                      px-4 py-3 pr-8 text-sm
                      bg-white text-black
                      placeholder:text-black/35
                      resize
                      outline-none
                      transition
                      focus:border-[#FF8205]
                      focus:ring-2 focus:ring-[#FF8205]/30"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-[0.85rem] right-[0.35rem] h-3 w-3 text-black/35 sm:hidden"
                    >
                      <span className="absolute bottom-0 right-0 h-px w-2 rotate-[-45deg] bg-current" />
                      <span className="absolute bottom-[3px] right-0 h-px w-3 rotate-[-45deg] bg-current" />
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-[0.5rem]">
                  <Button
  text={loading ? "Submitting..." : "Submit Enquiry"}
  type="submit"
  disabled={loading}
/>


{error && (
  <p className="text-red-400 text-sm mt-2">
    {error}
  </p>
)}
                </div>
              </form>
            </div>
          </div>
          <div className="block lg:hidden my-[3rem]">
            <LogoCarousel />
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
}
