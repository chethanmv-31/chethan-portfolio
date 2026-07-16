import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

export default function Home() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="About"
          title="Frontend Engineer"
          subtitle="Building scalable web applications with React, Next.js and TypeScript."
        />
      </Container>
    </Section>
  );
}
