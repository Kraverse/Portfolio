/* ============================================================
   Kartik Suresh Katke — Portfolio Data
   Edit projects, links and skills here without touching layout.
   ============================================================ */

const SOCIAL_LINKS = {
  github: "https://github.com/Kraverse",
  linkedin: "https://linkedin.com/in/kraverse",
  email: "mailto:kk1dgca@gmail.com",
};

const PROJECTS = [
  {
    title: "DhobiXpert",
    category: "AI / Full-Stack / Production Website",
    description: "Production-ready digital platform for a modern laundry service.",
    highlight: "Live & Production Ready",
    tech: ["Next.js", "React", "Tailwind CSS", "Modern Web"],
    link: "https://dhobyexpert.vercel.app/",
    visual: "dhobixpert",
  },
  {
    title: "HelpDesk AI",
    category: "Generative AI / RAG",
    description:
      "Enterprise-style AI assistant that retrieves relevant information from a knowledge base and generates contextual responses.",
    tech: ["Python", "RAG", "LangChain", "LLM"],
    link: "https://github.com/kartik47-ai/HelpDesk-AI-Enterprise-RAG-Assistant",
    visual: "helpdesk",
  },
  {
    title: "Context Transfer",
    category: "AI Productivity Tool",
    description:
      "AI context transfer system designed to move conversations and useful context between AI assistants and platforms.",
    tech: ["JavaScript", "Chrome Extension", "AI APIs"],
    link: "https://github.com/kartik47-ai/Claude-Connector",
    visual: "context",
  },
  {
    title: "ChurnIQ",
    category: "Machine Learning",
    description:
      "Machine learning project focused on predicting customer churn using data-driven modeling and evaluation.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: "",
    visual: "churniq",
  },
];

const TECH_STACK = ["Python", "React", "Next.js", "FastAPI", "LangChain", "Supabase", "GitHub", "Vercel"];

const SKILL_GROUPS = [
  { group: "AI / ML", skills: ["Python", "Machine Learning", "Generative AI", "LLMs", "RAG", "LangChain"] },
  { group: "Frontend", skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", skills: ["Python", "FastAPI", "REST APIs", "Node.js"] },
  { group: "Data / Infrastructure", skills: ["Supabase", "PostgreSQL", "MongoDB", "Git", "GitHub", "Vercel"] },
];

const LEARNING = [
  { title: "AI & Machine Learning", note: "Core concepts, modeling & evaluation" },
  { title: "Generative AI & LLM Applications", note: "Prompting, agents & AI products" },
  { title: "RAG Systems", note: "Retrieval-augmented generation pipelines" },
  { title: "Full-Stack AI Applications", note: "End-to-end intelligent products" },
  { title: "Production Deployment", note: "Shipping & maintaining real apps" },
  { title: "Software Engineering", note: "Fundamentals, DSA & system design" },
];
