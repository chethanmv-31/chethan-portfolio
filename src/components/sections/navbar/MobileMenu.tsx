"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const resumeHref = SITE_CONFIG.resume || "#contact";
  const isPdf = resumeHref?.toLowerCase().endsWith(".pdf");

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-800/80"
      >
        <span className="relative block h-5 w-5">
          <span
            className={`absolute left-0 top-1 h-0.5 w-5 rounded-full bg-zinc-300 transition-all duration-300 ease-in-out ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-zinc-300 transition-all duration-300 ease-in-out ${
              open ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
          />

          <span
            className={`absolute left-0 top-5 h-0.5 w-5 rounded-full bg-zinc-300 transition-all duration-300 ease-in-out ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        aria-hidden={!open}
        className={`absolute right-0 top-14 w-72 origin-top-right rounded-2xl border border-zinc-800 bg-zinc-950/95 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
          open
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-4 scale-95 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`text-base text-zinc-400 transition-all duration-300 hover:text-white ${
                open
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          href={resumeHref}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className="mt-6 flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-200"
          {...(isPdf ? { download: true } : {})}
        >
          Resume
        </Link>
      </div>
    </div>
  );
}