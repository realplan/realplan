"use client";

import { usePathname } from "next/navigation";

const HIDDEN_PATH_PREFIXES = ["/contact_us"];

export default function WhatsAppFab() {
  const pathname = usePathname();

  const shouldHide = HIDDEN_PATH_PREFIXES.some((prefix) =>
    pathname?.startsWith(prefix)
  );

  if (shouldHide) {
    return null;
  }

  return (
    <a
      href="https://wa.me/918778227074"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-[110] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-[clamp(1.25rem,2vw,2rem)] h-[clamp(1.25rem,2vw,2rem)] z-[400]"
  />
</a>
  );
}
