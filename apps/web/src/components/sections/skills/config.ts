import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "Full-Stack Architecture",
    thumbnail: "/images/skills/full_stack_architecture.png",
    description: `I engineer highly scalable, responsive web applications that bridge sophisticated backend logic with pixel-perfect user interfaces. Utilizing modern runtimes and frameworks—spanning Next.js, React, Node.js, and async FastAPI—I transform complex enterprise requirements into resilient, high-performance digital platforms tailored for seamless user adoption.`,
  },
  {
    name: "AI & LLM Engineering",
    thumbnail: "/images/skills/ai_llm_engineering.png",
    description: `I build at the absolute frontier of generative technology, designing secure Retrieval-Augmented Generation (RAG) pipelines and orchestrating collaborative, multi-agent systems. Leveraging LangGraph, Google Gemini, and localized vector storage, I develop dynamic intelligence layers ranging from ultra-low latency voice loops to autonomous business validation engines.`,
  },
  {
    name: "Database & Cloud Infrastructure",
    thumbnail: "/images/skills/database_cloud_infrastructure.png",
    description: `I design robust, multi-tier data models and containerized deployments optimized for high availability, low latency, and strict security. By integrating relational systems like PostgreSQL and localized vector stores with Docker, Redis caching, and automated CI/CD pipelines, I ensure seamless deployments and robust offline-first resilience.`,
  },
  {
    name: "Cross-Platform Mobile Experiences",
    thumbnail: "/images/skills/cross_platform_mobile.png",
    description: `I craft premium, high-fidelity mobile applications for both iOS and Android utilizing React Native and Flutter. My focus is on delivering uncompromising performance—engineering fluid 60fps animations, strict native hardware integration, biometric security pipelines, and offline-first state synchronization for a truly flawless mobile experience.`,
  },
];

export { skills };