// src/components/sections/Hero.tsx
"use client";

import { motion } from "motion/react";
import Section from "@/components/Section";
import { profile, proofPoints } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;
const YEAR = 2026; // hardcoded to avoid hydration mismatch

export default function Hero() {
  return (
    <Section
      id="hero"
      number="00"
      label="Hero"
      className="relative min-h-[100svh] flex flex-col"
    >
      {/* TOP META ROW -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex items-center justify-between"
      >
        <span className="label">SUBJECT · 001</span>
        <span className="label hidden sm:block">
          REF · PORTFOLIO / {YEAR}
        </span>
      </motion.div>

      {/* NAME BLOCK ---------------------------------------------------- */}
      <div className="relative mt-20 md:mt-28">
        {/* Left dimension tick */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
          className="absolute -left-3 md:-left-6 top-3 bottom-3 w-px bg-[var(--ink)]/60 origin-top"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE }}
          className="font-display font-black leading-[0.86] tracking-[-0.05em] text-[clamp(2.75rem,12vw,10rem)] break-words"
        >
          <span className="block">TANIK</span>
          <span className="block">SEHRAWAT</span>
        </motion.h1>

        {/* Annotation under name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
          className="mt-8 flex items-center gap-3 max-w-3xl"
        >
          <span className="text-[11px] font-mono">[</span>
          <span className="text-[10px] md:text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            SOFTWARE ENGINEER · AI BUILDER · DSA MENTOR
          </span>
          <div className="flex-1 hairline" />
          <span className="text-[11px] font-mono">]</span>
        </motion.div>
      </div>

      {/* POSITIONING --------------------------------------------------- */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
        className="mt-12 md:mt-16 max-w-3xl text-lg md:text-2xl leading-relaxed text-[var(--ink-soft)]"
      >
        {profile.positioning}
      </motion.p>

      {/* PROOF POINTS -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
        className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-b border-[var(--ink)]"
      >
        {proofPoints.map((point, i) => (
          <div
            key={point.label}
            className={`py-6 px-4 sm:px-6 ${
              i < proofPoints.length - 1
                ? "border-b sm:border-b-0 sm:border-r border-[var(--ink)]"
                : ""
            }`}
          >
            <div className="font-display text-3xl md:text-4xl font-black tracking-tight leading-none">
              {point.value}
            </div>
            <div className="label mt-3">{point.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTAS ---------------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: EASE }}
        className="mt-12 md:mt-16 flex flex-wrap gap-3"
      >
        <a href="#systems" className="btn btn-primary">
          View My Work
        </a>
        <a href={profile.resume} download className="btn btn-secondary">
          Download Résumé
        </a>
        <a href="#contact" className="btn btn-secondary">
          Contact
        </a>
      </motion.div>

      {/* BOTTOM BAR ---------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="mt-auto pt-20 flex items-center justify-between"
      >
        <span className="label flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-[var(--signal)] rounded-full animate-pulse" />
          SCROLL TO EXPLORE
        </span>
        <span className="label hidden sm:block">§00 / 06</span>
      </motion.div>
    </Section>
  );
}