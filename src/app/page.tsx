import { Container } from "@/components/common/Container";
import GradientText from "@/components/common/GradientText";
import Section from "@/components/common/Section";
import SectionHeading from "@/components/common/SectionHeading";

export default function Home() {
  return (
    <Section>
      <Container>
        <SectionHeading
          badge="Welcome"
          title="Hi, I'm "
          subtitle="Building modern web experiences."
        />

        <h1 className="mt-8 text-center text-6xl font-bold">
          <GradientText>Chethan MV</GradientText>
        </h1>
      </Container>
    </Section>
  );
}
