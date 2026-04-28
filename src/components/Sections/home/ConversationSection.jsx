"use client";

import { Badge } from "@/components/shared";
import Image from "next/image";
import Frame_1 from "../../../assets/Frame 2085665781.webp";
import avatar from "../../../assets/avatar/avatar.webp";

const conversationData = [
  {
    client: "CLIENT_01",
    messages: [
      {
        name: "Client_name_02",
        date: "02 July 2024",
        message:
          "We want to establish a New entrant in fashion wear industry and have planned to transform into a leading Fashion wear brand",
      },
      {
        name: "Real Plan Consulting",
        date: "02 July 2024",
        message: "We got you!! 🤝",
      },
    ],
    image: Frame_1,
  },
  {
    client: "CLIENT_02",
    messages: [
      {
        name: "Client_name_03",
        date: "05 July 2024",
        message:
          "We are planning to expand our tech startup into international markets.",
      },
      {
        name: "Real Plan Consulting",
        date: "05 July 2024",
        message: "Let's scale this globally 🚀",
      },
    ],
    image: Frame_1,
  },
];

export default function ConversationSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 flex flex-col gap-[clamp(1rem,1.25vw,1.25rem)] px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]">

      {/* Badge */}
      <div>
        <Badge text="Our Conversation" />
      </div>

      {/* Heading */}
      <h2
        className="font-regular leading-tight text-black"
        style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)" }}
      >
        How clients engage with{" "}
        <span className="text-orange-500">
          Real<br />
          Plan Consulting!
        </span>
      </h2>

      {/* Subtitle */}
      <h3 className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/80 leading-relaxed">
        We help organisations make confident decisions by evaluating feasibility,
        long-term<br />
        viability, and sustainable impact through rigorous research and objective analysis.
      </h3>

      {/* CONVERSATIONS */}
      <div className="mt-10 flex flex-col">
        {conversationData.map((item, index) => (
          <div key={index}>

            <div className="flex flex-col lg:flex-row gap-10 pb-10">

              {/* LEFT INDEX */}
              <div className="text-3xl font-medium text-black/80 w-[80px] shrink-0">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* MIDDLE CONTENT */}
              <div className="flex-1 flex flex-col gap-2">

                {/* TITLE */}
                <h2
                  className="font-medium text-black mb-6"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }}
                >
                  {item.client}
                </h2>

                {/* TIMELINE ROWS — dynamic based on messages length */}
                <div className="flex flex-col">
                  {item.messages.map((msg, msgIndex) => (
                    <div key={msgIndex}>

                      {/* MESSAGE ROW */}
                      <div className="flex gap-5 items-center">

                        {/* Avatar column */}
                        <div className="flex flex-col items-center shrink-0">
                          <div className="w-[40px] h-[40px] rounded-full ring-2 ring-orange-500 overflow-hidden shrink-0">
                            <Image
                              src={avatar}
                              alt={msg.name}
                              width={60}
                              height={60}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col justify-start">
                          <div className="flex items-center gap-3">
                            <span className="text-orange-500 font-medium text-lg">
                              {msg.name}
                            </span>
                            <span className="text-black/40 text-lg">|</span>
                            <span className="text-sm text-black border border-black px-3 py-[2px] rounded-full">
                              {msg.date}
                            </span>
                          </div>
                          <p className="text-black mt-3 text-base leading-relaxed max-w-xl">
                            {msg.message}
                          </p>
                        </div>
                      </div>

                      {/* CONNECTOR LINE — only between messages, not after last */}
                      {msgIndex !== item.messages.length - 1 && (
                        <div className="flex gap-5">
                          <div className="w-[40px] shrink-0 flex justify-center">
                            <div className="w-[2px] h-10 bg-black/30" />
                          </div>
                        </div>
                      )}

                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full lg:w-[420px] h-[260px] relative rounded-xl overflow-hidden shrink-0">
                <Image
                  src={item.image}
                  alt={item.client}
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* DIVIDER */}
            {index !== conversationData.length - 1 && (
              <div className="w-full h-px bg-black/10 my-10" />
            )}

          </div>
        ))}
      </div>

    </section>
  );
}