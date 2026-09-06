"use client";

import Image from "next/image";
import { Badge } from "@/components/shared";
import founder1 from "../../../assets/about_us/founder_1.webp";


export default function BlogDetailHero({ data }) {

  const {
    title,
    description,
    author,
    role,
    date,
    category,
    image,
    founder,
    name
  } = data;

  return (
    <section className="w-full bg-white text-black mt-9 sm:mt-28 md:mt-[5rem]">
      <div className="px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem]">

        {/* Top Tag */}
        <div className="mb-6">
          <Badge text={"Blogs"} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(2rem,5vw,4rem)] items-start">

  {/* Left - Title */}
  <div className="min-w-0">
    <h1 className="text-[clamp(1.6rem,3.5vw,2.3rem)] leading-[1.2] break-words">
      <span className="text-black">
        {title.split(" ").slice(0, 3).join(" ")}{" "}
      </span>
      <span className="text-gray-400">
        {title.split(" ").slice(3, 6).join(" ")}{" "}
      </span>
      <span className="text-black">
        {title.split(" ").slice(6).join(" ")}
      </span>
    </h1>
  </div>

  {/* Right - Description */}
  <div className="min-w-0">
    <p className="
  text-[clamp(1rem,1.4vw,1.4rem)]
  lg:text-[clamp(1.2rem,1.0vw,1.7rem)]
  text-[#2A2A2A]/60
  leading-relaxed
">
      {description}
    </p>
  </div>

</div>

        {/* Author + Meta */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8">

          {/* Author */}
          <div className="flex items-center gap-3">

  {/* Image */}
  <div className="w-[42px] h-[42px] relative rounded-full overflow-hidden border-2 border-[#FF8205]">
    <Image
      src={founder}
      alt={author}
      fill
      className="object-cover"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col justify-center">
    <h3 className="text-[#FF8205] text-[clamp(0.9rem,1.2vw,1.125rem)] font-medium leading-none">
      {name}
    </h3>
    <p className="text-sm text-gray-500 leading-none mt-1">
      {role}
    </p>
  </div>

</div>

          {/* Category + Date */}
         <div className="flex items-center gap-3 text-sm">

  {/* Category */}
  <span className="border border-gray-300 rounded-full px-3 py-1">
    {category}
  </span>

  {/* Divider */}
  <span className="w-px h-6 bg-gray-400"></span>

  {/* Date */}
  <span className="border border-gray-300 rounded-full px-3 py-1">
    {date}
  </span>

</div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem] pb-[clamp(2rem,4vw,3rem)] mt-[2rem]">
        <div className="relative w-full h-[clamp(12.5rem,45vw,37.25rem)] rounded-2xl overflow-hidden">
          {image && (
  <Image
  src={image}
  alt={title}
  fill
  className="object-cover"
/>
)}
        </div>
      </div>
    </section>
  );
}