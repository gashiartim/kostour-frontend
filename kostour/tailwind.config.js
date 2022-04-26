const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/lib/context/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      black: "#000000",
      white: "#FFFFFF",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      colors: {
        darkGray: "#3C3C3C",
        footer: "#f2f2f2",
        "footer-dark": "#3C3C3C",
        darkBlue: "#3659E3",
        disabled: "#C2C2C2",
        faded: "#CFCFCF",
        label: "#36454C",
      },

      spacing: {
        2.2: "0.563rem",
      },
      height: {
        "10/11": "90vh",
        full: "100%",
        "card-photo": "177px",
        460: "460px",
        600: "600px",
        34: "136px",
        90: "332px",
        92: "370px",
        17: "72px",
        small: "90px",
      },
      container: {
        center: true,
        screens: {
          sm: "600px",
          md: "728px",
          lg: "900px",
          xl: "1224px",
          xxl: "1450px",
          "2xl": "1440px",
        },
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "900px",
        xl: "1224px",
        xxl: "1450px",
        "2xl": "1440px",
      },

      maxHeight: {
        "80vh": "80vh",
        "75vh": "75vh",
        0: "0",
        "card-height": "340px",
        "card-photo": "177px",
        600: "600px",
      },

      width: {
        600: "600px",
        smInput: "11.5rem",
        mdInput: "24.4rem",
        medInput: "24.4rem",
        md: "180px",
        17: "72px",
        medium: "288px",
        lMedium: "293px",
      },
      minHeight: {
        "desktop-card-height": "350px",
        "card-photo": "177px",
        "20%": "20%",
        smallFooter: "77px",
        bigInput: "300px",
      },
      minWidth: {
        "20%": "20%",
        "1/2": "50%",
        20: "400px",
        "mobile-card-listview-width": "200px",
        "mobile-card-width": "310px",
        94: "294px",
        "desktop-card-width": "288px",
        smInput: "11.5rem",
        inputSize: "288px",
        medInput: "225px",
        "3/4": "75%",
      },
      fill: {
        gray: "rgba(0, 0, 0, 0.4)",
      },
      maxWidth: {
        "9/10": "90%",
        largeScreen: "1224px",
        32: "200px",
        inputWidth: "288px",
        "mobile-card-width": "318px",
        "desktop-card-width": "288px",
        readable: "25ch",
        "sm-text": "20ch",
        28: "7rem",
        94: "18.375rem",
        600: "600px",
        "4.2xl": "912px",
      },
      spacing: {
        2.2: "0.563rem",
      },

      borderRadius: {
        18: "18px",
        16: "16px",
        med: "0.625rem",
        "4xl": "6rem",
        2: "10px",
        2.5: "16px",
        3: "20px",
        60: "3.75rem",
        "2xl": "3rem",
        "20px": "1.25rem",
        "60px": "3.75rem",
        12: "12px",
        half: "50%",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        28: "1.75rem",
      },
      backgroundColor: {
        disabled: "#C2C2C2",
      },
      padding: {
        3.5: "15px",
        2.5: "10px",
        lgpadding: "108px",
      },
      left: {
        "4/5": "-80%",
      },
      zIndex: {
        "-1": "-1",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const headers = {
        ".h1": {
          fontSize: "48px",
          lineHeight: "51px",
          color: "#3C3C3C",
          textAlign: "center",
          fontWeight: "bold",
        },
        ".h2": {
          fontSize: "18px",
          lineHeight: "22px",
          fontWeight: "bold",
          color: "#3C3C3C",
        },
        ".header": {
          fontSize: "28px",
          lineHeight: "34px",
          fontWeight: "bold",
          textAlign: "center",
        },
        ".grow": {
          cursor: "pointer",
          "transition-property": "all",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms",
          "&:hover": {
            transform: "scale(1.03)",
            "box-shadow": "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
          },
        },
      };
      addComponents(headers);
    }),
  ],
};