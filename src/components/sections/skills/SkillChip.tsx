import { cn } from "@/lib/utils";

interface SkillChipProps {
  skill: string;
  theme: {
    chip: string;
    chipBorder: string;
    chipHover: string;
  };
}

export function SkillChip({ skill, theme }: SkillChipProps) {
  return (
    <span
      className={cn(
        "rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5",
        theme.chip,
        theme.chipBorder,
        theme.chipHover,
      )}
    >
      {skill}
    </span>
  );
}
