"use client";


export default function FooterWave() {

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-10 h-[48%]"

    >

      {/* BACK GLOW (Sprayed Effect) */}
      <div
        className="absolute -bottom-[10%] -left-[5%] w-[60%] h-full blur-[40px] opacity-40 z-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 70% 100%, #FFD900 0%, #FFB800 25%, #FF6B00 60%, transparent 90%)",
        }}
      />
      <div
        className="absolute -bottom-[10%] -right-[5%] w-[60%] h-full blur-[40px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 80% 65% at 70% 100%, #FFD000 0%, #FFA000 30%, #FF6B00 65%, transparent 90%)",
        }}
      />

      {/* MID LAYER */}
      <div
        className="absolute bottom-[2%] -left-[5%] w-[58%] h-[85%] blur-[35px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 28% 90%, #FF8205 0%, #FA520F 50%, #CC2800 80%, transparent 95%)",
        }}
      />
      <div
        className="absolute bottom-[2%] -right-[5%] w-[58%] h-[85%] blur-[35px] opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 72% 90%, #FF8205 0%, #FA520F 50%, #CC2800 80%, transparent 95%)",
        }}
      />

      {/* DARK DEPTH */}
      <div
        className="absolute bottom-[18%] -left-[5%] w-[52%] h-[60%] blur-[35px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 25% 75%, #CC2200 0%, #991500 65%, transparent 90%)",
        }}
      />
      <div
        className="absolute bottom-[18%] -right-[5%] w-[52%] h-[60%] blur-[35px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 65% 70% at 75% 75%, #CC2200 0%, #991500 65%, transparent 90%)",
        }}
      />

      {/* FRONT HIGHLIGHT (Bottom Corners Only) */}
      <div
        className="absolute -bottom-[5%] -left-[2%] w-[15%] h-[40%] blur-[25px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 25% 100%, #FFE500 0%, #FFB800 55%, transparent 80%)",
        }}
      />
      <div
        className="absolute -bottom-[5%] -right-[2%] w-[15%] h-[40%] blur-[25px] opacity-35"
        style={{
          background:
            "radial-gradient(ellipse 75% 80% at 75% 100%, #FFE500 0%, #FFB800 55%, transparent 80%)",
        }}
      />

      {/* CENTER BLEND */}
      <div
        className="absolute bottom-[2%] left-1/2 -translate-x-[60%] w-[50%] h-[70%] blur-[30px] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 70% 100%, #FF4500 0%, #CC2800 55%, transparent 95%)",
        }}
      />

      {/* CURVED TOP FADE */}
      <div className="absolute top-0 left-0 right-0 h-[55%] pointer-events-none">
        {/* your LEFT, RIGHT, CENTER waves here */}
      </div>
    </div>
  );
}