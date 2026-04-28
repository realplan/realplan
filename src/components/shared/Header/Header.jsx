"use client";

import Image from "next/image";
import { Button } from "../../ui";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({
  logo,
  buttonVariant = "primary",
  logoRedirect = "/",
  color = "default",
}) {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const SOLUTIONS_LINKS = [
    { label: "Market Research", href: "/solutions/market-research" },
    { label: "Location Analysis", href: "/solutions/location-analysis" },
    { label: "Market Feasibility", href: "/solutions/market-feasability-studies" },
    { label: "Real Estate Research", href: "/solutions/real-estate" },
    { label: "Socio-Economic Research", href: "/solutions/socio-economic" },
    { label: "Political Research", href: "/solutions/political-research" },
  ];

  const ABOUT_LINKS = [
    { label: "Company", href: "/about_us" },
    { label: "Sectors", href: "/sectors" },
    { label: "Locations", href: "/about_us" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setIsExpanded(false);
    if (path) router.push(path);
  };

  const showGlass = scrolled || isExpanded;

  const textColor =
    showGlass
      ? "text-white"
      : color === "white"
      ? "text-black"
      : "text-white";

  const navItems = [
    { name: "Solutions" },
    { name: "About Us" },
    { name: "Case studies", path: "/case_studies" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <div
        className={`fixed inset-x-0 z-[100] flex justify-center transition-all duration-300 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div
          onMouseLeave={() => setIsExpanded(false)}
          className="relative w-full transition-all duration-300"
        >
          {/* GLASS */}
          <div
            className={`
              absolute
              left-[clamp(0.5rem,1.5vw+0.25rem,3.5rem)]
              right-[clamp(0.5rem,1.5vw+0.25rem,3.5rem)]
              xl:left-[5.7rem] xl:right-[5.7rem]
              2xl:left-[8.5rem] 2xl:right-[8.5rem]
              rounded-lg
              transition-all duration-500
              ${showGlass ? "bg-black/40 backdrop-blur-md" : "bg-transparent"}
              ${isExpanded ? "h-[260px]" : "h-[60px]"}
            `}
          />

          {/* HEADER */}
          <header className="relative z-10">
            <div className="flex flex-col">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem] py-2">

                {/* LOGO */}
                <div
                  onClick={() => router.push(logoRedirect)}
                  className="cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt="Logo"
                    className="w-[8.5rem] h-[3rem] object-contain"
                  />
                </div>

                {/* NAV — gap-20 to give columns enough breathing room */}
                <nav className={`hidden lg:flex items-center gap-20 ${textColor}`}>
                  {navItems.map((item) => (
                    <span
                      key={item.name}
                      onMouseEnter={() => {
                        if (item.name === "Solutions" || item.name === "About Us") {
                          setIsExpanded(true);
                        }
                      }}
                      onClick={() => item.path && handleNavigate(item.path)}
                      className="cursor-pointer hover:opacity-80 transition"
                    >
                      {item.name}
                    </span>
                  ))}

                  <Button
                    text="Get started"
                    variant={buttonVariant}
                    onClick={() => router.push("/contact_us")}
                  />
                </nav>

                {/* MOBILE TOGGLE */}
                <div className="lg:hidden">
                  <button onClick={() => setIsMenuOpen(true)}>
                    <HiMenu className="w-7 h-7 text-white" />
                  </button>
                </div>
              </div>

              {/* EXPANDED DROPDOWN — must use same gap-20 as nav above */}
              {isExpanded && (
                <div className="w-full px-[clamp(1rem,2vw+0.5rem,4rem)] xl:px-[6.2rem] 2xl:px-[9rem] pb-4">
                  <div className="flex items-start justify-end gap-20 text-white">

                    {/* SOLUTIONS column */}
                    <div className="flex flex-col gap-3">
                      {SOLUTIONS_LINKS.map((item, i) => (
                        <span
                          key={`sol-${i}`}
                          onClick={() => handleNavigate(item.href)}
                          className="cursor-pointer text-sm hover:text-[#FF8205] transition-colors duration-200 whitespace-nowrap"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>

                    {/* ABOUT US column */}
                    <div className="flex flex-col gap-3">
                      {ABOUT_LINKS.map((item, i) => (
                        <span
                          key={`abt-${i}`}
                          onClick={() => handleNavigate(item.href)}
                          className="cursor-pointer text-sm hover:text-[#FF8205] transition-colors duration-200 whitespace-nowrap"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>

                    {/* Invisible spacers — mirror "Case studies", "Blogs", Button exactly */}
                    <span className="invisible pointer-events-none whitespace-nowrap">
                      Case studies
                    </span>

                    <span className="invisible pointer-events-none whitespace-nowrap">
                      Blogs
                    </span>

                    <div className="invisible pointer-events-none">
                      <Button text="Get started" variant={buttonVariant} />
                    </div>

                  </div>
                </div>
              )}

            </div>
          </header>
        </div>
      </div>

      <div className="h-[90px]" />

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-2xl flex flex-col">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <HiX className="w-8 h-8 text-[#FF8205]" />
          </button>

          <div className="flex flex-col gap-6 mt-24 px-8 text-white text-lg">
            {navItems.map((item) => (
              <span
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className="cursor-pointer"
              >
                {item.name}
              </span>
            ))}

            <Button
              text="Get started"
              variant={buttonVariant}
              onClick={() => handleNavigate("/contact_us")}
            />
          </div>
        </div>
      )}
    </>
  );
}