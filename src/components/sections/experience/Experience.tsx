"use client";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { EXPERIENCES } from "@/constants/experience";
import { ExperienceCard } from "./ExperienceCard";
import { BadgeCheck, Briefcase, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Get company icon component base on name
const getCompanyIcon = (company: string) => {
    const lower = company.toLowerCase();
    if (lower.includes("responsive")) {
        return Briefcase;
    } else if (lower.includes("simplizero")) {
        return Building2;
    } else {
        return BadgeCheck;
    }
};

// Theme for the timeline bullet point based on company
const getTimelineBadgeClasses = (company: string) => {
    const lower = company.toLowerCase();
    if (lower.includes("responsive")) {
        return {
            badgeBorder: "border-blue-500/20 bg-zinc-950 text-blue-400",
            badgeGlow: "shadow-[0_0_15px_rgba(56,189,248,0.1)] group-hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]",
            badgeHover: "group-hover:border-blue-400 group-hover:text-white group-hover:bg-blue-500/10",
        };
    } else if (lower.includes("simplizero")) {
        return {
            badgeBorder: "border-emerald-500/20 bg-zinc-950 text-emerald-400",
            badgeGlow: "shadow-[0_0_15px_rgba(34,197,94,0.1)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]",
            badgeHover: "group-hover:border-emerald-400 group-hover:text-white group-hover:bg-emerald-500/10",
        };
    } else {
        return {
            badgeBorder: "border-violet-500/20 bg-zinc-950 text-violet-400",
            badgeGlow: "shadow-[0_0_15px_rgba(139,92,246,0.1)] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]",
            badgeHover: "group-hover:border-violet-400 group-hover:text-white group-hover:bg-violet-500/10",
        };
    }
};

export function Experience() {
    return (
        <Section id="experience" className="relative isolate scroll-mt-28 overflow-hidden py-24">
            {/* Top border line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            {/* Background Grids & Glows */}
            <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />
            <div className="absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-500/5 blur-3xl" />
            <div className="absolute left-0 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-violet-500/5 blur-3xl" />

            <Container>
                <SectionHeading
                    badge="Experience"
                    title="Work History"
                    subtitle="My professional journey and front-end engineering impact over the past 5 years."
                />

                <div className="relative mx-auto mt-20 max-w-5xl">
                    {/* Vertical Timeline center line */}
                    <div className="absolute bottom-2 left-6 top-2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-blue-500/70 via-emerald-500/70 to-violet-500/70 md:left-1/2" />

                    <div className="flex flex-col gap-12 md:gap-16">
                        {EXPERIENCES.map((item, index) => {
                            const Icon = getCompanyIcon(item.company);
                            const badgeClasses = getTimelineBadgeClasses(item.company);
                            const isEven = index % 2 === 0;

                            return (
                                <div
                                    key={item.company}
                                    className="group relative flex w-full pl-14 md:pl-0 md:flex-row md:items-start"
                                >
                                    {/* Timeline Badge Node Wrapper */}
                                    <div className="absolute left-6 top-8 z-10 -translate-x-1/2 md:left-1/2">
                                        <div
                                            className={cn(
                                                "relative flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-all duration-500 ease-out md:h-12 md:w-12",
                                                badgeClasses.badgeBorder,
                                                badgeClasses.badgeGlow,
                                                badgeClasses.badgeHover
                                            )}
                                        >
                                            <Icon className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
                                            {/* Pulse effect for Current role */}
                                            {item.isCurrent && (
                                                <div className="absolute -inset-1 -z-10 rounded-full bg-blue-500/10 animate-ping opacity-75 motion-reduce:hidden" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Staggered Row Ordering */}
                                    <div
                                        className={cn(
                                            "flex w-full flex-col md:flex-row md:justify-between",
                                            isEven ? "md:flex-row" : "md:flex-row-reverse"
                                        )}
                                    >
                                        {/* Card container component */}
                                        <ExperienceCard item={item} index={index} />

                                        {/* Desktop spacer to force staggered behavior */}
                                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
