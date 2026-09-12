// src/components/ProjectDiagram.tsx
// Hand-built SVG architecture diagrams. One per project.

type Props = { id: string };

export default function ProjectDiagram({ id }: Props) {
  if (id === "agentic-ai") return <AgenticDiagram />;
  if (id === "sunphotonics") return <SunPhotonicsDiagram />;
  if (id === "solariq") return <SolarIQDiagram />;
  return null;
}

const INK = "#0e0f12";
const SIGNAL = "#ff4d14";
const MUTED = "#7a7a78";

const labelStyle: React.CSSProperties = { letterSpacing: "0.14em" };

function Marker({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="10"
        refY="5"
        markerWidth="8"
        markerHeight="8"
        orient="auto"
      >
        <path d="M0,0 L10,5 L0,10 z" fill={INK} />
      </marker>
    </defs>
  );
}

/* ---------------------------------------------------------------------------
   AGENTIC AI — retrieval + agent orchestration
   --------------------------------------------------------------------------- */
function AgenticDiagram() {
  const m = "arrow-agentic";
  return (
    <svg
      viewBox="0 0 960 420"
      className="w-full h-auto font-mono"
      role="img"
      aria-label="Agentic AI architecture diagram"
    >
      <Marker id={m} />

      {/* ROW 1 — main flow */}
      <rect x="20" y="70" width="100" height="60" fill="none" stroke={INK} />
      <text x="70" y="95" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>USER</text>
      <text x="70" y="115" textAnchor="middle" fontSize="12" fill={INK}>Client</text>

      <rect x="150" y="70" width="120" height="60" fill="none" stroke={INK} />
      <text x="210" y="95" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>FRONTEND</text>
      <text x="210" y="115" textAnchor="middle" fontSize="12" fill={INK}>Chat UI</text>

      <rect x="300" y="60" width="180" height="80" fill="none" stroke={SIGNAL} strokeWidth="2" />
      <text x="390" y="86" textAnchor="middle" fontSize="9" fill={SIGNAL} style={labelStyle}>ORCHESTRATOR</text>
      <text x="390" y="108" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK}>LangGraph</text>
      <text x="390" y="126" textAnchor="middle" fontSize="10" fill={MUTED}>multi-step workflow</text>

      <rect x="510" y="70" width="140" height="60" fill="none" stroke={INK} />
      <text x="580" y="95" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>TOOL ROUTER</text>
      <text x="580" y="115" textAnchor="middle" fontSize="12" fill={INK}>Tool Calling</text>

      <rect x="680" y="70" width="140" height="60" fill="none" stroke={INK} />
      <text x="750" y="95" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>RETRIEVAL</text>
      <text x="750" y="115" textAnchor="middle" fontSize="12" fill={INK}>RAG Retriever</text>

      <rect x="850" y="70" width="100" height="60" fill="none" stroke={INK} />
      <text x="900" y="95" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>VECTOR DB</text>
      <text x="900" y="115" textAnchor="middle" fontSize="12" fill={INK}>Qdrant</text>

      {/* ROW 2 — memory + ingestion */}
      <rect x="320" y="220" width="140" height="60" fill="none" stroke={INK} />
      <text x="390" y="245" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>STATE</text>
      <text x="390" y="265" textAnchor="middle" fontSize="12" fill={INK}>Memory</text>

      <rect x="20" y="320" width="140" height="60" fill="none" stroke={INK} />
      <text x="90" y="345" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>INPUT</text>
      <text x="90" y="365" textAnchor="middle" fontSize="12" fill={INK}>Source Docs</text>

      <rect x="200" y="320" width="180" height="60" fill="none" stroke={INK} />
      <text x="290" y="342" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>PIPELINE</text>
      <text x="290" y="362" textAnchor="middle" fontSize="11" fill={INK}>Ingestion + Embedding</text>

      {/* ARROWS */}
      <line x1="120" y1="100" x2="148" y2="100" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="270" y1="100" x2="298" y2="100" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="480" y1="100" x2="508" y2="100" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="650" y1="100" x2="678" y2="100" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="820" y1="100" x2="848" y2="100" stroke={INK} markerEnd={`url(#${m})`} />

      {/* LangGraph → Memory */}
      <line x1="390" y1="140" x2="390" y2="218" stroke={INK} markerEnd={`url(#${m})`} />

      {/* Source Docs → Ingestion */}
      <line x1="160" y1="350" x2="198" y2="350" stroke={INK} markerEnd={`url(#${m})`} />

      {/* Ingestion → Qdrant */}
      <path
        d="M380 350 L900 350 L900 132"
        fill="none"
        stroke={INK}
        markerEnd={`url(#${m})`}
      />

      {/* Return arrow (dashed) */}
      <path
        d="M390 60 L390 28 L210 28 L210 68"
        fill="none"
        stroke={INK}
        strokeDasharray="4 4"
        markerEnd={`url(#${m})`}
      />
      <text x="300" y="20" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>RESPONSE</text>
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   SUNPHOTONICS — multi-role SaaS platform
   --------------------------------------------------------------------------- */
function SunPhotonicsDiagram() {
  const m = "arrow-sun";
  return (
    <svg
      viewBox="0 0 960 520"
      className="w-full h-auto font-mono"
      role="img"
      aria-label="SunPhotonics O&M platform architecture diagram"
    >
      <Marker id={m} />

      {/* ROW 1 — roles */}
      <rect x="140" y="40" width="160" height="60" fill="none" stroke={INK} />
      <text x="220" y="66" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>ROLE</text>
      <text x="220" y="86" textAnchor="middle" fontSize="12" fill={INK}>Engineers</text>

      <rect x="400" y="40" width="160" height="60" fill="none" stroke={INK} />
      <text x="480" y="66" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>ROLE</text>
      <text x="480" y="86" textAnchor="middle" fontSize="12" fill={INK}>Managers</text>

      <rect x="660" y="40" width="160" height="60" fill="none" stroke={INK} />
      <text x="740" y="66" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>ROLE</text>
      <text x="740" y="86" textAnchor="middle" fontSize="12" fill={INK}>Clients</text>

      {/* ROW 2 — frontend */}
      <rect x="200" y="160" width="560" height="70" fill="none" stroke={INK} />
      <text x="480" y="186" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>CLIENT LAYER</text>
      <text x="480" y="208" textAnchor="middle" fontSize="13" fill={INK}>Next.js Dashboard · Android App</text>

      {/* ROW 3 — backend */}
      <rect x="200" y="290" width="560" height="110" fill="none" stroke={SIGNAL} strokeWidth="2" />
      <text x="480" y="316" textAnchor="middle" fontSize="9" fill={SIGNAL} style={labelStyle}>BACKEND</text>
      <text x="480" y="338" textAnchor="middle" fontSize="14" fontWeight="700" fill={INK}>Spring Boot · 30+ REST APIs</text>
      <text x="310" y="372" textAnchor="middle" fontSize="10" fill={INK}>Plant Monitoring</text>
      <text x="430" y="372" textAnchor="middle" fontSize="10" fill={INK}>PR / CUF</text>
      <text x="545" y="372" textAnchor="middle" fontSize="10" fill={INK}>Ticketing</text>
      <text x="650" y="372" textAnchor="middle" fontSize="10" fill={INK}>Reporting</text>
      <line x1="255" y1="355" x2="705" y2="355" stroke={INK} strokeOpacity="0.15" />

      {/* ROW 4 — data */}
      <rect x="320" y="440" width="320" height="60" fill="none" stroke={INK} />
      <text x="480" y="465" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>DATA</text>
      <text x="480" y="485" textAnchor="middle" fontSize="12" fill={INK}>Supabase · PostgreSQL</text>

      {/* ARROWS */}
      <line x1="220" y1="100" x2="300" y2="158" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="480" y1="100" x2="480" y2="158" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="740" y1="100" x2="660" y2="158" stroke={INK} markerEnd={`url(#${m})`} />

      <line x1="480" y1="230" x2="480" y2="288" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="480" y1="400" x2="480" y2="438" stroke={INK} markerEnd={`url(#${m})`} />
    </svg>
  );
}

/* ---------------------------------------------------------------------------
   SOLARIQ — full-stack calculator
   --------------------------------------------------------------------------- */
function SolarIQDiagram() {
  const m = "arrow-solar";
  return (
    <svg
      viewBox="0 0 960 400"
      className="w-full h-auto font-mono"
      role="img"
      aria-label="SolarIQ architecture diagram"
    >
      <Marker id={m} />

      {/* ROW 1 */}
      <rect x="80" y="100" width="200" height="80" fill="none" stroke={INK} />
      <text x="180" y="130" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>CLIENT</text>
      <text x="180" y="152" textAnchor="middle" fontSize="13" fill={INK}>React UI</text>
      <text x="180" y="170" textAnchor="middle" fontSize="10" fill={MUTED}>inputs & results</text>

      <rect x="360" y="100" width="200" height="80" fill="none" stroke={SIGNAL} strokeWidth="2" />
      <text x="460" y="130" textAnchor="middle" fontSize="9" fill={SIGNAL} style={labelStyle}>BACKEND</text>
      <text x="460" y="152" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>Spring Boot API</text>
      <text x="460" y="170" textAnchor="middle" fontSize="10" fill={MUTED}>REST · business logic</text>

      {/* ROW 2 — calc fan-out */}
      <rect x="240" y="260" width="160" height="80" fill="none" stroke={INK} />
      <text x="320" y="288" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>MODULE</text>
      <text x="320" y="310" textAnchor="middle" fontSize="12" fill={INK}>ROI</text>
      <text x="320" y="326" textAnchor="middle" fontSize="9" fill={MUTED}>calculation</text>

      <rect x="400" y="260" width="160" height="80" fill="none" stroke={INK} />
      <text x="480" y="288" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>MODULE</text>
      <text x="480" y="310" textAnchor="middle" fontSize="12" fill={INK}>Subsidy</text>
      <text x="480" y="326" textAnchor="middle" fontSize="9" fill={MUTED}>benefits</text>

      <rect x="560" y="260" width="160" height="80" fill="none" stroke={INK} />
      <text x="640" y="288" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>MODULE</text>
      <text x="640" y="310" textAnchor="middle" fontSize="12" fill={INK}>Payback</text>
      <text x="640" y="326" textAnchor="middle" fontSize="9" fill={MUTED}>period</text>

      {/* ARROWS */}
      <line x1="280" y1="140" x2="358" y2="140" stroke={INK} markerEnd={`url(#${m})`} />

      <line x1="430" y1="180" x2="320" y2="258" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="460" y1="180" x2="480" y2="258" stroke={INK} markerEnd={`url(#${m})`} />
      <line x1="490" y1="180" x2="640" y2="258" stroke={INK} markerEnd={`url(#${m})`} />

      {/* Response return (dashed) */}
      <path
        d="M460 100 L460 60 L180 60 L180 98"
        fill="none"
        stroke={INK}
        strokeDasharray="4 4"
        markerEnd={`url(#${m})`}
      />
      <text x="320" y="52" textAnchor="middle" fontSize="9" fill={MUTED} style={labelStyle}>RESULTS</text>
    </svg>
  );
}