/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    colors: {
      oasis: {
        50: '#f3f8f8',
        100: '#e1eaec',
        200: '#c6d7db',
        300: '#9ebbc2',
        400: '#6e97a2',
        500: '#537b87',
        600: '#486772',
        700: '#415963',
        800: '#394951',
        900: '#334046',
      },
    },
  },
  plugins: [],
}
