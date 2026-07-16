import { Container } from '@/components/common/Container';

export default function Home() {
  return (
    <Container className="py-20">
      <div className="rounded-2xl border border-border p-10 text-center">
        <h1 className="text-4xl font-bold">Container Working 🚀</h1>
        <p className="mt-4 text-muted-foreground">
          This content is centered with responsive padding.
        </p>
      </div>
    </Container>
  );
}