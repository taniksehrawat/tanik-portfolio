// src/components/sections/Systems.tsx
"use client";

import { motion } from "motion/react";
import Section from "@/components/Section";
import ProjectDiagram from "@/components/ProjectDiagram";
import { projects } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

type Project = (typeof projects)[number];

export default function Systems() {
  return (
    <Section id="systems" number="03" label="Systems">
      {/* HEADLINE -------------------------------------------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        Systems I&apos;ve designed, built, and shipped.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
      >
        Three projects, documented the way I&apos;d present them to an
        engineering team: the problem, the architecture, and my contribution.
      </motion.p>

      {/* PROJECTS -------------------------------------------------- */}
      <div className="mt-24 md:mt-32 space-y-32 md:space-y-48">
        {projects.map((project, i) => (
          <ProjectSpec key={project.id} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}

/* =============================================================================
   PROJECT SPEC SHEET
   ============================================================================= */

function ProjectSpec({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const hasRepo = Boolean(project.links.repo);
  const hasLive = Boolean(project.links.live);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {/* HEADER ROW --------------------------------------------------- */}
      <div className="flex items-center gap-4 mb-8">
        <span className="label">SYS / {num}</span>
        <span className="flex-1 hairline" />
        <span className="label">{project.year}</span>
      </div>

      {/* TITLE + SUMMARY ---------------------------------------------- */}
      <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-black leading-[0.98] tracking-tight max-w-4xl">
        {project.title}
      </h3>

      <p className="mt-6 max-w-3xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed">
        {project.summary}
      </p>

      {/* PROBLEM / SOLUTION ------------------------------------------- */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 border-t border-[var(--ink)]">
        <div className="md:border-r border-[var(--ink)] py-8 md:pr-8 border-b md:border-b-0 border-[var(--ink)]">
          <span className="label">Problem</span>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--ink-soft)]">
            {project.problem}
          </p>
        </div>
        <div className="py-8 md:pl-8">
          <span className="label">Solution</span>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-[var(--ink-soft)]">
            {project.solution}
          </p>
        </div>
      </div>

      {/* ARCHITECTURE ------------------------------------------------- */}
      <div className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="label">Architecture</span>
          <span className="label">FIG. {num}</span>
          <span className="flex-1 hairline" />
        </div>

        {/* Diagram wrapper — scrolls horizontally on mobile, full width on md+ */}
        <div className="border border-[var(--ink)] bg-[var(--paper)] overflow-x-auto">
          <div className="min-w-[640px] md:min-w-0 p-4 md:p-10">
            <ProjectDiagram id={project.id} />
          </div>
        </div>

        {/* Swipe hint — mobile only */}
        <p className="md:hidden mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          ← Swipe diagram to view full →
        </p>
      </div>

      {/* CONTRIBUTION / STACK ----------------------------------------- */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 mb-6">
            <span className="label">My Contribution</span>
            <span className="flex-1 hairline" />
          </div>

          <ul className="space-y-4">
            {project.contribution.map((bullet, bi) => (
              <li
                key={bi}
                className="flex gap-4 text-sm md:text-base leading-relaxed text-[var(--ink-soft)]"
              >
                <span className="shrink-0 w-6 h-px bg-[var(--signal)] mt-3" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-5">
          <div className="flex items-center gap-4 mb-6">
            <span className="label">Stack</span>
            <span className="flex-1 hairline" />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 border border-[var(--ink)] text-[var(--ink)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* LINKS -------------------------------------------------------- */}
      {(hasRepo || hasLive) && (
        <div className="mt-12 flex flex-wrap gap-3">
          {hasRepo && (
            <a
              href={project.links.repo!}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Source Code ↗
            </a>
          )}
          {hasLive && (
            <a
              href={project.links.live!}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              {"liveLabel" in project.links && project.links.liveLabel
                ? project.links.liveLabel
                : "Live Demo ↗"}
            </a>
          )}
        </div>
      )}

      {/* LIVE NOTE ---------------------------------------------------- */}
      {"liveNote" in project.links && project.links.liveNote && (
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          NOTE — {project.links.liveNote}
        </p>
      )}

      {/* RULE --------------------------------------------------------- */}
      <div className="mt-16 md:mt-20 hairline" />
    </motion.article>
  );
}