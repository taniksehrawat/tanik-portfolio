// src/components/sections/Stack.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Section from "@/components/Section";
import { skillGroups, techDetails, projects } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const DEFAULT_TECH = "Java";

export default function Stack() {
  const [selected, setSelected] = useState<string>(DEFAULT_TECH);
  const detail = techDetails[selected];

  return (
    <Section id="stack" number="04" label="Stack">
      {/* HEADLINE -------------------------------------------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        The technical ecosystem I work in.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
      >
        Six domains, one working set. Select any technology to see how I use it
        and where it appears.
      </motion.p>

      {/* GRID OF CATEGORIES ---------------------------------------- */}
      <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--ink)]">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: gi * 0.06, ease: EASE }}
            className="p-6 md:p-8 border-b border-r border-[var(--ink)]"
          >
            <div className="flex items-center justify-between">
              <span className="label">{group.category}</span>
              <span className="label">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((tech) => {
                const isActive = selected === tech;
                const hasDetail = Boolean(techDetails[tech]);

                return (
                  <button
                    key={tech}
                    onClick={() => hasDetail && setSelected(tech)}
                    disabled={!hasDetail}
                    className={`font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 border transition-colors text-left ${
                      isActive
                        ? "bg-[var(--ink)] text-[var(--paper)] border-[var(--ink)]"
                        : hasDetail
                          ? "border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--paper-soft)]"
                          : "border-[var(--hairline-strong)] text-[var(--ink-muted)] cursor-default"
                    }`}
                    aria-pressed={isActive}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* TECHNICAL READOUT PANEL ----------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mt-16 md:mt-20 border border-[var(--ink)]"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-[var(--ink)] px-6 md:px-8 py-4">
          <span className="label">Technical Readout</span>
          <span className="label">
            REF · {selected.toUpperCase().slice(0, 24)}
          </span>
        </div>

        {/* Panel body */}
        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {detail ? (
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                {/* Name */}
                <div className="flex flex-wrap items-baseline gap-4">
                  <h3 className="font-display text-3xl md:text-5xl font-black tracking-tight">
                    {selected}
                  </h3>
                  <span className="label">
                    {skillGroups.find((g) => g.items.includes(selected))
                      ?.category ?? ""}
                  </span>
                </div>

                {/* Used For */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3">
                    <span className="label">Used For</span>
                  </div>
                  <p className="md:col-span-9 text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-3xl">
                    {detail.usedFor}
                  </p>
                </div>

                {/* Appears In */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3">
                    <span className="label">Appears In</span>
                  </div>
                  <div className="md:col-span-9 flex flex-wrap gap-2">
                    {detail.related.length === 0 ? (
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                        — No linked project —
                      </span>
                    ) : (
                      detail.related.map((pid) => {
                        const project = projects.find((p) => p.id === pid);
                        if (!project) return null;
                        return (
                          <a
                            key={pid}
                            href="#systems"
                            className="font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
                          >
                            {project.title}
                          </a>
                        );
                      })
                    )}
                  </div>
                </div>

                {/* Exposure */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3">
                    <span className="label">Exposure</span>
                  </div>
                  <p className="md:col-span-9 text-sm md:text-base leading-relaxed text-[var(--ink)]">
                    {detail.exposure}
                  </p>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>
    </Section>
  );
}