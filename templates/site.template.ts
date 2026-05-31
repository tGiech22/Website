export type Experience = {
  slug: string;
  company: string;
  role: string;
  dates: string;
  location: string;
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
    highlights: [
      "Built end-to-end test traceability linking unit tests, requirements, test plans, and execution results.",
      "Developed patient-monitoring features including medication display and alarm-management to reduce clinician alarm fatigue.",
    ],
    tags: ["C#", ".NET", "Healthcare", "Testing"],
  },
  {
    slug: "insulet",
    company: "Insulet Corporation",
    role: "Data Analysis & Database Validation Co-op",
    dates: "Jul 2024 – Dec 2024",
    location: "Acton, MA",
    highlights: [
      "Documented requirements for migrating 2 Salesforce databases to an internal system, improving data accessibility by 45%.",
      "Analyzed 500+ complaint records and validated 10 features, reducing post-deployment issues by 30%.",
    ],
    tags: ["SQL", "Data validation", "Salesforce", "Healthcare"],
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
      "Web platform connecting current and prospective collegiate athletes with families to streamline recruitment.",
    tags: ["Go", "TypeScript", "React", "REST"],
    github: "https://github.com/GenerateNU/inside-athletics",
  },
  {
    slug: "cinecircle",
    title: "CineCircle",
    org: "Generate NU",
    status: "shipped",
    summary:
      "Mobile app for South Asian cinema fans to discover, discuss, and review regional films.",
    tags: ["TypeScript", "Expo", "PostgreSQL", "Docker"],
    github: "https://github.com/GenerateNU/cinecircle",
  },
  {
    slug: "vetruly",
    title: "Vetruly",
    org: "Generate NU → startup",
    status: "startup",
    summary:
      "Specialty pet care marketplace connecting pets with verified veterinary professionals. Now a live company.",
    tags: ["Full-stack", "Healthcare", "Startup"],
    github: "https://github.com/GenerateNU/vetted",
    demo: "https://www.vetruly.com/",
  },
  {
    slug: "apprenta",
    title: "Apprenta",
    org: "Generate NU → startup",
    status: "startup",
    summary:
      "Platform connecting hospitals with community college students through scholarships and sponsored training.",
    tags: ["Full-stack", "Healthcare", "Startup"],
    github: "https://github.com/GenerateNU/apprenta",
    demo: "https://www.apprenta.co/",
  },
  {
    slug: "prospectus-risk-extraction",
    title: "Prospectus Risk Extraction",
    status: "building",
    summary:
      "Extracts and analyzes risk factors from biotech prospectus PDFs using layout-aware heuristics and text processing.",
    tags: ["Python", "NLP", "PDF parsing", "CLI"],
    github: "https://github.com/tGiech22/Prospectus-Risk-Extraction",
  },
  // Optional — include in v0 only if you want extra data/ML signal
  // {
  //   slug: "nba-analysis",
  //   title: "NBA Conference Competitiveness",
  //   status: "shipped",
  //   summary: "EDA and ML analysis of NBA conference competitiveness using k-NN, random forest, and SVM.",
  //   tags: ["Python", "pandas", "sklearn"],
  //   github: "https://github.com/tGiech22/NBAConferenceCompetitiveness",
  // },
];

export const site = {
  name: "Tony Giech",
  role: "Software · Data · AI Engineer",
  education: "CS + MS AI @ Northeastern · Grad Apr 2026",
  tagline:
    "I've built production healthcare software at Philips and Insulet, shipped full-stack products at Generate NU (two now live startups), and I'm building ML tooling for financial document analysis.",
  about: [
    "I'm a Computer Science + MS AI student at Northeastern.",
    "I've worked as an SDE co-op at Philips and a data/database validation co-op at Insulet.",
    "At Generate NU, I've shipped full-stack products including two that became live startups (Vetruly, Apprenta).",
    "I'm targeting SWE, data engineering, and AI engineering roles focused on production systems.",
  ],
  contact: {
    email: "giech.t@northeastern.edu",
    github: "https://github.com/tGiech22",
    linkedin: "https://www.linkedin.com/in/tonygiech/",
    location: "Boston, MA",
  },
};
