"use client";

export default function FooterBase({ children }) {
  return (
    <div
      className="relative overflow-hidden bg-black"
      style={{
        width: "100vw", // full viewport width
        marginLeft: "calc(-1.1 * var(--page-margin-desktop))",
        marginRight: "calc(-1.1 * var(--page-margin-desktop))",
      }}
    >
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-[50%] blur-3xl opacity-70 bg-gradient-to-t from-orange-600 via-orange-500 to-transparent" />
      </div>

      {/* FOOTER CONTENT */}
      <div className="relative z-20 w-full max-w-[calc(100% - 1rem)] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 md:py-16 lg:py-20">
        {children}
      </div>
    </div>
  );
}}