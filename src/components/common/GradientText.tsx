import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
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