"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/constants/site";

const sectionIds = NAV_LINKS.map((item) => item.href.slice(1));

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const offset = 180;
      const scrollPosition = window.scrollY + offset;

      let currentSection = "home";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const top = element.offsetTop;
        if (scrollPosition >= top) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return activeSection;
}
