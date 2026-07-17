import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface SectionProps {
  id?: string;
  className?: string;
}

export function Section({
  id,
  children,
  className,
}: PropsWithChildren<SectionProps>) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-28 py-16 md:py-24", className)}
    >
      {children}
    </section>
  );
}