import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { HeroContent } from "./HeroContent";
import { HeroImage } from "./HeroImage";

export function Hero() {
  return (
    <Section className="relative isolate overflow-hidden pt-36 pb-24 lg:pt-40 lg:pb-32">
      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
      {/* Background Glow */}
      <div className="absolute left-0 top-20 -z-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute right-0 bottom-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}
