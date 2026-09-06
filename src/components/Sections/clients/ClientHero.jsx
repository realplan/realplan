"use client";

import Image from "next/image";

import client3mCar from "@/assets/clients/3m_car.webp";
import alliance from "@/assets/clients/alliance.webp";
import anest from "@/assets/clients/anest.webp";
import bikeneri from "@/assets/clients/bikeneri.webp";
import bioerea from "@/assets/clients/bioerea.webp";
import cargrill from "@/assets/clients/cargrill.webp";
import cbre from "@/assets/clients/cbre.webp";
import ccbank from "@/assets/clients/ccbank.webp";
import centric from "@/assets/clients/centric.webp";
import coevolve from "@/assets/clients/coevolve.webp";
import colliers from "@/assets/clients/colliers.webp";
import cuemath from "@/assets/clients/cuemath.webp";
import effihr from "@/assets/clients/effihr.webp";
import eko from "@/assets/clients/eko.webp";
import elgi from "@/assets/clients/elgi.webp";
import empire from "@/assets/clients/empire.webp";
import fincart from "@/assets/clients/fincart.webp";
import greenPeace from "@/assets/clients/green_peace.webp";
import hashTag from "@/assets/clients/hash_tag.webp";
import hyundai from "@/assets/clients/hyundai.webp";
import iazi from "@/assets/clients/iazi.webp";
import icrier from "@/assets/clients/icrier.webp";
import jaihind from "@/assets/clients/jaihind.webp";
import jeyachandran from "@/assets/clients/jeyachandran.webp";
import k7Security from "@/assets/clients/k7_security.webp";
import kauveri from "@/assets/clients/kauveri.webp";
import kfc from "@/assets/clients/kfc.webp";
import kiara from "@/assets/clients/kiara.webp";
import klaire from "@/assets/clients/klaire.webp";
import lT from "@/assets/clients/l_T.webp";
import lc from "@/assets/clients/lc.webp";
import lis from "@/assets/clients/lis.webp";
import maharaja from "@/assets/clients/maharaja.webp";
import microtek from "@/assets/clients/microtek.webp";
import midwave from "@/assets/clients/midwave.webp";
import milliken from "@/assets/clients/milliken.webp";
import move from "@/assets/clients/move.webp";
import nackative from "@/assets/clients/nackative.webp";
import nifl from "@/assets/clients/nifl.webp";
import nttf from "@/assets/clients/nttf.webp";
import oel from "@/assets/clients/oel.webp";
import qulaco from "@/assets/clients/qulaco.webp";
import samarth from "@/assets/clients/samarth.webp";
import ssi from "@/assets/clients/ssi.webp";
import stumper from "@/assets/clients/stumper.webp";
import svd from "@/assets/clients/svd.webp";
import tenderCuts from "@/assets/clients/tender_cuts.webp";
import thickShake from "@/assets/clients/thick_shake.webp";
import tidel from "@/assets/clients/tidel.webp";
import toni from "@/assets/clients/toni.webp";
import tri from "@/assets/clients/tri.webp";
import washInstitute from "@/assets/clients/wash_institute.webp";
import wazir from "@/assets/clients/wazir.webp";
import wiirfel from "@/assets/clients/wiirfel.webp";
import ykk from "@/assets/clients/ykk.webp";

import { Badge } from "../../shared";

const logos = [
  client3mCar,
  alliance,
  anest,
  bikeneri,
  bioerea,
  cargrill,
  cbre,
  ccbank,
  centric,
  coevolve,
  colliers,
  cuemath,
  effihr,
  eko,
  elgi,
  empire,
  fincart,
  greenPeace,
  hashTag,
  hyundai,
  iazi,
  icrier,
  jaihind,
  jeyachandran,
  k7Security,
  kauveri,
  kfc,
  kiara,
  klaire,
  lT,
  lc,
  lis,
  maharaja,
  microtek,
  midwave,
  milliken,
  move,
  nackative,
  nifl,
  nttf,
  oel,
  qulaco,
  samarth,
  ssi,
  stumper,
  svd,
  tenderCuts,
  thickShake,
  tidel,
  toni,
  tri,
  washInstitute,
  wazir,
  wiirfel,
  ykk,
];

export default function ClientHero() {
  return (
    <div className="px-[clamp(1rem,4vw,6rem)] xl:px-[clamp(6rem,5vw,9rem)] py-10 flex flex-col items-center text-center z-[30]">

      {/* Badge */}
      <Badge text="A Few of our Clientle" />

      {/* Heading */}
      <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] text-[#2A2A2A] leading-[1.2] mt-[2rem]">
        Trusted by Leading Organizations
      </h2>

      {/* Description */}
      <h3 className="mt-[clamp(0.5rem,0.8vw+0.6rem,1.25rem)] text-[clamp(0.95rem,0.8vw+0.6rem,1.25rem)] text-[#2A2A2A]/80 max-w-2xl">
        For over a decade, Real Plan Consulting has partnered with businesses,
        institutions, and public sector organizations across diverse spheres.
      </h3>

      {/* Logo Grid */}
      <div className="w-full mt-[clamp(2.5rem,4vw,3.75rem)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4"
            >
              <Image
                src={logo}
                alt={`Organization ${index + 1}`}
                className="h-auto w-full max-w-[180px] object-contain"
                priority={index < 4}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
