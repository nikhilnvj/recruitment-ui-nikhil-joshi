const path = require('path')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    path.join(__dirname, './src/App.vue'),
    path.join(__dirname, './src/components/**/*{html,vue}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

