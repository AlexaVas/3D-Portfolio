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
        background: {
          "0%": { background: "rgb(227, 217, 250)" },
          "40%": { background: "rgb(217, 217, 250)" },
          "80%": { background: "rgb(227, 217, 250)" },
          "100%": { background: "rgb(250, 217, 249)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s linear 2s infinite alternate",
        background: "background 4s none 0s infinite alternate",
      },
    },
  },
  plugins: [],
};

