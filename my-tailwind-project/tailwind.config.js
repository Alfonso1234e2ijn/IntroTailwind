// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#dafae7',
        customYellow: '#fef9c2',
        customOrange: '#ffe3e2',
        customWhite: '#f2f4f5',
        customBlue1: '#f2f4f5',
        customBlue2: '#e5e7ea',
        customBlue3: '#d1d4da',
        customBlue4: '#9ca2af',
        customButtonBlue: '#3a81f4',
        customButtonGreen: '#20c55d',
        customButtonRed: '#ee4544',
      },
      spacing: {
        '1.5': '1.5rem',
        '3': '3rem',
        '1': '1rem',
        '2': '2rem',
        '4': '4rem',
      },
    },
  },
  plugins: [],
}
