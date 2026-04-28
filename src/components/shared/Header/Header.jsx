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

  // NEW: controls which dropdown is active
  const [activeMenu, setActiveMenu] = useState(null); // "solutions" | "about" | null

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
    setActiveMenu(null);
    if (path) router.push(path);
  };

  const showGlass = scrolled || activeMenu;

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
          onMouseLeave={() => setActiveMenu(null)}
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
              ${activeMenu ? "h-[260px]" : "h-[60px]"}
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
                    className="w-[8.5rem] h-[3rem] object-contain cursor-pointer"
                  />
                </div>

                {/* NAV */}
                <nav className={`hidden lg:flex items-center gap-20 ${textColor}`}>
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => {
                        if (item.name === "Solutions") setActiveMenu("solutions");
                        else if (item.name === "About Us") setActiveMenu("about");
                        else setActiveMenu(null);
                      }}
                    >
                      <span
                        onClick={() => item.path && handleNavigate(item.path)}
                        className="cursor-pointer hover:opacity-80 transition whitespace-nowrap"
                      >
                        {item.name}
                      </span>

                      {/* Solutions dropdown — positioned below this exact nav item */}
                      {item.name === "Solutions" && activeMenu === "solutions" && (
                        <div className="absolute top-full left-0 pt-6 flex flex-col gap-3 text-white z-10">
                          {SOLUTIONS_LINKS.map((link, i) => (
                            <span
                              key={i}
                              onClick={() => handleNavigate(link.href)}
                              className="cursor-pointer text-sm hover:text-[#FF8205] transition whitespace-nowrap"
                            >
                              {link.label}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* About dropdown — positioned below this exact nav item */}
                      {item.name === "About Us" && activeMenu === "about" && (
                        <div className="absolute top-full left-0 pt-6 flex flex-col gap-3 text-white z-10">
                          {ABOUT_LINKS.map((link, i) => (
                            <span
                              key={i}
                              onClick={() => handleNavigate(link.href)}
                              className="cursor-pointer text-sm hover:text-[#FF8205] transition whitespace-nowrap"
                            >
                              {link.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Button
                    text="Get started"
                    variant={buttonVariant}
                    onClick={() => router.push("/contact_us")}
                  />
                </nav>

                {/* MOBILE */}
                <div className="lg:hidden">
                  <button onClick={() => setIsMenuOpen(true)}>
                    <HiMenu className="w-7 h-7 text-white" />
                  </button>
                </div>
              </div>


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