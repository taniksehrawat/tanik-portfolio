// src/components/sections/Footer.tsx
import { profile } from "@/lib/data";

export default function Footer() {
  const year = 2026; // hardcoded to avoid hydration mismatch

  return (
    <footer className="px-6 md:px-12 py-12 md:py-16">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="label">TANIK SEHRAWAT</span>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Software Engineer · AI Builder · DSA Mentor
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="#hero"
              className="label hover:text-[var(--signal)] transition-colors"
            >
              ↑ Back to top
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--signal)] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--signal)] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="label hover:text-[var(--signal)] transition-colors"
            >
              Email ↗
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--hairline)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <span className="label">
            © {year} Tanik Sehrawat. Designed &amp; built from scratch.
          </span>
          <span className="label">SCHEMATIC · v1.0</span>
        </div>
      </div>
    </footer>
  );
}