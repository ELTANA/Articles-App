/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      boxShadow: {
        nav: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;',
        'article-card': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
      }
    },
    fontFamily: {
      sans: ['Raleway']
    }
  },
  plugins: []
};
