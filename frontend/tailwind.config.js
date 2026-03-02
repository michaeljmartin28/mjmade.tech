// tailwind.config.js

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surfaceAlt: "rgb(var(--color-surface-alt) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",

        text: "rgb(var(--color-text) / <alpha-value>)",
        textMuted: "rgb(var(--color-text-muted) / <alpha-value>)",

        primary: "rgb(var(--color-primary) / <alpha-value>)",
        primaryFg: "rgb(var(--color-primary-foreground) / <alpha-value>)",

        accent: "rgb(var(--color-accent) / <alpha-value>)",

        success: "rgb(var(--color-success) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
