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
    category: "Full Stack · Production Website",
    tags: ["Full Stack", "Production"],
    status: "Live & Production Ready",
    live: true,
    description: "Production-ready digital platform for a modern laundry service.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "https://dhobyexpert.vercel.app/",
    github: "https://github.com/Kraverse",
    visual: "dhobixpert",
    overview:
      "A complete digital experience for a modern laundry service — built as a real, deployed product rather than a demo.",
    problem:
      "Small service businesses often have no online presence: customers can't see services, pricing or request a pickup without calling.",
    solution:
      "A polished, responsive marketing and booking experience built with Next.js, presenting services clearly and deployed to production on Vercel.",
    aiComponents: "Modern web architecture with a component-driven Next.js codebase; designed so AI features (booking assistant, smart recommendations) can be layered in later.",
    features: ["Responsive Next.js frontend", "Service & pricing presentation", "Production deployment on Vercel", "Component-driven, maintainable codebase"],
  },
  {
    title: "HelpDesk AI",
    category: "Generative AI · RAG",
    tags: ["Generative AI", "AI / ML", "RAG"],
    status: "Buildable / In Development",
    live: false,
    description:
      "Enterprise-style AI assistant that retrieves relevant information from a knowledge base and generates contextual responses.",
    tech: ["Python", "RAG", "LangChain", "LLM"],
    link: "https://github.com/kartik47-ai/HelpDesk-AI-Enterprise-RAG-Assistant",
    github: "https://github.com/kartik47-ai/HelpDesk-AI-Enterprise-RAG-Assistant",
    visual: "helpdesk",
    overview:
      "A retrieval-augmented generation (RAG) assistant that grounds LLM answers in a private knowledge base instead of relying on model memory.",
    problem:
      "Generic LLMs hallucinate on organization-specific questions because they have no access to internal documentation.",
    solution:
      "A RAG pipeline: documents are chunked and embedded, relevant passages are retrieved at query time, and the LLM generates answers grounded in that context.",
    aiComponents: "Retrieval-Augmented Generation, LangChain orchestration, vector similarity search, prompt engineering, LLM response generation.",
    features: ["Document ingestion & chunking", "Vector-based semantic retrieval", "Context-grounded LLM responses", "Interactive Streamlit interface"],
  },
  {
    title: "Context Transfer",
    category: "AI Productivity Tool",
    tags: ["Generative AI", "AI / ML"],
    status: "Experimental",
    live: false,
    description:
      "AI context transfer system designed to move conversations and useful context between AI assistants and platforms.",
    tech: ["JavaScript", "Chrome Extension", "AI APIs"],
    link: "https://github.com/kartik47-ai/Claude-Connector",
    github: "https://github.com/kartik47-ai/Claude-Connector",
    visual: "context",
    overview:
      "A tooling experiment for carrying conversation context across AI assistants, so you don't restart from zero when switching tools.",
    problem:
      "Switching between AI assistants means re-explaining the same task, losing accumulated context and nuance each time.",
    solution:
      "A modular connector built around AI APIs that packages conversation context and makes it portable between assistants.",
    aiComponents: "AI API integration, context structuring for LLM consumption, prompt-friendly context serialization.",
    features: ["Modular Python connector architecture", "AI API integration", "Context extraction & transfer", "Extensible to new assistants"],
  },
  {
    title: "ChurnIQ",
    category: "Machine Learning",
    tags: ["AI / ML"],
    status: "Completed",
    live: false,
    description:
      "Machine learning project focused on predicting customer churn using data-driven modeling and evaluation.",
    tech: ["Python", "Machine Learning", "Data Analysis"],
    link: "https://github.com/Kraverse",
    github: "https://github.com/Kraverse",
    visual: "churniq",
    overview:
      "An end-to-end ML workflow that predicts which customers are likely to churn, from data preparation to model evaluation.",
    problem:
      "Businesses lose revenue silently when customers leave — churn is far cheaper to prevent than to recover.",
    solution:
      "A supervised classification pipeline with proper data cleaning, feature handling, model training and evaluation — focused on understanding *why* the model predicts, not just the score.",
    aiComponents: "Supervised learning (classification), feature engineering, model evaluation with appropriate metrics, scikit-learn and pandas workflows.",
    features: ["Data cleaning & exploratory analysis", "Feature engineering pipeline", "Model training & comparison", "Evaluation with standard ML metrics"],
  },
];

const FILTERS = ["All", "AI / ML", "Generative AI", "Full Stack", "Production"];

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
