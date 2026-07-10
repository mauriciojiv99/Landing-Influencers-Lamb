import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1280px",
    },
    extend: {
      colors: {
        gold: {
          DEFAULT: "#c59c40",
          alt: "#cc9a26",
          bright: "#f7cb5c",
        },
        dark: {
          DEFAULT: "#0b0b0b",
          card: "#151515",
          footer: "#111111",
        },
        cream: {
          DEFAULT: "#f3ede1",
          2: "#f3ede0",
        },
        steel: "#4a5565",
        grey: "#858484",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        display: ['"Playfair Display"', "serif"],
        heading: ['"Bebas Neue"', "sans-serif"],
        beachday: ["Beachday", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        content: "1200px",
      },
      animation: {
        "ticker-roll": "ticker-roll 32s linear infinite",
        "marquee-fwd": "marquee-fwd 24s linear infinite",
        "marquee-rev": "marquee-rev 24s linear infinite",
      },
      keyframes: {
        "ticker-roll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-fwd": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-rev": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [animations],
};
