import Link from "next/link";

const navItems = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Contact",
];

export function NavLinks() {
  return (
    <div className="hidden items-center gap-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item}
          href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
          className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
        >
          {item}
        </Link>
      ))}
    </div>
  );
}