/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        ping: "ping 1s infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": { opacity: "3" },
        },
      },
    },
  },
  plugins: [],
};
