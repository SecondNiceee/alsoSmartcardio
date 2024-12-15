import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Или если используете директорию `src`:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "xs": "360px",
      "2xs" : "480px",
      "sm": "576px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1536px"
    },
    container: {
      "center": true,
      "screens": {
        "sm": "100%",
        "2xs" : "100%",
        "md": "100%",
        "lg": "100%",
        "xl": '1140px',
        "2xl": '1140px'
      },
      "padding" : '20px'
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addComponents({
        ".section": {
          "overflowX": 'clip',
          "maxWidth": "100vw"
        },
        ".p" : {
          "fontFamily" : "var(--font3)",
          "fontWeight" : "400",
          "fontSize" : "clamp(1.125rem, 1.056rem + 0.34vw, 1.375rem)",
          "lineHeight" : "175%",
          "textAlign" : "center",
          "color" : "#202020"
        },
        ".h2" : {
          "font-family" : "var(--third-family)",
          "font-weight" : "700",
          "font-size" : "clamp(1.563rem, 1.338rem + 1.12vw, 2.375rem)",
          "line-height" : "108%",
          "text-align" : "center",
          "color" : "black"
        }
      });
      addUtilities({
        ".white-shadow" : {
          "box-shadow" :  "0px 0px 8px 0px rgba(34, 60, 80, 0.2)"
        },
        ".black-shadow" : {
          "box-shadow": "0px 0px 8px 7px rgba(255, 255, 255, 0.1)",
          screen : {
            "md" : {
              "box-shadow": "0px 0px 8px 7px rgba(255, 255, 255, 0.4)"
            }
          }
        },
        ".p-container": {
          "padding-bottom": "clamp(1.563rem, 0.587rem + 4.88vw, 4.063rem)",
          "padding-top" : "clamp(1.563rem, 0.587rem + 4.88vw, 4.063rem)"
        },
        ".gap-containerGap": {
          "gap": "clamp(1.875rem, 1.53rem + 1.72vw, 3.125rem)"
        },
        ".smartcardio-slider-clamp":{
          "height" : "clamp(12.5rem, 7.012rem + 24.39vw, 25rem)"
        },
        ".green-shadow":{
          "box-shadow" : "4px 4px 250px 42px rgba(44, 11, 255, 0.5);"
        },
        ".feedbacks-slider-clamp":{
          "height" : "clamp(18.75rem, 12.981rem + 25.64vw, 31.25rem) !important;"
        },
        ".button-p":{
          "font-size" : "clamp(0.813rem, 0.692rem + 0.6vw, 1.25rem);"
        }
      });
    })
  ],
}