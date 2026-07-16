"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

const sectionIds = NAV_LINKS.map((item) => item.href.slice(1));

export function NavLinks() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const active = sectionIds.find((id) => visibleSections.has(id));
        if (active) {
          setActiveSection(active);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

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
