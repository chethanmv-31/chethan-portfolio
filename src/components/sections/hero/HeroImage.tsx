import { MapPin } from "lucide-react";
import { GradientText } from "@/components/common/GradientText";
import { SITE_CONFIG } from "@/constants/site";

const techStack = [
  { name: "React", className: "border-blue-400/20 bg-blue-500/10 text-blue-400" },
  { name: "Next.js", className: "border-cyan-400/20 bg-cyan-500/10 text-cyan-400" },
  {
    name: "TypeScript",
    className: "border-violet-400/20 bg-violet-500/10 text-violet-400",
  },
] as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function HeroImage() {
  const initials = getInitials(SITE_CONFIG.name);

  return (
    <div className="relative flex justify-center animate-float motion-reduce:animate-none">
      <div className="absolute h-80 w-80 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-violet-500/20 blur-3xl" />

      <div className="relative flex w-full max-w-[340px] flex-col items-center rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl shadow-black/30 backdrop-blur-2xl backdrop-saturate-150">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 opacity-60 blur-sm" />
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/20 bg-zinc-950/80">
            <span className="text-4xl font-bold tracking-tight">
              <GradientText>{initials}</GradientText>
            </span>
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-white">{SITE_CONFIG.name}</h3>

        <p className="mt-2 text-zinc-400">{SITE_CONFIG.title}</p>

        {SITE_CONFIG.location ? (
          <p className="mt-3 flex items-center gap-1.5 text-sm text-zinc-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            {SITE_CONFIG.location}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className={`rounded-full border px-3 py-1 text-sm ${tech.className}`}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
