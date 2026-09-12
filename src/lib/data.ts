// src/lib/data.ts
// -----------------------------------------------------------------------------
// All profile content lives here. Edit this file to update the website.
// -----------------------------------------------------------------------------

export const profile = {
  name: "Tanik Sehrawat",
  role: "Software Engineer · AI Builder · DSA Mentor",
  positioning:
    "I build backend systems and AI agents — and I teach people how they work.",
  email: "taniksehrawat0@gmail.com",
  phone: "+91-8950087802",
  location: "India",
  github: "https://github.com/taniksehrawat",
  linkedin: "https://www.linkedin.com/in/tanik-sehrawat",
  resume: "/Tanik-Sehrawat-Resume.pdf", // PDF goes in /public in Phase 13
};

// -----------------------------------------------------------------------------
// Hero proof points — the three facts above the fold
// -----------------------------------------------------------------------------

export const proofPoints = [
  { value: "400+", label: "DSA Problems Solved" },
  { value: "30+", label: "REST APIs Shipped" },
  { value: "TCS Prime", label: "Offer Secured" },
];

// -----------------------------------------------------------------------------
// Education
// -----------------------------------------------------------------------------

export const education = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Engineering — Computer Science and Engineering",
    period: "Expected 2027",
    detail: "CGPA: 7.57",
  },
  {
    institution: "H.D. Sr. Sec. School, Salhawas",
    degree: "Class XII",
    period: "2023",
    detail: "82%",
  },
];

// -----------------------------------------------------------------------------
// Experience
// -----------------------------------------------------------------------------

export const experience = [
  {
    role: "Technical Trainer — Data Structures and Algorithms",
    company: "Chandigarh University",
    period: "Aug 2026 – Nov 2026",
    bullets: [
      "Teach Data Structures and Algorithms to junior students, covering arrays, strings, linked lists, stacks, queues, trees, graphs, sorting, searching, recursion, greedy algorithms, and dynamic programming.",
      "Guide students in developing efficient problem-solving approaches and analyzing algorithmic time and space complexity.",
      "Conduct technical sessions focused on coding, debugging, algorithm optimization, and Object-Oriented Programming concepts.",
    ],
  },
  {
    role: "LLM Trainer",
    company: "Outlier AI",
    period: "Dec 2024 – Mar 2025",
    bullets: [
      "Trained and evaluated Large Language Models by reviewing AI-generated responses for correctness, reasoning, factual accuracy, and adherence to coding requirements.",
      "Wrote high-quality prompts, ranked model outputs, and provided detailed technical feedback to improve model performance.",
      "Worked with coding and reasoning tasks while following strict quality and evaluation guidelines.",
    ],
  },
];

// -----------------------------------------------------------------------------
// Projects
// -----------------------------------------------------------------------------

export const projects = [
  {
    id: "agentic-ai",
    title: "Agentic AI Customer Support Agent",
    year: "2026 – Present",
    summary:
      "An autonomous customer support agent built with LangGraph, Retrieval-Augmented Generation, and Qdrant.",
    problem:
      "Customer support workflows require accurate, context-aware responses grounded in a company's own documents — not generic LLM output.",
    solution:
      "An autonomous agent that retrieves relevant context via semantic search and orchestrates multi-step reasoning with tool calling.",
    contribution: [
      "Built an autonomous customer support agent using LangGraph, Retrieval-Augmented Generation (RAG), and Qdrant vector database.",
      "Implemented retrieval-augmented generation with document ingestion and semantic search for efficient information retrieval.",
      "Designed multi-step agent workflows with tool calling, conversation memory, and modular processing components.",
    ],
    stack: ["LangGraph", "RAG", "Qdrant", "Python"],
    links: {
      repo: "https://github.com/taniksehrawat/ai-support-platform",
      live: "https://ai-support-frontend-2w86.onrender.com",
      liveNote: "Hosted on Render — first load may take ~30–50s.",
    },
  },
  {
    id: "sunphotonics",
    title: "SunPhotonics O&M Platform",
    year: "2025 – 2026",
    summary:
      "A SaaS platform for solar EPC/O&M companies, built on Spring Boot, Next.js, and Supabase.",
    problem:
      "Solar O&M companies need a single system to monitor plants, track performance ratios, and coordinate engineers, managers, and clients.",
    solution:
      "A multi-role SaaS platform exposing 30+ REST APIs for plant monitoring, analytics, ticketing, and reporting.",
    contribution: [
      "Built a SaaS platform for solar EPC/O&M companies using Spring Boot, Next.js, and Supabase.",
      "Developed 30+ REST APIs for plant monitoring, PR/CUF analytics, ticketing, reporting, and backend business logic.",
      "Integrated dashboards for engineers, managers, and clients to support operational monitoring and reporting.",
    ],
    stack: ["Spring Boot", "Next.js", "Supabase", "PostgreSQL"],
    links: {
      repo: null, // private / not provided
      live: "https://play.google.com/store/apps/details?id=com.sunphotonics.om",
      liveLabel: "View on Google Play",
    },
  },
  {
    id: "solariq",
    title: "SolarIQ — Solar ROI Calculator",
    year: "2024",
    summary:
      "A full-stack application that estimates solar ROI, subsidy benefits, and payback period.",
    problem:
      "Homeowners and businesses lack a clear, data-driven way to estimate whether solar is financially worth it for them.",
    solution:
      "A full-stack calculator that computes ROI, subsidy impact, and payback period using real business logic on the backend.",
    contribution: [
      "Developed a full-stack application to estimate solar ROI, subsidy benefits, and payback period.",
      "Built REST APIs and business logic using Spring Boot for calculations and data processing workflows.",
    ],
    stack: ["Spring Boot", "React", "REST APIs"],
    links: {
      repo: "https://github.com/taniksehrawat/solariq-web",
      live: null,
    },
  },
];

// -----------------------------------------------------------------------------
// Skills — grouped by category
// -----------------------------------------------------------------------------

export const skillGroups = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "REST APIs", "JWT", "Microservices"],
  },
  {
    category: "AI / ML",
    items: ["Agentic AI", "Retrieval-Augmented Generation", "LangGraph", "Qdrant"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "Supabase"],
  },
  {
    category: "CS Fundamentals",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "Complexity Analysis",
      "System Design",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Docker"],
  },
];

// -----------------------------------------------------------------------------
// Achievements
// -----------------------------------------------------------------------------

export const achievements = [
  {
    title: "400+ DSA Problems Solved",
    detail: "Consistent problem-solving practice across data structures and algorithms.",
  },
  {
    title: "TCS Prime Offer",
    detail: "Secured through campus recruitment.",
  },
  {
    title: "NPTEL Silver Certificate",
    detail: "Cloud Computing.",
  },
  {
    title: "Zinnovatio 3.0 Hackathon Finalist",
    detail: "Selected as a finalist in the hackathon.",
  },
];
// -----------------------------------------------------------------------------
// Identity — narrative copy
// -----------------------------------------------------------------------------

export const identity = {
  headline: "I build systems. I teach them. I ship them.",
  pillars: [
    {
      number: "01",
      title: "Systems",
      body: "Backend engineering with Spring Boot, REST APIs, JWT, and microservices. I've shipped 30+ APIs powering a live solar O&M SaaS — plant monitoring, PR/CUF analytics, ticketing, and reporting.",
    },
    {
      number: "02",
      title: "Intelligence",
      body: "Agentic AI with LangGraph, Retrieval-Augmented Generation, and Qdrant. I design multi-step workflows with tool calling, conversation memory, and modular processing components.",
    },
    {
      number: "03",
      title: "Explanation",
      body: "As a Technical Trainer at Chandigarh University, I teach Data Structures and Algorithms — from arrays to dynamic programming — and guide students through complexity analysis and OOP. As an LLM Trainer at Outlier AI, I evaluated model reasoning and wrote prompts for correctness and factual accuracy.",
    },
  ],
  narrative: [
    "I work at the intersection of systems engineering and applied AI. My backend work lives in production — a SaaS platform for solar EPC and O&M companies where I designed 30+ REST APIs for monitoring, analytics, and reporting. My AI work is on the agentic side: retrieval-augmented generation, vector search, and multi-step reasoning workflows that actually resolve user problems.",
    "What connects it all is teaching. I've spent months on both sides of the same table — solving 400+ DSA problems myself and then teaching the same material to junior students as a Technical Trainer. I've also trained LLMs, which means I've had to explain *why* an answer is correct, not just whether it is. That habit — of making systems legible — is what I bring to every team I work with.",
  ],
};
// -----------------------------------------------------------------------------
// Tech details — shown in the Stack section readout panel.
// Only describes what is backed by actual work/teaching from the profile.
// -----------------------------------------------------------------------------

export type TechDetail = {
  usedFor: string;
  related: string[]; // project ids matching `projects[].id`
  exposure: string;
};

export const techDetails: Record<string, TechDetail> = {
  // LANGUAGES --------------------------------------------------------------
  Java: {
    usedFor:
      "Primary backend language — used for Spring Boot services, REST APIs, and daily DSA practice.",
    related: ["sunphotonics", "solariq"],
    exposure: "Used in shipped projects and 400+ DSA problems.",
  },
  Python: {
    usedFor:
      "AI/agent development — LangGraph workflows, RAG pipelines, and document ingestion.",
    related: ["agentic-ai"],
    exposure: "Applied in a deployed agentic AI project.",
  },
  SQL: {
    usedFor:
      "Querying and shaping relational data — joins, aggregations, and reporting queries.",
    related: ["sunphotonics", "solariq"],
    exposure: "Used across backend projects with MySQL and PostgreSQL.",
  },

  // BACKEND ----------------------------------------------------------------
  "Spring Boot": {
    usedFor:
      "Building REST APIs and business logic for full-stack applications.",
    related: ["sunphotonics", "solariq"],
    exposure: "Shipped 30+ REST APIs on a live SaaS platform.",
  },
  "REST APIs": {
    usedFor:
      "Service layer design — resource modelling, request handling, and response contracts.",
    related: ["sunphotonics", "solariq"],
    exposure: "Designed and implemented across two backend projects.",
  },
  JWT: {
    usedFor:
      "Stateless authentication and authorization for backend services.",
    related: [],
    exposure: "Used in backend coursework and personal projects.",
  },
  Microservices: {
    usedFor:
      "Designing modular services with clear boundaries between domains.",
    related: [],
    exposure: "Studied and applied in backend system design.",
  },

  // AI / ML ----------------------------------------------------------------
  "Agentic AI": {
    usedFor:
      "Building autonomous agents that plan, call tools, and reason over multiple steps.",
    related: ["agentic-ai"],
    exposure: "Applied in a deployed customer support agent.",
  },
  "Retrieval-Augmented Generation": {
    usedFor:
      "Grounding LLM responses in retrieved source documents via semantic search.",
    related: ["agentic-ai"],
    exposure: "Implemented end-to-end with document ingestion and vector search.",
  },
  LangGraph: {
    usedFor:
      "Orchestrating multi-step agent workflows with tool calling and memory.",
    related: ["agentic-ai"],
    exposure: "Core framework for the agentic AI project.",
  },
  Qdrant: {
    usedFor:
      "Vector database for semantic search and document retrieval.",
    related: ["agentic-ai"],
    exposure: "Used for storage and retrieval in the RAG pipeline.",
  },

  // DATABASES --------------------------------------------------------------
  MySQL: {
    usedFor:
      "Relational data storage — schema design, indexing, and query optimization.",
    related: [],
    exposure: "Used in backend projects and coursework.",
  },
  PostgreSQL: {
    usedFor:
      "Relational data storage for production-style applications.",
    related: ["sunphotonics"],
    exposure: "Used via Supabase in a live SaaS platform.",
  },
  Supabase: {
    usedFor:
      "Managed Postgres backend with auth and real-time capabilities.",
    related: ["sunphotonics"],
    exposure: "Used as the data layer of a live O&M platform.",
  },

  // CS FUNDAMENTALS --------------------------------------------------------
  "Data Structures & Algorithms": {
    usedFor:
      "Problem solving and technical interviews — arrays, trees, graphs, DP, and greedy approaches.",
    related: [],
    exposure: "400+ problems solved; taught as a Technical Trainer.",
  },
  "Object-Oriented Programming": {
    usedFor:
      "Designing maintainable code with clear abstractions and boundaries.",
    related: [],
    exposure: "Applied in Java/Spring Boot work; taught to students.",
  },
  "Operating Systems": {
    usedFor:
      "Understanding processes, memory, and concurrency as a foundation for backend work.",
    related: [],
    exposure: "Core coursework and foundational knowledge.",
  },
  DBMS: {
    usedFor:
      "Modelling relational schemas, normalization, and transaction reasoning.",
    related: [],
    exposure: "Core coursework, applied in backend projects.",
  },
  "Computer Networks": {
    usedFor:
      "Understanding HTTP, TCP/IP, and how services communicate.",
    related: [],
    exposure: "Core coursework and foundational knowledge.",
  },
  "Complexity Analysis": {
    usedFor:
      "Reasoning about time and space complexity of algorithms.",
    related: [],
    exposure: "Applied to DSA practice and taught to students.",
  },
  "System Design": {
    usedFor:
      "Structuring backend systems — data flow, scaling, and boundaries.",
    related: [],
    exposure: "Studied and applied across backend projects.",
  },

  // TOOLS ------------------------------------------------------------------
  Git: {
    usedFor:
      "Version control — branching, committing, and managing changes across projects.",
    related: ["agentic-ai", "sunphotonics", "solariq"],
    exposure: "Used across every project on this site.",
  },
  GitHub: {
    usedFor:
      "Hosting repositories, tracking issues, and sharing code.",
    related: ["agentic-ai", "solariq"],
    exposure: "All public projects are hosted here.",
  },
  Postman: {
    usedFor:
      "Testing and debugging REST APIs before wiring them into frontends.",
    related: ["sunphotonics", "solariq"],
    exposure: "Used throughout backend development.",
  },
  Docker: {
    usedFor:
      "Packaging backend services into consistent, portable containers.",
    related: [],
    exposure: "Used in backend projects and environment setup.",
  },
};