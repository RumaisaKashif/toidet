// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Include your HTML files
    "./src/**/*.jsx" // Include your JSX/TSX files
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};

