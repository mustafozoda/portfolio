/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        phone: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        ultrawide: "1536px",
      },
    },

    extend: {
      // Custom Screens
      screens: {
        phone: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
        ultrawide: "1536px",
      },

      // Color Palette
      colors: {
        primary: "#6366f1",     // indigo-500
        secondary: "#f472b6",   // pink-400
        accent: "#22d3ee",      // cyan-400
        muted: "#94a3b8",       // slate-400
        background: "#f9fafb",  // light bg
        dark: "#181818",
        dark2: "#1F1F1F",
        light: "#ffffff",
        border: "#2B2B2B",
      },

      // Typography
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
        code: ["Fira Code", "monospace"],
      },

      // Border Radius
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },

      // Shadows
      boxShadow: {
        soft: "0 2px 12px rgba(0, 0, 0, 0.06)",
        smooth: "0 6px 20px rgba(0, 0, 0, 0.1)",
        shadowLeft: "-5px 0px 0px 0px rgba(0, 0, 0, 0.2)",
        glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
      },

      // Transitions & Animations
      transitionTimingFunction: {
        soft: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
