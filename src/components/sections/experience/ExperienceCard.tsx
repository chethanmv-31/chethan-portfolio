"use client";

import { useRef } from "react";
import { useIntersection } from "@/hooks/useIntersection";
import { ExperienceItem } from "@/constants/experience";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ExperienceCardProps {
  item: ExperienceItem;
  index: number;
}

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(cardRef, { threshold: 0.1 });

  // Staggered animation classes based on side
  const isEven = index % 2 === 0;

  // Theme settings based on company
  const getTheme = (companyName: string) => {
    const lower = companyName.toLowerCase();
    if (lower.includes("responsive")) {
      return {
        glow: "group-hover:shadow-[0_0_45px_-10px_rgba(56,189,248,0.22)]",
        border: "border-blue-500/10 hover:border-blue-500/30",
        iconBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        textAccent: "text-blue-400",
        chip: "bg-blue-500/5 text-blue-300 border-blue-500/10 hover:bg-blue-500/10",
      };
    } else if (lower.includes("simplizero")) {
      return {
        glow: "group-hover:shadow-[0_0_45px_-10px_rgba(34,197,94,0.22)]",
        border: "border-emerald-500/10 hover:border-emerald-500/30",
        iconBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
        textAccent: "text-emerald-400",
        chip: "bg-emerald-500/5 text-emerald-300 border-emerald-500/10 hover:bg-emerald-500/10",
      };
    } else {
      return {
        glow: "group-hover:shadow-[0_0_45px_-10px_rgba(139,92,246,0.22)]",
        border: "border-violet-500/10 hover:border-violet-500/30",
        iconBg: "bg-violet-500/10 border-violet-500/20 text-violet-400",
        textAccent: "text-violet-400",
        chip: "bg-violet-500/5 text-violet-300 border-violet-500/10 hover:bg-violet-500/10",
      };
    }
  };

  const theme = getTheme(item.company);
  const tenureLabel = item.tenure ?? "2+ Years";

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative w-full transition-all duration-700 ease-out md:w-[calc(50%-2rem)]",
        isVisible
          ? "opacity-100 translate-y-0"
          : cn(
              "opacity-0 translate-y-8",
              isEven ? "md:-translate-x-10" : "md:translate-x-10",
            ),
        isEven ? "md:self-start md:text-right" : "md:self-end",
      )}
    >
      {/* Decorative Glow background on hover */}
      <div
        className={cn(
          "absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 blur transition-opacity duration-500 group-hover:opacity-20",
          item.company.toLowerCase().includes("responsive")
            ? "from-blue-500 to-sky-500"
            : item.company.toLowerCase().includes("simplizero")
              ? "from-emerald-500 to-green-500"
              : "from-violet-500 to-purple-500",
        )}
      />

      {/* Main Glass Card */}
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border bg-white/[0.03] p-6 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/[0.05]",
          theme.border,
          theme.glow,
        )}
      >
        {/* Company Header Row */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 self-start">
              {item.logo ? (
                <div className="flex h-12 w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
                  <Image
                    src={item.logo.src}
                    alt={item.logo.alt}
                    width={180}
                    height={48}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ) : (
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white/95">
                  {item.company}
                </h3>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-semibold tracking-tight text-white/90">
                    {item.company}
                  </p>
                  {item.isCurrent && (
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-emerald-400">
                      Current
                    </span>
                  )}
                </div>
                <p
                  className={cn("mt-0.5 text-md font-medium", theme.textAccent)}
                >
                  {item.role}
                </p>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "flex flex-col gap-1 rounded-xl border px-3 py-2 text-left text-[11px] shadow-sm backdrop-blur-sm",
              "border-white/10 bg-white/[0.04] text-zinc-400",
            )}
          >
            <div className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span className="font-medium leading-none text-white/80">
                {item.duration}
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              {tenureLabel}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-white/[0.06]" />

        {/* Work Done Achievements Bullets */}
        <ul className={cn("space-y-3 text-sm leading-relaxed text-zinc-400")}>
          {item.points.slice(0, 4).map((point, index) => (
            <li
              key={index}
              className={cn(
                "relative flex items-start gap-3",
                isEven ? "md:flex-row-reverse md:text-right" : "",
              )}
            >
              <span
                className={cn(
                  "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                  item.company.toLowerCase().includes("responsive")
                    ? "bg-blue-400/80"
                    : item.company.toLowerCase().includes("simplizero")
                      ? "bg-emerald-400/80"
                      : "bg-violet-400/80",
                )}
              />
              <span className="flex-1">{point}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <div className="mt-6">
          <div
            className={cn(
              "flex flex-wrap gap-1.5",
              isEven ? "md:justify-end" : "md:justify-start",
            )}
          >
            {item.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className={cn(
                  "rounded-full px-2.5 py-0.5 text-[11px] font-medium border transition-colors duration-300",
                  theme.chip,
                )}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
