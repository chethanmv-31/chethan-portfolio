import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

const projectsHref = "#projects";
const resumeHref = SITE_CONFIG.resume;

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      <a
        href={projectsHref}
        className="rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200"
      >
        View Projects
      </a>

      {resumeHref ? (
        <a
          href={resumeHref}
          download
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-6"
          )}
        >
          Download Resume
        </a>
      ) : (
        <span
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full px-6"
          )}
        >
          Download Resume
        </span>
      )}
    </div>
  );
}
