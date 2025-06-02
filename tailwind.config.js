import plugin from "tailwindcss/plugin";

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
      xs: "360px",
      "2xs": "480px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1536px",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        "2xs": "100%",
        md: "100%",
        lg: "100%",
        xl: "1140px",
        "2xl": "1180px",
      },
      padding: "20px",
    },
    extend: {

      backgroundSize: {
        auto : "auto",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, theme }) {
      addComponents({
        ".button": {
          width: "100%",
          paddingTop: "11px",
          paddingBottom: "11px",
          paddingLeft: "14px",
          paddingRight: "14px",
          "@screen md": {
            paddingTop: "18px",
            paddingBottom: "18px",
          },
        },
        ".section": {
          overflowX: "clip",
          maxWidth: "100vw",
        },
        ".big-p": {
          fontFamily: "var(--font3)",
          fontWeight: "400",
          fontSize: "clamp(1.125rem, 1.038rem + 0.38vw, 1.313rem)",
          lineHeight: "175%",
          textAlign: "center",
          color: "#202020",
        },
        ".mid-title": {
          fontWeight: "400",
          lineHeight: "175%",
          textAlign: "center",
          color: "white",
          fontSize: "clamp(1.188rem, 0.902rem + 1.43vw, 2.188rem)",
        },
        ".sub-title": {
          fontFamily: "var(--font3)",
          fontWeight: "500",
          fontSize: "clamp(1.125rem, 0.981rem + 0.64vw, 1.438rem)",
          lineHeight: "175%",
          textAlign: "center",
          color: "#202020",
        },
        ".p": {
          fontFamily: "var(--font3)",
          fontWeight: "400",
          fontSize: "18px",
          lineHeight: "175%",
          textAlign: "center",
          color: "#202020",
        },
        ".h2": {
          fontFamily: "var(--third-family)",
          fontWeight: "700",
          fontSize: "clamp(1.563rem, 1.338rem + 1.12vw, 2.375rem)",
          lineHeight: "108%",
          textAlign: "center",
          color: "black",
        },
      });
      addUtilities({
        // ".bg-footerImage" : {
        //   ""
        // },
        ".productPage-sliderImage-height" : {
          "height" : "clamp(18.75rem, 12.629rem + 25.77vw, 25rem)"
        },

        ".text-grey" : {
          color : "grey"
        },
        ".grid-gap": {
          gap: "clamp(0.625rem, -4.536rem + 10.75vw, 3.125rem)",
        },
        ".scale-hover": {
          transition: "0.4s",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
        ".gradient-hover": {
          transition: "0.4s",
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            left: "-100%",
            transition: "0.5s",
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, #40f 0%, #ff00d9 100%)",
            zIndex: "2",
          },
          "&:hover": {
            scale: "1.1",
            "&::after": {
              left: "0",
            },
          },
          "& p": {
            position: "relative",
            zIndex: "20",
          },
        },
        ".white-shadow": {
          boxShadow: "0px 0px 8px 0px rgba(34, 60, 80, 0.2)",
        },
        ".black-shadow": {
          boxShadow: "0px 0px 8px 7px rgba(255, 255, 255, 0.2)",
          screen: {
            md: {
              boxShadow: "0px 0px 8px 7px rgba(255, 255, 255, 0.5)",
            },
          },
        },
        ".p-container": {
          paddingBottom: "clamp(1.25rem, 0.625rem + 3.6vw, 3.125rem)",
          paddingTop: "clamp(1.25rem, 0.625rem + 3.6vw, 3.125rem);",
        },
        ".gap-containerGap": {
          gap: "clamp(1.875rem, 1.53rem + 1.72vw, 3.125rem)",
        },
        ".smartcardio-slider-clamp": {
          height: "clamp(12.5rem, 7.012rem + 24.39vw, 25rem)",
        },
        ".green-shadow": {
          boxShadow: "4px 4px 250px 42px rgba(44, 11, 255, 0.5)",
        },
        ".feedbacks-slider-clamp": {
          height: "clamp(18.75rem, 12.981rem + 25.64vw, 31.25rem) !important",
        },
        ".button-p": {
          fontSize: "clamp(0.813rem, 0.639rem + 0.77vw, 1.188rem)",
          fontWeight: "600",
        },
        ".icon-height": {
          height: "clamp(6.25rem, 4.808rem + 6.41vw, 9.375rem)",
        },
        ".bg-liner": {
          background: "linear-gradient(90deg, #40f 0%, #ff00d9 100%)",
        },
      });
    }),
  ],
};
