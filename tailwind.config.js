/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#af0025',
          container: '#dd0031',
        },
        secondary: {
          DEFAULT: '#005faf',
        },
        tertiary: {
          DEFAULT: '#005e73',
        },
        surface: {
          DEFAULT: '#f8f9fa',
          bright: '#f8f9fa',
          dim: '#d9dadb',
          'container-lowest': '#ffffff',
          'container-low': '#f3f4f5',
          container: '#edeeef',
          'container-high': '#e7e8e9',
          'container-highest': '#e1e3e4',
        },
        on: {
          surface: '#191c1d',
          'surface-variant': '#5d3f3e',
        },
        outline: {
          DEFAULT: '#926e6d',
          variant: '#e7bcbb',
        }
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        headline: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #af0025, #dd0031)',
      },
      boxShadow: {
        'ambient': '0 20px 40px rgba(25, 28, 29, 0.06)',
      }
    },
  },
  plugins: [],
}
