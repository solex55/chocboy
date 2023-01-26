/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pat": "url('../src/assets/footer.png')",
        discover: "url('../src/assets/discover.png')",
        process: "url('../src/assets/process.png')",
        recipe: "url('../src/assets/recipe.png')",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#FBB040",
      },
    },
  },
  plugins: [],
};
