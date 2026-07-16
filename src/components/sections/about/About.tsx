import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { AboutContent } from "./AboutContent";
import { AboutStats } from "./AboutStats";

export function About() {
  return (
    <Section id="about" className="relative isolate scroll-mt-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/60 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute -left-32 top-1/3 -z-10 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-4xl space-y-14">
          <AboutContent />
          <AboutStats />
        </div>
      </Container>
    </Section>
  );
}
