"use client";

export default function Badge({
  text = "",
  color = "#FF8205",
  variant = "default", // ✅ new prop
  dot = true,
  className = "",
}) {
  // ✅ handle variant color
  const finalColor = variant === "white" ? "#FFFFFF" : color;

  return (
    <div
      className={`inline-flex items-center gap-2 border rounded-full w-fit ${className}`}
      style={{
        borderColor: finalColor,
        color: finalColor,
        padding: "0.1rem 0.4rem",
      }}
    >
      {dot && (
        <span
          className="rounded-full"
          style={{
            width: "0.75rem",
            height: "0.75rem",
            backgroundColor: finalColor,
          }}
        />
      )}
      <span className="text-[1rem]">{text}</span>
    </div>
  );
}