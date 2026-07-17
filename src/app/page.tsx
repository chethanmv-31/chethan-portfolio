import { Navbar } from "@/components/sections/navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experience/Experience";

const sectionAnchors = [
  "skills",
  "projects",
  "contact",
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />

      {sectionAnchors.map((id) => (
        <section
          key={id}
          id={id}
          className="min-h-96 scroll-mt-28 bg-transparent"
          aria-hidden
        />
      ))}
    </main>
  );
}
