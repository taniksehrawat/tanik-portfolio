// src/components/sections/Timeline.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/Section";
import { experience } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <Section id="timeline" number="02" label="Timeline">
      {/* HEADLINE ---------------------------------------------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        A timeline of systems built and lessons taught.
      </motion.h2>

      {/* RULER ------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="mt-16 md:mt-20"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="label">DEC 2024</span>
          <span className="label hidden md:block">CHRONOLOGY</span>
          <span className="label">NOV 2026</span>
        </div>

        {/* Ruler bar with ticks */}
        <div className="relative h-4 border-t border-[var(--ink)] flex">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="flex-1 relative">
              <div
                className="absolute top-0 left-0 w-px bg-[var(--ink)]"
                style={{ height: i % 6 === 0 ? "100%" : "45%" }}
              />
            </div>
          ))}
          <div className="absolute top-0 right-0 w-px h-full bg-[var(--ink)]" />
        </div>
      </motion.div>

      {/* ENTRIES ----------------------------------------------------- */}
      <div className="mt-16 md:mt-20 border-t border-[var(--ink)]">
        {experience.map((exp, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
              className="border-b border-[var(--ink)]"
            >
              {/* HEADER ROW (clickable) */}
              <button
                onClick={() => toggle(i)}
                className="w-full text-left py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-[var(--paper-soft)] transition-colors"
                aria-expanded={isOpen}
                aria-controls={`exp-detail-${i}`}
              >
                <div className="md:col-span-3 flex md:flex-col items-center md:items-start gap-3 md:gap-4">
                  <span className="label">EXP / 0{i + 1}</span>
                  <span className="font-mono text-xs md:text-sm text-[var(--ink)] tracking-wide">
                    {exp.period}
                  </span>
                </div>

                <div className="md:col-span-8">
                  <h3 className="font-display text-2xl md:text-4xl font-black tracking-tight leading-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-[var(--ink-soft)]">
                    {exp.company}
                  </p>
                </div>

                <div className="md:col-span-1 flex md:justify-end items-center">
                  <span
                    className="w-8 h-8 border border-[var(--ink)] flex items-center justify-center font-mono text-sm select-none"
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </div>
              </button>

              {/* DETAILS (expand/collapse) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`exp-detail-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 md:pb-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
                      <div className="hidden md:block md:col-span-3">
                        <span className="label">DETAIL</span>
                      </div>

                      <ul className="md:col-span-9 space-y-4">
                        {exp.bullets.map((bullet, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.05 + bi * 0.08,
                              ease: EASE,
                            }}
                            className="flex gap-4 text-sm md:text-base leading-relaxed text-[var(--ink-soft)]"
                          >
                            <span className="shrink-0 w-6 h-px bg-[var(--signal)] mt-3" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}