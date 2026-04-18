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
  const [isHovered, setIsHovered] = useState(false);

  const menuIconColor = color === "white" ? "#FF8205" : "currentColor";

  const navItems = [
    {
      name: "Solutions",
      dropdown: ["Market Research", "Business Strategy", "Analytics"],
    },
    {
      name: "About Us",
      dropdown: ["Our Story", "Team", "Careers"],
    },
    {
      name: "Case studies",
      path: "/case_studies",
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    if (path) router.push(path);
  };

  const showGlass = scrolled || isHovered;

  return (
    <>
      {/* OUTER WRAPPER (NO LAYOUT IMPACT) */}
      <div className="fixed top-0 inset-x-0 z-[100] flex justify-center p-2">

        {/* GLASS ONLY WRAPPER (MATCHES HEADER PADDING SYSTEM) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`
            w-full
            rounded-lg
            transition-all duration-300

            ${
              showGlass
                ? "bg-black/40 backdrop-blur-sm backdrop-saturate-150 border border-white/10"
                : "bg-transparent border-transparent"
            }
          `}
        >
          {/* HEADER CONTENT (UNCHANGED) */}
          <header>
            <div
              className="
                flex items-center justify-between
                px-[clamp(1rem,2vw+0.5rem,4rem)]
                xl:px-[6.2rem]
                2xl:px-[9rem]
                py-4
              "
            >
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

              {/* DESKTOP NAV */}
              <nav className="hidden lg:flex items-center gap-16 text-white">
                {navItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <span
                      onClick={() => handleNavigate(item.path)}
                      className="cursor-pointer hover:text-white/70 transition"
                    >
                      {item.name}
                    </span>
                  </div>
                ))}

                <Button
                  text="Get started"
                  variant={buttonVariant}
                  onClick={() => router.push("/contact_us")}
                />
              </nav>

              {/* MOBILE ICON */}
              <div className="lg:hidden">
                <button onClick={() => setIsMenuOpen(true)}>
                  <HiMenu className="w-7 h-7" style={{ color: menuIconColor }} />
                </button>
              </div>
            </div>
          </header>
        </div>
      </div>

      {/* SPACER */}
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