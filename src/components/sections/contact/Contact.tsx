import { ArrowRight, Code2, Download, Globe2, Mail, Sparkles } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: SITE_CONFIG.social.linkedin,
    icon: Globe2,
  },
  {
    label: "GitHub",
    value: "Explore projects",
    href: SITE_CONFIG.social.github,
    icon: Code2,
  },
  {
    label: "Resume",
    value: "Download CV",
    href: SITE_CONFIG.resume,
    icon: Download,
  },
] as const;

export function Contact() {
  return (
    <Section id="contact" className="relative isolate scroll-mt-28 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute left-1/2 top-0 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container>
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/70 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-300">
                  <Sparkles className="h-4 w-4" />
                  Open to opportunities
                </div>

                <div className="space-y-4">
                  <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Let&apos;s build something amazing together.
                  </h2>
                  <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                    I&apos;m currently open to frontend engineering opportunities,
                    freelance projects, and collaborations that create thoughtful,
                    high-impact web experiences.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className={cn(
                      buttonVariants({ size: "lg", variant: "default" }),
                      "gap-2 rounded-full px-6 text-base"
                    )}
                  >
                    Get In Touch
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </a>

                  <a
                    href={SITE_CONFIG.resume}
                    download
                    className={cn(
                      buttonVariants({ size: "lg", variant: "outline" }),
                      "rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10"
                    )}
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactLinks.map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="group block">
                    <Card className="h-full border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/10">
                      <CardContent className="flex h-full flex-col gap-4 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-zinc-300">{label}</p>
                          <p className="mt-1 text-sm text-zinc-400">{value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
