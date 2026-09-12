// src/components/sections/Record.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import Section from "@/components/Section";
import { achievements } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const TARGET = 400;
const TOTAL_CELLS = 400;
const GRID_COLS = 20; // 20 x 20 = 400

export default function Record() {
  return (
    <Section id="record" number="05" label="Record">
      {/* HEADLINE --------------------------------------------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        400+ problems. One habit.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
      >
        Data structures and algorithms, practised daily. Arrays, strings, linked
        lists, stacks, queues, trees, graphs, sorting, searching, recursion,
        greedy, and dynamic programming.
      </motion.p>

      {/* COUNTER + TALLY -------------------------------------------- */}
      <div className="mt-16 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Counter */}
        <CounterPanel />

        {/* Tally grid */}
        <TallyPanel />
      </div>

      {/* ACHIEVEMENTS ----------------------------------------------- */}
      <div className="mt-24 md:mt-32">
        <div className="flex items-center gap-4 mb-8">
          <span className="label">Achievements</span>
          <span className="flex-1 hairline" />
          <span className="label">
            {String(achievements.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[var(--ink)]">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="p-6 md:p-8 border-b border-r border-[var(--ink)] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="label">REC / 0{i + 1}</span>
                <span className="w-2 h-2 bg-[var(--signal)]" />
              </div>

              <h3 className="font-display text-xl md:text-2xl font-black tracking-tight mt-8 leading-tight">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* =============================================================================
   COUNTER PANEL — 0 → 400
   ============================================================================= */

function CounterPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1600;
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out-cubic
      setCount(Math.floor(eased * TARGET));
      if (t < 1) raf = requestAnimationFrame(tick);
      else setCount(TARGET);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView]);

  return (
    <div ref={ref} className="lg:col-span-4">
      <span className="label">Total Solved</span>

      <div className="mt-6 flex items-baseline gap-2">
        <span
          className="font-display text-[clamp(4rem,16vw,9rem)] font-black leading-none tracking-[-0.05em] tabular-nums"
          aria-label="400 plus"
        >
          {count}
        </span>
        <span className="font-display text-4xl md:text-6xl font-black text-[var(--signal)] leading-none">
          +
        </span>
      </div>

      <div className="mt-8 hairline" />

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
        Fig. 05 — Problems solved across DSA practice
      </p>
    </div>
  );
}

/* =============================================================================
   TALLY PANEL — 20 x 20 grid of ink cells, populated on scroll
   ============================================================================= */

function TallyPanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="lg:col-span-8">
      <div className="flex items-center gap-4 mb-6">
        <span className="label">Evidence</span>
        <span className="flex-1 hairline" />
        <span className="label">400 marks</span>
      </div>

      <div
        className={`tally-grid ${inView ? "is-visible" : ""} border border-[var(--ink)] p-4 md:p-6`}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
          gap: "4px",
        }}
        role="img"
        aria-label="A 20 by 20 grid of 400 marks, one per solved problem"
      >
        {Array.from({ length: TOTAL_CELLS }).map((_, i) => (
          <div
            key={i}
            className="tally-cell aspect-square bg-[var(--ink)]"
            style={{ animationDelay: `${i * 2}ms` }}
          />
        ))}
      </div>

      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
        Every mark represents a solved problem. Not a category breakdown — just
        the count.
      </p>
    </div>
  );
}