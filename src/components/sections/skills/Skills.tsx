"use client";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillsGrid } from "./SkillsGrid";

export function Skills() {
  return (
    <Section id="skills" className="relative isolate scroll-mt-28 overflow-hidden py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="absolute right-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute left-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl" />

      <Container>
        <SectionHeading
          badge="Skills"
          title="Technologies I use"
          subtitle="Tools and frameworks I rely on to build scalable, high-performance web experiences."
        />

        <div className="mt-16">
          <SkillsGrid />
        </div>
      </Container>
    </Section>
  );
}
