// const scrollbarHide = require('tailwind-scrollbar-hide');


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//   "./components/**/*.{js,ts,jsx,tsx,mdx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require(tailwind-scrollbarHide)
//   ],
// }

const scrollbarHide = require('tailwind-scrollbar-hide');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    scrollbarHide // Pass the plugin function directly
  ],
};
