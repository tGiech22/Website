export type Experience = {
  slug: string;
  company: string;
  role: string;
  dates: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type Project = {
  slug: string;
  title: string;
  org?: string;
  status?: "shipped" | "building" | "startup";
  summary: string;
  tags: string[];
  github?: string;
  demo?: string | null;
  highlights?: string[];
};

export const experience: Experience[] = [
  {
    slug: "philips",
    company: "Royal Philips",
    role: "Software Development Engineering Co-op",
    dates: "Jul 2025 – Dec 2025",
    location: "Cambridge, MA",
    summary:
      "Developed and tested software for patient-monitoring systems in a regulated healthcare environment, working across compliance tooling and clinician-facing product features.",
    highlights: [
      "Built end-to-end test traceability solutions linking unit tests, requirements, test plans, and execution results — reducing manual compliance documentation across engineering teams.",
      "Developed patient-monitoring features including medication display enhancements and alarm-management functionality designed to reduce clinician alarm fatigue.",
      "Worked within established SDLC and quality processes for medical device software, balancing feature delivery with traceability and validation requirements.",
    ],
    tags: ["C#", ".NET", "Healthcare", "Testing", "Compliance"],
  },
  {
    slug: "insulet",
    company: "Insulet Corporation",
    role: "Data Analysis & Database Validation Co-op",
    dates: "Jul 2024 – Dec 2024",
    location: "Acton, MA",
    summary:
      "Supported database migration and validation efforts for a cross-functional sales operations project, combining requirements documentation, data analysis, and pre-release QA.",
    highlights: [
      "Collaborated on the SQUID project to document system, process, and user requirements for migrating 2 external Salesforce databases into an internal system — improving data accessibility by 45%.",
      "Analyzed 500+ complaint records to identify recurring product issues and customer pain points, producing reports that influenced 3 product improvements.",
      "Tested and validated 10 new features and change requests before release, reducing post-deployment issues by 30%.",
    ],
    tags: ["SQL", "Data validation", "Salesforce", "Healthcare", "Power BI"],
  },
];

/** Generate NU and personal projects — Uplift intentionally omitted until public */
export const projects: Project[] = [
  {
    slug: "inside-athletics",
    title: "Inside Athletics",
    org: "Generate NU",
    status: "shipped",
    summary:
      "A web-based forum that helps current and prospective collegiate athletes — and their families — exchange information and navigate the recruitment process. Built as a full-stack monorepo with a Go backend and TypeScript frontend.",
    tags: ["Go", "TypeScript", "React", "REST", "OpenAPI"],
    github: "https://github.com/GenerateNU/inside-athletics",
    highlights: [
      "Designed for structured discussion between athletes, families, and coaches during a high-stakes, information-heavy recruitment cycle.",
      "Monorepo architecture with separate backend and frontend services, CI checks, and API documentation via OpenAPI.",
    ],
  },
  {
    slug: "cinecircle",
    title: "CineCircle",
    org: "Generate NU",
    status: "shipped",
    summary:
      "A community-oriented mobile app for South Asian cinema fans to discover films, write reviews, and connect around regional movie culture — covering Tollywood, Kollywood, Mollywood, and Sandalwood.",
    tags: ["TypeScript", "Expo", "PostgreSQL", "Docker", "Prisma"],
    github: "https://github.com/GenerateNU/cinecircle",
    highlights: [
      "Expo/React Native frontend with a Node backend, PostgreSQL database, and Docker-based local development workflow.",
      "Auto-generated TypeScript types shared from backend to frontend to keep API contracts consistent as features evolved.",
    ],
  },
  {
    slug: "vetruly",
    title: "Vetruly",
    org: "Generate NU → startup",
    status: "startup",
    summary:
      "A marketplace for specialty pet care — post-operative recovery, integrative care, specialty boarding, and in-home drop-ins — delivered by a verified network of licensed veterinary professionals. Originally built at Generate NU; now a live company serving real customers.",
    tags: ["Full-stack", "Healthcare", "Marketplace", "Startup"],
    github: "https://github.com/GenerateNU/vetted",
    demo: "https://www.vetruly.com/",
    highlights: [
      "Built flows for provider discovery, booking, and consult-before-booking — connecting pet owners with credentialed vets for care beyond standard sitting.",
      "Product graduated from student studio project to funded startup; live at vetruly.com with real provider and customer workflows.",
    ],
  },
  {
    slug: "apprenta",
    title: "Apprenta",
    org: "Generate NU → startup",
    status: "startup",
    summary:
      "A full-stack platform that helps hospitals and health systems manage academic investment programs — scholarships, sponsored training, and talent pipelines for hard-to-hire clinical and technical roles.",
    tags: ["Full-stack", "Healthcare", "EdTech", "Startup"],
    github: "https://github.com/GenerateNU/apprenta",
    demo: "https://www.apprenta.co/",
    highlights: [
      "Automates workflows between employers, academic partners, and students — replacing manual spreadsheets and misaligned CRM tooling.",
      "Now deployed as a live product at apprenta.co, supporting employer-led pipeline programs across healthcare specialties.",
    ],
  },
  {
    slug: "prospectus-risk-extraction",
    title: "Prospectus Risk Extraction",
    status: "building",
    summary:
      "A Python toolkit for extracting and analyzing risk-factor sections from biotech prospectus PDFs. Uses layout-aware heuristics and text processing to parse semi-structured financial documents, with CLI tools for extraction, word counts, and batch analysis.",
    tags: ["Python", "NLP", "PDF parsing", "CLI", "pytest"],
    github: "https://github.com/tGiech22/Prospectus-Risk-Extraction",
    highlights: [
      "Structured as an installable package with CLI entry points, regression test fixtures, and documentation for labeling and baseline evaluation.",
      "Active personal project targeting AI/data engineering workflows — document ingestion, structured extraction, and analysis over real financial PDFs.",
    ],
  },
  {
    slug: "ai-job-skills-pipeline",
    title: "AI/ML Job Skills Pipeline",
    status: "building",
    summary:
      "A NoSQL-powered data pipeline that analyzes skill demand across ~1,000 U.S. AI and machine learning job postings. Ingests postings into MongoDB, extracts technical skills with rule-based methods, and produces visualizations of the most in-demand competencies by role, experience level, and region.",
    tags: ["Python", "MongoDB", "pandas", "scikit-learn", "NLP"],
    github: "https://github.com/tGiech22/DS4300-HW6",
    highlights: [
      "Multi-stage pipeline: CSV ingestion into MongoDB, normalization of messy real-world data, and rule-based skill extraction across seven categories (languages, ML frameworks, cloud, databases, and more).",
      "Advanced analysis with TF-IDF term importance and PMI co-occurrence, rendered as publication-quality charts including skill heatmaps, seniority correlations, and skill co-occurrence networks.",
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "Python", "Go", "C#", "SQL", "JavaScript"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    category: "Backend & Data",
    items: [".NET", "Node.js", "PostgreSQL", "Prisma", "REST", "OpenAPI"],
  },
  {
    category: "Data & AI",
    items: ["NLP", "PDF parsing", "Power BI", "Data validation", "Salesforce"],
  },
  {
    category: "Tooling & Practices",
    items: ["Docker", "Git", "CI/CD", "pytest", "Testing", "Agile/SDLC"],
  },
];

export const site = {
  name: "Tony Giech",
  role: "Software · Data · AI Engineer",
  education:
    "Northeastern · B.S. CS + Business (Apr 2026) · PlusOne M.S. AI (Dec 2027)",
  tagline:
    "I build production software and data systems in healthcare — from patient-monitoring tooling at Philips and database validation at Insulet, to full-stack products at Generate NU (two now live startups). Currently building ML tooling for financial document analysis.",
  about: [
    "I'm a Computer Science and Business graduate from Northeastern University pursuing a Master of Science in Artificial Intelligence through Northeastern's PlusOne program (expected Dec 2027). Dean's List, GPA 3.68.",
    "My co-op experience spans software engineering at Royal Philips — regulated medical device software — and data analysis/database validation at Insulet, where I worked on Salesforce migration, complaint analytics, and pre-release feature validation.",
    "Outside co-ops, I've spent two years as a software engineer at Generate NU, Northeastern's student product studio, shipping full-stack web and mobile apps across healthcare, community, and marketplace domains. Two of those products — Vetruly and Apprenta — are now live startups.",
    "I'm looking for SWE, data engineering, and AI engineering roles where I can work on systems that ship to production: reliable backends, thoughtful data pipelines, and ML tooling with clear evaluation — not notebook-only experiments.",
  ],
  contact: {
    email: "giech.t@northeastern.edu",
    github: "https://github.com/tGiech22",
    linkedin: "https://www.linkedin.com/in/tonygiech/",
    location: "Boston, MA",
  },
};

export const generateProjects = projects.filter((p) => p.org?.includes("Generate"));
export const buildingProjects = projects.filter((p) => p.status === "building");
