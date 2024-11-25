import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/App.jsx',
    './src/main.jsx',
    './src/components/**/*.{jsx,js}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          desaturatedRed: "rgb(179, 111, 111)", // hsl(0, 36%, 70%)
          softRed: "rgb(239, 85, 85)"          // hsl(0, 93%, 68%)
        },
        'neutral-darkGrayishRed': "rgb(61, 46, 46)" // hsl(0, 6%, 24%)
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        bgPatternDesktop: '/bg-pattern-desktop.svg',
        gradientLine1: 'linear-gradient(135deg, rgb(255, 255, 255), rgb(255, 250, 250))', // hsl(0, 0%, 100%), hsl(0, 100%, 98%)
        gradientLine2: 'linear-gradient(135deg, rgb(255, 204, 204), rgb(245, 153, 153))'  // hsl(0, 80%, 86%), hsl(0, 74%, 74%)
      },
    },
  },
  plugins: [],
}
