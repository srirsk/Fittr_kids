/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand Colors from Guidelines
        brand: {
          red: {
            500: '#E43F3F',
            400: '#E86060',
            300: '#F29191',
            200: '#FACDC0',
            100: '#FFF2F2'
          },
          orange: {
            500: '#FF8A00',
            400: '#FFB866',
            300: '#FFCF99',
            200: '#FFE7CC',
            100: '#FFF8F0'
          },
          green: {
            500: '#11A663',
            400: '#2BAD73',
            300: '#68C298',
            200: '#A8E0C7',
            100: '#E5FFF4'
          },
          blue: {
            500: '#0271D9',
            400: '#348EE3',
            300: '#6FB0ED',
            200: '#AAD3F7',
            100: '#F2F9FF'
          }
        }
      }
    },
  },
  plugins: [],
};
