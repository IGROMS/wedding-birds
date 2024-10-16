/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.astro",
  ],
  theme: {
    extend: {
      colors: {
        bg_ex: "#000000",
        bg_ew: "#000000",
        bg_cr: "#cd3030",
        bg_en: "#cd6630",
        bg_vu: "#cd9a00",
        bg_nt: "#006666",
        bg_lc: "#006666",
        font_lc: "#ffffff",
        font_nt: "#9acd9a",
        font_vu: "#ffffcd",
        font_en: "#ffcd9a",
        font_cr: "#ffcdcd",
        font_ew: "#ffffff",
        font_ex: "#cd3030",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
