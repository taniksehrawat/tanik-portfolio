// src/components/Section.tsx
import { ReactNode } from "react";

type SectionProps = {
  id: string;
  number: string; // e.g. "00"
  label: string;  // e.g. "HERO"
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  number,
  label,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <div className="section-inner">
        <header className="section-head">
          <span className="label">§{number}</span>
          <span className="label">{label}</span>
          <span className="rule" />
        </header>
        {children}
      </div>
    </section>
  );
}