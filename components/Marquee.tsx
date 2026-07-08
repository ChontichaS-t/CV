import React from "react";

const items = [
  "TypeScript",
  "Go",
  "Next.js",
  "React",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Full stack developer"
];

// Repeat the array to ensure the content is wider than any screen width
const repeatedItems = [...items, ...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-orange-500 py-3.5 border-t border-b border-orange-600/20 select-none relative z-20">
      <div className="animate-marquee whitespace-nowrap flex">
        {/* First copy */}
        <div className="flex shrink-0 gap-6 md:gap-10 items-center pr-6 md:pr-10">
          {repeatedItems.map((item, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span className="font-semibold text-xs md:text-sm uppercase tracking-widest text-white font-sans">
                {item}
              </span>
              <span className="text-white/40 text-xs md:text-sm font-bold">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Second copy for infinite scrolling */}
        <div className="flex shrink-0 gap-6 md:gap-10 items-center pr-6 md:pr-10">
          {repeatedItems.map((item, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span className="font-semibold text-xs md:text-sm uppercase tracking-widest text-white font-sans">
                {item}
              </span>
              <span className="text-white/40 text-xs md:text-sm font-bold">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
