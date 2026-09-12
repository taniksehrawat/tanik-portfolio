// src/components/CrosshairCursor.tsx
"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport crosshair cursor.
 * - Hidden on touch devices (uses matchMedia pointer: fine).
 * - Uses refs + requestAnimationFrame to avoid re-renders on mousemove.
 * - Purely decorative — aria-hidden, pointer-events: none.
 */
export default function CrosshairCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const xLineRef = useRef<HTMLDivElement>(null);
  const yLineRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only enable on devices with a precise pointer (mouse / trackpad)
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    if (rootRef.current) rootRef.current.style.display = "block";

    let raf = 0;
    const pending = { x: 0, y: 0 };

    const apply = () => {
      const { x, y } = pending;
      if (xLineRef.current)
        xLineRef.current.style.transform = `translateX(${x}px)`;
      if (yLineRef.current)
        yLineRef.current.style.transform = `translateY(${y}px)`;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${x + 16}px, ${y + 18}px)`;
        labelRef.current.textContent = `X:${String(Math.round(x)).padStart(
          4,
          "0"
        )}  Y:${String(Math.round(y)).padStart(4, "0")}`;
      }
      raf = 0;
    };

    const onMove = (e: MouseEvent) => {
      pending.x = e.clientX;
      pending.y = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="pointer-events-none fixed inset-0 z-40 hidden"
      aria-hidden="true"
    >
      {/* Vertical rule through cursor X */}
      <div
        ref={xLineRef}
        className="absolute top-0 bottom-0 w-px bg-[var(--ink)]/10"
      />
      {/* Horizontal rule through cursor Y */}
      <div
        ref={yLineRef}
        className="absolute left-0 right-0 h-px bg-[var(--ink)]/10"
      />
      {/* Signal dot at intersection */}
      <div
        ref={dotRef}
        className="absolute w-1.5 h-1.5 bg-[var(--signal)]"
      />
      {/* Coordinate readout */}
      <div
        ref={labelRef}
        className="absolute font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-muted)] whitespace-nowrap"
      />
    </div>
  );
}