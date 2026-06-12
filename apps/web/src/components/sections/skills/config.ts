import type { Skill } from "@/types/skill";

const skills: Skill[] = [
  {
    name: "Full-Stack Development",
    thumbnail: "/images/skills/web-development.jpg",
    description: `Full-stack development involves designing and building complete web applications from frontend to backend, ensuring seamless integration and scalable architecture. I leverage modern frameworks like React, Next.js, Node.js, and Express to deliver high-performance, production-ready solutions.`,
  },
  {
    name: "AI & LLM Engineering",
    thumbnail: "/images/skills/ui-ux-design.jpg",
    description: `AI & LLM Engineering focuses on building intelligent systems using large language models, retrieval-augmented generation (RAG), multi-agent orchestration, and custom AI pipelines. I integrate APIs like OpenAI, Google Gemini, and Groq, and build with LangChain, LangGraph, and vector databases.`,
  },
  {
    name: "Database & Cloud Engineering",
    thumbnail: "/images/skills/database-management.jpg",
    description: `Database & Cloud Engineering involves designing efficient data models, managing databases (PostgreSQL, MongoDB, Redis), and deploying scalable infrastructures using Docker, Vercel, and Render. I ensure data integrity, security, and low-latency access.`,
  },
  {
    name: "Cross-Platform Mobile Development",
    thumbnail: "/images/skills/mobile-development.jpg",
    description: `Cross-Platform Mobile Development entails building high-performance mobile apps for iOS and Android using React Native and Flutter. I implement fluid 60fps interfaces, state management, biometric authentication, and offline-first capabilities.`,
  },
];

export { skills };