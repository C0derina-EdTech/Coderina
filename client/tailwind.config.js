/** @type {import('tailwindcss').Config} */
const config = {
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
      sans: ['Inter', 'Proxima Nova', 'system-ui', 'sans-serif'],
    },
    extend: {
      screens: {
        "3xl": "1900px",
        "4xl": "2200px",
      },
     
    },
  },
  plugins: [],
};

export default config;
