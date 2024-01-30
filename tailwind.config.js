/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "marineBlue": "hsl(213, 96%, 18%)",
        "purplishBlue": "hsl(243, 100%, 62%)",
        "pastelBlue": "hsl(228, 100%, 84%)",
        "lightBlue": "hsl(206, 94%, 87%)",
        "strawberryRed": "hsl(354, 84%, 57%)",

        "coolGray": "hsl(231, 11%, 63%)",
        "lightGray": "hsl(229, 24%, 87%)",
        "magnolia": "hsl(217, 100%, 97%)",
        "alabaster": "hsl(231, 100%, 99%)"
      },
      screens: {
        "sm": "320px",
        "md": "650px",
        "lg": "850px",
        "xl": "1280px"
      }
    },
  },
  plugins: [],
}

