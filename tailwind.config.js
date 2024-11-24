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
          desaturatedRed: "hsl(0, 36%, 70%)",
          softRed: "hsl(0, 93%, 68%)"
        },
        'neutral-darkGrayishRed': "hsl(0, 6%, 24%)"
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
