export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: 'blob 10s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(50px, -80px) scale(1.2)',
          },
          '50%': {
            transform: 'translate(0, 120px) scale(0.8)',
          },
          '75%': {
            transform: 'translate(-80px, -40px) scale(1.3)',
          },
        },
      },
      fontFamily: {
        Tiro: ["Tiro Bangla Italic", "sans-serif"],
        SairaBold: ["Saira-SemiBold", "sans-serif"],
      },
      transitionProperty: {
        'height': 'height'
      },
    },
  },
  plugins: [],
};
