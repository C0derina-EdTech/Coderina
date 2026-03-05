/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
          mulish: ["Mulish", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          geist: ["Geist Mono", "monospace"],
          playfair: ["Playfair Display", "serif"],
          spacegrotesk: ["Space Grotesk", "sans-serif"],
          lato: ["Lato", "sans-serif"],
          sans: ["DM Sans", "sans-serif"],
          garamond: ["Cormorant Garamond", "serif"],
        },
      },
      screens: {
        "3xl": "1900px",
        "4xl": "2200px",
      },
    },
  },
  plugins: [],
};

export default config;
