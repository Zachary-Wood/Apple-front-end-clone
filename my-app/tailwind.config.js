module.exports = {
  theme: {
    extend: {
      fontFamily: {
        apple: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      animation: {
        slide: 'slide 5s linear infinite', // Speed set to 5s
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }, // Move the entire container left
        },
      },
    },
  },
  plugins: [],
};




  