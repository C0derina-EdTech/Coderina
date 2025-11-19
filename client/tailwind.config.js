/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      Inter: ["Inter", "sans-serif"],
      Geist: ["Geist Mono", "monospace"],
      Playfair: ["Playfair Display", "serif"],
      SpaceGrotesk: ["Space Grotesk", "sans-serif"],
      Lato: ["Lato", "sans-serif"],
    },
    extend: {
      colors: {
        "coderina-accent": "#fdefd9",
        "coderina-blue": "#1a3a52",
        "coderina-bluee": "#0b1324",
        "coderina-dark": "#17171a",
        "coderina-primary": "#5b21b6",
      },
    },
  },
  plugins: [],
};
