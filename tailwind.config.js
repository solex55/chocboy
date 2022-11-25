/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'footer-pat' : "url('../src/assets/footer.png')",
      }, 
      fontFamily: {
        'Poppins' : ['Poppins', 'sans-serif'],
      }
  },
  },
  plugins: [],
}