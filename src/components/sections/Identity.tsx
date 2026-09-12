// src/components/sections/Identity.tsx
"use client";

import { motion } from "motion/react";
import Section from "@/components/Section";
import { identity, education, profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Identity() {
  return (
    <Section id="identity" number="01" label="Identity">
      {/* HEADLINE ------------------------------------------------------ */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        {identity.headline}
      </motion.h2>

      {/* NARRATIVE ----------------------------------------------------- */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="label block"
          >
            NARRATIVE
          </motion.span>
        </div>

        <div className="lg:col-span-9 space-y-6">
          {identity.narrative.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: EASE }}
              className="text-base md:text-lg leading-relaxed text-[var(--ink-soft)] max-w-3xl"
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      {/* PILLARS ------------------------------------------------------- */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-center gap-4 mb-8">
          <span className="label">Three Disciplines</span>
          <span className="flex-1 hairline" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--ink)]">
          {identity.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: EASE }}
              className="p-6 md:p-8 border-b border-r border-[var(--ink)] flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="label">PILLAR / {pillar.number}</span>
                <span className="w-2 h-2 bg-[var(--signal)]" />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight mt-8">
                {pillar.title}
              </h3>

              <p className="mt-5 text-sm md:text-base leading-relaxed text-[var(--ink-soft)]">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* EDUCATION ----------------------------------------------------- */}
      <div className="mt-20 md:mt-28">
        <div className="flex items-center gap-4 mb-8">
          <span className="label">Education</span>
          <span className="flex-1 hairline" />
        </div>

        <div className="border-t border-[var(--ink)]">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-6 border-b border-[var(--hairline-strong)]"
            >
              <div className="md:col-span-3">
                <span className="label">{edu.period}</span>
              </div>

              <div className="md:col-span-6">
                <h4 className="font-display text-lg md:text-xl font-bold tracking-tight">
                  {edu.institution}
                </h4>
                <p className="text-sm text-[var(--ink-soft)] mt-1">
                  {edu.degree}
                </p>
              </div>

              <div className="md:col-span-3 md:text-right">
                <span className="font-mono text-xs md:text-sm tracking-wide text-[var(--ink)]">
                  {edu.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FOOTNOTE ------------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-12 flex flex-wrap items-center gap-4"
      >
        <span className="label">Based in {profile.location}</span>
        <span className="w-1 h-1 bg-[var(--ink-muted)] rounded-full" />
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="label hover:text-[var(--signal)] transition-colors"
        >
          GitHub ↗
        </a>
        <span className="w-1 h-1 bg-[var(--ink-muted)] rounded-full" />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="label hover:text-[var(--signal)] transition-colors"
        >
          LinkedIn ↗
        </a>
      </motion.div>
    </Section>
  );
}