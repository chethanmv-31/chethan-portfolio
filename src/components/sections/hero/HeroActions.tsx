import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SITE_CONFIG } from "@/constants/site";

const projectsHref = "#projects";
const resumeHref = SITE_CONFIG.resume;

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">
      {projectsHref ? (
        <a href={projectsHref} className={cn(buttonVariants({ size: "lg" }))}>
          View Projects
        </a>
      ) : (
        <span className={cn(buttonVariants({ size: "lg" }))}>
          View Projects
        </span>
      )}

      {resumeHref ? (
        <a
          href={resumeHref}
          download
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Download Resume
        </a>
      ) : (
        <span className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
          Download Resume
        </span>
      )}
    </div>
  );
}