module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'class', // Enable dark mode
    theme: {
      extend: {
        fontFamily: {
          aeonik: ['Aeonik', 'sans-serif'], // Add Aeonik as a custom font
        },
      },
    },
    variants: {
      extend: {
        backgroundColor: ['dark'],
        textColor: ['dark'],
      },
    },
    plugins: [],
  };