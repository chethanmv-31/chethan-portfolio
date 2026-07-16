import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site";

import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export function Navbar() {
  const resumeHref = SITE_CONFIG.resume || "#contact";
  const isPdf = resumeHref?.toLowerCase().endsWith(".pdf");

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-4 mt-4 flex items-center justify-between rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3.5 shadow-xl shadow-black/20 backdrop-blur-2xl backdrop-saturate-150 sm:mx-6 lg:mx-auto lg:max-w-5xl lg:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Chethan<span className="text-zinc-400">.</span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-4">
          <Link
            href={resumeHref}
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition duration-300 hover:bg-zinc-200 md:block"
            {...(isPdf ? { download: true } : {})}
          >
            Resume
          </Link>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}