import { Code2, FlaskConical, Palette, Server, Workflow, Wrench, type LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: "blue" | "violet" | "emerald" | "cyan" | "amber" | "fuchsia";
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    description: "Modern UI engineering with React, Next.js, and TypeScript.",
    icon: Code2,
    accent: "blue",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Styling",
    description: "Polished visual systems with Tailwind, MUI, and component-driven styling.",
    icon: Palette,
    accent: "violet",
    skills: ["Tailwind CSS", "Material UI", "Styled Components", "Bootstrap", "Ant Design", "Responsive Design"],
  },
  {
    title: "State Management",
    description: "Reliable client-state architecture for scalable product experiences.",
    icon: Workflow,
    accent: "emerald",
    skills: ["Redux Toolkit", "Context API"],
  },
  {
    title: "Backend & Database",
    description: "API and data layers built for performance and maintainability.",
    icon: Server,
    accent: "cyan",
    skills: ["Node.js", "Nest.js", "MySQL", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Testing",
    description: "Confidence through robust unit and component testing.",
    icon: FlaskConical,
    accent: "amber",
    skills: ["Jest", "React Testing Library"],
  },
  {
    title: "Tools & DevOps",
    description: "Efficient delivery workflows with Git, CI, and product tooling.",
    icon: Wrench,
    accent: "fuchsia",
    skills: ["Git", "GitHub", "Bitbucket", "Jenkins", "SonarQube", "Jira", "Cursor AI", "VS Code"],
  },
];
