import { Navbar } from "@/components/sections/navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { About } from "@/components/sections/about/About";
import { Experience } from "@/components/sections/experience/Experience";
import { Section } from "@/components/common/Section";

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />

      <Section id="skills" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Skills</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            React, Next.js, TypeScript, UI engineering, performance tuning, and accessible front-end systems.
          </p>
        </div>
      </Section>

      <Section id="projects" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Projects</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            A selection of product-focused web experiences built with scalable React and Next.js architecture.
          </p>
        </div>
      </Section>

      <Section id="contact" className="scroll-mt-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Contact</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Reach out for collaboration, freelance work, or a conversation about front-end engineering.
          </p>
        </div>
      </Section>
    </main>
  );
}
