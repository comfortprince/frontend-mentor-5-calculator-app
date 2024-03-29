/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      // Theme 1

      // Backgrounds
      "m-very-dark-desaturated-blue" : "hsl(222, 26%, 31%)",
      "tk-very-dark-desaturated-blue" : "hsl(223, 31%, 20%)",
      "s-very-dark-desaturated-blue" : "hsl(224, 36%, 15%)",

      // Keys
      "kbg-desaturated-dark-blue" : "hsl(225, 21%, 49%)",
      "kbg-light-desaturated-dark-blue" : "hsl(225, 21%, 55%)",
      "kshdw-desaturated-dark-blue" : "hsl(224, 28%, 35%)",

      "red" : "hsl(6, 63%, 50%)",
      "light-red" : "hsl(6, 63%, 55%)",
      "dark-red" : "hsl(6, 70%, 34%)",

      "light-grayish-orange" : "hsl(30, 25%, 89%)",
      "lighter-grayish-orange" : "hsl(30, 25%, 96%)",
      "grayish-orange" : "hsl(28, 16%, 65%)",

      // Text
      "very-dark-grayish-blue" : "hsl(221, 14%, 31%)",
      "white" : "hsl(0, 0%, 100%)",

      // Theme 2

      // Backgrounds
      "light-gray" : "hsl(0, 0%, 90%)",
      "grayish-red" : "hsl(0, 5%, 81%)",
      "very-light-gray" : "hsl(0, 0%, 93%)",

      // Keys
      "dark-moderate-cyan" : "hsl(185, 42%, 37%)",
      "light-moderate-cyan" : "hsl(185, 42%, 43%)",
      "very-dark-cyan" : "hsl(185, 58%, 25%)",

      "orange" : "hsl(25, 98%, 40%)",
      "light-orange" : "hsl(25, 98%, 45%)",
      "dark-orange" : "hsl(25, 99%, 27%)",

      "light-grayish-yellow" : "hsl(45, 7%, 89%)",
      "lighter-grayish-yellow" : "hsl(45, 7%, 96%)",
      "dark-grayish-orange" : "hsl(35, 11%, 61%)",

      // Text
      "very-dark-grayish-yellow": "hsl(60, 10%, 19%)",
      "white" : "hsl(0, 0%, 100%)",

      // Theme 3

      // Backgrounds
      "m-very-dark-violet" : "hsl(268, 75%, 9%)",
      "tkpscr-very-dark-violet" : "hsl(268, 71%, 12%)",

      // Keys
      "dark-violet" : "hsl(281, 89%, 26%)",
      "light-violet" : "hsl(281, 89%, 32%)",
      "vivid-magenta" : "hsl(285, 91%, 52%)",

      "pure-cyan" : "hsl(176, 100%, 44%)",
      "light-pure-cyan" : "hsl(176, 100%, 52%)",
      "soft-cyan" : "hsl(177, 92%, 70%)",

      "very-dark-violet" : "hsl(268, 47%, 21%)",
      "slightly-light-dark-violet" : "hsl(268, 47%, 41%)",
      "dark-magenta" : "hsl(290, 70%, 36%)",

      // Text
      "light-yellow" : "hsl(52, 100%, 62%)",
      "very-dark-blue": "hsl(198, 20%, 13%)",
      "white" : "hsl(0, 0%, 100%)"

      // Shadow
    },
    extend: {
      fontSize : {
        "xxs" : "0.3rem"
      },
      width : {
        "1.75" : "0.4375rem",
        "key-shadow-width" : "3px"
      },
      height : {
        "1.75" : "0.4375rem"
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('theme-1', '&[data-theme="theme-1"]')
      addVariant('theme-2', '&[data-theme="theme-2"]')
      addVariant('theme-3', '&[data-theme="theme-3"]')
    })
  ],
}

