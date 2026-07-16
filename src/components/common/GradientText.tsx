import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface GradientTextProps {
  className?: string;
}

export function GradientText({
  children,
  className,
}: PropsWithChildren<GradientTextProps>) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}