/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
     
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        color: "var(--foreground)",
        texthover: "var(--foreground)",
        textC: "var(--text)",
        socialT: "var(--socialT)",
        social: "var(--social)",
        color2:"var(--color2)",
      },
    },
  },
  plugins: [],
};
