/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-break-1200": "1200px", // Custom screen size
      },
      colors: {
        background: "var(--background)", 
        foreground: "var(--foreground)", 
      },
    },
  },
  plugins: [],
};
