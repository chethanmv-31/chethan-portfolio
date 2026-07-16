import { Briefcase, Gauge, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const highlights = [
  {
    icon: Briefcase,
    label: "Experience",
    value: "5+ Years",
    description: "Building production-ready frontend applications.",
    glow: "from-green-500/20 to-emerald-500/5",
    iconClass: "text-green-400",
    iconBg: "bg-green-500/10 border-green-500/20",
  },
  {
    icon: Layers,
    label: "Specialization",
    value: "React + Next.js",
    description: "Creating scalable and reusable UI systems.",
    glow: "from-blue-500/20 to-cyan-500/5",
    iconClass: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: Gauge,
    label: "Focus",
    value: "Performance",
    description: "Optimized interfaces with great user experience.",
    glow: "from-violet-500/20 to-purple-500/5",
    iconClass: "text-violet-400",
    iconBg: "bg-violet-500/10 border-violet-500/20",
  },
] as const;

export function AboutStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {highlights.map((item) => (
        <div
          key={item.label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.05]"
        >
          <div
            className={cn(
              "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100",
              item.glow
            )}
          />

          <div className="relative space-y-4">
            <div
              className={cn(
                "inline-flex rounded-lg border p-2.5",
                item.iconBg
              )}
            >
              <item.icon className={cn("h-4 w-4", item.iconClass)} />
            </div>

            <div className="space-y-1.5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                {item.label}
              </p>
              <p className="text-xl font-bold text-white">{item.value}</p>
              <p className="text-sm leading-relaxed text-zinc-500">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
