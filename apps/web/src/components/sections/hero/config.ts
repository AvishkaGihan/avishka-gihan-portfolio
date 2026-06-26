import type { Hero } from "@/types/hero";
import { metadata as meta } from "@/app/config";

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description:
    "Building thoughtful software, beautiful interfaces, and AI-driven experiences that people love to use.",
};

export { hero };
