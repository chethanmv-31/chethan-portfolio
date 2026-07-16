export const DESIGN_SYSTEM = {
  colors: {
    primary: "#3B82F6",
    secondary: "#8B5CF6",

    background: "#09090B",
    surface: "#18181B",

    text: "#FAFAFA",
    muted: "#A1A1AA",

    border: "#27272A",

    success: "#22C55E",
    warning: "#F59E0B",
    danger: "#EF4444",
  },

  typography: {
    hero: "text-6xl font-bold tracking-tight",
    heading: "text-4xl font-semibold",
    subHeading: "text-2xl font-semibold",
    body: "text-base leading-7",
    caption: "text-sm",
  },

  spacing: {
    sectionY: "py-24",
    container: "max-w-7xl",
    content: "px-6",
  },

  radius: {
    button: "rounded-xl",
    card: "rounded-2xl",
    input: "rounded-xl",
  },

  animation: {
    duration: 0.4,
    easing: "easeInOut",
  },

  shadow: {
    card: "shadow-lg",
    button: "shadow-md",
  },
} as const;