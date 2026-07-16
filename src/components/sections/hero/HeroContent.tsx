import { GradientText } from "@/components/common/GradientText";
import { HeroActions } from "./HeroActions";

export function HeroContent() {
  return (
    <div className="space-y-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Available for Freelance Opportunities
      </div>

      <div className="space-y-4">
        <p className="text-lg text-zinc-400">
          👋 Hi, I'm
        </p>

        <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">
          <GradientText>Chethan MV</GradientText>
        </h1>

        <h2 className="text-2xl font-semibold text-zinc-200 lg:text-3xl">
          Frontend Engineer
        </h2>

        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          I build scalable, high-performance web applications using
          <span className="font-semibold text-white"> React</span>,
          <span className="font-semibold text-white"> Next.js</span> and
          <span className="font-semibold text-white"> TypeScript</span>.
          Passionate about crafting clean UI, reusable components and delightful user experiences.
        </p>
      </div>

      <HeroActions />
    </div>
  );
}