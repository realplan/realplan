"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../../ui";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { ChevronDown } from "lucide-react";

const MOBILE_MENU_EXIT_DURATION_MS = 920;

export default function Header({
  logo,
  buttonVariant = "primary",
  logoRedirect = "/",
  color = "default",
}) {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null); // "solutions" | "about" | null
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null); // "solutions" | "about" | null

  const SOLUTIONS_LINKS = [
    { label: "Market Research", href: "/solutions/market-research" },
    { label: "Location Analysis", href: "/solutions/location-analysis" },
    { label: "Market Feasibility", href: "/solutions/market-feasibility-studies" },
    { label: "Real Estate Research", href: "/solutions/real-estate-research" },
    { label: "Socio-Economic Research", href: "/solutions/socio-economic-research" },
    { label: "Political Research", href: "/solutions/political-research" },
  ];

  const ABOUT_LINKS = [
    { label: "Company", href: "/about_us" },
    { label: "Sectors", href: "/sectors" },
    { label: "Locations", href: "/location" },
    { label: "Awards", href: "/awards" },
    { label: "Clients", href: "/clientele" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      const unlockTimeout = window.setTimeout(() => {
        const scrollY = document.body.dataset.scrollLockY;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        if (scrollY) {
          window.scrollTo(0, Number(scrollY));
          delete document.body.dataset.scrollLockY;
        }
      }, MOBILE_MENU_EXIT_DURATION_MS);

      return () => window.clearTimeout(unlockTimeout);
    }

    const scrollY = window.scrollY;
    document.body.dataset.scrollLockY = String(scrollY);
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      const lockedScrollY = document.body.dataset.scrollLockY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      if (lockedScrollY) {
        window.scrollTo(0, Number(lockedScrollY));
        delete document.body.dataset.scrollLockY;
      }
    };
  }, [isMenuOpen]);

  const handleNavigate = (path) => {
    setIsMenuOpen(false);
    setActiveMenu(null);
    setMobileExpandedMenu(null);
    if (path) router.push(path);
  };

  const toggleMobileMenuSection = (menuName) => {
    setMobileExpandedMenu((currentMenu) =>
      currentMenu === menuName ? null : menuName
    );
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
    { name: "Case Studies", path: "/case_studies" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      <div
        className={`fixed inset-x-0 z-[1000] flex justify-center transition-all duration-300 ${
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
                <nav className={`hidden lg:flex items-center gap-15 ${textColor}`}>
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
                        className="flex items-center gap-2 cursor-pointer text-sm xl:text-base hover:opacity-80 transition whitespace-nowrap"
                      >
                        {item.name}
                        {(item.name === "Solutions" || item.name === "About Us") && (
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeMenu === "solutions" && item.name === "Solutions"
                                ? "rotate-180"
                                : activeMenu === "about" && item.name === "About Us"
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        )}
                      </span>

                      {/* Solutions dropdown — positioned below this exact nav item */}
                      {item.name === "Solutions" && activeMenu === "solutions" && (
                        <div className="absolute top-full left-0 pt-6 flex flex-col gap-3 text-white z-10">
                          {SOLUTIONS_LINKS.map((link, i) => (
                            <span
                              key={i}
                              onClick={() => handleNavigate(link.href)}
                              className="cursor-pointer text-sm xl:text-base hover:text-[#FF8205] transition whitespace-nowrap"
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
                              className="cursor-pointer text-sm xl:text-base hover:text-[#FF8205] transition whitespace-nowrap"
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
  <button onClick={() => setIsMenuOpen(true)} className="!flex items-center justify-center">
    <HiMenu className={`w-7 h-7 ${color === "white" ? "text-[#FF8205]" : "text-white"}`} />
  </button>
</div>
              </div>


            </div>
          </header>
        </div>
      </div>

      <div className="h-[90px]" />

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[1100] bg-black/40 backdrop-blur-2xl flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="flex h-full flex-col"
              initial={{ y: -128, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -88, opacity: 0 }}
              transition={{ duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute top-5 left-6">
                <div
                  onClick={() => handleNavigate(logoRedirect)}
                  className="cursor-pointer"
                >
                  <Image
                    src={logo}
                    alt="Logo"
                    className="w-[8.5rem] h-[3rem] object-contain cursor-pointer"
                  />
                </div>
              </div>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6"
              >
                <HiX className="w-8 h-8 text-[#FF8205]" />
              </button>

              <div className="flex flex-col gap-6 mt-28 px-8 text-white">
                {navItems.map((item) => {
                  const isSolutions = item.name === "Solutions";
                  const isAbout = item.name === "About Us";
                  const isExpandable = isSolutions || isAbout;
                  const sectionName = isSolutions ? "solutions" : isAbout ? "about" : null;
                  const sectionLinks = isSolutions
                    ? SOLUTIONS_LINKS
                    : isAbout
                    ? ABOUT_LINKS
                    : [];

                  return (
                    <div key={item.name} className="flex flex-col gap-3">
                      <span
                        onClick={() =>
                          isExpandable
                            ? toggleMobileMenuSection(sectionName)
                            : handleNavigate(item.path)
                        }
                        className="flex items-center justify-between gap-2 cursor-pointer text-lg"
                      >
                        {item.name}
                        {isExpandable && (
                          <ChevronDown
                            className={`h-5 w-5 transition-transform duration-200 ${
                              mobileExpandedMenu === sectionName ? "rotate-180" : ""
                            }`}
                          />
                        )}
                      </span>

                      <AnimatePresence initial={false}>
                        {isExpandable && mobileExpandedMenu === sectionName && (
                          <motion.div
                            className="flex flex-col gap-3 overflow-hidden pl-4"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                          >
                            {sectionLinks.map((link) => (
                              <motion.span
                                key={`${sectionName}-${link.label}-${link.href}`}
                                onClick={() => handleNavigate(link.href)}
                                className="cursor-pointer text-lg"
                                initial={{ y: -8, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -8, opacity: 0 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                              >
                                {link.label}
                              </motion.span>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                <Button
                  text="Get started"
                  variant={buttonVariant}
                  onClick={() => handleNavigate("/contact_us")}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
