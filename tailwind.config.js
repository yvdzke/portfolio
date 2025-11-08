/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%": { transform: "rotate(6deg)" },
          "50%": { transform: "rotate(-6deg)" },
          "100%": { transform: "rotate(6deg)" },
        },
        borderMove: {
          "0%, 100%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(100%)" },
        },
        borderMoveReverse: {
          "0%, 100%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(-100%)" },
        },
        spinOnce: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        swing: "swing 1.5s ease-in-out infinite",
        borderMove: "borderMove 6s linear infinite",
        borderMoveReverse: "borderMoveReverse 6s linear infinite",
        spinOnce: "spinOnce 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
