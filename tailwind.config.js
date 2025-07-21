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
      },
      animation: {
        glimmer: "glimmer 3s linear infinite",
      },
      backgroundSize: {
        glimmer: "400% 100%",
      },
    },
  },
  plugins: [],
};
