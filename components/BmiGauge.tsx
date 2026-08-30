"use client";

import { useEffect, useRef } from "react";

export default function BmiGauge() {
  const needleRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const el = needleRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove("needle-animate");
            // force reflow so the animation restarts
            void el.getBoundingClientRect();
            el.classList.add("needle-animate");
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <svg width="180" height="108" viewBox="0 0 200 110">
        <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#3B7FC4" strokeWidth="14" strokeLinecap="round" strokeDasharray="70 400" />
        <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#1E9E63" strokeWidth="14" strokeLinecap="round" strokeDasharray="90 400" strokeDashoffset="-70" />
        <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#D69A1B" strokeWidth="14" strokeLinecap="round" strokeDasharray="70 400" strokeDashoffset="-160" />
        <path d="M10,100 A90,90 0 0,1 190,100" fill="none" stroke="#D6483F" strokeWidth="14" strokeLinecap="round" strokeDasharray="49 400" strokeDashoffset="-230" />
        <g
          ref={needleRef}
          className="needle-animate"
          style={{ transformOrigin: "100px 100px" }}
        >
          <line x1="100" y1="100" x2="100" y2="24" stroke="#16211C" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="100" cy="100" r="6.5" fill="#16211C" />
        </g>
      </svg>

      <div className="mt-1 text-center">
        <div className="font-display tnum text-3xl font-bold">22.3</div>
        <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#E8F6EE] px-2.5 py-1 text-xs font-semibold text-good">
          <span className="h-1.5 w-1.5 rounded-full bg-good" />
          Normal weight
        </div>
      </div>

      <div className="mt-3 flex w-full justify-between px-1 text-[10px] font-semibold text-ink-faint">
        <span className="flex flex-col items-center gap-1">
          <i className="h-2 w-2 rounded-full bg-under" />
          Under
        </span>
        <span className="flex flex-col items-center gap-1">
          <i className="h-2 w-2 rounded-full bg-good" />
          Normal
        </span>
        <span className="flex flex-col items-center gap-1">
          <i className="h-2 w-2 rounded-full bg-warn" />
          Over
        </span>
        <span className="flex flex-col items-center gap-1">
          <i className="h-2 w-2 rounded-full bg-bad" />
          Obese
        </span>
      </div>
    </div>
  );
}
