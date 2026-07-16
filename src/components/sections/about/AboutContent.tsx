import { GradientText } from "@/components/common/GradientText";

export function AboutContent() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
          About Me
        </p>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
          <GradientText>Frontend Engineer</GradientText> crafting scalable
          and user-focused web applications.
        </h2>
      </div>

      <div className="space-y-5 text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
        <p>
          I&apos;m a Frontend Engineer with{" "}
          <span className="font-medium text-zinc-200">5 years of experience</span>{" "}
          building modern web applications with a strong focus on{" "}
          <span className="font-medium text-white">React</span>,{" "}
          <span className="font-medium text-white">TypeScript</span>, and
          scalable UI architecture.
        </p>

        <p>
          I have experience building production-grade applications, creating
          reusable components, improving performance, and collaborating with
          cross-functional teams to deliver reliable user experiences.
        </p>

        <p>
          I enjoy solving frontend challenges, exploring modern technologies,
          and creating interfaces that balance great design with excellent
          engineering practices.
        </p>
      </div>
    </div>
  );
}
