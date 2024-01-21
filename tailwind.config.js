/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear 2s infinite alternate",
      },
    },
  },
  plugins: [],
};

