import { Container } from "@/components/common/Container";
import Section from "@/components/common/Section";

export default function Home() {
  return (
    <Section id="test">
      <Container>
        <h2 className="text-3xl font-bold">Section Component</h2>
        <p>This is our reusable section.</p>
      </Container>
    </Section>
  );
}
