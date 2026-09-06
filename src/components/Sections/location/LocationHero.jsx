import Image from "next/image";
import map from "@/assets/location/map.webp";
import { Badge } from "../../shared";


export default function Location() {
  return (

      <div className="px-[clamp(1rem,4vw,6rem)] xl:px-[clamp(6rem,5vw,9rem)] py-10 flex flex-col items-center text-center z-[30]">

      {/* Top Content */}
      <Badge text="Locations" />

      <h2 className="text-[clamp(1.6rem,3.5vw,2.3rem)] text-[#2A2A2A] leading-[1.2] mt-[2rem]">
        Currently operating at
      </h2>

      <h3 className="mt-[clamp(0.5rem,0.8vw,0.9rem)] text-[clamp(0.95rem,0.8vw+0.6rem,1.25rem)] text-[#2A2A2A]/80 max-w-2xl">
        We give actionable insights as we know the pulse of the local audience.
      </h3>

<div className="mt-[clamp(2.5rem,4vw,3.75rem)] relative w-full overflow-hidden">
  <Image
    src={map}
    alt="Location map"
    className="w-full h-auto object-contain mix-blend-normal
               scale-[1] origin-center sm:scale-[1.8] md:scale-100"
    priority
  />
</div>

</div>

      );
}
