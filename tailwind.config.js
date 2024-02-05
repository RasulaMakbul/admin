/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fea928",
        secondary: "#ed8900",
        'regal-blue': "#243c5a",
        'primaryBG': "1e28320d",
      },
      fontFamily: {
        'primary': ["Roboto", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",

        }
      }
    },
  },
  plugins: [],
}

