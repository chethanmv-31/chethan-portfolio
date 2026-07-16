import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 text-center", className)}>
      {badge && (
        <span className="mb-3 inline-flex rounded-full border px-3 py-1 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}