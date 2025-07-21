/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        glimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        glimmer: "glimmer 3s linear infinite",
        blink: "blink 0.75s step-end infinite",
      },
      backgroundSize: {
        glimmer: "400% 100%",
      },
    },
  },
  plugins: [],
};
