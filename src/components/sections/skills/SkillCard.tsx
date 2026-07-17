"use client";

import { useRef } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import { cn } from "@/lib/utils";
import { SkillChip } from "./SkillChip";
import type { SkillCategory } from "./skillsData";

interface SkillCardProps {
  item: SkillCategory;
  index: number;
}

const themeMap = {
  blue: {
    border: "border-blue-500/10 hover:border-blue-500/30",
    iconBg: "border-blue-500/20 bg-blue-500/10 text-blue-400",
    textMuted: "text-blue-200/70",
    glow: "from-blue-500 to-sky-500",
    chip: "bg-blue-500/10 text-blue-200",
    chipBorder: "border-blue-500/20",
    chipHover: "hover:bg-blue-500/20 hover:text-white",
  },
  violet: {
    border: "border-violet-500/10 hover:border-violet-500/30",
    iconBg: "border-violet-500/20 bg-violet-500/10 text-violet-400",
    textMuted: "text-violet-200/70",
    glow: "from-violet-500 to-purple-500",
    chip: "bg-violet-500/10 text-violet-200",
    chipBorder: "border-violet-500/20",
    chipHover: "hover:bg-violet-500/20 hover:text-white",
  },
  emerald: {
    border: "border-emerald-500/10 hover:border-emerald-500/30",
    iconBg: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
    textMuted: "text-emerald-200/70",
    glow: "from-emerald-500 to-green-500",
    chip: "bg-emerald-500/10 text-emerald-200",
    chipBorder: "border-emerald-500/20",
    chipHover: "hover:bg-emerald-500/20 hover:text-white",
  },
  cyan: {
    border: "border-cyan-500/10 hover:border-cyan-500/30",
    iconBg: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
    textMuted: "text-cyan-200/70",
    glow: "from-cyan-500 to-sky-500",
    chip: "bg-cyan-500/10 text-cyan-200",
    chipBorder: "border-cyan-500/20",
    chipHover: "hover:bg-cyan-500/20 hover:text-white",
  },
  amber: {
    border: "border-amber-500/10 hover:border-amber-500/30",
    iconBg: "border-amber-500/20 bg-amber-500/10 text-amber-400",
    textMuted: "text-amber-200/70",
    glow: "from-amber-500 to-orange-500",
    chip: "bg-amber-500/10 text-amber-200",
    chipBorder: "border-amber-500/20",
    chipHover: "hover:bg-amber-500/20 hover:text-white",
  },
  fuchsia: {
    border: "border-fuchsia-500/10 hover:border-fuchsia-500/30",
    iconBg: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-400",
    textMuted: "text-fuchsia-200/70",
    glow: "from-fuchsia-500 to-pink-500",
    chip: "bg-fuchsia-500/10 text-fuchsia-200",
    chipBorder: "border-fuchsia-500/20",
    chipHover: "hover:bg-fuchsia-500/20 hover:text-white",
  },
} as const;

export function SkillCard({ item, index }: SkillCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(cardRef, { threshold: 0.1 });
  const theme = themeMap[item.accent];
  const Icon = item.icon;

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative h-full transition-all duration-700 ease-out",
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-[0.96] opacity-0",
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={cn(
          "absolute -inset-1 rounded-3xl bg-gradient-to-r opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-20",
          theme.glow,
        )}
      />

      <div
        className={cn(
          "relative h-full overflow-hidden rounded-3xl border bg-white/[0.03] p-6 shadow-[0_0_40px_rgba(2,132,199,0.08)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/[0.05]",
          theme.border,
        )}
      >
        <div className="flex items-start gap-3">
          <div className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border", theme.iconBg)}>
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-white">{item.title}</h3>
            <p className={cn("mt-1 text-sm", theme.textMuted)}>{item.description}</p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.skills.map((skill) => (
            <SkillChip key={skill} skill={skill} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
}
