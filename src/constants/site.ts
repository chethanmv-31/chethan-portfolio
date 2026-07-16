export const SITE_CONFIG = {
  // Basic Information
  name: "Chethan MV",
  shortName: "Chethan",

  title: "Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web applications.",

  url: "https://chethanmv.dev", // Update after buying domain

  email: "chethan.makodu@gmail.com",

  phone: "",

  location: "Bangalore, Karnataka, India",

  availability: "Available for Freelance",

  // SEO
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Portfolio",
  ],

  // Social Links
  social: {
    github: "https://github.com/chethanmv-31",
    linkedin: "https://www.linkedin.com/in/chethan-m-v-655b2b172/",
    twitter: "",
    instagram: "",
    medium: "",
  },

  // Resume
  resume: "/resume.pdf",

  // Profile Image
  profileImage: "/images/profile.png",

  // Hero
  hero: {
    greeting: "Hi, I'm",
    heading: "Chethan MV",
    subHeading: "Frontend Engineer",
    description:
      "I build fast, scalable and user-friendly web applications using React, Next.js and TypeScript.",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;