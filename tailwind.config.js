const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        blink: "blink 1.4s both infinite",
      },
      blink: {
        "0%": { opacity: 0.2 },
        "20%": { opacity: 1 },
        "100%": { opacity: 0.2 },
      },
      colors: {
        "light-green": "#C4D1B9",
        "dark-green": "#1A4133",
        "light-ivory": "#EFEFEF",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        sans: ["var(--font-geist-sans)"],
      },
      fontSize: {
        "10d": [
          "calc((10/var(--bw)*100vw))",
          { letterSpacing: "calc((0/var(--bw))*100vw)" },
        ],
        "20d": [
          "calc((20/var(--bw)*100vw))",
          { letterSpacing: "calc((-0.02*20/var(--bw))*100vw)" },
        ],
      },
      gap: {
        "8d": "calc((8/var(--bw)*100vw))",
        "16d": "calc((16/var(--bw)*100vw))",
        "20d": "calc((20/var(--bw)*100vw))",
        "32d": "calc((32/var(--bw)*100vw))",
        "60d": "calc((60/var(--bw)*100vw))",
      },
      height: {
        "21d": "calc((21/var(--bw)*100vw))",
        "64d": "calc((64/var(--bw)*100vw))",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
      },
      padding: {
        "16d": "calc((16/var(--bw)*100vw))",
        "40d": "calc((40/var(--bw)*100vw))",
      },
      width: {
        "21d": "calc((21/var(--bw)*100vw))",
      },
      zIndex: {
        navbar: "9999",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
