/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-inner": "#1A212B",
        "bg-outer": "#13181E",
        secondary: "#008538",
        tertiary: "#FFFFFF",
        quaternary: "#FFC800",
        black: "#000000",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.2)",
        strong: "0 8px 30px rgba(0, 0, 0, 0.35)",
        gold: "0 0 32px rgba(255, 200, 0, 0.35)",
      },
      backgroundImage: {
        "radial-section": "radial-gradient(circle at 50% 40%, #1A212B 0%, #13181E 100%)",
      },
    },
  },
  plugins: [],
};
