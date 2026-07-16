export const DESIGN_SYSTEM = {
  brand: {
    name: "Chethan MV",
    tagline: "Frontend Engineer",
  },

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

  layout: {
    container: "1280px",
    sectionSpacing: "120px",
    maxContentWidth: "900px",
  },

  animation: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,

    easing: "easeInOut",
  },

  transition: {
    default: "all 0.3s ease",
  },

  zIndex: {
    navbar: 50,
    modal: 100,
    tooltip: 200,
  },

  blur: {
    navbar: "12px",
    card: "20px",
  },
} as const;