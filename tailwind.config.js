/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "right-to-left": {
          from: {
            transform: "translateX(100px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
         "left-to-right": {
          from: {
            transform: "translateX(-100px)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
     },
      animation: {
        "to-left": "right-to-left 700ms",
        "to-right": "left-to-right 700ms"
      },
    },
  },
  plugins: [],
};
