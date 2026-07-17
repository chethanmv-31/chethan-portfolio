"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

export function NavLinks() {
  const activeSection = useActiveSection();

  return (
    <div className="hidden items-center gap-8 md:flex">
      {NAV_LINKS.map((item) => {
        const sectionId = item.href.slice(1);
        const isActive = activeSection === sectionId;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:transition-all after:duration-300",
              isActive
                ? "text-white after:w-full after:bg-white/80"
                : "text-zinc-400 hover:text-white after:w-0 after:bg-white/60 hover:after:w-full"
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
