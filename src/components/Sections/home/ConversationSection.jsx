"use client";

import { Badge } from "@/components/shared";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Frame_1 from "../../../assets/Frame 2085665781.webp";
import avatar from "../../../assets/avatar/avatar.webp";
import { CONVERSATION_DATA } from "@/data/conversationdata";


const CARD_HEADER_OFFSET = 88;
// ring-2 renders as box-shadow (not border), so getBoundingClientRect()
// does not include it. We must add it manually so the line clears the ring.
const RING_WIDTH = 2; // matches Tailwind ring-2
const LINE_GAP = 6;   // additional visual breathing room past the ring

// ─── Shared avatar timeline ────────────────────────────────────────────────────
// Renders a column of avatar + message rows with a single dynamically-measured
// connector line that runs between avatar centres, never touching the edges.
//
// Props:
//   messages      — array of { name, date, message }
//   gap           — Tailwind gap class between rows  (default "gap-10")
//   textSizeName  — Tailwind text-size class for the sender name
//   textSizeMsg   — Tailwind text-size class for the message body
//   avatarSize    — pixel size of the avatar circle   (default 40)

function AvatarTimeline({
  messages,
  gap = "gap-10",
  textSizeName = "text-lg",
  textSizeMsg = "text-base",
  avatarSize = 40,
}) {
  const containerRef = useRef(null);
  const avatarRefs = useRef([]); // parallel array — one ref per message row
  const [lineStyle, setLineStyle] = useState(null);

  // Recalculate whenever messages change or window resizes
  const measure = useCallback(() => {
    const container = containerRef.current;
    const avatars = avatarRefs.current.filter(Boolean);

    if (!container || avatars.length < 2) {
      setLineStyle(null);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const firstRect = avatars[0].getBoundingClientRect();
    const lastRect = avatars[avatars.length - 1].getBoundingClientRect();

    // Horizontal centre of the avatar column relative to container
    const centerX =
      firstRect.left - containerRect.left + firstRect.width / 2;



    // offset = ring width (invisible to getBoundingClientRect) + visual gap
    const offset = RING_WIDTH + LINE_GAP;
    const top    = firstRect.bottom - containerRect.top + offset;
    const bottom = lastRect.top     - containerRect.top - offset;

    setLineStyle({
      left: `${centerX}px`,       // sits on the centre axis
      top: `${top}px`,
      height: `${Math.max(0, bottom - top)}px`,
    });
  }, [messages]);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  return (
    <div ref={containerRef} className={`relative flex flex-col ${gap}`}>
      {/* Single dynamically-positioned connector line */}
      {lineStyle && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-0 w-[2px] -translate-x-1/2 bg-black/30"
          style={lineStyle}
        />
      )}

{messages.map((msg, i) => {
        const isLastMessage = i === messages.length - 1;
        const isLastInPair = i % 2 === 1 && !isLastMessage;

        return (
          <div
            key={i}
            className={`relative z-10 flex items-start gap-5 ${
              isLastInPair ? "mb-10" : ""
            }`}
          >
            <div
              ref={(el) => {
                avatarRefs.current[i] = el;
              }}
              className="shrink-0 overflow-hidden rounded-full bg-white"
              style={{ width: avatarSize, height: avatarSize }}
            >
              <Image
                src={msg.avatar}
                alt={msg.name}
                width={60}
                height={60}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className={`font-medium text-orange-500 ${textSizeName}`}
                >
                  {msg.name}
                </span>
                <span className="text-black/40 text-lg">|</span>
                <span className="rounded-full border border-black px-3 py-[2px] text-sm text-black">
                  {msg.date}
                </span>
              </div>

              <p
                className={`mt-3 leading-relaxed text-black max-w-xl ${textSizeMsg}`}
              >
                {msg.message}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Animated card (desktop stacked deck) ─────────────────────────────────────
// Framer Motion logic is completely unchanged — only the message section
// now delegates to <AvatarTimeline />.

function ConversationCard({ item, index, progress, totalCards, cardHeight }) {
  const totalTimelineSteps = totalCards * 2 - 2;
  const restingOffset = index * CARD_HEADER_OFFSET;

  const rawY = useTransform(progress, (value) => {
    if (index === 0) return 0;

    const arrivalStart = (index * 2 - 1) / totalTimelineSteps;
    const arrivalEnd = (index * 2) / totalTimelineSteps;

    if (value <= arrivalStart) {
      const hiddenSteps = Math.max(index - 1, 0);
      return cardHeight + hiddenSteps * CARD_HEADER_OFFSET;
    }

    if (value < arrivalEnd) {
      const localProgress =
        (value - arrivalStart) / (arrivalEnd - arrivalStart);
      return (
        cardHeight * (1 - localProgress) + restingOffset * localProgress
      );
    }

    return restingOffset;
  });

  const y = useSpring(rawY, { stiffness: 85, damping: 24, mass: 0.6 });

  return (
    <motion.div
      className="absolute inset-x-0 top-0"
      style={{
        height: `calc(100% - ${(totalCards - 1) * CARD_HEADER_OFFSET}px)`,
        y,
        zIndex: index + 1,
      }}
    >
      <div className="flex h-full flex-col overflow-hidden border-t border-black/10 bg-white rounded-none shadow-none">
<div className="flex flex-row items-start gap-8 p-6 md:p-8 lg:gap-10 lg:p-10">
          {/* Card index number */}
          <div className="w-[80px] shrink-0 pt-1 text-3xl font-medium text-black/80">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Message thread */}
          <div className="min-w-0 flex-1 md:pl-6">
            <h2
              className="mb-6 font-medium text-black"
              style={{ fontSize: "clamp(1.25rem, 2vw, 2rem)" }}
            >
              {item.client}
            </h2>

            <AvatarTimeline
              messages={item.messages}
              gap="gap-6"
              textSizeName="text-lg"
              textSizeMsg="text-base"
              avatarSize={40}
            />
          </div>

          {/* Thumbnail image */}
          <div className="relative shrink-0 overflow-hidden rounded-xl"
style={{
  width: "clamp(160px, 25vw, 360px)",
  height: "clamp(180px, 20vh, 260px)",
}}>
            <Image
              src={item.image}
              alt={item.client}
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// ─── Static card (mobile list) ────────────────────────────────────────────────

function ConversationCardStatic({ item }) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-black/10 bg-white">
      <div className="flex flex-col gap-8 p-5 sm:p-6">
        <div className="min-w-0">
          <h2
            className="mb-5 font-medium text-black"
            style={{ fontSize: "clamp(1.15rem, 5vw, 1.5rem)" }}
          >
            {item.client}
          </h2>

          <AvatarTimeline
            messages={item.messages}
            gap="gap-8"
            textSizeName="text-base"
            textSizeMsg="text-sm sm:text-base"
            avatarSize={40}
          />
        </div>

        {/* Thumbnail image */}
        <div className="relative h-[220px] w-full overflow-hidden rounded-[1.25rem]">
          <Image
            src={item.image}
            alt={item.client}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ConversationSection() {
  const sectionRef = useRef(null);
  const deckRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(520);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.8,
  });

  useEffect(() => {
  const updateHeight = () => {
    if (!deckRef.current) return;
    const h = deckRef.current.clientHeight;
    if (h === 0) return;
    setCardHeight(h - (CONVERSATION_DATA.length - 1) * CARD_HEADER_OFFSET);
  };

  const raf = requestAnimationFrame(updateHeight);
  window.addEventListener("resize", updateHeight);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", updateHeight);
  };
}, []);

  return (
    <section
      className="
        w-full
        flex flex-col gap-[clamp(1rem,1.25vw,1.25rem)]
        px-[clamp(1rem,2vw+0.5rem,4rem)]
        xl:px-[6.2rem]
        2xl:px-[9rem]
   mb-[clamp(2.4rem,4vw,3rem)]
      "
    >
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
          Real
          <br />
          Plan Consulting!
        </span>
      </h2>

      {/* Subtitle */}
      <h3 className="text-[clamp(1rem,1.4vw,1.4rem)] lg:text-[clamp(1.2rem,1.0vw,1.7rem)] text-[#2A2A2A]/80 leading-relaxed">
        If you are in search for a reliable business support partner, with experience, expertise &
        <br />
        competence who are in tune with the latest technologies and can give you customized
        <br />
       solutions and services at competitive prices, then you have landed on the right page.
      </h3>

      {/* Mobile: static list */}
      <div className="mt-6 flex flex-col gap-5 lg:hidden">
        {CONVERSATION_DATA.map((item, index) => (
          <ConversationCardStatic key={index} item={item} />
        ))}
      </div>

      {/* Desktop: animated stacked deck */}
      <div
        ref={sectionRef}
        className="relative mt-6 hidden lg:block"
        style={{ height: `${CONVERSATION_DATA.length * 200}vh` }}
      >
        <div
          ref={deckRef}
          className="sticky top-24 overflow-hidden rounded-[2rem]"
style={{
  height: "min(90vh, calc(100vh - 5rem))",
  maxHeight: "1000px",
}}
        >
          {CONVERSATION_DATA.map((item, index) => (
            <ConversationCard
              key={index}
              item={item}
              index={index}
              progress={smoothProgress}
              totalCards={CONVERSATION_DATA.length}
              cardHeight={cardHeight}
            />
          ))}
        </div>
      </div>
    </section>
  );
}