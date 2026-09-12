// src/components/sections/Contact.tsx
"use client";

import { motion } from "motion/react";
import Section from "@/components/Section";
import { profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

// tel: wants digits only (no dashes, no spaces)
const TEL = profile.phone.replace(/[^\d+]/g, "");

export default function Contact() {
  return (
    <Section id="contact" number="06" label="Contact">
      {/* HEADLINE -------------------------------------------------- */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tight max-w-4xl"
      >
        Let&apos;s build something together.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-6 max-w-2xl text-base md:text-lg text-[var(--ink-soft)] leading-relaxed"
      >
        Open to engineering roles, internships, and AI/backend collaborations.
        The fastest way to reach me is email.
      </motion.p>

      {/* PRIMARY — EMAIL ----------------------------------------- */}
      <motion.a
        href={`mailto:${profile.email}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        className="group block mt-16 md:mt-20 border-t border-b border-[var(--ink)] py-8 md:py-12 hover:bg-[var(--paper-soft)] transition-colors"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="label">Email</span>
          <span className="label opacity-0 group-hover:opacity-100 transition-opacity">
            Click to compose ↗
          </span>
        </div>
        <div className="mt-4 font-display font-black tracking-tight leading-[1.05] text-[clamp(1.25rem,5.5vw,4.5rem)] break-all">
          {profile.email}
        </div>
      </motion.a>

      {/* SECONDARY — GRID OF CONTACTS ---------------------------- */}
      <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 border-t border-l border-[var(--ink)]">
        <ContactCell
          label="Phone"
          value={profile.phone}
          href={`tel:${TEL}`}
          external={false}
        />
        <ContactCell
          label="LinkedIn"
          value="/in/tanik-sehrawat"
          href={profile.linkedin}
          external
        />
        <ContactCell
          label="GitHub"
          value="@taniksehrawat"
          href={profile.github}
          external
        />
      </div>

      {/* RESUME CTA ---------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
        className="mt-12 md:mt-16 border border-[var(--ink)] p-6 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div>
          <span className="label">Résumé</span>
          <p className="mt-3 font-display text-xl md:text-2xl font-bold tracking-tight max-w-xl">
            One page. Every role, project, and outcome.
          </p>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            PDF · Updated {new Date().getFullYear()}
          </p>
        </div>

        <a
          href={profile.resume}
          download
          className="btn btn-primary shrink-0"
        >
          Download Résumé ↓
        </a>
      </motion.div>
    </Section>
  );
}

/* =============================================================================
   Contact cell — one cell of the secondary contacts grid
   ============================================================================= */

function ContactCell({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group p-6 md:p-8 border-b border-r border-[var(--ink)] hover:bg-[var(--paper-soft)] transition-colors flex flex-col gap-6 min-h-[160px]"
    >
      <div className="flex items-center justify-between">
        <span className="label">{label}</span>
        <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--ink-muted)] group-hover:text-[var(--signal)] transition-colors">
          ↗
        </span>
      </div>

      <div className="mt-auto font-mono text-xs md:text-sm tracking-[0.06em] break-all">
        {value}
      </div>
    </motion.a>
  );
}