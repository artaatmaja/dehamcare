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
        "12d": [
          "calc((12/var(--bw)*100vw))",
          { letterSpacing: "calc((0/var(--bw))*100vw)" },
        ],
        "13d": [
          "calc((13/var(--bw)*100vw))",
          { letterSpacing: "calc((0/var(--bw))*100vw)" },
        ],
        "20d": [
          "calc((20/var(--bw)*100vw))",
          { letterSpacing: "calc((-0.02*20/var(--bw))*100vw)" },
        ],
        "70d": [
          "calc((70/var(--bw)*100vw))",
          { letterSpacing: "calc((-0.05*70/var(--bw))*100vw)" },
        ],
        "136d": [
          "calc((136/var(--bw)*100vw))",
          { letterSpacing: "calc((-0.05*136/var(--bw))*100vw)" },
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
        "30d": "calc((30/var(--bw)*100vw))",
        "64d": "calc((64/var(--bw)*100vw))",
      },
      inset: {
        "125d": "calc((125/var(--bw)*100vh))",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: {
            opacity: 1,
          },
        },
      },
      lineHeight: {
        1.1: "1.1",
        1.2: "1.2",
        1.3: "1.3",
        1.4: "1.4",
      },
      margin: {
        "32d": "calc((32/var(--bw)*100vw))",
        "70d": "calc((70/var(--bw)*100vw))",
      },
      padding: {
        "16d": "calc((16/var(--bw)*100vw))",
        "40d": "calc((40/var(--bw)*100vw))",
        "60d": "calc((60/var(--bw)*100vw))",
        "79d": "calc((79/var(--bw)*100vw))",
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
