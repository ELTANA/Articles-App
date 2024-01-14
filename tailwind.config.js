/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'article-card': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    },
    fontFamily: {
      sans: ['Raleway']
    }
  },
  plugins: []
};
