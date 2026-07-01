export const COLORS = {
  // Primary Brand Colors
  primary: "#1E40AF",        // Deep Royal Blue
  secondary: "#3B82F6",      // Bright Tech Blue
  accent: "#06B6D4",         // Electric Cyan

  // Backgrounds
  background: "#FFFFFF",     // Main Background
  backgroundAlt: "#F8FAFC",  // Section Background
  backgroundDark: "#0F172A", // Midnight Navy

  // Text
  text: {
    primary: "#0F172A",
    secondary: "#475569",
    muted: "#94A3B8",
    white: "#FFFFFF",
  },

  // Borders
  border: "#E2E8F0",
  borderDark: "#334155",

  // Status Colors
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
  info: "#0EA5E9",

  // Gradients
  gradient: {
    primary: "linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)",
    cyan: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)",
    hero: "linear-gradient(135deg, #0F172A 0%, #1E40AF 55%, #06B6D4 100%)",
  },

  // Shadows
  shadow: {
    sm: "0 2px 8px rgba(30, 64, 175, 0.08)",
    md: "0 8px 24px rgba(30, 64, 175, 0.15)",
    lg: "0 20px 50px rgba(30, 64, 175, 0.2)",
    glow: "0 0 30px rgba(6, 182, 212, 0.4)",
  },
} as const;

export default COLORS;