import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  badge,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("mb-12 text-center", className)}>
      {badge && (
        <p className="mb-3 inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}