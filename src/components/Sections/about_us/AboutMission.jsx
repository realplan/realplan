"use client";

import Image from "next/image";
import missionImg from "../../../assets/about_us/mission.webp";
import visionImg from "../../../assets/about_us/vision.webp";
import sideImg from "../../../assets/about_us/founders.webp";

export default function MissionVisionSection() {
  return (
    <section className="py-12 lg:py-20">
      <div className="">
          <div className="px-[clamp(1rem,2vw+0.5rem,4rem)]
xl:px-[6.2rem]
2xl:px-[9rem]">
        <div className="flex flex-col lg:flex-row gap-8 lg:items-start">

          {/* LEFT BLOCK: FOUNDERS + MISSION/VISION */}
          <div className="lg:flex-[1.4] flex flex-col md:flex-row md:items-stretch gap-4 md:gap-6">

            {/* FOUNDERS IMAGE
                Mobile  : full width, aspect-[3/4] drives height
                Desktop : flex-1, aspect-[3/4] anchors full row height
            */}
            <div className="relative w-full md:flex-1 aspect-[3/4] rounded-[0.5rem] overflow-hidden">
              <Image
                src={sideImg}
                alt="Team Vision"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* MISSION + VISION STACKED
                Mobile  : full width column, each card has its own aspect ratio
                Desktop : flex-1 width, stretches to match founders height via md:items-stretch on parent;
                          cards use flex-1 to split the height equally
            */}
            <div className="flex flex-col gap-4 md:gap-6 w-full md:flex-1">

              {/* MISSION CARD
                  Mobile  : aspect-[4/3] self-sizes
                  Desktop : md:aspect-auto + md:flex-1 stretches to half the row height
              */}
              <div className="relative rounded-[0.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1">
                <Image
                  src={missionImg}
                  alt="Mission"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300/70 via-yellow-200/60 to-transparent" />
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  <p className="text-black text-[clamp(1.08rem,1.2vw,1.05rem)]">
  Solving unknowns for <br />the known.
</p>
                  <h3 className="text-black text-3xl md:text-4xl font-semibold">
                    MISSION
                  </h3>
                </div>
              </div>

              {/* VISION CARD */}
              <div className="relative rounded-[0.5rem] overflow-hidden aspect-[4/3] md:aspect-auto md:flex-1">
                <Image
                  src={visionImg}
                  alt="Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  <p className="text-white text-[clamp(1.08rem,1.2vw,1.05rem)]">
                    Transforming lives by giving solutions for who, what, when,
                    where, why and how.
                  </p>
                  <h3 className="text-white text-3xl md:text-4xl font-semibold">
                    VISION
                  </h3>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: TEXT CONTENT
              Mobile  : stacks below, normal flow
              Desktop : flex-1, self-stretch aligns top-to-bottom with left block;
                        justify-between pushes quote to bottom
          */}
          <div className="lg:flex-1 flex flex-col justify-between lg:self-stretch py-1">
            <p className="text-black/60 leading-normal text-[1.22rem]/80 sm:text-[1.22rem]">
              We achieve our goals through research, consulting and solution
              deployment with a customized approach to every client of ours. We
              provide solutions through simple intelligence and technology that
              will maximize efficiency and thereby add value to the business of
              our clients.
            </p>

<h4 className="text-[#FF8205] text-[1.1rem] sm:text-[1.3rem] font-normal text-right">
    "Our goal is to transform data into information, and -{" "}
              <br />information into insights"
              <br />
              <span className="text-black/70 text-sm font-normal">
                -Real Plan Consulting Team
              </span>
            </h4>
          </div>

        </div>
      </div>
        </div>

    </section>
  );
}