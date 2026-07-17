import type { StaticImageData } from "next/image";
import responsiveLogo from "@/assets/images/responsive.png";
import careatorLogo from "@/assets/images/Careator.png";
import greenStoryLogo from "@/assets/images/Green Story .svg";

export interface ExperienceItem {
    company: string;
    role: string;
    duration: string;
    technologies: string[];
    points: string[];
    tenure?: string;
    location?: string;
    isCurrent?: boolean;
    logo?: {
        src: StaticImageData;
        alt: string;
    };
}

export const EXPERIENCES: ExperienceItem[] = [
    {
        company: "Responsive",
        role: "Software Engineer",
        duration: "Jun 2025 – Present",
        tenure: "1+ Years",
        isCurrent: true,
        logo: {
            src: responsiveLogo,
            alt: "Responsive logo",
        },
        technologies: [
            "React",
            "TypeScript",
            "REST APIs",
            "ESLint",
            "GrapesJS",
            "Jest",
            "SonarQube",
            "GitHub",
            "Agile",
        ],
        points: [
            "Built and maintained scalable frontend applications using React and TypeScript.",
            "Led code reviews and enforced Airbnb ESLint standards, improving code quality across the codebase.",
            "Integrated REST APIs ensuring efficient data flow and seamless user experience.",
            "Developed fully responsive UIs across mobile, tablet, and desktop devices.",
            "Resolved customer-reported issues via Zendesk, reducing turnaround time significantly.",
            "Mentored team members and drove engineering best practices to reduce production issues.",
        ],
    },
    {
        company: "SimpliZero Sustainable Solution Pvt Ltd",
        role: "Software Engineer",
        duration: "May 2022 – May 2025",
        tenure: "3+ Years",
        logo: {
            src: greenStoryLogo,
            alt: "Green Story logo",
        },
        technologies: [
            "Next.js",
            "ReactJS",
            "JavaScript",
            "TypeScript",
            "Strapi",
            "Shopify",
            "Redux",
            "REST APIs",
            "Jira",
            "Agile",
        ],
        points: [
            "Developed scalable web applications using Next.js, achieving a 20% increase in system performance.",
            "Built the company website enabling cross-platform compatibility across devices and browsers.",
            "Integrated client e-commerce portals and built Shopify widgets per client requirements.",
            "Collaborated with cross-functional teams to design and launch new features improving user engagement.",
            "Participated in Agile ceremonies including daily stand-ups and sprint planning.",
            "Managed support issues via Jira Board in alignment with client requests.",
        ],
    },
    {
        company: "Careator Technologies Pvt Ltd",
        role: "Software Engineer",
        duration: "Apr 2021 – Apr 2022",
        tenure: "1+ Year",
        logo: {
            src: careatorLogo,
            alt: "Careator logo",
        },
        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "ReactJS",
            "Angular",
            "REST APIs",
            "Google Maps API",
            "Git",
            "Windows Services",
        ],
        points: [
            "Developed web-based applications for financial and insurance systems.",
            "Built WAP portals and mobile apps for MMS and ringtone delivery with billing and tracking support.",
            "Integrated third-party tools including Google Maps, online payments, and multilingual features.",
            "Developed Windows services for automation and task scheduling.",
            "Implemented dynamic page generation and multiple reporting mechanisms.",
        ],
    },
];