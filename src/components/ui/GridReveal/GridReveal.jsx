"use client";

import { useMotionValueEvent } from "framer-motion";
import { useState, useId, useEffect, useRef } from "react";

let activeGridId = null; // ✅ GLOBAL CONTROL

export default function GridReveal({
  x,
  y,
  theme = "gold",
  radius = "16.25rem",
}) {
  const id = useId();
  const containerRef = useRef(null);

  const [mx, setMx] = useState(0);
  const [my, setMy] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // ✅ NEW: dynamic grid size
  const [gridSize, setGridSize] = useState({ cols: 10, rows: 10 });

  // ✅ Track mouse X
  useMotionValueEvent(x, "change", (latest) => {
    setMx(latest);

    if (activeGridId !== id) {
      activeGridId = id;
    }

    setIsActive(true);
  });

  // ✅ Track mouse Y
  useMotionValueEvent(y, "change", (latest) => {
    setMy(latest);

    if (activeGridId !== id) {
      activeGridId = id;
    }

    setIsActive(true);
  });

  // ✅ Hide on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsActive(false);
      if (activeGridId === id) {
        activeGridId = null;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  // ✅ Hide when section goes out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsActive(false);
          if (activeGridId === id) {
            activeGridId = null;
          }
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [id]);

  // ✅ NEW: calculate full grid coverage
  useEffect(() => {
    const updateGrid = () => {
      if (!containerRef.current) return;

      const { offsetWidth, offsetHeight } = containerRef.current;

      const boxSize = 64; // 4rem

      const cols = Math.ceil(offsetWidth / boxSize);
      const rows = Math.ceil(offsetHeight / boxSize) + 1; // extra row to avoid gaps

      setGridSize({ cols, rows });
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);

    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const themes = {
    gold: "rgba(255,217,0,0.45)",
    light: "rgba(0,0,0,0.15)",
    dark: "rgba(255,255,255,0.18)",
    golden_orange: "rgba(255,174,0,0.6)",
    vivid_orange: "rgba(255,130,5,0.16)",
  };

  const color = themes[theme] || themes.gold;

  const visible = activeGridId === id && isActive;

  const totalBoxes = gridSize.cols * gridSize.rows;

  return (
    <div
      ref={containerRef}
      onMouseLeave={() => {
        setIsActive(false);
        if (activeGridId === id) {
          activeGridId = null;
        }
      }}
      className={`pointer-events-auto hidden md:block absolute inset-0 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        WebkitMaskImage: `radial-gradient(circle ${radius} at ${mx}px ${my}px, white 0%, white 60%, transparent 100%)`,
        maskImage: `radial-gradient(circle ${radius} at ${mx}px ${my}px, white 0%, white 60%, transparent 100%)`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
      }}
    >
      {/* GRID LINES */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          backgroundPosition: "0px 1px, 1px 0px",
        }}
      />

      {/* BOXES */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 4rem)",
          gridAutoRows: "4rem",
        }}
      >
        {Array.from({ length: totalBoxes }).map((_, i) => {
          const cols = gridSize.cols;

          const row = Math.floor(i / cols);
          const col = i % cols;

          const gap = 3; // spacing control

          const isHighlighted = row % gap === 0 && col % gap === 0;

          return (
            <div
              key={i}
              style={{
                border: `1px solid ${color}`,
                borderRadius: "0.625rem",
                background: isHighlighted
                  ? color.replace(/0\.\d+\)/, "0.12)")
                  : "transparent",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}