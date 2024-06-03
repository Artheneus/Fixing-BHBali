/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanplie: "#00df9a",
        reds: "#FF0000",
      },
    },

    animation: {
      fade: "fadeOut 0.5s ease",
    },

    // that is actual animation
    keyframes: (theme) => ({
      fadeOut: {
        "0%": { backgroundColor: theme("colors.transparent") },
        "100%": { backgroundColor: theme("colors.black") },
      },
    }),
    fontFamily: {
      capito: ["capitolium-2", "serif"],
    },
    backdropBlur: {
      xs: "1px",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
